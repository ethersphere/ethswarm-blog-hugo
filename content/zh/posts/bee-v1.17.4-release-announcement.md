+++
banner = "/uploads/1-17-4-pre-release.png"
categories = [ "中文" ]
date = 2023-09-19T00:00:00.000Z
description = "v1.17.4 版本预计将于本周晚些时候正式发布。鉴于此次会在协议层面引入重大更新，我们强烈建议您及时升级节点。请密切关注我们的发布公告，并做好本周内节点升级的准备。此外，该版本还涉及到一些对Swarm开发者和Bee节点运营商有所影响的调整。为了及时了解Bee的最新更新和有关节点运营商的重要公告，请务必加入我们Discord上的节点运营商专属频道。"
references_and_footnotes = [ ]
title = "v1.17.4 预发布公告"
_template = "post"
slug="bee-1-17-4-pre-announcement-zh"
+++

v1.17.4 版本预计将于本周晚些时候正式发布。鉴于此次会在协议层面引入重大更新，我们强烈建议您及时升级节点。请密切关注我们的发布公告，并做好本周内节点升级的准备。此外，该版本还涉及到一些对Swarm开发者和Bee节点运营商有所影响的调整。为了及时了解Bee的最新更新和有关节点运营商的重要公告，请务必加入我们Discord上的节点运营商专属频道。

***⚠️⚠️一句话：节点运营商应当尽快完成升级，因为新版本引入了重大变更。***

### Pushync和检索协议的更新

负责管理Swarm网络中各节点间数据块（Chunk）同步的pushsync协议以及在数据请求时进行块检索的检索协议此次都进行了升级。另外，优化了日志功能，以便用户能够快速定位问题和解决问题。

*由于**此项更新属于重大更新**，为确保您的节点能够正常运行于现网，请您务必**尽早进行节点升级**。*

### 默认批次类型为不可变更（Immutable）

在Bee的上一版本中，通过[/stamps POST](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bamount%7D~1%7Bdepth%7D/post)端点购买邮票批次时，其头参数`immutable`默认是关闭的。但在新版本中，`immutable`选项变为默认**开启**。这一变更旨在防止邮票购买者在`immutable`选项关闭时，无意中覆盖他们已上传的数据。您可以在[文档](https://docs.ethswarm.org/docs/learn/technology/contracts/postage-stamp/#batch-utilisation)中了解更多关于`immutable`批次如何工作的信息。

### 默认上传类型为延迟上传（Deferred）

[/bzz POST](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post) 和 [/bytes POST](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes/post) 端点的默认头参数`swarm-deferred-upload`已设置为 `true`，意味着所有上传的默认类型均更改为延迟上传。

延迟上传的数据首先上传到本地Bee节点，然后再上传到Swarm网络，而对于非延迟上传或“直接”上传，则直接按数据块逐个上传至网络。

这一更改是因为延迟上传通常更快，而直接上传对于一般场景而言并不是必需的。

### 覆盖地址生成选项

[Bee配置选项](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration#configuration-for-bee-start)中新增了`--target-neighborhood`选项。用户可以通过提供目标邻域的前导位（Leading bits）来设定某一特定邻域，以便让该用户的新节点运行在特定邻域中。当启用此选项时，系统将为用户的新节点分配一个位于该邻域内的覆盖地址（Overlay address）。用户所使用的前导位数应等于网络的当前深度。

这一功能对节点运营商尤为有用，因为他们可以更精准地选择节点较少的邻域，从而可能提高获得奖励的几率。节点数量较少的邻域以及它们的前导位值可以在Swarmscan的[邻域页面](https://swarmscan.io/neighborhoods)查看。

*注意：由于其他诸如质押率等因素也可能影响中奖机率，因此在节点较少的邻域运行您的节点可能不一定会提高获奖机率。*

在节点较少的邻域中部署新节点不仅可能提高中奖几率，更有助于增强整个网络的稳定性和数据的冗余保障。


