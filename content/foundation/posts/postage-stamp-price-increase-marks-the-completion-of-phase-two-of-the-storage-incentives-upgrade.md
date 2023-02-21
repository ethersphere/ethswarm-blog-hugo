+++
banner = "/uploads/postage-stamp-img.png"
categories = ["Development updates"]
date = 2023-02-20T23:00:00Z
description = "Last December, the second phase of five of the storage incentives upgrade went live on the Gnosis Mainnet. This upgrade is a significant milestone in the development of the Swarm network, as it enables Swarm node operators to earn rewards in exchange for contributing their storage resources to the network. Since the upgrade, the incentives system is functioning smoothly, and rigorous testing of the incentives redistribution has shown that rewards are being distributed in accordance with the system’s intended design. During the roll-out and testing phase, postage stamp fees (which determine the amount of rewards paid to node operators) were set to be negligibly low, and now that the roll-out and testing is complete, postage stamp fees will be increased so that node operators can be meaningfully rewarded for the services they provide. The postage stamp price will increase from 4 PLUR/chunk/block to a fixed level of 24,000 PLUR/chunk/block."
references_and_footnotes = []
title = "Postage Stamp Price Increase Marks the Completion of Phase Two of the Storage Incentives Upgrade"

+++
Last December, the second phase of five of the storage incentives upgrade went live on the Gnosis Mainnet. This upgrade is a significant milestone in the development of the Swarm network, as it enables Swarm node operators to earn rewards in exchange for contributing their storage resources to the network. Since the upgrade, the incentives system is functioning smoothly, and rigorous testing of the incentives redistribution has shown that rewards are being distributed in accordance with the system’s intended design. During the roll-out and testing phase, postage stamp fees (which determine the amount of rewards paid to node operators) were set to be negligibly low, and now that the roll-out and testing is complete, postage stamp fees will be increased so that node operators can be meaningfully rewarded for the services they provide. The postage stamp price will increase from 4 PLUR/chunk/block to a fixed level of 24,000 PLUR/chunk/block.

## How Swarm storage incentives work

Swarm storage incentives are based on a collection of mechanisms which are designed to ensure that node operators are rewarded in accordance with the resources they provide to the network. These mechanisms include the postage stamp contract, redistribution contract, and staking contract, all of which went live on the mainnet as part of phases one and two. You can learn more about these different mechanisms and how they work together as part of Swarm storage incentives by watching [this talk](https://www.youtube.com/watch?v=OH18D_PKo9U&t=1454s) by Daniel Nagy at EthBerlin in 2022, and by reading Swarm Foundation’s blog [here](https://blog.ethswarm.org/foundation/2022/towards-the-world-computer.-the-swarm-network-upgrade-has-started./).

The above mentioned mechanisms together allow for nodes to participate in the Schelling game. The Schelling game is similar to consensus mechanisms commonly seen in blockchain networks and distributed software. It involves a multi-step process which begins with the commit step where nodes must each submit proof of the data chunks they are meant to be storing, followed by a reveal stage where all nodes reveal their proofs and check each other’s proofs. The process ends with a reward stage, where one of the honest nodes is picked as the winner based on chance weighted according to their amount of stake. This is a very brief generalisation of the process, and a more detailed description of it can be found on Swarm Foundation’s blog [here](https://blog.ethswarm.org/foundation/2022/monthly-ecosystem-call-29-september-2022-recap/).

![](/uploads/storage-incentives.png)

Caption: Swarm incentives mechanism

## Node operators will share in the redistribution of storage value

With the incentives system in place, the upcoming increase in postage stamp fees will significantly increase the earning potential for node operators. Calculating potential rewards for a node is relatively simple. Nodes are rewarded in proportion to the total storage rent paid between fee redistribution rounds as weighted by their amount of stake:

![](/uploads/storage_formula.png)

Caption: Expected reward formula

## Next steps – Phase three and the oracle based decentralised pricing mechanism

During the next phase of the storage incentives upgrade, a decentralised oracle will govern the pricing mechanism. Pricing will be done by a market-based mechanism, i.e. determined by supply and demand for network storage. This dynamic pricing mechanism will work to establish fair prices for users and content providers to upload, store, and fetch data from the network, and sufficient incentives for storage providers to continue providing their services to the network. You can read more about the details of the oracle[ here](https://blog.ethswarm.org/foundation/2022/the-mechanics-of-swarm-networks-storage-incentives/).