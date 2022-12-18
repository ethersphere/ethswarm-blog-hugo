+++
banner = ""
categories = ["Updates"]
date = 2022-05-17T04:00:00Z
description = "This latest release is an accumulation of a lot of work done in the last couple of months by the team. We’ve improved and refactored substantial amount of components and areas of the codebase as well as fixed a few critical bugs"
references_and_footnotes = []
title = "Bee v1.6 Release"

+++
The Swarm Foundation has just released Bee v1.6! **Please update your nodes!**

This latest release is an accumulation of a lot of work done in the last couple of months by the team. We’ve improved and refactored substantial amount of components and areas of the codebase as well as fixed a few critical bugs. The node now has an option to bootstrap the postage information partially from a snapshot stored on Swarm(!). This saves on the initial syncing time significantly, and reduces the amount of chain calls you would need to do.

​​After deploying this version your node will need a complete blockchain resync, so please allow it time to sync and in case you’re updating several nodes at the same time — make sure to stage the update in a way that does not cause a lot of them to go offline at the same time due to the long restart time caused by chain syncing.

# Breaking changes

* Global pinning has been discontinued from bee. We’re looking for ways to enable this sort of solution as an L2 solution on Swarm ([#2906](https://github.com/ethersphere/bee/pull/2906), [#2869](https://github.com/ethersphere/bee/pull/2869))
* Nodes will now try to connect to the mainnet by default. In order to connect to the testnet you must specify `--mainnet=false` ([#2859](https://github.com/ethersphere/bee/pull/2859))

# Hardening

* Chain syncing errors will again result in 24h blocking ([#2922](https://github.com/ethersphere/bee/pull/2922))
* We’ve improved resilience on hibernation and network failure ([#2887](https://github.com/ethersphere/bee/pull/2887))
* Added a missing stream reset stream on add context header fail ([#2885](https://github.com/ethersphere/bee/pull/2885))

# New features

* Added a new db indices command to debug database indices ([#2924](https://github.com/ethersphere/bee/pull/2924))
* Added a wallet endpoint to display wallet information for various purposes ([#2900](https://github.com/ethersphere/bee/pull/2900))
* Exposed current block height from chain backend for the chainstate endpoint so that chain syncing status can be displayed ([#2893](https://github.com/ethersphere/bee/pull/2893))
* The node will now log its own overlay address on startup ([#2930](https://github.com/ethersphere/bee/pull/2930))
* Print required funds for gas and respect deployment gas price ([#2861](https://github.com/ethersphere/bee/pull/2861))
* The node has now an option to bootstrap the postage information partially from a snapshot stored on Swarm(!). This saves on the initial syncing time significantly, and reduces the amount of chain calls you would need to do ([#2814](https://github.com/ethersphere/bee/pull/2814), [#2910](https://github.com/ethersphere/bee/pull/2910))

# Bug Fixes

* Added fallback content length check in middleware ([#2907](https://github.com/ethersphere/bee/pull/2907))
* Fixed a bug where unpinning of encrypted references resulted in an error ([#2896](https://github.com/ethersphere/bee/pull/2896))
* Fixed a panic for the stewardship endpoint in dev mode ([#2889](https://github.com/ethersphere/bee/pull/2889))
* CORS are now allowed in dev mode ([#2866](https://github.com/ethersphere/bee/pull/2866))
* Fixed a deadly deadlock in sharky that was caused when a context was cancelled on a Read call ([#2932](https://github.com/ethersphere/bee/pull/2932), [#2948](https://github.com/ethersphere/bee/pull/2948))
* Fixed a bug where an error on shutdown would cause issues when reloading stamp issuers on startup ([#2914](https://github.com/ethersphere/bee/pull/2914))
* Fixed a bug where the wrong amount was displayed when purchasing a postage stamp in dev mode ([#2945](https://github.com/ethersphere/bee/pull/2945))
* Removed the free slot optimization from sharky to circumvent shard leakage ([#2953](https://github.com/ethersphere/bee/pull/2953))

# Performance improvements

* The postage package has been rewritten and has significant simplifications that should result in a smoother and more correct operation ([#2810](https://github.com/ethersphere/bee/pull/2810), [#2890](https://github.com/ethersphere/bee/pull/2890), [#2895](https://github.com/ethersphere/bee/pull/2895))

[**For the full release notes including a complete PR rundown, please read here**](https://github.com/ethersphere/bee/releases/tag/v1.6.0)

#   
Join Swarm’s community

* **Follow community news on** [**Twitter**](https://twitter.com/ethswarmhive)**, and development news** [**here**](https://twitter.com/ethswarm)**.**
* **Discussions about Swarm can be found on** [**Reddit**](https://www.reddit.com/r/ethswarm/)**.**
* **All tech support and other channels have moved to** [**Discord**](https://discord.gg/wdghaQsGq5)**!**
* **Please feel free to reach out via info@ethswarm.org**
* **Join the newsletter!** [**Subscribe here**](https://www.ethswarm.org/newsletter.html)**.**
* **Subscribe to the** [**Swarm Foundation YouTube channel**](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos)**.**