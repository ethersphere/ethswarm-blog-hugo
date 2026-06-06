+++
banner = "/uploads/devupdate0526.png"
images = [ "/uploads/devupdate0526.png" ]
categories = [ "Development updates" ]
date = 2026-06-05T00:00:00.000Z
description = "May was a month of hardening, cleanup, and practical progress across the Swarm stack: Bee v2.8.0 shipped as a targeted security release, research moved closer to publishing the tokenomics roadmap, and tooling across Bee-JS, Swarm-CLI, Gateway, and Bee Factory saw usability updates..."
references_and_footnotes = [ ]
title = "Monthly Development Update – May 2026"
_template = "post"
+++


May was a month of hardening, cleanup, and practical progress across the Swarm stack. The [Bee team](https://github.com/ethersphere/bee) released **[v2.8.0](https://github.com/ethersphere/bee/releases/tag/v2.8.0)**, a targeted security hardening release that node operators are required to adopt, while also preparing a substantial backlog of API, performance, and reliability improvements for the next regular release. Research work moved closer to publishing the tokenomics roadmap, with withdrawable stake, pullsync, rebalancing, bandwidth incentives, and multi-chain testnets all advancing. On the tooling side, **[Bee-JS](https://github.com/ethersphere/bee-js/releases/tag/v12.2.1)**, **[Swarm-CLI](https://github.com/ethersphere/swarm-cli/releases/tag/v3.2.0)**, **[Swarm Gateway](https://github.com/ethersphere/gateway-ui)**, and **[Bee Factory](https://github.com/ethersphere/bee-factory)** saw a series of usability-focused updates, making local development, uploads, staking, cheques, and stamp management easier to work with. Across the wider ecosystem, Solar Punk continued work on Swarm Desktop, releasing **[Desktop v0.54.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.54.0)**, on collaborative editing app, AI agent identity and discovery, and customizable video streaming — all pointing toward the same direction: making Swarm more robust, more usable, and more ready for builders.


### [Bee Track](https://github.com/ethersphere/bee)

* The Bee team finalized, tested and successfully released [v2.8.0](https://github.com/ethersphere/bee/releases/tag/v2.8.0), a hardening release that reacts to a few possible vulnerability issues. Since we wanted to act on those quickly, we cut the release from a stable point on the mainline with only the targeted fixes on top, which meant leaving many already prepared PRs behind for now. The release mainly strengthens the networking layer: it adds extra peer validation, tightens how handshake fields are handled, and puts caps on underlay connection counts and byte sizes. If you run a node, we recommend upgrading to v2.8.0.
* With that out of the way, the team is back on the normal track and picking up the work that was left behind. Comparing master against the last regular release (v2.7.1), and setting aside everything that already went out in v2.8.0, there are around 34 PRs already merged and waiting for the next release. These include several new API and OpenAPI additions (batch lookup, more SOC upload options, chainstate and utilization data), a go-ethereum bump to 1.17.3, a go-libp2p update, some performance work such as a SIMD BMT hasher and faster RPC calls, and a good number of fixes and test cleanups, among them sharky corruption, postage block and chain tip handling, and status and bootnode reporting.


### Research Track

* The tokenomics roadmap of large EPIC milestones is nearing the finalised and prioritised stage before it will be published.
* The roadmap starts with the fully withdrawable stake and queue implementation which should be optimistically included in the next release. Other items include smart neighbourhood rebalancing, the possibility of insurance protocols, bandwidth incentives, and more.
* We are also finalising the solution and implementation specs for the pullsync protocol.
* We are about to deploy our testnets on other chains to experiment with how Swarm would operate on other chains.


### JS Track

#### Apps

##### [Bee-JS](https://github.com/ethersphere/bee-js)

We have released 3 versions, the latest is [v12.2.1](https://github.com/ethersphere/bee-js/releases/tag/v12.2.1).

* We now support long file paths with USTAR support added to tar files. All collection uploads done via Bee-JS and downstream projects first prepare the files into a tar format to be sent to the Bee node. A previous limitation of 128 characters per entry has been removed.
* We have improved the error message when extendStorage is called with already satisfied size and duration parameters.

##### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)

Three notable releases have been created for Swarm-CLI the past month, which all focus on enhancing the user experience. The latest version is [v3.2.0](https://github.com/ethersphere/swarm-cli/releases/tag/v3.2.0).

* The cheque deposit and withdraw commands now interpret the amount format in BZZ, such that users no longer need to specify PLUR to all sixteen decimal places (unless explicitly using the --unit flag)
* The same BZZ unit handling has been applied to the stake commands as well.
* Implemented an upload history. Previous uploads and resulting Swarm hashes can be checked anytime along with some additional helpful information regarding the upload. This feature can be turned off for privacy-seeking users.
* We are now showing exact dates for stamp expirations.
* Swarm-CLI now notifies the user when there is a new version available.
* We have added information about reserve capacity doubling and number of neighborhoods which fall into the node's area of responsibility.
* A --qr flag has been added to the upload commands for easy sharing to mobiles.
* The --stamp flag can now be omitted with the --stdin flag when uploading to gateways.
* The rchash command has been fixed to correctly pass the overlay prefix of the node.
* The quickstart command has been updated to use Bee v2.8.0.

##### [Swarm Gateway](https://github.com/ethersphere/gateway-ui)

* Swarm Gateway now allows querying the GET /batches endpoint. This endpoint lists all globally available postage batches, and leaks no information about the underlying Bee node.

##### [Bee Factory](https://github.com/ethersphere/bee-factory)

* Bee Factory has been re-introduced and is now the official, recommended local development environment that uses Docker and an Anvil blockchain.
* The nodes are funded, prepared with cheques, have whitelisted withdrawal addresses and also ready for rchash requests.
* Swarm Foundation uses Bee Factory as a powerful CI/CD tool for integration tests, but is also useful to run a local stack of Bee nodes to develop against before moving on to testnet or mainnet.


### Ecosystem

#### Solar Punk

* [Swarm Desktop v0.54.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.54.0) is out with Bee v2.8.0.
* [Collaborative document editing PoC](https://github.com/Solar-Punk-Ltd/swarm-collaborative-docs) has been extended, showcasing a solution that is a usable example for integrations. Now it's been also proven that it can work with [Monaco Editor](https://github.com/microsoft/monaco-editor), that is the engine behind VS Code. There is an ongoing collaboration with Remix that aims to integrate this solution into their product offering with the help of Solar Punk developers as an MVP.
* In the topic of AI, we've continued the development of Decentralized AI Agent Identity & Discovery with Swarm (utilizing Swarm MCP), and also created a technical design for Swarm AI Foundational Economy.
* The efforts to make our [video streaming](https://cryptomondays.beebridge.buzz/) even more customizable and scalable have also continued.


### DevRel

#### Content

* [Monthly Development Update – April 2026](https://blog.ethswarm.org/foundation/2026/monthly-development-update-april-2026/)
* [State of the Network: April 2026](https://blog.ethswarm.org/foundation/2026/swarm-state-of-the-network-april-2026/)
* [Swarm Community Call, 30 April – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-30-april-recap/)


### Events

##### Swarm Community Call – 28 May

[May's Swarm Community Call](https://x.com/i/broadcasts/1PKqrEZkLkeGb) covered a recent **Bee 2.8.0 breaking release** focused on security hardening (node operators were urged to upgrade ASAP), a research update showing multiple protocol improvements nearing final review, and two practical "building blocks" from Swarm Hackweek aimed at reducing real-world friction – **Swarm Collab App** (Google-Docs-style real-time editing with documents persisted on Swarm and updates relayed via a PubSub layer) and **in-browser light client progress**, demonstrated by retrieving content on testnet in under ~10 seconds, including both an image and a film excerpt. The call closed with an **EthPrague + hackathon report**, highlighting strong builder engagement, bounty winners, and takeaways on how AI is changing hackathon workflows and expectations.

You are welcome to watch the full event [recording here](https://www.youtube.com/watch?v=8wpS8tuiE6o&t=278s).


### Upcoming events

##### Swarm at Berlin Blockchain Week

Swarm will be active across [Berlin Blockchain Week](https://blockchainweek.berlin/) with a program that leans into the practical edge of decentralization: on 14 June at the Web3Privacy Now Neocypherpunk Summit, we'll deliver a talk and host a panel, and we'll close the day with a showcase experimental livecoding session — more details soon. We'll also be at the DeSci event (18–19 June) with a dedicated talk, and on 20 June we'll run hands-on workshops at Brew, focused on shipping with Swarm.

##### Swarm Community Call – 25 June

The next Swarm Community Call will take place on **[Thursday, 25 June](https://scc.swarm.bzz.link/)**, as usual on the last Thursday of the month, at 17:00 CET – [broadcast on the Swarm Foundation's X](https://scc.swarm.bzz.link/).


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
