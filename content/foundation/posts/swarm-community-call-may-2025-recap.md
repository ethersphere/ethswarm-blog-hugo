+++
banner = "/uploads/SCC-recap-0525.png"
images = [ "/uploads/SCC-recap-0525.png" ]
categories = [ "Events" ]
date = 2025-06-06T00:00:00.000Z
description = "May’s Swarm Community Call was somewhat special, as the team tuned in live from EthPrague. From a simplified node experience to new client implementations and discussions on token utility, May’s call highlighted progress toward making Swarm more accessible, performant, and integrated with real-world use cases."
references_and_footnotes = [ ]
title = "Swarm Community Call, 19 May – Recap"
_template = "post"
+++

[May’s Swarm Community Call](https://x.com/i/broadcasts/1ynJOldpDgwxR) was somewhat special, as the team tuned in live from EthPrague. From a simplified node experience to new client implementations and discussions on token utility, May’s call highlighted progress toward making Swarm more accessible, performant, and integrated with real-world use cases.


## Core development: Faster nodes, broader access

Niki Papadatou opened the Call with news of a major improvement: a **dramatically faster node spin-up process**, now enabled by pre-synced snapshot loading. This eliminates the need for batch syncing in real-time and significantly lowers the time barrier for both new and seasoned node operators.

Niki also reminded the community that a **SWIP** is open for feedback **on improving the pullsync protocol**—a core component of Swarm’s data distribution layer.

Lastly, Niki touched upon the later-discussed topic of in-browser client development. The Bee team is working hard to support and facilitate this effort by implementing all the necessary changes at the protocol level, making it a priority in the upcoming weeks as well. 


## Multichain app enters beta

Callum Toner followed with broader updates on Swarm’s research and development direction. The emphasis is clear: **usability, performance, and competitiveness**. He announced that the **Multichain app** is entering its first production-ready beta, aimed at making BZZ easier to use across different chains.

He also touched on performance improvements underway in the protocol layer, including changes to erasure codes and planned enhancements to upload/download efficiency. The research team continues to explore how to make Swarm a compelling network not only for developers, but for enterprise-grade use.


## Live from EthPrague: Hackathons, talks, and BChan

Next up was Antonio,** **bringing the atmosphere and highlights straight from the ground. The Swarm team was present in force—from hosting a dedicated space in the workshop area, engaging with developers and hacktivists, connecting with value-aligned groups and initiatives, to answering technical questions from curious hackers throughout the event.

**Viktor Trón** delivered **a talk on incentive design** in decentralised systems, exploring how aligned economic models underpin network sustainability. 

Alongside this, the team introduced a new prototype called “bchan”,a fully decentralised, anonymous forum hosted on Swarm. Originally accessible only through local nodes, bchan is now also available through the gateway at[ bchan.bzz.limo](https://bchan.bzz.limo), allowing users to create or reply to threads directly in the browser—no batch or wallet required. \
 \
Swarm also partnered with **Web3Privacy Now**, supporting a side event on the role of privacy in decentralised infrastructure. It was a full-circle moment: bringing together builders, researchers, and privacy advocates to envision a more sovereign, censorship-resistant Web3. **Viktor Trón gave another talk** there, this time on [“Signal on Swarm”](https://swarmstream.eth.limo/#/watch/video/77dcb8bea23381b380b6c1017c68e87b1b1badec/0c1fa446-6268-4b98-818d-69e5e67a9c3e), a concept that was also recently featured in an [article published under Coinmonks on Medium](https://medium.com/coinmonks/signal-on-swarm-798ee0ba0346).  


### **Community Talk: The Clients are Coming**

Swarm’s client ecosystem is expanding. Pavel, a front-end developer at ENS, is building a **WebAssembly version of Bee** that runs in the browser. His client already supports peer connections and API calls, with plans to reduce bundle size and enable uploads/downloads soon.

Meanwhile, mfw78 presented his work on a **Rust-based client**, originally inspired by the Swarm Wikipedia bounty. This lightweight client focuses on high performance and portability—ideal for embedded systems and alternative architectures. His contributions include protocol-level optimisations and several submitted SWIPs.

Finally, Aata from Uncloud/Shtuka Research joined the discussion to explore possibilities for compiling Swarm clients down to UEFI modules – moving Swarm nodes closer to the firmware layer for ultra-minimal deployments.

Thanks to everyone who joined the May call! If you missed it, you can still[ watch the recording here](https://x.com/i/broadcasts/1ynJOldpDgwxR), and we’ll see you again in [June](https://www.addevent.com/event/vx25771569)!

Let’s keep building Swarm together! 🐝
