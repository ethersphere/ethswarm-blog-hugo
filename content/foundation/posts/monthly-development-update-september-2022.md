+++
banner = ""
categories = ["Development updates"]
date = 2022-10-04T22:00:00Z
description = "September has seen a lot of action across all tracks. The Bee track released a breaking version of the Bee client (1.8.0) and two additional releases with a patch and an update. Because of the new Bee client version, the JS Track also had to update Swarm Desktop to make it compatible with the changes."
references_and_footnotes = []
title = "Monthly Development Update — September 2022"

+++

September has seen a lot of action across all tracks. The Bee track released a breaking version of the Bee client (1.8.0) and two additional releases with a patch and an update. Because of the new Bee client version, the JS Track also had to update Swarm Desktop to make it compatible with the changes.

A lot has been happening with the Fair Data Protocol as well. The team had to solve a bee-js-related upload issue affecting Chrome users. A decision has also been made that users of the Fair Data Society ecosystem will be able register their usernames via ENS on the Ethereum mainnet.

The research track team are dedicating their efforts to bringing Phases 2 and 3 of the storage incentives upgrade to testnet and then to mainnet on time. You can read more about that in the sections below.

On the ecosystem side, the “Wikipedia on Swarm” prize has concluded and two submissions have received DAI 20,000 and 10,000 respectively. Exciting things are happening with grantees as well. The Metaprovide project is building a Nextcloud Swarm plugin, while Braintrip have finished their first two milestones. A delegation from Swarm Foundation and Association has held a successful meetup during EthBerlin, and the winning project in the “Freedom to transact” track has used the Swarm network as part of their solution.

There are also five bounties still open on Gitcoin that you can give a shot. And last but not least, a delegation from Swarm Foundation and Swarm Association will be heading to Bogota for this year’s Devcon.

Enjoy the read.

# Tracks

**Bee Track**

