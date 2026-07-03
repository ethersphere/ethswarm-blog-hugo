+++
banner = "/uploads/devupdate0626.png"
images = [ "/uploads/devupdate0626.png" ]
categories = [ "Development updates" ]
date = 2026-07-03T00:00:00.000Z
description = "June was a month of stabilization and showing up in person: Bee v2.8.1 was locked in and announced for July 7, Swarm-CLI v3.3.0 redesigned ACT access control, Bee Factory and Gateway kept maturing as developer infrastructure, and Swarm spent a full week at Berlin Blockchain Week..."
references_and_footnotes = [ ]
title = "Monthly Development Update – June 2026"
_template = "post"
+++

June was a month of stabilization and showing up in person. With the v2.8.0 security release out the door, the [Bee team](https://github.com/ethersphere/bee) got back on its regular track and closed the month with the next patch, **[v2.8.1](https://blog.ethswarm.org/foundation/2026/bee-2-8-1-release/)**, locked in and publicly announced for July 7. On the tooling side, **[Bee-JS](https://github.com/ethersphere/bee-js/releases/tag/v12.2.2)** shipped a round of fixes while preparing a larger security-minded cleanup for its next release, **[Swarm-CLI](https://github.com/ethersphere/swarm-cli/releases/tag/v3.3.0)** redesigned its ACT access control around a single access command, and **[Swarm Gateway](https://github.com/ethersphere/gateway-ui)** and **[Bee Factory](https://github.com/ethersphere/bee-factory)** continued to stabilize as developer infrastructure. Across the wider ecosystem, Solar Punk delivered reliability and UX fixes for Swarm Desktop and Bee Dashboard while pushing ahead on AI marketplaces and video streaming. And beyond the code, Swarm spent a full week out in the world at Berlin Blockchain Week — talks, panels, workshops, and a collective livecoding experiment — with the June Community Call bringing the field report home.


### [Bee Track](https://github.com/ethersphere/bee)

* June was a stabilization-and-planning month for the Bee team. With v2.8.0 out the door, the team got back on its normal track and started picking up the work that had been shelved during the security release. The month closed with the next patch (2.8.1) locked in but deliberately pushed a week to July 7 after testing surfaced late bugs — a date that had already been announced publicly on June 30. On the network side, bootnodes and around 10% of mainnet nodes now support WSS, and there were also improvements to Beekeeper. For the important parts of what's in the release, [see the release announcement](https://blog.ethswarm.org/foundation/2026/bee-2-8-1-release/).


### JS Track

#### Apps

##### [Bee-JS](https://github.com/ethersphere/bee-js)

No major changes were released, only fixes. We released 3 versions; the latest is [v12.2.2](https://github.com/ethersphere/bee-js/releases/tag/v12.2.2).

* Removed the BeeDev class

Coming in the next release, after Bee 2.8.1 ships:

* We removed axios from the library and started using native fetch instead, since axios had several security issues recently.
* We started using [zod](https://zod.dev/) for schema validation, which results in a cleaner codebase.
* We improved stability by introducing a check in the repository, which we can trigger to test the library with a React Native test project.
* Added minimumValidityBlocks to the GET /chainstate response.
* Added updatePostageBatchLabel and renameStorage (same functionality) functions to be able to update a postage batch's label.
* We started validating the port of the Bee API URL, preventing users from using ['bad ports'](https://fetch.spec.whatwg.org/#port-blocking).

##### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)

We continued improving the UX to make the CLI more convenient to use. The latest version is [v3.3.0](https://github.com/ethersphere/swarm-cli/releases/tag/v3.3.0).

* Redesigned and reimplemented ACT — the main command is now access; you can read more details in the [CLI docs](https://github.com/ethersphere/swarm-cli#access-control-trie-act).
* Deprecated the grantee command and old ACT-related flags (e.g. download --act or --act-history-address).
* When the Bee API URL is a gateway, we no longer require a stamp.

##### [Swarm Gateway](https://github.com/ethersphere/gateway-ui)

* Introduced readiness mode, configurable via the READINESS_MODE env variable; values can be 'strict' or 'normal' (default).
* Added a new endpoint to query global batches by owner (/batches/owner/:owner).

##### [Bee Factory](https://github.com/ethersphere/bee-factory)

This month we spent time stabilizing the current state of Bee Factory and continued adding back features (that we had previously) to the rewrite.

* We introduced automated Docker image caching: on every new master push, we build and push a Docker image to Docker Hub with the latest tag. This GitHub Actions workflow can also be triggered manually with a tag parameter in GitHub's UI.
* Nodes now run on 1633 + 2 * n ports (1633, 1635, 1637, etc.).
* Cheque generation got stabilized.


### Ecosystem

#### Solar Punk

* **Swarm Desktop & Bee Dashboard** saw a round of reliability and UX fixes across both apps — a rare startup restart loop and macOS binary issue were resolved, and the dashboard gained clearer transaction-failure messages, friendlier stamp top-up/dilute, and a range of smaller usability improvements, many of them community-reported.
* On the **AI** side, we continued work on Data-enriched AI Marketplaces (AI Foundational Economy) — initiating Swarm Market MCP with an item catalog-creation tool, verifying catalog output against ERC-8004, and testing the end-to-end payment flow — while progressing buyer and seller agents.
* Our **video streaming** work advanced with scaled-up load testing for live-stream segment delivery, an HLS player quality-of-experience overlay, and a transcoding-engine experiment, alongside kicking off the design for Swarmcast, our next-generation streaming effort.
* The team also prepared talks, a panel, and a hands-on workshop for **Berlin Blockchain Week**.


### DevRel

#### Content

* [Bee v2.8.1 Release Announcement](https://blog.ethswarm.org/foundation/2026/bee-2-8-1-release/)
* [Monthly Development Update – May 2026](https://blog.ethswarm.org/foundation/2026/monthly-development-update-may-2026/)
* [State of the Network: May 2026](https://blog.ethswarm.org/foundation/2026/swarm-state-of-the-network-may-2026/)
* [Swarm Community Call, 28 May – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-28-may-recap/)


### Events

##### Swarm Community Call – 25 June

[June's Swarm Community Call](https://x.com/i/broadcasts/1vJpPPDPMmbJE) covered the upcoming **Bee 2.8.1 release** — what's in it and what node operators should know — along with the latest **research updates** on protocol work, tokenomics, and network stability. The In Focus segment brought a **field report from Berlin Blockchain Week**: what stood out, where Swarm connected to the wider ecosystem, and the story behind **The Plural Monolith**, a collective livecoding music experiment. The call closed with the community AMA and open discussion.

You are welcome to watch the full event [recording here](https://www.youtube.com/live/hOWuTt89W78).

##### Swarm at Berlin Blockchain Week

Swarm was active across [Berlin Blockchain Week](https://blockchainweek.berlin/) with a program that leaned into the practical edge of decentralization. The week started on 14 June at the Web3Privacy Now Neocypherpunk Summit at Funkhaus, where we delivered a talk, hosted a panel, and closed the day with [The Plural Monolith](https://livecoding.eth.limo/) — a collective [livecoding music experiment](https://x.com/ethswarm/status/2069329377548976451) together with DarkFi and Web3Privacy Now. From there the team joined Berlin Ethereum Day (15 June), Dappcon (16–17 June), Web3 Summit (18 June), and the AI Agents Summit (20 June), and gave a dedicated talk at [DeSci.Berlin](https://desci.berlin/) (19 June). We wrapped up the week on 20 June at Brew with four hands-on workshops and a presentation, focused on shipping with Swarm.


### Upcoming events

##### Swarm Community Call – 30 July

The next Swarm Community Call will take place on **[Thursday, 30 July](https://scc.swarm.bzz.link/)**, as usual on the last Thursday of the month, at 17:00 CET – broadcast on the [Swarm Foundation's X](https://x.com/i/broadcasts/1nJOLLAawNExR) or [YouTube](https://www.youtube.com/live/5oWG03EtQN4).


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
