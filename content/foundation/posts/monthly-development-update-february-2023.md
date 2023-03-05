+++
banner = "/uploads/devupdatefeb.png"
categories = ["Development updates"]
date = 2023-03-04T23:00:00Z
description = "February was a big month for the Swarm network. The price of postage stamps has been recalibrated with the release of Bee 1.20, which marks a major milestone for Swarm's self-sustaining network. The Research Track has also completed the documentation for Phase 4, which details the work of this phase of the Storage incentives roadmap.\n"
references_and_footnotes = []
title = "Monthly Development Update –  February 2023"

+++
February was a big month for the Swarm network. The price of postage stamps has been recalibrated with the release of Bee 1.20, which marks a major milestone for Swarm's self-sustaining network. The Research Track has also completed **the documentation for** [**Phase 4**](https://blog.ethswarm.org/foundation/2022/towards-the-world-computer.-the-swarm-network-upgrade-has-started./), which details the work of this phase of the Storage incentives roadmap.

The JS Track has released **a new version of Swarm Desktop** ([**0.19.2**](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.19.2)), which adds experimental support for staking when Bee is already a full-node, and BeeJS (5.2.0)

The Fair Data Protocol (FDP) team has extended the capabilities of FDP Storage in version 0.7.0, more specifically, the capabilities of Personal Storage, including the [Fairdrive Desktop App](https://fairdatasociety.github.io/fairdrive-desktop-app/). The latter now also has a mobile-friendly view feature and notable progress has been made on the Fair Portal, a dApp that lists other dApps on Swarm. [Blossom](https://github.com/fairDataSociety/blossom) will soon receive its final fixes before being integrated into Faidrive, and [FairOS](https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.9.2) has been updated with a new release that introduces some important improvements.

Do not forget to [add the Swarm Community Call to your calendar](https://www.addevent.com/event/On16281759). It will take place on **30 March at 17:00 CET**. So expect an email in your inbox soon.

## Tracks

### **Bee Track**

**New Bee Release** [**1.20**](https://github.com/ethersphere/bee/releases/tag/v1.12.0) **was deployed:**

* The main focus of this release has been tightening loose ends surrounding chunk syncing.
* The release also features a new API endpoint that returns the status of the node related to the storage incentives, such as the total reward won and the last round in which the node has participated and won.
* Localstore rewrite continues along with the libp2p upgrade testing which is potentially ready for release at the end of the following month
* The manual price increase has taken place and given us more information about system performance under these circumstances, which is a good marker for the price oracle testing in the future.
* The storage incentives phase 2 are now meaningfully usable, whereby node operators are rewarded revenue for their contribution.

### **Research Track**

* Phase 4 specifications/solution document is now complete which outlines the work of this phase of the storage incentive exactly. Development should begin in the coming weeks pushing us closer to the end of our roadmap.
* The manual price increase and network redistribution data have been informing the health of the network and the impact of the future price oracle is being calibrated and modelled accordingly.

### **JS Track**

**New Swarm Desktop** [**0.19.2**](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.19.2) **release:**

* Updates to the new Bee version 1.12.0
* Adds experimental support for staking when Bee is already a full-node

**New Bee JS** [**5.2.0**](https://github.com/ethersphere/bee-js/releases/tag/v5.2.0) **release:**

* Adds the new debug endpoint /redistribution state

### **Fair Data Protocol**

**Fdp Storage**

* released v0.7.0 that includes:
  * added \`mode\` metadata for directories and files that will extend the mounting capabilities of the Personal Storage (FairDrive Desktop App)
  * support to upload whole directories under a specific path in the Personal Storage
  * changed the interfaces of some methods [https://github.com/fairDataSociety/fdp-storage/pull/213](https://github.com/fairDataSociety/fdp-storage/pull/213 "https://github.com/fairDataSociety/fdp-storage/pull/213") . The return objects became lighter and it is tailored to easily use the library with proxying (such as Blossom does)
* updated bee-js dependency to 5.1.0 that will be released in the new subsequent version. Along with that, a new caching mechanism has been added to the master branch that makes personal storage operations faster.

[**Fairdrive Web app**](https://fairdrive.fairdatasociety.org/)

* Fixes for reaching Consent Viewer app
* Mobile-friendly view feature
* [Fair-portal](https://github.com/fairDataSociety/fair-portal) progressed; smart contract, dApp registration form, home page layout are done. In short, this is a dApp that lists other dApps on Swarm.

[**Blossom**](https://github.com/fairDataSociety/blossom)

* released new version 0.2.1 that updated fdp-storage dependency

[**FDP Play**](https://github.com/fairDataSociety/fdp-play)

* support to keep a datastore of Bee clients between different environments. With that, local Bee client development testing is faster if the feature in development requires to work with the same dummy data on the storage network.
* [https://github.com/fairDataSociety/fdp-play/tree/master/generator#keep-bee-datastore-between-different-environments](https://github.com/fairDataSociety/fdp-play/tree/master/generator#keep-bee-datastore-between-different-environments "https://github.com/fairDataSociety/fdp-play/tree/master/generator#keep-bee-datastore-between-different-environments")

**Graffiti Feed**

* new ZeroDash library is available 0.2.1 that supports both original use-cases of Graffiti Feed, namely \`PersonalStorageSignal\` (was provided in the previous versions) and \`InformationSignal\` (which does not need user wallet to write data into the consensual storage area)

**FairOS**

* New release with major improvements
* [https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.9.2](https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.9.2 "https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.9.2")

### **Ecosystem Track**

**Data Upload Sponsorships.** [Swarm Odyssey Data Upload](http://my.ethswarm.org/uploads) is empowering social good startups, non-profits, and research projects to store their data in a censorship-resistant fashion.

### **DevOps Track**

* Deployed [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.12.0).
* Released the [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.11.18).

### **Upcoming events**

**Swarm Community Call** - our main monthly online event, will take place on 30 March at 17:00 CET in the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286) ([add to calendar](https://www.addevent.com/event/On16281759)). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.