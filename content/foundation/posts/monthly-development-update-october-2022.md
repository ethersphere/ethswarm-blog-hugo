+++
banner = ""
categories = [ "Development updates" ]
date = 2022-11-04T23:00:00.000Z
description = "The development of the Swarm network and its associated ecosystem continues to move forward as planned. Bee client 1.9.0 is out and the team behind Bee is fully focused on meeting the timelines for bringing storage incentives to mainnet (they are already available for preview on testnet). There’s also a new Bee-js in the pipeline, which brings an array of breaking changes."
references_and_footnotes = [ ]
title = "Monthly Development Update — October 2022"
_template = "post"
+++


The development of the Swarm network and its associated ecosystem continues to move forward as planned. **Bee client 1.9.0** is out and the team behind Bee is fully focused on meeting the timelines for bringing storage incentives to mainnet (they are already available for preview on testnet). There’s also a **new Bee-js in the pipeline**, which brings an array of breaking changes.

Working closely with the Bee and BeeJS track, **the research team have reviewed Phases 1 & 2 of storage incentives on testnet** and are already working on optimisations. Specifications for the **rent oracle** are now complete and the latter **is entering the private testing phase**.

The Fair Data Protocol (FDP) team have had their hands full in the last month as well. Personal Storage metadata encryption has been merged in FDP-Storage to the main branch and a **0.6 version of the Swarm Extension** for Chrome is out. Regarding the extension, the team are progressing in manifest v3 transition, whose features have been causing them quite a lot of grey hair. **Blossom’s new signer interface** is coming along nicely and a command line interface that uses FDP-storage is under development too.

