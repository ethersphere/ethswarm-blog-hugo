+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2020-12-06T16:00:00.000Z
description = "November has been an important month for Swarm. Another milestone was met — the Swarm Live release. Improved performance, more stability, and polished features are just a few of the things this new release has to offer"
references_and_footnotes = [ ]
title = "Monthly Development Update — November 2020"
_template = "post"
+++

November has been an important month for Swarm. Another milestone was met — the Swarm Live release. Improved performance, more stability, and polished features are just a few of the things this new release has to offer. The release was celebrated with an online event where the team explained in detail what is new and what can be done with it.

You can re-watch the event on the [Twitter live stream](https://twitter.com/ethswarm/status/1331219946865532929). Don’t miss all the interesting demos Edu from [DappNode explains how to install and run a Swarm Node](http://bit.ly/39MSrIz) with ease, Dan does a [zero-leak messaging demo](http://bit.ly/3orpAxx)) and especially, don’t miss [Rinke’s presentation on Swarm incentives](http://bit.ly/33MbuyJ).

- [See the Swarm live release notes](https://github.com/ethersphere/bee/releases).
- Re-watch the Swarm Live event on [Twitter](https://twitter.com/ethswarm/status/1331219946865532929) or [YouTube](https://youtu.be/Mdymc1p82qA?list=PL6fQnFAjtuY_E2e8AR0YGYGR7jES3g-QK&t=238).
- [Start your own Swarm Bee node](http://bit.ly/39MSrIz) and earn gBZZ.

**Core Track**

- Released [Bee v0.4.0](https://github.com/ethersphere/bee/releases/tag/v0.4.0)
- Fixed [data inconsistency](https://github.com/ethersphere/bee/pull/908) related to syncing and garbage collection
- Implemented [chunk traversal](https://github.com/ethersphere/bee/pull/924)
- Added [pinning and unpinning API endpoints](https://github.com/ethersphere/bee/pull/940) for bytes, files and collections
- Implemented [PSS Mailboxing](https://github.com/ethersphere/bee/pull/942)
- Added [init CLI command](https://github.com/ethersphere/bee/pull/944)
- Improved [pushsync retry](https://github.com/ethersphere/bee/pull/947) mechanism
- Call [notifypayment in goroutine](https://github.com/ethersphere/bee/pull/953) in SWAP
- Add API endpoint for [changing pin counter](https://github.com/ethersphere/bee/pull/957)
- [Retry on balance check](https://github.com/ethersphere/bee/pull/965)
- [Surplus balances for peers, debug API addons](https://github.com/ethersphere/bee/pull/972)
- Add [PSS dedicated private key](https://github.com/ethersphere/bee/pull/980)
- Add [PSS WS API CORS check](https://github.com/ethersphere/bee/pull/988)
- Forbid [PSS API in the gateway mode](https://github.com/ethersphere/bee/pull/1004)

**DevOps Track**

- Deployed [Bee](https://github.com/ethersphere/bee) (v0.4.0) to public cluster.
- Published Bee **deb** and **rpm** packages for easy installation as a service on Debian- and Centos-based distributions.
- Published Bee to Homebrew for easy installation as a service on MacOS.
- Released a new version of [Bee Helm chart](https://github.com/ethersphere/helm/tree/master/charts/bee) (v0.6.0).
- Released a new version of [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.4.0) with support for Kubernetes API and commands to start standalone Bee nodes or Bee clusters on a Kubernetes cluster.
- Updated [bee-staging](https://github.com/ethersphere/bee-staging) and [bee-local](https://github.com/ethersphere/bee-local) repos to support the latest Bee/Beekeeper versions.
- Migrated and published a new version of the **ethswarm.org** website.

**Holistic Track**

- The newly forming Javascript team is consolidating the roadmap.

**Events Track**

- 24 November 2020 — the Swarm Live release was accompanied by an online event, where the team explained in detail what this release is and what can be done with it.

**Swarm Grants Track**

- The third wave of Swarm grants was announced at the Swarm Live event. If you missed your chance before, hurry up and [apply for a grant now](https://swarmgrants.typeform.com/to/O3qL6VdO).

**Jobs Track**

Swarm is hiring! We are looking for

- [Senior Go Developer, Core Team](https://swarm-gateways.net/bzz:/a12043da4c1342887ba90a232757d15c8393d82276560ab8d3bea6219c8cd0d5/index.html)
- [Go Developer, Infrastructure Team](https://swarm-gateways.net/bzz:/7a93476a87f4746a89e59059b5ebe50d4b5500fb9ea4ccff6b60006c7aea2b7c/index.html)
- [Cloud Ops Engineer](https://swarm-gateways.net/bzz:/d61254ce08341096d543041eed10d23cd3f019ae5295406bb73a3951f368e0ac/index.html)
