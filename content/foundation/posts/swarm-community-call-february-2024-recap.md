+++
banner = "/uploads/scc-feb-recap.png"
categories = [ "Events" ]
date = 2024-03-07T00:00:00.000Z
description = "The February call started with an overview of the latest updates to the Swarm network. According to Niki Papadatou, node operators can now use a local scanning tool (available over an API endpoint)."
references_and_footnotes = [ ]
title = "Swarm Community Call, 29 February – Recap"
_template = "post"
+++


## New scanning tools for node operators

The February call started with an overview of the latest updates to the Swarm network. According to Niki Papadatou, node operators can now use a local scanning tool (available over an API endpoint). It detects and reports the number of all the pinned file’s chunks, and indicates how many of them are corrupted and missing. There’s also a Swarm Scan API tool available that will point node operators to the least populated neighbourhoods and show the exact storage depth of a given neighbourhood. 

At the same time, the team has implemented local fixes that are expected to bring big improvements to the localstore, such as the upload store, improvements for pinning, stamping, etc. A piece of great news: **from now on, dates for all new releases will be communicated** **two weeks in advance**, giving everyone enough time to prepare and share their feedback on the upcoming changes. 

Niki also addressed the questions from the community regarding erasure codes. _“I want to say that this is an optional feature, which can be set in the headers during an upload,”_ she stressed, while adding that at the moment, all tests show expected amounts of chunk redundancy and the process is behaving as expected.


## Enhancing the Swarm network through SWIPs

Three SWIPs (Swarm Improvement Proposals) were presented during the call. 

Črt Ahlin gave an overview of two, both currently in the development phase and awaiting integration into the repository: 

- [The first proposal, centred on responsible neighbourhood splits](https://github.com/ethersphere/SWIPs/pull/43), aims to prevent data loss during storage radius expansions. The SWIP proposes socially responsible node behaviour, where nodes only expand their storage radius when sufficient "SR nodes" are available to secure the remaining data, avoiding data loss and erosion of trust in the Swarm network. 

- [The second proposal focuses on making storage within the Swarm network more cost-effective and efficient by doubling the reserve size](https://github.com/ethersphere/SWIPs/pull/44). This would increase the overall storage capacity of the Swarm network either by reducing the number of nodes required, or achieving greater storage with the same number of nodes. Since this would require additional compute and storage from the node operators, your input on this proposal is vital. 

If you’re a node operator, don’t hesitate to give your thoughts on [Discord](https://discord.com/channels/799027393297514537/801438093927776286) or [GitHub](https://github.com/ethersphere).

- [The third SWIP](https://github.com/ethersphere/SWIPs/pull/42) was presented by Antonio Gonzalo. It focuses on using the Swarm network’s infrastructure to ensure higher security levels for on-chain data storage. He detailed how Swarm could be used for storing data, particularly from Layer 2 networks. The emphasis of the SWIP is on **maintaining data integrity and availability** via a stake-based mechanism of insurer nodes, which would ensure that data uploads are genuine and not manipulated by malicious actors.  


## The future of the bonding curve is in your hands!

The announcement segment of the call came with some big news. The most substantial is the beginning of the discussions and the subsequent vote on **the fate of Swarm’s bonding curve**. In about two weeks, there will be an official announcement on Swarm Foundation’s [blog site](https://blog.ethswarm.org/) with more details on how the vote should happen. The plan is to **open the voting process on the next community call on 28 March** and **close it on 25 April**. If the community decides that the bonding curve should go, it will be deprecated on 4 May. 

The next important announcement is that the **Swarm Summit is scheduled from 20 to 21 June in an IRL-online** format, and you can already start preparing your submissions. Also, the Swarm team will be at EthZurich giving a talk about censorship resistance, and Sándor A. Nagy, Solarpunk CEO, will be presenting at this year’s NFT. NYC conference on 5 April on how to store NFTs safely with Swarm.

If you happen to be in Asia in April, team members from the Swarm Foundation will be there on a short tour. Give us a head’s up on [X](https://twitter.com/ethswarm) or Discord if you’d like to reach out and have a chat in person. 

Last but not least, **The Book of Swarm** is now **available in soft or hard physical copy**. 


## Community talk – A one-click Bee node; get to know your chunks; start your Web3 developer journey with Swarm

As part of the regular Community Talk segment, Áron Soós showed a wonderfully informative video on how chunks, Swarm’s smallest unit of data, actually function in the network.

Watch the demo [here](https://www.youtube.com/watch?v=NJS14Rbcz3k).

He also gave a short and equally informative demo on how to spin up a full Bee node with the help of DigitalOcean’s one-click installer.

Watch the demo [here](https://www.youtube.com/watch?v=sm3JjHpeHyE).

The last presentation was reserved for AgorApp’s Ethan Clime. Their upcoming course delves into Swarm feeds, the data structures that enable publishers to stream content on the Swarm network. It has a great interactive environment where you can test what you have learned on the fly! If you’re new to Swarm, you can check out their **[introductory course](https://agorapp.dev/course/introduction-to-ethereum-swarm)** that looks at BeeJS in more detail.     

Due to technical difficulties, the announced educational video by Noah Maizels, a guide dedicated to understanding [neighbourhood doublings and setting target neighbourhoods to be able to optimise reward chances](https://www.youtube.com/watch?v=0Uli66yqudk) while also contributing to overall network health, was postponed, but it will featured at the **next Community Call**, which will be on **28 March** – [add to calendar](https://www.addevent.com/event/Ey20419663). 

See you there, see you then.