+++
banner = "/uploads/scc-feb-recap.png"
images = [ "/uploads/scc-feb-recap.png" ]
categories = [ "Events" ]
date = 2024-03-07T00:00:00.000Z
description = "The February call started with an overview of the latest updates to the Swarm network. As highlighted by Niki Papadatou, node operators now have access to a local scanning tool via an API endpoint."
references_and_footnotes = [ ]
title = "Swarm Community Call, 29 February – Recap"
_template = "post"
+++


## New scanning tools for node operators

The February call started with an overview of the latest updates to the Swarm network. As highlighted by Niki Papadatou, node operators now have access to a local scanning tool via an API endpoint. This tool detects and reports the number of all pinned file chunks, signalling the presence of any corrupted or missing chunks. Additionally, a Swarm Scan API tool is available for node operators, directing them to the least populated neighbourhoods and providing precise information on the storage depth of a given neighbourhood. 

At the same time, the team has implemented local fixes that are expected to yield significant improvements to the localstore, such as the upload store, improvements for pinning, stamping, etc. A piece of great news: **from now on, dates for all new releases will be communicated** **two weeks in advance**, providing ample time for everyone to prepare and share their feedback on the upcoming changes. 

Addressing community inquiries about erasure codes, Niki emphasised, _“I want to say that this is an optional feature, which can be set in the headers during an upload.”_ She added that, currently, all tests indicate the expected levels of chunk redundancy, and the process is behaving as anticipated.


## Enhancing the Swarm network through SWIPs

Three SWIPs (Swarm Improvement Proposals) were presented during the call. 

Črt Ahlin provided an overview of two proposals currently in the development phase and awaiting integration into the repository: 
- [The first proposal](https://github.com/ethersphere/SWIPs/pull/43), centres on responsible neighbourhood splits, aiming to prevent data loss during storage radius expansions. The SWIP proposes socially responsible node behaviour, where nodes only expand their storage radius when a sufficient number of "SR nodes" are available to secure the remaining data, preventing data loss and preserving trust in the Swarm network. 
- [The second proposal](https://github.com/ethersphere/SWIPs/pull/44) focuses on enhancing the cost-effectiveness and efficiency of storage within the Swarm network by doubling the reserve size. This adjustment would increase the overall storage capacity of the Swarm network, either by reducing the required number of nodes or achieving greater storage with the same number of nodes. Since this would require additional compute and storage from node operators, your input on this proposal is vital. 
- [The third SWIP](https://github.com/ethersphere/SWIPs/pull/42), presented by Antonio Gonzalo, focuses on leveraging the Swarm network’s infrastructure to ensure higher security levels for on-chain data storage. He detailed how Swarm could be used for storing data, particularly from Layer 2 networks. The SWIP emphasises **maintaining data integrity and availability** via a stake-based mechanism involving insurer nodes, which would guarantee the genuineness of data uploads, preventing manipulation by malicious actors.  

If you’re a node operator, don’t hesitate to share your thoughts on [Discord](https://discord.com/channels/799027393297514537/801438093927776286) or [GitHub](https://github.com/ethersphere).


## The future of the bonding curve is in your hands!

The announcement segment of the call came with some big news, with the most substantial being the initiation of discussions and a subsequent vote on **the fate of Swarm’s bonding curve**. In about two weeks, an official announcement on the details of the vote will be published on the Swarm Foundation’s [blog site](https://blog.ethswarm.org/). The plan is to **open the voting process on the next community call on 28 March** and **close it on 25 April**. If the community decides that the bonding curve should go, it will be deprecated on 4 May. 

The next important announcement is that the **Swarm Summit is scheduled from 20 to 21 June in an IRL-online** format, and you can already start preparing your submissions. Additionally, the Swarm team will be presenting at EthZurich on censorship resistance, and Sándor A. Nagy, Solarpunk CEO, will be speaking at this year’s NFT. NYC conference on 5 April, addressing how to safely store NFTs with Swarm.

If you happen to be in Asia in April, team members from the Swarm Foundation will be there on a short tour. Give us a heads up on [X](https://twitter.com/ethswarm) or Discord if you’d like to reach out and have a chat in person. 

Last but not least, **The Book of Swarm** is now **available in soft or hard physical copies**. 


## Community talks

### Visualizing Swarm Hashes, Node Addresses and Neighbourhoods
As part of the regular Community Talk segment, Áron Soós showed a wonderfully informative video on how chunks, Swarm’s smallest unit of data, actually function in the network.

Watch the demo [here](https://www.youtube.com/watch?v=NJS14Rbcz3k).

### Bee on DigitalOcean, a one-click install
He also gave a short and equally informative demo on how to spin up a full Bee node with the help of DigitalOcean’s one-click installer.

Watch the demo [here](https://www.youtube.com/watch?v=sm3JjHpeHyE).

  

### Neighbourhood Doublings & Setting Target Neighbourhoods
Due to technical difficulties, the scheduled educational video by Noah Maizels— a guide dedicated to understanding neighbourhood doublings and setting target neighbourhoods to be able to optimise reward chances while also contributing to overall network health—has been postponed to the next Call. 

You can watch the video [here](https://www.youtube.com/watch?v=0Uli66yqudk). 

### New Swarm course
The final presentation was reserved for AgorApp’s Ethan Clime. Their upcoming course delves into Swarm feeds, the data structures empowering publishers to stream content on the Swarm network. It has a great interactive environment where you can test what you have learned on the fly! If you’re new to Swarm, you can check out their **[introductory course](https://agorapp.dev/course/introduction-to-ethereum-swarm)**, providing a detailed look at Bee-JS.   

**Next Community Call** will be on **28 March** – [add to calendar](https://www.addevent.com/event/Ey20419663). 
 

See you there, see you then.