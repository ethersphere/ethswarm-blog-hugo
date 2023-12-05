+++
banner = "/uploads/dev-update-november.png"
categories = [ "Development updates" ]
date = 2023-12-05T00:15:00.000Z
description = "November was the month that set the final stage for the upcoming Price Oracle, bringing with it massive security and pricing benefits."
references_and_footnotes = [ ]
title = "Monthly Development Update – November 2023"
_template = "post"
+++

November was the month that set the final stage for the upcoming [Price Oracle](https://blog.ethswarm.org/foundation/2023/oracle-overview/), bringing with it massive security and pricing benefits. In the coming weeks, [erasure coding](https://blog.ethswarm.org/foundation/2023/erasure-coding-supercharges-swarm/) is coming to testnet, significantly increasing network reliability. The Research Track is also in the process of finishing writing the specifications for the Bee client.

The November release of Bee ([v.1.17.6](https://github.com/ethersphere/bee/releases/tag/v1.17.6)) tackled many hardening issues, such as connectivity issues, additional chunk validation and retrieval multiplexing. 

Bee JS now supports unlimited upload size and has added ‘Utils’ functions to reverse-calculate depth and amount based on GBs and days. Numerous improvements have also been added throughout the entire JS Track’s stack. 

The Fair Data Protocol team has been hard at work to complete the merging of the [Fairdrive Web App](https://app.fairdrive.dev.fairdatasociety.org/) development with the [main](https://app.fairdrive.fairdatasociety.org/) version. Beta testing for Faidrive is still open and [the signup page](https://join.fairdrive.io/) is now way sleeker and more intuitive. 

Swarm’s docs are richer with a [new page](https://docs.ethswarm.org/docs/bee/working-with-bee/swarm-cli/) on ‘swarm-cli’ and troubleshooting. 

And to wrap it all up, we have a host of exciting events in the pipeline: from [Swarm 2.0](https://blog.ethswarm.org/foundation/2023/swarm-2.0/) to [Swarm Workshops on permissionless publishing](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/) and setting up a [private Swarm Gateway](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/). 


## Tracks

### Bee Track
* Release [v.1.17.6](https://github.com/ethersphere/bee/releases/tag/v1.17.6), with many hardening issues being tackled. Highlights of the release:
    * The focus has been mostly on improving connectivity of nodes across the network and bringing performance improvements to chunk caching operations.
    * Addition of a new DB command that will perform a chunk validation of the chunkstore, similar to the optional step in the compaction command.
    * The retrieval protocol now has a similar multiplexing capability, where multiple parallel requests are fired from a forwarder peer that can directly access the neighbourhood of a chunk.
* Addition of QUIC transfer protocol l investigated and implemented, aiming to tackle the connectivity issues. The team is testing it, but it’s still too soon to come to conclusions.
* Enhancing internal observability of the network with more dashboards.
* Writing up the specs on the implementation side to provide clarity of the network.


### Research Track
* SPECS template of sections to be updated is underway for the end of the year to give full clarity of the system 
* Ph4 and the Oracle are being released 48 hours later than initially communicated due to a testing environment change. This release will bring massive security and pricing benefits to the network 
* Erasure codes is nearing its debut onto the testnet 


### JS Track
#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* Adds global batches endpoint
* Upload size is now unlimited
* Re-adds standardised BeeResponseError
* Adds Utils functions to reverse-calculate depth and amount based on gigabytes and days

##### Comment system
* Adds reply mechanism
* Adds Moderation mechanism (not censorship)
* Can be embedded anywhere

##### Donation component
* Adds automated top-up support
* Adds manual donation support
* Can be embedded anywhere

#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Upgrades to latest Bee-JS for fixes
* Adds new manifest commands (create, add, remove, sync, merge)


#### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* Adds HOMEPAGE configuration to set default homepage to a Swarm hash
* Adds REMAP configuration to set arbitrary human-friendly names to Swarm hashes
* Makes the ALLOWLIST more secure by fixing a few issues that allowed bypassing it

### Ecosystem

#### Fair Data Protocol
##### [Fairdrive Web App](https://app.fairdrive.dev.fairdatasociety.org/)
* Development version’s merge to [main](https://app.fairdrive.fairdatasociety.org/) is complete.
* [Node docker file update](https://github.com/fairDataSociety/fairdrive-theapp/pull/562)
* Strong redesign for the Join page, please visit [join.fairdrive.io](https://join.fairdrive.io/) to contribute to Fairdrive Beta as a Beta Tester.

##### [fdp-storage](https://github.com/fairDataSociety/fdp-storage/)
* [Refactoring](https://github.com/fairDataSociety/fdp-storage/pull/288) by removing deprecated methods and interfaces related to account management.


##### [FaVe](https://github.com/fairDataSociety/FaVe)
* [v0.1.9](https://github.com/fairDataSociety/FaVe/releases/tag/v0.1.9) is a new release, with [updated search layer](https://github.com/fairDataSociety/FaVe/pull/44).

##### [Fdp-play](https://github.com/fairDataSociety/fdp-play)
* [Geth and hardhat feat](https://github.com/fairDataSociety/fdp-play/pull/105) at [v3.0.0](https://github.com/fairDataSociety/fdp-play/releases/v3.0.0) release
* Other than this breaking change, there are [new contract addresses for phase 4 redistribution](https://github.com/fairDataSociety/fdp-play/pull/102), [new bee version](https://github.com/fairDataSociety/fdp-play/pull/97), support.

##### [Fdp-contracts](https://github.com/fairDataSociety/fdp-contracts)
* [New release](https://github.com/fairDataSociety/fdp-contracts/releases/tag/fdp-contracts-js-lib-v3.9.0): contains ‘reverse-registrar’.

##### [FIPs](https://github.com/fairDataSociety/FIPs)
* [Cracking the case of unlimited files & directories](https://github.com/fairDataSociety/FIPs/pull/75/files?short_path=cf7945c#diff-cf7945c7254a0501e47ffc2727dfbdcb4b07b9c14f7fdab423e52b1c40c44b01)


### DevOps
* Deployed 1.17.6 [Bee](https://github.com/ethersphere/bee) to testnet and mainnet.
* Released multiple versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest 0.14.2).


### DevRel
#### Docs update

* A [page](https://docs.ethswarm.org/docs/bee/working-with-bee/swarm-cli) on `swarm-cli` has been added to the docs and swarm-cli commands have also been added as alternatives to the http Bee api commands on several [pages](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch).
* A new [troubleshooting](https://docs.ethswarm.org/docs/bee/working-with-bee/troubleshooting) page has been added and is still under active development.
* Clarification has been added to [the section on the freezing penalty](https://docs.ethswarm.org/docs/learn/technology/incentives#penalties) for nodes whose hashes don’t match in the redistribution game.


#### Apps

##### Etherjot
* [New UI](https://github.com/ethersphere/etherjot-web)
* Adds comment system and donation component extensions
* Updates CLI import to work with new engine
* CLI import can be further imported in web UI
* Adds asset picker in web UI
* Adds layout customisation in web UI
* Fixes tons of minor issues
* Adds import/export feature

##### Doctor Bee
* A TUI to generate health report for a bee node
* First version of [Doctor Bee](https://github.com/rampall/doctor-bee) released
* Includes UI/UX improvements based on feedback from the community


#### Content
* [Erasure Coding Supercharges Swarm](https://blog.ethswarm.org/foundation/2023/erasure-coding-supercharges-swarm/)
* [Swarm Workshops: Permissionless Publishing](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/)
* [State of the Network: October](https://blog.ethswarm.org/foundation/2023/state-of-the-network-october/)
* [Swarm 2.0 - #generate freedom](https://blog.ethswarm.org/foundation/2023/swarm-2.0/)

### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has multiple open positions. We are hiring a [Software Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/Software_Engineer_go_blockchain), [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go)) and a [QA Engineer (Go, blockchain).](https://www.ethswarm.org/jobs/senior-software-engineer-go)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events:
##### Swarm Community Call – November 2023
* The Swarm Community Call, our main monthly online event, was held on 30 November. You can read a recap blog post about it [here](https://blog.ethswarm.org/foundation/2023/swarm-community-call-30-november-recap/).

 

#### Upcoming events

##### **Workshop: [Decentralise Earth Observation! ](https://blog.ethswarm.org/foundation/2023/decentralize-earth-observation/)**
* [Decentralise Earth Observation! ](https://blog.ethswarm.org/foundation/2023/decentralize-earth-observation/)European Space Agency Phi-lab and Web3 technologies workshop

##### **Workshop: [“Decentralise Your Blog](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/): A Guide to Censorship-Resistant Blogging**
* **6 December** on [Discord](https://discord.com/channels/799027393297514537/966664597186699304): a workshop [“Decentralise Your Blog](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/): A Guide to Censorship-Resistant Blogging”. Learn to publish blogs on Swarm that are resistant to censorship and control. No command line knowledge needed. [Add to Calendar](https://www.addevent.com/event/sU19334495)


##### **Workshop: Hosting on Swarm:** [Setting Up a Private Swarm Gateway](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/)**
* **13 December** on [Discord](https://discord.com/channels/799027393297514537/966664597186699304): a workshop “Hosting on Swarm: **[Setting Up a Private Swarm Gateway”](https://blog.ethswarm.org/foundation/2023/swarm-workshops-permissionless-publishing/)**. Learn to set up a private Swarm gateway to enhance the security and performance of your decentralised applications (dApps), platforms or web pages. [Add to Calendar](https://www.addevent.com/event/Gr19334590)


##### **Swarm 2.0 - annual winter solstice**
* **21 December**: December’s Community Call will not be happening on Discord, as the Swarm Foundation is instead throwing its annual winter solstice event – **[join us for the launch of the Swarm 2.0 era!](https://blog.ethswarm.org/foundation/2023/swarm-2.0/)** #GenerateFreedom [Mark your calendar](https://www.addevent.com/event/lf19253018)!