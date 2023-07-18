+++
banner = "/uploads/how-to-run-a-bee-node.png"
categories = [ "中文" ]
date = 2023-04-11T22:00:00.000Z
description = "在Swarm网络上打造去中心化应用时，运行Bee节点是关键一环。然而，作为开发者，我们通常更希望能够在一个安全、快速地与节点/网络进行交互的环境中测试，而无需担心节点的存储数据或用户的代币资产受到威胁。"
references_and_footnotes = [ ]
title = "Swarm开发：如何运行一个用于测试和开发的Bee节点"
_template = "post"
hide_front = true
slug = "build-on-swarm-how-to-run-a-bee-node-for-testing-and-development-zh"
+++

# Swarm 开发：如何运行一个用于测试和开发的 Bee 节点

在 Swarm 网络上打造去中心化应用时，运行 Bee 节点是关键一环。然而，作为开发者，我们通常更希望能够在一个安全、快速地与节点/网络进行交互的环境中测试，而无需担心节点的存储数据或用户的代币资产受到威胁。

本文将详细介绍三种模拟在 Swarm 上运行 Bee 节点的方法，这些方法主要用于安全、无风险的测试和开发：

- 在开发者模式下运行 Bee
- 使用 Bee Factory 搭建本地网络
- 使用 FDP Play 搭建本地网络

无论你是编程新手还是经验丰富的开发者，这些方法都能帮助你快速熟悉并开始 Swarm 的开发旅程。那么，让我们一起深入了解吧！

## 方法一：开发者模式下运行 Bee

当 Bee 节点在开发者模式下运行时，它会创建一个具有瞬态持久性（Volatile persistence）和模拟后端（Mocked backend）的实例，这使得该模式成为试验和测试 Bee 节点各种特性的理想环境。开发者对节点状态的任何更改都是临时性的，并且在节点停止运行时会被清除。因此，这种模式对现实世界的数据或资产不会产生任何影响，是开发者进行 Bee 节点试验和测试的首选模式。

### 准备工作

- 请确保端口 1633 和 1635 未被占用且可用。

### 步骤 1：在操作系统上安装 Bee

