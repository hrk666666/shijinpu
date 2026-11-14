package com.fqapp.fqapp

import android.content.Context
import android.os.Handler
import android.os.Looper
import com.xiaomi.xms.wearable.Wearable
import com.xiaomi.xms.wearable.auth.Permission
import com.xiaomi.xms.wearable.message.OnMessageReceivedListener
import com.xiaomi.xms.wearable.node.Node
import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import org.json.JSONObject

/**
 * 手环传书桥（小米穿戴 SDK / xms-wearable）。
 *
 * 通道：
 * - `fqapp/band-book`：connect / send / disconnect / appInstalled / probe
 * - `fqapp/band-book/events`：手环端下发的 JSON 消息（单条 String）
 *
 * 协议本身（握手 `__hs__`、`file` 命令集、10KB 分片与流控）在 Dart 侧
 * `lib/services/band_book/` 实现，这里只做 Binder 转发，避免两份状态机。
 *
 * 链路控制帧：EventChannel 上偶尔会出现 `tag = "__link__"` 的保留帧，
 * 它不是业务消息，而是平台侧对链路状态的判断（发送失败、节点掉线等），
 * Dart 侧据此触发重连。保留 tag 与手环端协议不冲突。
 *
 * 约束（SDK 硬性要求）：手环快应用的包名与签名必须与本 App 完全一致，
 * 否则 `launchWearApp` 会抛 AppNotInstalledException / 签名校验失败。
 * 因此手环端必须安装用同一 keystore 重签的配套 rpk，详见
 * `tools/band_book/README.md`。
 */
class BandBookPlugin : FlutterPlugin, MethodChannel.MethodCallHandler, EventChannel.StreamHandler {
    private lateinit var context: Context
    private var methods: MethodChannel? = null
    private var events: EventChannel? = null
    private var sink: EventChannel.EventSink? = null
    private var node: Node? = null
    private var listeningNodeId: String? = null
    private val main = Handler(Looper.getMainLooper())

    private val onMessage = OnMessageReceivedListener { _, payload ->
        // SDK 回调线程不保证是主线程，EventSink 必须在主线程使用。
        val text = String(payload, Charsets.UTF_8)
        main.post { sink?.success(text) }
    }

