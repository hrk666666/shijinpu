# 页屿 · Yeyu Reader

小说阅读器 **页屿**（Yeyu Reader，Android / Flutter，包名 `com.yeyu.reader`）的开源组件仓。开发者 **hrk_**。

## 本仓内容

| 路径 | 内容 |
| --- | --- |
| [`update.json`](update.json) | App 启动拉取的**更新检查 / 公告**单文件，字段说明见 [update.json.README.md](update.json.README.md) |
| [`band_protocol/`](band_protocol/) | 手环传书**协议**（[PROTOCOL.md](band_protocol/PROTOCOL.md)）与双端源码：`phone/` 手机侧 Dart、`kotlin/` Android 桥（小米穿戴 SDK） |
| `fetcher/` `web/` `android/` | 旧「什锦铺」Web 套件（遗留，见文末） |

手环端（VelaOS 快应用 rpk）源码在独立仓库 [hrk666666/yeyu-band](https://github.com/hrk666666/yeyu-band)，按 o66 / n67 / band / rw / p67 / o62 六机型分支维护。

## 更新检查与下载

App 启动时拉取本仓 `update.json`（设置可关），拉取走 GitHub 镜像测速优选。有新版时**不从 GitHub 下载 APK**，而是引导用户跳转 `latest.url` —— 该链接在 update.json 里**自定义**（网盘 / 落地页皆可，由发布者配置）。

**本仓不发 GitHub Release。** 安装包请以 `latest.url` 指向的自定义链接为准。

## 协议

手环与手机之间按 `band_protocol/PROTOCOL.md` 传递：`__hs__` 三段握手、10KB 分片与流控、文件命令集（传书/删书/章节目录/存储查询）、阅读进度与阅读时长双向同步。SDK 硬约束：手机 APK 与手环 rpk 须**同包名同签名**。

---

## 附：什锦铺 Web 套件（遗留）

以下 `fetcher/` `web/` `android/` 是前代「什锦铺」的纯 Web 重写版：把 [ch6vip/fqapp](https://github.com/ch6vip/fqapp) 的页面层级与信息架构，用 **纯 Web 重写为 Material Design 3** 的可交互阅读器，并封装成离线可用的 Android 应用。现行页屿 App 已改用 Flutter 原生实现，本部分仅作存档。

不发一个 HTTP 请求，不起一个本地服务器 —— 发行版是单个 IIFE + 脚本注入的正文，`file://` 直接可用。

```
┌──────────────────────────────────────────────────────────┐
│  fetcher/        Python 抓取与 EPUB 3 打包                │
│      ↓  产出书库 JSON + 封面 + 正文                       │
│  web/            MD3 前端（HTML/CSS/JS，零框架）           │
│      ↓  build.py 打包成 dist/                            │
│  android/        WebView 套壳，assets/ 内嵌全部资源        │
└──────────────────────────────────────────────────────────┘
```

| 目录 | 内容 | 技术栈 |
| --- | --- | --- |
| [`fetcher/`](fetcher/) | 批量发现 → 抓取 → 生成带完整元数据与封面的 EPUB 3 | Python 3，无第三方依赖 |
| [`web/`](web/) | Material 3 界面、路由栈、阅读器、书架、取色主题 | 原生 HTML/CSS/JS + esbuild |
| [`android/`](android/) | 单 Activity + 单 WebView 套壳，`WebViewAssetLoader` | Java 17 / AGP 8.7 / SDK 34 |

### 前端要点

Material 3 不是换个圆角就完事。这里逐项对齐规范：

- **色调板**：从封面色提取种子，用 24 桶色度加权直方图避开纯色干扰，再生成 tonal palette（primary / secondary / tertiary / surface 五级容器）
- **排版**：完整 typescale（display / headline / title / body / label 各 3 级），行高与字距按 MD3 规格
- **形状**：corner 阶梯 4 / 8 / 12 / 16 / 28，卡片用 12，FAB 用 16，底部 sheet 用 28
- **层级**：5 级 elevation + surface tint 叠加，暗色下用 tonal overlay 而非阴影
- **状态层**：hover 8% / focus 10% / pressed 10% 的 state layer 叠在内容之下，水波纹用径向扩散
- **动效**：`emphasized-decelerate` `cubic-bezier(0.05, 0.7, 0.1, 1)`；切 Tab 走 fade-through，进二级页走 shared-axis（X 轴推入 + 淡入），完全返回手势跟随手指位移
- **自适应**：手机视口 390×844 主基准，≥900px 切 NavigationRail + 1120px 应用列

阅读器用 **CSS 多列分栏**做横向分页（`columnWidth = 页宽`、`columnGap = 0`），而不是按字符数硬切 —— 末行不会被裁，页边距天然均匀，字号/行距/字体三项设置改了立刻重排。

### 快速开始（遗留套件）

**跑前端**

```bash
cd web
npm i -D esbuild        # 仅打包需要
python3 build.py        # 产出 dist/
open dist/index.html    # 双击即开
```

**构建 Android**

```bash
cd android
cp /path/to/your.jks app/release.jks     # 或在 app/keystore.properties 里配置
./gradlew assembleRelease
```

没有 keystore 时会自动跳过签名（只出 unsigned 包），不会中断构建。

**抓书**

见 [`fetcher/README.md`](fetcher/README.md)。需要先起 fqapp 的 Rust 内核提供 loopback 接口。

### 已知限制

- 听书页是界面模拟，短剧页是封面 + 播放器 UI，都没有真实音视频流
- `file://` 直开时 Canvas 取色会被判跨源，主题回退到默认种子色；WebView / Electron 下正常
- 未做真机启动验证（CI 环境无 KVM），原生层只保证静态正确
- 书库为抓取时点的快照，不含后续更新章节

### 免责声明

`fetcher/` 仅用于个人学习与技术研究（HTTP 协议、加密链路、EPUB 规范）。抓取内容版权归原作者与平台所有，**请勿传播、商用或二次分发**。

仓库内正文数据只保留两本，用于界面演示；完整书库（254 本 / 7.9 万章 / 1.95 亿字）不入库。

## License

`band_protocol/` 与更新机制相关代码随页屿主体开源（协议文档见目录内说明）；遗留 Web 套件代码部分 MIT。第三方内容不在此授权范围内。

## 署名

页屿（Yeyu Reader）由 **hrk_** 开发。基于 fqapp 1.4.0（GPL-3.0）二次开发，界面参考 Wenku8 Flutter，手环传书能力移植自 moye 弦电子书（AGPL-3.0）的协议实现。
