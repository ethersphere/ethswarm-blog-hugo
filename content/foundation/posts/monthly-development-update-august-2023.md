+++
banner = "/uploads/Dev-Update-August.png"
categories = [ "Development updates" ]
date = 2023-08-04T13:15:00.000Z
description = "In July, a major step was taken for the Swarm network with the unveiling of the new Localstore, which will be included in the latest Bee 1.17.0. Phase 4 of the storage incentives roadmap will also be released in the next few days, as will the latest updates to the price oracle, which is currently being tested extensively."
references_and_footnotes = [ ]
title = "Monthly Development Update – August 2023"
_template = "post"
+++

In the past month, the Swarm ecosystem has seen some significant developments. The **Bee Track** team released the much anticipated localstore rewrite and has already ironed out some of the notable issues in version 1.17.3. Meanwhile, anticipation builds for the release of Phase 4 items and the price oracle, both set to further enhance the storage incentive system. 

The **Research Track** is addressing the last issues before Phase 4 of the storage incentives roadmap goes live on testnet. Concurrently, the **JS Track** has launched a series of bee-js versions introducing new functionalities and updates. 

On the Ecosystem side, the Fair Data Protocol team poured additional effort into the general user experience with several fixes and improvements. In the **DevRel **section, Swarm’s documentation has been the subject of some significant cleaning to enhance the developer experience. 

In case you missed it, you can read the recap from the latest August **Swarm Community Call** [here](https://blog.ethswarm.org/foundation/2023/swarm-community-call-31-august-recap/). You are also warmly invited to [join the upcoming Swarm Community Call scheduled for 28 September](https://www.addevent.com/event/Yb18513288) for another great round of updates and discussions about the latest developments in the Swarm network.

## Tracks

### Bee Track

* The localstore rewrite has been out with all the features working as expected.! A few small bugs were fixed after the initial release 1.17.0, and the most up-to-date release version is the [1.17.3](https://github.com/ethersphere/bee/releases/tag/v1.17.3). With this version we sum up the localstore rewrite. 
* Phase 4 items (that harden the system of storage incentives by requiring extra proofs for winners) and the price oracle are expected to be released in the next couple of weeks.
* The Bee team is ready to start working on the hardening phase in the upcoming week. By the end of this  phase we expect to see a significantly more reliable and stable network, ready to support all the features of the upcoming milestones.

### Research Track 
* 'Redistribution subtle behaviour' contract changes have been created and will be released with phase 4. This has been corrected after a week-long investigation. 
* A written plan has been documented on how we can update the postage stamp contract and refund the new one should an upgrade be needed. This will need to be done in the medium term. 
* Work has finished for the upcoming testnet release with the contract redistribution refactorings, phase 4, and the price oracle.

### JS Track 

* [bee-js v6.2.0](https://github.com/ethersphere/bee-js/releases/tag/v6.2.0) - Adds new redistribution state properties
* [bee-js v6.3.0](https://github.com/ethersphere/bee-js/releases/tag/v6.3.0) - Adds stamp calculation Utils functions (e.g. stamp TTL, capacity, cost)
* [bee-js v6.4.0](https://github.com/ethersphere/bee-js/releases/tag/v6.4.0) - Adds debug status endpoint; Updates Tag type and adds new properties
* [bee-dashboard v0.24.0](https://github.com/ethersphere/bee-dashboard/releases/tag/v0.24.0) - Adds stamp dilution and topup; Removes bzz.link references; Cleans up 0 balance peer cheques
* [swarm-desktop v0.28.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.28.0) - Updates to Bee 1.17.2; Adds dark-mode tray icon support
* [swarm-desktop v0.29.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.29.0) - Updates to Bee 1.17.3
* [swarm-cli v2.4.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.4.0) - Improves status command to be more robust and context aware; Adds lock and unlock commands; Shows stamp mutability
* [swarm-cli v2.5.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.5.0) - Adds hash command; Adds stamp estimations before buying

### Ecosystem

#### Fair Data Protocol

#### [Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/)

* [Metamask SDK integration](https://github.com/fairDataSociety/fairdrive-theapp/pull/443)
* [Improved UI focusing on mobile use](https://github.com/fairDataSociety/fairdrive-theapp/pull/408)
* The user interface now supports multiple languages as part of the [localisation feature](https://github.com/fairDataSociety/fairdrive-theapp/pull/437)
* [Supports fdp-storage with updated Sepolia RPC](https://github.com/fairDataSociety/fairdrive-theapp/pull/438)
* [Other enhancements & fixes](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-08-01..2023-08-31+) 

[fdp-storage](https://github.com/fairDataSociety/fdp-storage/)

* Released [v0.10.0 & v0.11.0](https://github.com/fairDataSociety/fdp-storage/releases) with [fdp-contracts-js](https://github.com/fairDataSociety/fdp-storage/issues/251) and [bee-js](https://github.com/fairDataSociety/fdp-storage/pull/253) updates 

[Create account page](https://github.com/fairDataSociety/fdp-create-account/)

* [Multiple language support](https://github.com/fairDataSociety/fdp-create-account/issues/282)

[fdp-contracts](https://github.com/fairDataSociety/fdp-contracts/)

* [v3.7.2 release](https://github.com/fairDataSociety/fdp-contracts/releases) brings bug fixes on dapp-registry library

[Fairdrive Docs](https://github.com/fairDataSociety/fairdrive-theapp/tree/development/docs)
* We started preparing a new wave of documentation. This is important for knowledge transfer and reusability: Well-documented code and libraries can be reused in other projects, saving time and effort in future development.


### DevOps
* Deployed 1.17.3 [Bee](https://github.com/ethersphere/bee) to testnet and mainnet.
* Published all deb and rpm packages to [https://repo.ethswarm.org/](https://docs.ethswarm.org/docs/bee/installation/install#1-install-bee)


### DevRel
#### Docs update
* All references to [bee-clef](https://github.com/ethersphere/bee-clef) have been removed from the docs as it has been deprecated for a while and has just been removed from all Bee packaging in the most recent Bee update. 
* Package manager [install instructions](https://docs.ethswarm.org/docs/bee/installation/install#package-manager-install) have been updated so that installation no longer requires explicitly stating the version number.
* An [explanation of dilution](https://docs.ethswarm.org/docs/develop/access-the-swarm/keep-your-data-alive#dilute-your-batch) has been added to the docs. Dilution refers to increasing the `depth` of a batch of postage stamps so that it can store more data.


#### Events:

##### Swarm Community Call – August 2023
* The Swarm Community Call, our main monthly online event, was held on 31 August. You can read a recap blog post about it here.


### **Upcoming events**
#### **[Swarm Community Call](https://www.addevent.com/event/tf17853994)**
* Swarm Community Call, our main monthly online event, will take place on 28 September at 17:00 CET in the [Swarm Foundation Discord](https://discord.gg/PHqsVNSJ?event=1126056886773489675) ([add to calendar](https://www.addevent.com/event/Yb18513288)). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.