    override fun onAttachedToEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        context = binding.applicationContext
        methods = MethodChannel(binding.binaryMessenger, "fqapp/band-book").also {
            it.setMethodCallHandler(this)
        }
        events = EventChannel(binding.binaryMessenger, "fqapp/band-book/events").also {
            it.setStreamHandler(this)
        }
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        methods?.setMethodCallHandler(null)
        events?.setStreamHandler(null)
        methods = null
        events = null
        sink = null
        detachListener()
    }

    override fun onListen(arguments: Any?, events: EventChannel.EventSink?) {
        sink = events
    }

    override fun onCancel(arguments: Any?) {
        sink = null
    }

    override fun onMethodCall(call: MethodCall, result: MethodChannel.Result) {
        when (call.method) {
            "connect" -> connect(result)
            "send" -> {
                val text = call.argument<String>("message")
                if (text == null) {
                    result.error("bad_args", "缺少 message", null)
                } else {
                    send(text, result)
                }
            }
            "disconnect" -> {
                detachListener()
                node = null
                result.success(null)
            }
            "probe" -> probe(result)
            "appInstalled" -> {
                val current = node
                if (current == null) {
                    result.error("no_node", "尚未连接手环", null)
                    return
                }
                Wearable.getNodeApi(context).isWearAppInstalled(current.id)
                    .addOnSuccessListener { result.success(it) }
                    .addOnFailureListener { result.error("check_failed", it.message, null) }
            }
            else -> result.notImplemented()
        }
    }

    /**
     * 幂等连接：已绑定且设备仍在连接列表里就直接复用。
     *
     * 重连本质上只需要重新挂监听 + 重新握手，不该每次把用户手环上的
     * 页面顶到前台；只有首次连接或设备换了才真的 launchWearApp。
     */
    private fun connect(result: MethodChannel.Result) {
        val bound = node
        if (bound != null) {
            Wearable.getNodeApi(context).connectedNodes
                .addOnSuccessListener { nodes ->
                    val stillThere = nodes?.any { it.id == bound.id } == true
                    if (stillThere) {
                        attachListener(bound.id)
                        result.success(mapOf("id" to bound.id, "name" to bound.name))
                    } else {
                        detachListener()
                        node = null
                        pickAndLaunch(result)
                    }
                }
                .addOnFailureListener {
                    // 读列表失败不代表设备掉了，先按已绑定继续，让握手去判断。
                    attachListener(bound.id)
                    result.success(mapOf("id" to bound.id, "name" to bound.name))
                }
            return
        }
        pickAndLaunch(result)
    }

    private fun pickAndLaunch(result: MethodChannel.Result) {
        Wearable.getNodeApi(context).connectedNodes
            .addOnSuccessListener { nodes ->
                if (nodes.isNullOrEmpty()) {
                    result.error("no_device", "未找到已连接的手环，请先用小米运动健康连上手环", null)
                    return@addOnSuccessListener
                }
                val target = nodes[0]
                // 时序对齐弦电子书手机端：先把「手环端」拉起来，等它站稳
                // （约 0.3s），再询问授权。先弹授权时手环端还没醒，用户在
                // 手环上点「允许」的窗口期容易错过。
                launchApp(target, result)
            }
            .addOnFailureListener {
                result.error("node_failed", "读取设备列表失败：请确认已安装小米运动健康并保持后台运行", null)
            }
    }

    /** 请求 DEVICE_MANAGER（与手环快应用互发的必需权限）。 */
    private fun ensurePermission(target: Node, done: (Boolean) -> Unit) {
        val auth = Wearable.getAuthApi(context)
        val permissions = arrayOf<Permission?>(Permission.DEVICE_MANAGER)
        auth.checkPermissions(target.id, permissions)
            .addOnSuccessListener { granted ->
                if (granted != null && granted.isNotEmpty() && granted[0]) {
                    done(true)
                    return@addOnSuccessListener
                }
                auth.requestPermission(target.id, Permission.DEVICE_MANAGER)
                    .addOnSuccessListener { done(true) }
                    .addOnFailureListener { done(false) }
            }
            .addOnFailureListener { done(false) }
    }

    private fun launchApp(target: Node, result: MethodChannel.Result) {
        val nodeApi = Wearable.getNodeApi(context)
        nodeApi.isWearAppInstalled(target.id)
            .addOnSuccessListener { installed ->
                if (!installed) {
                    result.error(
                        "app_missing",
                        "手环上未安装配套的页屿手环端（包名/签名需与本应用一致）",
                        null,
                    )
                    return@addOnSuccessListener
                }
                // 手环端的接收页由弦电子书提供：/pages/push。
                nodeApi.launchWearApp(target.id, "/pages/push")
                    .addOnSuccessListener {
                        // 先启动手环端，等约 0.3s 让它把接收页立起来，再询问
                        // 授权——顺序反了用户在手环上确认时弹窗还没准备好。
                        android.os.Handler(android.os.Looper.getMainLooper()).postDelayed({
                            ensurePermission(target) { granted ->
                                if (!granted) {
                                    result.error("auth_denied", "手环授权被拒绝，请在小米运动健康里允许本应用", null)
                                    return@ensurePermission
                                }
                                node = target
                                attachListener(target.id)
                                result.success(mapOf("id" to target.id, "name" to target.name))
                            }
                        }, 300)
                    }
                    .addOnFailureListener { error ->
                        result.error("launch_failed", "打开手环端失败：${error.message}", null)
                    }
            }
            .addOnFailureListener { error ->
                result.error("check_failed", "检查手环应用失败：${error.message}", null)
            }
    }

    /** 链路探活：仅供 Dart 侧的空闲看门狗兜底确认。 */
    private fun probe(result: MethodChannel.Result) {
        val current = node
        if (current == null) {
            result.success(false)
            return
        }
        Wearable.getNodeApi(context).connectedNodes
            .addOnSuccessListener { nodes ->
                val alive = nodes?.any { it.id == current.id } == true
                if (!alive) {
                    detachListener()
                    node = null
                }
                result.success(alive)
            }
            .addOnFailureListener { result.success(false) }
    }

    private fun attachListener(nodeId: String) {
        if (listeningNodeId == nodeId) return
        detachListener()
        Wearable.getMessageApi(context).addListener(nodeId, onMessage)
            .addOnSuccessListener { listeningNodeId = nodeId }
            .addOnFailureListener { }
    }

    private fun detachListener() {
        val id = listeningNodeId ?: return
        listeningNodeId = null
        Wearable.getMessageApi(context).removeListener(id)
    }

    private fun send(text: String, result: MethodChannel.Result) {
        val current = node
        if (current == null) {
            result.error("no_node", "尚未连接手环", null)
            return
        }
        Wearable.getMessageApi(context).sendMessage(current.id, text.toByteArray(Charsets.UTF_8))
            .addOnSuccessListener { result.success(null) }
            .addOnFailureListener { error ->
                // 一条消息发不出去通常意味着节点已经掉了：主动告诉 Dart 侧重连，
                // 而不是让它在 25s 分片超时里干等。
                val current2 = node
                if (current2 != null) {
                    detachListener()
                    node = null
                }
                emitLinkBroken(error.message ?: "send_failed")
                result.error("send_failed", error.message, null)
            }
    }

    /** 向 Dart 侧投递一条链路控制帧（tag 为保留名，不会与手环协议冲突）。 */
    private fun emitLinkBroken(reason: String) {
        val frame = JSONObject()
            .put("tag", "__link__")
            .put("event", "broken")
            .put("reason", reason)
            .toString()
        main.post { sink?.success(frame) }
    }
}