On the community side, **Devcon VI in Colombia** was October’s main event, where a strong delegation from both the Swarm Foundation and Association was present. The activities started well before the official event, with Swarm Foundation co-organising the [**Infinite Genesis **](https://infinite-hackathons.eth.limo/#/)hackathon that produced some great solutions that used Swarm decentralised storage.

There are also **some great events coming up** in the coming weeks and months, so be sure to check the rest of the blog for more details.

Enjoy the read

# **Bee Track**

- This release includes a myriad of hardenings and bug fixes that can be found below. The storage incentives can be previewed on testnet, but it is not enabled as a feature on the mainnet. For more details, read the full release notes [Bee 1.9.0](https://github.com/ethersphere/bee/releases/tag/v1.9.0)
- Full attention on testing Phase 2 of storage incentives.
- Working on a project to improve the local storage situation

# **JS Track**

- There is a new version of Bee-js in the pipeline which is going to change the package to be an [EcmaScript Module (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). This is an ongoing upgrade in the Javascript ecosystem and it brings a lot of breaking changes, so it is being rolled out slowly and carefully. Currently, there is a [pre-release version already on npm](https://www.npmjs.com/package/@ethersphere/bee-js/v/6.0.0-pre.0), so developers can try it out and upgrade other dependencies if needed. It also contains bug fixes and improvements and is planned to be released in the coming weeks.

# **Fair Data Protocol**

[**Fdp-storage**](https://github.com/fairDataSociety/fdp-storage)

- Personal storage metadata encryption is merged in FDP-Storage to the main branch. The release will happen after the ongoing Fairdrive implementation of this feature.
- Solution executed to use FDP-Storage in React Native applications. The developers have to use our recommended shimming on the BeeJS upload method that allows uploading of data. This is documented in the project’s readme file.
- Portable account reupload feature added, which can be used if the credentials are garbage collected from the Swarm network.

[**Swarm extension**](https://github.com/ethersphere/swarm-extension)

- V0.6 of Swarm Extension released, in which we updated the bee-dashboard dependency that fixed the issue with the folder/website uploads. With this, its UI also got aligned with the Swarm Desktop.
- Support added for subdomain redirection.
- We are makng progress in manifest v3 transition of the project, where we may drop the subdomain redirection feature and FakeURL concept. We are planning to substitute the functionality of the latter with the BeeJS proxy object that keeps the same interface as BeeJS, but the dApps communicate with the extension instead of with the Bee client directly. Having a proxy like this hides the connection details of the Bee client used from the dApps.

[**Blossom**](https://github.com/fairDataSociety/blossom)

- ci- and testing-related improvements
- Working on the signer interface for dApps. This will have a similar interface to that of Metamask or other wallet handler applications, but the key with which dApps can interact will be an application-specific key derived from the user’s HD wallet (The key of the application pod).

[**FIPs**](https://github.com/fairDataSociety/FIPs)

- Finalising portable account workflow in [this document](https://github.com/fairDataSociety/FIPs/blob/301bf00e2ab4c784a8a0c212e57a667f7f3d8577/text/0059-portable-account.md). Please give suggestions on it before it is accepted.
- Started working on the Personal Storage FIP. It will describe how FairOS/FDP-Storage handles pods, how it uses feeds and what metadata it stores about files and directories. Discussion is possible on [FDS Discord](https://discord.gg/KrVTmahcUA).
- [Swarm DB PR](https://github.com/fairDataSociety/FIPs/pull/60/files) for utilising BeeSon and creating a decentralised database. The author is waiting for any feedback on the topic.

[**FDP-CLI**](https://github.com/fairDataSociety/fdp-cli)

- Application development continued on having a command line interface that uses FDP-Storage.
- Portable account login and account handling is merged to the main branch

# **DevOps Track**

- Kubernetes clusters (production and staging) upgraded to version 1.21
- CI/CD speed improvements
- New bee version (1.9.0) deployment on mainnet
- Testnet deployments

# **Research Track**

- Storage incentives Phase 1 & 2 reviewed on testnet with functionality as expected and working on optimisation
- Phase 3 price/rent Oracle has been specified and completed and is in the process of modelling and private testing before wider testnet release
- Plans have been made and are being continuously assessed for the release of the storage incentives to mainnet
- Full focus is on the price oracle.

# **Ecosystem Track**

Projects that delivered intermediate milestones:

- Sovr — Sovr is a stable tooling that lets users dive into the world of decentralised compute pods.
- Laibach X Swarm Decentralisation of art — Laibach plans to start the process of self-decentralisation by releasing a limited series of NFTs that will allow owners to enter a social-artistic experiment with multiple potential outcomes.

# **Ongoing bounties**

- [Decentralised GitHub #1 — Beeson-Git Schema](https://gitcoin.co/issue/29430)
- [Integrate WinAMP With Fairdrive](https://gitcoin.co/issue/29335)
- [Social Archive X Dapplets Challenge](https://gitcoin.co/issue/29165)

# **Events**

🗓️ **The Swarm Foundation was at Devcon!**

- [The Devcon video archive is now available on the Swarm network](https://medium.com/ethereum-swarm/through-etherna-the-devcon-video-archive-is-now-available-on-the-swarm-network-66d4583df8c0)
- [Run a light or full Bee node — A Devcon workshop by Attila Gazsó](https://medium.com/ethereum-swarm/run-a-light-or-full-bee-node-a-devcon-workshop-by-attila-gazs%C3%B3-9730ee38cc33)
- Devcon, held the agenda on Swarm. Attendees were able to view the full agenda hosted on Swarm.

🗓️ [**World Ethical Data Forum**](https://worldethicaldataforum.org/)

- Swarm Foundation sponsored the [World Ethical Data Forum ](https://worldethicaldataforum.org/)and Swarm Foundations Director Gregor Žavcer gave a presentation on what a fair data economy might look like in a world with an ever more voracious appetite for personal data.

🗓️ [**Monthly Ecosystem call**](https://medium.com/ethereum-swarm/monthly-ecosystem-call-27-10-2022-recap-4751610f2127)

# **Upcoming events**

- To stay up to date with Swarm and be the first to hear updates, join The Monthly Ecosystem Call, online, 24 November
- Winter Solstice Event, online, 21 December
- WAM Hackathon, online, 1–21 March 2023
- Swarm Summit, TBC, 21 June 2023
