+++
banner = ""
categories = ["Development updates"]
date = 2020-12-09T16:00:00Z
description = "As you probably know, we released the “Swarm Live” version of Swarm on 24 November 2020. This version has a lot more stability and improved performance, and it also has all the high-level features of the Swarm 1.0 release."
references_and_footnotes = []
title = "Swarm Live — Release notes and important links"

+++

As you probably know, we released the “Swarm Live” version of Swarm on 24 November 2020. This version has a lot more stability and improved performance, and it also has all the high-level features of the Swarm 1.0 release.

This blog is just a short recap of all the release notes and documentation links that you need. For a better understanding of the Swarm Live release, we recommend that you rewatch the [Swarm Live event](https://twitter.com/ethswarm/status/1331219946865532929), where our developers explain in detail how this release is different from the previous one.

**Important links:**

- [Swarm Bee Client documentation](https://docs.ethswarm.org/)
- [Bee Release notes](https://github.com/ethersphere/bee/releases)
- [Swarm Live event — Rinke Hendriksen explains the mechanics of Swarm incentives](http://bit.ly/33MbuyJ)
- [Swarm Live event — Janos Guljas explains what is new in Swarm Live](http://bit.ly/3onY2sX)
- [Swarm Live event — How to install and run a Swarm Bee node using DAppNode](http://bit.ly/39MSrIz)
- [Swarm Live event — Zero-leak messaging on Swarm demo](http://bit.ly/3orpAxx)

Another very important thing to note is that **we have stopped maintaining the old Swarm test network**. Those running services on the old testnet are encouraged to arrange for[ immediate migration to the new Bee client.](https://ethswarm.medium.com/the-sun-is-setting-for-the-old-swarm-network-46cdc8048f8b)

# Release notes

This release of Bee contains important new features, maintainability improvements, bug fixes, and performance increases. Besides improvements to Bee, we have also released software that aims to work together with Bee to improve the security and interoperability of your Swarm account.

# Bee Features:

- PSS mailboxing, meaning that you will now receive PSS messages — even if you were offline at the moment the message was sent
- Un(pinning) API for files and collections; we complete the pinning API in such a way that you can now pin and unpin your files and collections
- Granular management of the pin-counter, which allows the user to force-unpin certain chunks. This feature is only advised for advanced Bee users.
- Listing pinned chunks with pages
- Expose underlay address (logs/API) for nodes that are under a NAT protocol

# Bee Bug fixes:

- We removed the anonymous field in the tag reply
- Solve data inconsistency problems related to synching and garbage collection
- Improve concurrent handling of SWAP updates
- Passing context properly in protocols

# Bee Performance improvements:

- Optimization of resource usage of hashing upon upload and download
- No need to wait for the NAT manager to be ready in standalone mode
- Terminate idle connections on Bee HTTP server by adding timeouts to requests

**Bee-clef**

Bee-clef is a newly released package by the Swarm team, which aims to work together with the Bee node to increase the security and interoperability of your Swarm account. We strongly recommend the use of Bee-clef.
Please go to our [documentation](https://docs.ethswarm.org/docs/installation/bee-clef) or the [Bee-clef Github page](https://github.com/ethersphere/bee-clef) to learn more about Bee-clef and start using it today!
