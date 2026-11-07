# fetcher — 批量抓取与 EPUB 3 打包

配套 `fqapp` 的 Rust 内核（CM-DH + AES-256 解密）通过本地 loopback 接口取正文，
产出带**完整元数据 + 内嵌封面**的 EPUB 3 与 TXT。

## 前置

需要先在本地起内容服务（监听 18921）：

```bash
cd fqapp-master/rust
cargo run --release --example serve -- assets runtime 18921
```

接口默认地址 `http://127.0.0.1:18921/api/v1`，可用环境变量 `FQ_API` 覆盖。

## 用法

```bash
python3 fqdl.py discover --want 250          # 搜书 → 过滤完结 → 去重 → state/candidates.json
python3 fqdl.py all --out ./novels --limit 250 --workers 4
python3 fqdl.py status                       # 随时看进度
```

补漏（前面有书已下架时，从候选列表更靠后位置继续）：

```bash
python3 fqdl.py all --out ./novels --start 250 --limit 30 --workers 4
```

只抓不打包 / 只打包：

```bash
python3 fqdl.py grab --limit 50
python3 fqdl.py pack --out ./novels
```

校验产物：

```bash
python3 validate.py ./novels
```

## 实测产出

250 本压力测试跑出来的数据，作为稳定性参考：

- 成功 254 本（含补抓），79,282 章，1.95 亿字，平均 312 章/本，最大 4,415 章
- 封面 254/254、完整简介 254/254、评分 125/254（上游本身为 0 的不编造）
- 失败 46 本：24 本已下架、8 本无正文（音频书 / 锁章）、3 本覆盖率过低、11 本网络异常（可重跑）
- `validate.py` 全量校验：结构错误 0、XML 错误 0

## 下载逻辑为什么快且稳

| 环节 | 做法 |
| --- | --- |
| 正文 | 走 `/chapters/full`，一次请求批量解密整本（540 章约 2s）；比逐章 `/chapters/{id}` 快两个数量级 |
| 分批 | 每 120 章一批，失败自动二分递归，仍失败再退到逐章 HTML 接口 |
| 重试 | 指数退避 + 抖动，最多 5 次；区分「可重试」与「永久失败」 |
| 永久失败 | `101104 / 101121 / 不存在 / 已下架` 直接判死，不再浪费 5 次重试 |
| 断点续传 | 每本书一个 `state/<book_id>/`，`body.json.gz` 覆盖全部章节即视为完成；产物被删会自动重打包 |
| 原子写 | 所有 JSON / EPUB / TXT 先写 `.tmp` 再 rename，进程被杀不会留下半截文件 |
| 进度 | `state/progress.json` 实时落盘，`fqdl.py status` 或任何程序都能读 |
| 连接复用 | `requests.Session` + 连接池，避免每章重建 TLS |

## 元数据写入清单

EPUB OPF（Dublin Core + schema.org + 自定义 `fq:` 命名空间）：

- `dc:identifier`（uuid5，稳定可复现）+ `fanqie:<book_id>`
- `dc:title`（主标题 / 副标题 title-type 细化）
- `dc:creator`（role=aut、file-as）
- `dc:contributor`（平台，role=pbl）
- `dc:language`、`dc:description`（**完整简介**，不截断）
- `dc:subject` × N（分类 + 全部标签）
- `dc:date`、`dc:publisher`（有则写）
- `dc:source`（原书页地址）、`dc:rights`
- `dcterms:modified`、`rendition:layout/flow`
- `schema:ratingValue / ratingCount / wordCount / numberOfPages`
- `fq:serialStatus / lastUpdated / readCount / shelfCount`
- `belongs-to-collection`（分类）+ `collection-type`
- `meta name="cover"`（EPUB2 兼容）

封面以 `properties="cover-image"` 进 manifest，`images/cover.*` 内嵌，并单独有封面页。

书名页（`text/titlepage.xhtml`）把同样的信息做成可读的表格：封面缩略图、书名、副标题、
作者、分类、状态、评分（含评分人数）、字数、章节、在读、收藏、出版、首发、更新、原名、角色，
下方是标签胶囊 + 完整简介 + 版权说明。

## 目录结构

```
state/
  candidates.json          候选清单
  failed.json              失败清单（含原因）
  progress.json            实时进度
  <book_id>/
    detail.json            清洗后的元数据
    toc.json               章节索引
    body.json.gz           正文（item_id → 段落数组）
    cover.img              封面原图
    status.json            状态机：fetched / packed
```

输出：

```
<out>/
  catalog.json / catalog.csv / 索引.md
  <分类>/<书名>（<作者>）.epub
  <分类>/<书名>（<作者>）.txt
```
