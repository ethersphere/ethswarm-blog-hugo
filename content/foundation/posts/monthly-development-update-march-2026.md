+++
banner = "/uploads/dev-update0326.jpg"
images = [ "/uploads/dev-update0326.jpg" ]
categories = [ "Development updates" ]
date = 2026-04-05T00:00:00.000Z
description = "March focused on stabilizing the foundations laid in the 2.7 cycle while starting to reshape how protocol work gets done. Bee v2.7.1..."
references_and_footnotes = [ ]
title = "Monthly Development Update – March 2026"
_template = "post"
+++


March focused on stabilizing the foundations laid in the 2.7 cycle while starting to reshape how protocol work gets done. **Bee v2.7.1** landed as a stable release, incorporating fixes validated on mainnet, while research closed the design phase for **withdrawable stake** and began formalizing a **Protocol Team** to tighten the path from research priorities to shipped changes.

On the tooling side, **Beeport v1.1.8** addressed a series of stability issues — from JSON-RPC rate limiting to cross-chain relay failures — with improved monitoring and dedicated provider endpoints. The **Swarm MCP plugin for HashGraph Online Desktop** was merged, and the MCP server itself is being upgraded to the latest standard specification.

In the ecosystem, Solar Punk wrapped up the **mobile light-node PoC** for Android (featured at the March Community Call), advanced the **Swarm Desktop 0.52.2 RC** with Bee 2.7.1, and shipped improvements to the video streaming service used by partners like CryptoMondays. On the DevRel front, new documentation landed for **dynamic content and feeds**, including a complete multi-author blog architecture guide.

