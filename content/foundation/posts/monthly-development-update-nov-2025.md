+++
banner = "/uploads/DevUpdate-1125.png"
images = [ "/uploads/DevUpdate-1125.png" ]
categories = [ "Development updates" ]
date = 2025-12-05T00:00:00.000Z
description = "November brought coordinated progress across Swarm’s protocol, research, tooling, and ecosystem layers. On the protocol side, the Bee 2.7 release candidate is now live on public testnet..."
references_and_footnotes = [ ]
title = "Monthly Development Update – November 2025"
_template = "post"
+++


November brought coordinated progress across Swarm’s protocol, research, tooling, and ecosystem layers. On the protocol side, the **Bee 2.7 release candidate is now live on public testnet** with major connectivity and security upgrades, while the team continues hardening tests and reviewing feeds compatibility to ensure a smooth upgrade path for dApps. In parallel, research efforts are sharpening Swarm’s economic and network design – from a planned **price oracle SWIP** and **stake withdrawals redesign** to testnet explorations on other chains – while Beeport and other UX-focused components receive steady polish.

On the tooling and ecosystem front, the **JS track is expanding with a Multichain Library and CLI improvements**, and Solar Punk is pushing ahead with **MCP integrations**, the **File Manager** in the Desktop App, **decentralized streaming**, and **new partnerships** like CryptoMondays – showcased live at Devconnect in Buenos Aires. Meanwhile DevRel work continues to make Swarm more accessible and intuitive for developers. 

