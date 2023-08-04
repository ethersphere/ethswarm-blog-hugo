+++
banner = "/uploads/devupdate-jul-23.png"
categories = [ "Development updates" ]
date = 2023-08-04T13:15:00.000Z
description = "In July, a major step was taken for the Swarm network with the unveiling of the new Localstore, which will be included in the latest Bee 1.17.0. Phase 4 of the storage incentives roadmap will also be released in the next few days, as will the latest updates to the price oracle, which is currently being tested extensively."
references_and_footnotes = [ ]
title = "Monthly Development Update – July 2023"
_template = "post"
+++

# Monthly Development Update – July 2023

In July, a major step was taken for the Swarm network with the unveiling
of the new Localstore, which will be included in the latest [<u>Bee
1.17.0</u>](https://github.com/ethersphere). Phase 4 of the storage
incentives roadmap will also be released in the next few days, as will
the latest updates to the price oracle, which is currently being tested
extensively.

On the Ecosystem front, the [<u>Fairdrive Web
App</u>](https://app.fairdrive.fairdatasociety.org/) now boasts enhanced
security for wallet creation, coupled with some improvements and fixes.
Accessibility is the name of the game, so the [<u>Book of
Swarm</u>](https://www.ethswarm.org/The-Book-of-Swarm.pdf) is in the
middle of a polishing session and the [<u>Bee client specs
repo</u>](https://github.com/ethersphere/specs) is ready to roll.

Save the date for a new Swarm Community Call on 31 August and stay at
the forefront of these exciting developments!

## Tracks

### Bee Track (Callum)

The Localstore rewrite is complete, tested, and anticipated features,
  such as multi-stamping and local pinning, work as expected. And
  release of the 1.17.0 is scheduled in the coming days as announced on
  the Community Call this month.

- The hardening phase epic and documents have been created and added to
  both, internally and externally. We look forward to beginning work in
  this vein between and after our awaited breaking change scheduled
  releases.

### Research Track (Callum)

- The phase 4 inclusion proof tests and refactorings are complete and
  awaiting bee-side test completion and a testnet release is imminent
  for phase 4.

- The price oracle coefficient values that manipulate the price have
  been recalibrated and the contract is complete – giving a better
  product experience, and these will be put to testnet in the coming
  weeks.

- The research team has also done extensive research and written
  documents on chain migration and omnichain support for Swarm and its
  implications for node operators, etc. as well as statistics on the
  variance of operator rewards.

### JS Track (Aron)

- [<u>Released
  axios-fetch-bridge</u>](https://github.com/Cafe137/axios-fetch-bridge)
  that may enable the usage of bee-js in previously unsupported
  environments.

- [<u>Released a new version of
  bee-js</u>](https://github.com/ethersphere/bee-js/releases/tag/v6.1.0)
  which adds an HTTP adapter option to Bee and BeeDebug. It also fixes
  an issue where some uploads failed with tagUid errors..

### Ecosystem

#### Fair Data Protocol

#### <u>Fairdrive Web App</u>

- Added [<u>Password protection for wallet creation using
  Metamask</u>](https://github.com/fairDataSociety/fairdrive-theapp/issues/399)

- [<u>Upgraded to fdp-storage
  0.7.3</u>](https://github.com/fairDataSociety/fairdrive-theapp/issues/378)

- [<u>Implemented referral programme
  form</u>](https://github.com/fairDataSociety/fairdrive-theapp/issues/338)

- [<u>Other enhancements and
  fixes</u>](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-07-01..2023-07-31+)

[<u>fdp-storage</u>](https://github.com/fairDataSociety/fdp-storage/)

- Released [<u>version
  v0.9.0</u>](https://github.com/fairDataSociety/fdp-storage/releases)
  with a breaking change: registration is now retriable, and this
  version also has support for upgraded fdp-contracts version 3.7.0

[<u>Create account
page</u>](https://github.com/fairDataSociety/fdp-create-account/)

- [<u>Upgraded to fdp-storage
  0.7.3</u>](https://github.com/fairDataSociety/fdp-create-account/issues/266)

- [<u>Other upgrades and
  fixes</u>](https://github.com/fairDataSociety/fdp-create-account/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-07-01..2023-07-31+)

[<u>bmt-js</u>](https://github.com/fairDataSociety/bmt-js)

- Released [<u>version
  v2.1.0</u>](https://github.com/fairDataSociety/bmt-js/releases) with
  custom hasher for chunks and bugfix

[<u>fdp-contracts</u>](https://github.com/fairDataSociety/fdp-contracts/)

- Released [<u>version
  v3.7.0</u>](https://github.com/fairDataSociety/fdp-contracts/releases)
  with support for Optimism and Arbitrum Goerli networks

### DevRel

#### Docs update

- Work is continuing on improving the readability of the [<u>Book of
  Swarm</u>](https://www.ethswarm.org/The-Book-of-Swarm.pdf).

- Bee client specs repo set up as a place for more [<u>detailed client
  specs</u>](https://github.com/ethersphere/specs).

#### Educational content 

- [<u>How to Create an NFT and store metadata on
  Swarm</u>](https://blog.ethswarm.org/foundation/2023/how-to-create-an-nft-and-store-metadata-on-swarm/)

#### Apps:

Etherproxy:

- [<u>Released a new version of
  etherproxy</u>](https://github.com/Cafe137/etherproxy) with an
  improved Dockerfile as well as health and readiness endpoints to be
  used in Docker and Kubernetes infrastructures

Events:

Swarm Community Call – July 2023

- The Swarm Community Call, our main monthly online event, was held on
  27 July. You can [<u>read a recap blog post about it</u>
  <u>here</u>](https://blog.ethswarm.org/foundation/2023/swarm-community-call-27-july-recap/).

### **Upcoming events**

#### **<u>Swarm Community Call</u>**

- Swarm Community Call, our main monthly online event, will take place
  on 31 August at 17:00 CET in the [<u>Swarm Foundation
  Discord</u>](https://discord.gg/PHqsVNSJ?event=1126056886773489675)
  (add to calendar). Meanwhile, you are welcome to send any questions
  you might have for the teams building the Swarm network by using this
  [<u>online form</u>](https://airtable.com/shrBRyrMkXFsJvLS3) for them
  to be addressed on the call.
