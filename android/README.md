# 什锦铺 · Android

Material 3 小说阅读器，单 Activity + 单 WebView 的本地套壳，**不启动任何本地 HTTP 服务**。

## 安装

从 Releases 下载 `shijinpu-1.0.apk`，传到手机点击安装（需在系统里允许「安装未知应用」）。

- 最低 Android 7.0（API 24），targetSdk 34
- 体积 5.5 MB，可离线使用
- 包名 `com.shijinpu.reader`

## 实现要点

| 事项 | 做法 |
| --- | --- |
| 资源加载 | `WebViewAssetLoader` 把 `assets/` 映射到 `https://appassets.androidplatform.net/assets/`，因此是正常的 https 源 |
| 为什么不用 `file://` | targetSdk 30 起 WebView 会忽略 `setAllowFileAccessFromFileURLs`，file:// 下 localStorage 与 Canvas 取色都会被判跨源失败 |
| 正文读取 | 章节以 `<script>` 注入（`assets/assets/data/ch-*.js` 挂到 `window.__CH`），规避 fetch 的同源限制 |
| 返回键 | 先调用网页路由 `router.pop()`，栈空时切回首页 Tab，再空则退出 |
| 状态栏 | JS 桥 `AndroidShell.chrome(hex, lightIcons)`，随页面主题色同步状态栏与导航栏底色 |
| 交互隔离 | 禁用文件访问与内容访问，外链一律交给系统浏览器 |

## 目录

```
android/
├── gradlew / gradlew.bat / gradle/wrapper/    Gradle 8.11.1 wrapper
├── settings.gradle / build.gradle / gradle.properties
├── app/
│   ├── build.gradle               compileSdk 34 / minSdk 24，R8 混淆 + 资源压缩
│   ├── proguard-rules.pro         保留 @JavascriptInterface 方法
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── java/com/shijinpu/reader/MainActivity.java
│       ├── res/                   图标、主题（含 values-v27 深色导航栏图标）
│       └── assets/                index.html / css / js / assets（书库与正文）
```

## 签名

仓库不含 keystore。两种方式：

**A. 用 keystore.properties（推荐）**

```properties
# app/keystore.properties
storeFile=release.jks
storePassword=你的口令
keyAlias=你的别名
keyPassword=你的口令
```

**B. 直接丢文件**

把 `shijinpu.jks` 放到 `app/` 下，口令默认取 `shijinpu`。

都没有时构建会自动跳过签名，产出 `app-release-unsigned.apk`，不会中断。

## 重新构建

```bash
export ANDROID_HOME=/path/to/android-sdk
./gradlew :app:assembleRelease
# 产物：app/build/outputs/apk/release/app-release.apk
```

或用 Android Studio 直接打开本目录。

> wrapper 默认从 `services.gradle.org` 拉分发，国内可把
> `gradle/wrapper/gradle-wrapper.properties` 的 `distributionUrl` 换成镜像地址。

网页部分改动后，回到 `../web` 执行 `python3 build.py`，再把 `dist/` 里的
`index.html`、`css/`、`js/`、`assets/` 覆盖到 `app/src/main/assets/`。

## 已知限制

- 书库为抓取快照：240 本书目 + 2 本全文（《重生2006，豆包成了我的外挂》92 章、《爆红从报警开始》540 章），其余书目只展示元数据与封面。
- 听书与短剧是界面演示，不含真实音频/视频流。
- 未适配横屏双栏，横屏下按放大的手机布局显示。
