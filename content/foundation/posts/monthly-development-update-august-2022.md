+++
banner = ""
categories = ["Development Updates"]
date = 2022-09-04T22:00:00Z
description = "In August, the spotlight was on the upcoming storage incentives rollout. The Bee and JS Track have been working closely with the Research Track to get everything ready for the rollout. This includes updating the Bee client and the Swarm Desktop (Beta) dApp. "
references_and_footnotes = []
title = "Monthly Development Update — August 2022"

+++
In August, the spotlight was on the upcoming storage incentives rollout. The Bee and JS Track have been working closely with the Research Track to get everything ready for the rollout. This includes updating the Bee client and the Swarm Desktop (Beta) dApp. The research team is also setting up tasks and finalising the necessary work before phases 2 and 3 of storage incentives are activated in October.

A lot of work has been done on the Fair Data Protocol as well, with the team introducing breaking changes to FDP Storage, submitting Blossom to Google Play Store for review and releasing a new library called BeeSon. You can also take FDP Create account for a spin on the Görli testnet.

On the ecosystem side, the Ecosystem Track held another Monthly Ecosystem Call, this time on storage incentives, and went to mingle at EthWarsaw. The Grants Track saw three new grantees meet the milestone, and Etherna, a grant recipient of the Swarm Foundation, had a successful Devcon DIP proposal.

Check out the ongoing bounties and the upcoming events at the end of the blog. 

# **Bee Track**

* Working closely with the research team to design and implement storage incentives
* Currently working on:
* Local storage to ensure database consistency.
* Preparing a new release candidate for the storage incentives.
* The Bee Track team has been hard at work preparing a new release candidate for the storage incentives.

# **JS Track**

Currently working on:

