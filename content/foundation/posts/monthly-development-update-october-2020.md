+++
banner = ""
categories = ["Development updates"]
date = 2020-11-05T16:00:00Z
description = "October was a very busy month for the Swarm team. While the developers worked hard on the Swarm Live release, which is to be announced on 24 November 2020, the comms team spent their time restructuring the way they work. The HR team was busy too and onboarded a few brilliant and experienced developers who will be a nice addition to the existing dev team."
references_and_footnotes = []
title = "Monthly Development Update — October 2020"

+++

October was a very busy month for the Swarm team. While the developers worked hard on the **Swarm Live release**, which **is to be announced on 24 November 2020**, the comms team spent their time restructuring the way they work. The HR team was busy too and onboarded a few brilliant and experienced developers who will be a nice addition to the existing dev team.

Read the full monthly update here below and **don’t miss the events section with the** [**RSVP link**](https://swarm-gateways.net/bzz:/live.swarm.eth/) to our upcoming online event.

**Core Track**

- More [resilient chunk retrieval](https://github.com/ethersphere/bee/pull/826) protocol in respect to slow peers.
- Improve [hashing performance](https://github.com/ethersphere/bee/pull/823).
- [NAT underlay address](https://github.com/ethersphere/bee/pull/820) is now exposed by Debug API.
- Reverse the [order of the queue](https://github.com/ethersphere/bee/pull/827) for push sync index and a small but important [bugfix](https://github.com/ethersphere/bee/pull/844) related to node shutdown.
- Implement [pin listing pagination](https://github.com/ethersphere/bee/pull/821).
- Handle an important [edge case](https://github.com/ethersphere/bee/pull/860) in the swap protocol.
- Various code cleanups and minor fixes.
- Developer package documentation improvements.

**DevOps Track**

- Deployed [Bee](https://github.com/ethersphere/bee) (v0.3.1) to public cluster.
- Released new version of [Bee Helm chart](https://github.com/ethersphere/helm/tree/master/charts/bee) (v0.5.16) with support for clef keys.
- Released new version of [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.3.4) with gc integration test and improved local pinning.
- Released new version [Beekeeper Helm chart](https://github.com/ethersphere/helm/tree/master/charts/beekeeper) (v0.1.7) that supports the latest Beekeeper version.
- Updated [bee-staging](https://github.com/ethersphere/bee-staging) and [bee-local](https://github.com/ethersphere/bee-local) repos to support the latest Bee/Beekeeper versions.
- Added support for /slash commands inside PRs.
- Enabled external signer (Clef) support for k8s installation.
- Configured scheduled automatic infrastructure testing on large clusters.

**Research Track**

- The update of the Book of Swarm is underway to align with the most up-to-date status of research and specs.

**Holistic Track**

- Implementation proposals have been written to complete the first phase of storage incentives with postage stamps; the major remaining feature for 1.0. Architecture and specs for the second phase are being finalised.
- Swarm is growing, and the first seminal hires for a strong Swarm Javascript team have been completed.

**Ecosystem Track**

- The second wave of Swarm grants was successfully closed. If you were too late with your application, [please RSVP to the Swarm Live event](https://swarm-gateways.net/bzz:/live.swarm.eth/) for information about the third wave of grants.

**Events Track**

- Swarm is happy to announce yet another important milestone on the roadmap — the **Swarm Live release**. This special occasion will be celebrated with another **online event**, where all the new, improved, and polished features will be presented directly by the team. [**Please RSVP** to the event and reserve your seat at the presentation of Swarm Live on **24 November 2020 at 14:00 CET**.](https://swarm-gateways.net/bzz:/live.swarm.eth/)

**Open positions**

Swarm is hiring! [Check out our open positions](https://ethswarm.medium.com/swarm-is-hiring-go-and-cloud-ops-engineers-wanted-9710e3ac7d0b) and if you are interested please let us know by sending your CV to [talent@ethswarm.org](mailto:talent@ethswarm.org)

- [**Senior Go Developer — Swarm Core team**](https://swarm.fairdatasociety.org/bzz:/36373d2f7388c5fe89fb52f6620cf8f9c0487d093b8aa526c3b8818681720391/Senior_Go_Develper,_Swarm_Core_Team.pdf)
- [**Go Developer — Infrastructure team**](https://swarm.fairdatasociety.org/bzz:/7733199410718fc88d2f7f37829effc83a18c03dbe2059ebc620482095d09981/Go_Developer,_Infrastructure_Team.pdf)
- [**Cloud Operations Engineer**](https://swarm.fairdatasociety.org/bzz:/45bb189c9e003da4002f72f3f0ea3a8c9ecd8842387f781c54a054e19dc6414e/Cloud_Operations_Engineer.pdf)
