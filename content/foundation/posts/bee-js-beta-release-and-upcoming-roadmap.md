+++
banner = ""
categories = []
date = 2021-03-04T04:00:00Z
description = "Only one month after our alpha release, we are happy to announce the beta release of Bee-js. It’s a Javascript library which exposes the Bee functionalities and makes it easy to use in web projects."
references_and_footnotes = []
title = "Bee-js beta release and upcoming roadmap"

+++
Only one month after our alpha release, we are happy to announce the beta release of Bee-js. It’s a Javascript library which exposes the Bee functionalities and makes it easy to use in web projects.

The beta version adds support for **Feeds** and **Single-Owner Chunks** along with **Balance, Chequebook and Settlement** APIs.

You can download it from here:

[https://www.npmjs.com/package/@ethersphere/bee-js](https://www.npmjs.com/package/@ethersphere/bee-js "https://www.npmjs.com/package/@ethersphere/bee-js")

Here is the detailed changelog:

[https://github.com/ethersphere/bee-js/releases/tag/v0.5.1](https://github.com/ethersphere/bee-js/releases/tag/v0.5.1 "https://github.com/ethersphere/bee-js/releases/tag/v0.5.1")

We also get a lot of questions about our future plans, so we thought it’s high time to write about them.

The goal of the Bee Javascript team is to make **decentralized applications** on Swarm **possible and easy**. Currently, Bee provides the basic facilities to host a web application. However, the data being content-addressed (as opposed to location-addressed with the traditional websites) introduces many new, unsolved challenges regarding the security model and the way we access and handle user data.

Our approach is to create libraries and tooling in Javascript for application developers to make websites as easy for this new decentralized platform as it is with the current web platform while providing new possibilities that are not available in the centralized world.

At the moment, there are two research areas that we are focusing on: providing **higher level APIs** for app developers and a **browser extension** for Swarm-enabled dapps.

# Higher level API

The higher level API will support features which are not currently available through the [Bee API](https://docs.ethswarm.org/api/) or not easy to use. Such features are, for example, manifests, ACLs, client-side encryption, decentralized identity handling and a default key exchange protocol.

Later, on top of these features, we are planning to build an even higher level abstraction layer, which is often asked for by developers first trying to build decentralized applications. This higher level library (dubbed Dapp DB) includes features such as a key/value database with collections, indexing & querying. It will provide a data-mapping layer and access control to easily integrate with existing application data models. Also, we plan to include messaging protocols as basic building blocks to facilitate making social and sharing applications (forums, chat, photo albums etc.).

# Swarm browser extension

Our other ongoing effort is a [swarm browser extension](https://github.com/ethersphere/swarm-extension), which we currently use as a research vehicle to find out the limitations of the current browsers and provide potential answers and direction for creating a new model for dApps. Everyone is welcome to raise [issues](https://github.com/ethersphere/swarm-extension/issues) and contribute to the future decentralized application environment by having a conversation with us!

We are actively working on adding protocol handling for the bzz protocol. The extension will inject swarm API for Dapps, providing convenient access and security as well. It will manage network connections (local, gateway etc.) and handle different identities.

We continuously feedback the results of our work to the Bee Go team and provide proposals on API changes and new features in order to make Swarm a great platform for dApps.

# Other projects

There are so many ideas in this space but too little time so we need to strictly prioritize what we are working on. Fortunately, there are many promising projects and talented individuals pushing the boundaries, so we are actively looking for collaborations with others and build solutions together in an open manner.

That said, we have some projects in mind that we are considering pursuing in the future, after we have reached the milestones described above.

For example, we have done some exploratory work regarding how gateways could be used to help transition users to a decentralized model or just to provide alternate business models. This includes incentivizing gateways, providing ways to identify users and enable balance, payment support, and micro transactions for certain web and mobile use-cases.

We are also interested in doing further research in libp2p webrtc connections for a JS light node, compiling Bee Go code to WASM, and maybe even full node functionality in Javascript.

If any of these sound interesting to you, don’t hesitate to contact us on our official [tech support channel on Discord](https://discord.gg/ykCupZMuww).

# Join Swarm’s community

* **Follow community news on** [**Twitter**](https://twitter.com/ethswarmhive)**, and development news** [**here**](https://twitter.com/ethswarm)**.**
* **Discussions about Swarm can be found on** [**Reddit**](https://www.reddit.com/r/ethswarm/)**.**
* **All tech support and other channels have moved to** [**Discord**](https://discord.gg/wdghaQsGq5)**!**
* **Please feel free to reach out via info@ethswarm.org**
* **Join the newsletter!** [**Subscribe here**](https://www.ethswarm.org/newsletter.html)**.**
* **Subscribe to the** [**Swarm Foundation YouTube channel**](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos)**.**