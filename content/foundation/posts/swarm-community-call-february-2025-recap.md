+++
banner = "/uploads/SCCrecap0225.jpg"
images = [ "/uploads/SCCrecap0225.jpg" ]
categories = [ "Events" ]
date = 2025-03-04T00:00:00.000Z
description = "Web3 is sometimes difficult for the end user because of the underlying reimagined  infrastructure that is focused on agency and privacy. That’s why we need to make it better."
references_and_footnotes = [ ]
title = "Swarm Community Call, 27 February – Recap"
_template = "post"
+++

Web3 is sometimes difficult for the end user because of the underlying reimagined  infrastructure that is focused on agency and privacy. That’s why we need to make it better. The February Swarm Community Call highlighted exactly how the Swarm team and community are tackling this challenge—through performance upgrades, intuitive multichain solutions, and community-driven improvements to the developer experience.


## Bee 2.5.0: performance, stability, and transparency

Niki Papadatou kicked off the call by [announcing Bee 2.5.0](https://blog.ethswarm.org/foundation/2025/bee-2-5-0-pre-release/), a new release scheduled for 11 March. This update is all about making Swarm faster, more stable, and easier to use. Key highlights include:



* Improved garbage collection and storage management
* Better handling of postage stamps
* Faster, more reliable uploads and downloads

To better understand how these improvements affect real-world performance, the team is developing a new external tool to measure node behaviour and network efficiency. This tool will provide insights into upload/download speeds, storage availability, and response times across different regions. Importantly, participation will be entirely voluntary, transparent, and controlled by node operators. Your feedback on this initiative is warmly welcomed.

Looking ahead, the team is prioritising a smoother onboarding experience for new node operators. The goal is clear: simplify node setup, lower barriers to entry, and strengthen the network through broader participation. If you've faced challenges setting up your node, your input can help shape the future—so please share your experiences.


## Multichain app: storage made simple across chains

Callum Toner shared the current progress on Swarm’s multichain app, now nearing its first public release. This app will enable users to easily purchase Swarm storage using various cryptocurrencies across multiple chains.

The first version already supports all EVM-compatible chains, with Solana integration coming soon. The user experience is designed to be seamless: simply select how much data you want to store and for how long, then pay with your preferred cryptocurrency. The app handles the rest—bridging, swapping, and uploading—making decentralised storage accessible to everyone.

Internal and community testing will begin shortly, with a first iteration production release following soon after. Future versions will further refine the user experience and expand chain support.

Meanwhile, the research team continues to optimise Swarm’s performance, improve the postage protocol, and enhance the overall user experience. A detailed roadmap will be released soon, outlining upcoming improvements to data incentives, price oracle mechanisms, and large database hosting capabilities.


## Data provenance: Swarm’s role in shaping new standards in data provenance and decentralised AI 

Črt Ahlin from Datafund presented findings from recent market research on data provenance, conducted as part of their [Swarm Foundation fellowship](https://blog.datafund.net/datafund-is-a-swarm-fellowship-recipient-verifying-data-with-web3-57e7e20f7066). Data provenance—the historical record of a dataset’s origins, transformations, and movements—is becoming increasingly critical as AI systems, especially large language models (LLMs), rapidly evolve.

Key insights from the research include:
* Rising demand for provenance tracking to address ethical, copyright, and regulatory concerns
* The EU identified as a key market due to its regulatory environment and initiatives like the Data Spaces Support Centre
* Swarm’s unique strengths—immutability, cost-effectiveness, and public accessibility—make it ideal for storing provenance metadata

Črt also highlighted broader applications beyond AI, such as supply chain management and product lifecycle tracking. To position Swarm as a leading solution, the team recommends developing a user-friendly toolkit aligned with EU regulations, collaborating with standard-setting organisations, and initially targeting early adopters in less regulation-sensitive sectors.


## Developer UX: simplifying postage stamps for everyone

The second community talk addressed one of the key challenges: improving the developer experience around postage stamp management. Noah, Swarm Foundation’s technical writer, introduced a [GitHub issue](https://github.com/ethersphere/bee/issues/4992), proposing a simpler approach to buying and managing postage stamps.

Currently, concepts like "amount" and "depth" require significant technical understanding, creating barriers for new users. Noah suggested abstracting these concepts, allowing users to simply specify their desired storage size and duration, with automatic adjustments and top-ups when needed.

The Swarm team and community members shared their perspectives on the issue:
* Áron Soós (Bee-JS developer) introduced simplified terminology in Bee-JS, replacing technical terms with intuitive concepts like "buy storage," "duration," and "size."
* András Arányi ([Solar Punk](https://solarpunk.buzz/) CTO) shared practical experiences from their partnership with [Galaxis](https://galaxis-community.com/communities), demonstrating successful UX simplifications for non-technical users, including intuitive interfaces and proactive expiry alerts.
* Mirko Da Corte ([Etherna video platform](https://info.etherna.io/)) emphasised the importance of clearly distinguishing between duration and data volume. He based this on his recent [proposal](https://github.com/ethersphere/bee/issues/5009) and [implementation](https://github.com/Etherna/bee-net) of improvements to chunk optimisation for precise calculations and more efficient storage.
* Ljubiša Gačević (Bee team) discussed successful internal implementations of automatic postage batch top-ups within the Beekeeper tool, highlighting potential complexity and risks if integrated directly into Bee.
* mfw78 (community member, Rust client developer) advocated for clearly defined primitives and higher-level SDKs to improve the developer experience, suggesting a layered approach to simplify interactions with Swarm.

The discussion concluded with broad agreement on the need for clearer, more intuitive interfaces and terminology. Noah suggested adopting simplified terms in Bee-JS, Swarm CLI, and documentation, alongside improved user education and budget controls to mitigate risks associated with automatic top-ups.

Swarm is a community. Your involvement—whether running nodes, providing feedback, or developing applications—is essential. Stay engaged, join discussions, and let's continue building Swarm together.

Thank you all! The next Swarm Community Call will be held on 27 March, 17.00 CET on Discord and broadcast on X as well—[add to calendar](https://www.addevent.com/event/zb25028179). 
