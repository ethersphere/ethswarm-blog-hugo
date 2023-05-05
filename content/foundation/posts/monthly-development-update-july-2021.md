+++
banner = ""
categories = ["Development updates"]
date = 2021-08-11T04:00:00Z
description = "July was paved with learning for the Swarm team. The Swarm 1.0 release was deployed to the mainnet for the first time and close observation on performance, bugs, and stability issues was needed to make sure everything is working as it should."
references_and_footnotes = []
title = "Monthly Development Update — July 2021"

+++

July was paved with learning for the Swarm team. The Swarm 1.0 release was deployed to the mainnet for the first time and close observation on performance, bugs, and stability issues was needed to make sure everything is working as it should.

Thanks to the wonderful community of the Bee node operators who diligently gave their feedback at our Discord channels, the team was able to address the most important issues and is soon rolling out Bee v1.1.0 to the testnet.

Read more on what else was going on in July here below.

## **Bee Track**

1\.) Bee v1.1.0 release candidate is going into the testnet with many new improvements, namely:

- New dev mode making it easier to build on top of Swarm
- Lots of improvements on the protocol level that should greatly improve the user experience on the network
- Quite a few bugs that were lurking in the darkness

2\.) Bee-clef v0.6.0 released

## **DevOps Track**

- Deployment of a new version of [Swarm Gateway](https://gateway.ethswarm.org/).
- Deployment of the [Bee Airdrop](https://airdrop.ethswarm.org/).
- Released a new version of [Bee Helm chart](https://github.com/ethersphere/helm/tree/master/charts/bee) (v0.10.6).
- Released a new version of [Ethproxy Helm chart](https://github.com/ethersphere/helm/tree/master/charts/ethproxy) (v0.1.1).
- Released a new version of [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.7.12) with testnet auto funding.

## **JS Track**

1\.) Released a new version of [Bee-js](https://github.com/ethersphere/bee-js) (1.1)

- added hooks API to the HTTP requests (this makes the — curl option possible in Swarm-cli)
- added missing Tag endpoints

2\.) Released a new version of [Swarm CLI](https://github.com/ethersphere/swarm-cli), the latest is 1.2

- added auto-complete to all commands and options
- added — curl option to print out HTTP requests as curl commands
- added topology info to status command
- improved the displayed colors for enhanced readability
- other bug fixes and improvements for better user experience
