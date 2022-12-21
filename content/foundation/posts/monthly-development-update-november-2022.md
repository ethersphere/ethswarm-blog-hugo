+++
banner = ""
categories = []
date = 2022-12-04T23:00:00Z
description = "The Bee Track team have been busy throughout November, continuously improving the deployment and testing process to improve its efficiency. They have recently cleaned out and fixed issues on their testnet and are now working on having new testnets — beta, public, and internal."
references_and_footnotes = []
title = "Monthly Development Update — November 2022"

+++
The **Bee Track** team have been busy throughout November, continuously improving the deployment and testing process to improve its efficiency. They have recently cleaned out and fixed issues on their testnet and are now working on having new testnets — beta, public, and internal. They’ve also released [**an updated storage incentives timeline**](https://medium.com/ethereum-swarm/storage-incentives-timeline-update-26ab959d8ca3) and deployed a new [Bee](https://github.com/ethersphere/bee)release candidate on testnet.

The **JS Track** has released a **new Bee-js (version 5.1.0 )** that adds a readiness endpoint and a staking endpoint support. A lot of focus is also on the **Bee dashboard** that fixes many bugs so that it can eventually be integrated into the Desktop App.

**The Fair Data Protocol** [**improvement proposal for personal storage **](https://github.com/fairDataSociety/FIPs/pull/61)in FairOS and FDP storage is now in the review process. To make sure that storage is handled the same way in both environments, an integration test has been implemented as well. A new release of the Swarm extension is also available, but due to manifest limitations of v3, some features couldn’t be implemented. An **explainer video for FDP-PLAY** (a CLI tool that allows you to spin up a local FDP environment) **is** [**now available for viewing here.**](https://www.youtube.com/watch?v=YnLPKlJd70w)

The **Research Track** is making progress with the **smart contract soft-audit** and tuning storage incentives requirements and logic for consensus purposes. To further explain the mechanics of storage incentives, Swarm Foundation’s Daniel A. Nagy released [**a blog on the topic, which you can read here**](https://medium.com/ethereum-swarm/the-mechanics-of-swarm-networks-storage-incentives-3bf68bf64ceb).

And to finish off with some community news, you’re warmly invited to celebrate the year behind us at Swarm Foundation’s **winter solstice event on 21 December**. It’s an opportunity to see how far the Swarm network has come in a year and learn what lies ahead in the weeks and months ahead. See you there.

# **Bee Track**

[Storage incentives — timeline update](https://medium.com/ethereum-swarm/storage-incentives-timeline-update-26ab959d8ca3)

* New Bee release candidate deployed on testnet [v1.10.0-rc12](https://github.com/ethersphere/bee/releases/tag/v1.10.0-rc12)
* Cleaned out and fixed issues on testnet
* Working on having new testnets, beta, public, internal. This should improve deployment and the testing process

# **JS Track**

New Bee-js release, version 5.1.0 (2022–11–11). [Read more about the release here](https://github.com/ethersphere/bee-js/releases/tag/v5.1.0).

This is a smaller release that brings support for Bee 1.9 and several smaller features:

* Add readiness endpoint.
* Staking endpoint support.
* Working on new gateway proxy features.
* Working on new Bee dashboard which fixes many bugs. Eventually this will be integrated onto the Desktop App.
* Upgraded Bee factory — its local testing.

# **Fair Data Protocol**

An explainer video was released for [FDP-PLAY](https://www.youtube.com/watch?v=YnLPKlJd70w), which makes it possible to spin up an FDP development environment.

A Fair Data Protocol improvement proposal about [personal storage](https://github.com/fairDataSociety/FIPs/pull/61) used in FairOS and FDP storage is in the review process.

* Refactored the metadata structure for PODs, files and folders. Some unused properties have been taken out, other encryption-related ones were added and made convention for the property naming which is camelCase.
* Implemented integration test in FDP-Storage with FairOS to ensure the personal storage is handled in the same way in both environments.

**FDP CLI updates**

* Fixes and polishing before the first release.

**Swarm extension**

* New release 0.7.1
* Fixed bug around localhost subdomain redirection
* Researched and tried out everything for manifest v3, but the new version cuts many features. Fortunately, we could keep most of the features that were implemented until now, but some other planned features cannot be implemented in manifest v3.
* From now on, dApps can interact with the extension through the @ethersphere/swarm-extension library
* For more information, check out the changelog of the [library](https://github.com/ethersphere/swarm-extension/blob/master/library/CHANGELOG.md) and the [browser extension](https://github.com/ethersphere/swarm-extension/blob/master/CHANGELOG.md).

Other fixes and upgrades in FairDrive and Create Account App and similar FDS front-end applications.

# **DevOps Track**

* Deployed the multiple [Bee](https://github.com/ethersphere/bee) RC releases to the testnet.
* Released the [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.11.9).
* Prepared Gnosis chain nodes for the merge.

# **Research Track**

* Getting ready to begin the smart contract soft-audit next week
* A lot of work on visualising the statistics and outcomes of Postage Stamp utilisation on different batch sizes, which is now better understood
* Tuning storage incentives requirements and logic for consensus purposes
* Blog post by research team member: [The Mechanics of Swarm network’s Storage Incentives](https://medium.com/ethereum-swarm/the-mechanics-of-swarm-networks-storage-incentives-3bf68bf64ceb)

# **Events**

* [Monthly Ecosystem Call](https://medium.com/ethereum-swarm/monthly-ecosystem-call-24-november-2022-recap-28b771b81569)

# **Upcoming events**

* **Celebrate the winter solstice with the Swarm**
* There will be no Monthly Ecosystem Call on the last Thursday of December, but there will be a special event on 21 December, the shortest day of the year, when the Swarm will come together to celebrate the achievements, get ready for new challenges and share the festive mood. Be sure to join. A link to the live video stream will be posted on Swarm Foundation social media.