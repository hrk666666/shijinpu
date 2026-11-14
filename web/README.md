# 什锦铺 · Material Design 3（本地应用版）

> **许可与声明**：本目录属前代「什锦铺」Web 套件（存档，现行 App 为 Flutter 版「页屿」），
> 现随本仓以 **AGPL-3.0** 授权（版权人 hrk_ 由 MIT 改授）。信息架构参照 ch6vip/fqapp
> （GPL-3.0）的页面层级重写为纯 Web 实现，非官方衍生。与小米、番茄小说及 fqapp /
> 弦电子书作者无隶属或合作关系；仅供个人学习研究，风险自负。
> 完整来源与免责见[根 README](../README.md)。

把原 Flutter 项目 `ch6vip/fqapp` 的页面层级与信息架构，用纯 Web（HTML + CSS + JS）重做为 Material Design 3 风格的可交互前端。**不启动任何本地服务器**：发行版已把 ES Modules 打成单个 IIFE，章节正文改成脚本注入，`file://` 直接可用。

## 运行

三种方式，任选其一：

**1. 双击（零依赖）**

```
dist/index.html   ← 双击，用系统浏览器打开
```

**2. 套壳窗口（Electron，无地址栏、无服务器）**

```bash
cd dist/fqapp-shell
npm i          # 只装 electron
npm start      # 打开独立应用窗口
```

**3. 开发模式**

```bash
python3 -m http.server 8080    # 改了源码才需要
# http://127.0.0.1:8080/index.html
```

改完源码用 `python3 build.py` 重新生成 `dist/`。打包依赖 esbuild：

```bash
npm i -D esbuild          # 或全局安装；也可用 ESBUILD=/path/to/esbuild 指定
```

手机视口（390×844）是主设计基准；≥900px 自动切换为桌面布局（左侧 NavigationRail + 1120px 应用列）。

## 目录

```
web/
├── index.html              外壳：#app / #view-root / #overlay-root / 启动屏
├── build.py                打包 dist/（bundle + json→js + 生成 Electron 壳）
├── shell-main.js           Electron 主进程模板
├── dist/                   发行目录，可整份拷走
│   ├── index.html          双击即开
│   ├── js/app.js           esbuild 打好的单文件（IIFE，无 import）
│   ├── assets/data/*.js    章节正文（window.__CH 挂载，避免 fetch）
│   └── fqapp-shell/        Electron 套壳工程
├── css/
│   ├── tokens.css          MD3 设计令牌：typescale、shape、elevation、state layer、motion
│   ├── base.css            reset、应用壳、水波纹、排版工具类
│   ├── components.css      按钮 / 卡片 / chip / 分段 / 开关 / 滑块 / 列表 / 导航栏 / 应用栏 / sheet / 对话框 / snackbar / 进度 / 菜单
│   └── views.css           各页面样式 + 阅读器分栏排版 + 响应式（720 / 900 断点）
├── js/
│   ├── app.js              启动、路由注册、注入 NavigationRail
│   ├── router.js           页面栈：fade-through 切页、shared-axis 推入/弹出、边缘返回手势
│   ├── store.js            持久化偏好（localStorage），生成并应用配色方案
│   ├── color.js            MD3 色调板生成 + 封面取色（色度加权直方图）
│   ├── ui.js               通用构件：el/esc、水波纹、sheet、dialog、snackbar、slider、segmented…
│   ├── shelf.js            书架 / 阅读进度 / 历史（localStorage）
│   ├── data.js             书目数据（240 本，238 张真实封面）
│   ├── icons.js            90 个 Lucide 图标路径
│   └── views/              home / detail / reader / search / library / mine / settings / audio / drama / history / nav / rail
└── assets/
    ├── covers/             真实封面图
    └── data/               两本书的完整正文（JSON 源 + 打包后的 JS）
```

## 页面与层级

