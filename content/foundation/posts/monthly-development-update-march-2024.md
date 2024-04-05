+++
banner = "/uploads/dev-update-march.png"
images = [ "/uploads/dev-update-march.png" ]
categories = [ "Development updates" ]
date = 2024-03-05T00:00:00.000Z
description = "In February, the Bee Track team focused on preparing for the imminent Swarm 2.0 release, which promises substantial enhancements, including best-in-class redundancy via erasure codes."
references_and_footnotes = [ ]
title = "Monthly Development Update – February 2024"
_template = "post"
+++



March was a big month for Swarm. [Bee 2.0](https://github.com/ethersphere/bee/releases/tag/v2.0.0) is out and 2.1 is already being drafted. Version 2.0 brought with it erasure codes, a new testing environment on Sepolia and a host of localstore fixes. 

**The Research Track** is currently looking into network connectivity and operator reward issues. **The JS Track** released three new BeeJS versions which fixed two known issues and added erasure coding support. 

Swarm’s community is faced with a major decision – voting on the fate of the bonding curve. Four new blogs have been published to give voters a deeper understanding of the issue and lay out the voting process. A [new grant wave](https://grants.ethswarm.org/) is also open. 

The **Fair Data Protocol** team released several updates across its suite, with the Fairdrive Web App getting some significant ones, including Metamask auto-login, the introduction of Creator Pods for direct access to subscribed pods, and expanded capacity for unlimited storage. 

**Swarm’s documentation** now boasts two new sections: on erasure coding costs and neighbourhoods. There are [three new educational videos available](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA), along with a [transition guide](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/) to help node operators navigate the latest version of Swarm.

Don’t forget to join the April Swarm Community Call ([add to calendar](https://www.addevent.com/event/fx21028312)) when the vote on the fate of the bonding curve will be closed. 


## Tracks
### Bee Track
* [Release 2.0](https://github.com/ethersphere/bee/releases/tag/v2.0.0) is out! (Full release notes and redundancy levels: https://github.com/ethersphere/bee/releases)
    * Erasure codes is the major feature that enhances data storage and retrievability
    * Moving out of the deprecated Goerli and transition to the Sepolia network.
    * Many localstore fixes on upload store, pinstore, stamping on upload, localstore reserve and cachestore.
* The next 2.1 release is already drafted, including changes on the leveldb transactions and other changes that will reduce the freezing rates.
* All our releases from now on will be announced two weeks in advance with a specific release date. This strengthens our communication with Swarm’s node operators and ensures better planning on their side for node upgrades. 


### Research Track
* The 2.0 release has been a major one for Swarm! The team has been assisting, commenting and reviewing the erasure codes to meet the specifications and remove all edge cases.
* Investigation of the network connectivity issues and the operator rewards issues where nodes are revealing in the wrong rounds and committing wrong hashes.
* Changes on the redistribution contract focusing on reducing the freezing nodes are already implemented and ready to go out with the next release 2.1.


### JS Track
#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* [Version 6.8.0](https://github.com/ethersphere/bee-js/releases/tag/v6.8.0): which upgrades the underlying HTTP library (axios) to its new patch version, fixing some 3rd party issues.
* [Version 6.8.1](https://github.com/ethersphere/bee-js/releases/tag/v6.8.1): fixing a type definition issue which only appeared when developing a front-end application using Vite with Bee-JS .
* [Version 6.9.0](https://github.com/ethersphere/bee-js/releases/tag/v6.9.0): adding erasure coding support, and utilities to calculate erasure coding error tolerance and cost overhead.


#### [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)
* [Version 0.37.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.37.0): updates to Bee 2.

#### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* [Version 0.13.0](https://github.com/ethersphere/gateway-proxy/releases/tag/v0.13.0): possibly fixing some network issues when buying stamps in a containerized environment.

### DevOps 
* Deployed Bee [1.18.2](https://github.com/ethersphere/bee/releases/tag/v1.18.2) to testnet and mainnet.
* Released multiple versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest 0.15.1).


### Ecosystem

#### Bonding curve vote 

* [Swarm’s Community Governance: The Bonding Curve Vote](https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/)
* [Rethinking Bonding Curves](https://blog.ethswarm.org/foundation/2024/rethinking-bonding-curves/)
* [How to Participate in the Bonding Curve Vote](https://blog.ethswarm.org/foundation/2024/how-to-participate-in-the-bonding-curve-vote/)
* [Bonding curve voting - AMA](https://blog.ethswarm.org/foundation/2024/bonding-curve-voting-ama/)


#### Swarm Grants 
* A [New Grant](https://grants.ethswarm.org/) wave has opened


#### Fair Data Protocol

##### [Fdp-contracts](https://github.com/fairDataSociety/fdp-contracts)
* The JS library has a [new release](https://github.com/fairDataSociety/fdp-contracts/releases/tag/fdp-contracts-js-lib-v3.12.0) with the new Fdp-play version and updated deploy contract addresses.

##### [Fairdrive DAO](https://github.com/fairDataSociety/Fairdrive-DAO)
* [Here](https://xdai.colony.io/colony/fairdrive/decisions) is an example of how Fairdrive can work as a DAO. 

##### [Fdp-play](https://github.com/fairDataSociety/fdp-play)
* Introducing a [new option](https://github.com/fairDataSociety/fdp-play/pull/123): --fdp-contracts for fdp-play start command in order to simplify blockchain image pick for the environment for FDP development

##### [Fdp-storage](https://github.com/fairDataSociety/fdp-storage)
* A new release, [v0.19.0](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.19.0) is here, which introduces the Subscription Pods improvements.  

##### [Fairdrive Desktop App](https://github.com/fairDataSociety/fairdrive-desktop-app)
* Go related [fixes](https://github.com/fairDataSociety/fairdrive-desktop-app/pull/197).


##### [Fairdrive Web App](https://app.fairdrive.dev.fairdatasociety.org/)
* Fairdrive has undergone a substantial update, introducing three notable features: seamless Metamask auto-login functionality, granting users automatic access upon page refresh by simply signing a message; the addition of [Creator Pods,](https://github.com/fairDataSociety/fairdrive-theapp/pull/580) enabling browsing of all subscribed pods directly from the drive page; and an expanded capacity allowing for an unlimited number of pods, folders and files, empowering users with enhanced flexibility and scalability in managing their digital assets and collaborations within the platform. 
* Therefore, the Main application is now up-to-date with the Dev version.
##### [Other enhancements & fixes](https://github.com/fairDataSociety/fairdrive-theapp/pulls?q=is%3Apr+is%3Aclosed+closed%3A2024-03-01..2024-03-31+).


### DevRel

#### Documentation 
* A new [section on erasure coding costs](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding/#redundancy-level-costs-explained) has been published, along with a supplemental [advanced cost calculations](https://docs.ethswarm.org/docs/learn/advanced/erasure-cost-calculation/) section.
* The new [erasure code cost calculator](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding/#cost-calculator-widget) makes it easy to find out the additional costs of using erasure coding at different redundancy levels.
* A [new section on neighbourhoods and neighbourhood doubling](https://docs.ethswarm.org/docs/learn/advanced/neighbourhoods/) has been published.
* The [OpenAPI reference docs](https://docs.ethswarm.org/docs/api-reference/) have been updated to include changes in the 2.0 release.
* A new guide to [status and health related endpoints](https://docs.ethswarm.org/docs/bee/working-with-bee/troubleshooting#guide-to-status-related-endpoints) has been

#### Educational Content
* Explanation video: [Neighbourhood Doublings & Setting Target Neighbourhoods](https://youtu.be/0Uli66yqudk)
* Explanation video: [Visualising Swarm Hashes, Node Addresses and Neighbourhoods](https://youtu.be/NJS14Rbcz3k)
* Explanation video: [Bee on DigitalOcean](https://youtu.be/sm3JjHpeHyE)


#### Content
* The [2.0 release blog post](https://blog.ethswarm.org/foundation/2024/announcing-bee-2.0-pioneering-next-gen-decentralised-storage/) was published to usher in this major new client version.
* A [transition guide](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/) was also published to help ensure a smooth transition for node operators and other Bee users.
* [State of the Network: February](https://blog.ethswarm.org/foundation/2024/state-of-the-network-february/)
* [Swarm Community Call, 29 February – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-29-february-recap/)




### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has multiple open positions. We are hiring a  [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go), [QA Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/senior-software-engineer-go) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events:
##### **Swarm Community Call – 28 March: **the monthly “stay up to date” event
* With Bee 2.0 released on 26 March and the bonding curve put to community vote, the March Community Call was packed with information, on top of which it also featured two Community talks, one from the Blobscan team and another from Solarpunks on videostreaming on Swarm. Read the Recap [here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-28-march-recap/)! 


### Upcoming events
##### Swarm Community Call – 25 April 2024
* Join us every last Thursday of the month at the Swarm Community Call on Discord to stay fully informed, perhaps seize the opportunity to jump into a live discussion or ask the Swarm team a question! The next Community Call is on 25 April ([add to calendar](https://www.addevent.com/event/fx21028312)). The vote on the fate of the bonding curve will be closed by then, so another interesting Call is expected, shedding light on the future of BZZ tokenomics! 

You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3) or/and subscribe to our newsletter here. 


##### Swarm Summit 2024 – 20–21 June 2024
*  Swarm Foundation is pleased to announce that the Swarm Summit is to happen **in real life** again! From** 20–21 June**, the team will gather in **Ljubljana, Slovenia**, and you are welcome to join them in person, or follow the Summit online, as it will be held as a combined online-IRL conference/event. [Save the date](https://www.addevent.com/event/Gn21002880), start preparing your submissions – **[the Call for papers is out](https://summit.ethswarm.org/swarm-summit-2024/cfp)** – and follow the Swarm Community Call to stay up to date. 