1. 利用[安装包](https://docs.ethswarm.org/docs/installation/install)进行安装

- Ubuntu/Debian（\*.deb）
- CentOS（\*.rpm）
- MacOS（brew）

2. 使用[安装脚本](https://docs.ethswarm.org/docs/installation/manual)，它能自动监测你的运行环境，并在你的电脑上安装最新稳定版本的 Bee

- Linux (bee-linux-\*)
- MacOS (bee-darwin-\*)
- Windows (bee-windows-\*)

3. 在所有系统上[通过源代码进行创建](https://docs.ethswarm.org/docs/installation/build-from-source)。

您可以通过此链接下载最新版本的 Bee 安装包：https://github.com/ethersphere/bee/releases/latest

### 步骤 2：在 dev 模式下启动 Bee

打开终端窗口并运行对应的命令：

    bee dev

    (                      *        )  (
    )\ )                 (  *    ( /(  )\ )
    (()/(   (    (   (    )\))(   )\())(()/(   (
    /(_))  )\   )\  )\  ((_)()\ ((_)\  /(_))  )\
    (_))_  ((_) ((_)((_) (_()((_)  ((_)(_))_  ((_)
    |   \ | __|\ \ / /  |  \/  | / _ \ |   \ | __|
    | |) || _|  \ V /   | |\/| || (_) || |) || _|
    |___/ |___|  \_/    |_|  |_| \___/ |___/ |___|


    Starting in development mode

    "time"="2023-03-08 13:55:59.008839" "level"="info" "logger"="node/localstore" "msg"="database capacity" "chunks"=1000000 "~size(GB)"=20.29025
    "time"="2023-03-08 13:55:59.008726" "level"="info" "logger"="node" "msg"="starting debug api server" "address"="[::]:1635"
    "time"="2023-03-08 13:55:59.022163" "level"="info" "logger"="node" "msg"="starting api server" "address"="[::]:1633"

完成！Bee 节点现在已在开发模式下运行。现在可以安全地使用其所有的 API 接口进行交互。任何因交互而产生的节点状态变化都只会暂存到易失性内存（Volatile memory）中。

## 方法二：利用 Bee Factory 在本地搭建 Swarm 网络

[Bee Factory](https://github.com/ethersphere/bee-factory)提供了一套能够在自己的计算机上模拟整个 Swarm 网络的全面解决方案。作为一个命令行工具，Bee Factory 旨在启动一个由 Bee 节点组成的 Docker 集群，并提供一个用于高级测试与开发的区块链测试环境。

### 准备工作

- 确保已在系统中安装 Docker
- node >= 16
- 确保 1633 和 1635 端口是可用的，并且已阻止外部连接

### 步骤 1：安装 Bee Factory

    npm install -g @ethersphere/bee-factory

### 步骤 2：使用 Bee Factory

为指定的 Bee 版本启动集群，并附加到 Queen 容器，显示其日志（可按 Ctrl+C 停止）：

    bee-factory start 1.13.0

或者，为指定的 Bee 版本启动集群，然后进行分离并退出：

    bee-factory start --detach 1.13.0

停止运行中的 Bee 集群：

    bee-factory stop

在切换版本时，如需删除现有的容器，可以使用--fresh：

    bee-factory start 1.13.0 --fresh

查看所有可用的子命令：

    bee-factory --help

查询特定子命令的帮助信息：

    bee-factory <subcommand> --help

欲获取更多关于 bee-factory 的信息，您可访问 https://github.com/ethersphere/bee-factory 。

## 方法三：借助 FDP Play 在本地部署 Swarm 网络

[公平数据协议](https://fdp.fairdatasociety.org/)（Fair Data Protocol，FDP）是一种建立在 Swarm 之上的数据互操作协议，它也是一个二层解决方案。这项协议鼓励在去中心化云环境中，对处理个人数据的去中心化应用提供更多的自主和隐私保护。

与 bee-factory 类似，[FDP Play](https://github.com/fairDataSociety/fdp-play)是一个命令行工具，旨在通过 Docker 在本地快速部署一个 FDP 开发环境。该环境包含一个用于测试的 Ganache 区块链，一个由 Bee 节点构成的 Docker 集群，以及一个 FairOS 实例。

### 准备工作

- 确保已在系统中安装 Docker
- node >= 16
- 确保 1633、1635 和 9090 端口是可用的

### 步骤 1：安装 FDP Play

    npm install -g @fairdatasociety/fdp-play

### 步骤 2：使用 FDP Play

使用最新的 Bee 版本启动 Bee 集群：

    fdp-play start

连接到 Queen 容器并显示其日志：

    fdp-play logs queen --follow

停止集群（请注意，容器数据在重启之间会持久保存）：

    fdp-play stop

清空所有数据（刷新）并获取最新的 docker 镜像：

    fdp-play start --pull --fresh

使用特定的区块链镜像启动集群：

    fdp-play start --detach --blockchain-image fairdatasociety/fdp-play-blockchain

有关 fdp-play 的更多信息，请访问 https://github.com/fairDataSociety/fdp-play 。

## 下一步做什么？

既然已经介绍了三种安全、无风险的启动 Bee 节点进行测试和开发的方法，现在就可以开始与节点交互，并在 Swarm 网络上构建应用了。[Bee JS](https://github.com/ethersphere/bee-js) SDK 及其相关[文档](https://bee-js.ethswarm.org/docs/)是开启您编程之门的最好选择。

您可查看与 Swarm 及生态相关的[免费和开源项目列表](https://github.com/ethersphere/awesome-swarm)，表上项目的数量仍在持续增加。加入 Discord 的 #develop-on-swarm 频道，与 Swarm 社区其他开发者建立联系。如果您有创新性想法，并相信它的潜力和影响力，不妨考虑向我们申请资助。Swarm 时刻等待您的加入！