| 层级 | 页面 | 要点 |
| --- | --- | --- |
| Tab | 首页 | 大标题折叠应用栏、7 个分类 chip、hero 轮播、接着看横滑、网格推荐、榜单、分类云、听书/短剧横滑、FAB 滚动收缩 |
| Tab | 短剧 | 竖向整屏信息流、右侧互动栏、剧集横滑、底部渐变保证文字可读 |
| Tab | 书架 | 网格/列表切换、排序循环、进度标签、长按菜单、空状态 |
| Tab | 我的 | 资料卡、三项统计、继续阅读卡、分组入口、快捷主题切换 |
| 推入 | 详情 | 封面 container-transform（FLIP）、透明应用栏、简介/目录/书评分段、元信息栅格、滚动后浮现底部阅读条 |
| 推入 | 阅读器 | 真实分栏分页、翻页动画、目录 sheet、排版 sheet、滚动模式、点击分区 |
| 推入 | 搜索 | 历史、热榜、结果高亮、评分排序 |
| 推入 | 设置 + 6 个分区 | 外观 / 阅读 / 听书 / 短剧 / 数据 / 关于 |
| 推入 | 听书 / 阅读历史 | 波形动画模拟播放；历史列表带进度 |

## 设计系统

- **色彩**：`color.js` 由种子色生成 MD3 全套 tonal palette（primary / secondary / tertiary / error / neutral / neutral-variant 的 0–100 色阶），再映射为 `--md-sys-color-*` 角色。支持浅色 / 深色 / 跟随系统 / 墨纸四种模式，以及「对比度 标准 / 较高 / 最高」。
- **动态取色**：进入详情页时从封面 Canvas 取色并整体换肤；离开即恢复。取色用 24 桶色度加权直方图并规避浑浊色相。
- **字体**：`--md-sys-typescale-*` 五档 + 字重/字距；阅读器另有宋体 / 黑体 / 圆体三套中文字体栈。
- **形状**：`--md-sys-shape-corner-*`，另有「标准 / 圆润 / 方正」三档形状预设统一改写。
- **动效**：
  - 时长 `--md-sys-motion-duration-*`，缓动 `emphasized-decelerate (0.05,0.7,0.1,1)` / `emphasized-accelerate (0.3,0,0.8,0.15)`
  - 切 Tab：fade-through（前页 90ms 淡出 + 后页 90ms 延迟淡入缩放）
  - 推入/弹出：shared-axis X（前页退到 -22% 并压暗，后页从 +30% 滑入）
  - 详情页封面：container transform（记录点击封面 rect，FLIP 到 hero 位置）
  - 阅读器翻页：`scroll-snap` + 平滑滚动；支持 slide / fade / 无动画
  - 「减弱动效」开关置 `data-motion="reduced"`，所有时长归零；墨纸模式强制关闭动画

## 阅读器实现

不用字符数估算分页，而是**真实 CSS 多列排版**：

```
.reader-viewport  → overflow-x: auto（一屏一列宽）
.reader-flow      → column-width: 屏宽；column-fill: auto
.reader-flow p    → padding-inline: 页边距
```

总页数 = `flow.scrollWidth / 屏宽`，翻页即 `scrollLeft = i * 屏宽`，所以不会出现末行被裁、左右留白不均、跨页断行错位。字号 / 行距 / 页边距 / 字体改动后重新计算列数并回到首页。

## 快捷键

| 键 | 作用 |
| --- | --- |
| `Ctrl/⌘ + K` | 全局搜索 |
| `←` `→` `↑` `↓` `Space` | 阅读器翻页 |
| `Esc` | 阅读器返回 |
| 屏幕左缘右滑 | 返回上一页 |

## 数据来源

书目与封面来自原项目 `fqapp` 的 Rust 内核（设备注册 → `a_bogus` 签名 → CM/DH 密钥交换 → AES-256 分章解密）通过其 loopback HTTP 适配器抓取。其中两本保留全文，可在书架或详情页直接阅读：

- 《重生2006，豆包成了我的外挂》92 章 / 23.6 万字
- 《爆红从报警开始（带着抽卡系统给警方刷业绩）》540 章 / 115 万字

其余书目只有元数据与封面，打开阅读器会提示「正文需联网拉取」。完整 EPUB 见 `/workspace/novels/`。

## 已知限制

- `file://` 下浏览器会把本地图片当作跨源资源，封面取色（Canvas `getImageData`）会被拒绝，此时回退到默认种子色；Electron 壳里已开 `allow-file-access-from-files`，取色正常。用开发模式（HTTP）也无此问题。
- 听书为界面模拟（波形 / 进度 / 倍速），不发声。
- 短剧为封面图 + 播放器 UI，无真实视频流。
- 数据是抓取时的快照，不随上游更新。
- `dist/` 已含 240 本书目与 2 本全文；新增正文需把 JSON 放到 `assets/data/` 后重跑 `build.py`。