* a new Swarm Desktop (Beta) release to be compliant with the new Bee update.
* Swarm gateway proxies.
* improving automatic postage stamp functionality.
* The JS Track lead, Attila, gave an update on Swarm Desktop (Beta) at the Monthly Ecosystem Call. You can read the recap of the event [here](https://medium.com/ethereum-swarm/monthly-ecosystem-call-28-july-2022-recap-e645c0f1d315).
* A new version of swarm-cli was released (0.12). This release includes multiple new features and bug fixes. You can read the full release notes [here](https://github.com/ethersphere/swarm-cli/releases/tag/v1.12.0).
* The Swarm Foundation JS Track continues to grow. Last month, two new members joined the team. They’ll be working on Swarm CLI fixes and the gateway proxy.

# **Fair Data Protocol**

[**Identity Anchored Address Space**](https://github.com/fairDataSociety/FIPs/blob/master/text/0013-iaas.md) Fair Data Protocol Improvement Proposal (FIP) has been merged and is in active state.  
It defines technical details and requirements for having a Fair Data Society (FDS) account and introduces the term Identity Anchored Address Space (IAAS) to explain this consideration in detail.

[**FDP Create Account**](https://github.com/fairDataSociety/fdp-create-account) is available for registering FDS accounts and testing on Görli testnet as a [web application](https://create.dev.fairdatasociety.org/#/register).  
Users are able to create FDS accounts without any additional dependency (e.g. Blossom). The FDS accounts are “portable”, allowing users to log in from any other device and access their personal storage.

[**FDP Storage**](https://github.com/fairDataSociety/fdp-storage) **Released v0.5.1** (and v0.5.0)

* **Breaking change** was introduced to allow for the use of the library with Bee Public Gateways that do not expose their debug API endpoint.  
  On FDP Storage initialization Bee debug API endpoint does not need to be defined anymore, instead a postage stamp ID has to be passed in order to be able to upload.
* Exposed used smart contract addresses on [FDP Play](https://github.com/fairDataSociety/fdp-play) and Görli.
* [Raised the pod name limit from 25 to 64](https://github.com/fairDataSociety/fdp-storage/issues/138), to allow coupling between dApps and the PODs they are using.

**Research has been done on React Native** support compatibility for FDP Storage and library documentation about it has been updated.

[**FDP CLI**](https://github.com/fairDataSociety/fdp-cli)

* Working on Portable FDS account creation / login.

[**Blossom**](https://github.com/fairDataSociety/blossom) **browser extension** has been submitted to the Google Web Store for review.

* The Blossom acts as a web3 framework for dApps and a[ Fair Data Society account](https://github.com/fairDataSociety/FIPs/blob/master/text/0013-iaas.md) manager for end-users.
* It can handle FDS Accounts (as well as local accounts) to load them to the active session, which dApps can interact with.
* Complementary JS library with which applications can communicate easily with the extension is being worked on to be released.

[**FDP Play**](https://github.com/fairDataSociety/fdp-play) **Released v2.0.2**

* Supports the latest FairOS version which is able to incorporate with [FDP Contracts](https://github.com/fairDataSociety/fdp-contracts).

[**BeeSon**](https://github.com/fairDataSociety/beeson) **Released the first version, v0.1.0**

* BeeSon is a JSON compatible serialization format which allows its elements to be verified cheaply on-chain.
* It aims to be the base data-structure for web3 service networks and for the Swarm DataBase.

**An explanation video about the BeeSon** concepts is being worked on, with discussion present on [FDS Discord](https://discord.gg/KrVTmahcUA).

# **DevOps Track**

* New Bee cluster for testing was set up to support the Bee Track.
* Configured the Goerli testnet to use consensus layer.

# **Research Track**

* The team is setting up specs for work packages and tasks related to phases 2 and 3 for the upcoming October release of storage incentives.
* The phase 2 smart contracts (redistribution and staking) have been drafted and are ready for review.
* Key decisions regarding the reserve commitment sampler and price oracle are in the final stages of discussion.
* The Research track is working closely with the Bee team to plan ahead for a cross-functional team work scheduling, and identifying strategic questions beyond only implementation.

# **Ecosystem Track**

* August’s Monthly Ecosystem Call on storage incentives and Swarm Desktop (Beta). You can read the recap of the event [here](https://medium.com/ethereum-swarm/monthly-ecosystem-call-28-july-2022-recap-e645c0f1d315).
* “Wikipedia On Swarm”, 50K DAI Gitcoin Bounty ended on 31 August. [https://gitcoin.co/issue/28926](https://gitcoin.co/issue/28926 "https://gitcoin.co/issue/28926")

# **Grants Track**

* 5 grantees, [Etherna project](https://etherna.io/), [Dapplets project](https://dapplets.org/) and [Envelop](https://envelop.is/), [Videowiki](https://video.wiki/) and [SwarmPress](https://www.kredeum.com/) from Kredeum were successful in meeting their milestones in August.
* Etherna, a grant recipient of the Swarm Foundation, had a successful Devcon DIP proposal — [https://github.com/efdevcon/DIPs/blob/master/DIPs/DIP-19.md](https://github.com/efdevcon/DIPs/blob/master/DIPs/DIP-19.md "https://github.com/efdevcon/DIPs/blob/master/DIPs/DIP-19.md")

# **Ongoing bounties**

* [Social Archive X Dapplets Challenge](https://gitcoin.co/issue/29165)
* [Censorship Resistant Blog](https://gitcoin.co/issue/28924) (in implementation)
* [Social Archive X GetLogin.Eth Challenge](https://gitcoin.co/issue/29164) (in implementation)
* [Store any page in Chrome to personal storage using an extension with ability to browse at later date](https://gitcoin.co/issue/29072) (in implementation)
* [Create mobile app for managing personal storage files](https://gitcoin.co/issue/29075) (in implementation)
* [Implement a subgraph to obtain BZZ price data](https://gitcoin.co/issue/29254) (in implementation)

# **Events**

* [Meetup](https://www.meetup.com/ethereum-swarm-meetup/events/288028219/) at EthWarsaw. The main topic of this meetup was Swarm’s storage incentives. . If you missed it you can watch the presentations on [YouTube](https://youtu.be/iaQdgzErQlc).

# **Upcoming events**

* Meetup at EthBerlin, 14.9.2022, [https://c-base.org/](https://c-base.org/ "https://c-base.org/"), 19:00 CET

# Join Swarm’s community

* The Swarm Foundation & Association teams are reachable on[ **Discord**](https://discord.gg/wdghaQsGq5).
* Follow us on[ **Twitter**](https://twitter.com/ethswarm).
* Swarm Ecosystem and News[ **Twitter**](https://twitter.com/ethswarmhive).
* Discussions about Swarm on[ **/r/ethswarm**](https://www.reddit.com/r/ethswarm) and[ **/r/ethereum**](https://www.reddit.com/r/ethereum) subreddits.
* Please feel free to reach out via **info@ethswarm.org**
* Swarm up your inbox with our newsletter![ ](https://www.ethswarm.org/newsletter.html).