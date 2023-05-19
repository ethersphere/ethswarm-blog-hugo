+++
banner = "/uploads/devupdate-jan.png"
categories = [ "Development updates" ]
date = 2023-02-02T23:00:00.000Z
description = "In January, the Bee Track released a new version of the Bee client (1.11) that brings an important update to uploads with mutable batches. This update causes newer chunks in a batch to replace older ones on the network. The Research Track, on the other hand, is nearing completion of Phase 3 of the storage incentives and is making great progress in producing documentation for Phases 4 and 5."
references_and_footnotes = [ ]
title = "Monthly Development Update – January 2023"
_template = "post"
+++


In January, the **Bee Track** released a new version of the Bee client (1.11) that brings an **important update to uploads with mutable batches**. This update causes newer chunks in a batch to replace older ones on the network. The **Research Track**, on the other hand, is **nearing completion of** [**Phase 3**](https://blog.ethswarm.org/foundation/2022/towards-the-world-computer.-the-swarm-network-upgrade-has-started./) of the storage incentives and is making **great progress in producing documentation for Phases 4 and 5**.

The **JS Track** has also released [**a new version of Swarm Desktop** ](https://www.ethswarm.org/build/desktop)(0.18.1). If you have it installed on Windows or macOS, the update will happen automatically. A lot has happened with regard to the **Fair Data Protocol**: a new version of the Swarm-compatible [Blossom](https://github.com/fairDataSociety/blossom) is available, and important changes and steps have been taken to make both the [Fairdrive Desktop App](https://fairdatasociety.github.io/fairdrive-desktop-app/) and the web app more powerful.

**Swarm Community Call** will now be our main monthly online event. Join us on the last Thursday of every month at 17:00 CET on the [**Swarm Foundation Discord**](https://discord.com/channels/799027393297514537/801438093927776286). You can also submit your questions ahead of time through [**this form**](https://airtable.com/shrBRyrMkXFsJvLS3). Mark your [**calendars**](https://www.addevent.com/event/Ui16058875) for **23 February at 17:00 CET**. We hope to see you there!

## Bee Track

**New Bee Release 1.11 was deployed:** [https://github.com/ethersphere/bee/releases/tag/v1.11.0](https://github.com/ethersphere/bee/releases/tag/v1.11.0 "https://github.com/ethersphere/bee/releases/tag/v1.11.0")

- 1.11 release which mostly consists of minor fixes to chunk syncing and improved uploading experience.
- The important news is uploads with mutable batches (which are the most common type of batches) are no longer terminated when max utilisation of the batch is reached, whereby newer chunks that belong to the batch will simply replace older chunks in the network.

In other news, we are completing and testing our new libp2p upgrade version, as well as making great progress addressing the localstore rewrite.

The investigation is also ongoing into the reasons for the small percentage of frozen nodes and postage stamp issues.

## JS Track

**New Swarm Desktop Release 0.18.1:** [https://github.com/ethersphere/swarm-desktop/releases/tag/v0.18.1](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.18.1 "https://github.com/ethersphere/swarm-desktop/releases/tag/v0.18.1")

- This release is compatible with the Bee 1.11 release and improves node status handling in the Web UI.
- On Windows and MacOS this is an automatic update, whereas Linux users have to manually download and install the latest version.

## Research Track

- We are working hard to complete the solution documents for the rest of the storage incentives (phases 4 and 5) and create our task backlog and a lot of progress has been made.
- The oracle phase 3 recalibration will be tested soon and hopefully finalised or close to it, though we treat this seriously and want it to be perfect.
- Other research project tracks such as blockchain data stored on Swarm are becoming ever clearer and development is in progress.

## Fair Data Protocol

**Blossom :** [https://github.com/fairDataSociety/blossom](https://github.com/fairDataSociety/blossom "https://github.com/fairDataSociety/blossom")

- Released new version, compatible with Swarm

**Fairdrive Desktop app :** [https://fairdatasociety.github.io/fairdrive-desktop-app/](https://fairdatasociety.github.io/fairdrive-desktop-app/ "https://fairdatasociety.github.io/fairdrive-desktop-app/")

- Released new version with support for sharing and forking pods

**Fairdrive Web app :** [https://fairdrive.fairdatasociety.org/](https://fairdrive.fairdatasociety.org/ "https://fairdrive.fairdatasociety.org/")

- Migrated fully to JS library fdp-storage
- Specification in progress for the “Fair portal” (currently called “Explore”) section to list independent dApps using Fairdrive
- Fixes for apps available in Explore section

**FDP Tutorial :** [https://github.com/fairDataSociety/fdp-TODO-app-tutorial](https://github.com/fairDataSociety/fdp-TODO-app-tutorial "https://github.com/fairDataSociety/fdp-TODO-app-tutorial")

- Minor updates

**FDP Play**: [https://github.com/fairDataSociety/fdp-play](https://github.com/fairDataSociety/fdp-play "https://github.com/fairDataSociety/fdp-play")

- Released 2.1.1 version that includes new storage incentive-related smart contracts and Bee 1.11.1

**FDP Contracts**: [https://github.com/fairDataSociety/fdp-contracts](https://github.com/fairDataSociety/fdp-contracts "https://github.com/fairDataSociety/fdp-contracts")

- Released new version of fdp-contracts-blockchain docker image [https://hub.docker.com/r/fairdatasociety/fdp-contracts-blockchain](https://hub.docker.com/r/fairdatasociety/fdp-contracts-blockchain "https://hub.docker.com/r/fairdatasociety/fdp-contracts-blockchain")
- It is planned to replace [@fairdatasociety/fdp-contracts NPM package](https://www.npmjs.com/package/@fairdatasociety/fdp-contracts) with the Smart Contract source files that Solidity based projects could import to do BMT inclusion proofs or Swarm Signature Recoveries. The substituted JS library will be still available but under name of @fairdatasociety/fdp-contracts-js

**Graffiti Feed**:

- AnyThread implemented Personal Storage based [Graffiti Feed](https://github.com/fairDataSociety/FIPs/blob/master/text/0062-graffiti-feed.md) in a JS library [https://github.com/anythread/zerodash](https://github.com/anythread/zerodash "https://github.com/anythread/zerodash")

## DevOps Track

- Deployed [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.11.1).
- Released the [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.11.15).
- Released the [Bee-clef](https://github.com/ethersphere/bee-clef) (v0.14.0).

## Ecosystem

**Social Archive X Dapplets Challenge Bounty** was implemented: [https://gitcoin.co/issue/29165](https://gitcoin.co/issue/29165 "https://gitcoin.co/issue/29165") , providing indexing of data for Social Archive

## Upcoming events

**Swarm Community Call** - our main monthly online event, will take place **on 23 February at 17:00 CET** in the [**Swarm Foundation Discord**](https://discord.com/channels/799027393297514537/801438093927776286) ([**add to calendar**](https://www.addevent.com/event/Ui16058875)).

It’s an opportunity for you to **hear about the progress** being made and get **exclusive reveals** directly from the team behind Swarm. Join the call to learn about the **upcoming events** organised, sponsored, supported or frequented by the Swarm Foundation and receive **the latest insights from our community-driven projects**.
Already have a question for the teams building the Swarm network? Send them a question by using this [**online form**](https://airtable.com/shrBRyrMkXFsJvLS3).
