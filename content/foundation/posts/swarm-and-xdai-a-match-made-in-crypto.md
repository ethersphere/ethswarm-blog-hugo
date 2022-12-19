+++
banner = ""
categories = ["Tutorial "]
date = 2021-06-30T04:00:00Z
description = "With the launch of its mainnet, Swarm has reached what is probably the most important milestone in its existence. The Ethereum mainnet, however, is very expensive for the sort of transactions Swarm Bee generates. So Swarm has opted to use xDAI as a scaling solution."
references_and_footnotes = []
title = "Swarm and xDAI: a match made in crypto"

+++
_With the launch of its mainnet, Swarm has reached what is probably the most important milestone in its existence. The Ethereum mainnet, however, is very expensive for the sort of transactions Swarm Bee generates. So Swarm has opted to use xDAI as a scaling solution._

xDAI is an Ethereum Virtual Machine compatible blockchain. Unlike the Ethereum mainnet, it is a proof-of-stake network. This means that instead of having to resort to proof-of-work to mine blocks, validators agree on the veracity of the chain. Thanks to this, gas costs and transaction times are drastically lower than with the Ethereum mainnet. xDAI is bridged to the Ethereum mainnet, exactly what Swarm needs to operate the network.

> **_xBZZ Token contract address on xDAI:  
> 0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da_**

[https://blockscout.com/xdai/mainnet/tokens/0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da/token-transfers](https://blockscout.com/xdai/mainnet/tokens/0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da/token-transfers "https://blockscout.com/xdai/mainnet/tokens/0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da/token-transfers")

On Swarm, nodes collaborate in storing and routing chunks of data, partially motivated by financial incentives. The two main mechanisms in Swarm are SWAP and postage stamps. SWAP (Swarm Accounting Protocol) ensures that nodes collaborate in uploading and downloading data. Nodes collaborate for free within a certain limit, but require a settlement by means of BZZ when one peer requests more than it provides. Postage stamps enable the efficient allocation of Swarm’s scarce storage space. They are created by locking up BZZ in a smart-contract and subsequently attached to chunks. This is a signal to let node operators know how much the persistence of the content is worth.

![](https://miro.medium.com/max/1400/0*4CYv7vq4yp-AU1tG =700x724)

Needless to say, Bee nodes generate a lot of transactions. To make this efficient, cheap and scalable, Swarm has opted for xDAI as a sidechain. When a Bee running on the mainnet deploys a chequebook, this happens on xDAI. When node operators cash out cheques, they get xBZZ, the bridged version of the BZZ token. BZZ tokens can travel freely between the networks by using [OmniBridge](https://omni.xdaichain.com/bridge), a token bridge run by xDAI.

![](https://miro.medium.com/max/1400/0*rn2lez3i9Y2BwLVs =700x1038)

Important to know: when a new node is started, it will need some xDAI to deploy the chequebook. By sending BZZ over OmniBridge, a tiny bit of xDAI is added to the account on the xDAI network. This xDAI can be used as gas to pay for the node’s chequebook deployment.

Currently, Swarm is the most bridged token xDAI with 25k token holders.  
[https://blockscout.com/xdai/mainnet/bridged-tokens/eth](https://blockscout.com/xdai/mainnet/bridged-tokens/eth "https://blockscout.com/xdai/mainnet/bridged-tokens/eth")

# Be careful

Be aware that there are many fake BZZ circulating and scams out there. Always do your own research and double check the contracts and markets you’re interacting with. Swarm Foundation does not have any representatives, neither global nor local. Swarm Foundation will only communicate via official channels that can be found on [https://www.ethswarm.org](https://www.ethswarm.org "https://www.ethswarm.org").

# Join Swarm’s community

* **Follow community news on** [**Twitter**](https://twitter.com/ethswarmhive)**, and development news** [**here**](https://twitter.com/ethswarm)**.**
* **Discussions about Swarm can be found on** [**Reddit**](https://www.reddit.com/r/ethswarm/)**.**
* **All tech support and other channels have moved to** [**Discord**](https://discord.gg/wdghaQsGq5)**!**
* **Please feel free to reach out via info@ethswarm.org**
* **Join the newsletter!** [**Subscribe here**](https://www.ethswarm.org/newsletter.html)**.**
* **Subscribe to the** [**Swarm Foundation YouTube channel**](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos)**.**