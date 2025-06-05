+++
banner = "/uploads/DevUpdate0525.png"
images = [ "/uploads/DevUpdate0525.png" ]
categories = [ "Development updates" ]
date = 2025-05-05T00:01:00.000Z
description = "Node onboarding became even faster—nodes now spin up in under 5 minutes thanks to improved warm-up logic and postage snapshot support. The in-browser node project kicked off, spearheaded by Pavel with the Bee team’s protocol-level support, initially focused on WebSocket integration and more."
references_and_footnotes = [ ]
title = "Monthly Development Update – May 2025"
_template = "post"
+++


May’s Swarm Community Call covered all of this and more. You can [watch the recording](https://x.com/i/broadcasts/1vOxwXQrXzgKB).

Node onboarding became even faster—nodes now spin up in under 5 minutes thanks to improved warm-up logic and postage snapshot support. The in-browser node project kicked off, spearheaded by Pavel with the Bee team’s protocol-level support, initially focused on WebSocket integration and more.

The Research Track took the [Multichain App](app.ethswarm.org) across the finish line, finalising it for production release along with fresh documentation. Meanwhile, SWIPs got reshuffled, bringing key pullsync enhancements and DA/insurance proposals front and centre.

JS Track had a busy month, pushing five new [Bee-JS](https://github.com/ethersphere/swarm-cli) updates (9.1.2 to 9.4.0). These included smarter batch handling, streamlined methods, human-friendly formatting, and new utility functions. [Swarm-CLI](https://github.com/ethersphere/swarm-cli) kept pace, syncing to Bee-JS improvements with version 2.28.0.

[Swarm Gateway](https://github.com/ethersphere/swarm-gateway) also made big strides, entering its hardening phase. Highlights include dynamic allow/deny lists, real-time policy updates, and moderation features—fully compatible with MySQL and MariaDB.

Documentation expanded significantly, featuring advanced Bee-JS usage examples and an easier-to-navigate API reference.

This month’s [Swarm Community Call](https://x.com/i/broadcasts/1ynJOldpDgwxR) came straight from ETHPrague, featuring Niki’s node updates, Callum’s insights on the Multichain App, and Pavel’s sneak peek at the browser-based Bee client. 


### Bee Track  
* Easier and quicker node spin-up is closer than ever. The improved warmup time and the use of postage snapshots during startup are bringing spin-up time to under 5 minutes.
* The in-browser node project has been kickstarted and will be our next big milestone. Pavel is implementing the feature, with the Bee team supporting all necessary protocol-level changes. The team is working on identifying what’s needed, with WebSocket support at the heart of the project, alongside several other developments.


### Research Track  
* The multichain dApp is now ready for production and is being finalised with documentation and release updates.
* The SWIP library has been updated and prioritised, with pullsync improvements and DA/insurance SWIPs taking precedence.


### JS Track  

#### [Bee-JS](https://github.com/ethersphere/swarm-cli)
* Released version 9.1.2 to fix minimum postage batch amount being off by one.
* Released version 9.2.0, updating effective batch utilization thresholds. This allows batches smaller than 4GB effective capacity to be created, with “depth” values more accurately reflecting storage size.
* Released version 9.2.1 which deprecates “getAllPostageBatch” in favour of “getPostageBatches”,  as well as “getAllGlobalPostageBatch” for “getGlobalPostageBatches”.
* Released version 9.3.0 which exposes the rchash method on the Bee class to calculate reserve commitment hash duration in seconds.
* Released version 9.4.0, adding a “represent” function to the Bytes (and respective subclasses), Size, and Duration classes. These can be used instead of toString for a simplified, human-friendly textual representation.


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released version 2.28.0, which simply updates to the new Bee-JS version to take advantage of upstream improvements.


#### [Swarm Gateway](https://github.com/ethersphere/swarm-gateway)
* The new Swarm Gateway project is going through the hardening phase, in which existing features are receiving fixes and additional automated tests to ensure the core functionality is solid.
* Notable features of the project which were not available in its predecessor, Gateway Proxy, are real-time settings for file-, website- and ENS policies, dynamic allow- and deny lists, and user-facing pages for approval requests and reports.
* Tested and ready to be used with MySQL 8+ and MariaDB.


### Ecosystem 

#### Content
* [Signal on Swarm](https://medium.com/coinmonks/signal-on-swarm-798ee0ba0346) by [CipherSnack](https://medium.com/@ciphersnack)


### DevRel 

#### Documentation 
* Several new pages have been [published](https://github.com/ethersphere/bee-js-docs/pull/238) for the Bee-JS documentation, with instructions and examples of more advanced features ([GSOC](https://bee-js.ethswarm.org/docs/gsoc/), [ACT](https://bee-js.ethswarm.org/docs/act/), [SOC & feeds](https://bee-js.ethswarm.org/docs/soc-and-feeds/), etc.).
* The [API reference specification](https://bee-js.ethswarm.org/docs/api/) has been streamlined for easier navigation and re-added to the Bee-JS documentation site.


#### Content 
* [Swarm Community Call, 24 April – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-24-april-recap/)
* [Monthly Development Update – April 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-april-2025/)
* [State of the Network: April 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-april-2025/)

#### Demo apps
* [Bchan](https://bchan.bzz.limo/) - A private message board allowing users to post images, text, and links across various threads 


#### Conferences
* EthPrague
    * Talk by Viktor Tron: Incentivisation in Swarm. [Watch livestream over Swarm](https://swarmstream.eth.limo/#/watch/video/77dcb8bea23381b380b6c1017c68e87b1b1badec/7c42c9e1-3f6f-46d6-980d-67a6fb399ba1) (no voice first 11 min, due to tech issue)
* Web3Privacy meetup
    * Talk by Viktor Tron: Signal in Swarm. [Watch livestream](https://swarmstream.eth.limo/#/watch/video/77dcb8bea23381b380b6c1017c68e87b1b1badec/0c1fa446-6268-4b98-818d-69e5e67a9c3e) over Swarm
* EthGlobal Hackathon Prague
    * [Buzz mint](https://buzz-mint.eth.limo/) - A decentralised NFT creator built by Swarm team member Mark. A  Swarm-hosted app that lets you generate AI images, upload them to Swarm’s decentralised storage cross-chain, and mint NFTs on Gnosis, with or without an OpenAI API key. [Demo video](https://x.com/0xCardiE/status/1929932063001526683).


#### Upcoming Conferences

* [ProtocolBerg](https://protocol.berlin/#schedule) (12-13.6.2025)
    * Talk by Viktor Tron: Non-local redundancy: Erasure coding and dispersed replicas for robust retrieval in the Swarm peer-to-peer network. June 12, 11:00-11:20, Main Stage - Cinema 10
    * Workshop by Aron Soos: How to Decentralize Any Front-End, June 12, 12:50-13:30
* Web3Privacy Hackathon Berlin
    * Workshop by Aron Soos: How to Decentralize Any Front-End
* [Dappcon](https://dappcon.io/) - meet the Swarm Team at Dappcon.


### Events 

##### Swarm Community Call – 29 May
[May’s Swarm Community Call](https://x.com/i/broadcasts/1vOxwXQrXzgKB) was delivered live from EthPrague, featuring a report from the conference along with the usual core developer updates. Niki presented upcoming release features, while Callum shared research insights and details about the Multichain app release.

The Community Talk section was a special treat: Pavel discussed his in-browser Bee client development, mfw78 updated us on his Rust client version, and Aata joined the conversation to lead a discussion on network topology, client diversity, and the challenges of porting Bee.

You are welcome to read the recap [here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-24-april-recap/) or listen to the [recording here](https://x.com/i/broadcasts/1vOxwXQrXzgKB). 


### Upcoming events

##### Swarm Community Call – 26 June

Swarm Community Calls are held on the last Thursday of every month on [Discord](https://discord.com/events/799027393297514537/1364915279917875252) and [broadcast on X](https://x.com/i/broadcasts/1ynJOldpDgwxR) at 17.00 CET. The next call is on **26 June** - [add it to your calendar](https://www.addevent.com/event/rb25578762). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Before the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team:

Join the team shaping the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 

Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!