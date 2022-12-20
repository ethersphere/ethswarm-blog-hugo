+++
banner = "/uploads/sun.webp"
categories = ["Development Updates"]
date = 2020-12-04T04:00:00Z
description = "By 25 January 2021, the cluster of nodes running the old Swarm network maintained by the Swarm team will be brought offline. As of this date, the proof of concept network is considered deprecated and the old Swarm codebase will no longer be maintained by the Swarm team. Those running services on the old testnet are encouraged to arrange for immediate migration to the new Bee client.\n\n"
references_and_footnotes = []
title = "The sun is setting for the old Swarm network"

+++
![](https://miro.medium.com/max/1300/1*9s602o6H3bfoc6JliTMMLg.jpeg =650x365)

**TL;DR**

**By 25 January 2021, the cluster of nodes running the old Swarm network maintained by the Swarm team will be brought offline. As of this date, the proof of concept network is considered deprecated and the old Swarm codebase will no longer be maintained by the Swarm team. Those running services on the old testnet are encouraged to arrange for immediate migration to the new Bee client.**

# Bee — the new client

Throughout the early years, the Swarm team were working on a Proof of Concept series. Since POC2, the team has operated a cluster of nodes serving as the core for a public testnet. To this day, this testnet is hosting a good deal of dapps supporting an ecosystem around the project and serving as an experimental testbed for the rich set of features Swarm has come to provide.

In 2020, the team decided to launch a new effort to deliver 1.0 mainnet release with production-grade client code. The new Bee client and network bring the benefits of a higher quality codebase, integrating lessons learned in the development of the old client. It is based on the more prevalent and better maintained libp2p library for its networking layer.

The development of Bee has been progressing at a fast pace, already closing in towards feature parity with the old client while even offering some additional features. For developments and updates, refer to the [monthly updates released as blog posts](https://ethswarm.medium.com/).

The additions compared to the old client include features such as Zero Leak Messaging, bandwidth incentives and more.

The incentive layer brings with it a Swarm native token called BZZ. It is currently deployed to the Ethereum Goerli testnet, planned to move to the Ethereum Mainnet with the 1.0 release.

Features still to be developed at the time of writing to achieve full feature parity are the feeds data structure and Access Control Tries.

The Bee client is on a path towards many new features, allowing the network to be scalable and self-sustaining.

Keep in mind that the new Bee network is, as is the case with the older one, considered a testnet and comes with absolutely no guarantees — it is provided “as is”. The Swarm team only provides some of the nodes needed for it to function, to facilitate testing and development of the technology and those using it, and has no control over the other nodes, users or data stored.

# What should projects relying on old Swarm clients do?

Due to its decentralised nature and other properties, it is hard to pinpoint who the users of the old Swarm network are and which features they use and need. Therefore, the initiative to take the required steps lies with these projects. The Swarm team provides a dedicated support channel to help migrate these projects.

Migrations to the new Bee client are also considered to receive grants in BZZ tokens under the [grants programme](https://swarmgrants.typeform.com/to/O3qL6VdO) to help ease the migration, if appropriate.

# How to move over to Bee

Bee is a Swarm client implemented in Go. It’s the basic building block for the Swarm network: a private, decentralised, censorship-resistant, and self-sustaining network for storing (application) data.

A good start is to look at [the Bee instructions](https://docs.ethswarm.org/) on installing, configuring and running Bee nodes. Different scenarios are covered — from building and running Bee as a binary, to installing a package and running it as a service.

If a feature for a project is missing, please contact the Swarm team immediately.

Any data stored on the old Swarm network will have to be moved to the new network. The process will depend on each particular use case, but might be as simple as exporting and re-uploading the data to the new network.

The source code for Bee can be found in the [Bee GitHub repository](https://github.com/ethersphere/bee).

The specification and design for the Swarm network, on which the Bee client is also based, can be found in the [Book of Swarm](https://swarm-gateways.net/bzz:/latest.bookofswarm.eth/the-book-of-swarm.pdf).

# Join Swarm’s community

* Follow community news on[ Twitter](https://twitter.com/ethswarmhive), and development news[ here](https://twitter.com/ethswarm).
* Discussions about Swarm can be found on[ Reddit](https://www.reddit.com/r/ethswarm/).
* All tech support and other channels have moved to[ Discord](https://discord.gg/wdghaQsGq5)!
* Please feel free to reach out via [info@ethswarm.org](mailto:info@ethswarm.org)
* Join the newsletter! [**Subscribe here**](https://www.ethswarm.org/newsletter.html).
* Subscribe to the[ Swarm Foundation YouTube channel](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos).