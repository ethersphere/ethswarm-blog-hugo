+++
banner = "/uploads/DevUpdate0425.png"
images = [ "/uploads/DevUpdate0425.png" ]
categories = [ "Development updates" ]
date = 2025-05-05T00:01:00.000Z
description = "In April 2025, the Bee Track focused on deeper network insight and faster node onboarding ahead of the 2.6 release. Swarmscan is now richer with new metrics that track upload/download performance, retrieval efficiency, and node responsiveness—giving a clearer picture of how the network behaves in real time."
references_and_footnotes = [ ]
title = "Monthly Development Update – April 2025"
_template = "post"
+++


In April 2025, the Bee Track focused on deeper network insight and faster node onboarding ahead of the 2.6 release. Swarmscan is now richer with new metrics that track upload/download performance, retrieval efficiency, and node responsiveness—giving a clearer picture of how the network behaves in real time. Meanwhile, new nodes now sync faster, handle postage more efficiently, and benefit from cleaner, more direct documentation.

The Research Track launched the Multichain App in beta: you can now pay for storage with any EVM-compatible token, no setup required. Bridging and swapping happen automatically in the background. The team also introduced DREAM (Deletion by Revoking Encryption Access for Mutable resources), a new approach to Web3 data deletion that revokes encryption access rather than attempting full erasure.

The JS Track shipped Bee-JS 9.1.0 and 9.1.1 with security fixes, Sepolia support, and improved documentation. Swarm-CLI added a command for creating external postage batches, and the new Swarm Gateway project now uses SQL-based rule management and includes moderation tools for safer operation.

April’s Swarm Community Call covered all of this and more. You can [read the recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-march-recap/) or [watch the recording](https://x.com/i/broadcasts/1vOxwXQrXzgKB).


### Bee Track 

The Bee team is preparing for the 2.6 release, which brings improvements in two main areas:  
* Better visibility into how the network is performing, with several new data points to Swarmscan. This helps us better understand how nodes behave across the network, including upload/download performance, retrieval efficiency, and transaction responsiveness—making the network easier to observe and troubleshoot.
* A smoother, faster experience when spinning up a new node, including reduced sync and warm up times, optimized postage stamp handling on node spin-up, and clearer, straight-to-the-point documentation.

As always, release notes will be available just before launch.


### Research Track  

* Benchmarks are continuously collected and updated across Bee releases to monitor network performance.
* The Multichain App beta is live—users can pay for storage using any EVM-compatible wallet and token, with automatic bridging and swapping. No node setup or postage stamps needed. Try it: https://app.ethswarm.org/
* SWIPs are being reorganised and prioritised to align with upcoming development goals.
* Proposed updates to enhance network stability are under review.
* Introducing DREAM: Deletion in Decentralised Storage—Deletion by Revoking Encryption Access for Mutable resources, a design proposal tackling data deletion in Web3 by revoking access instead of removing data. \
    * Learn more: [https://blog.ethswarm.org/foundation/2025/swarm-dream/](https://blog.ethswarm.org/foundation/2025/swarm-dream/)
    * Read the paper: [https://papers.ethswarm.org/p/dream/](https://papers.ethswarm.org/p/dream/)
    * Contribute: https://www.overleaf.com/4677157878yvwrxwnzkbdt#df6abe


### JS Track 

[Bee-JS](https://github.com/ethersphere/swarm-cli)
* The docs website at [https://bee-js.ethswarm.org/](https://bee-js.ethswarm.org/) received a massive overhaul and now contains up-to-date information for the latest Bee-JS versions.
* Released versions 9.1.0 and 9.1.1:
    * Updated to the latest axios version to address a vulnerability 
    * Added a network option to the Bee constructor for Sepolia support
    * Fixed an edge case with MantarayNode fork overlapping


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Version 2.27.0 released, adding a “utility create-batch” command for creating external postage batches which can be used with client-side stamper implementations.


#### [Swarm Gateway](https://github.com/ethersphere/swarm-gateway)
* This is a new project forked from Gateway-Proxy
* Uses an SQL database for defining proxy rules and settings instead of the environment variables; changing values no longer require restarting the application
* Adds moderation pages for safer gateway operation, including content reporting and allowlist requests



### DevRel 

#### Documentation 
* The docs website at [https://bee-js.ethswarm.org/](https://bee-js.ethswarm.org/) received a massive overhaul and now contains up-to-date information for the latest Bee-JS versions.

#### Content 
* [Introducing DREAM: Deletion in Decentralised Storage](https://blog.ethswarm.org/foundation/2025/swarm-dream/)
* [Swarm Community Call, 27 March – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-march-recap/)
* [Monthly Development Update – February 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-february-2025/)
* [State of the Network: February 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-february-2025/)


### Events 
##### **Swarm Community Call – 24 April**

[April’s Swarm Community Call](https://x.com/i/broadcasts/1vOxwXQrXzgKB) brought major updates: Bee 2.6.0 is coming with faster node onboarding, improved postage handling, and clearer documentation. A new multichain app has been launched in beta—feedback desired! This app simplifies Swarm’s storage use across multiple EVM chains. The team will attend ETHPrague and ETHGlobal, while the Swarm network also joined Hivello to expand its DePIN platform and boost user accessibility.

You are welcome to read the recap [here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-24-april-recap/) or watch the [recording here](https://x.com/i/broadcasts/1vOxwXQrXzgKB). 


### Upcoming events


##### **Swarm Community Call – 29 May**

Swarm Community Calls are held on the last Thursday of every month on [Discord](https://discord.com/events/799027393297514537/1364915279917875252) and [X broadcast](https://x.com/i/broadcasts/1ynJOldpDgwxR) at 17.00 CET. The next call is on **29 May** - [add it to your calendar](https://www.addevent.com/event/rb25578762). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Prior to the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team:

Join the team shaping the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 

Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!