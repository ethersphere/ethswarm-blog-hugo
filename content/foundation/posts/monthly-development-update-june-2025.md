+++
banner = "/uploads/DevUpdate-062025.png"
images = [ "/uploads/DevUpdate-062025.png" ]
categories = [ "Development updates" ]
date = 2025-07-04T00:01:00.000Z
description = "In June 2025, the Bee Track took a pause to rethink its entire testing strategy after an unexpected delay to the 2.6 release. Meanwhile, the Bee and Research Tracks continued their collaborative work on the SWIP for pullsync protocol improvements and made notable progress on the in-browser node project."
references_and_footnotes = [ ]
title = "Monthly Development Update – June 2025"
_template = "post"
+++


In June 2025, the Bee Track took a pause to rethink its entire testing strategy after an unexpected delay to the 2.6 release. Meanwhile, the Bee and Research Tracks continued their collaborative work on the SWIP for pullsync protocol improvements and made notable progress on the in-browser node project.

The Research Track moved the [Multichain product](app.ethswarm.org) closer to its v1 launch, with a pending public release. Updated network benchmarks also showed significantly improved upload speeds.

The JS Track delivered notable releases: [Bee-JS v9.5.0](https://github.com/ethersphere/bee-js/releases/tag/v9.5.0) brought new methods for withdrawable stakes and external wallet withdrawals, alongside buffer handling fixes. [Swarm-CLI v2.31.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.33.0) added utility commands, status updates, and compatibility upgrades in anticipation of the next Bee release. 

Documentation now includes clear, dedicated [instructions for stake migration](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#stake-migration), making it easier for everyone to navigate staking contract upgrades smoothly.

June’s Swarm Community Call provided clarity on the Bee 2.6.0 release delay, showcased the Multichain app launch plans, and introduced Shtuka Research’s new economic research programme. Etherna also shared valuable insights from their user experience innovations with [Bee.net](https://github.com/Etherna/bee-net) and [Beehive](https://github.com/Etherna/beehive). Catch all the highlights in the recap or watch the session [here](https://x.com/i/broadcasts/1vOxwXQrXzgKB).


### Bee Track  
* After the unexpected delay of the 2.6 release, the engineering teams considered it inevitable and a priority to look into their testing strategy. They are revisiting the entire process, including testing environments and their conditions. 
* The Bee and Research teams are actively working on the pullsync protocol improvements SWIP and evaluating the proposed changes.
* There were also important discussions and good progress on the in-browser node project. The team has encountered some issues that need to be resolved in the context of this initiative.


### Research Track  
* The [Multichain product](app.ethswarm.org) is approaching its v1 finish line and is under embargo pending the optimal release timing 
* Network performance speed tests have been repeated, showing even more improved upload speeds
* The remaining Disperse Replica additions/PR is ready and offers full strategy coverage 
* The SWIP library has been audited and prioritised, with the pullsync SWIP and soon-to-be-announced data-availability/insurance SWIP at the forefront. More on the SWIP library to come


### JS Track  
#### [Bee-JS](https://github.com/ethersphere/bee-js)
* Release v9.5.0
    * Add withdrawable stake-related methods
    * Add withdrawal to external wallets methods
    * Fix property merging when request body is a large buffer


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Release v2.31.0
    * Add “utility rchash” command
    * Add reserve information to status
    * Allow specifying BZZ as staking unit
    * Check chainsync status before creating batch
    * Update package for ethereumjs-wallet to eliminate warning during install
    * Use wrapped feed to maintain compatibility with the upcoming Bee release


#### [Swarm Gateway](https://github.com/ethersphere/swarm-gateway)
* Release v1.0.4
    * Add content-type to metrics endpoint
    * Fix uploads using large buffers




### Ecosystem 

#### Partnership
* [Programme announcement: Swarmonomics](https://blog.ethswarm.org/foundation/2025/shtuka-partnership/)


#### Content
* [Signal on Swarm](https://medium.com/coinmonks/signal-on-swarm-798ee0ba0346) by [CipherSnack](https://medium.com/@ciphersnack)
* [Peer-to-Peer Without the Wait](https://medium.com/@ciphersnack/peer-to-peer-without-the-wait-b844ee3931f7) by [CipherSnack](https://medium.com/@ciphersnack)
* [Web3 Promised Freedom—So Why Are We Still Trapped?](https://www.forbes.com/councils/forbestechcouncil/2025/06/23/web3-promised-freedom-so-why-are-we-still-trapped/) by [zeligf](https://x.com/zeligf) - Forbes publication


### DevRel 


#### Documentation 
* A dedicated section with [stake migration instructions](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#stake-migration) was added to the Bee documentation to serve as a consistent source of guidance for migrating stake during a staking contract upgrade.


#### Content 
* [Swarm Community Call, 19 May – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-19-may-recap/)
* [Monthly Development Update – May 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-may-2025/)
* [State of the Network: May 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-may-2025/)




#### Conferences
* [ProtocolBerg](https://protocol.berlin/#schedule) (12-13 June 2025)
    * Talk by Gyuri & Viktor Trón: [Non-local redundancy: Erasure coding and dispersed replicas for robust retrieval in the Swarm peer-to-peer network.](https://watch.protocol.berlin/65a90bf47932ebe436ba9351/watch?session=685452df90bd41297b64713e)
    * Workshop by Áron Soós: [How to Decentralize Any Front-End](https://watch.protocol.berlin/65a90bf47932ebe436ba9351/watch?session=68546dd490bd41297b40be03)
* Web3Privacy Meetup Berlin
    * Workshop by Áron Soós: How to Decentralize Any Front-End


### Events 


##### **Swarm Community Call – 26 June**
The June's [Swarm Community Call](https://x.com/i/broadcasts/1vOxwXQrXzgKB) provided important updates from core development, including details on why the Bee 2.6.0 release was postponed, and launch plans for the Multichain app, which is ready for public testing at [app.ethswarm.org](app.ethswarm.org). 

Andrew and Aata from Shtuka Research introduced a new research programme aimed at advancing the Swarm economy through rigorous econometric and mechanism design studies. Finally, Mirko da Corte from Etherna presented performance and UX innovations developed through Bee.net and Beehive, sharing findings from their 8-month research into enhancing Swarm's user experience.

You are welcome to read the recap [here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-26-june-recap/) or listen to the [recording here](https://x.com/i/broadcasts/1vAxRDNzWQZGl). 


### Upcoming events


##### **Swarm Community Call – 31 July**

Swarm Community Calls are held on the last Thursday of every month on [Discord](https://discord.com/events/799027393297514537/1386618353740939335) and [broadcast on X](https://x.com/i/broadcasts/1zqKVjEPByAKB) at 17.00 CET. The next call is on **31 July** - [add it to your calendar](https://www.addevent.com/event/vZ25996868). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Before the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team:

Join the team shaping the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 

Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!