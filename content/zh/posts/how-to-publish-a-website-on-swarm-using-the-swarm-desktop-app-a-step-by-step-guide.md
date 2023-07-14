+++
banner = "/uploads/how-to_website.png"
categories = [ "中文" ]
date = 2023-03-28T22:00:00.000Z
description = "这篇分步指南将向你阐释如何利用Swarm桌面应用在 Swarm网络上发布网站。你将学习如何安装桌面应用，为账户充值，上传自己的网站，以及如何连接一个ENS域名来优化用户体验。通过遵循这些步骤，你将能在去中心化存储平台上托管一个不受审查制约的网站，并且使该网站易于被用户访问。"
references_and_footnotes = [ ]
title = "分步指南：使用Swarm桌面应用发布网站"
_template = "post"
slug="how-to-publish-a-website-on-swarm-using-the-swarm-desktop-app-a-step-by-step-guide-zh"
+++

**摘要：** 这篇分步指南将向你阐释如何利用[Swarm桌面应用](https://desktop.ethswarm.org/)在 Swarm网络上发布网站。你将学习如何安装桌面应用，为账户充值，上传自己的网站，以及如何连接一个ENS域名来优化用户体验。通过遵循这些步骤，你将能在去中心化存储平台上托管一个不受审查制约的网站，并且使该网站易于被用户访问。

## Swarm桌面应用介绍

Swarm桌面应用作为个人访问Swarm网络的入口，让用户可以与Swarm上托管的内容自由交互。该桌面应用允许用户：

- 将文件存储（上传和下载）到去中心化存储平台（即Swarm）；
- 安全且私密地向他人发送文件；
- 轻松托管和管理HTML网站。

## 下载并安装Swarm桌面应用并为账户充值

首先，下载并安装[Swarm桌面应用](https://desktop.ethswarm.org/)。然后，向你的节点钱包地址（Node Wallet Address）转入xDAI（交易费）。如果你持有xBZZ（存储费），你可以将xBZZ和xDAI一同存入钱包地址。如果没有xBZZ，则你可以在Swarm桌面应用中将xDAI兑换为xBZZ。

按照以下步骤存入资金：

1. **启动Swarm桌面应用**，在左侧菜单中点击**Account**。
2. 将**xDAI**转入至你的节点钱包地址。出于安全考虑，建议每次发送的xDAI不超过5到10个。
3. xDAI存入钱包后，点击屏幕右侧的**Top Up Wallet**按钮。
4. 点击**Use xDAI**。
5. 查看你的xDAI余额并点击**Proceed**。
6. 输入想要转换为xBZZ的xDAI数量，然后点击**Swap Now**。
7. 你的节点钱包地址将收到相应数量的xBZZ。

![](https://i.imgur.com/CALz1UF.gif)

这时，你的节点钱包地址同时拥有了xDAI和xBZZ资产。然而，要在 Swarm 上上传数据，你还需要将资金转移到Chequebook合约地址。

按照以下步骤进行：

1. 回到左侧菜单的**Account**。
2. 在顶部菜单中选择**Chequebook**选项卡。
3. 点击**Deposit**按钮。
4. **输入你想要存入Chequebook的xBZZ数量**，这部分资金将用于支付存储费用。

## 通过Swarm发布网站

要在Swarm上发布你的网站，请按照以下步骤进行：

1. 点击左侧菜单**Files**。
2. 点击**Add Web**按钮。
3. **选择你的网站文件夹**。注意：index.html文件应位于根目录中。
4. **购买邮票（Postage Stamp）** 用来发布你的页面。注意：邮票是为了支付指定期限内的存储费用。
5. **将网站上传到你的节点**。

![](https://i.imgur.com/KYhL83L.gif)

https://api.gateway.ethswarm.org/bzz/6843d3be17364ea0620011430e4db2a26ff781da478493a02d6eb5aae886b8ae/

**注意，如果未来你希望更新你的网站，请务必查阅此篇文章的最后一部分。**

## 将ENS域名与你的网站关联

通过将你的ENS域名与Swarm哈希关联，你可以为你的网站生成一个易于记忆、用户友好的标识符，从而使用户无需记住繁琐复杂的Swarm哈希便能轻松找到并访问你的网站。

首先，你需要为自己的网站注册域名。你可以利用[ENS Domains Dapp](https://app.ens.domains/)和[MetaMask](https://metamask.io/)浏览器插件来注册并管理你的ENS域名。

将MetaMask与相关的Ethereum账户连接并注册域名。同时，你需要将解析器（Resolver）设置为使用公共ENS。

1. 前往“**My Names**”，选择想要与你的Swarm内容关联的域名。
2. 点击“**ADD/EDIT RECORD**”按钮。
3. 在“Add Record”下拉菜单中，选择“**Content**”选项。
4. **输入你的Swarm哈希**，其前缀应为“bzz://”，然后点击“Save”。

![](https://i.imgur.com/JlhCVMz.gif)

现在，你可通过如下地址访问你的网站：

https://api.gateway.ethswarm.org/bzz/swarm-devrel.eth/

## 更新网站：设置并更新你的Feed

Swarm Feeds提供了一种简单的方式，让你能为Swarm上存储的内容创建一个永久地址，并随时对其内容进行更新。

如果你打算将来更新网站，那么在将网站上传至Swarm前，我们建议你先设置一个“Feed”。这样做的好处在于，即便你改变了上传的内容，但连接至你的ENS域名的Swarm哈希仍将保持不变。这将有助于你轻松更新网站内容，因为每次更新，你无须再更改Swarm哈希，无须额外支付Ethereum交易费。

设置Feed步骤如下：

1. 前往“**Account**”
2. 在顶部菜单中点击“**Feeds**”
3. 点击“**Create New Feed**”
4. 输入**Identiity name**
5. 点击“**Create Feed**”。

将网站上传到Swarm并将其链接到Feed：

1. 前往“**Account**”
2. 在顶部菜单中点击“**Feeds**”
3. 选择你想要更新的**Feed**
4. 点击“**View Feed Page**”
5. 点击“**Add Website**”
6. **选择你的网站文件夹**。注意：index.html文件应在根文件夹中。
7. **添加邮票（Postage Stamp）以发布你的网页**。注意：邮票是为了支付指定期限内的存储费用。
8. **将网站上传到你的节点**。
9. 按照上述步骤，将Feed哈希连接到ENS域名。

![](https://i.imgur.com/oCNQejB.gif)

总的来说，通过这份详细的分步指南，你现在已经全面了解了如何使用 Swarm桌面应用在Swarm网络上发布和更新网站。按照这些步骤，你现在可以享受去中心化存储所带来的好处，维护一个抗审查的网站，并通过将网站与ENS域名关联，打造出友好的用户体验。
