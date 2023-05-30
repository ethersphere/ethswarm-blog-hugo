+++
banner = "/uploads/SCC-May-recap.png"
categories = [ "Events" ]
date = 2023-05-30T04:00:00.000Z
description = "The May Swarm Community Call was inspiring and full of optimism: the Swarm network has been demonstrating remarkable performance for almost two weeks, maintaining a 0% error rate on uploads and downloads."
references_and_footnotes = [ ]
title = "Swarm Community Call, 25 May — Recap"
_template = "post"
+++


## The Swarm network continues to evolve: 0% upload error rate achieved

The May Swarm Community Call was inspiring and full of optimism: the **Swarm network** has been demonstrating remarkable performance for almost two weeks, **maintaining a 0% error rate on uploads and downloads**. As Callum Toner from the Research Track explained, and Esad Akar demonstrated later, this development is a testament to the improved stability of the network following the release of Bee client version 1.16.1, alongside consistently healthy upload and download speeds.

Looking ahead, an important improvement lies on the horizon. Swarm developers are preparing to transition from the soon-to-be-obsolete Goerli to the more robust Sepolia test network. This strategic move will provide a significantly improved staging and testing environment and drive further development of the network. As Mark Bliss elaborated, this transition will reduce costs for developers and improve conditions, including multiple faucets for gas fee payments.

While this changeover is underway, the wider development team is focused on the imminent technical release of the localstore. The date for this important launch has been deliberately chosen to coincide with the opening day of the three-day [Swarm Virtual Summit](https://summit.ethswarm.org/), marking an important stage in Swarm's development. Many subsequent features, including for the storage incentives game and samples matching, rely on a smooth-running localstore.


## The “doubling” is almost here. Network capacity is increasing.

The Swarm Community Call also revealed another intriguing development, this one dubbed “the doubling”. As detailed by Črt Ahlin and Esad Akar, more and more data is being uploaded to the Swarm network, causing nodes to reach capacity and prepare to jump to the next radius. In essence, this development will double the capacity of the entire network.


## Hosting a Swarm gateway – the whys and hows

Another topic covered in the call was dedicated to hosting your own Swarm gateway, with Ramesh Pallikara discussing the benefits and mechanisms of doing so. Typically, you can access the Swarm network via your own Bee node or installing the [Swarm Desktop](https://www.ethswarm.org/build/desktop), which are the “purer” P2P options. Any other option requires a gateway to access the Swarm network.

Developers can set up their own gateways as entry points for their dApps to facilitate access for those who don't run a Bee node or have the Swarm Desktop installed. These gateways can be public or protected and require simple authentication. You can also run a private gateway that serves as the backend for your dApp and has its own content policy. If you want to know more, read this [HackMD document](https://hackmd.io/@rampall/BJldZJaH2) or stay tuned for an upcoming blog.


## Community talks – Blobscan

The last part of the call was dedicated to projects from the Swarm community, with [Blobscan](https://github.com/Blobscan/blobscan) in the spotlight. This is an explorer for blobs in Ethereum, which were introduced with EIP-4844. Blobs allow large amounts of data to be added to transactions in Ethereum and serve as a stop-gap measure to increase the capacity of the network before sharding is implemented. Blobscan will find the latest blobs associated with a particular block transaction, giving developers easier access to data for certain transactions, such as for analytics.

The plan now is to add metrics and look at how this block data will be used over time and how it will be compared with existing transactions. The developers behind Blobscan are also planning an integration with Swarm. Gabi from Blobscan laid out the reasons: _“This is the interesting thing for this community in particular. What we would like to do, and we see it as a really great use case, is to have this block data stored in Swarm. These are really big amounts of data and need to be preserved, because eventually all this information is removed from the client.”_

## Last Call for Speakers - Swarm Virtual Summit 21–23 June 

If you are using Swarm to power your project, you’re invited to also [apply to be a speaker at the upcoming Swarm Virtual Summit](https://summit.ethswarm.org/swarm-summit-2023/submit/EbfvjE/info/). The application process is only open until 5 June, so don’t hesitate and share your work with the Swarm community. The talk can be about anything Swarm-related – a tool or dApp that uses Swarm, a deep dive into one of Swarm's features, or even an inspirational talk.

The next Swarm Community Call will be held on 27 July at 17:00 CET on the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286). Already have a question for the teams building the Swarm network? Send them a question by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3).
