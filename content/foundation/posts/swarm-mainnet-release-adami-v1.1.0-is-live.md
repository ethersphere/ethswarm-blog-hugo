+++
banner = ""
categories = ["Development Updates"]
date = 2021-08-23T22:00:00Z
description = "On 21 June 2021, Swarm released its first mainnet client. Today, Swarm is releasing a new version 1.1.0, fixing bugs and adding four new features."
references_and_footnotes = []
title = "Swarm Mainnet Release — Adami v1.1.0 is live!"

+++
On 21 June 2021, Swarm released its first mainnet client. Today, Swarm is releasing a new version 1.1.0, fixing bugs and adding four new features.

**Four testnet releases during the summer**

Testnet and mainnet are two different environments. Some new network behaviours appeared after mainnet launch. With the community’s feedback and some heavy coding by the Bee team, it was possible to resolve most hiccups and performance. Four new releases were rolled out to the testnet. After significant testing done by both the Bee team and the community, Adami v1.1.0 is being released today. All future releases are expected to follow the same release rigour.

Bee v1.1.0 has four new features. A lot of focus has been devoted to inspecting the production network behaviour, ironing out all sorts of kinks, bugs, and performance issues. Upload resilience has been improved. This means that data should upload faster and more reliably. One of the main focus points is to constantly improve on these basic features.

The Bee team has also focused on improving the developer experience and made building on Swarm easier and faster.

If you are running a Bee node on mainet, update as soon as possible. Please check the [release notes](https://github.com/ethersphere/bee) and the [upgrade documentation](https://docs.ethswarm.org/docs/working-with-bee/upgrading-bee/).

# AN IMPORTANT NOTE TO NODE OPERATORS!

The xDai chain is going to implement the London hardfork. Please stay informed and update your infrastructure accordingly, as OpenEthereum clients are still not guaranteed to be supported after the hardfork!

Let’s take a look at what’s new in the v1.1.0 release. [For the full update details, please visit the release notes here](https://github.com/ethersphere/bee/releases/tag/v1.1.0).

# There are two breaking changes

* The log field traceid was renamed traceID
* The standalone mode has been phased out (in favour of dev mode)

# Four new features

* Added estimation of the expected lifetime of batches. Now, uploaders canhave a better idea of how long their data will persist.
* Added possibility to cancel transactions so nodes are not stuck because gas costs have suddenly increased
* Allow node to start in dev mode which does not require a blockchain backend. All storage is done in memory and backend behaviour is mocked, so you can develop your apps on Swarm even faster! Run ./bee dev and give it a try
* Add chunk upload endpoint that makes it possible to stream chunks via websockets

# Performance improvements & bugfixes

* Fixed deadlocks on context done in pushsync and retrieval protocols. This caused goroutine leaks and elevated memory consumption
* Fixed a mantaray lookup bug where files that have shared prefix aren’t found correctly
* Fixed a bug in kademlia that caused choosing a sanctioned peer closest to a chunk
* Fixed excruciatingly long shutdown by allowing metrics to flush dirty
* Improved PSS efficiency
* Fixed wrong timestamp usage in time settlements
* Fixed correct blocktime for xdai
* Fixed possible gcSizeChange inconsistency
* Limit concurrent access to some parts of the api resources to improve API consistency, since bee does not support parallel on-chain operations
* Query header instead of block (resolves london hardfork related issues)
* Fixed a bug in the cancelled transactions nonce check
* Fixed unnecessary flushing of metrics that haven’t changed in kademlia

# Misc

* Updated go-ethereum version
* Bump clef in docker compose
* Added batchstore checksums
* Expose the transaction API early
* Add endpoint that emits information about collisions within all buckets of a batch
* Kademlia metrics flush in a separate goroutine in a way that doesn’t affect connection management due to long flush times

# Join Swarm’s testnet

As with any new software, updates and bug fixes are inevitable. Swarm’s team of developers is working hard to resolve issues reported by node operators. As usual, you can expect a few testnet releases with upgrades soon. You can follow those releases through a dedicated [Discord channel](https://discord.gg/wdghaQsGq5). The next mainnet release usually follows after the releases have been tested on the testnet. All mainnet releases are published on our social media channels.

The best way to help build a truly stable and resilient network is by running testnet nodes. If you’re operating many nodes on the testnet, please also consider helping us with pre-release testing. Contact the Bee team via [trainspotter@ethswarm.org](mailto:trainspotter@ethswarm.org).

Technical support and more information about the mainnet release is available on our [Discord channel](https://discord.gg/wdghaQsGq5).

# Join our community

* The Swarm team is reachable on [Discord](https://discord.gg/wdghaQsGq5). **All tech support and other channels moved there. Please join us on** [**Discord**](https://discord.gg/wdghaQsGq5)**!**
* Follow us on [**Twitter**](https://twitter.com/ethswarm).
* Discussions about Swarm on [**/r/ethswarm**](https://www.reddit.com/r/ethswarm) and [**/r/ethereum**](https://www.reddit.com/r/ethereum) subreddits.
* Please feel free to reach out via [**info@ethswarm.org**](mailto:info@ethswarm.org)
* Swarm up your inbox with our monthly newsletter! [**Subscribe here**](https://www.ethswarm.org/newsletter.html).