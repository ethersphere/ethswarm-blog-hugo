+++
banner = "/uploads/devupdate-nov.png"
images = [ "/uploads/devupdate-nov.png" ]
categories = [ "Development updates" ]
date = 2024-12-05T00:01:00.000Z
description = "The Swarm network is preparing for an important upgrade. SWIP-21 is already on the public testnet and once implemented, it will increase nodes’ reserve size."
references_and_footnotes = [ ]
title = "Monthly Development Update – November 2024"
_template = "post"
+++


In November, the Bee Track concentrated on finalising the [2.3.0 release](https://github.com/ethersphere/bee/releases/tag/v2.3.0), which was released on 4 December. This latest release features the reserve size doubling and the integration of the GSOC initiative, which paves the way for dynamic content on Swarm. It also brings an improved price oracle, enabling more dynamic pricing to balance supply and demand effectively. 

The Research Track has invested efforts into comparing Swarm's performance across various metrics, which will guide a metrics-driven approach to future improvements.

The Bee-JS track released version 8.3.1, addressing a key issue in browsers where tar headers were not properly filled during the upload of multiple files. [The Swarm Desktop App](https://desktop.ethswarm.org/) received exciting new additions: a decentralised Wiki, decentralised OpenStreetMap, the Devcon.Buzz app, and the Datafund App.

Moving over to Swarm’s documentation, the “Learn” section has been renamed to “[Concepts](https://docs.ethswarm.org/docs/concepts/introduction)” and a new “References” section was added to contain reference material from the “Learn” section.

To wrap it all up, the latest [Swarm Community Call recap is out](https://blog.ethswarm.org/foundation/2024/swarm-community-call-28-november-recap/) and you’re warmly invited to join the Swarm team for the traditional [Winter Solstice event](https://www.addevent.com/event/yR24028303) on 21 December. This year it will take place a little earlier at 14:00 CET. Don’t miss out on seeing all the amazing things the team has built in 2024 and what lies just around the corner in 2025.



### Bee Track  
* During November the Bee team’s focus was on the [2.3.0 release](https://github.com/ethersphere/bee/releases/tag/v2.3.0), which has been announced for release on Wednesday, 4 December, which includes the following:
    * SWIP-21 “Reserve size doubling”, which will allow every operator double their chances of winning in the Shelling game and increasing their reserve size by participating in the sister neighbourhood’s game.
    * GSOC is bringing a new era to Swarn’s Single Owner Chunks. The new implementation now allows multiple users to write to SOC, which opens up the road for dynamic content on Swarm, allowing collaboration between several users! This enables the construction of applications such as multi-user forums, social media sites, chat applications, and much more.
* In the meanwhile, there are significant efforts in developing internal tools that will be providing configurable setups and environments to the engineering teams. 


### Research Track 
* The [2.3 release](https://github.com/ethersphere/bee/releases/tag/v2.3.0) is now out with the critical doubling of the reserve size and also the enhanced price oracle along with it, bringing more dynamic pricing of supply and demand. 
* The Research team is currently working on multiple versions of the multichain product, which should be showcased soon as a proof of concept, as well as more versions to come soon after. 
* We have also been hard at work testing and comparing performance on Swarm and creating benchmarks, whereby we will take a metrics-driven approach to improve these next. 


### JS Track 
#### [Bee-JS](https://github.com/ethersphere/bee-js)
* Versions 8.3.1 released
    * Fixed an issue in browsers where the tar header was not properly filled when uploading multiple files


#### [Dashboard](https://github.com/ethersphere/bee-dashboard) & [Desktop App](desktop.ethswarm.org)
* New dApps were added
    * Decentralised Wiki
    * Decentralised OpenStreetMap
    * Devcon.Buzz App
    * Datafund App
* Features
    * Update map data with recent network stat values
    * Add FDP integration (beta)
* Fixes
    * Allow changing Bee API URL
    * Explicitly define type 0 transaction for the gift code redeems


### Ecosystem 

#### Fair Data Protocol 

##### [FairOS-dfs](https://github.com/fairDataSociety/fairOS-dfs/)
* [v0.10.1](https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.10.1) Added ACT support in WASM, improved pod fork logging, and fixed build issues.

##### [Fairdrive Desktop App](https://github.com/fairDataSociety/fairdrive-desktop-app/)
* [v0.2.0](https://github.com/fairDataSociety/fairdrive-desktop-app/releases/tag/v0.2.0): Updated download link in documentation.


### DevRel 

#### Documentation 
* The “Learn” section of the documentation has been renamed to “[Concepts](https://docs.ethswarm.org/docs/concepts/introduction)”, and reorganised for a better flow, and some slightly expanded in several sections. 
* A new “References” section was added to contain reference material removed from the previous “Learn” section.


#### Content 
* [Swarm & Fair Data Protocol: From Data Silos to Decentralised Control](https://blog.ethswarm.org/foundation/2024/swarm-fair-data-protocol-from-data-silos-to-decentralised-control/)
* [Bee Version 2.3.0 - Pre-release Notice](https://blog.ethswarm.org/foundation/2024/bee-2-3-pre-release/)
* [State of the Network: October](https://blog.ethswarm.org/foundation/2024/state-of-the-network-october-2024/)
* [Monthly Development Update – October 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-october-2024/)


### Events 

##### Swarm Community Call – 28 November 2024
The November Swarm Community Call featured updates on the [Bee 2.3.0 release](https://github.com/ethersphere/bee/releases/tag/v2.3.0), including reserve size doubling and the GSOC feature. The team showcased new integrations in the [Desktop App](https://www.ethswarm.org/build/desktop), like decentralised Wikipedia, Open Street Maps and the Datafund App, along with updates on the progress on multi-chain integration and price oracle improvements. Community Talk featured Nicola Ceornea from[ EthOS](https://x.com/EthereumPhone) and Aata from DeBoot, who talked about open hardware, mobile operating systems, decentralised storage, reducing storage friction and  blockchain data accessibility. You can read the whole [Recap here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-28-november-recap/). 


### Upcoming events

##### Swarm Winter Solstice Event
Instead of the usual monthly Swarm Community Call, Swarm Foundation will host its traditional **[Winter Solstice Event on 21 December, 14.00 CET](https://www.addevent.com/event/yR24028303)**. The event will highlight key achievements in core development and ecosystem growth over the past six months while also outlining upcoming focus areas and priorities for the year ahead, fostering an engaging dialogue about future advancements. 


**RSVP:** [https://www.addevent.com/event/yR24028303](https://www.addevent.com/event/yR24028303)

### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!
