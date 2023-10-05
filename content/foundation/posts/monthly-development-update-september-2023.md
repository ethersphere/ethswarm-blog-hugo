+++
banner = "/uploads/dev-update-september.png"
categories = [ "Development updates" ]
date = 2023-10-05T00:15:00.000Z
description = "September saw a fresh stream of new releases, announcements and publications that reflect Swarm’s evolving vitality. A new Bee 1.17.4 is out and it comes with a sizable changelog, a **breaking change** (make sure to update your node) and **improved user experience for node operators**."
references_and_footnotes = [ ]
title = "Monthly Development Update – September 2023"
_template = "post"
+++

September saw a fresh stream of new releases, announcements and publications that reflect Swarm’s evolving vitality. A new [Bee 1.17.4](https://blog.ethswarm.org/foundation/2023/bee-1-17-4-pre-announcement/) is out and it comes with a sizable changelog, a **breaking change** (make sure to update your node) and **improved user experience for node operators**.

The **[Price Oracle](https://blog.staging.ethswarm.org/foundation/2023/oracle-overview/)** and deliverables from **Phase 4** of the storage incentives roadmap are now **on testnet**. A new version of [Swarm Desktop](https://www.ethswarm.org/build/desktop) has also been released to sync with the changes of the new Bee.

Jumping over to the ecosystem side – if you’re looking for a grant to help you build/upgrade your project on the Swarm network, **the Full Moon grants wave is open** ([apply here](https://my.ethswarm.org/grants)). You can apply for a grant of up to 10,000 DAI in BZZ. [Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/) has undergone a significant UI change, and a fully decentralised vector database [FaVe](https://github.com/fairDataSociety/FaVe) has also joined Fair Data Society’s suite of offerings (note that FaVe is still under development). 

Four new blogs are also available to read on [Swarm’s official blog](https://blog.ethswarm.org/) and you can now [mark your calendar](https://www.addevent.com/event/Ky18866277) for the October Swarm Community Call, which will take place on 26 October at 17:00 CET.


## Tracks

### Bee Track 

#### [Release 1.17.4](https://github.com/ethersphere/bee/releases/tag/v1.17.4) is out with the following:
* Improved logging for the pushsync and the retrieval protocols. Note: This is a breaking change so node operators need to proceed as soon as possible with upgrading their nodes.
* Default batch type is now immutable. This ensures that stamp purchasers do not unintentionally overwrite their uploaded data by accident.
* Swap-enable set to false by default.  A fresh install, if no other options are changed, bee start command gets the node in ultra-light mode rather than throwing an error.
    Note: full node operators should have this set to false
* Upload type is now deferred by default. This means that upload data is first uploaded to the local Bee node before being uploaded to the Swarm network
#### Logging improvment
Logging has been improved, offering benefits in two key aspects:
* Node operators will experience enhanced usability through more meaningful messages and relevant information.
* Developers will gain a better understanding of the technical details, assisting them in debugging the code.



### Research Track
* The Phase 4 and Phase 3 deliverables of the inclusion proofs and the [Price Oracle](https://blog.staging.ethswarm.org/foundation/2023/oracle-overview/) are now being deployed to testnet, where we are assessing and making ready for a wider release. 
* We are exploring how we can assist the wider hardening phase with any research or contract-based changes that may include doubling reserve sizes, assisting changes to reward variance, etc. 
* The solution doc for erasure codes is complete and the EPIC kickoff will begin after the ph4 mainnet release. This will be Research’s key goal between now and EOY. 


### JS Track
#### Swarm Desktop App
* [New release](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.30.0) of Swarm Desktop is out which bundles the most recent Bee version, 1.17.4.


### Grants
#### [Swarm Full Moon Grant Wave](https://my.ethswarm.org/grants)
* New grant wave started: The Swarm Association launches the [Swarm Full Moon Grant Wave](https://my.ethswarm.org/grants) from 23 September to 21 December, inviting a diverse cohort of developers, researchers and artists to contribute to the creation of the inaugural Web3 PC, all while championing the principles of digital freedom and decentralised technologies. With a generous grant pool of 300,000 BZZ tokens, participants can apply for grants up to 10,000 DAI in BZZ and pursue further funding through follow-up grants upon successfully reaching initial milestones.

### Ecosystem
#### Swarmscan
* A new page has been added to [Swarmscan](https://swarmscan.io/), indicating the least populated [neighbourhoods](https://swarmscan.io/neighborhoods). Node operators can use this information to target specific neighbourhoods when establishing new nodes.


#### Fair Data Protocol
##### [Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/)
* Fairdrive has undergone substantial [UI changes](https://github.com/fairDataSociety/fairdrive-theapp/pull/524) to simplify the login process and improve the user experience when working with pods and folders. Additionally, the process of [uploading](https://github.com/fairDataSociety/fairdrive-theapp/pull/514) and retrieving files has been made more intuitive and user-friendly.
* Metamask login and account migration (lite-fdp-account to full-fdp-account in app) received straightforward instructions with [new gas estimation](https://github.com/fairDataSociety/fairdrive-theapp/pull/505).
* Redesigned how [the folder path](https://github.com/fairDataSociety/fairdrive-theapp/pull/500) is shown on mobile.
* Between many UI upgrades, [import feat is cancelled](https://github.com/fairDataSociety/fairdrive-theapp/pull/518) due to the login simplification process.
* [Other enhancements & fixes](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-09-01..2023-09-30+)

#### [Blossom](https://github.com/fairDataSociety/blossom/tree/master)
* Got published to [Chrome Webstore](https://chrome.google.com/webstore/detail/blossom/caedjloenbhibmaeffockkiallpngmmd?hl=en-GB).
* New release [v0.5.0](https://github.com/fairDataSociety/blossom/releases/tag/blossom-ext-v0.5.0) with improved session handling.

#### [fdp-storage](https://github.com/fairDataSociety/fdp-storage/)

* Released [v.012.0](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.12.0) with new fdp-contracts-js support & improved pod check structure 

#### [Create account page](https://github.com/fairDataSociety/fdp-create-account/)
* [Enhanced gas estimation logic](https://github.com/fairDataSociety/fdp-create-account/pull/294)

#### [fdp-contracts](https://github.com/fairDataSociety/fdp-contracts/)

* [Fdp-contracts-main v2.7.0 ](https://github.com/fairDataSociety/fdp-contracts/releases/tag/fdp-contracts-main-v2.7.0)brings us 
* Readme update
* Improved gas price calculation 
* Updated contract metadata 
* Support optimism and arbitrum goerli networks 

#### [FaVe](https://github.com/fairDataSociety/FaVe)
* Introducing a new truly decentralised vector database build with Fair Data Principles in mind. This comes as a cherry on top of fairOS, with LangChain integration and standalone python client. It enables a secure semantic search on your documents and allows you to run private GPTs with data on Swarm.
* Vectorizer is a Python server that uses the Hugging Face Transformers library to convert text into embeddings and returns the embeddings as JSON that can be stored in FaVe.
* The project was introduced in the latest Swarm Community Call.

#### [FairPortal](https://github.com/fairDataSociety/fair-portal)
* [New feat:](https://github.com/fairDataSociety/fair-portal/pull/13) users can now edit each record by adding new dApp information and reuploading, without creating a new record in the smart contract.

#### [FDA](https://github.com/fairDataSociety/fairdrive-desktop-app)
* [v0.1.8](https://github.com/fairDataSociety/fairdrive-desktop-app/releases/tag/v0.1.8) the docs received an update. 


### DevOps
* Deployed 1.17.4 [Bee](https://github.com/ethersphere/bee) to testnet and mainnet.


### DevRel
#### Docs update
* A [warning](https://docs.ethswarm.org/docs/bee/working-with-bee/upgrading-bee) has been added to the documentation, explaining that node operators should not update or turn off their nodes in the middle of a round.
* A [new section](https://docs.ethswarm.org/docs/learn/technology/contracts/postage-stamp#batch-utilisation) has been added to the postage stamp page, detailing how postage batch utilisation works.
* [Instructions](https://docs.ethswarm.org/docs/bee/working-with-bee/backups#view-key-and-password-for-wallet-import) for importing/exporting keys from Metamask have been added.


#### Apps
##### Etherjot
* Created a web user interface for Etherjot to efficiently publish articles and manage personal blogs. Features:
    * Markdown editor and viewer to easily edit content
    * One-click actions to create, modify and delete articles
    * Quick links to articles and blog home page
    * Property editor for article metadata and global blog settings


##### Content

* [State of the Network: August](https://blog.ethswarm.org/foundation/2023/state-of-the-network-august/)
* [Swarm Tools Overview and Updates](https://blog.ethswarm.org/foundation/2023/swarm-ecosystem-tools-update/)
* [Oracle Boosts Swarm's Self-sustainability](https://blog.ethswarm.org/foundation/2023/oracle-overview/)
* [Bee v1.17.4 Pre-release Notice](https://blog.ethswarm.org/foundation/2023/bee-1-17-4-pre-announcement/)


#### Events:
##### Swarm Community Call – September 2023

* The Swarm Community Call, our main monthly online event, was held on 28 September. You can read a recap blog post about it [here](https://blog.ethswarm.org/foundation/2023/swarm-community-call-28-september-recap/).

### People&Culutre
* Join the team and be a direct contributor. We are looking for Go Developers and Grant Managers. 
* Find out more on our career page:[https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or just drop us a message: talent@ethswarm.org! 

### Upcoming events
#### **[Swarm Community Call](https://www.addevent.com/event/tf17853994)**
* Swarm Community Call, our main monthly online event, will take place on 26 October at 17:00 CET in the [Swarm Foundation Discord](https://discord.gg/PHqsVNSJ?event=1126056886773489675) ([add to calendar](https://www.addevent.com/event/Ky18866277). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.