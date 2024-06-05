+++
banner = "/uploads/dev-update-may.png"
images = [ "/uploads/dev-update-may.png" ]
categories = [ "Development updates" ]
date = 2024-06-05T00:00:00.000Z
description = "Bee 2.1 is out and live. Key changes include improved stability, performance and limits to the number of freezes per round."
references_and_footnotes = [ ]
title = "Monthly Development Update – May 2024"
_template = "post"
+++



[Bee 2.1](https://github.com/ethersphere/bee/releases/tag/v2.1.0) is out and live. Key changes include improved stability, performance and limits to the number of freezes per round. Node operators should upgrade ASAP and run a new **`_db repair-reserve_`** command for each node immediately after the upgrade to fix any corrupted chunks.

The Research Track finished the development and planning SWIP for Bee 2.2 that will introduce neighbourhood hopping with transferrable stake, and a withdrawal of stake threshold mechanism. 

Bee-JS is now on version 7 and it will return an error when attempting to create a postage batch with a low amount. New versions of Swarm CLI, Bee Dashboard and Swarm Desktop are also out to reflect changes in the new version of Bee. 

On the Ecosystem side, there’s a new [Swarm x Digital Ocean partnership](https://blog.ethswarm.org/foundation/2024/swarm-unveils-a-partnership-with-digital-ocean/) and a new section in Docs for the [Gateway Proxy tool](https://docs.ethswarm.org/docs/develop/tools-and-features/gateway-proxy).

To wrap it all up, Swarm Summit is coming on 20 June, but the action will actually start on 18 June with dedicated hackdays. [Join the event live in Ljubljana](https://www.meetup.com/ethereum-swarm/events/301034793/), Slovenia, or tune in via live stream on [StreamETH](https://streameth.org/swarm).


## Tracks
### Bee Track
* V[2.1](https://github.com/ethersphere/bee/releases/tag/v2.1.0) was released on 28 May and covers the following:
    * Localstore transactions refactor to bring increased stability and performance gains. The same leveldb transaction is now used for both indexstore and chunkstore writes. Also, now when the reserve capacity is reached, the number of chunks that are evicted is just enough to fall below the capacity. Previously, all the chunks belonging to a batch would be evicted, and we now expect that we will notice a reduction in the loss of chunks.
    * The research team has introduced a new redistribution contract which introduces a limit to the number of freezes per round.
    * Merge of the /debug under the /bee API is introduced in this release. At the moment, both the previous and the new solutions are available in different ports, but the Debug API will be removed entirely in the next release (v2.2.0). All nodes should be prepared accordingly.
* All node operators are called to upgrade their nodes to the latest version. A new **`_db repair-reserve_`** command has been introduced  which will scan the node’s reserve and fix any corrupted chunks.  **Very important notice: All node operators should make sure to run this command immediately following the upgrade to the new version!!** This command should be run for one by one node on the same disk! 


### Research Track
* 2.1 We released the freezing quota which we’re getting ready to turn on imminently.  We're gathering data around freezing, which will all be greatly reduced. 
* 2.2 SWIP development and planning is finished and development is under way for neighbourhood hopping with transferrable stake, and a withdrawal of the stake threshold mechanism. 
* Discussions and proposals for side projects have begun, for example the price oracle speeding up, and multichain support PoC. 


### JS Track


#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* Released [v7](https://github.com/ethersphere/bee-js/releases/tag/v7.0.0)
    * Debug API has been merged to :1633. All functions are available on the Bee class.
    * Attempting to create a postage batch with a low amount (TTL) will now throw an error. Bee requires TTL to be at least 1 day. This affects the createPostageBatch method in the Bee class.
    * ESModules (import syntax) and Deno are now supported. If your project’s import style or bundler do not work with Bee-JS, please [open an issue](https://github.com/ethersphere/bee-js/issues).
    * When uploading files in Node.js, choose using streams (fs.createReadStream) over reading files into the memory. This way, you can avoid out-of-memory errors and upload sizes can be unlimited. When uploading folders (uploadFilesFromDirectory), this is handled automatically by Bee-JS.



#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released [v2.10](https://github.com/ethersphere/swarm-cli/releases/tag/v2.10.0)
    * This version bumps Bee-JS to v7 and merges the Debug API to :1633. The bee-debug-api-url flag has been removed.  

#### [Bee Dashboard](https://github.com/ethersphere/bee-dashboard)
* Released [v0.26.1](https://github.com/ethersphere/bee-dashboard/releases/tag/v0.26.1)
    * This version bumps Bee-JS to v7 and merges the Debug API to :1633. The REACT_APP_BEE_DEBUG_HOST environment variable has been removed.

#### [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)
* Released [v0.41](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.41.1)
    * The new version should automatically update your Bee node to version 2.1.

ssss

### DevOps 
* Deployed Bee [2.1.](https://github.com/ethersphere/bee/releases/tag/v2.0.1)0 to testnet and mainnet.
* Released multiple versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest 0.16.1).


### Ecosystem

#### Partnerships
* [Swarm unveils a partnership with Digital Ocean](https://blog.ethswarm.org/foundation/2024/swarm-unveils-a-partnership-with-digital-ocean/)

#### Bonding curve vote 
* [Bonding curve shutdown](https://blog.ethswarm.org/foundation/2024/bonding-curve-shutdown/)



#### Fair Data Protocol
##### [FairOS-dfs](https://github.com/fairDataSociety/fairOS-dfs)
* [Some fix](https://github.com/fairDataSociety/fairOS-dfs/pull/623), including a new way of login.


### DevRel

#### Documentation 
* The Develop section of the docs has been reorganised for easier navigation.
* Updated links to out-of-date content from the Gnosis Chain docs, including links to the newest Gnosis Chain [bridge](https://bridge.gnosischain.com/)
* A new [page](https://docs.ethswarm.org/docs/develop/tools-and-features/gateway-proxy) was added for the Gateway Proxy tool.
* The API reference docs have been updated for the 2.1 release.
* Improvements made to the postage batch [calculators](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch#time--volume-to-depth--amount-calculator).
* Various small corrections have been made to the Learn section and other sections throughout the docs.


#### Content
* [Swarm Summit 2024: Upload the future](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/)
* [Bee Version 2.1 – Two Weeks’ Notice](https://blog.ethswarm.org/foundation/2024/bee-2-1-pre-release/)
* [Monthly Development Update – April 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-april-2024/)
* [State of the Network: April](https://blog.ethswarm.org/foundation/2024/state-of-the-network-april/)



### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. We are hiring a [Senior Software Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/senior-software-engineer-go) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events
##### **Swarm Community Call – 30 May: **the monthly “stay up to date” event
* May’s Community Call provided insights on the latest release of Bee 2.1 and what’s coming next, a more detailed look into what to expect at the [Swarm Summit](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/), and a demo of the [bmt-js library wrapped up in a new Python package](https://github.com/aviksaikat/bmt-py), courtesy of community member Avik Saikat. You are welcome to read the full recap [here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-30-may-recap/).
* Next Swarm Community Call: 25 July!


### Upcoming events
##### **Swarm Hackdays and Summit 2024 **

Swarm Summit returns in an in-person format after five years, setting up a stage in the vibrant city of Ljubljana, Slovenia!

The perfect opportunity to meet incredible people from the Swarm community, immerse yourself in discussions on the future of the internet and create lasting memories.

The majority of the event will be brought to you [online as well](https://streameth.org/swarm) by StreamETH, but nothing matches the experience of engaging face-to-face with our team, community, partners and special guests.

* 18–19 June: Hackdays
* 20–21 June: Swarm Summit: Upload the Future – Main Event
* 21 June, evening: Afterparty with [Modeselektor](https://www.youtube.com/watch?v=3Sp8Vhwts6U)
* 22 June: Chill in Bled

[RSVP Now](https://www.meetup.com/ethereum-swarm/events/301034793/)

You can read more about the Summit and Hackdays in [this blog ](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/)and stay alert for posts revealing the full schedule in the coming days.