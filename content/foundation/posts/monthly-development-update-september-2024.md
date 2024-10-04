+++
banner = "/uploads/devupdate-sep.png"
images = [ "/uploads/devupdate-sep.png" ]
categories = [ "Development updates" ]
date = 2024-10-05T00:00:00.000Z
description = "September was an important month for Swarm. SWIP-21 has been finalised and now it's time for the Bee and Research Track to go into development and find a suitable technical solution for its implementation."
references_and_footnotes = [ ]
title = "Monthly Development Update – September 2024"
_template = "post"
+++


September was an important month for Swarm. [SWIP-21](https://github.com/ethersphere/SWIPs/pull/56/files) has been finalised and now it's time for the Bee and Research Track to go into development and find a suitable technical solution for its implementation. SWIP-21 outlines a new feature that allows node operators to participate in the sister neighbourhood redistribution game and double their reserve size. The Research Track has also recalibrated the price oracle, improving price optimisation.

The JS Track saw several releases this month, including Bee-JS versions 8.0.0 to 8.0.2. These updates introduced ACT support and fixed several issues to improve the developer experience. Swarm Desktop received an update to Bee 2.2.0, and Swarm CLI introduced new features for the stamp list and address commands.

The Ecosystem team, in collaboration with Latitude.sh, developed a new blueprint to instantly launch Bee light nodes in any of the 23 global locations. We also announced a new Swarm Fellowship that focuses on decentralised AI data and model proofs.

The September Swarm Community Call covered the new node management features introduced in Bee 2.2.0 and the upcoming price hierarchy feature in Bee 2.3, as well as new tools such as Beest, a CLI for managing Bee nodes, and a live demo at EthSofia in October. On that note, if you’d like to say hello to the Swarm team, we’ll be in Sofia from 17-19 October.


### Bee Track  
* The bee team is analysing the specs for the [SWIP-21](https://github.com/ethersphere/SWIPs/pull/56/files): Reserve doubling, where the node operators will be able to participate in the sister neighbourhood’s redistribution game and double their reserve size. We are in the process of identifying the appropriate technical approach for the implementation.
* A few nodes have been reported as unable to unstake during the upgrade process to the 2.2 release. We are debugging and investigating the reasons for these events.


### Research Track 
* The [SWIP-21](https://github.com/ethersphere/SWIPs/pull/56/files) is complete, reviewed, and passed all rounds of discussion — we have moved into development and hope to reach a first iteration of the solution for testing soon. This is shared across both bee and the research team.
* The price oracle has been recalibrated in testing and modelled and approved for the next release for enhanced price optimisation changes. 
* Internal statistics and metrics dashboards and performance tests are being run and automated, bringing a fuller understanding of the network inside the team. 


### JS Track 
#### [Bee-JS](https://github.com/ethersphere/bee-js)
* Multiple releases (v7.1.2, v8.0.0, v8.0.1, v8.0.2):
    * **Adds ACT support** (special thanks to SolarPunk)
    * Fixes an issue with tar padding when streaming content
    * Allows collection items with zero size
    * Handles bad request when index does not exist in feed lookup
* CI has been improved for better DevEx, [fdp-play](https://github.com/fairDataSociety/fdp-play) is now more stable for the test environment


#### [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)
* Release v0.43.1:
    * **Upgrades to Bee 2.2.0** (special thanks to SolarPunk)
    * Updates to latest Bee Dashboard


#### [Swarm CLI](https://github.com/ethersphere/swarm-cli)
* Multiple releases (v2.14.0, v2.15.0, v2.16.0)
    * Adds *--verbose* hint to *stamp list* command
    * Handles missing cheque book in *addresses* command
    * Allows setting default stamp with *STAMP* env
    * Updates to latest Bee JS
* CI has been fixed for better DevEx, enabled tests should all pass


### Ecosystem 
#### Partnership
* In partnership with Latitude.sh, a new blueprint has been developed that lets anyone instantly [launch a bee light node](https://www.latitude.sh/dashboard/tm/test-project/launchpad/models/create/1cnxvazdFwuBm5vWtab0Bg) (login required) in any of their 23 locations across five continents. The [docker image](https://hub.docker.com/r/ethersphere/latitudesh-bee-blueprint/) has been published on the docker hub.


#### Swarm Fellowship
* [Announcing Fellowship: Data and Model Provenance for Decentralised AI](https://blog.ethswarm.org/foundation/2024/announcing-fellowship-data-and-model-provenance-for-decentralised-ai/)


### DevRel 
#### Documentation 
* The [API Reference](https://docs.ethswarm.org/api/) documentation has been updated for the 2.2.0 release.
* Guides for the new neighbourhood hopping and partial stake withdrawal features introduced in the 2.2.0 release have been [added to the staking section](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#partial-stake-withdrawals).
* A [new page](https://docs.ethswarm.org/docs/develop/tools-and-features/act) was published with a complete guide to using the ACT (Access Control Trie) feature introduced in the 2.2.0 release, 


#### Apps
* Experimental FDP integration has been added to [https://swarmdashboard.com](https://swarmdashboard.com) and [https://etherjot.com](https://etherjot.com). 


#### Content 
* [Swarm Community Call, 29 August – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-29-august-recap/)
* [Monthly Development Update – August 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-august-2024/)
* [State of the Network: August](https://blog.ethswarm.org/foundation/2024/state-of-the-network-august-2024/)
* [Bee Version 2.2.0 - One Week Notice](https://blog.ethswarm.org/foundation/2024/bee-2-2-pre-release/)
* [Bee Version 2.2.0 - Node Operators' Guide](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/)
* Demo video: [Swarm & Fair Data Protocol: Interoperable Data Control](https://www.youtube.com/watch?v=_9bypBE5kOM)


### Events 
##### **Swarm Community Call – 26 September 2024**

The September Swarm Community Call covered new developments in node management introduced with[Bee 2.2.0](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/), and previewed upcoming features such as a [reserve size doubling mechanism](https://github.com/ethersphere/SWIPs/pull/56) to increase profitability by expanding storage capacity, and a new price hierarchy feature that will be included in the forthcoming Bee 2.3 release. 

The In Focus section showcased Beest, a CLI toolkit that simplifies the management of multiple Bee nodes with automated features for both mainnet and testnet. The first Community Talk explored [decentralised data management](https://www.youtube.com/watch?v=_9bypBE5kOM) via the Fair Data Protocol, while the second highlighted DeBoot’s prototype for integrating Swarm into Litegrav’s microgravity research. In the Announcements, a [Swarm Fellowship](https://blog.ethswarm.org/foundation/2024/announcing-fellowship-data-and-model-provenance-for-decentralised-ai/) supporting a decentralised data provenance toolkit for AI was introduced, and the Call concluded with an invitation to a live demo and meet-up at EthSofia on 17 October. 

You are welcome to read the whole Recap [here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-26-september-recap/).


### Upcoming events


##### **Swarm Community Call – 31 October 2024**

Swarm Community Calls, held every last Thursday of the month on Discord, are the best way to stay fully up to date with the current development, as well as to seize the opportunity to jump into a live discussion or ask the Swarm team a question! **The next Community Call is on 31 October** ([add to calendar](https://www.addevent.com/event/Vz23167077)). You are welcome to attend in Halloween costumes and post any silly or serious questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3) in the meantime; the questions received are answered live at the Calls. 


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org! \
