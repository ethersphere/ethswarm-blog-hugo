+++
banner = "/uploads/grassroots.webp"
categories = ["Grants"]
date = 2021-11-04T23:00:00Z
description = "Community Inclusion Currencies to Reignite Economic Activity"
draft = true
references_and_footnotes = []
title = "Deep Dive: Grassroots Economics"

+++
A common trend one finds in developing countries is a lack of money, lack of investment and excess capital ownership in what many would deem an unstable market. When you step away from the macro-outlook and dive deeper into the local person’s day-to-day activity, you will find goods and services available at every corner. However, what is stifling the people in that city, town or village is that they lack a medium of exchange in times of crisis.

Without money moving throughout these ecosystems, you will often find Person A wanting goods/services from Person B but no inherent need for Person A’s goods/services to give in exchange. The reciprocal system of exchanging value is lost in a centralised system of government-owned funds in times of economic crisis.

[Grassroots Economics](https://www.grassrootseconomics.org/) is a non-profit foundation that has been seeking to empower marginalised communities to take charge of their own livelihoods and economic future since 2010. By introducing an age-old model of exchange that was long forgotten despite its known success, credit obligations or, put simply, IOU vouchers turn stagnant, non-fungible debt into something that is tradeable and fungible. Grassroots refers to this as Community Inclusion Currencies (CICs).

![Will Ruddick in Kenya](https://miro.medium.com/max/700/1*-pKRjbj-kGFB12VqZiIAQQ.jpeg "Will Ruddick in Kenya" =700x700)

## How Grassroots Economics was Incepted

Founder [Will Ruddick](https://www.linkedin.com/in/willruddick/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAC2t3IB676Qf9-d05od0vTveX3ho_qlyjI) was a peace corps volunteer in Kenya but had been studying alternative currencies for well over 10 years prior to Grassroots’ inception. Will had worked on agent-based modelling before diving deeper into economics and the contemporary history of Money. When Will came to understand how the value of issuance models had been used to lead to the establishment of various currencies, the idea of trusted credit being used as a currency was a recurring theme in his findings; a means that worked incredibly well but was forgotten in the modern era of money. Former Swarm member and now senior software developer at Grassroots Economics Louis Holbrook met Will in Japan where they shared the same philosophy to solve the economic problems faced in places like Kenya. Such values can be seen across their work as Grassroots Economics seeks to empower everyone as individuals by remaining open-sourced, against disintermediation, and against the corporate models that have a dehumanising effect on the world.

## How do Community Inclusion Currencies Work?

Please see this short explainer video: [Community Inclusion Currency — Animated](https://youtu.be/vJL9-FFleow)

[![](https://miro.medium.com/max/700/1*oyNUvmonTzMQe7AFUBjT2g.png =700x393)](https://www.youtube.com/watch?v=vJL9-FFleow "Short explainer video")

Short explainer video

Money was meant to be a simple agreement between people, and Grassroots Economics has been equipping those with the practical application of using money through agreements known as credit obligations. In other words, using credit obligations that are assignable to people to be used against the future production of goods and services.

These credit obligations are created as tokens on the blockchain making the token and credit obligation inseparable, immutable and decentralised by design. The proof that these are in fact credit obligations is in the storage of the information held on [Swarm](https://www.ethswarm.org/). In short, the token acts as a credit obligation that is tradeable but the key attributes such as PDF contracts/agreements are accessible on Swarm. Beyond this, there is a need for proof of what people are selling such as saying they are selling water, or doing carbon sequestration — things like photos and data analysis need to be accessed and stored on-chain on a decentralised storage platform like Swarm.

With Grassroots keeping everything open-source and free, their aim is to allow users to freely transact with their CIC tokens across multiple ledgers with the ability to eventually link these ledgers together in a cost-effective manner. At the moment they are running small side-chains with universities rather than larger blockchains until such time that they can be linked together. Grassroots Economics is not set on using one particular blockchain but instead wants users to have the ability to move across multiple networks to prevent any rent-seeking and/or vendor lock-in behaviour. Tying the CICs together with other cryptocurrency tokens via liquidity pools on Decentralised Exchanges is one of the team’s biggest focuses at the moment, as this will allow a local credit system to find liquidity among a market of other such systems — forming a decentralised economic system.

If you would like to learn how Blockchain Community Currencies are impacting the lives of people today, please [read the following research paper.](https://1fce7114-8e4a-43c5-bcbd-d2b877364fde.filesusr.com/ugd/2fc0ed_89375097898f445bb976f303f5b8ee01.pdf)

![](https://miro.medium.com/max/657/1*7O8FE3G_jchxXj3hH7jMCA.png =657x275)

How the Team is Integrating with Swarm

The Grassroots Economics team have created some lower-end tooling which they built as the first part of their grant. This is the BMT hasher, file hasher and single-owner-chunk compiler in C, wrapped with python and with a POC wasm example which can be found here: [https://gitlab.com/smallswarm](https://gitlab.com/smallswarm "https://gitlab.com/smallswarm"). This forms part of their long-term goal to integrate with Swarm on low-end infrastructure (outdated and low-performance hardware) as the design challenges in rural areas is where the team’s main focus lies.

The development team is also looking to write a request multiplexer which will allow the

client to define a prioritised sequence of network endpoints to request against. The requests may also be offset in time. They will use this to implement fallbacks both to a separate (private) Swarm network as well as web2 mirrors for their content. The reason for this approach is because Grassroots already have a good amount of active users in their network which will require them to secure a minimum quality of service for them, while Swarm itself is still considered experimental at this stage.

_“I imagine this will be a useful tool for anyone wanting to gradually integrate web3 data availability solutions, as it essentially enables you to keep one foot on each side, so to speak. The working title of this project is “fadafada.” — Louis Holbrook, Lead Developer of Grassroots Economics_

## Features to Look Forward To

Grassroots Economics will soon be deploying a new custodial key management system that allows communities to create their own CIC via smart contracts on an EVM blockchain. By creating their own CIC, they are creating a credit against their future production that will be circulated internally and externally in the community. The CIC smart contract stores the information about the token issuer and determines the expiration rate, while their USSD interface enables users to access their blockchain wallet and transfer tokens. By using liquidity pools, these CICs can be connected to each other. For a deeper understanding of how this can work, please [read this article](https://www.grassrootseconomics.org/post/static-vs-bonded-liquidity-pools-for-cics). Besides CICs being redeemable for goods and services, they can also be used to support or buy data products or verified claims such as carbon offsets or Sustainable Development Impacts from the community creating them.

  
![](https://miro.medium.com/max/700/0*ApWW8xvkfdv6_JGZ =700x393)Conclusion

As each week passes, Grassroots Economics is edging ever closer to realising their goal of empowering those in need to engage in economic activity without intermediation or third-party dependencies. In the coming months, their new code will be launched to facilitate the connection of their many systems held in isolation via their own side-chains such as connecting village tokens to the Ethereum network. There is clearly a need for something like Community Inclusion Currencies as the research speaks for itself. Grassroots Economics has pioneered a solution around something with immense infrastructure design challenges but is moving forward with over 50,000 active users and still growing.

_Disclaimer: The Deep Dive blog posts are an informative overview of some of the initiatives who build on Swarm and take ownership of the protocol. Projects subject to Deep Dives are independent and autonomous from the Swarm Foundation and Association. Sometimes they are their grantees, but their work is neither audited or endorsed by the aforementioned organisations. Use at your own risk, due your own due diligence._

## Join Swarm’s community

* Follow community news on[ **this Twitter**](https://twitter.com/ethswarmhive), and development news[ **here**](https://twitter.com/ethswarm).
* Discussions about Swarm can be found on[ **Reddit**](https://www.reddit.com/r/ethswarm/).
* All tech support and other channels have moved to [**Discord**](https://discord.gg/wdghaQsGq5)!
* Please feel free to reach out via **info@ethswarm.org**
* Swarm up your inbox with the monthly newsletter![ **Subscribe here**](https://www.ethswarm.org/newsletter.html).
* Subscribe to [**Swarm’s YouTube channel**](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos).