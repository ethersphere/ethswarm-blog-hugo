+++
banner = "/uploads/dev-update-dec.png"
categories = [ "Development updates" ]
date = 2024-01-05T00:15:00.000Z
description = "The Research Track successfully concluded Phases 3 and 4 of the storage incentives roadmap, enhancing system security and network decentralisation. Erasure codes are currently in the testnet phase, with plans for a mainnet release."
references_and_footnotes = [ ]
title = "Monthly Development Update – December 2023"
_template = "post"
+++

The December release of **[Bee 1.18.2](https://github.com/ethersphere/bee/releases/tag/v1.18.2)** upgrades the previous version by improving sync intervals for nodes to collect missing chunks and stabilises CPU usage. Additionally, it features various bug fixes, UX improvements, **[enhanced dashboards](https://network.ethswarm.org/)** for better network observability, and a detailed write-up of **[Swarm specifications](https://papers.ethswarm.org/p/swarm-specification/)** to aid in understanding and possible new client development.

The **Research Track** successfully concluded Phases 3 and 4 of the storage incentives roadmap, enhancing system security and network decentralisation. Erasure codes are currently in the testnet phase, with plans for a mainnet release.

The **Fair Data Protocol team** has improved the UI in the Fairdrive Web App and separated the main and the development [login methods](https://github.com/fairDataSociety/fairdrive-theapp/pull/570). The main app uses Metamask authentication for new users, and the development app retains full functionality. 

**Swarm also has a [new website](https://www.ethswarm.org/)** and there’s a new dedicated subpage for **[Swarm Research Papers](https://papers.ethswarm.org/)**. 

The documentation includes **[a new section on erasure coding](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding)** and a new guide on [starting a blog on Swarm](https://docs.ethswarm.org/docs/desktop/start-a-blog). In addition, four new blogs are available for reading, including the recap of the [Swarm 2.0 event](https://blog.ethswarm.org/foundation/2023/swarm-2.0-swarm-is-production-ready-time-to-build/).

Don’t forget that the next **Swarm Community Call** is on **25 January at 17:00 CET**. **[Save the date](https://www.addevent.com/event/iH19625610)** and stay on track with all the latest news in Swarm. 


## Tracks
### Bee Track
* Release [1.18.2](https://github.com/ethersphere/bee/releases/tag/v1.18.2) is out, building upon the previous release:
    * The sync intervals are re-synced so that nodes can collect any potentially missing chunks from the network.
    * The initial syncing a node performs to collect missing chunks from peers (historical syncing) is now rate limited to lower and stabilise CPU usage.
    * Puller historical syncing is now rate-limited to not exceed 500 chunks/second.
    * Other various bug fixes & UX improvements.
* Dashboards have been enhanced, providing better network observability regarding data & network availability, and latency.


### Research Track
* Ph3 and Ph4 are released and after some weeks are continuing to perform as expected, which brings about a new level of security and decentralisation to the system. 
* The [Swarm specifications](https://papers.ethswarm.org/p/swarm-specification/) have been delivered and published which bring us another step closer to being able to independently recreate and understand Swarm.
* The [erasure codes](https://blog.ethswarm.org/foundation/2023/erasure-coding-supercharges-swarm/) are on the testnet and we will be gearing up for the 2.0 release to mainnet after we get community testing feedback and due process. 


### JS Track
#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* Released 6.7.0
    * Adds Utils function for calculating effective capacity
* [Staged erasure coding support](https://github.com/ethersphere/bee-js/pull/896)

#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* [Staged erasure coding support](https://github.com/ethersphere/swarm-cli/pull/487)

#### [Bee Dashboard](https://github.com/ethersphere/bee-dashboard)
* Released [0.25.0](https://github.com/ethersphere/bee-dashboard/releases/tag/v0.25.0)
    * Improves UX on postage stamp creation screen
    * Improves UX for stamp dilute and top-up

#### [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)
* Released [0.36.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.36.0)
    * Updates to Bee 1.18
    * Updates to Bee Dashboard 0.25.0
    * Adds Etherjot as a demo application

[Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* Released 0.10.0
    * Adds address remapping (REMAP) feature
* Released [0.11.0](https://github.com/ethersphere/gateway-proxy/releases/tag/v0.11.0)
    * Adds CID support to allowlist feature


### Ecosystem
#### Fair Data Protocol
##### [Fairdrive Web App](https://app.fairdrive.dev.fairdatasociety.org/)
* UI improvements [such as search bar, in-folder sort & list button](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-12-01..2023-12-31+)
* Now the main and development apps have a [different login method](https://github.com/fairDataSociety/fairdrive-theapp/pull/570). The main app only uses Metamask authentication for newcomers, and the development app has the full functionality.
* [Other changes and enhancements](https://github.com/fairDataSociety/fairdrive-theapp/pulls?q=is%3Apr+is%3Aclosed+closed%3A2023-12-01..2023-12-31).

##### [fdp-storage](https://github.com/fairDataSociety/fdp-storage/)
* New release with [v0.17.0](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.17.0).

##### [Create account page](https://github.com/fairDataSociety/fdp-create-account/)
* [Added zkEVM](https://github.com/fairDataSociety/fdp-create-account/pull/300) as a network option.
* Other [activities](https://github.com/fairDataSociety/fdp-create-account/pulls?q=is%3Apr+is%3Aclosed+closed%3A2023-12-01..2023-12-31+).

##### [Fairos-dfs](https://github.com/fairDataSociety/fairOS-dfs)
* [Updates and improvements](https://github.com/fairDataSociety/fairOS-dfs/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-12-01..2023-12-31+).
* [Release candidates](https://github.com/fairDataSociety/fairOS-dfs/releases) are strong, a new version coming soon.

##### [Fdp-contracts](https://github.com/fairDataSociety/fdp-contracts)
* New js library release:[ fdp-contracts-js-lib: v3.10.0](https://github.com/fairDataSociety/fdp-contracts/releases/tag/fdp-contracts-js-lib-v3.10.0)


### DevOps
* Deployed Bee [1.18.2](https://github.com/ethersphere/bee/releases/tag/v1.18.2) to testnet and mainnet.
* Released multiple versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest 0.15.1).


### DevRel
#### General
* The new ethswarm.org website has been [published](https://www.ethswarm.org/).
* The new [Swarm Research Papers subpage](https://papers.ethswarm.org/) was published.
* Swarm [Network Dashboard](https://network.ethswarm.org/), showcasing vital insights into key metrics, was published.


#### Docs update
* [New section](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding#uploading-with-erasure-coding) on erasure coding has been added to the documentation explaining the key concepts and usage of this newly added feature.
* The [/bzz](https://docs.ethswarm.org/api/#tag/BZZ) and [/bytes](https://docs.ethswarm.org/api/#tag/Bytes) endpoints in the API reference docs have been updated with the changes related to erasure coding. 
* A new section on [how to start a blog on Swarm](https://docs.ethswarm.org/docs/desktop/start-a-blog/) has been published.


#### Workshops
* [Decentralise Your Blog: A Guide to Censorship-Resistant Blogging](https://youtu.be/j2i77PuWh_0)
* How to set up a private Swarm gateway


#### Content
* [Swarm Community Call, 30 November – Recap](https://blog.ethswarm.org/foundation/2023/swarm-community-call-30-november-recap/)
* [Monthly Development Update – November 2023](https://blog.ethswarm.org/foundation/2023/monthly-development-update-november-2023/)
* [State of the Network: November](https://blog.ethswarm.org/foundation/2023/state-of-the-network-november/)
* [Swarm 2.0: Swarm is production ready, time to build](https://blog.ethswarm.org/foundation/2023/swarm-2.0-swarm-is-production-ready-time-to-build/)


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has multiple open positions. We are hiring a [Software Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/Software_Engineer_go_blockchain), [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go)), [QA Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/senior-software-engineer-go) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events:
##### **Swarm 2.0 - #generate freedom:** the annual winter solstice event
* The Swarm 2.0 virtual event was held on 21 December, unveiling the production ready network. You can read a recap blog post about the event [here](https://blog.ethswarm.org/foundation/2023/swarm-2.0-swarm-is-production-ready-time-to-build/).


### Upcoming events
##### **Swarm Community Call – 25 January 2024**
* The first Swarm Community Call of the year is coming up on 25 January – [add to calendar](https://www.addevent.com/event/iH19625610). Join us for our monthly call on Discord to stay fully informed! You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3).