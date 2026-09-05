+++
banner = "/uploads/devupdate0826.png"
images = [ "/uploads/devupdate0826.png" ]
categories = [ "Development updates" ]
date = 2026-09-05T00:00:00.000Z
description = "August was a month of hardening the foundations while pushing more of Swarm into practical use: Bee 2.8.2 strengthened node resilience and security, Bee-JS 13 and the new Core SDK brought Swarm primitives out of the node and into applications, and for the first time the Swarm Community Call was streamed live over Swarm."
references_and_footnotes = [ ]
title = "Monthly Development Update – August 2026"
_template = "post"
+++

TL;DR: August was a month of hardening the foundations while pushing more of Swarm into practical use. Bee 2.8.2 strengthened node resilience and security, while the JS track made a significant architectural move with Bee-JS 13 and the new Core SDK, bringing Swarm primitives out of the node and into applications. Research continued across incentives, PubSub, upgrades and the persistent question of deletion, while Solar Punk advanced file management, AI tooling and streaming. The latter also produced a milestone we could see in action: for the first time, the Swarm Community Call was streamed live over Swarm.


### [Bee Track](https://github.com/ethersphere/bee)

* The main event for the Bee team in August was the release of [Bee v2.8.2](https://github.com/ethersphere/bee/releases/tag/v2.8.2), a security-hardening release focused on making nodes resilient to untrusted or corrupted input. Malformed peer messages, corrupted local state, or a misbehaving RPC provider could previously panic a node — and a node that crashes stops serving and syncing chunks, drops its peers, and can't take part in a redistribution round. The team added bounds and validity checks across manifest decoding, file assembly, chunk storage, and chain revert data, fixed several nil-pointer and data-race issues, and wrapped background workers in panic recovery so a single bug no longer takes down a whole node. The release is backward compatible with v2.8.1 and needs no network-wide coordination; all operators are encouraged to upgrade promptly.
* Also in the release: tracing migrated from Jaeger/OpenTracing to OpenTelemetry (OTLP) — existing tracing configs must be repointed or they will silently export nothing; a new `--light-node-limit` option for the light node connection cap, previously fixed at 100; a pullsync rate metric for better visibility into historical syncing; addressbook pruning of stale peers; and tighter data-directory permissions (`0700`/`0600`), which may affect scripts reading the data dir as another user.
* [Release announcement](https://blog.ethswarm.org/foundation/2026/bee-2-8-2-release/)
* [Full changelog](https://github.com/ethersphere/bee/compare/v2.8.1...v2.8.2)


### Research Track

* Research continued with a focus on improving the redistribution game, working out the practical road map of upgrades after deep diving into ongoing exploration of fuzzy consensus driven by Reed-Solomon erasure coding as long-term perspective.
* Pubsub is a research and implementation priority as it will bring Swarm’s interactivity to a new level and make streaming features more robust. The work is heavily AI driven and going through some toothing-problems in cooperation with the Bee team.
* A smoother upgrade path as well as the homecoming concept are being deliberated in the light of the Gnosis decision to pioneer the Ethereum Economic Zone, with a view to prioritizing and safeguarding Swarm’s decentralization.
* Deletion, also in the light of GDPR compliance, is an on-going, paradoxical topic where one option is described in the DREAM paper recently published by ACM ([https://dl.acm.org/doi/10.1145/3805028](https://dl.acm.org/doi/10.1145/3805028)), another, slot re-use, recently presented internally in the context of storage cost control.
* Conceptual correctness of core features are being investigated throughout to make sure that bug reports are met with responses of appropriate depth.
* A major announcement is forthcoming around a concept being kicked-off that will add a hands-on, practical face to the Swarm Foundation’s work.


### JS Track

#### Apps

##### [Bee-JS](https://github.com/ethersphere/bee-js)

Released version 13.0.0, a breaking change which focuses on developer experience and modularization.

* All the methods available on the Bee class have been namespaced: bee.uploadData is now bee.data.upload, bee.getAllPostageBatch is now bee.stamp.getAll, and so on.
* The Swarm primitives have been extracted to [@ethersphere/core-sdk](https://www.npmjs.com/package/@ethersphere/core-sdk) - Bee-JS is a consumer of it, and as a result, its codebase is now focused on being an HTTP client to the Bee API, rather than fiddling with Swarm internals.
* Our [migration guide](https://bee-js.ethswarm.org/docs/migrating-to-v13/) provides a codemod script that allows a painless upgrade to the new version.

##### [Core SDK](https://github.com/ethersphere/core-sdk)

We have released the first versions of this new TypeScript library! The latest version is 0.1.1.

* It contains a rich set of primitives for the Swarm network: typed byte wrappers, content-addressed and single-owner chunks, the chunk splitter and joiner, the Mantaray manifest trie, Reed-Solomon erasure coding, encryption, and postage stamp signing.
* Use it to perform client-side work which was previously locked in Bee. No network connection is required for the methods available in Core SDK, and while we heavily use this project in Bee-JS, it is Swarm node and SDK agnostic to support our wide ecosystem.

##### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)

Released version 3.6.0, which adds support for new features released in Bee.

* Moved the reupload command from the pinning group to the root level, since it can be used with arbitrary hashes, not just pinned content.
* Added a new stamp rename command to re-label your postage batches anytime.
* Fixed an issue with the history list command, where it didn’t strip ANSI colors when piped to other commands
* Fixed an issue where it was not possible to turn off erasure coding when the remote endpoint set a default value


### Ecosystem

#### Solar Punk

* [Swarm Desktop v0.55.2](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.55.2) is out, moving the bundled Bee node to v2.8.2.
* Work on the next version of the File Manager moved from design into the core library: file info and drive listing were reworked onto mantaray structures, folder handling and move operations were added to the File Manager interface, and versioning went into testing. Integration of SwarmID into the file management library and dashboard also began.
* On the AI side, the Swarm MCP server was updated to the [2025-11-25 MCP specification](https://modelcontextprotocol.io/docs/2025-11-25/getting-started/intro) and released as an [updated npm package](https://www.npmjs.com/package/swarm-mcp). Work also started on the x402 payment splitting contracts for Data-Enriched AI Marketplaces, where access to catalogued data is granted on payment.
* On the video streaming side, we supported streaming the Swarm Community Call live over Swarm — that stream and future ones are available at [streamoverswarm.eth.limo](https://streamoverswarm.eth.limo/). We also looked into how video segments can better fit Swarm's chunk structure to make retrieval more efficient.


### DevRel

#### Documentation

* [Updated full node hardware requirements](https://github.com/ethersphere/bee-docs/pull/835)

#### Content

* [Swarm Community Call, 27 August – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-27-august-recap/)
* [Bee Version 2.8.2 Release Announcement](https://blog.ethswarm.org/foundation/2026/bee-2-8-2-release/)
* [State of the Network: July 2026](https://blog.ethswarm.org/foundation/2026/swarm-state-of-the-network-july-2026/)
* [Swarm Community Call, 30 July – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-30-july-recap/)


### Events

##### **Swarm Community Call – 27 August**

For the first time, the **[Swarm Community Call](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/b882a334-7146-4daa-a3ec-99b3f8be02e8) was streamed over Swarm itself**. The public stream ran alongside the usual X and YouTube broadcasts, while behind the scenes the team successfully opened the same stream through a Swarm node running directly in the browser – a milestone after months of work on decentralized multimedia streaming.

The call moved through the usual development layers: Elad covered the security-focused **[Bee 2.8.2 release](https://blog.ethswarm.org/foundation/2026/bee-2-8-2-release/)** and ongoing work to harden the network, while Áron introduced **[Etherchunk](https://github.com/Cafe137/etherchunk)**, an experiment that tackles a deceptively ordinary problem for immutable storage: how to let users “delete” files by reclaiming the postage-batch capacity they occupy. From securing the network to making storage more manageable and finally using Swarm for a live broadcast, August’s call put several pieces of the infrastructure into practice at once.

You are welcome to watch the full event [recording here](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/b882a334-7146-4daa-a3ec-99b3f8be02e8).


### Upcoming events

##### **Swarm Community Call – 24 September**

The next Swarm Community Call will take place on **[Thursday, 24 September,](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/9bfaad4f-5bf4-4c2b-a402-23acd36e8fbc)** as usual on the last Thursday of the month, at 17:00 CEST – [broadcast on the Swarm Foundation’s X, YouTube and the Swarm network itself](https://scc.swarm.bzz.link/).


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