Mark **21 December** in your calendar, when a **[Solstice edition Community Call](https://www.addevent.com/event/hmz6zmv067bl)** will be broadcast, bringing a half-year overview and a look at what’s coming next.


### Bee Track 
* Bee 2.7 release candidate is live on public testnet, including all major planned features and fixes; public testing is underway with a focus on browser-facing integrations.
* Key connectivity and security upgrades deployed, including multiple underlay address support and AutoTLS enabling secure WebSocket connections and improved networking performance.
* Core dependency upgrades and testing hardening completed, with Golang and libp2p updates, flaky test fixes, expanded unit test coverage, and ongoing WSS/AutoTLS integration testing.
* Feeds compatibility review is in progress, addressing backward incompatibility introduced by recent changes and exploring mitigations to ensure a smooth upgrade path for dApps.


### Research Track 
* The price oracle optimization proposal has a draft that will become a SWIP to moderate the price while the network is in the bootstrap stage - although more nodes have joined, the price is still trending lower.
* Beeport shipped a small epic of bug fixes that make it more stable and smoother to use.
* The stake withdrawal SWIP is in the final stages of approval and will reshape how staking works in the network.
* Ongoing explorations of testnets on other chains. 


### JS Track 
#### Apps

##### [Multichain Lilbrary](https://github.com/ethersphere/multichain-library) 
* We are developing a cross-environment library and an accompanying embeddable [web widget](https://github.com/ethersphere/multichain-widget) that helps our users fund their Bee node with an improved user experience. While most cross-chain swap solutions only support a single token output, the Multichain Library project allows setting arbitrary xDAI and xBZZ values — the two essential currencies required to set up and operate a Bee node.

##### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released version 2.36.1, which fixes a download issue where large files were not streamed to disk properly.


### Ecosystem 

#### Solar Punk 
* We continued making [Swarm MCP](https://solarpunk.buzz/mcp-revolution-decentralized-ai-swarm/) more robust; final steps of testing are in progress, and you can already try it by cloning the repo [here](https://github.com/Solar-Punk-Ltd/swarm-mcp).
* As a part of our MCP efforts we’ve created a Swarm plugin for Hashgraph's leading AI ecosystem [conversational agent framework](https://github.com/hashgraph-online/conversational-agent). The implementation has been officially accepted by HashGraph ([source code](https://github.com/hashgraph-online/conversational-agent/tree/main/src/plugins/community/swarm)).
* The File Manager is in its final testing phase and will be released together with the Desktop App. It offers an easy-to-use interface for users who may be unfamiliar with Swarm concepts.
* Our [B2B Multimedia Streaming solution](https://solarpunk.buzz/msrs-decentralized-streaming-swarm/) is now available – if you are interested in experimenting with decentralized video streaming for your business, reach out to us! We already have a [page](https://solarpunk.beebridge.buzz/) dedicated to Solar Punk videos.
* We are excited to welcome [CryptoMondays](https://www.cryptomondays.io/) as the first partner to [stream their videos](https://cryptomondays.beebridge.buzz/) using our technology.
* Solar Punk participated at Devconnect 2025 in Buenos Aires. In addition to numerous business and technical discussions with potential partners, we were proud to organize a half-day side-event, a deep dive into the future of AI, decentralization, and Web3: [Concept to Commit: Decentralized AI & Media](https://luma.com/8ewy3a20?tk=QcCCFr).
    * **Decentralized AI Panel**: we brought together leaders shaping an open and autonomous AI ecosystem: Migle (Creative Director & Founder, Womxn in Web3 Privacy & Winprivacy), David Johnston (Lead Technologist, MorpheusAI), Sándor A. Nagy (COO of Swarm), András Arányi (CTO, Solar Punk) and Črt Ahlin (COO, Datafund). The [recording](https://cryptomondays.beebridge.buzz/#/watch/video/5D8228e1fcfD3510001cf6944A33E724bA1702d5/3a672781-8238-48ce-b719-48b802a8dbef) is available on the CryptoMondays streaming site.
    * **Launch Your Own AI Agent on Swarm**: [Learn how to create and deploy your own decentralized AI agent directly on Swarm](https://swarmai.devconnect.buzz/guide) - fully off-chain, autonomous & censorship-resistant. 
    * **How to Decentralize Any Frontend?**: Discover how to host dApps and websites entirely on decentralized infrastructure.
    * **Decentralized Streaming**: Experience decentralized media in action. Learn how video, audio & live content can be streamed efficiently across P2P networks.

#### Content 
* [The Evolution of Streaming on Swarm: Introducing MSRS](https://solarpunk.buzz/msrs-decentralized-streaming-swarm/)

### Partnership
* [Swarm Foundation Partners with CryptoMondays](https://blog.ethswarm.org/foundation/2025/cryptomondays-partnership/)

### DevRel 

#### Documentation
* New sections of the Develop on Swarm page have been drafted (see [PR# 758](https://github.com/ethersphere/bee-docs/pull/758) of the bee-docs repo), introducing readers to manifests and webpage routing on Swarm. These sections are set to be published the first week of December.

#### Content 
* [Swarm Community Call, 30 October – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-30-october-recap/)
* [Monthly Development Update – October 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-october-2025/)
* [State of the Network: October 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-october-2025/)


### Events 
##### **Swarm Community Call – 27 November**

The November Swarm Community Call highlighted the Bee v2.7 release candidate, now live on public testnet with improved connectivity and AutoTLS for secure, browser-friendly Swarm usage. The team shared **Devconnect Buenos Aires impressions** – where privacy, ZK tech, and AI+crypto dominated discussions – and outlined new collaborations around decentralized streaming, dAI, DeSci, and developer tooling. The **Swarmonomics** community talk proposed a significantly different tokenomics direction: scaling and simplifying staking, shifting to fixed fees, and moving toward a clear, transparent tokenomics roadmap. 

You are welcome to read the [recap here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-25-november-recap/) or listen to the [recording here](https://x.com/i/broadcasts/1dRKZaRPabNxB). 


### Upcoming events

##### **Solstice edition Community Call – 21 December**

There will be **no standard last-Thursday-of-the-month Community Call in December**. **Instead**, we will host a **Solstice Special** on **21 December** — a special edition marking the end of the year. [Add it to your calendar](https://www.addevent.com/event/hmz6zmv067bl)!

### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!

