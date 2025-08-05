+++
banner = "/uploads/DevUpdate-072025.png"
images = [ "/uploads/DevUpdate-072025.png" ]
categories = [ "Development updates" ]
date = 2025-08-05T00:00:00.000Z
description = "In July, the Bee team released Bee 2.6.0, drastically reducing node spin-up times and improving the onboarding experience. The Research team also reached a significant milestone with the completion of the BeePort app, which allows users to pay for storage on Swarm from other chains. A revision of the entire incentives and staking structure is also underway, following community proposals."
references_and_footnotes = [ ]
title = "Monthly Development Update – July 2025"
_template = "post"
+++


## Monthly Development Update – July 2025

In July, the Bee team released Bee 2.6.0, drastically reducing node spin-up times and improving the onboarding experience. 

The Research team also reached a significant milestone with the completion of the BeePort app, which allows users to pay for storage on Swarm from other chains. A revision of the entire incentives and staking structure is also underway, following community proposals. 

The JS Track continued improving the developer experience with updates to Bee-JS and Swarm-CLI. The latest releases introduced new utility functions, expanded support for wallet and staking operations, and added better feedback mechanisms to guide users through common tasks like creating postage stamps or transferring tokens. 

The Solar Punk team unveiled Swarm Drive—a lightweight CLI tool that syncs local folders with a Swarm stamp, offering decentralised, automated storage. The team also released the Swarm migration toolkit to help users transition smoothly from other storage solutions. 

Swarm Desktop was updated to ensure compatibility with Bee 2.6.0.


### Bee Track  


* We are proud to have released Bee 2.6.0 on 22 July! This version brought major improvements to the user experience, especially for new users, by drastically reducing node spin-up times. 
* The team worked on the Pull-sync protocol and measured the time required for nodes to sync with their peers.
* We are also investigating issues around libp2p’s sharedTCP, a key component for the ongoing in-browser Bee node project. 


### Research Track  

* Pull-sync protocol changes have been reviewed and prioritised for handover to the Bee team.
* The entire incentives and staking model is under review following insights from recent community workshops.
* The BeePort multichain app is complete and has been handed over to management and infrastructure teams.


### JS Track

#### [Bee-JS](https://github.com/ethersphere/swarm-cli)

* Version 9.6.0 released.
* Introduced a miscellaneous utility function “isGateway” to test whether the remote service is running Swarm Gateway.


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)

**Released v2.32.0:**

* Replaces the previous “stake” command with a whole command group.
* Adds “stake withdraw” to transfer surplus stake to the Bee node wallet. 
* Adds “stake recover” to retrieve staked xBZZ from paused staking contracts.
* Adds a new “wallet” command group with “withdraw-bzz” and “withdraw-dai” commands to simplify token transfers from a node wallet to an external, whitelisted wallet address.
* Improves “stamp create” and “stamp buy” flows with early detection of insufficient funds, and guides the end-user on how to fund the node.

**Released v2.33.0**

* Updates to Bee-JS version 9.6.0.
* Leverages “isGateway” test to disable checks that cannot be run when executed against a gateway.


### Ecosystem 

#### Solar Punk

* Released [Swarm Drive](https://github.com/Solar-Punk-Ltd/swarm-drive), a lightweight CLI tool that enables two-way syncing between a local folder and a Swarm stamp, functioning like a decentralized personal drive. It supports auto-syncing and scheduled updates.
* Updated [Swarm Desktop App](https://github.com/ethersphere/swarm-desktop/releases) for compatibility with Bee 2.6.0. Users are encouraged to update.
* Developed a [migration toolkit](https://github.com/Solar-Punk-Ltd/ipfs-to-swarm) for transferring data from IPFS to Swarm. It includes guidance on key differences between the two, setup instructions, postage stamp management, and usage of the CLI-based migration tool—complete with scripts, configuration options, and troubleshooting tips.
* As part of our Swarm Fellowship, Solar Punk continues work on multimedia libraries and social networking tools. 

**Recent updates include:**

* [Comment system](https://github.com/Solar-Punk-Ltd/swarm-comment-react-example) and [chat ](https://github.com/Solar-Punk-Ltd/swarm-chat-react-example)functions
* Emoji reactions (freeform or tied to messages)
* Long, nested comment threads (like on Reddit) 
* Updated UI examples

View demo: [http://65.108.40.58:8081/](http://65.108.40.58:8081/) 



#### Shtuka Research

We’re pleased to share the July Progress Report from Shtuka Research:[ ](https://github.com/shtukaresearch/swarmonomics/releases/tag/2025-07)


* Shtuka Research is undertaking a year-long programme of econometric and mechanism design studies to support a robust, scalable Swarm economy. Enclosed is the [July progress report](https://github.com/shtukaresearch/swarmonomics/releases/tag/2025-07). 


#### Content


* [Signal on Swarm](https://medium.com/coinmonks/signal-on-swarm-798ee0ba0346) by [CipherSnack](https://medium.com/@ciphersnack)
* [Peer-to-Peer Without the Wait](https://medium.com/@ciphersnack/peer-to-peer-without-the-wait-b844ee3931f7) by [CipherSnack](https://medium.com/@ciphersnack)
* [Web3 Promised Freedom—So Why Are We Still Trapped?](https://www.forbes.com/councils/forbestechcouncil/2025/06/23/web3-promised-freedom-so-why-are-we-still-trapped/) by [zeligf](https://x.com/zeligf) - Forbes publication


### DevRel 

#### Content
* [Swarm Community Call, 26 June – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-26-june-recap/)
* [Monthly Development Update – June 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-june-2025/)
* [State of the Network: June 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-june-2025/)
* [Bee 2.6.0 Release Notice Blog Post](https://blog.ethswarm.org/foundation/2025/bee-2-6-0-release/)


### Events 

##### **Swarm Community Call – 31 July**

The July [Swarm Community Call](https://x.com/i/broadcasts/1zqKVjEPByAKB) provided an overview of the **[Bee v2.6.0](https://blog.ethswarm.org/foundation/2025/bee-2-6-0-release/)** release, which brought major improvements in performance, efficiency, and usability. 

The new Swarm Model Context Protocol (MCP) was also introduced—an initiative laying the foundation for decentralised AI. Currently in its Proof of Concept stage, MCP enables AI agents to leverage Swarm for storage and communication, with exciting developments on the horizon.

You are welcome to listen to the [recording here](https://x.com/i/broadcasts/1zqKVjEPByAKB) or find the Recap published in [Swarm News Blog](https://blog.ethswarm.org/).


### Upcoming events


##### **Swarm Community Call – 28 August**

Swarm Community Calls are held on the last Thursday of every month at 17:00 CET on [Discord](https://discord.com/events/799027393297514537/1397206837543047229) and [broadcast on X](https://x.com/i/broadcasts/1djGXVNypnLxZ). The next call is on **28 August** - [add it to your calendar](https://www.addevent.com/event/Ku26223411). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Before the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.



