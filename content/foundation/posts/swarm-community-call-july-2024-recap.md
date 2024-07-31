+++
banner = "/uploads/swarm-community-call-july-2024-recap.jpg"
images = [ "/uploads/swarm-community-call-july-2024-recap.jpg" ]
categories = [ "Events" ]
date = 2024-07-30T00:00:00.000Z
description = "July’s Swarm Community Call brought exciting updates on node operator incentives and usability, multi-chain support plans and community-developed optimised chunk production for compact usage of postage buckets."
references_and_footnotes = [ ]
title = "Swarm Community Call, 25 July – Recap"
_template = "post"
+++


July’s Swarm Community Call brought exciting updates on node operator incentives and usability, multi-chain support plans and community-developed optimised chunk production for compact usage of postage buckets.


## Incentives for node operators – stake withdrawal mechanism, neighbourhood hopping and network balance

The upcoming Bee 2.2 release will introduce an important stake withdrawal mechanism as well as the so-called neighbourhood hopping feature, considered as improvement proposals – Swip 20 and 19 respectively. 

In the past, node operators had to lock 10 BZZs without being able to withdraw them, which created opportunity cost and an attack vector. The new system introduces the concept of 'committed stake':



* The minimum requirement (it will likely remain 10 BZZ) now corresponds to a committed stake, which is based on the current price of storage in the network.
* If the BZZ price rises, the operators can withdraw the surplus share and thus benefit from the price increase. If the BZZ price falls, the operators are protected.


"We are only there to give you the benefit of the upswing. We're not taking anything away from you if it goes down," 

Callum Toner from the Research Track added. This change aims to make operating a node more attractive and flexible for long-term participants.

Another such feature aimed at improving the node operators’ experience, while also allowing for improved overall network performance, is the upcoming Swarm Improvement Proposal for neighbourhood hopping, presented by Niki Papadatou.

This will allow staked nodes to move between neighbourhoods, increasing their chances of earning rewards. The solution comes at a time when the network is extremely overpopulated in some neighbourhoods (100+ nodes), while others are virtually empty (up to two nodes), while Swarm is experiencing noticeable growth with more than 20k nodes now in the network.

The release of Bee 2.2 will allow node operators a lot of movement with the aim of balancing the network better. Of course, node operators will have to do some work, such as using statistics to decide if and where they should “hop” to for optimal rewards.


## In Focus: Multi-chain support – A game-changing development

The plans for **[Swarm’s multi-chain support](https://streameth.org/swarm/watch?session=66756de10d49d6570f11fcae)** present a new major milestone for the network. The goal is to allow **users from any blockchain and with any token to interact seamlessly with Swarm,** Callum explained. This will remove the current friction barriers and extend the reach of the Swarm ecosystem. **Users will be able to buy storage with their preferred token and chain, while Swarm handles swaps, bridging and transactions in the background.**

The Research Track has already finalised the specifications for an MVP and is ready to start development. The initial implementation will utilise existing liquidity and bridging sources to support multiple chains from day one, with a focus on security and broad compatibility.

This development promises to significantly improve Swarm's accessibility and integration across different blockchain ecosystems.


## Community Talk:  Postage batch and upload times optimisation

[Mirko Da Corte and Sergio Marchese from Etherna](https://streameth.org/swarm/watch?session=6674270207f92b086c420740) ended the presentation part of the call with their new tooling for optimising postage batch usage and improving upload times in Swarm. They addressed two main issues: the under-optimised use of postage batches and improvement of upload times.

As Mirko explained, their approach involves encrypting each chunk with a deterministic encryption key that allows users to specify a "compact level" between 0 and 2^16. This allows files to be uploaded with different levels of compaction, which reduces upload costs. To address slow upload times, they have also implemented asynchronous chunk hashing, using different tasks for each CPU core.

The results of this innovative approach are remarkable. Da Corte reported a cost reduction of two to four times compared to uploads without compaction. Upload speeds also improved dramatically, becoming six to nine times faster, even with maximum compaction enabled. Importantly, the algorithm can converge with any starting bucket, so files can be uploaded with different levels of compaction, without any compaction, or with a mixture of approaches.

Da Corte announced that the system will be further improved to reduce costs even more. In the spirit of open collaboration, all technical details of their research are published as issues on the [Bee GitHub repository](https://github.com/ethersphere). This allows for community discussion and possible integration of these optimisations into the Swarm ecosystem.

**The next Swarm Community Call will be held on 29 August –** [add to calendar](https://www.addevent.com/event/fo22320451). You are welcome to post any questions to the Team at this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3) in the meantime; all  questions received are answered live at the Calls. 








