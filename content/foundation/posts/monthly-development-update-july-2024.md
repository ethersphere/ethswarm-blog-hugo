+++
banner = "/uploads/DevUpdate-july.jpeg"
images = [ "/uploads/DevUpdate-july.jpeg" ]
categories = [ "Development updates" ]
date = 2024-08-05T00:00:00.000Z
description = "In July, the Bee Track has been diligently preparing for the Bee 2.2 release, with Access Control (ACT) development completed and neighbourhood hopping with transferrable stake in final testing."
references_and_footnotes = [ ]
title = "Monthly Development Update – July 2024"
_template = "post"
+++


In July, the **Bee Track** has been diligently preparing for the Bee 2.2 release, with Access Control (ACT) development completed and neighbourhood hopping with transferrable stake in final testing. 

Meanwhile, the **Research Track** is already drafting specifications for the Bee 2.3 release to further incentivise participation in the redistribution games.

The JS Track has had its hands full delivering updates and fixes across multiple projects, including Bee-JS, Etherjot, Bee Dashboard and Swarm Desktop. Additionally, the team has introduced three new NPX tools to streamline development processes, including bee-docker, bee-yaml and create-swarm-app.

Docs now have a revamped Docker section with a comprehensive tutorial and guidance on using Docker Compose for multiple Bee nodes. There’s also a new page on the upcoming ACT feature and an improved troubleshooting section.

To wrap it all up, the Swarm Community Call was back on the agenda after a brief hiatus in June and you can read the recap below.


## Tracks


### Bee Track  



* The Bee team’s focus for this month has been on the 2.2 release preparation and here is what we have so far:
    * ACT development and testing is finished. We are now reviewing the integration tests which are expected to be finished soon.
    * The neighbourhood hopping with transferrable stake feature has been developed and we are in the final tests.
    * Withdrawable stake development has also been finished, and now the team is in the process of identifying all the test cases.
* There are also more things we are working on related to better error returning, bug fixing and other technical improvements.
* In parallel there have been conversations regarding improved performance and the team will also be investigating this and suggest relevant solutions.


### Research Track 


* In joint efforts with the Bee team we have completed development on SWIP-19 (transferable stake) and SWIP-20 (stake withdrawal mechanism), which are now in the final testing stages for release. These features will enhance the node operators’ experience and profit potential. 
* The Research team is now looking into other node operator improvements – drafting specifications for a 2.3 release potentially incentivising playing in other redistribution games, etc, as well as planning for other improvements. 


### JS Track 


####  
[Bee-JS](https://github.com/ethersphere/bee-js)

* Released version 7.0.4
    * Added missing chainTip field to ChainState response
* Released version 7.1.0
    * Added capitalizeAddressERC55 function under Utils to transform an Ethereum address into checksum format


#### [Etherjot](https://github.com/ethersphere/etherjot-web)

* Fixed an issue where the asset picker cannot be closed when there are no assets uploaded
* Fixed an issue with the relative linking not working correctly when setting up an ENS and using via eth.limo
* Refactored code to be more type safe
* Slightly improved editor design

#### [Bee Dashboard](https://github.com/ethersphere/bee-dashboard) & [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)


* Released version 0.29.0
    * Added “blockchain syncing state” component to the homepage and multiple places where waiting to be synced is necessary (e.g. postage batch screen)
    * Updated wording and labels to be more precise, e.g. adding missing units, suggesting actions to fix errors, clarifying flow of funds (node wallet / chequebook), etc.
    * Improved layout and spacing to enhance overall look and feel


#### [NPX Tools](https://github.com/ethersphere/npx-tools)


* Added 3 small utilities which can be run using npx without installation
    * **bee-docker**: Creates docker-compose.yml and directory layout for multiple Bee nodes. Grabs wallet addresses and puts them in addresses.txt for convenience.
    * **bee-yaml:** Prints an ultra-light Bee configuration file to stdout.
    * **create-swarm-app**: Scaffolds a browser or Node.js application. Supports React (Vite) and Node.js (CommonJS, ESM, TypeScript).


### Ecosystem 


#### Fair Data Protocol 

[Fdp-play](https://github.com/fairDataSociety/fdp-play)



* [Fixes and refactor](https://github.com/fairDataSociety/fdp-play/pull/146)

[Fairdrive](http://fairdrive.io)



* [Docs and language update](https://github.com/fairDataSociety/fairdrive-theapp/pull/585)


### DevRel 


#### Documentation 


* The [Docker section](https://docs.ethswarm.org/docs/bee/installation/docker) of the documentation has been revamped with a more complete tutorial along with sections covering Docker Compose for running multiple Bee nodes.
* A [new page on the upcoming Access Control (ACT)](https://docs.ethswarm.org/docs/learn/technology/act) feature has been added to the “Learn” section of the documentation.
* The [troubleshooting section](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#troubleshooting) has been moved to the “Staking” page and a [new section](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#frozen-node) on diagnosing and correcting issues relating to freezing has been added.


#### Content



* [Swarm Summit 2024: Upload the future - RECAP](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future-recap/)
* [Monthly Development Update – June 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-june-2024/)
* [State of the Network: June](https://blog.ethswarm.org/foundation/2024/state-of-the-network-june-2024/)


### Events 


##### **Swarm Community Call – 25 July 2024**

In July’s Community Call, we learned that the upcoming Bee 2.2 release will introduce an important stake withdrawal mechanism as well as the so-called neighbourhood hopping feature, while the plans for Swarm’s multi-chain support have been revealed, becoming a new major milestone for the network. Community members demonstrated a new tooling for optimising postage batch usage and improving upload times in Swarm which they intend to develop further. You are welcome to read the whole [Recap here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-25-july-recap/)! 


### Upcoming events


##### **Swarm Community Call – 29 August 2024**

Swarm Community Calls, held every last Thursday of the month on Discord, are the best way to stay fully up to date with the current development, as well as to seize the opportunity to jump into a live discussion or ask the Swarm team a question! The next Community Call is on 29 August ([add to calendar](https://www.addevent.com/event/fo22320451)).

You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3)**.**


### People & Culture team:



* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. We are hiring a [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go)) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager).
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org! 