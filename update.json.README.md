# update.json — 页屿更新检查 / 公告

App 启动时拉取本文件（可在「设置 → 更新与公告」关闭），用于：

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
| `announcement.url` | 公告可选跳转 |

## 下载链接（latest.url）

发现新版时 App **不从 GitHub 下载 APK**，只引导用户跳转 `latest.url`。把该链接换成你自己的
**网盘 / 落地页 / 任意下载地址**即可（当前默认指向仓库主页作占位）。**本仓不发 GitHub Release**，
不要把 `latest.url` 指向 Releases 页。

## 镜像

App 内置多个 GitHub 镜像前缀并**自动测速优选**（raw.githubusercontent / jsDelivr / ghproxy 系），
也可在设置里手动指定。镜像只影响本文件的拉取速度，不影响 `latest.url` 的指向。
