+++
banner = "/uploads/dev_update_june.png"
categories = [ "Development updates" ]
date = 2023-07-05T01:00:00.000Z
description = "June marked an important point in the Swarm network development. The new localstore was released on private and public testnet and the new revised and updated edition of the Book of Swarm is now available. The Research Track has also made it much easier to find nodes that couldn’t enter the storage incentives game and understand the circumstances."
references_and_footnotes = [ ]
title = "Monthly Development Update – June 2023"
_template = "post"
+++


June marked an important point in the Swarm network development. The new localstore was released on private and public testnet and the new revised and updated edition of the [Book of Swarm](https://www.ethswarm.org/The-Book-of-Swarm.pdf) is now available. The Research Track has also made it much easier to find nodes that couldn’t enter the storage incentives game and understand the circumstances. 

The [Swarm Virtual Summit](https://blog.ethswarm.org/foundation/2023/swarm-virtual-summit-swarm-is-ready.-ready-to-grow./) is successfully behind us. **Over 20 inspiring and educational presentations** on the use of Swarm and other decentralised technologies are available for viewing. Grab yourself [early access to Fairdrive Web App](https://join.fairdrive.io/) and get some free storage while you’re at it. [Swarm docs have a great new look and feel](https://docs.ethswarm.org/) and if you’re interested in building value-driven digital ecosystems, the Hivemaker’s Code by theLivingCore and Swarm is [available here](https://toolkit.ethswarm.org/). There have also been numerous bug fixes and updates across the entire Swarm stack. 



## Bee Track
#### Released [v2.0.0-rc5](https://github.com/ethersphere/bee/releases/tag/v2.0.0-rc5)
    * The new localstore is on private and public testnets and optimisations are being made to up the upload speed so that we can release to mainnet. 
    * We have also experienced a perfect month of network activity with 0% error rates on our smoke tests.
    * The joint effort from DevRel and Bee team has resulted in the openAPI and protocol specs and diagrams being completed and pending release. 


## Research Track

* The latest edition of the [Book of Swarm](https://www.ethswarm.org/The-Book-of-Swarm.pdf) is out. 
* Phase 4 optimisations and refactoring is complete and its release window is being scheduled. 
* We have successfully redeveloped our stats dashboard to find our nodes that did not enter the storage incentives and can now debug the logs to understand the circumstances around nodes not playing the game and how often this occurs.


## Ecosystem


#### [The Hivemaker's Code:](https://toolkit.ethswarm.org/) A toolkit for building value-driven, decentralized digital ecosystems.

In collaboration with theLivingCore, Swarm published the Hivemaker's Code. This is a nine-part toolkit for creating value-driven digital ecosystems.


### Fair Data Protocol


#### [Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/)

* [Early access users](https://join.fairdrive.io/) page accepting signups with possibility of free storage
* [Invitation and referral system](https://github.com/fairDataSociety/fairdrive-theapp/pull/359) implementation
* [Fixes and other upgrades](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-06-01..2023-06-30+)


#### [FairOS](https://github.com/fairDataSociety/fairOS-dfs)

* Released [FairOS-dfs version v0.9.5](https://github.com/fairDataSociety/fairOS-dfs/releases)
* [Support for ChatGPT](https://github.com/fairDataSociety/fairOS-dfs/issues/493) and compatible plugins
* [Support for token based authentication](https://github.com/fairDataSociety/fairOS-dfs/issues/515)
* [Fixes and other changes](https://github.com/fairDataSociety/fairOS-dfs/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-06-01..2023-06-30+)

#### [Blossom](https://github.com/fairDataSociety/blossom)

* Blossom Browser Extension [Getting Started webpage](https://fairdatasociety.github.io/blossom/) was published. 
* [Support for global error messages](https://github.com/fairDataSociety/blossom/pull/150) 


#### [Fairdrive Desktop App](https://github.com/fairDataSociety/fairdrive-desktop-app)

* Released [FDA version v.0.1.7](https://github.com/fairDataSociety/fairdrive-desktop-app/releases)
* [Increase maximum mount volume size](https://github.com/fairDataSociety/fairdrive-desktop-app/pull/181)

#### [fdp-play](https://github.com/fairDataSociety/fdp-play)

* Released [fdp-play version 2.2.0](https://github.com/fairDataSociety/fdp-play/releases)
* [Fixes and other upgrades](https://github.com/fairDataSociety/fdp-play/pulls?q=is%3Apr+is%3Aclosed+closed%3A2023-06-01..2023-06-30)

#### [fdp-storage](https://github.com/fairDataSociety/fdp-storage/)

* Released [fdp-storage version 0.7.3](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.7.3)

#### [Create account page](https://github.com/fairDataSociety/fdp-create-account/)

* [Walletconnect support for Sepolia](https://github.com/fairDataSociety/fdp-create-account/pull/271)
* [Support for invitation and referral system](https://github.com/fairDataSociety/fdp-create-account/pull/268)
* [Fixes and other upgrades](https://github.com/fairDataSociety/fdp-create-account/pulls?q=is%3Apr+is%3Aclosed+closed%3A2023-06-01..2023-06-30)

#### [bmt-js](https://github.com/fairDataSociety/bmt-js)

* [Larger files support](https://github.com/fairDataSociety/bmt-js/pull/19)
* [Fix for 0 payload](https://github.com/fairDataSociety/bmt-js/pull/18)

#### [fdp-contracts](https://github.com/fairDataSociety/fdp-contracts/)

* [fdp-contracts version 3.6.1](https://github.com/fairDataSociety/fdp-contracts/releases/tag/fdp-contracts-js-lib-v3.6.1) released
* [Fix for min balance](https://github.com/fairDataSociety/fdp-contracts/pulls?q=is%3Aissue+is%3Aclosed+closed%3A2023-06-01..2023-06-30+)


## DevOps Track
* [Beekeeper](https://github.com/ethersphere/beekeeper) (0.13.0) released.


## DevRel
### Docs update
* The new design for Swarm's documentation has been successfully published at [https://docs.ethswarm.org/](https://docs.ethswarm.org/).
* New content in the Learn section: [protocols](https://docs.ethswarm.org/docs/learn/technology/disc/#push-sync-pull-sync-and-retrieval-protocols) and [topology](https://docs.ethswarm.org/docs/learn/technology/disc#kademlia-topology-and-routing) sections.
* Added [stewardship](https://docs.ethswarm.org/docs/develop/access-the-swarm/keep-your-data-alive#stewardship) section.
* OpenAPI docs updated and rebuilt to the newest version
* Switched OpenAPI built tool to display API reference within the main Docusaurus theme rather than as a separate single page app. [API](https://docs.ethswarm.org/api/), [Debug API](https://docs.ethswarm.org/debug-api/)


### Content
* Explainer Video: [how to publish a website on Swarm](https://www.youtube.com/watch?v=HiiM1SLo-0I)
* [State of the Network – June 2023](https://blog.ethswarm.org/foundation/2023/state-of-the-network-june-2023/)
* [New blog posts in Mandarin](https://blog.ethswarm.org/c/%E4%B8%AD%E6%96%87). This expansion aims to cater to the Chinese community, providing valuable content and resources in their native language.


### Apps:

#### [Etherjot](https://github.com/Cafe137/etherjot) 

* Customizability: Etherjot now allows customization of various aspects of blog posts, including the header and footer description, social media links, blog post sizes, promotions, highlighted categories, and more.
* New Commands: 
    * `etherjot purge`: This command allows users to start fresh by removing any existing data or configurations.
    * `etherjot configure`: Users can now use this command to customize optional parts of the blog, tailoring it to their specific needs.
    * `etherjot promote`: This command enables users to customize flagship posts, highlighted categories, and other promotional aspects of the blog.

### Events
#### [Swarm Virtual Summit 21–23 June 2023](https://blog.ethswarm.org/foundation/2023/swarm-virtual-summit-swarm-is-ready.-ready-to-grow./)
- The summit featured an array of experts, enthusiasts and trailblazers who shared their insights, experience and visions for the future of Swarm. From hands-on workshops to engaging talks, from surprise announcements to cosy fireside chats – it all happened at the Swarm Summit 2023
- You can watch the entire summit on [StreamEth](https://swarm.streameth.org/archive). See the presentations you missed or watch them again.

### Upcoming events
#### [Swarm Community Call](https://www.addevent.com/event/tf17853994)
- Swarm Community Call our main monthly online event, will take place on 27 July at 17:00 CET in the [Swarm Foundation Discord](https://discord.gg/PHqsVNSJ?event=1126056886773489675) ([add to calendar](https://www.addevent.com/event/tf17853994)). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.