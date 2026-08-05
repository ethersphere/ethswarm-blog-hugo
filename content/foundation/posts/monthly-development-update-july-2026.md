+++
banner = "/uploads/devupdate0726.png"
images = [ "/uploads/devupdate0726.png" ]
categories = [ "Development updates" ]
date = 2026-08-05T00:00:00.000Z
description = "July saw Swarm development return to its regular pace after the Bee v2.8.1 stabilization release, with work advancing across the protocol, research, developer tooling, applications, and the wider ecosystem."
references_and_footnotes = [ ]
title = "Monthly Development Update – July 2026"
_template = "post"
+++

July saw Swarm development return to its regular pace after the Bee v2.8.1 stabilization release, with work advancing across the protocol, research, developer tooling, applications, and the wider ecosystem. 

The Bee and Research teams focused on pullsync, reward distribution, proof of storage, erasure coding, radius behavior, and new forms of inter-node communication, while the JavaScript track moved ahead with a major Bee-JS restructuring and the extraction of Swarm’s core primitives into a reusable TypeScript library. 

Across the ecosystem, Solar Punk shipped updates to Swarm Desktop and Bee Dashboard, progressed ACT-based file sharing, MCP tooling, and streaming performance work, while DevRel expanded documentation and released new resources for developers and AI agents. 

Together, these efforts continued to strengthen the network’s foundations while making Swarm easier to build on, use, and extend.

### [Bee Track](https://github.com/ethersphere/bee) 

With Bee v2.8.1 behind it, the Bee team turned its attention back to ongoing protocol development. Current work includes improvements to pullsync, experiments around erasure coding, and simulations exploring radius decrease behavior. These efforts continue to strengthen the networking layer while preparing the ground for future protocol changes. 

### Research Track  

* Research is currently focused on improving the robustness of reward distribution for data storage and proof-of-storage mechanisms. One area of work explores a new approach to distributing newly joined nodes across neighborhoods.  
* Research into pullsync continues, with a particular focus on inter-node data balancing under fringe cases of network congestion.  
* The Research and Bee teams are also collaborating on a new approach to inter-node communication that is expected to support future streaming improvements.  
* Work has begun on exploring Swarm’s proposed homecoming to Ethereum, with particular attention to the emerging Ethereum Economic Zone. One objective is to further strengthen the network’s robustness through the migration.  
* The team is also refining the SWIP process, with a special focus on making internal collaboration more effective in AI-assisted workflows.

### JS Track 

#### Apps

##### [Bee-JS](https://github.com/ethersphere/bee-js)

Released versions 12.3.0 and 12.3.1 (latest).

* Added a function for retrieving a specific global batch.  
* Added minimumValidityBlocks to the chainstate response.  
* Added support for the postage batch label update endpoint.  
* Fixed nanosecond timestamps in the Stamper class.

Bee-JS is currently undergoing a [significant restructuring](https://github.com/ethersphere/bee-js/pull/1219). We are namespacing the methods, meaning the roughly 120 methods previously cluttered on the Bee class will now be grouped into logical categories, improving readability and the developer experience.

For example, the standalone methods buyStorage and extendStorage will become storage.buy and storage.extend, along with all related functionality collected under the storage namespace.

Since this is a breaking change, we are providing codemod scripts that help automatically migrate your existing codebase to the new version once it is released.

##### [Swarm Core](https://github.com/ethersphere/swarm-core)

Work has begun on extracting Swarm’s core primitives into a dedicated TypeScript core library. Functions and definitions for Keccak hashing, ECDSA, content-addressed and single-owner chunks, splitting and joining, manifests, stamping, erasure coding, and encryption will all live in this new library.

This cleanup is long overdue. Bee-JS has gradually grown to include both Swarm’s core primitives and the Bee API SDK within a single package. This new structure will keep Bee-JS tidy while introducing a reusable core library for client-side applications and tools that are independent of any particular Swarm client.

### Ecosystem 

#### Solar Punk 

* Swarm Desktop and Bee Dashboard received a broad round of fixes across both apps, clearing a backlog of long-standing issues related to wallet handling, postage stamp purchases, transaction reliability, logging, and the node map. [Swarm Desktop v0.55.1](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.55.1) and [Bee Dashboard v0.36.2](https://github.com/ethersphere/bee-dashboard/releases/tag/v0.36.2) are now available.
* Design work started on the next iteration of the File Manager, covering access control and grantee management, sharing at every node level, and folder handling with version tracking — laying the groundwork for integrating ACT-based sharing into the file management UI.
* On the AI side, the team reviewed the ACT tooling in the Swarm MCP server and worked through recent MCP standard updates, continuing the Data-enriched AI Marketplaces effort alongside fixes to the MCP server itself.
* Streaming work focused on performance measurement, refining how quality of experience is measured, improving test reporting and analysis, and investigating viewer node connection issues — while UX and architectural design progressed for the future streaming roadmap.


#### Miscellaneous

* The Swarm Foundation has published a list of popular open-source web apps on Swarm, available at bzz://apps.ontheswarm.eth/ through the [Freedom browser](https://freedombrowser.eth.limo/) or your preferred Swarm gateway, at Swarm hash [78e79fe7986d6ea3ca0d4805b57ce4106163011a49a1f52124071d4ac0f60243](https://bzz.limo/bzz/78e79fe7986d6ea3ca0d4805b57ce4106163011a49a1f52124071d4ac0f60243). This is a proof of concept: replacing the centralized host with Swarm makes the same applications decentralized and tamper-evident. 

### DevRel 

#### Documentation 

The [Bee documentation](https://docs.ethswarm.org/) has been updated to reflect the latest improvements in Bee v2.8.1.

* The [Bee OpenAPI specification](https://docs.ethswarm.org/api/) has been synchronized with the v2.8.1 release.
* Swarm Foundation has released [AI agent skills](https://docs.ethswarm.org/docs/develop/tools-and-features/ai-agent-skills/), enabling developers to use AI to install a node, buy postage stamps, upload data, and scaffold dApps.
* A new [Swarm cheatsheet](https://docs.ethswarm.org/docs/develop/tools-and-features/cheatsheets/) is available: a two-page technical reference for building on the network. 

#### Content 

* [Monthly Development Update \- June 2026](https://blog.ethswarm.org/foundation/2026/monthly-development-update-june-2026/)  
* [State of the Network: June 2026](https://blog.ethswarm.org/foundation/2026/swarm-state-of-the-network-june-2026/)  
* [Swarm Community Call, 30 July \- Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-30-july-recap/)

### Events 

##### **Swarm Community Call – 30 July**

[July’s Swarm Community Call](https://www.youtube.com/live/5oWG03EtQN4) covered the Bee v2.8.1 release, current development and research updates, and welcomed mfw78 for a Community Talk on Vertex, an independent Rust implementation of a Swarm node. The presentation explored the project's architecture, the importance of client diversity, and the long-term goal of making Swarm nodes easier to deploy on everyday hardware, helping unlock residential participation in the network.

You are welcome to watch the full event [recording here](https://www.youtube.com/live/5oWG03EtQN4).

### Upcoming events 

##### **Swarm Community Call – 27 August**

The next Swarm Community Call will take place on [**Thursday, 27 August,**](https://scc.swarm.bzz.link/) as usual on the last Thursday of the month, at 17:00 CEST – [broadcast on the Swarm Foundation’s X](https://scc.swarm.bzz.link/).

### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org\!
