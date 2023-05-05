+++
banner = "/uploads/dev_update_april.png"
categories = ["Development updates"]
date = 2023-05-05T05:00:00Z
description = "In April, the Bee Track laid out the blueprint for the upcoming releases of the Bee client to fix the issues uncovered in their investigation. The localstore rewrite project is in its final phase before testing, which is expected to begin in the coming weeks. The Bee Track team are also working on the requirements that nodes must meet in order to participate in the storage incentives game."
references_and_footnotes = []
title = "Monthly Development Update – April 2023"

+++

In April, the **Bee Track** laid out the blueprint for the upcoming releases of the Bee client to fix the issues uncovered in their investigation. The localstore rewrite project is in its final phase before testing, which is expected to begin in the coming weeks. The Bee Track team are also working on the requirements that nodes must meet in order to participate in the storage incentives game.

During this time, the **Research Track** has refined its statistics and information gathering and is now working on improving security and multisig procedures.

The **JS Track** released a [new Swarm Desktop version](https://github.com/ethersphere/swarm-desktop/releases) and is preparing for the latest bee-js 6.0.0 release.

The entire **Fair Data Protocol** stack underwent some important changes as well, including a batch of changes to the **[Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/)**, the launch of the **[Fair Portal](https://fairdrive.fairdatasociety.org/apps/fportal)** and a new release of the **[Blossom](https://github.com/fairDataSociety/blossom)** browser extension that fixes several issues and adds new functionality.

Shifting to the community side, the **[Bee installation section](https://docs.ethswarm.org/docs/installation/quick-start)** is now more user-friendly, and an accompanying [blog explaining how to easily run a Bee node for testing and development](https://blog.ethswarm.org/foundation/2023/build-on-swarm-how-to-run-a-bee-node-for-testing-and-development/) is available on the [official Swarm blog](https://blog.ethswarm.org/). There are also a couple of active bounties still in progress ([here](https://app.zenhub.com/workspaces/bounties-6305d6269c97be273b00e01a/issues/gh/fairdatasociety/bounties-internal/46) & [here](https://bounties.gitcoin.co/issue/29842)).

Mark 21 June on your calendar, because that’s when the Swarm Foundation will hold the three-day **[Swarm Virtual Summit](https://summit.ethswarm.org/)**. If you are using Swarm to power your project, **submit a paper and present your work with a talk**. More details will be revealed at the next **Swarm Community Call on 25 May**, so make sure to join. In the meantime, you can keep yourself busy with Daniel A. Nagy’s presentation from Ethereum Zürich, titled “[Storage Incentives in the Swarm Network](https://www.youtube.com/watch?v=MyINf__6e6o)”.

## Tracks

### Bee Track

- There was the 1.15 release which tackled some of the known optimisations we identified after our investigation into the network’s health and retrieval in the previous week. This has resulted in a 0% error rate currently, with >83% of the network size on the new version.
- The localstore rewrite has its last few PRs drafted and is currently being tested in a suitable environment. We also now have a larger scale 1000 node private testing environment for better insight into its behaviour.
- The requirements for nodes and the storage incentives have been identified.

### Research Track

- Improving our statistics outlook and information, including that of the skipped rounds and frozen nodes reasoning.
- The Storage Incentives paper has been completed and shared with the community on Discord and close peers, and we are in the process of receiving critical feedback.
- Phase 4 testing environment and claim phase logic involved in this.
- Upgraded security and multisig implementation are complete; reviews and additions pending.

### JS Track

- [Released Swarm Desktop v0.21, v0.22 and v0.23](https://github.com/ethersphere/swarm-desktop/releases) which keeps your Bee up to date (currently v1.15.0).

### Ecosystem

#### [Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/)

- Implemented changes to affect speed, available on the [.development.](https://app.fairdrive.dev.fairdatasociety.org/) version of fairdrive, mostly to reduce loading times.
  - [Caching pod content list](https://github.com/fairDataSociety/fairdrive-theapp/pull/306)
  - [Clearing cache on error](https://github.com/fairDataSociety/fairdrive-theapp/issues/311)
  - [Cache support for Blossom](https://github.com/fairDataSociety/fairdrive-theapp/pull/323) extension

#### [Fair Portal](https://github.com/fairDataSociety/fair-portal)

- [Fair Portal frontend](https://https://fairdrive.fairdatasociety.org/apps/fportal) was released, which is a catalogue of apps that use FDP protocol and are aligned with Fair Data Principles. Developers can submit and add their apps.

[Blossom](https://github.com/fairDataSociety/blossom)

- Blossom[ version release 0.3.0 ](https://github.com/fairDataSociety/blossom/compare/blossom-ext-v0.2.3...blossom-ext-v0.3.0) was released.
  - [Fixed the serialisation issue](https://github.com/fairDataSociety/blossom/issues/130)
  - [Fixed the issue with global postage batch ID](https://github.com/fairDataSociety/blossom/issues/121)
  - [Adjusted the extension to allow access to FDS dApps that are not loaded from a bzz link](https://github.com/fairDataSociety/blossom/pull/122)
  - [Fixed the invalid dappId issue in the library](https://github.com/fairDataSociety/blossom/issues/117)
  - [Added additional info about the swarm extension to the readme](https://github.com/fairDataSociety/blossom/issues/128)
  - [Fixed the library to be compatible with fdp-storage cache object](https://github.com/fairDataSociety/blossom/pull/143)

#### [FairOS](https://github.com/fairDataSociety/fairOS-dfs)

- [fairOS-cli: Support for upload and download of entire folders](https://github.com/fairDataSociety/fairOS-dfs/issues/25)
- [Change minimum blockSize for upload](https://github.com/fairDataSociety/fairOS-dfs/issues/315)
- [Fix KVBatch does not work for bytes index](https://github.com/fairDataSociety/fairOS-dfs/issues/472)
- [Update feed fails with "chunk already exists"](https://github.com/fairDataSociety/fairOS-dfs/issues/473)
- [Add documentation on public pods](https://github.com/fairDataSociety/fairOS-docs/issues/51)

#### [Fairdrive Desktop App](https://github.com/fairDataSociety/fairdrive-desktop-app)

- [Fix strange behaviour when grabbing window](https://github.com/fairDataSociety/fairdrive-desktop-app/issues/162)

#### Finished bounties:

- [PDF viewer Dapp for Fairdrive, using Blossom to access fdp-storage](https://bounties.gitcoin.co/issue/29812)
- [Implement Slate rich text editor as Fairdrive dApp](https://bounties.gitcoin.co/issue/29819)
- [Datafund has published a blog on revenues from being a Swarm node operator](https://blog.datafund.net/why-datafund-is-a-swarm-node-operator-and-how-its-paying-off-fd92e9906785)

#### Other updates

- Node operator report in a blog post : “[Why Datafund is a Swarm node operator and how it’s paying off. Owning data is owning the infrastructure.](https://blog.datafund.net/why-datafund-is-a-swarm-node-operator-and-how-its-paying-off-fd92e9906785)”
- [Swarmscan](https://swarmscan.io/) updates the node discovery algorithm to make it more robust, finding more active nodes.

### DevOps Track

- Deployed [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.14.1).
- Released the [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.12.1).

### DevRel

#### Ethereum Zürich

- Swarm Foundation founders Viktor Tron and Daniel A. Nagy gave presentations. You can watch Daniel's presentation [Storage Incentives in the Swarm Network on YouTube. ](https://www.youtube.com/watch?v=MyINf__6e6o)

#### Docs update

- Updated bee install section pushed live
  - [https://docs.ethswarm.org/docs/installation/quick-start](https://docs.ethswarm.org/docs/installation/quick-start)
    - https://docs.ethswarm.org/docs/installation/install
  - Docusaurus and node version updated, added LaTeX support, updated theme

#### Educational content

- [Build on Swarm: How to Run a Bee Node for Testing and Development](https://blog.ethswarm.org/foundation/2023/build-on-swarm-how-to-run-a-bee-node-for-testing-and-development/)

#### Swarm Community Call

- Swarm Community Call, our main monthly online event, was held on 27 April.

#### Apps: **[Etherjot](https://github.com/Cafe137/etherjot)**

- Etherjot allows you to effortlessly create a blog on Swarm. In the latest release, support for importing existing Jekyll or Hugo blogs has been added.

### Upcoming events

- Swarm Community Call – our main monthly online event, will take place on 25 May at 17:00 CET in the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286) ([add to calendar](https://www.addevent.com/event/yr16580319)). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.
- **[Swarm Virtual Summit - Call for Papers](https://summit.ethswarm.org/)** - Mark **21 June** on your calendar, because that’s when the Swarm Foundation will hold the three-day **Swarm Virtual Summit**. More details will be revealed at the next **Swarm Community Call on 25 May**, so make sure to join.
