+++
banner = ""
categories = ["Development Updates"]
date = 2023-01-04T23:00:00Z
description = "December was a big month for releases. Bee 1.10 was released on the mainnet and with it Storage Incentives Phase 2. The latter allows node operators to participate in the redistribution of storage fees. Over the next few weeks, the research team will be watching closely to see how the new mechanism performs as it brings Phase 3 closer to release.\n"
references_and_footnotes = []
title = "Monthly Development Update – December 2022"

+++
December was a big month for releases. Bee 1.10 was released on the mainnet and with it Storage Incentives Phase 2. The latter allows node operators to participate in the redistribution of storage fees. Over the next few weeks, the research team will be watching closely to see how the new mechanism performs as it brings Phase 3 closer to release.

Along with the new Bee, new Bee-js and Swarm Desktop versions have also been released to ensure compatibility with the latest Bee client version.

Fair Data Protocol (FDP) also had a major release in December. You can now use Fairdrive, a private and decentralised drive, directly from your desktop with a simple executable binary. To familiarise yourself with the FDP stack, there is an FDP tutorial app available and an FDP overview video from the [Swarm Odyssey 2023 event](https://youtu.be/8cILZnmIf3Q?t=401).

Speaking of Swarm Odyssey 2023, a new wave of grants was announced at the event. So if you want to build on Swarm, check out the blog for more information.

And from December 2022 on, all blog posts, including Monthly Development Update, have moved to [Swarm’s self-hosted blog](http://blog.ethswarm.org/). Don’t worry, they will also be available on Medium for now.

Have fun reading.

## Tracks

### **Bee Track**

* **New Bee Release 1.10 was deployed on the mainnet:**

  This release includes Storage Incentives Phase 2: the redistribution feature is a breaking change and old versions are not able to connect to the new version, therefore node operators are recommended to upgrade to this version as soon as possible. Here are the release notes:[ ](https://github.com/ethersphere/bee/releases/tag/v1.10.0)[https://github.com/ethersphere/bee/releases/tag/v1.10.0](https://github.com/ethersphere/bee/releases/tag/v1.10.0 "https://github.com/ethersphere/bee/releases/tag/v1.10.0")
* Improvements to internal tooling
* Working on new Swarm Desktop app release

### **JS Track**

* **New Bee-js release, version 5.1.1** (2022-12-21). [Read more about the release here](https://github.com/ethersphere/bee-js/releases/tag/v5.1.1). This is a small release that brings compatibility with the Bee 1.10.0 release and some bug fixes:
  * Backward compatibility for wallet endpoint
  * Staking endpoint url change
* **New Swarm Desktop release, version 0.17.0**

  This release is compatible with the Bee 1.10.0 release and contains numerous improvements and fixes.

  On Windows and macOS this is an automatic update, whereas Linux users have to manually download and install the latest version.

  Full release notes and link to download: [https://github.com/ethersphere/swarm-desktop/releases/tag/v0.17.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.17.0 "https://github.com/ethersphere/swarm-desktop/releases/tag/v0.17.0")

### **Fair Data Protocol**

* [A desktop variant of Fairdrive](https://fairdatasociety.github.io/fairdrive-desktop-app/) has been released. It allows users to FUSE mount Fairdrive (FairOS) as a folder on their computers and work with files on the local desktop. [#fairdrive channel on Discord](https://discord.gg/2xhVGF4kat) for support.
* For developers to get acquainted with the FDP stack, [an FDP tutorial app](https://github.com/fairDataSociety/fdp-TODO-app-tutorial) has been prepared, showing how to make an example TODO app both using fdp-storage typescript library or using FairOS APIs. The example TODO app repos are available for [fdp-storage](https://github.com/fairDataSociety/fdp-storage-TODO-app-example) as well as [FairOS](https://github.com/fairDataSociety/fairos-TODO-app-example).
* An overview of the Fair Data Protocol, the tooling available and future steps are presented in [the video presentation](https://youtu.be/8cILZnmIf3Q?t=2014), part of the Swarm Odyssey 2023 event.

### **DevOps Track**

* Deployed [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.10.0).
* Released the [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.11.13).

### **Research Track**

* Phase 2 of the Storage Incentives was released to mainnet and is being closely monitored for all behaviours and events, and no doubt optimisations will be made over the coming weeks involving further developments of the redistribution contract.
* Rewriting and testing of the Oracle for Phase 3 and further research documentation will be underway from New Year onwards.

### **Ecosystem**

* Swarm [Grants programme](https://www.ethswarm.org/grants): At the [Swarm Odyssey event](https://medium.com/ethereum-swarm/swarm-networks-storage-rewards-go-live-as-it-moves-towards-a-web3-pc-f8fcf33e5d00) we announced a new Grant Wave called [Swarm Odyssey Grant Wave](https://my.ethswarm.org/grants) which started on 21 December 2022 and will end on 21 February 2023. Everyone interested is incentivised to use the power of the [Fair Data Protoco](https://fdp.fairdatasociety.org/)l. Join and become a part of a cool community.

### **Events**

* [Swarm Odyssey event recap](https://medium.com/ethereum-swarm/swarm-networks-storage-rewards-go-live-as-it-moves-towards-a-web3-pc-f8fcf33e5d00) — Swarm network's storage rewards go live

### **Upcoming events**

* Monthly Ecosystem Call, 26 January 2023