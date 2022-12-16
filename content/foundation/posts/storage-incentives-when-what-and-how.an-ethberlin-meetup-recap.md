+++
banner = "/uploads/ethberlin.jpeg"
categories = ["Events"]
date = 2022-09-22T04:00:00Z
description = "On 14 September 2022 the Swarm Foundation hosted a meetup titled “Storage incentives: The missing piece to make blockchains complete”. The event took place during EthBerlin at the famous c-bas"
references_and_footnotes = []
title = "Storage incentives — when, what and how. An EthBerlin meetup recap."

+++
![](/uploads/ethberlin.jpeg)

On 14 September 2022 the Swarm Foundation hosted a meetup titled “Storage incentives: The missing piece to make blockchains complete”. The event took place during EthBerlin at the famous c-base.

Below is a recap of the event, which you can also [**watch on YouTube**](https://youtu.be/OH18D_PKo9U).

The news that Swarm is preparing a major upgrade to the network started a buzz in the community well ahead of the meetup. No surprise then, that an eager crowd started to fill the seats of the dimly lit hall of the legendary Berlin c-base well before the event.

The venue couldn’t be more fitting. It has witnessed the birth of the German Pirate Party and it provides shelter for regular meetings of the local Wikipedia chapter. Now, it was privy to what could possibly be a new chapter in the global blockchain story — the revealing of the Swarm network upgrade roadmap. So when the crowd settled in nice and comfortable, it was time to get down to business.

![](/uploads/ethberlin-gregor.jpeg)

Striving for positive social impact

_“Swarm started out in “ancient” blockchain history with the goal to essentially become a public utility, a decentralised global data layer,”_ **Gregor Žavcer** began. Indeed, Swarm’s _raison d’être_ is to have a positive social impact.

The question that arises is how does one assess this impact and assure its materialisation? _“The only way for Swarm to do this is to look at what kind of an ecosystem is emerging on top of it,”_ Gregor added. It is not just about churning out code that computes at the end: _“ten years down the road we want to see good things happening,”_ he emphasised.

After this short introduction, he dove into what the crowd came to hear: the Swarm network upgrade.

# Upgrading storage incentives — what’s coming

In short, there will be **five phases** to the upgrade (you can expect a more detailed blog on the topic soon). [Phase 1 started on 13 September](https://ethswarm.medium.com/breaking-changes-are-coming-to-the-swarm-network-4b740adcdef0) with the breaking release of [Bee 1.8.0](https://github.com/ethersphere/bee/releases). This phase will be followed by four other phases that will **upgrade the storage incentives mechanism, recalibrate the network, change the storage price, introduce a decentralised price oracle and improve the overall state of the network**.

_“Each phase will take the Swarm network to a new level. Concrete updates to when these changes are happening will be communicated on the_ [_Monthly Ecosystem Call_](https://ethswarmhive.medium.com/monthly-ecosystem-call-25-august-2022-recap-3e312de074d9)_, which happens every last Thursday of the month,”_ Gregor announced.

# Swarm as the narrow waist of the fair data economy

In the next part of his presentation, he shifted the attention to the importance of the ecosystem: _“If the ecosystem reflects our positive social impact, then in a sense, Swarm without an ecosystem is meaningless,”_ Gregor pointed out and announced an **Ecosystem Toolkit release by year’s end**.

In this context, he shone a light on another aspect of Swarm network’s positive impact called “unbundling the app”. He highlighted the current paradigm on the Web and mobile phones: _“The apps convinced us that an app has everything. It needs to be the UI, it needs to be the algorithm, it needs to be the data.”_

The PC experience is completely different. You can use an app and save the data on your disk, or import that data into another app and use it there: _“There, the app is unbundled. On my mobile, I don’t see the data. It’s like poison to interoperability.”_ When we unbundle the app we can also pave the way to data privacy, interoperability and sovereignty. By enabling this shift in paradigm, “_Swarm acts as a narrow waist of the fair data economy that enables massive innovation on top and connects various data sources below”._

Therefore, the Swarm Foundation supports initiatives and projects that promote this shift in app design. Currently, this includes the [Fair Data Protocol](https://github.com/fairDataSociety) (FDP) and [Fairdrive](https://fairdrive.fairdatasociety.org/), which allow individuals to use their data meaningfully.

To round off his presentation, Gregor recapped the plans for the future:

* Creating a strong network that supports big file uploads
* Growing the ecosystem by promoting permissionless publishing, supporting NFT metadata storage and continuing with the Great Data Upload project
* Developing decentralised service networks and enabling fair data economy
* Increasing decentralisation in the ecosystem (launch of purposeful DAOs)
* Supporting [WAM (We Are Millions)](https://www.wearemillions.online/) hackathon
* Organising the Swarm Summit

# Why do we need decentralised storage and storage incentives?

Next under the spotlight was **Daniel A. Nagy**. Coincidentally or not, his signature Swarm-orange shirt played right into the c-base’s theme of orange arches that made the venue feel tailor-made for Swarm and its fans.

![](/uploads/ethberlin-swarm.jpeg)

Daniel began with a simple question: why do we need decentralised storage at all?

To which he responded: _“If we don’t have centralised pressure points, then there’s no single point to attack._ (…) _Decentralisation also represents a bulwark against what I like to call “Library of Alexandria” events when a lot of information is damaged or lost forever.”_

In this context, incentives are super important, he continued. By combining them with storage we can provide a more efficient allocation of storage resources. This means that those that want to bring more resources to the network will be incentivised to do so. Also, those that want to upload data will have to decide what is and what isn’t important. _“The goal is to upload as much content as possible while providing adequate redundancy… To put it bluntly, **uploaders should pay and storers should earn**,”_ he explained.

# What are storage incentives and how they’ll work

Daniel then explained what storage incentives are in more detail: These are a set of smart contracts on an EVM-compatible blockchain, in this case the Gnosis chain. They use Swarm network’s native token, BZZ, to charge uploaders and reward node operators. The redistribution of BZZ then unfolds in a Schelling game, which is “used to bring off-chain action and record it on-chain”.

How does this happen? Content uploaded to the Swarm network is broken down into 4KB chunks and divided up between nodes based on the content’s address (the first few bits of the content’s address). Nodes that are storing the same content form a neighbourhood.

The **reward redistribution process first selects a random neighbourhood** and a random sample of content from that neighbourhood. A calculation is then performed on that sample of content. Since nodes in the same neighbourhood store the same content, the result of the calculation should be the same for all nodes.

**Nodes that wish to participate in the redistribution must first stake BZZ** and then reveal the results of their calculation. Those that have the same result are eligible for a reward, but **only one node can win the entire pot**. The chances of a node winning the pot are proportional to the size of its stake. Nodes can also choose not to reveal their result. In this case, **they will first get their stake frozen (at the introductory phase of this mechanism) and later on slashed**.

The **winner will also pay for all the costs** associated with a particular round of the Schelling game. This includes the gas costs of slashing and transferring the payout to the winner.

According to Daniel, staking is a mechanism that encourages long-term participation because once an amount is staked, it cannot be withdrawn to discourage nodes from participating only when the rent is high. Clarifying the reasoning behind this, he said _“The more stake you have as a well-behaved node the more you contribute to keeping the rest in line, and to the security of the network”_.

# Uploading to Swarm and the economics behind it

**Uploaders, on the other hand, must pay to store their content in the Swarm network.** They can do that by buying postage stamps. Postage stamps are bought in batches on-chain, which registers the uploader’s private key and identity in the process.

The private key is needed for signing each uploaded chunk and provides evidence of an on-chain payment (all of this is done automatically). When a node encounters a chunk of data with an affixed postage stamp it can decide whether it has been paid for or not, and whether the postage stamp has expired.

The batch balances are regularly debited by rent until the balance goes to zero, at which point the batch expires and the content gets garbage collected, unless new postage stamps are bought. Regular payments are therefore required to keep the content available on the Swarm network. **The pricing follows a simple logic — the more and/or the longer you store content, the more expensive it will be.**

The rent expressed in BZZ/chunk/day is dynamically adjusted to reflect the conditions on the network. In times of large storage redundancy, the price of storage will decrease, causing some nodes to leave the network. If there is a shortage of storage capacity, the rent will go up. In turn, this will disincentivise uploads and incentivise new nodes to join the network, increasing available storage. _“This way, an equilibrium of supply and demand is maintained,”_ he concluded.

# Making Wikipedia censorship resistant on the Swarm network

![](/uploads/ethberlin-costanza.webp)

The last to take the stage was **Constanza Gallo** who introduced the crowd to the latest developments surrounding the [**“Wikipedia on Swarm” prize**](https://medium.com/ethereum-swarm/announcing-50k-dai-prize-to-make-wikipedia-unstoppable-91f60513a873). It’s an initiative led by the Fair Data Society to store Wikipedia on Swarm and make it available even when and where access to it is hindered.

At the beginning of her presentation, Constanza touched upon the ways Wikipedia can be and has been censored in the past, such as authorities pressuring editors to remove articles or censoring it on a technical level.

To counteract these attempts, [**Kiwix**](https://www.kiwix.org/en/) came up with a clever solution that lets you store Wikipedia offline, but it has limitations. It requires a lot of bandwidth and space on your computer. Storing it on the Swarm network would make it censorship-resistant and enable users to access it without having to download a large offline archive.

The 50,000 DAI prize set out to achieve just that by creating a mirror copy of Wikipedia on the Swarm network. Constanza demonstrated one of the submitted solutions to cheers and applause from the audience.

In this interactive demonstration and live testing, the public was prompted to suggest a page on Wikipedia, from which they would hop from page to page stored on Swarm. This journey took us from a page dedicated to music to Ethereum’s Wikipedia page.

Costanza concluded her talk by sharing a personal vision of Wikipedia being run by a dedicated DAO and its entire production environment moving to the Swarm network.

The talks were followed by a lively Q&A session which [**you can watch here**](https://youtu.be/OH18D_PKo9U?t=4516).

# Join Swarm’s community

* Follow community news on[ Twitter](https://twitter.com/ethswarmhive), and development news[ here](https://twitter.com/ethswarm).
* Discussions about Swarm can be found on[ Reddit](https://www.reddit.com/r/ethswarm/).
* All tech support and other channels have moved to[ Discord](https://discord.gg/wdghaQsGq5)!
* Please feel free to reach out via [info@ethswarm.org](mailto:info@ethswarm.org)
* Join the newsletter! [**Subscribe here**](https://www.ethswarm.org/newsletter.html).
* Subscribe to the[ Swarm Foundation YouTube channel](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos).