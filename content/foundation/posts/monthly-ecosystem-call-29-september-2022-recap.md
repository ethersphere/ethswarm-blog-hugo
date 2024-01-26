+++
banner = "/uploads/storage-incentives-ama.png"
images = [ "/uploads/storage-incentives-ama.png" ]
categories = [ "Events" ]
date = 2022-10-07T04:00:00.000Z
description = "The September Monthly Ecosystem Call was dedicated to storage incentives — their upgrade roadmap, specific launch dates and their different features, such as the price oracle."
references_and_footnotes = [ ]
title = "Monthly Ecosystem Call, 29 September 2022 — Recap"
_template = "post"
+++

The September Monthly Ecosystem Call was dedicated to storage incentives — their upgrade roadmap, specific launch dates and their different features, such as the price oracle.

First to take the virtual stage was **Attila Gazsó**, who first gave a short recap of the past month. Attila explained that the last few months of development have been marked by a more intensive collaboration between the research and development teams. The first result of this is the new Bee client v1.8.0, which introduced some [breaking changes to the network](https://medium.com/ethereum-swarm/breaking-changes-are-coming-to-the-swarm-network-4b740adcdef0) and some hotfixes soon after. This was Phase 1.

Coming soon are Phases 2 and 3, which, as Attila pointed out, will see real money flowing across the network. _“That’s why they require more care in order to deploy them,”_ he added. For this reason, both will first be deployed to Swarm network’s testnet.

# Testing of Phase 2 begins 7 October, expected to last about a month

Phase 2 will introduce staking and incentivisation for storing content. **It will begin on 7 October 2022,** and will first undergo a private testing phase before being deployed to the testnet. Based on Attila’s personal estimate, this should take about a month.

To participate in the testing phase, node operators will need to stake **a minimum of 1 Goerli BZZ. On mainnet** this will probably be **around 10 BZZ**, which can be lowered if BZZ becomes too expensive. However, he added, this would require breaking changes to the smart contract. There will be no maximum cap.

Therefore, by staking more, node operators can earn more, but it also means that they will be profitable later in the future, as Attila laid out the logic behind the incentivisation mechanism.

There will also be an **initial reserve size of 16GB,** meaning your node will only store this amount of data at first (16GB is approx. 4 million chunks).

# Staking and the Schelling game

Following Attila’s update, it was **Daniel A. Nagy’s** turn. His main topics were the Schelling game and staking. Daniel started out by outlining the basic functionality of the staking and redistribution mechanism. It follows the logic that if node operators want to earn rewards for storing data, they need to regularly prove it and also stake some BZZ as a way to keep them honest about it.

Once a stake has been deposited, it cannot be withdrawn, so node operators need to earn it back by providing services. Rewards for providing storage are redistributed in regular rounds via an algorithm. The latter first chooses a random neighbourhood (nodes that are supposed to store the same part of the content). Only nodes in that neighbourhood can participate in that particular round of the Schelling game.

# How a winner of the game is chosen

To win in this game, nodes must first agree on what they are storing. They do so by committing cryptographically on-chain to a result of a calculation that must be performed on the stored data. The calculation is a random chunk sampling where chunks are hashed with a certain random value, and that hash is the so-called reserve commitment, the reserve being a set of chunks that has been paid for to be stored.

Once nodes commit, they can’t change the data that they are going to reveal. This is the commit round. Next follows the reveal round where nodes reveal their results. If they refuse to reveal the result, then their stake is slashed.

Only one winner is chosen with a probability proportional to their stake. The larger the amount of stake that agrees on what the truth is, the more probable it is that the actual truth is going to be selected as the truth. From among those who agree with this, a winner is chosen with a probability proportional to their stake size. Stakes of nodes that don’t agree with the truth will initially be frozen so that they are unable to participate in future rounds for a certain amount of time.

_“But later on we might introduce even harsher punishments because the point of the Schelling game is that everyone agrees, since everyone is supposed to be storing the same data. Nodes should arrive at the same result if they are indeed storing the same data,”_ Daniel explained. It is also sensible, he added, for nodes to participate in the redistribution only once they are fully synced with the rest of the network.

# The rent oracle

After giving an overview of the redistribution process, he moved on to talk a bit more about the price oracle. The oracle tells the network what the rent in the BZZ/chunk/block is. If it is too low, uploaders will have more incentive to upload content to the network. There will also be fewer nodes participating, because the rent will be too low, leading to a glut of data and a fall in the redundancy.

Once this fall in redundancy is recognised through the Schelling game, it is a signal that the rent should increase. The converse also holds true. If the redundancy is too high, the rent should be decreased, since it discourages uploaders.

Based on these signals, the price oracle makes minor adjustments to the rent, Daniel concluded.

# Two awards for the “Wikipedia on Swarm” prize, 20k DAI left for improvements

For her part, **Costanza Gallo** had a special announcement — the winners of the 50,000 DAI “[Wikipedia on Swarm](http://gitcoin.co/issue/28926)” prize. The two awardees were chosen by a panel of judges from the Swarm Foundation, the Swarm Association, Fair Data Society, Kiwix, and the Wikipedia community.

The winners are:

- 1st prize (DAI 20,000) — [igar1991](https://gitcoin.co/igar1991)
- 2nd prize (DAI 10,000) — [rndlabs](https://github.com/rndlabs/fds-wikipedia)

This still leaves 20,000 DAI in the pot, Costanza pointed out, that will be used to refine the Wikipedia on Swarm. She finished her part with a demo of the [Wiki game](https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game) using the winning solution which utilises Wikipedia stored on the Swarm network.

# Swarm, Livepeer and NFTs — a winning combination

Finally, there was a guest appearance by **Pablo Voorvart**, who won this year’s “Freedom to Transact” prize at EthBerlin with his [**NFTsAreLive project**](https://devfolio.co/projects/nft-are-live-at-ethberlin-6f9a). _“The basic idea, which came from Chris Hobcroft, was that we wanted to give this platform to one of our friends at EthBerlin so he could stream his music without having to rely on a centralised streaming service like YouTube,”_ Pablo described how the project came to life.

They chose Livepeer as their decentralised streaming protocol and Swarm network for storing video player code. The NFT contract is a simple Solidity contract that points minted NFTs to a file in the Swarm network that contains video player code responsible for all the playback logic and interactions with Livepeer.

For the next couple of months, they will refine the concept and try to make an app that will easily deploy an NFT and let creators stream from their phone.

# Come to the next Monthly Ecosystem Call

The next Monthly Ecosystem Call will be on 27 October. You can look forward to:

- Announcement of the mainnet release dates for Phase 2 and Phase 3
- Strategies for stakers
- Updates from Devcon VI
- Updated from World Ethical Data Forum (WEDF)
- Nextcloud plugin demo
- WAM 2.0 announcement
