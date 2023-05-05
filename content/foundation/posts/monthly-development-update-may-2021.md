+++
banner = ""
categories = ["Development updates"]
date = 2021-06-15T04:00:00Z
description = "The last month has been very busy for the Swarm dev team. The Swarm v0.6 release has had exciting new features added. Some crucial changes have been made and Bee node operators need to update their nodes."
references_and_footnotes = []
title = "Monthly Development Update — May 2021"

+++

The last month has been very busy for the Swarm dev team. The Swarm v0.6 release has had exciting new features added. Some crucial changes have been made and Bee node operators need to update their nodes.

For more detailed information on what was going on last month, please read the track updates here below.

## **Bee Track**

- **Rolled out** [**Bee v0.6**](https://github.com/ethersphere/bee/releases/tag/v0.6.2)
  1\. Postage stamps
  2\. Light nodes
  3\. Bandwidth incentives time settlement
  4\. Re-implementation of our main API, all uploads and downloads now go via /bzz
  5\. Many improvements to harden the network
- **Preparations for rolling out Bee v1.0**
  1\. Bandwidth incentives price oracle
  2\. Only pay for bandwidth incentives as an originator node
  3\. Deployment of contracts on the final EVM-compatible main chain
  4\. Postage stamps indexing
  5\. More hardening improvements

## **DevOps Track**

- Released a new version of [Bee](https://github.com/ethersphere/bee) (v0.6.2).
- Released a new version of [Bee Helm chart](https://github.com/ethersphere/helm/tree/master/charts/bee) (v0.9.9).
- Released a new version of [Beekeeper Helm chart](https://github.com/ethersphere/helm/tree/master/charts/beekeeper) (v0.3.0).
- Released a new version of [Geth Swap Helm chart](https://github.com/ethersphere/helm/tree/master/charts/geth-swap) (v0.2.2).
- Released a new version of [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.7.0).
- Updated [bee-staging](https://github.com/ethersphere/bee-staging) and [bee-local](https://github.com/ethersphere/bee-local) repos to support the latest Bee and Beekeeper improvements.
- Upgrade of the Kubernetes infrastructure.
- DNSSec implementation.
- Migration of [www.ethswarm.org](http://www.ethswarm.org/) to the new infrastructure.
- New teammate onboarding.

## **JS Track**

- **Released three new versions of** [**Bee-js**](https://github.com/ethersphere/bee-js)**; the latest is 0.11. Highlights from the releases since the last update:
  **1. Added support for the latest version of Bee (0.6.2)
  2\. Added support for the new postage stamp feature
  3\. Improved error reporting
  4\. Reupload support
  5\. Pinning methods simplification
  6\. Gas price and limit support for transactions
- **Released three new versions of** [**Bee Dashboard**](https://github.com/ethersphere/bee-dashboard)**, the latest is 0.3.1.**
  1\. Added support for the latest version of Bee (0.6.2)
  2\. Added postage stamp support when uploading files
  3\. Fixed Windows and macOS compatibility issues
  4\. Improved documentation and troubleshooting for CORS setup
- **Released four new versions of** [**Swarm CLI**](https://github.com/ethersphere/swarm-cli)**, the latest is 0.9.0.**
  1\. Added support for the latest version of Bee (0.6.2)
  2\. Added postage stamp support
  3\. Added status command for checking node and connectivity status
  4\. Added pinning command with reupload support
  5\. Added cheque command for cheque book management
  6\. Improved user experience with better error reporting and interactive features
  7\. Improved compatibility with gateways

## **Research Track**

- Bonding curve parameters calculated for price continuity with the announced token sale price.
- Bonding curve documentation and source code [made available](https://github.com/ethersphere/bzzaar-contracts/)

## **Holistic Track**

- [Swarm Whitepaper](https://www.ethswarm.org/swarm-whitepaper.pdf)
- Price oracle heuristics
- Delayed eviction from reserve pruning on theoretical delayed unpin
