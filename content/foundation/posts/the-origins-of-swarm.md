+++
banner = "/uploads/og1.png"
images = [ "/uploads/og1.png" ]
categories = [ "Ecosystem" ]
date = 2024-05-08T00:00:01.000Z
description = "It struck us that it has been 10 years since the idea of Swarm was formulated. Can you believe it is one decade old? That’s a real shocker! Let’s go 10 years back and see how it all started."
references_and_footnotes = [ ]
title = "The Origins of Swarm"
_template = "post"
+++

*NOTE: This blog was originally published at [https://telegra.ph/The-Origins-of-Swarm-05-08](https://telegra.ph/The-Origins-of-Swarm-05-08)*

It struck us that it has been 10 years since the idea of Swarm was formulated. Can you believe it is one decade old? That’s a real shocker! Let’s go 10 years back and see how it all started.

## Inception

The grand idea behind Swarm is a decentralized storage and messaging system built on blockchain. It originated within the cradle of Ethereum and serves as a permissionless private storage infrastructure for dApp code, user data, blockchain data, state data, and any data you wish to store privately, securely, and for an indefinite time.

In the spring of 2014, Ethereum co-founders Gavin Wood and Vitalik Buterin came up with the idea of having separate protocols for computation, communication, and data storage within the Ethereum ecosystem. The idea of Swarm belongs to the Ethereum co-founder and later founder of Polkadot, Kusama, Parity, and Web3 Foundation Gavin Wood. The three protocols later got their famous nickname “the holy trinity of Ethereum”:

![Image 2](/uploads/og2.png)
*Gavin Wood’s version of the holy trinity of Ethereum. Wait!... If Gavin Wood also coined the term “web3,” these two notions look suspiciously related. Either way, the above trinity became a duo after Whisper shut down in 2021 and Swarm took over its communication functionality. Source: vitalik.eth.limo*

According to Vitalik Buterin, unlike himself who initially saw Ethereum as “Bitcoin plus smart contracts,” Gavin Wood thought about it more broadly as one of a set of technologies that could together form the base layer of a more open internet stack. It was Vitalik Buterin who came up with the protocol tags eth for Ethereum, shh for Whisper, and bzz for Swarm. Together with Jeffrey Wilcke, Wood and Buterin opened the floodgate of bee jokes and geek humor that continues to date.

## First Public Appearance

![Ethereum London meetup, May 2014](/uploads/og3.png)
*Ethereum London meetup, May 2014*

On 9 May, 2014, at the [Ethereum London meetup](https://www.meetup.com), Gavin Wood who was Ethereum CTO at the time presented the speech “The Ethereum Experience”. There he provided the latest development updates, early UI mockups, and the extensive overview of Ethereum and how it could fit in a zero-trust, decentralized Web 3.0 model as part of an ecosystem of decentralized content distribution, messaging, and networking. This was the first public appearance of Swarm!

![Features of Swarm](/uploads/og4.jpeg)
*Features of Swarm*

According to Dr. Wood, Swarm was thought to be a place for publication where creators can share their content and others can reshare it for free. “To some degree, there are already technologies that provide these: not so much for the Ethereum thing, for Whisper there’s things already like Bitmessage, for Swarm there’s BitTorrent. But we really want to do something better. We want to push the boat, make it proper.”

![Advantages of Swarm compared to other solutions](/uploads/og5.jpeg)
*Advantages of Swarm compared to other solutions*

Unlike BitTorrent, Swarm would provide encryption, so that the nodes that host information were protected from censorship, would be more flexible, and provide incentives. In its semi-permanent storage, users could store their data for as long as they wish to. Next up, Ethereum and Swarm started to take shape.

![ÐΞVcon-0. Source: archive.devcon.org](/uploads/og6.jpeg)
*ÐΞVcon-0. Source: archive.devcon.org*

[Devcon 0](https://archive.devcon.org) (ÐΞVcon-0) that happened in Berlin in late November 2014 was the first developer conference for Ethereum and Swarm. Long prior to the launch of Ethereum, the earliest builders and co-founders gathered in the Kreuzberg neighborhood to outline their work and designs for the future of Ethereum. It is a great resource to learn about the historical context and the early ethos of the project.

![Devcon 0: Vitalik Buterin and Gavin Wood are hugging](/uploads/og7.png)
*Devcon 0: Vitalik Buterin and Gavin Wood are hugging (in the centre, below). Viktor Trón (first from left, below) and Dániel Nagy (fourth from left, up) among the initial Ethereum team. Source: medium.com/ethereum-swarm*

Since late 2014, Dániel Nagy has started working on Swarm. You can watch Dániel’s presentation [Keeping the Public Record Safe and Accessible](https://archive.devcon.org) at Devcon 0 where he put forward the initial technical considerations for the project. The Swarm team focused on the following:

- a solution characterized by integrity (keeping the information immutable), permanence (impossibility to delete), resilience, speed, and optimal utilization of available resources (network, storage, and power)
- low latency rather than high throughput
- small pieces of data: the vast majority of data (e.g., parts of a state, transactions, and contracts) fits one 4 KB chunk
- Kademlia rather than ad-hoc network topology to achieve centrality for each network node
- nodes in a neighborhood redundantly store what’s close to them; the farther the data, the sooner it will be erased.

![Swarm](/uploads/og8.png)
*Source: ethswarm.org*

The above surely qualifies as basic prerequisites to build a decentralized service to host unstoppable data! With those in mind, the Ethereum masterminds went on to implement the native blockchain-based storage infrastructure.

## First Realization

In 2015, Viktor Trón and Dániel Nagy [took over Swarm development](https://medium.com) within the Ethereum Foundation’s Geth team. They began to realize the resilient serverless infrastructure with censorship resistance and zero downtime to match the “decentralized CPU” Ethereum came to be so as to create the cypherpunk decentralized internet Gavin Wood called “web3”.

![Satoshi Nakamoto quote](/uploads/og9.png)

Ethereum held an ICO in summer of 2014 and launched its first version Frontier in July 2015. It wasn’t until [geth 1.5](https://blog.ethereum.org) in late 2016 when the first public pilot of Swarm made it to the official go-ethereum release as an experimental feature and its testnet connected to the Ropsten testnet. This release brought about the following:

- bandwidth accounting using the Swarm Accounting Protocol (SWAP): anyone can use Swarm for free, as long as they provide services to their peers or wish to wait until they gather enough credit
- immutable hash-based addressing: once a document is published under a fixed address, there is no way you can overwrite or change its content
- domain name resolution on blockchain and storage of all data off the Ethereum chain
- data chunk syncing to multiple nodes: anything uploaded to Swarm cannot be unseen, unpublished, revoked or removed.

![Swarm ICO](/uploads/og10.png)

This pilot started a long way towards Swarm’s independence from the Ethereum Foundation and later a full-featured release on its own mainnet in 2021. Thanks to blockchain-based incentives, the serverless infrastructure of Swarm solved the pain points of previous serverless solutions that had to rely on the altruistic contribution of participants and were vulnerable due to the possibility of free riding.

![Swarm tweet](/uploads/og11.png)

Swarm allows for upload and disappear, which means that any node can just upload content to Swarm and then go offline. As long as nodes do not drop out or become unavailable, the content will still be accessible due to redundant synchronization between nodes.

## Outro

This is how the great journey of Swarm started. By the way, this journey recently got [even more exciting](https://bitcoinworld.co.in): Swarm finalized its 2.0 roadmap, shut down the bonding curve mechanism after a community governance vote, and introduced erasure coding and a self-sufficient price oracle. This move opens a new chapter for the project’s growth.

![Swarm community X account](/uploads/og12.png)

If you wish to share this journey with Swarm, follow the community-run [announcement channel](https://t.me) to get notifications about new articles and all the Swarm updates. Also follow [Beelon Musk](https://twitter.com) on X to get a taste of that bee humor. See you soon!
