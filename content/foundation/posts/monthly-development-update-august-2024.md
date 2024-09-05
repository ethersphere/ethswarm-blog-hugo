+++
banner = "/uploads/DevUpdate-aug.jpeg"
images = [ "/uploads/DevUpdate-aug.jpeg" ]
categories = [ "Development updates" ]
date = 2024-09-05T00:00:00.000Z
description = "In August, the Bee Track deployed the Bee 2.2 release on the public testnet. Expect a final release soon. It includes Access Control Trie (ACT) for managing the confidentiality of content, neighbourhood hopping with transferable stakes and the option to withdraw stakes."
references_and_footnotes = [ ]
title = "Monthly Development Update – August 2024"
_template = "post"
+++


In August, the Bee Track deployed the [Bee 2.2 release](https://github.com/ethersphere/bee/releases) on the public testnet. Expect a final release soon. It includes [Access Control Trie (ACT)](https://docs.ethswarm.org/docs/learn/technology/act) for managing the confidentiality of content, neighbourhood hopping with transferable stakes and the option to withdraw stakes. At the same time, preparations are underway for version 2.3 of the Bee client.

Meanwhile, the Research Track has started developing the proof-of-concept for multichain support after finalising the specifications. It is also working on the contract updates for the price oracle and the specifications for the sister neighbourhood game.

The JS Track has been busy with several projects. They released Bee-JS v7.1.1 with updated JSDocs, improving the accessibility of the documentation. Etherjot received a major UI overhaul and is now accessible on dedicated addresses [here](https://etherjot.com).

The Ecosystem team forged a partnership with Latitude.sh and developed a Blueprint for instant Bee light node deployment across 23 sites worldwide. The documentation team is busy preparing docs for Bee client 2.2.0.

To round things off, the Swarm Community Call in August provided insights into the upcoming Bee 2.2 release, the new [Swarmy service](https://swarmy.cloud), which enables interactions with Swarm without a node, and Latitude’s Blueprint for Swarm.


## Tracks


### Bee Track  
* [Release 2.2](https://github.com/ethersphere/bee/releases) is in the final testing stage, and is already on our public testnet. After a few testing iterations, we will be announcing the release in the next few days. In the release we will be having the following:
    * Access Control Trie (ACT): uploaders will be able to manage the confidentiality of content and control access to restricted content.
    * Neighbourhood hopping: moving a node to another neighbourhood carrying the stake together.
    * Stake withdrawal: node operators will be allowed to withdraw the appreciation of their stakes.
* In parallel, we are preparing for our 2.3 release, which will be covering:
    * Improvements on the rules of the neighbourhood splitting.
    * Price oracle.
    * Playing the sister neighbourhood’s game, for increased rewards.


### Research Track 
* The multichain support PoC has been specced and development has started. 
* The price oracle has been modelled on historical data and contract updates are in the works. 
* Our specifications for playing the sister neighbourhood game is under way. 
* Currently, the 2.2 release is tested and ready and will be released and updated in the usual release schedule now, including the neighbourhood hopping with transferable stake. 


### JS Track 


#### [Bee-JS](https://github.com/ethersphere/bee-js)
* V7.1.1 has been released with updated JSDocs. All functions now point to the correct and relevant documentation sections.


#### [Etherjot](https://github.com/ethersphere/etherjot-web)
* Etherjot is now available via [https://etherjot.com](https://etherjot.com) and [https://etherjot.eth.limo](https://etherjot.eth.limo). The UI has received a significant overhaul for more focused web3 blogging.

#### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* V0.16.0 has been released!
    * Adds new soft-auth and post-size-limit options to tweak runtime behaviour.
    * Removes some HTTP headers from the proxied response, enabling gateway-proxy to work with a reverse proxy, e.g. nginx.
    * Introduces a GET /gateway endpoint which indicates whether the host is a Bee node or a gateway-proxy instance.

### DevOps 
* Bee helm chart was updated for the upcoming release where debug api is deprecated [bee-0.16.3](https://github.com/ethersphere/helm/releases)



### Ecosystem 
#### Documentation 
* The documentation for the upcoming Bee client 2.2.0 is currently being drafted and will be published along with the new client release when it is ready.


#### Content 
* [Monthly Development Update – July 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-july-2024/)
* [State of the Network: July](https://blog.ethswarm.org/foundation/2024/state-of-the-network-july-2024/)




### Events 


##### **Swarm Community Call – 29 August 2024**

In August’s Community Call, we learned in detail about the upcoming Bee 2.2 release, as well as what improvements and features are planned for the following upgrade. A new service was presented, Swarmy, which enables uploading and downloading content to/from Swarm without having to install anything. In Community Talk, a 1-minute Bee set-up was demonstrated by Latitude.sh team members, and Solar Punk achievements and plans for the future were revealed. You are welcome to read the whole Recap [here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-29-august-recap/). 


### Upcoming events


##### **Swarm Community Call – 26 September 2024**

Swarm Community Calls, held every last Thursday of the month on Discord, are the best way to stay fully up to date with the current development, as well as to seize the opportunity to jump into a live discussion or ask the Swarm team a question! The next Community Call is on 26 September ([add to calendar](https://www.addevent.com/event/rS22652644)).

You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3)**.**


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org! \