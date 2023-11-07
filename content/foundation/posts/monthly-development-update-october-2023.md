+++
banner = "/uploads/dev-update-october.png"
categories = [ "Development updates" ]
date = 2023-11-05T00:15:00.000Z
description = "October has seen some important shifts in the wider Swarm ecosystem. The Bee Track successfully released Bee 1.17.5 featuring smaller but impactful improvements."
references_and_footnotes = [ ]
title = "Monthly Development Update – October 2023"
_template = "post"
+++

October has seen some important shifts in the wider Swarm ecosystem. The **Bee Track** successfully released **[Bee 1.17.5](https://github.com/ethersphere/bee/releases/tag/v1.17.5)** featuring smaller but impactful improvements. The team’s next steps are focused on refining the upload and download experiences, along with diligent monitoring of data longevity. 

Concurrently, the **Research Track** wrapped up development on Phases 3 and 4 of the [storage incentives roadmap](https://blog.ethswarm.org/foundation/2022/towards-the-world-computer.-the-swarm-network-upgrade-has-started./), focusing on rigorous quality assurance to ensure both normal and edge-case performance standards are met. Additionally, everything is ready for the new **Sepolia testnet** to go live. The **JS Track** also rolled out a new [Swarm Desktop App](https://www.ethswarm.org/build/desktop) compatible with Bee 1.17.5 and a new version of Etherproxy with multi-target support. 

Jumping over to the Ecosystem section: If you are looking for a way to bring your project into the growing Swarm network, the [Swarm Full Moon Grant Wave](https://my.ethswarm.org/grants) might just be the thing, so don’t hesitate to apply. [Fairdrive](https://blog.ethswarm.org/foundation/2022/towards-the-world-computer.-the-swarm-network-upgrade-has-started./) has new user-centric features and a **[fresh beta tester campaign for the Fairdrive Web App](https://twitter.com/FairDataSociety/status/1720050064305828218)** is out. 

[Swarm’s docs](https://docs.ethswarm.org/) are now even better with new sections for node operators and general updated texts. And last but not least, the next **Swarm Community Call** is on 30 November, but you can already send your questions to the teams [via this form](https://airtable.com/shrBRyrMkXFsJvLS3).


## Tracks

### Bee Track
* Bee [1.17.5](https://github.com/ethersphere/bee/releases/tag/v1.17.5) was released in mid-October. The key features are improved logging, compaction command that resizes sharky to the smallest possible, and some smaller bug fixes.
* Golang and Libp2p versions upgrades are on testnet.
* The team is currently working on observations on files regarding the upload and download experience, as well as the monitoring of long data availability. These are considered as the initial step to improve our upload and download performance.


### Research Track
* Development and testing of phase 4 and phase 3 is finished. We are currently performing  quality assurance on them for expected and abnormal behaviour for us to observe. 
* The migration path for the ph4 release is being tested and the breaking change will be communicated ahead of the release. 
* The encoder PR for the erasure encoding was completed this week, kicking off this EPIC for the research team that will be our main focus. 
* Our monitoring and statistics dashboards have been updated several times for data collection with all the changing contracts and environments. 
* Sepolia testnet is ready, contracts and token deployed, bee is ready, Sepolia node is running. Devops will deploy on Monday and it will be live. 


### JS Track
#### Swarm Desktop App
* A [new version](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.31.0) is out which upgrades to the latest 1.17.5 Bee.

#### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* Introduces ALLOWLIST configuration to manage private gateway moderation (disabled by default).
* Introduces READINESS_CHECK configuration to toggle chunk uploads for readiness checks (disabled by default).
* Fixes a circular JSON logging issue

#### Bee JS
* A [new version](https://github.com/ethersphere/bee-js/releases/tag/v6.4.1) is out which fixes axios default import fatal error when bee-js is a dependency of a dependency.

#### Etherproxy
* A [new version](https://github.com/ethersphere/etherproxy/releases/tag/v1.1.0) is out which adds multi-target support. If one JSON-RPC starts failing, it switches seamlessly to the next available target. Specify target as a comma-separated list of endpoints to enable this.

### Swarm Grants
* [Swarm Full Moon Grant Wave](https://my.ethswarm.org/grants)
* [Grants FAQs](https://blog.ethswarm.org/foundation/2023/grants-faqs/)

### Ecosystem

#### Fair Data Protocol
##### [Fairdrive Web App](https://app.fairdrive.dev.fairdatasociety.org/)
* We implemented a [search feature](https://github.com/fairDataSociety/fairdrive-theapp/issues/542) for contents: a search bar appears when entering a POD. 
* A checkbox is added to the login form which can [disable tracking activities](https://github.com/fairDataSociety/fairdrive-theapp/issues/557) with matomo.
* [Other enhancements & fixes](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-10-01..2023-10-31+).
* We have started a beta [tester campaign](https://twitter.com/FairDataSociety/status/1720050064305828218). 

##### [fdp-storage](https://github.com/fairDataSociety/fdp-storage/)
* New releases up until [v0.16.0](https://github.com/fairDataSociety/fdp-storage/releases).
* Multiple features beside necessary bug fixes: progress “bar” for data upload & download, uploading & downloading blocks of a file by index, added length assertion for pod list size, clearer postage batch error, enforce minimum block size for data upload, export length constants for pod and directory names, export PodTypes, Encryption, and Bytes.

##### [Create account page](https://github.com/fairDataSociety/fdp-create-account/)
* A [new fix](https://github.com/fairDataSociety/fdp-create-account/pull/299) helps to retry a registration when it is interrupted.

##### [FaVe](https://github.com/fairDataSociety/FaVe)
* [0.1.8 release](https://github.com/fairDataSociety/FaVe/releases/tag/v0.1.8) with updated dfs and docs.

##### [Fdp-play](https://github.com/fairDataSociety/fdp-play)
* includes Bee 1.17.2 related [changes](https://github.com/fairDataSociety/fdp-play/pull/97).


### DevOps
* Deployed 1.17.5 [Bee](https://github.com/ethersphere/bee) to testnet and mainnet.
* Released 0.13.10 [Beekeeper](https://github.com/ethersphere/beekeeper).


### DevRel
#### Docs update

* [A new section](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#maximizing-staking-rewards) on optimising reward chances for node operators has been added.  
* [Instructions ](https://docs.ethswarm.org/docs/bee/working-with-bee/backups#import-clef-keys)for importing keys from bee-clef were added.
* [Logging guidelines](https://docs.ethswarm.org/docs/bee/working-with-bee/logs-and-files#logging-guidelines) have been added.
* [Details](https://docs.ethswarm.org/docs/learn/technology/incentives#penalties) about freezing duration have been added.
* Section on [calculating TTL](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch#calculating-amount-needed-for-desired-ttl) has been added.


#### Apps

##### Etherjot
* This is a new project that provides a web interface for Etherjot, the Swarm decentralised blogging toolkit.
* [Sneak peek of the UI](https://github.com/ethersphere/etherjot-web). Can be tried out.


#### Content
* [State of the Network: September](https://blog.ethswarm.org/foundation/2023/state-of-the-network-september/)

### People & Culture team:
* Join the team and be a direct contributor. We are looking for Go Developers and Grant Managers. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



#### Events:
##### Swarm Community Call – October 2023
* The Swarm Community Call, our main monthly online event, was held on October 26. You can read a recap blog post about it [here](https://blog.ethswarm.org/foundation/2023/swarm-community-call-26-october-recap/).

 

#### Upcoming events
##### **[Swarm Community Call](https://www.addevent.com/event/tf17853994)** 
* Swarm Community Call, our main monthly online event, will take place on November 30 at 17:00 CET in the [Swarm Foundation Discord](https://discord.gg/PHqsVNSJ?event=1126056886773489675) ([add to calendar](https://www.addevent.com/event/Zm19180300)). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.

##### **[Dappnode & Swarm Foundation Partnership Twitter Spaces AMA](https://twitter.com/i/spaces/1djxXNbwlDVGZ)**
* Swarm and Dappnode, both pioneers in their respective spheres, craft a [partnership](https://blog.ethswarm.org/foundation/2023/swarm-and-dappnode-joining-forces-to-empower-decentralised-storage/) that amplifies the power and reach of decentralisation, facilitating storage capabilities.