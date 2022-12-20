+++
banner = ""
categories = ["Development Updates"]
date = 2022-02-04T23:00:00Z
description = "With 2021 behind us, the Swarm team entered the new year at the usual pace, working hard to make Swarm features complete by the end of the year."
references_and_footnotes = []
title = "Development Update — December 2021 & January 2022"

+++
With 2021 behind us, the Swarm team entered the new year at the usual pace, working hard to make Swarm features complete by the end of the year.

December was an important month, full of notable achievements. Not only did the team successfully meet their [first technical milestone](https://medium.com/ethereum-swarm/announcing-the-swarm-foundation-technical-milestones-e66bba8dc6b) (persistent and reliable storage of small files), but they also presented the ecosystem roadmap and made other important announcements on the [Gather, Swarm](https://www.youtube.com/watch?v=oNJMybgus40)! event.

2021 will always remain a special one for the Swarm organisation. Let’s take a look at some of the major milestones that were reached last year:

* The private and public token sale; Swarm gets funded
* Swarm Foundation is established
* Swarm testnet airdrop — March to August 2021
* Mainnet launch in June 2021
* The Swarm Summer School — August 2021
* First waves of grant projects kickstarted Swarm’s ecosystem (now with more than 60 projects already building on Swarm)
* Technical & ecosystem roadmaps — December 2021
* The network becomes reliable for uploading and downloading small files

After a short and well-deserved new year’s break, the Swarm team continued with the work towards the next milestones on the technical roadmap.

**Make sure you don’t miss the We Are Millions hackathon**

From 1–21 March, artists, gamers, developers, activists, crypto and non-crypto people will come together in the 2nd [Fair Data Society](https://fairdatasociety.org/) Festival & Hackathon, organised by Swarm & Partners.

[Read more about the hackathon here](https://medium.com/ethereum-swarm/we-are-millions-building-a-better-web-48687b03f8dd).

Without further ado, let’s dive into what was happening in December 2021 and January 2022.

## **Bee Track**

**December 2021:**

* Released bee v1.4.1 to the mainnet

**January 2022:**

* Working on fixes to problems detected in production and released a release candidate for v1.4.2

## **DevOps Track**

**December 2021:**

* Release and deployment of the [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.4.1).
* Released and deployed the [gateway-proxy](https://github.com/ethersphere/gateway-proxy) to the testnet.
* Released several versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest v0.9.0) with support config from git

**January 2022:**

1. Released and deployed the [gateway-proxy](https://github.com/ethersphere/gateway-proxy) to the mainnet (v0.2.1).
2. Upgraded all internal goerli and xdai clients to latest stable versions.

## **JS Track**

**December 2021:**

1. **Released a new versions of** [**Bee-js**](https://github.com/ethersphere/bee-js)**, the latest is v3.1.0**

* Bee v1.4.1 version compatibility
* Node endpoint support for getting information about which mode the Bee node is running
* Support for chunk endpoint enabling chunk level operations directly
* Stamp usage utility function for easier calculation of stamp usage

**2. Released a new version of** [**Swarm CLI**](https://github.com/ethersphere/swarm-cli)**, the latest is v1.9.0**

* Bee v1.4.1 version compatibility
* Feed download support
* Print node info in status command
* Bzz.link support

**3. Released several new versions of** [**Bee Dashboard**](https://github.com/ethersphere/bee-dashboard)**, the latest is v0.12.0**

* Bee v1.4.1 version compatibility
* Support for uploading and downloading folders and websites
* Identity and feed management support
* Many usability improvements

**4. Released a new version of the experimental** [**Swarm Extension**](https://github.com/ethersphere/swarm-extension)**, the latest is v0.3.0**

* Bee v1.4.1 version compatibility
* It now comes with a Bee Dashboard bundled that can be invoked with pressing a button and all the functionality of the dashboard is available from the extension as well.

**5. Released a new version of the** [**Gateway frontend**](https://github.com/ethersphere/gateway)**, the latest is v0.2.0**

* Bee v1.4.1 version compatibility
* Support for uploading and downloading folders and websites
* Minor usability improvements

**6. Released a first public version of the** [**Gateway proxy service**](https://github.com/ethersphere/gateway-proxy)**, latest version is v0.2.0**

* Postage stamp auto buying support
* Authorisation key support
* Bzz.link subdomain support

**January 2022:**

* Released new version of Bee-js, see release notes:

[https://github.com/ethersphere/bee-js/releases/tag/v3.2.0](https://github.com/ethersphere/bee-js/releases/tag/v3.2.0 "https://github.com/ethersphere/bee-js/releases/tag/v3.2.0")

* Released new version of Bee Dashboard, see release notes:

[https://github.com/ethersphere/bee-dashboard/releases/tag/v0.13.0](https://github.com/ethersphere/bee-dashboard/releases/tag/v0.13.0 "https://github.com/ethersphere/bee-dashboard/releases/tag/v0.13.0")

* Release new version of Gateway, see release notes:

[https://github.com/ethersphere/gateway/releases/tag/v0.2.1](https://github.com/ethersphere/gateway/releases/tag/v0.2.1 "https://github.com/ethersphere/gateway/releases/tag/v0.2.1")

* Released new version of Swarm-CLI, see release notes:

[https://github.com/ethersphere/swarm-cli/releases/tag/v1.10.0](https://github.com/ethersphere/swarm-cli/releases/tag/v1.10.0 "https://github.com/ethersphere/swarm-cli/releases/tag/v1.10.0")

## **Research Track**

**December 2021:**

* We entered a new phase in the research of storage incentives. From adversarial thinking, trying to push the boundaries of what is possible, to consolidating and clearly defining where we arrived. Currently, two methodologies of doing postage redistribution are candidates
* The research team worked on a proposal to make the push sync protocol more resilient to the observed network conditions

**January 2022:**

* Further specifying “density proofs”, which is a compacted proof in which the node reveals how many chunks it was storing–part of the storage incentive scheme
* Addressing issues related to density proofs and how they could potentially be created without actually storing the required chunks
* Started specifying the smart-contracts needed for the storage incentives scheme

## **Ecosystem Track**

**December 2021:**

* The ecosystem roadmap was presented at the Gather, Swarm! event. If you missed it, you can watch the recording of the event on [YouTube](https://www.youtube.com/watch?v=oNJMybgus40).
* A new wave of grants was announced at the Gather, Swarm! event. [You can apply for Swarm grants here](https://my.ethswarm.org/grants).

**January 2022:**

* Organisational work on the [We Are Millions hackathon](https://medium.com/ethereum-swarm/we-are-millions-building-a-better-web-48687b03f8dd)

## **Events**

**December 2021:**

* Swarm Foundation concluded the year with a nice recap event, taking place in the metaverse. The technical roadmap and ecosystem roadmap were introduced along with other interesting announcements and presentations. You can watch the event on YouTube — [follow this link](https://www.youtube.com/watch?v=oNJMybgus40).

**January 2022:**

* No events were held in January 2022, but don’t forget to register for the [We Are Millions](https://www.wearemillions.online/) hackathon taking place in March 2022. [More info here](https://medium.com/ethereum-swarm/we-are-millions-building-a-better-web-48687b03f8dd).

# Join Swarm’s community

* Follow community news on[ Twitter](https://twitter.com/ethswarmhive), and development news[ here](https://twitter.com/ethswarm).
* Discussions about Swarm can be found on[ Reddit](https://www.reddit.com/r/ethswarm/).
* All tech support and other channels have moved to[ Discord](https://discord.gg/wdghaQsGq5)!
* Please feel free to reach out via [info@ethswarm.org](mailto:info@ethswarm.org)
* Join the newsletter! [**Subscribe here**](https://www.ethswarm.org/newsletter.html).
* Subscribe to the[ Swarm Foundation YouTube channel](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos).