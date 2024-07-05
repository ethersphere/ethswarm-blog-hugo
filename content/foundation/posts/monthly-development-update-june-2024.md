+++
banner = "/uploads/dev-update-june.jpeg"
images = [ "/uploads/dev-update-june.jpeg" ]
categories = [ "Development updates" ]
date = 2024-07-05T00:00:00.000Z
description = "The Research Track began writing specifications and discovery on Swarm multichain support options and will be moving to development ASAP."
references_and_footnotes = [ ]
title = "Monthly Development Update – June 2024"
_template = "post"
+++


# Monthly Development Update – June 2024


The Swarm team had a great time gathering with the community and Swarm supporters at the [Swarm Summit](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future-recap/) held on June 20-21 in Ljubljana. 
In case you missed it, all the talks and presentations from the Swarm Summit are fully accessible on [StreamETH](https://streameth.org/swarm), so make sure to check it out.


The fun of the Swarm Summit didn’t take the focus off the tasks at hand. The **Bee Track** has been hard at work, finalising neighbourhood hopping for nodes. The feature is now undergoing final testing to ensure it meets our high standards. A transferrable stake feature is also coming and will be included in our next release. 

The **Research Track** began writing specifications and discovery on **Swarm multichain support options** and will be moving to development ASAP.

There’s a host of new improvements and bug fixes in Swarm CLI and Bee-JS, and you can read about them in more detail in the blog.

And don’t forget, on 25 July the [Swarm Community Call](https://www.addevent.com/event/rV22206002) is back, so make sure to tune in to stay up to date with all the Swarm news.  

 


## Tracks


### Bee Track  

* The Bee client will be soon supporting the neighbourhood hopping for nodes. Development of the feature is already completed and we are currently  making sure we are providing good testing coverage for it.
* With the next release we will also be allowing the stake to be transferable, which is also under way. 
* The Access Control Trie feature has been tested and at the moment we are in sync with the development team to support the development of integration tests.


### Research Track 



* The SWIPs [19](https://github.com/ethersphere/SWIPs/pull/48/files#diff-6ed407f69350ae9d814a55c0fe366fd1616eeb9f687cd157c6ef39ee5ed21c25) & [20](https://github.com/ethersphere/SWIPs/pull/49/files#diff-243fd6153b7109c8256f30a48d6e90259f84feff6d4c798345f3a3affd2016e2) are completed and development of swip 19 nhood hopping is now in the testing phase for release. 
* Swip 20 for stake withdrawal is in development. 
* Specifications and discovery have begun on Swarm multichain support options and will be moving to development as soon as possible. 


### JS Track


#### [eth.limo](https://eth.limo/) support
* ENS records pointing to Swarm hashes (bzz://) now correctly resolve with eth.limo.


#### [Bee-JS](https://github.com/ethersphere/bee-js)
* Released [v7.0.1](https://github.com/ethersphere/bee-js/releases/tag/v7.0.1), [7.0.2](https://github.com/ethersphere/bee-js/releases/tag/v7.0.2) and [7.0.3](https://github.com/ethersphere/bee-js/releases/tag/v7.0.3)
    * Fixed some issues when passing timestamp and index to feed operations
    * Fixed a regression issue in the waitForUsable stamp functionality


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released [v2.11.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.11.0), [v2.12.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.12.0) and [v2.13.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.13.0)
    * Updates bee-js to latest to receive upstream fixes
    * Adds cheque withdraw-all command
    * Improves printed messages to disambiguate BZZ, xBZZ, DAI, xDAI and PLUR/wei values
    * Improves stamp display to clearly communicate mutability, capacity and other properties
    * Topup and dilute commands now print helpful messages after success, even if operation was made on a stamp created by another Bee node
    * Removed upload size warning
    * Stamp list and show commands no longer error out on TTL in Bee dev mode
    * Stamps are immutable by default, following Bee API behaviour
    * Printing a feed no longer requires a stamp
    * Adds --list option to feed print to show individual feed updates


#### [Bee Dashboard](https://github.com/ethersphere/bee-dashboard) & [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)
* Released [v0.28.0](https://github.com/ethersphere/bee-dashboard/releases/tag/v0.28.0) and [v0.42.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.42.0)
    * Adds redeem shortcut to sidebar
    * Updates bee-js to latest to receive upstream fixes


#### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* Released [v0.15.0](https://github.com/ethersphere/gateway-proxy/releases/tag/v0.15.0)
    * Merges :1633 and :1635 (debug) APIs
    * Updates bee-js to latest to receive upstream fixes


### DevOps 
* Released multiple versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest [0.17.0](https://github.com/ethersphere/beekeeper/releases/tag/v0.17.0)).


### Ecosystem

#### Partnerships
* [IoteX partnership announcement](https://blog.ethswarm.org/foundation/2024/iotex-partnership-announcement/)
* [The Swarm Ecosystem: 6 months in review](https://streameth.org/swarm/watch?session=6679232e0d49d6570f32000b)


#### Fair Data Protocol 

[Fdp-play](https://github.com/fairDataSociety/fdp-play)
* [New release](https://github.com/fairDataSociety/fdp-play/releases/tag/v3.1.0), v3.1.0 features fdp-contracts option, and some bug fixes.


### DevRel 

#### Documentation 
* Several minor corrections were made to terminal commands and also several other miscellaneous small corrections. 


#### Educational Content
* [Practical use cases of Swarm that you can do today](https://streameth.org/swarm/watch?session=667543590d49d6570f110aa3) 
* [Moving from IPFS to Swarm](https://streameth.org/swarm/watch?session=667540970d49d6570f10f457)
* [What makes Swarm unique](https://streameth.org/swarm/watch?session=6674441c07f92b086c4332ee)
* [Swarm's Unstoppable Features](https://streameth.org/swarm/watch?session=6673f89e07f92b086c411600)


#### Content
* [Swarm Community Call, 30 May – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-30-may-recap/)
* [Monthly Development Update – May 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-may-2024/)
* [State of the Network: May](https://blog.ethswarm.org/foundation/2024/state-of-the-network-may-2024/)


### Events: 
#### **Swarm Hackdays and Summit 2024**

After five long years of waiting, Swarm Summit was back live in Ljubljana, Slovenia. It focused on real-life applications of Swarm and how it fits into the AI-driven future. Hours of great video content are available, in case you missed the summit, and you can find it all on the StreamETH link below or read the recap blog for the shorter version.

Recap: [https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future-recap/](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future-recap/)

Videos: [https://streameth.org/swarm](https://streameth.org/swarm)


### Upcoming events
#### **Swarm Community Call – 25 July 2024**

Join us every last Thursday of the month at the Swarm Community Call on Discord to stay fully informed, perhaps seize the opportunity to jump into a live discussion or ask the Swarm team a question! The next Community Call is on 25 July ([add to calendar](https://www.addevent.com/event/rV22206002)).

You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3).


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. We are hiring a [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go)) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager).
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!