- [Bee 1.8.0 ](https://github.com/ethersphere/bee/releases/tag/v1.8.0-rc1)Bee 1.8.0 is a breaking release that is incompatible with older clients so it is necessary to upgrade as soon as possible to be on the main side of the network and not on the deprecated one. For more details, see the Bee 1.8 [release notes](https://github.com/ethersphere/bee/releases/tag/v1.8.0).
- [1.8.1 ](https://github.com/ethersphere/bee/releases/tag/v1.8.1)This release is a patch release to fix the postage stamp smart contract issues observed on the mainnet.
- [Bee 1.8.2](https://github.com/ethersphere/bee/releases/tag/v1.8.2) This small release includes a new accurate reserve size calculation method for the depthmonitor which helps the storage/eviction radius decrease to a more accurate value. The depthmonitor change affects the neighbourhood size of the pull-sync protocol, so it is important that node operators upgrade to this version as soon as possible.
- Improved API usability.
- Working on the 2nd phase of the storage incentives.

**JS Track**

- New Desktop release, 0.16.0 — this is another big Swarm Desktop release. There were several major internal improvements, a new Bee 1.8 version and Dashboard improvements. [Read more about the release](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.16.0).
- Working on the gateway proxy, which will automate the postage stamp process so that people can host their websites and postage stamps are taken care of automatically.

**Fair Data Protocol (FDP)**

- Forked @ethersphere/bee-js in [fairDataSociety/bee-js](https://github.com/fairDataSociety/bee-js) where we sorted out webkit and Chrome browser compatible bee-js that fixes [upload-related issues](https://github.com/ethersphere/bee-js/issues/762). It is [published on NPM](https://github.com/ethersphere/bee-js/issues/762) until the official bee-js release comes out.
- [FDP Storage library](https://github.com/fairDataSociety/fdp-storage) is also affected by the above issue for which a hotfix was released in order to use the library in browsers that can be installed by the ‘beta’ tag for now ‘npm install @fairdatasociety/fdp-storage@beta’
- In the [Swarm Extension repository](https://github.com/ethersphere/swarm-extension) the [localhost subdomain redirection PR ](https://github.com/ethersphere/swarm-extension/pull/136)has been merged so it will be supported in the next release. It is planned to be rolled out together with the updated Bee Dashboard. Working on the upcoming v3 manifest change in Chrome.
- Submitted [Blossom 0.1.1](https://github.com/fairDataSociety/blossom/releases/tag/blossom-ext-v0.1.1) to the [Chrome web store](https://chrome.google.com/webstore/detail/blossom/caedjloenbhibmaeffockkiallpngmmd) that contains fixes for bee-js and a race condition
- A [new FIP has been accepted](https://github.com/fairDataSociety/FIPs/blob/master/text/0056-blob-header.md) that prescribes the header in all data-structures used within FDP
- A decision has been reached to use [ENS](https://ens.domains/) on ethereum mainnet where users can register their username used in the Fair Data Society (FDS) ecosystem and leverage the portable account feature. Regarding this, the development of the Smart Contracts will be started soon which will support NFT minting for usernames as well.
- For reaching out to the Ethereum mainnet we are setting up a Nethermind + lighthouse clients on FDS side to natively connect to the P2P network that FDS users will optionally be able to access for getting chain states.
- [BeeSon](https://github.com/fairDataSociety/beeson) got listed in the [multicodec list of multiformats](https://github.com/multiformats/multicodec/blob/master/table.csv#L100) that allows it to encode BeeSon addresses in [CID](https://github.com/multiformats/cid) format. It opens the possibilities for integration of BeeSon in projects using [IPLD](https://ipld.io/).

**DevOps Track**

- Preparing gnosis nodes for the merge.
- Consensus client is synched with gnosis.
- Deployed the [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.8.2).

**Research Track**

- Iterated through the development process of Phase 2 smart contracts and taking into account advantages and disadvantages of implementations and edge-cases, as well as future-proofing the release candidates scheduled for release next week before Devcon.
- The redistribution contract is now complete and functional and being continuously tested for release to testnet.
- The staking contract is now complete and tested. It allows for manual staking with minimum stake (when pushed to mainnet this will be 10 BZZ) and stakes are non-withdrawable.
- The Phase 2 smart contracts also have their bee-side/client agents (redistribution and staking agents) which have been specified by the research team and built by the Bee team. thus setting us up for our testnet release of the storage incentives and continuing testing, in which we will also release Phase 3 of the storage incentives (Price Oracle) — delivering the core aspects of the storage incentives roadmap.
- This will allow us to monitor, test, and improve upon the massive milestones achieved before immediately moving onto phases 4 and 5.

**Ecosystem Track**

- The “[Wikipedia on Swarm](https://gitcoin.co/issue/28926)” Prize has ended. There were two prize awards given out in the sums of DAI 20,000 and DAI 10,000. The prize recipients were announced at the Monthly Ecosystem Call on 29 September 2022.
- Swarm support added to .eth.limo
- if you have an ENS domain hosted on Swarm, it will automatically work there as well, for example: [https://swarm.eth.limo/](https://swarm.eth.limo/ "https://swarm.eth.limo/")
- We Are Millions — WAM — is continuously hosting “food for thought” conversations on Twitter Spaces >> make sure to follow by tuning in live or relistening on @WAMillions [https://twitter.com/WAMillions/](https://twitter.com/WAMillions/ "https://twitter.com/WAMillions/")

**Grants Track**

- **This month 3 teams concluded the work on grant milestones.**
- [Metaprovide project](https://metaprovide.org/nextcloud-swarm-plugin) build a Nextcloud Swarm Plugin. This plugin brings Swarm to Nextcloud — decentralised file-storage, connected to the blockchain. [Try it for yourself](https://metaprovide.org/nextcloud-swarm-plugin).
- [Swarm on Dappnode](https://mirror.xyz/mfw.rndlabs.eth/0xImoscth-vf31BzcCnpTBBps9uh1Xrs65XgrwxJDog) build an easy to install Dappnode package for Swarm mainnet and testnet.
- [Braintrip](https://braintrip.net/en) achieved the first two milestones in their project. They created the BrainTrip Dementia Index (BDI) and are using EEG (electroencephalography) brain scans as a diagnostic tool and storing data sets on Swarm.

**Ongoing bounties**

- [Social Archive X Dapplets Challenge](https://gitcoin.co/issue/29165)
- [Censorship Resistant Blog](https://gitcoin.co/issue/28924) (in implementation)
- [Social Archive X GetLogin.Eth Challenge](https://gitcoin.co/issue/29164) (in implementation)
- [Store any page in Chrome to personal storage using an extension with the ability to browse at a later date](https://gitcoin.co/issue/29072) (in implementation)
- [Integrate WinAMP with Fairdrive](https://gitcoin.co/issue/29335) (in implementation)

**Events**

- EthBerlin Meetup C-Base Hackerspace, 14 Sep. The main topic of this meetup was Swarm’s storage incentives. If you missed it you can watch the presentations on [YouTube](https://youtu.be/OH18D_PKo9U?t=75) or read a [recap blog post](https://medium.com/ethereum-swarm/storage-incentives-when-what-and-how-an-ethberlin-meetup-recap-cab2cf4eaa77)
- EthBerlin Hackathon — EthBerlin winner of the “Freedom to Transact” prize “guest appearance” (their solution uses Swarm for storing NFTs and LivePeer for streaming video [https://devfolio.co/projects/nft-are-live-at-ethberlin-6f9a](https://devfolio.co/projects/nft-are-live-at-ethberlin-6f9a "https://devfolio.co/projects/nft-are-live-at-ethberlin-6f9a")) (Pablo)
- EthHungary
- [Last Shot Conference](https://last-shot.hcpp.cz/), Hackers Congress Paralelní Polis, Prague, 30 Sep — 2 Oct.

**Upcoming events**

- [Infinite Hackathon](https://infinite-hackathons.eth.limo/) in Bogota, 7–9 October
- [Devcon Bogota](https://devcon.org/), 11–14 Oct
- Devcon Bogota — Workshop: Join the Swarm: How to run a light node or full node — 10 October, 10:00 GTM-5, Room: Workshop 3.
- Monthly Ecosystem Call — 27 October, 17:00 CET, Discord ([Swarm’s channel](https://discord.com/invite/pynFnHjbAP))
- WAM Sessions coming up in October (@WAMillions Twitter Spaces) — on the 20 Oct at 17:00 CET, Robert de Groot will be hosting Owen Barnes and Jonan Scheffler to talk about the limits of Web3 against the background of this year’s Devcon; and on the 25 Oct at 20:00 CET, WAM sessions will welcome Felix Stalder, Ruth Catlow and Jonas Lund!

**Ask the Swarm Foundation!**

Do you have a question you want answered by the Swarm Foundation? At every Monthly Development Update we’ll answer a few questions submitted by community members. Submit your questions below.

[https://airtable.com/shrKnOLdMkHkS1m3y](https://airtable.com/shrKnOLdMkHkS1m3y "https://airtable.com/shrKnOLdMkHkS1m3y")
