+++
banner = ""
categories = ["Development updates"]
date = 2022-09-13T04:00:00Z
description = "his release will activate the first phase of the upgraded storage incentives. It is the first step that will later open the doors to rewarding node operators for providing storage to the network."
references_and_footnotes = []
title = "Breaking changes are coming to the Swarm network"

+++

**On 13th September** the Swarm Foundation will begin **the biggest upgrade** to the Swarm network since its mainnet launch in 2021. This release will activate **the first phase of the upgraded storage incentives**. It is the first step that **will later open the doors to rewarding** **node operators** for providing storage to the network.

# Don’t hesitate, update

Bee 1.8 is a breaking release, meaning that the previous versions of the Bee client will not be able to connect to this latest version (Bee v1.8.0). That’s why **node operators are required to upgrade their clients as soon as possible** or risk being disconnected from the network.

Below is a list of the most relevant changes you can expect in the latest release. There may be other breaking changes bundled in this release. To stay up to date, please [**refer to the final release notes**](https://github.com/ethersphere/bee/releases) for more details.

**Breaking changes & related updates**

- **Postage stamp smart contract update**: the postage stamp contract will be updated so that the value previously locked in postage stamp batches becomes redistributable, i.e. it will become available for reward payout.
- **Resyncing the batchstore**: current postage batches will be migrated and resynced in order to avoid data loss.
- **Overlay address calculation change**: the above changes will require node operators to mine a new overlay address.
- **Async refreshments**: this is a breaking change for light nodes and it will affect the calculation of payments for bandwidth.
- **Depth monitor**: there will be a change in how the storage radius is calculated to maximise the utilisation and therefore the profitability of a full node.
- **Handshake protocol version change**: with this change earlier versions will not be able to connect to newer versions anymore to avoid incompatibility on the network.

# When to expect changes

As mentioned at the beginning of this blog, the first phase will begin to roll out on 13th September when the changes will be deployed to mainnet.

If you experience any difficulties or have questions, please head over to the [**Swarm Foundation Discord**](https://discord.com/channels/799027393297514537/801438093927776286) (channel “node-operators”).

# Join the Monthly Ecosystem Call

Be the first to hear about updates, storage incentives and next steps in Swarm’s biggest network upgrade in the [next Monthly Ecosystem Call.](https://discord.gg/rb3gtvGGBF?event=1019262585268342864)
