+++
banner = "/uploads/scc-recap1125.png"
images = [ "/uploads/scc-recap1125.png" ]
categories = [ "Events" ]
date = 2025-12-05T04:00:00.000Z
description = "After opening with core development updates, the November Swarm Community Call focused on the fresh impressions from Devconnect Buenos Aires and a deep dive into Swarmonomics."
references_and_footnotes = [ ]
title = "Swarm Community Call, 30 November – Recap" 
_template = "post"
+++

After opening with **core development updates**, the [November Swarm Community Call](https://x.com/i/broadcasts/1dRKZaRPabNxB) focused on the fresh impressions from **Devconnect Buenos Aires** and a deep dive into **Swarmonomics** – a research-backed look at Swarm’s tokenomics and incentive model.


## Bee v2.7: Release Candidate Live on Public Testnet

Niki opened the call by confirming that the latest **Bee v2.7 release candidate is now live on the public testnet**, with two outstanding upgrades:

* **Multi-underlay / relay address support** – improving node connectivity in complex environments.
* **AutoTLS** – enabling secure WebSocket connections, a key building block for a richer in-browser Swarm experience.


The team also upgraded core dependencies (including Golang and Bee’s P2P stack) and **significantly expanded the testing suite** with new latency, unit, and integration tests to harden v2.7 before release.

Niki flagged a backward-compatibility issue affecting legacy feed formats; potential mitigations are under review to minimise disruption for dApps. Node operators and integrators are encouraged to **test the RC on testnet and share feedback**, especially for browser-facing use cases.


## In Focus: Devconnect Recap

Dániel shared a recap of the team’s engagement and takeaways from **Devconnect in Buenos Aires**, where three major themes dominated the talks and presentations:
* **Privacy & trustlessness** – reinforced by Vitalik’s “trustless manifesto” and a strong narrative around *privacy by default* and *permissionless systems*, all closely aligned with Swarm’s values.
* **ZK / zero-knowledge technologies** – moving from theory toward mature tooling.
* **AI + crypto** – with the Ethereum ecosystem increasingly focused on the emerging **agentic economy**.


From Swarm’s perspective, **AI and privacy** formed the most relevant intersection: Swarm’s **MCP development**, **access control**, and role as a **trustless data and communication layer** position it well in the space in general, including within the agent-to-agent architectures.

Several partnerships and use cases were advanced during Devconnect week. Highlights include:
* Progress on **decentralised streaming** through a new collaboration with **CryptoMondays**, whose Swarm-based streaming site debuted live from the Solar Punk event. 
* On the AI and agents front, work has begun on a **Swarm plugin for a Hashgraph conversational agent desktop**, with a planned **MCP integration for ElizaOS** to follow. 
* In the DeSci space, Swarm is co-developing a **health data marketplace MVP** with an Estonian University partner, targeted for late 2026. 
* On the developer tooling side, a **Remix integration roadmap** will bring Swarm-based storage (and later, collaborative editing with access control) into the Remix desktop. 
* Discussions also continued with **Blobscan, Kleros, Gameforest**, and others regarding **large-scale data uploads** and **migration from IPFS** to Swarm.


## Community Talk: Swarmonomics – Reframing Tokenomics

The Community Talk segment featured Andrew from Shtuka Research, joined by Callum and Ramesh, presenting six months of work on **Swarmonomics** – a proposed direction for Swarm’s incentive design. The talk was explicitly framed as **personal research, not an official roadmap**, but it resonated strongly with the panel.

Andrew’s main proposals:
* **Scale staking**
    * Make staking **more attractive and simpler** by enabling withdrawals, reducing fragmentation across neighborhoods, and easing node DevOps so operators can run larger nodes without complex multi-wallet setups.
    * Over time, **separate capital from operations**, allowing BZZ holders to back professional node operators via delegation or pools.
* **Ditch the “utility token” narrative**
    * Move away from framing BZZ as a pure payment token and instead emphasize a clearer, more traditional narrative: **stake BZZ to share in network revenue**.
* **Freeze the price oracle & move to stablecoin fees**
    * In the current immature market, oracle-driven price increases can cause stamp lifetimes to end up shorter than users expect.
    * Andrew suggested temporarily **freezing the oracle**, **fixing storage prices in stablecoins**, and letting node operators earn fees directly in stablecoins. This would reduce user friction and give stakers a clearer value proposition.
* **Publish a transparent tokenomics roadmap**
    * Align core contributors on which changes to pursue, in what order, and communicate that roadmap clearly to the community and market.


Callum and Ramesh voiced broad agreement, particularly on the need to balance decentralisation with pragmatic decision-making, and to improve transparency around tokenomics decisions so the community can follow and engage with the process.


## Looking Ahead

The call closed with an invitation to continue discussion on Swarmonomics, Devconnect takeaways, and Bee v2.7 in [Swarm’s Discord](https://discord.gg/9EJTdUKa), particularly in #stage-chat, #bzz-tokenomics, and #research. You can [relisten the whole Call here](https://x.com/i/broadcasts/1dRKZaRPabNxB). 

There will be **no standard last-Thursday-of-the-month Community Call in December**. **Instead**, Swarm will host its traditional **[Solstice Special on 21 December](https://www.addevent.com/event/hmz6zmv067bl)**, marking the close of the year with a special edition Community Call.

Stay tuned and thank you to everyone who joined live, asked questions, and continues to help shape Swarm’s technical and economic future.
