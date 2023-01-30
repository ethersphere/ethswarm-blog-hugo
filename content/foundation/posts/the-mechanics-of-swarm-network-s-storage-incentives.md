+++
banner = "/uploads/incentives.png"
categories = ["Development Updates"]
date = 2022-11-22T23:00:00Z
description = "An economically self-sustaining mechanism to gather storage operators."
draft = true
references_and_footnotes = []
title = "The Mechanics of Swarm network’s Storage Incentives"

+++
# **Introduction**

Historically, people had two choices when it came to hosting their data: they could either store it themselves or upload it to a trusted third party computer. Regarding the latter, the source of this trust is typically that the host — usually a corporation — is conducting a long term business requiring them to be reliable and reputable. On the other hand, self-hosting requires that one’s computer is online at all times, which is often not feasible.

A third choice in terms of data storage is becoming increasingly available today: decentralised storage solutions, where data is stored on strangers’ computers. For this model to work, **some incentive system must be implemented to prevent swamping the storage with excessive uploads on one hand and to encourage the provision of storage space on the other hand**. Indeed, the provision of storage has a cost attached to it. Thus, uploaders need to pay and storers need to earn something for the system to be self-sustainable.

This is in contrast to both centralised and self-hosted storage. A centralised provider, such as _dropbox_, can identify uploaders and impose limits on them without necessarily requiring payment. In case of self-hosted solutions, such as _bittorrent_, the seeder bears the costs of storing the content themselves and thus no further incentives are required. If the content is popular, other people might decide to seed it, in which case their motives are usually altruistic. However, since seeding happens by choice, no incentives are required to prevent the overuse of other people’s storage.

In the Swarm network, the token of accounting is BZZ, and the uploaders pay a rent to storers in proportion to the amount of storage space required and the duration of using it. **The rent is the same for all uploaders, and will change over time by the means of an on-chain rent oracle** that aims to balance the supply and demand for storage.

The rent is redistributed to storers at regular intervals in a probabilistic fashion, similarly to how validation rewards and transaction fees are paid in proof-of-stake consensus mechanisms.

In order to participate in the redistribution of BZZ from uploaders to storers, storers must first deposit a non-refundable **BZZ stake with a smart contract**. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules.

Hereunder, we will outline the various steps regarding payments and redistribution.

# **Uploader Payments**

In the Swarm network, content is uploaded and downloaded in small (at most 4 kB) chunks. Since it is not reasonable to pay for every chunk on-chain, payment for uploads is done in batches. When paying, the uploader registers a public key to which they have the corresponding private key and receives a batch ID.

When uploading a chunk, the uploader needs to sign each chunk together with the batch ID and some other metadata using the private key. This signature and the metadata together are called “postage stamps”, because of the analogy with mail. Postage stamps are evidence of payment affixed to the content to be stored. Upon completing the on-chain transaction of purchasing a batch, the batch balance is equal to the amount that was paid.

![](/uploads/stamp_batch.png)

Postage stamps are the unit for payments, gathered in a batch

With time, the storage rent is deducted from this balance in proportion to the size of the batch. When the balance reaches zero, the batch is said to have expired and is no longer considered paid for; it can be garbage collected by the storers.

Garbage collection is an action (process) defined in the protocol, which removes/deletes content with an expired batch from the network. It is a continually running process on storer nodes moving unpaid content from storage to cache where it can be overwritten with more profitable data.

Balances of batches that have not yet expired can be topped up at any time by anyone with BZZ. Thus, **one can maintain the continued availability of one’s data without having to run a Swarm node**, just by topping up the corresponding batch balances.

# **Storer Rewards**

The rent that is regularly deducted from batch balances across the whole network goes into the reward pot. At regular intervals, a redistribution round is held by a smart contract in which one storer will receive the reward pot, as long as they can log that they store the part of the content assigned to them by the protocol.

In order to participate in redistribution, storers need to do the following:

* **Join the network** and download all the data that the protocol assigns to them. They can only participate if they are fully synchronised with the network.
* **Deposit a stake** with the staking contract. There is a minimum staking requirement, presently 10 BZZ. It can change in the future.
* **Stay online and fully synced**, so that when a redistribution round comes, their node can check whether their neighbourhood (nodes that are assigned the same content to store) has been selected and if so, they can perform a certain calculation (a random sampling) on their content and submit the result to the redistribution contract. This happens in two phases (commit and reveal), so that the nodes cannot know the results of others’ calculations when committing to their own.
* Round length is estimated around 15 minutes, though it can be extended.

Amongst the nodes that agree with the correct result, one is chosen — with a probability in proportion to their stake — as the winner. The winner must execute an on-chain transaction claiming their reward, which is the entire pot of storage rent paid since the previous round, or even more, if the previous pot has not been claimed at that time.

![](/uploads/1-2.png)

The process of storage fees redistribution

The stake can be reused in future rounds, as long as the node does not violate the protocol (for example, by committing to a result, but then failing to reveal it). Protocol violations are addressed by freezing or slashing part or all of the stake.

The expected amount of the reward is:

![](/uploads/2-2.png)

The storage rent, in turn, is the product of the amount of storage rented and the rent price as determined by the rent oracle:

![](/uploads/3.webp)

# **The Rent Oracle**

With each round, a smart contract compares the amount of paid-for content and the amount of provided storage. If the resulting redundancy measure is within the acceptable range, the rent does not change. If there is too much content paid for, the rent goes up, if there is too much storage provided, the rent goes down.

Thus, if the rent is too low for storers to profitably participate, it will go up and if it is too high for uploaders to pay, it will go down. At the equilibrium, the rent will be such that there is roughly four times as much storage space provided as there is content paid for, **resulting in a fourfold redundancy of storage.**

Since a sizable number of storers can be expected to use cloud-based equipment, in order for them to stay profitable, the rent should be in the ballpark of what is charged by cloud storage providers, times the fourfold redundancy.

# Price adjustment

Even before the rent oracle becomes operational, the actual storage price will increase. The increase will be denominated in PLUR, which is the smallest unit of BZZ. The price will be raised from 4 PLUR/chunk/block to a fixed level of 6,000 PLUR/chunk/block corresponding to approximately 0.32 BZZ/gigabyte/month for postage stamps. **This will put the price of storing data in Swarm in the same ballpark as storing it in centralised cloud storage**, making it worthwhile for some node operators to provide storage services with a reasonable cost for uploaders.

This price adjustment is going to happen with the Phase 2 mainnet release and is going to be the last manual price adjustment before the decentralised rent oracle takes over.

# **Conclusions**

The Swarm network is currently operational, and with all the above outlined mechanisms in place, it will automatically enforce a balance between storage providers and storage users, becoming economically self-sustaining.

In the meantime, until the rent oracle becomes operational, a fixed rent in the right ballpark should encourage enough storers for the system to work without major subsidies.

We will continue this series with the mechanics of the rent oracle. Subscribe to our medium to receive all updates.

# Upcoming events

* To stay up to date with Swarm and be the first to hear updates, [join The Monthly Ecosystem Call](https://discord.com/channels/799027393297514537/966664551628161064), online, 24 November
* Winter Solstice Event, online, 21 December
* WAM Hackathon, online, 1–21 March 2023
* Swarm Summit, TBC, 21 June 2023