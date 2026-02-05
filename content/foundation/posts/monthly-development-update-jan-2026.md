+++
banner = "/uploads/DevUpate022026.png"
images = [ "/uploads/DevUpate022026.png" ]
categories = [ "Development updates" ]
date = 2026-02-05T00:00:00.000Z
description = "This month’s update covers progress across the Bee, Research, and JS tracks. On the Bee side, the 2.7 implementation is complete, key issues found during testing have been fixed, and final validation is now underway ahead of rollout."
references_and_footnotes = [ ]
title = "Monthly Development Update – January 2026"
_template = "post"
+++


This month’s update covers progress across the Bee, Research, and JS tracks. On the Bee side, the 2.7 implementation is complete, key issues found during testing have been fixed, and final validation is now underway ahead of rollout. In parallel, planning has started for 2.8 and the broader 2026 roadmap, with a clear emphasis on stability and performance. Research advanced several core protocol and economic-layer topics, including Pullsync changes moving toward development, an ongoing price oracle review, and withdrawable stake preparations. Meanwhile the JS track shipped multiple Bee-JS releases with meaningful DX improvements, alongside steady momentum on the multichain funding widget and gateway proxy upgrades.


### Bee Track 
* The Bee team completed the implementation phase for the 2.7 release. During the testing period, several issues were identified and prioritized.
* The team focused on resolving these issues, with fixes now fully integrated. Final validation rounds are currently underway to ensure a smooth rollout.
* In parallel, the team has initiated roadmap planning for Release 2.8 and 2026. This upcoming cycle will focus on core stability and performance improvements to further optimize the network.


### Research Track 
* The Pullsync protocol changes are written up and agreed and will move to the development stage next. This SWIP’s effort will address added network stability and sample accuracy. 
* The price oracle is also under heavy review, and a list of subtle changes is being worked through for approvals, including potentially having storage price stasis through Beeport - nothing has been decided yet. 
* Withdrawable stake is approved for the next release, and the last element of the implementation is the queue mechanism for stake entry and withdrawal. 
* Some minor testnet activity is investigating the incentive game consensus mechanism’s efficiency over time and how it relates to other chains. 


### JS Track 

##### [Bee-JS](https://github.com/ethersphere/bee-js)
We have released 4 new minor versions since the beginning of the year. Update to 10.4.0 to receive all the latest changes.

* Improved the developer experience of working with Content Addressed Chunks and Single Owner Chunks:
    * Use the toSingleOwnerChunk method on a Chunk for easy conversion.
    * Create chunks with the makeContentAddressedChunk and makeSingleOwnerChunk methods from scratch, or unmarshalContentAddressedChunk and unmarshalSingleOwnerChunk from existing data.
    * Given an identifier and an address, grab the address with calculateSingleOwnerChunkAddress.
* Fixed a calculation bug in extendStorage that led to incorrect top-ups.
* Added access control (ACT) support in the MantarayNode class.
* Added two new Utils functions:
    * ​​mapPostageBatch and unmapPostageBatch to convert between the raw Postage Batch returned by the Bee API, and the enriched object used by Bee-JS.
* Updated TypeScript to v5.9.3 to stay up to date with compiler checks.


##### [Multichain Lilbrary](https://github.com/ethersphere/multichain-library) 
* We have started the QA phase for the multichain funding widget and are looking at an initial release in February.


##### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* All the dependencies have been updated to recent versions, including a big jump from Bee-JS version 7.0 to 10.4, and TypeScript 4.8 to 5.9. This helps get rid of package vulnerabilities and provides developers better compatibility with modern tooling.


### Ecosystem 
#### Solar Punk 
* Swarm AI Agent: QA for the MCP MVP has been completed. 
* The Hashgraph plugin desktop integration is awaiting review and acceptance by HashGraph. 
* MVP of ElizaOS MCP integration is also complete.
* File Manager: The Release Candidate is currently under testing
* Mobile Node MVP: Development has progressed from research into the active implementation phase with Android development being prioritised.

#### Datafund 
* Provenance Fellowship: Strategic pivot toward the agent economy - provenance infrastructure is now positioned as audit trails for autonomous AI agents: [MCP Alpha is available](https://github.com/datafund/swarm_provenance_mcp).


### DevRel 
#### Documentation 
* The [gateway article](https://docs.ethswarm.org/docs/develop/tools-and-features/gateway-proxy) from the Tools and Features section was updated to reflect the upcoming deprecation of the [Gateway Proxy](https://github.com/ethersphere/gateway-proxy) tool in favor of the new [Swarm Gateway](https://github.com/ethersphere/swarm-gateway) tool.
* A new article was added to the [Building on Swarm section](https://docs.ethswarm.org/docs/develop/introduction) with [step-by-step instructions](https://docs.ethswarm.org/docs/develop/gateway-proxy/) for setting up a public gateway using the Swarm Gateway tool.


#### Content 
* [State of the Network: December 2025](https://blog.ethswarm.org/foundation/2026/state-of-the-network-december-2025/)
* [Swarm Community Call December - Solstice Edition – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-december-solstice-edition-recap/)
* [Monthly Development Update – December 2025](https://blog.ethswarm.org/foundation/2026/monthly-development-update-december-2025/)


### Events 
##### **Swarm Community Call – 29 January**

The first [Swarm Community Call ](https://x.com/i/broadcasts/1vOxwdqaeAPKB)of 2026 focused on what’s shipping next in Bee 2.7, what the Research track is stabilizing at the protocol level, and two concrete ecosystem integrations. The Swarm Plugin for Hedera/Hashgraph and the pending Hashgraph desktop integration were demoed. After that, a community member Octal presented an **x402 + Swarm** hackathon project enabling USDC-paid uploads that return instant shareable links – pointing toward smoother “pay → store → share” user experiences for apps and agents.

You are welcome to watch the full event [recording here](https://x.com/i/broadcasts/1vOxwdqaeAPKB). 


### Upcoming events
##### **Swarm Community Call – 26 February**

In January, we return with the **standard last-Thursday-of-the-month Community Call **broadcast on X. **Join us on 26 February** – [add it to your calendar](https://www.addevent.com/event/wng3nl5ssfk3)!


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!


