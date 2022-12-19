+++
banner = "/uploads/mfw1.png"
categories = ["Tutorials"]
date = 2022-10-19T22:00:00Z
description = "NOTE: This blog post is geared towards running a bee full node. If you are wanting ONLY TO ACCESS / UPLOAD unstoppable content from/to Swarm, checkout Swarm Desktop."
references_and_footnotes = []
title = "Swarm & Swarm testnet Package Available at the DAppStore"

+++
Maintained by the community member MFW78.

# What is this?

Blockchain sits at the fore-front of novel, technological development, with most software being written by specialists, with little attention given to the _end user experience_ — out-of-date documentation (when the documentation actually exists!) and how-tos attempting to guide people through being able to _actually use the software_.

This issue is particularly acute for software at the bleeding edge, that software which is working towards realising the vision of the **world computer**.

**NOTE: This blog post is geared towards running a** `bee` **full node. If you are wanting ONLY TO ACCESS / UPLOAD unstoppable content from/to Swarm, checkout** [**Swarm Desktop**](https://www.ethswarm.org/build/desktop)**.**

# What is the world computer?

The “world computer” refers to a distributed, decentralised computer capable of:

* Logic (standalone equivalent: Processor)
* Storage (standalone equivalent: SSD / HDD)
* Messaging (standalone equivalent: Modem, WiFi etc)

With the recent completion of [The Merge](https://ethereum.org/en/upgrades/merge/), Ethereum’s _Execution Layer_ provides the “processor” for this world computer vision. Two other projects are working on the storage and messaging, notably [Swarm](https://ethswarm.org/) and [Waku](https://vac.dev/introducing-nwaku). This how-to focuses on the former, and will demonstrate how to go from _zero to hero_ with Swarm.

# But wait, you said this software is difficult to use?

Enter, [Dappnode](https://dappnode.io/), a specialised operating system that provides a simple, intuitive interface through which users may readily configure blockchain software with a few simple clicks. Depending on your use case, you can:

* Setup Dappnode on your [own hardware](https://docs.dappnode.io/get-started/installation/introduction#custom-hardware), such as an old laptop or desktop, or even a [Raspberry Pi](https://docs.dappnode.io/get-started/installation/arm-hardware/installation) (required RPi 4, 8GB RAM); or
* Purchase [purpose built hardware](https://dappnode.io/collections/frontpage) with Dappnode pre-installed.

Before continuing, please use the above links to setup and configure Dappnode.

# Let’s get started

🚨**ATTENTION: FROM THIS POINT FORWARD, ALL LINKS ASSUME THAT YOU HAVE CONNECTED TO YOUR DAPPNODE VIA WIFI OR VPN**.🚨

# Gnosis Chain ⛓️

Swarm uses [Gnosis Chain](https://gnosischain.com/), formerly known as xDai, one of the first side-chains to Etheruem mainnet for managing its incentives. This is what distinguishes Swarm from the likes of [IPFS](https://ipfs.tech/), or [Bittorrent](https://en.wikipedia.org/wiki/BitTorrent) — [painstaking research](https://www.ethswarm.org/The-Book-of-Swarm.pdf) has gone in to making sure that all parties in the swarm are aligned.`bee`, the Swarm client, requires a connection to Gnosis Chain. You can:

* Recommended: [Install Nethermind](http://my.dappnode/#/installer/nethermind-xdai.dnp.dappnode.eth) (direct Dappnode install link); or
* Use an external [RPC](https://docs.gnosischain.com/tools/rpc/) (**CAUTION:** during upgrades of `bee`, or periods of heavy use, `bee` may easily consume all _free RPC requests_. If the RPC fails, `bee` will fail. For this reason, it’s strongly advised to run your own node - bonus in that it contributes to decentralisation ❤️🌐).

Completing these steps will allow `bee` to communicate with Gnosis Chain, but you will still need to directly interact with it as well (for tasks such as funding your node, covered later). You can [add Gnosis Chain](https://chainlist.org/chain/100) to [Metamask](https://metamask.io/).

# Swarm (bee) 🐝

Swarm is the technology (much as Ethereum is a technology, but one can use different clients to connect to an Ethereum-compatible network), and `bee` is the client software that one uses to connect to the Swarm.

* **Step 1**: Browse to the package installer — [Install Swarm](http://my.dappnode/#/installer/swarm.public.dappnode.eth) (direct Dappnode install link). Click ‘Install’ to continue.

![](https://miro.medium.com/max/1400/0*9FAivMYtozb-fLC0.png)

**Step 2**: Setup _optional_ parameters:

* **Swap RPC Endpoint (Gnosis Chain)** — if you installed Nethermind and are running your own node, you can leave the default settings. Otherwise, if you use an external RPC endpoint, this is where you should set it.
* **ENS resolver RPC (Ethereum Mainnet)** — As `bee` can resolve ENS (a special type of blockchain name), it requires an Ethereum **mainnet** RPC endpoint. Install links are available for a variety of clients, or you can use an Infura RPC endpoint, or alternatively leave it blank to disable the ENS resolver.
* **Initial chequebook deposit (xBZZ)** — is the amount of xBZZ the `bee` node must have deposited to it’s address in order to deploy the chequebook (which is used to issue “cheques” when the node exchanges bandwidth). You **MAY** set this to `0`, or you can alternatively purchase xBZZ (referred to as BZZ) on [Cowswap](https://swap.cow.fi/) 🐮or [Honeyswap](https://app.honeysway.org/) 🍯. Without any xBZZ, you will still be able to access the network at reduced rate, but will not be able to use full speed, or upload content.
* **Welcome message** — some graffiti that you can admire at [Swarm Scan](https://swarmscan.resenje.org/) or if you happen to be peering through the logs 👀
* **Full node mode** — must be set to `true` or `false`. This determines whether or not `bee` will store data for the network. To bee a good citizen and share the love, leave this set to `true`. This will nominally consume up to 60GB of disk space.
* **Storage data mountpoint** — for advanced users; recommended to leave at default.

![Optional parameters (Screenshot 1/2)](https://miro.medium.com/max/1400/1*_SDKSJgxvpqfpre5iVnONQ.png "Optional parameters (Screenshot 1/2)")   _Optional parameters (Screenshot 1/2)_

![Optional parameters (Screenshot 2/2)](https://miro.medium.com/max/1400/1*iQJ7AvMwlIMGCtZzb3bXBQ.png "Optional parameters (Screenshot 2/2)")_Optional parameters (Screenshot 2/2)_

* **Step 3**: Agree to the disclaimer. Because this package is published by an entity other than Dappnode, you are required to explicitly agree to the ‘_Unverified Package disclaimer’_.

![Agree to the ‘Unverified Package Disclaimer’](https://miro.medium.com/max/1400/1*-7LSUnYBXdx_UhUL4hfkYw.png "Agree to the ‘Unverified Package Disclaimer’")_Agree to the ‘Unverified Package Disclaimer’_

* **Step 4**: Follow the ‘Getting started’ in order to have the `bee` node fully operational.

![Follow the ‘Getting started’](https://miro.medium.com/max/1400/1*E9fW2Od5z36vbw5tiU3ifg.png "Follow the ‘Getting started’")_Follow the ‘Getting started’_

**Step 5**: Fund your node so that it may participate in the active storage and forwarding of data within the Swarm. Get your node’s Gnosis Chain address (referred to in the [logs](http://my.dappnode/#/packages/swarm.public.dappnode.eth/logs) as _‘using ethereum address’_.

* Send to the node’s address on **Gnosis Chain:**
* Approximately 0.1 `xDAI` which will be used by the node to pay for gas fees when deploying the chequebook and cashing any subsequent cheques received (or for initiating stamp purchases etc).
* The amount of `xBZZ` specified in the [‘Initial Chequebook Deposit’](http://my.dappnode/#/packages/swarm.public.dappnode.eth/config) configuration option from Step 2.

![](https://miro.medium.com/max/1400/1*0F8Z2Eb5w3NbtGlw-mGVwg.png)_Logs that contain the node’s Gnosis Chain address (referred to as ‘ethereum address’)._

* **Step 6**: Confirm the node is operational. You can do this by using the packaged [Bee Dashboard](http://dashboard.swarm.public.dappnode/) (direct link) or you can access this through the “UI” link on the [Swarm package ‘Info’ page](http://my.dappnode/#/packages/swarm.public.dappnode.eth/info).
* If your node is working correctly, you should see something similar to the below screenshot:

![Fully functional swarm dashboard.](https://miro.medium.com/max/1400/1*ajxsxwFWbE-bow9qv9jLzA.png "Fully functional swarm dashboard.")_Fully functional swarm dashboard._

# Enjoy unstoppable content 🎉

Congratulations, you have successfully setup a `bee` client to use the Swarm on Dappnode. By running a full-node, you have the most optimal setup, reducing reliance on intermediaries, and at the same time, contributing to the decentralisation of data, and gradual elimination of those pesky data silos. [Bella ciao!](http://bee.swarm.public.dappnode:1633/bzz/dwikipedia.eth/#/en/wiki/Bella_ciao)

# Swarm testnet (for developers) 🔧

**WARNING: The following instructions contain details for configuring the Swarm _testnet_, which is designed as a no-jeopardy, zero-cost testnet for developers to test app deployments. There are NO financial incentives for participating in the testnet.**

So, you’re a developer and you want to develop the latest and greatest Dapp. Your idea is so great, you are determined to make it _unstoppable_, so even your mistakes will be out there for a long time! It’s best that you test first on the Swarm testnet prior to unleashing your creation on world. 🚀

# Testnet Installation

The process for installing the Swarm testnet is predominately the same as the Swarm mainnet, except the package names are obviously different:

* [Install Swarm Testnet](http://my.dappnode/#/installer/swarm-testnet.public.dappnode.eth) (direct link).

# Testnet differences

The following is a list of the differences for the Swarm Testnet dappnode package:

* **Blockchain**: The Swarm testnet operates on the Goerli blockchain. Follow the ‘[Getting Started](http://my.dappnode/#/packages/swarm-testnet.public.dappnode.eth/info)’ directions for funding testnet nodes.
* **NOTE**: Goerli (execution layer) has merged with the _Prater_ beacon chain (consensus layer). Therefore to run a local Goerli node, you will also need to run a Prater beacon chain node.
* **ENS**: The `BEE_RESOLVER_OPTIONS` has been configured for the ENS deployment on Goerli (to keep in the spirit of ‘zero-cost’ testing). Therefore any ENS names that are registered on **mainnet** will not resolve on the testnet.
* **Ports**: The ‘standard’ ports for the `bee` client software are offset by 100, ie:
* `BEE_API_ADDR: :1733`
* `BEE_DEBUG_API_ADDR: :1735`

# Level up your Swarm wizardry 🧙‍♂️

Dappnode is actually a relatively powerful system, that enables fast iteration of development in complex, multi-component environments. In the recent [Wikipedia on Swarm](https://gitcoin.co/issue/28926) bounty challenge, a single Dappnode was utilised to _push the entire English Wikipedia to Swarm_ — in just 2 days using an Intel NUC i7, with 32 GB DDR4 RAM and 4TB NVME SSD.

Now, as those familiar with `bee` would know, it may take a _long_ time to upload data, so to speed this up, a custom Swarm package was uploaded to a local Dappnode - with the `bee` node software modified to increase the concurrency.

To deploy a _custom_ swarm package to your Dappnode:

1. Fork the [dappnodepackage-swarm](https://github.com/rndlabs/dappnodepackage-swarm) repository. In particular the [boulder-pusher](https://github.com/rndlabs/dappnodepackage-swarm/tree/boulder-pusher) branch.
2. Ensure that you have an appropriate build environment, including: `npm`, `npx`, build-essentials to your distribution, `docker` and `docker-compose`.
3. Connect to your Dappnode using WiFi or VPN.
4. In the cloned repository on the `boulder-pusher` branch:

* Modify the package name in `dappnode_package.json` otherwise installation of this package on your Dappnode may override your existing production version.
* **WARNING**: If you do not rename the package, and instead choose to override a production version of `swarm.public.dappnode.eth` or `swarm-testnet.public.dappnode.eth`, and you subsequently have auto-updates enabled, this may result in your custom package being overridden when new versions of the production packages are pushed.
* Modify the `bee` `Dockerfile` as required to point to your dirty `bee` repository.

5\. Run `npx @dappnode/dappnodesdk build --timeout 2h`. This will build docker containers and upload the package to the local IPFS node on your Dappnode. Note that the 2 hour timeout can be omitted if you only compile for `amd64` architecture (which requires modification of `dappnode_package.json` to remove `arm64` compilation targets.

6\. Enjoy the custom version of `bee` 🐝.

**WARNING:** If you choose to use the custom version of `bee` referenced in `boulder-pusher`, this **WILL** consume more resources in terms of computing **AND** it will issue more cheques / consume more financial resources. At the moment the price oracle on Swarm is held at an artificially low level. Uploading the entire English Wikipedia required \~6 xBZZ, of which 5 xBZZ was used for a stamp, and approximately 0.5 xBZZ was used in cheque payments.

# Show your love ❤️ Support Swarm Community Members!

Not only was the Swarm Dappnode package created by MFW78, he also wrote this article ( [https://mirror.xyz/mfw.rndlabs.eth/0xImoscth-vf31BzcCnpTBBps9uh1Xrs65XgrwxJDog](https://mirror.xyz/mfw.rndlabs.eth/0xImoscth-vf31BzcCnpTBBps9uh1Xrs65XgrwxJDog "https://mirror.xyz/mfw.rndlabs.eth/0xImoscth-vf31BzcCnpTBBps9uh1Xrs65XgrwxJDog") ). Thank you for supporting Swarm!

# Contributors (Pull Requests / Issues) 🔧

One of the best, and free (monetarily) ways to show your love for the Swarm is to contribute to it! Please file [issues and/or feature requests](https://github.com/rndlabs/dappnodepackage-swarm/issues/new/choose) on the [dappnodepackage-swarm Github repository](https://github.com/rndlabs/dappnodepackage-swarm) (or alternatively if your issue is specific to the Swarm Testnet package, you can find it’s repository [here](https://github.com/rndlabs/dappnodepackage-swarm-testnet)).

# Donations 💰 Support MFW78

Alternatively, if you’re feeling generous and you’re a fan of the work that I do, any support you can give is appreciated. You can donate to my `0xe618050f1adb1f6bb7d03a3484346ac42f3e71ee` address on Gnosis Chain or Ethereum mainnet. All donations are appreciated and will be used to support further development in this area. 🫶

Become part of our community, and don’t miss out on all the latest news.

* **Follow community news on** [**Twitter**](https://twitter.com/ethswarmhive)**, and development news** [**here**](https://twitter.com/ethswarm)**.**
* **Discussions about Swarm can be found on** [**Reddit**](https://www.reddit.com/r/ethswarm/)**.**
* **All tech support and other channels have moved to** [**Discord**](https://discord.gg/wdghaQsGq5)**!**
* **Please feel free to reach out via info@ethswarm.org**
* **Join the newsletter!** [**Subscribe here**](https://www.ethswarm.org/newsletter.html)**.**
* **Subscribe to the** [**Swarm Foundation YouTube channel**](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos)**.**