Swarm Foundation also launched a **[workshop series](https://workshops.swarm.bzz.link/)** — the first session, Intro to Swarm, aired on 25 March, with three more sessions planned through May. The next **Swarm Community Call** is on **[30 April](https://scc.swarm.bzz.link/)**.


### [Bee Track](https://github.com/ethersphere/bee) 
* The stable release of Bee v2.7.1 is now available, incorporating fixes and improvements that have been validated on the mainnet. The Bee team is continuing to work on further stability enhancements.


### Research Track 
* Research work in March continued to concentrate on the same core priorities: tokenomics and incentive redesign, and protocol-level stability. The team is moving toward the first concrete milestone of the tokenomics reshape plan — withdrawable stake — following the closure of the design work (including withdrawal flow/queue mechanics).
* On the protocol side, research is advancing work around neighborhood balancing and topology management (to keep the network stable under change), alongside continued focus on durability and retrievability mechanics, including exploration of erasure coding as a stronger default while reducing reliance on higher replication.
* In parallel, March brought a process-level shift: the work around protocol and tokenomics is being tightened through the formation of a Protocol Team, intended to improve how research priorities translate into shipped changes (clearer scope, better coordination with Bee/engineering, and a more legible SWIP path). The practical intent is to make protocol evolution more agile, more visible, and more usable — without sliding into slow, opaque cycles.


### JS Track 


#### Apps
##### Beeport
Beeport version 1.1.8 has been released to production to address the previous stability issues. The observed issues fall into three categories:
* **JSON-RPC issues:** There were issues caused by public JSON-RPCs becoming more strict with their rate limiting. A dedicated provider is now used as the primary endpoint, with two fallback endpoints per chain added to mitigate these issues. Blockchain requests per session have also been reduced to save on metered requests.
* **Infrastructure issues:** Beeport uses a dedicated Bee node and a small proxy service that sits between the end user and the Bee node. Monitoring and alerting have been significantly improved to detect if any of the aforementioned services are impacted by downtime so the team can react as quickly as possible.
* **Relay issues:** Multichain capabilities are currently provided by the Relay network for cross-chain swaps. Recent issues have shown that Relay is intermittently failing to find a route to acquire BZZ, even though there are valid paths with sufficient liquidity. This issue could be circumvented with retry logic, but the team is investigating further to come up with a proper, long-term solution.


### Ecosystem 
#### Solar Punk 
* Swarm Desktop 0.52.2 RC under QA. It comes with Bee 2.7.1 and optimization bugfixes.
* [Swarm MCP](https://github.com/ethersphere/swarm-mcp) Plugin for [HashGraph Online Desktop](https://github.com/hashgraph-online/desktop) has been [merged](https://github.com/hashgraph-online/desktop/pull/3).
* Swarm MCP upgrade to the [latest standard](https://modelcontextprotocol.io/specification/2025-11-25) is under the final round of QA.
* For the video streaming solution (e.g. used by [CryptoMondays](https://cryptomondays.beebridge.buzz/)), a new “batch top-up” logic has been added that enables partners to extend the lifetime of their service in a much easier way.
* A new approach for video streaming is under conceptual development, and in parallel, a scalability testing protocol is being planned.
* A stamp expiration watcher service has been created that anyone can host for themselves, so that it becomes more difficult to forget about your stamps.
* [Mobile Node PoC](https://github.com/Solar-Punk-Ltd/swarm-mobile-android) has been wrapped up, and also featured on the latest SCC. Looking forward to the community building on top of it!



### DevRel 
#### Documentation 



* Dynamic content guides were published covering Swarm feeds and mutable content, including practical examples and a complete “simple blog” walkthrough ([guide](https://docs.ethswarm.org/docs/develop/dynamic-content), [#780](https://github.com/ethersphere/bee-docs/pull/780), [#781](https://github.com/ethersphere/bee-docs/pull/781)).
* A multi-author blog architecture guide was added, showing end-to-end how to build a decentralized multi-author blog using linked feeds ([guide](https://docs.ethswarm.org/docs/develop/multi-author-blog), [#781](https://github.com/ethersphere/bee-docs/pull/781)).
* Example projects for dynamic content were added and refined, including scripts and a complete “simple blog” project to support the guides and ensure correct, reliable feed usage ([commit](https://github.com/ethersphere/examples/commit/8131cfc4f0e868a724e3ac5de31bbdb02a0878ec), [commit](https://github.com/ethersphere/examples/commit/cb1ae4c5380fc75533b3bfdced8a69fa28a82e3a), [PR #1](https://github.com/ethersphere/examples/pull/1)).
* Postage stamp calculators and related documentation were updated to correct effective volume calculations and add support for encryption and erasure coding ([#782](https://github.com/ethersphere/bee-docs/pull/782)).
* Docs-wide improvements and fixes were made, including adding descriptions, standardizing linking, and applying minor corrections across the documentation ([#779](https://github.com/ethersphere/bee-docs/pull/779), [#786](https://github.com/ethersphere/bee-docs/pull/786)).


#### Content 
* [Swarm Community Call, 26 February – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-26-february-recap/)
* [Bee Version 2.7.1 Release Announcement](https://blog.ethswarm.org/foundation/2026/bee-2-7-1-release/)
* [State of the Network: February 2026](https://blog.ethswarm.org/foundation/2026/state-of-the-network-february-2026/)


### Events 
##### **Swarm Community Call – 26 March**
[March’s Swarm Community Call](https://www.youtube.com/live/bRkYQfXbawA) widened the lens beyond pure client updates: the call opened with an introduction to Koss as Swarm’s new Community Lead, shared a short preview of **upcoming workshops and conference presence**, then moved into the **Bee 2.7.1** patch release debrief, a first public look at the **new Protocol Team** formation, and a practical Community Talk demoing a **mobile light-node PoC** on Android.

You are welcome to watch the full event [recording here](https://www.youtube.com/live/bRkYQfXbawA).



##### **[Swarm Workshops](https://workshops.swarm.bzz.link/)**

Introducing: **a new series of practical, no-fluff [workshops](https://workshops.swarm.bzz.link/).** First one aired on 25 March — **Intro to Swarm**. This workshop explained in simple terms the basics of how Swarm works as a decentralized network: P2P topology, chunking, neighborhoods, proximity, postage, and incentives. If Swarm ever sounded interesting but too complicated, [start here](https://youtube.com/live/lkrNZJFCmOc) — and share it with anyone who should finally get what this stack is actually about.

Planned next are:
* **Decentralizing your agent with Swarm MCP** (8 April)
* **How to decentralize any frontend** (5 May)
* **Decentralized streaming** (12 May) \


[Read more and sign up](https://workshops.swarm.bzz.link/).


### Upcoming events

##### **Swarm Community Call – 30 April**

The next Swarm Community Call will take place on **[Thursday, 30 April](https://scc.swarm.bzz.link/)**, as usual on the last Thursday of the month, at 17:00 CET – [broadcast on the Swarm Foundation’s X](https://scc.swarm.bzz.link/).


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!

