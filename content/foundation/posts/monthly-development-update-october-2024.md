+++
banner = "/uploads/devupdate-oct.png"
images = [ "/uploads/devupdate-sep.png" ]
categories = [ "Development updates" ]
date = 2024-11-05T00:01:00.000Z
description = "The Swarm network is preparing for an important upgrade. SWIP-21 is already on the public testnet and once implemented, it will increase nodes’ reserve size."
references_and_footnotes = [ ]
title = "Monthly Development Update – October 2024"
_template = "post"
+++


The Swarm network is preparing for an important upgrade. SWIP-21 is already on the public testnet and once implemented, it will increase nodes’ reserve size. This will make becoming a Swarm node operator much more economically viable. Another important update in the works is the multichain product, which is now in the completed MVP phase. 

There are also new and improved versions of Bee-JS and Swarm CLI available, along with version 1.0.0 of Swarm Actions.

Swarm docs received an AI-powered upgrade for an easier search and understanding of the network’s documentation.

As Devcon approaches, the bulk of October’s Swarm Community Call was dedicated to Swarm’s presence at the event. 


### Bee Track  
* [SWIP-21](https://github.com/ethersphere/SWIPs/pull/56/files) “reserve size doubling” implementation is finished and the feature is already on the public testnet. The team is constantly looking into the behaviour of the nodes and the redistribution game to identify any unexpected results. 
* Facilitating testing for developers by Infrastructure setups.
* Work on the GSOC SWIP is ongoing.


### Research Track 
* [Swip-21](https://github.com/ethersphere/SWIPs/pull/56/files) reserve size doubling is currently being tested and the redistribution game is now running with double reserves and is being observed and calibrated for performance. 
* Performance tests and benchmarks are being run for a second iteration to see performance benefits for multiple file sizes with the multiple erasure code levels. 
* The multichain product MVP is now complete and being reviewed and tested for performance. 


### JS Track 

#### [Bee-JS](https://github.com/ethersphere/bee-js)
* Versions 8.1.0, 8.2.0 and 8.3.0 released
    * Features
        * POST /envelope endpoint added
        * HEAD /bytes endpoint added
        * SWARM_GATEWAY_URL, NULL_TOPIC and NULL_STAMP convenience constants added
        * Support for marshalled stamps added
        * Support for custom HTTP and HTTPS agents added
    * Fixes
        * Handle null pinnings as empty list
        * Do not wrap array in data object
        * Throw error for too long tar entry
    * Misc
        * CI has been fixed, all tests pass
        * [Create-swarm-app](https://www.npmjs.com/package/create-swarm-app) has been updated to use the latest Bee-JS


#### [Swarm CLI](https://github.com/ethersphere/swarm-cli)
* Released version 2.18.0
    * Updates to the latest Bee-JS version to receive the upstream fixes and improvements


#### [Swarm Actions](https://github.com/ethersphere/swarm-actions)
* Released version 1.0.0
    * The following GitHub Actions jobs have been fixed:
        * pr-preview
        * upload-dir
        * Write-feed


### DevOps 
* Helm charts updates:
    * The bee chart has been updated to version 0.16.6, which adds joint ingresses for every set
    * EthExporter: added grouping option
    * TokenExporter added a grouping option


### Ecosystem 

#### Swarm Fellowship
* [Libraries for Efficient Multimedia Delivery & Social Networking](https://www.ethswarm.org/fellowships/solarpunk)


### DevRel 

#### Documentation 
* Algolia search has been integrated into the documentation site for improved search results.
* The “Ask Swarm” AI widget button from [Cookbook.dev](https://www.cookbook.dev/) was integrated into the documentation.
* Guides for Bee client version 2.2.0 features were added to the documentation.


#### [Etherjot](https://github.com/Cafe137/etherjot.com)

* New version to [https://etherjot.com](https://etherjot.com) deployed
    * UI and UX overhauled to simplify the interface and clearly indicate loading times and what happens under the hood
    * Experimental [FDP](https://fdp.fairdatasociety.org/) integration added
    * Explanations and hints added to the Settings page
    * Zip import/export added
    * Addition of links to ENS, blog hash and feed address
    * Addition of self-contained article pages that are easy to download, pin and topup


#### Content 
* [Swarm Community Call, 26 September – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-26-september-recap/)
* [Monthly Development Update – September 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-september-2024/)


### Events 
##### **Swarm Community Call – 31 October 2024**

In the October Swarm Community Call key network updates were presented, starting with SWIP 21, which aims to double the reserve size to enhance network strength. The upcoming multichain support solution was also discussed, promising seamless data uploads using any token. 

The Swarm Foundation announced a new fellowship awarded to Solar Punk. It will be used to develop libraries for multimedia delivery and privacy-focused social networking.

We also got a glimpse of Swarm’s major involvement in Devcon 2024, beginning with [hosting the official site](https://devcon.swarm.eth.limo/en/index.html), while the team members will engage [in several side events](https://lu.ma/swarmdevcon), as well as being present in the main venue at Swarm Impact booth, where, among all else, Devcon.buzz, a privacy-focused app built on Swarm will be showcased.

Lastly, Armagan Ercan from Gnosis Chain shared insights on running a Gnosis node, covering key benefits, how to get started, and future plans for node operators.


### Upcoming events
##### **Swarm Community Call – 28 November 2024**

Swarm Community Calls, held every last Thursday of the month on Discord, are the best way to stay fully up to date with the current development, as well as to seize the opportunity to jump into a live discussion or ask the Swarm team a question! **The next Community Call is on 28 November **([add to calendar](https://www.addevent.com/event/av23716815)). In the meantime, you are welcome to post any questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3); the questions received are answered live at the Calls. 


##### **CryptoMondays Bangkok (Devcon) - 11 November**

CryptoMondays Bangkok is hosting a special Devcon edition on 11 November, offering a unique gathering at a six-story venue, complete with two floors of activities and a rooftop setting. This event, co-hosted by Swarm, dTrinity, and Polkadot, kicks off with opening remarks from crypto veteran Ameen Soleimani, and promises an evening of insightful discussions, networking, and festivities.

**Decentralize AI Now – The Cypherpunk Mission to Save the Future**

Join us for the panel, Decentralize AI Now, where experts from decentralised ecosystems will address the urgent challenge of ensuring privacy, data sovereignty, and transparency in the age of AI. This panel, featuring @Cameron_Dennis_ (NEAR Protocol), @TheGabrielFior (Gnosis Chain), and Gregor (Swarm), will explore how blockchain and user-owned data models can resist censorship and monopolies, creating a future where individuals—not corporations—retain control over data and AI.

RSVP: [https://lu.ma/3d7i2r8p?tk=GFkikt](https://lu.ma/3d7i2r8p?tk=GFkikt)

### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org! \
