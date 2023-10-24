+++
banner = "/uploads/general-graphic-3.jpg"
categories = [ "中文" ]
date = 2023-09-26T00:00:00.000Z
description = "Bee客户端是一款功能强大的软件，它的开发旨在实现Swarm白皮书和《The Book of Swarm》中所共同描述的要打造一个永续前行的去中心化Web3存储愿景。与Bee客户端一道发展的，是一套完善的Swarm工具和各类生态应用，它们旨在帮助开发者和内容创作者更便捷地使用Bee。"
references_and_footnotes = [ ]
title = "Swarm工具概览与最新进展"
_template = "post"
slug="swarm-ecosystem-tools-update-zh"
+++

Bee客户端是一款功能强大的软件，它的开发旨在实现[Swarm白皮书](https://docs.ethswarm.org/swarm-whitepaper.pdf)和[《The Book of Swarm》](https://docs.ethswarm.org/the-book-of-swarm.pdf)中所共同描述的要打造一个永续前行的去中心化Web3存储愿景。与Bee客户端一道发展的，是一套完善的Swarm工具和各类生态应用，它们旨在帮助开发者和内容创作者更便捷地使用Bee。尽管Swarm社区的大多成员对Swarm桌面应用已熟稔于心，但对于本文所要探讨的其他工具，或许不少人还知之甚少。这些工具为节点运营商提供了更为简便的节点管理方式，让开发者更轻松地将应用接入Swarm，让内容创作者开始在Swarm上发布作品。本文将为您带来Swarm工具和相关生态应用的概览，并重点介绍这些工具和应用的最新进展。

## Bee JS
[Bee JS](https://github.com/ethersphere/bee-js)属于Javascript库，它使开发者能够轻松地将他们的应用连接到Swarm的去中心化存储网络。开发者无需直接与Bee的HTTP API交互，只需在应用中添加Bee JS，便可立即访问一系列常用方法（如downloadFile、uploadFile等）。详情请参见[Bee JS文档](https://hackmd.io/@QHbpzTcRS8eGvoSio9Niaw/SkmxOKpCh)。

![](https://hackmd.io/_uploads/BkJCYB56h.png)

### Bee JS最新进展：

- 针对再分配状态端点新增了[字段](https://github.com/ethersphere/bee-js/commit/c049101a16faf5c44f8a2abce62eb6583baad32d)。
- 对v1.17.2版本进行了兼容性优化。
- 引入了新的工具函数`utils`，用于计算邮票相关的派生值（即从基础API返回的数据所派生出的值）。
- 新增了Bee调试API的状态查询端点`status`。

## Swarm CLI

[Swarm CLI](https://github.com/ethersphere/swarm-cli)是一款基于NodeJS开发的命令行工具，用于与Bee节点交互，为开发者和节点运营商提供了极大的便利。通过Swarm CLI，用户可以轻松地在命令行环境中管理Bee节点，并与Swarm网络进行交互，而无需直接与Bee HTTP API交互。更多细节，请参考[Swarm CLI README](https://github.com/ethersphere/swarm-cli/blob/master/README.md)。

**创建身份**

![](https://hackmd.io/_uploads/BJ4N0B56h.gif)

**上传文件**
![](https://hackmd.io/_uploads/r1vMArqTn.gif)

### Swarm CLI最新进展：

- 新增`swarm-cli status`命令，它是一个高度集成的、具有“上下文感知”功能的命令。该命令能根据节点的运行模式（如轻量、超轻量、全节点、质押或非质押等模式）返回从多个Bee API端点收集的相关信息（如节点状态、余额、拓扑和质押情况等）。
- 新增`swarm-cli utility lock`和`swarm-cli utility unlock`命令，用于管理V3 keystore文件和私钥字符串。这两个命令可以为钱包加上密码保护，也可以为钱包解锁密码。
- 新增用于估算邮票成本、存储容量以及TTL的函数。
- 新增用于打印Swarm文件哈希值的`hash`命令。

## Etherproxy

Etherproxy是一款专为节点运营商设计的反向代理工具，特别适用于多节点设置。该工具能在短时间内把发送到区块链RPC端点的常见请求进行打包处理，且仅执行一次（例如，像`eth_blockNumber`和`eth_getLogs`这些经常被调用的请求，有时这些请求是冗余且无意义的）。通过Etherproxy，可以确保所有节点收到相同的响应，大大减少了对RPC端点的请求次数，这不仅可以降低Gnosis Chain节点的压力，还能为采用付费API服务的节点运营商节省请求流量。

### Etherproxy最新进展：

- 新增对K8s/Docker的支持
- .deb包/服务（正在开发中）

## Bee Dashboard
[Bee仪表盘（Bee Dashboard）](https://github.com/ethersphere/bee-dashboard)为Swarm桌面应用提供了直观的前端展示。同时，Bee Dashboard还可独立于Swarm桌面，为用户在计算机上运行的Bee节点提供前端交互界面。

### Bee仪表盘最新进展：

![](https://hackmd.io/_uploads/ry6-40VR3.png)

- 新增了对现有邮票充值和扩容（通过提高深度来增加可存储的数据量）的功能。
- 新增了工具提示，以解释`mutability`选项。

## 正在开发的其他工具

以下工具目前正处于开发阶段，它们尚未正式发布：

### Ethercomb（当前进度：开发中）

Ethercomb是一款CLI工具，旨在简化创建多节点Docker堆栈的流程，从而让用户能够轻松、迅速地开始质押操作。

例如，仅通过下述简单命令，用户就能快速部署5个已做好质押准备的Bee节点：

`ethercomb create --wallet $PK --count=5 --rpc $JSON_RPC`

用户需要将`$PK`替换为您的私密，将`$JSON_RPC`替换为您的JSON-RPC端点。

### Etherjot（当前进度：开发中）

[Etherjot](https://github.com/Cafe137/etherjot)为用户提供了在Swarm上轻松搭建博客的能力。Etherjot负责发布过程和布局细节，让用户专注于写作。用户可以轻松地一次添加一篇文章页面或菜单页面。如果用户有一个待发布的markdown文件，那么只需一句简单命令，文件内容便可立即发布到网站上。

此外，如果用户使用Hugo、Jekyll等静态网站生成工具来创建网站，Etherjot也提供了便捷的发布这些静态网站的能力。

![](https://hackmd.io/_uploads/rkoa2kvk6.jpg)

*Etherjot默认模板*

### Gateway Proxy（当前进度 - 开发中）

[Gateway Proxy](https://github.com/ethersphere/gateway-proxy)是一款为Bee节点提供多功能代理服务的工具。它有四种操作模式，每种模式应对不同的使用场景：

- 直接代理请求，不对其进行任何修改。
- 通过环境变量POSTAGE_STAMP，添加或替换请求的邮票。
- 根据满足金额、深度要求且不属于未到期或即将到期的邮票（包括自动购买邮票和现有邮票）来添加或替换请求的邮票。要启用此模式，需确保至少设置了POSTAGE_DEPTH、POSTAGE_AMOUNT和BEE_DEBUG_API_URL。
- 为即将到期的邮票延长TTL。要启用此功能，需设置POSTAGE_EXTENDSTTL=true，提供POSTAGE_AMOUNT、POSTAGE_DEPTH所涉及的期望金额和深度，并将POSTAGE_TTL_MIN设置为大于或等于60。

### Ethercast（当前进度 - 开发中）

Ethercast是一个直接在Swarm上进行直播的工具！它能让用户直接在Swarm上进行视频或录频。该项目正处于早期开发阶段。敬请期待后续更多的进展！

请持续关注我们，以获取更多的Swarm最新消息和进展情况！




