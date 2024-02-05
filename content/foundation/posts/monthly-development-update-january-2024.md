+++
banner = "/uploads/dev-update-feb.png"
images = [ "/uploads/dev-update-feb.png" ]
categories = [ "Development updates" ]
date = 2024-02-05T00:00:00.000Z
description = "The Research Track is preparing for the **imminent release of Swarm 2.0**, featuring erasure codes that will deliver groundbreaking data availability."
references_and_footnotes = [ ]
title = "Monthly Development Update – January 2024"
_template = "post"
+++



In January, the Bee Track team focused on resolving network issues that appear to have a common denominator – the local store. Meanwhile, the Research Track is preparing for the **imminent release of Swarm 2.0**, featuring erasure codes that will deliver groundbreaking data availability. Both teams are also in the final stages of preparing the **2024 roadmap,** which is eagerly anticipated in the coming weeks.

The Swarm Foundation struck two **new partnerships ([FuturED](https://blog.ethswarm.org/foundation/2024/swarm-foundation-partners-with-futured-in-the-national-accelerator-network/) and [ColdStack](https://blog.ethswarm.org/foundation/2024/swarm-unveils-partnership-with-coldstack/))**, while **[Context Protocol](https://blog.ethswarm.org/foundation/2024/context-protocol-integrates-the-swarm-network/)** decided to make Swarm part of their solution. The Fair Data Protocol team has just launched the **[Fairdrive DAO](https://github.com/fairDataSociety/Fairdrive-DAO)**, creating a decentralised governance framework with a focus on a reputation-based model.

A new detailed paper on **[erasure codes](https://papers.ethswarm.org/p/erasure/)** is out that delves into Swarm’s data availability. In addition, [Swarm's official blog](https://blog.ethswarm.org/) is richer by three fresh blogs and there's a cool new [bounty](https://app.dework.xyz/swarm-41421/main-space-85561) for creating a small dApp or utility concentrating on encrypted screenshots. Furthermore, sharing logs, code and other content on the Swarm network has been made effortless with PasteBee, which is available in the demo apps store.

And finally, the Swarm Community Call is set for 29 February. You can already ask your questions via [this form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3) or head to the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286) if the end of February seems too far away. 


## Tracks
### Bee Track
* The team has been focusing on discussions about known issues that concern the network. For the past few months we have been observing issues such as freezes on nodes, corrupted chunks and more. We have been evaluating what we have in front of us and our research indicates that these issues have the same root, which is the localstore. Specifically, we have been working on making leveldb transactions atomic, and other tasks regarding cache, pinning, uploadstore, and chunk eviction.
* There have also been extensive discussions about the engineering roadmap for 2024. Improving the state and performance of the network are among our top priorities. We expect the roadmap to be finalised soon.


### Research Track
* The research roadmap and processes have been the subjects of major discussions and changes and are almost complete to release. There is a focus for 2024 on optimal substructure solutions and optimisations to enhance the system’s robustness, node operator ROI, etc. 
* We are awaiting the imminent release of Swarm 2.0 with [Erasure Codes](https://papers.ethswarm.org/p/erasure/) which will mark groundbreaking guarantees for data availability in the system. 
* As well as the upgrade of our testnet to the Sepolia network.
* The new Swarm [Erasure Coding paper](https://papers.ethswarm.org/p/erasure/) was published


### JS Track
#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* Released [v6.7.1](https://github.com/ethersphere/bee-js/releases/tag/v6.7.1) and [v6.7.2](https://github.com/ethersphere/bee-js/releases/tag/v6.7.2)
    * Allows feed index to be 0 when downloading
    * Fixes waiting for stamp which resulted in “stamp not usable” in some edge cases
* Erasure coding features staged on feat/redundancy branch

#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Erasure coding features staged on feat/redundancy branch

[Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* Released [v0.12.0](https://github.com/ethersphere/gateway-proxy/releases/tag/v0.12.0)
    * Fixes some issues regarding auto-buying stamps


### Ecosystem

#### Partnerships
* The Swarm Foundation Announces Groundbreaking Decentralised [EO Manifesto](https://blog.ethswarm.org/foundation/2024/the-swarm-foundation-announces-groundbreaking-decentralised-eo-manifesto/)
* Swarm Foundation Partners with [FuturED](https://blog.ethswarm.org/foundation/2024/swarm-foundation-partners-with-futured-in-the-national-accelerator-network/) in the National Accelerator Network
* Partnership with [ColdStack](https://blog.ethswarm.org/foundation/2024/swarm-unveils-partnership-with-coldstack/)
* [Context Protocol](https://blog.ethswarm.org/foundation/2024/context-protocol-integrates-the-swarm-network/) Integrates the Swarm Network



#### Fair Data Protocol
##### [Fairdrive DAO](https://github.com/fairDataSociety/Fairdrive-DAO)
* Fairdrive DAO empowers users with data sovereignty in a digital age. This evolving governance document outlines structures, teams, membership criteria, rights and financial management. Rooted in principles of transparency, privacy and community collaboration, Fairdrive DAO, a key initiative of Fair Data Society, aims to revolutionise data management. It utilises Colony.io and the DRIVE token for decentralised governance, emphasising a reputation-based model. With a commitment to privacy, ethical data practices and GDPR compliance, Fairdrive fosters open collaboration and community engagement. Join us on [Twitter](https://twitter.com/fairdatasociety), [Discord](https://discord.gg/RpX5eU4Cpr), and [GitHub](https://github.com/fairDataSociety) to shape a future where data serves users ethically and transparently.

##### [Fairos-dfs](https://github.com/fairDataSociety/fairOS-dfs)
* The staging version got a new feat: authorisation is now [access_token based](https://github.com/fairDataSociety/fairOS-dfs/pull/585), not cookie based.

##### [Fdp-contracts](https://github.com/fairDataSociety/fdp-contracts)
* [New release](https://github.com/fairDataSociety/fdp-contracts/releases) with contract upgrade and bug fixes.

##### [FIPs](https://github.com/fairDataSociety/FIPs)
* [New proposal ](https://github.com/fairDataSociety/FIPs/blob/feat/creator-pods/text/0078-creator-pods.md)on the pod subscription topic.


### DevRel
#### General
* The new Swarm Erasure Coding paper –  [subpage](https://papers.ethswarm.org/p/erasure/) was published.
* New [bounty](https://app.dework.xyz/swarm-41421/main-space-85561) for creating a small dApp or utility focused on encrypted screenshots was published.


#### Apps
##### Etherjot
* PasteBee, a tool for quickly and easily sharing logs, code and other content on the Swarm network was added to the demo apps store.

#### Content
* [State of the Network: December](https://blog.ethswarm.org/foundation/2024/state-of-the-network-december/)
* [Monthly Development Update – December 2023](https://blog.ethswarm.org/foundation/2024/monthly-development-update-december-2023/)
* [Swarm Community Call, 25 January – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-25-january-recap/)


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has multiple open positions. We are hiring a [Software Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/Software_Engineer_go_blockchain), [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go), [QA Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/senior-software-engineer-go) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events:
##### **Swarm Community Call – 25 January:** the monthly “stay up to date” event
* The first Community Call of the year was held on 25 January, providing the latest core dev updates, a demonstration of Swarm’s ‘super feature’ – erasure coding, presenting Swarm CLI manifests, PasteBee, a new Python module for Bee API manifest and announcing fresh partnerships. You can read a recap blog post about the event [here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-25-january-recap/).


### Upcoming events
##### **Swarm Community Call – 25 January 2024**
* Join us every last Thursday of the month at the Swarm Community Call on Discord to stay fully informed, perhaps seize the opportunity to jump into a live discussion or ask the Swarm team a question! The next Community Call is on 29 February – [add to calendar](https://www.addevent.com/event/iH19625610). You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3). 