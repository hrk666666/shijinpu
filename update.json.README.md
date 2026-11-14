# update.json — 页屿更新检查 / 公告

App 启动时拉取本文件（可在「设置 → 更新与公告」关闭），用于两件事：

1. **更新检查**：比较 `latest.versionCode` 与本机版本；有新版时**不从 GitHub 下载 APK**，
   而是引导用户跳转 `latest.url`（可自定义为网盘 / 落地页 / 任意下载地址）。
2. **公告**：`announcement` 按 `id` 幂等展示（同一 id 只弹一次），`enabled: false` 可下线。

## 字段

| 字段 | 说明 |
| --- | --- |
| `latest.versionName` / `latest.versionCode` | 最新版本（versionCode 为整数比较基准） |
| `latest.minVersionCode` | 低于此版本建议强制更新（0 = 不强制） |
| `latest.url` | **自定义跳转链接**——发现新版时引导用户前往的地址 |
| `latest.notes` | 更新摘要 |
| `announcement.id` | 公告编号（改动内容请递增 id，否则已看过用户不再弹） |
| `announcement.enabled` | 是否启用 |
| `announcement.title` / `announcement.body` | 公告标题与正文 |
| `announcement.url` | 公告可选跳转 |

## 下载链接（latest.url）

发现新版时 App **不从 GitHub 下载 APK**，只引导用户跳转 `latest.url`。把该链接换成你自己的
**网盘 / 落地页 / 任意下载地址**即可。

**默认更新下载地址（未另行说明时一律使用）：`https://pan.quark.cn/s/10d1e8548b36`（夸克网盘）。**
发布新版本时如无特殊说明，`latest.url` 与 `announcement.url` 均填该地址。

**本仓不发 GitHub Release**，不要把 `latest.url` 指向 Releases 页。

## 镜像

App 内置多个 GitHub 镜像前缀并**自动测速优选**（raw.githubusercontent / jsDelivr / ghproxy 系），
也可在设置里手动指定。镜像只影响本文件的拉取速度，不影响 `latest.url` 的指向。

## 安全说明

- 本文件只承载**版本号、跳转链接与公告文本**，App 不会因它自动安装任何东西；
  更新始终由用户手动前往 `latest.url` 自行下载。
- 公告与更新信息由本仓维护者（hrk_）发布。GitHub 提供 HTTPS 传输；镜像前缀只加速
  本文件的读取，不改变内容（App 以 JSON 字段校验解析）。
- 与小米、番茄小说及上游项目无任何隶属或合作关系，详见根 [README](README.md)
  「非从属关系声明」与「免责声明」。本文件按 AGPL-3.0 随仓开源。
