+++
banner = "/uploads/general-graphic-4.jpg"
images = [ "/uploads/general-graphic-4.jpg" ]
categories = [ "Development updates" ]
date = 2023-09-27T00:00:00.000Z
description = "Swarm’s storage incentives rollout has been moving forward at a healthy pace over the last few months. After rollout of the staking system in phase 2, phase 3 will be focused on the storage rent oracle. The oracle lays the technical foundation for the final two phases of the storage incentives rollout, and is vital to the overall functioning of the system."
references_and_footnotes = [ ]
title = "Oracle Boosts Swarm's Self-sustainability"
_template = "post"
slug="oracle-overview"
+++

Swarm’s storage incentives rollout has been moving forward at a healthy pace over the last few months. After rollout of the staking system in phase 2, phase 3 will be focused on the storage rent oracle. The oracle lays the technical foundation for the final two phases of the storage incentives rollout, and is vital to the overall functioning of the system. In order to understand what the oracle is and what purpose it serves, it’s necessary to first have an understanding of the general design and state of development of the incentives system.

## An introduction to Swarm’s storage incentives system

The goal of Swarm’s storage incentives system is to reward storage provider nodes for sharing their disk space with the network so that their disk space can be used by data owners who wish to upload their data. Rewards come in the form of payments made by uploaders for postage stamps. Postage stamps can be thought of as vouchers which entitle the holder to store a certain amount of data for a certain period on Swarm. Payments for postage stamps accumulate and are then redistributed to storage providers according to the [rules of the redistribution mechanism](https://blog.ethswarm.org/foundation/2022/monthly-ecosystem-call-29-september-2022-recap/).

The proper pricing of postage stamps is therefore vitally important to the smooth functioning of the storage incentives system. If the price is set too high, it will be too expensive for data storers to store their data on Swarm, if it’s set too low, then storage providers won’t be properly incentivised to share their disk space with the network.

Originally, postage stamp prices had been hard coded at a very low price. The price has since been [increased](https://blog.ethswarm.org/foundation/2023/postage-stamp-price-increases-as-swarm-network-reaches-milestone-of-self-sustainability/) from the negligibly low price of 4 PLUR/chunk/block to the much more significant price of 24,000 PLUR/chunk/block. While the hard coding of prices may be acceptable at this early stage of the development of the Swarm network, in the long run, a market-based pricing strategy is necessary. The storage rent oracle is the primary mechanism by which fair market-based pricing is achieved.

## What does this have to do with the oracle?

The job of the Oracle is to use publicly available data to properly set that price point. The oracle contract uses data from the redistribution smart contract in order to set the appropriate price for postage stamps. The redistribution contract is used to calculate a “utilisation signal”. This signal is an indicator of how much the Swarm network’s data storage capacity is being utilised. Specifically, the signal is a measure of data redundancy on the network. Redundancy is a measure of how many copies of each piece of data can be stored by the network. The protocol targets a fourfold level of data redundancy as a safe minimum.

As more and more data storers purchase stamps while the number of nodes remains constant, the data redundancy level will begin to fall as data storers’ available space begins to become reserved. If too many postage stamps are purchased without an equivalent increase in disk space shared by storage providers, the redundancy level may fall below four. In this case, the oracle will increase the price of postage stamps so that it becomes more expensive to store data on Swarm and already uploaded data will expire faster. The higher cost of storage will then lead to less postage stamps being purchased, and will push the redundancy level back up towards four.

Conversely, if the amount of postage stamps being purchased decreases while the number of storage provider nodes remains constant, the redundancy level will increase as there are fewer chunks of data to be distributed amongst the same number of nodes. In this case, the oracle will decrease the postage stamp price in order to promote more data owners to store their data on Swarm. The lower cost of storage will then lead to more postage stamps being purchased and push the redundancy level back down towards four.

Put simply, the oracle uses data redundancy as a measure of the utilisation of storage on the network. If redundancy is too high, it means the network is being under-utilised, so the oracle will decrease the cost of storage (postage stamps), while if redundancy is too low, it means that the network is being over-utilised, so the oracle will increase the cost of storage (postage stamps).

## Why is this important?

The oracle is vital to the long term success of the Swarm network as it establishes a pricing feedback mechanism where network activity is used to set prices that promote a healthy level of data redundancy on the network and fair prices for rewards paid to storage providers and prices paid by uploaders. It requires no input from any centralised individuals or organisations and therefore allows for the establishment of a self-sustaining economic system.
