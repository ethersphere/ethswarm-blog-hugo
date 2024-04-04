+++
banner = "/uploads/scc-march-recap.png"
images = [ "/uploads/scc-march-recap.png" ]
categories = [ "Events" ]
date = 2024-04-04T00:00:00.000Z
description = "The February call started with an overview of the latest updates to the Swarm network. As highlighted by Niki Papadatou, node operators now have access to a local scanning tool via an API endpoint."
references_and_footnotes = [ ]
title = "Swarm Community Call, 28 March – Recap"
_template = "post"
+++


## Bee 2.0 has been released

Just two days before the Swarm Community Call, the Swarm Foundation released Bee 2.0. The **release of Bee 2.0** is considered **a turning point** that comes with several features. Some concern the **local store changes and optimisations** – one can already observe a reduction in the so-called freezes, from over 60% down to under 40%, as well as other performance benefits, for instance 20% faster retrieval. But the 2.0 package also brought a **substantial encryption upgrade**, and of course, most importantly, **the release of the erasure codes**. The erasure codes are **designed to address and overcome any retrieval issues, ensuring data availability even under extreme conditions** where 50% of the network might be unavailable.This feature is now fully operational and working as anticipated, with thorough testing yielding no negative feedback. 

At this point, the team would appreciate community’s feedback – not only from a functionality point of view but also from the UI/UX perspective. While the erasure codes are an additional feature, not “turned on” by default, the Swarm Foundation team would nevertheless want to make it part of the “normal Swarm experience”, more standardised and easier to use.

**Ultimately, what does 2.0 mean?** “It means that we are essentially **production ready**. For whatever retrieval issues Swarm had before, the erasure codes are able to overcome that [...] Unless you have over 50% of the network leave immediately, there’s not going to be any retrieval problems,” summed up Callum Toner from the Research Team. **The implementation of erasure codes also positions Swarm as the only decentralised storage protocol to actually have this system set in place**, while everyone else relies on replication. “It is an unconventional approach, but one that’s been working really elegantly and is very well suited for the overheads and the type of system that we’re dealing with,” concluded Callum.  

The Bee and Research teams are now planning to see through the rest of the roadmap, which is mainly focused on the incentives for the node operators and more Bee optimisations, all of which is expected to follow at a much faster pace now that the enormous work releasing Bee 2.0 has been accomplished.  


## The fate of the bonding curve put to vote

In a significant moment for the Swarm network and its community, Costanza Gallo announced the **[opening of a community vote concerning the future of the bonding curve](https://blog.ethswarm.org/foundation/2024/how-to-participate-in-the-bonding-curve-vote/)**. The voting opened on **28 March at 11:59 UTC** on [Snapshot](https://snapshot.org/#/swarmfoundation.eth) and will close on **25 April at 11:59 UTC**. Wallets associated with the Swarm Foundation, Swarm Association and centralised exchanges will be excluded from the voting process to ensure fair participation.

Two options are being put to the vote. One is that **the bonding curve stays as it is** and nothing changes. The other is **shutting down the bonding curve.** If this should happen, the bonding curve smart contract will be deactivated, leading to the loss of any DAI remaining in the smart contract. There will be no new token issuance and the amount of BZZ currently in circulation will remain as it is. 

Costanza stressed the importance of informed voting, urging token holders to utilise the 28-day voting period to fully grasp the implications of the bonding curve and the options presented. 

For any further questions you might have, head over to the Swarm Foundation Discord ([bzz-tokenomcis channel](https://discord.com/channels/799027393297514537/808329804268699678)) and follow [Swarm Foundation Blog](https://blog.ethswarm.org/), where articles providing more information and useful links can be found. 


## “Advanced” section in Swarm docs covering erasure coding cost implications and neighbourhoods 

Noah Maizels presented a new, advanced section in Swarm documentation. 

The section details cost implications of different erasure codes redundancy levels. Swarm users can use this **[cost calculator](https://docs.ethswarm.org/docs/learn/advanced/erasure-cost-calculation)** to help them budget their uploads based on the amount of data and selected redundancy level.

Besides the cost calculator, the newly added section also features an in-depth look at neighbourhoods and doubling and there’s also a troubleshooting section for node operators. In addition, Noah highlighted updates to the [API reference documentation](https://docs.ethswarm.org/docs/api-reference/), which is now inclusive of all new endpoints, and the introduction of meta tags for improved sharing visuals. 


## Community Talks: Streaming on Swarm (Solarpunk) & Storing Ethereum’s history on Swarm (Blobscan) 

Levente Kiss from Solarpunk presented a browser-based video streaming application that leverages Swarm for both uploading and downloading video content. 

He emphasised the traditional web environment's reliance on transcoding to adapt video segments for different protocols and resolutions. This process is crucial for delivering streams through Content Delivery Networks (CDNs) in formats compatible with various devices. Solarpunk's innovation involves using Swarm for video streaming to bypass traditional CDN dependencies and create a fully decentralised streaming service. 

Although there are still ample challenges ahead to making this kind of service run smoothly, Solarpunks already have their sights on improving the architecture and offering tools and libraries to help developers speed up their work. 

The last presentation of the call was reserved for the team from Blobscan. Gabi gave a short overview of blobs, which were introduced to Ethereum with EIP-4844. Blobs complement Ethereum transactions with additional data and help reduce cost for Layer 2 roll-ups. The problem is that information in blobs is deleted after 18 days, so the team came up with a solution to store them on Swarm for anyone who would like to find and use them in the future.

Currently, Blobscan stores blobs from the Ethereum mainnet and testnet, but they are planning on adding the Gnosis chain as well this week, while the Swarm Foundation has committed to keep supporting their efforts. 

 


## Announcing

## To sum up the Recap, the following announcements were made during the March Community Call: 

The annual **Swarm Summit** will be held IN REAL LIFE this year again, first time after Covid hit back in 2020. From **20–21 June**, the team will gather in **Ljubljana, Slovenia**, and you are welcome to join them in person. The Summit will, of course, be streamed live online as well, but there’s nothing quite like a physical experience. The call for papers is out – [https://summit.ethswarm.org/swarm-summit-2024/cfp](https://summit.ethswarm.org/swarm-summit-2024/cfp), you are kindly invited to apply. 

Swarm Foundation will be present at the upcoming [Ethereum Zürich](https://ethereumzuri.ch/) conference, with Costanza Gallo speaking on “How Swarm makes crypto cyberpunk again” on Saturday, 6 April, 14:35, at Surge Stage. 

Three Swarm Foundation team members have embarked on a “China Tour” and will be visiting Shanghai, Shenzhen and Hong Kong for the Web3 festival in the coming days. If you are around, drop us a line!

Sandor Nagy, Solarpunk CEO, will appear at this year’s NFT: NYC conference. He will talk about “Proper treatment of NFTs on Ethereum” on Friday, 5 April, at 10:15, on Stage 2.

Last but not least, a **New Grant wave** has opened. Please follow the link below to find out more and apply: [https://www.ethswarm.org/grants/swarm-grants-programme](https://www.ethswarm.org/grants/swarm-grants-programme).

**The next Community Call will be on 25 April**, with the results from the bonding curve vote coming in, so do [join us live](https://www.addevent.com/event/fx21028312) on Discord then! 
