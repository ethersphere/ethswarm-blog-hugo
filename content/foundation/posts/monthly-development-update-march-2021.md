+++
banner = ""
categories = ["Development Updates"]
date = 2021-04-09T04:00:00Z
description = "March was as busy as always. The team was focusing on bug fixes and performance enhancements. A new version of the bee-js was released and a new Swarm release is around the corner, too."
references_and_footnotes = []
title = "Monthly Development Update — March 2021"

+++
March was as busy as always. The team was focusing on bug fixes and performance enhancements. A new version of the bee-js was released and a new Swarm release is around the corner, too.

Important — with the next Swarm release, some major changes will happen. If you are running a Bee node, please follow our communication channels closely as you will need to update your nodes if you want them to continue working properly.

## **Bee Track**

* Released [Bee v0.5.3](https://github.com/ethersphere/bee/releases/tag/v0.5.3)
* Started onboarding of 4 new developers to the Bee team
* Worked on variable pricing:

1. [Merged](https://github.com/ethersphere/bee/pull/1134) changes needed to communicate prices
2. Started work on [price-based routing](https://github.com/ethersphere/bee/issues/1272)

* Merged [variable pricing](https://github.com/ethersphere/bee/issues/134) to master
* Cleanups on postage stamps (currently in [storage incentives branch](https://github.com/ethersphere/bee/tree/storage-incentives))
* Started working on [light nodes](https://github.com/ethersphere/bee/issues/1242)
* Started working on[ removing /files endpoint in favour of allowing single file upload and retrieval via /bzz](https://github.com/ethersphere/bee/issues/1444)
* Ramping up our attention to testing; manual tests, integration testing, visibility via metrics, stress testing and more

## **DevOps Track**

* Deployed [Bee](https://github.com/ethersphere/bee) (v0.5.3) to public cluster.
* Released a new version of [Bee Helm chart](https://github.com/ethersphere/helm/tree/master/charts/bee) (v0.7.0).
* Released a new version of [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.4.9) with dynamic cluster improvements.
* Released a new version of the [Geth Swap Helm chart](https://github.com/ethersphere/helm/tree/master/charts/geth-swap) (v0.1.11).
* Released [exportSwarmKey](https://github.com/ethersphere/exportSwarmKey) (v0.1.0).

## **JS Track**

* Released Bee-js Javascript client library [0.6.0](https://github.com/ethersphere/bee-js/releases/tag/v0.6.0) version that contains support for custom Ethereum signers (e.g. Metamask) and several bug fixes.
* Released [first alpha version](https://github.com/ethersphere/swarm-cli/releases/tag/v0.5.1) of Swarm-CLI, a command line tool for making Bee easier to use:

1. Upload files and folders to Bee
2. Upload to feeds
3. Import and export keys from Bee-clef, Metamask, etc

* Started working on a [Browser Extension](https://github.com/ethersphere/swarm-extension). Right now, it is a proof-of-concept tool to help us figure out a good model for creating and using decentralized applications in a browser.
* Also started working on a [Status UI](https://github.com/ethersphere/bee-status) for Bee. It is currently in alpha version, but it already beats using curl for certain tasks :)
* Contributors are welcome to all projects!

## **Ecosystem Track**

* We received many new grant applications. The submitted applications need to be reviewed and evaluated. After this is done, we will publish the list of new projects on our [Medium page](https://medium.com/ethereum-swarm).