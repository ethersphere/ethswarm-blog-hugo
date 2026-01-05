+++
banner = "/uploads/DevUpdate-1225.png"
images = [ "/uploads/DevUpdate-1225.png" ]
categories = [ "Development updates" ]
date = 2026-01-05T00:00:00.000Z
description = "December closed out a focused month of release readiness and ecosystem momentum across Swarm."
references_and_footnotes = [ ]
title = "Monthly Development Update – December 2025"
_template = "post"
+++


December closed out a focused month of release readiness and ecosystem momentum across Swarm. The Bee team concentrated on final testing and resolving outstanding issues for the 2.7 release, while also improving backward compatibility for feeds and expanding integration test coverage. In parallel, the Research track deepened discussions on network performance and scalability ahead of the pull-sync SWIP and continued shaping early ideas around the economic roadmap and staking tokenomics. 

On the JS and ecosystem side, we shipped meaningful Beeport improvements, advanced key Solar Punk initiatives across AI, file management, identity, and mobile node research, and closed the month with the special Solstice edition of the [Swarm Community Call](https://x.com/i/broadcasts/1ZkJzZdLAAdJv). The event helped align the community around stability, predictability, and clear priorities heading into 2026.

In December, the Swarm Foundation also published its [Strategic Focus Framework for 2026](https://blog.ethswarm.org/foundation/2025/swarm-strategic-focus-framework-2026/), outlining how the project is approaching the year ahead in terms of direction and priorities.


### Bee Track 
* The Bee team focused fully on preparation for the 2.7 release, continuing testing of the release items and resolving remaining issues related to both the features and the testing environments.
* Work also progressed on making the feeds implementation solution backward compatible, alongside the initial development of a dedicated testing plan.
* In parallel, the team continued to strengthen test coverage by expanding integration testing.


### Research Track 
* The team held in-depth discussions on network bottlenecks related to node performance and scalability. These insights will inform the upcoming pull-sync SWIP.
* In addition, early conversations continued around the economic roadmap and Swarm’s staking tokenomics, following ideas raised during the November community call. 


### JS Track
##### [Multichain Lilbrary](https://github.com/ethersphere/multichain-library) 
* Fixed a package.json configuration issue to allow the library to be used in CommonJS environments.


##### [Beeport](https://beeport.ethswarm.org)
* A new version of Beeport was released, delivering several fixes and usability improvements:
    * Postage batches now re-synchronize their remaining duration from blockchain data when the page loads, preventing desynchronization when storage prices change rapidly due to the price oracle.
    * ENS links generated through the built-in ENS integration are now clickable.
    * Automatic retries were added when setting the content hash for an ENS domain.
    * Storage duration values now include clearer messaging to indicate that they are approximate and may change.


### Ecosystem 

#### Solar Punk 
* **Swarm AI Agent:** Progress continued on the ElizaOS agent utilizing the Swarm MCP. Plans are in place to publish this as a usable agent, with code and documentation to be released publicly.
* **File Manager & ACT:** The File Manager release candidate is undergoing final refinements and QA evaluation. In parallel, preparations for adding ACT are underway, with finalized user flows and technical specifications ready to support implementation.
* **Identity Management:** Guidance is being provided to the Snaha team to support their work on the Identity Management POC, which is steadily nearing completion.
* **Mobile Research:** Research has begun on transitioning the Mobile Node from a POC to an MVP, enabling Bee nodes to run on mobile devices and integrate with mobile apps.


### DevRel 

#### Documentation
* Two new guides were added to the [Building on Swarm section](https://docs.ethswarm.org/docs/develop/introduction#building-on-swarm) of the [Develop on Swarm page](https://docs.ethswarm.org/docs/develop/introduction/):
    * Managing Files with Manifests
    * Website Routing on Swarm

#### Content 
* [Swarm Strategic Focus Framework (2026)](https://blog.ethswarm.org/foundation/2025/swarm-strategic-focus-framework-2026/)
* [State of the Network: November 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-november-2025/)
* [Swarm Community Call, 27 November – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-november-recap/)
* [Monthly Development Update – November 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-november-2025/)


### Events 
##### **Solstice Edition Swarm Community Call – 21 December**

The Solstice Swarm Community Call brought the ecosystem together to reflect on six months of foundational progress and set direction for the year ahead. Speakers highlighted a continued prioritization of a more stable and predictable network, alongside ongoing client evolution, with a focus on community-led in-browser nodes. 

The team showcased major usability improvements, including Beeport as a no-node on-ramp, enhancements to the Desktop App with file management and Drive workflows, and a proof-of-concept identity layer built around portable personas and session keys. The call also demonstrated real momentum in decentralised streaming, AI readiness via MCP integrations, data provenance tooling, and an IPFS-to-Swarm bridge. In addition, the team committed to publishing a clearer tokenomics roadmap in Q1.

You are welcome to watch the full event [recording here](https://x.com/i/broadcasts/1ZkJzZdLAAdJv). 


### Upcoming events
##### **Swarm Community Call – 29 January**

In January, we return with the **standard last-Thursday-of-the-month Community Call** broadcast on X. **Join us on 29 January** as we kick off 2026 at full speed. [Add it to your calendar](https://www.addevent.com/event/dllyvt0cfhqn)!


### People & Culture team
If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!



