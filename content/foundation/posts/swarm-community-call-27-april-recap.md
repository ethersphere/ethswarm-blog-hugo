+++
banner = "/uploads/SCC-recap-april.png"
images = [ "/uploads/SCC-recap-april.png" ]
categories = [ "Events" ]
date = 2023-05-07T22:00:00.000Z
description = "The April Swarm Community Call was focused on tools that provide a more numbers-based look at the Swarm network, and on easy publishing of unstoppable content on Swarm."
references_and_footnotes = [ ]
title = "Swarm Community Call, 27 April — Recap"
_template = "post"
+++

The April Swarm Community Call was focused on tools that provide a more numbers-based look at the Swarm network, and on easy publishing of unstoppable content on Swarm.

In the introductory part of the call, Callum Toner first shared some network-wide updates that will be released in the coming days and weeks. Bee version 1.15 has been released, which addresses some of the known optimisations. This has resulted in the new version having a current error rate of 0%, with > 83% of the network size. You can also expect the introduction of new hardware, network & system and requirements for entering storage incentives.

On the research side, the final PRs have been drafted for the localstore rewrite and is currently being tested in a 1000-node private test environment to get a better insight into its behaviour

A test environment is also being set up for Phase 4 of the storage incentives roadmap as well, alongside ongoing research into the price oracle and how it performs in conjunction with storage incentives in a test environment.

## The Schelling game statistics data is now available along with wider network figures

The call was also an opportunity for Gyuri Barabás to introduce a new statistics tool for the Swarm network. The tool provides a variety of data about the Schelling game. This includes **data on revealers, distribution of skipped rounds, rewards, notes and stakes**. With this tool, you can retrieve historical in-depth data, such as the **total amount of rewards paid out in a specific neighbourhood, a custom period for the range of rounds, the number of winning events, the average number of revealers per neighbourhood, the neighbourhood depth**...

The tool is particularly useful for node operators, who can use it to optimise their reward strategy. If you have suggestions or ideas on what else could be added to the tool, you can leave him your feedback in the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286).

All data analysed by the new tool is gathered from [Swarm scan](https://swarmscan.io/), a complementary tool initially developed for Swarm's internal needs. As Janoš Guljaš explained, Swarm scan is basically a stripped-down node that acts as a network scrapper. It collects network data and presents it in a structured way, either as a web page or as HTTP API.

Swarm scan provides a visual representation of the network via a world map and the connections between nodes on that map. You can also quickly see the number of active nodes, new nodes, new staking nodes, the amount of staked value and the storage price. Note that the data here is only a rough estimate due to the size of the network.

While the website provides limited data, what the API provides is much more diverse (see the API description for more information). You can get **a list of the nodes in the network, information about a particular node, the user agent, whether a node has changed from light to full and even get the complete dump of the network **for offline analysis.

If you want to optimise your reward strategy, mfw78, a member of the Swarm Foundation's Discord community, has developed [a tool for mining overlay addresses](https://github.com/rndlabs/swarm-tools-rs). It allows node operators to participate in the Schelling game in different network neighbourhoods and thus optimise their performance. [You can find the recommended article with instructions here](https://mirror.xyz/mfw78.eth/6izrHbhaANY-WuBQsCJbYMyevjQQqdnfJ3sjBhI0rL0).

## Unstoppable content on Swarm with Etherjot

In the second part of the call, it was time for Áron Soós to demonstrate **[Etherjot](https://github.com/Cafe137/etherjot)**, **a CLI tool for creating blogs and publishing markdown files as articles**, a first such tool for Swarm. It uses a small set of simple commands to manage blogs and supports importing existing blogs written in Jekyll or Hugo. Áron announced four more features for the near future, including: design and layout customisation, decentralised commenting, searching through the blog content, and multiple blog management.

## Join Swarm Summit from 21–23 June

After a two-year covid-induced hiatus, **[Swarm Summit](https://summit.ethswarm.org/)** is also back on the agenda, albeit in an online format. If you are using Swarm to power your project, click on the link above and submit a paper. From **21–23 June 2023**, you can present your work to the Swarm community. The talks can be about anything Swarm-related—a tool or dApp that uses Swarm, a deep dive into one of Swarm's features, or even an inspirational talk.

We look forward to seeing you there, and you can also join us live at one of the viewing parties happening in real life. More information will be announced at the **next Swarm Community Call on 25 May**.

The next Swarm Community Call will be held on 25 May at 17.00 CET on the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286) ([add to calendar](https://www.addevent.com/event/lP17043997)). Already have a question for the teams building the Swarm network? Send them a question by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3).

We are looking forward to seeing you there!
