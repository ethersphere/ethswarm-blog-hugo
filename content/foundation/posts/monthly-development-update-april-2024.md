+++
banner = "/uploads/dev-update-april.png"
images = [ "/uploads/dev-update-april.png" ]
categories = [ "Development updates" ]
date = 2024-04-05T00:00:00.000Z
description = "April was packed with activity on all fronts in the Swarm ecosystem. The Bee Track released the latest version of libp2p that included the localstore changes package and the merge of the /bee and /debug APIs."
references_and_footnotes = [ ]
title = "Monthly Development Update – April 2024"
_template = "post"
+++



April was packed with activity on all fronts in the Swarm ecosystem. The **Bee Track** released the latest version of libp2p that included the **localstore changes package** and the **merge of the /bee and /debug APIs**. 

The **Research Track** is about to release the **Freezing Quota** feature to **drastically reduce freezing** for node operators, letting them play in more games and earn rewards. Additionally, the team is picking apart the implications of the recent vote to shut down the bonding curve. You can read all about the vote in the **[latest blog](https://blog.ethswarm.org/foundation/2024/announcing-the-outcome-of-swarms-bonding-curve-vote/)**.

The vote also prompted **JS Track** to publish the **[source code](https://github.com/ethersphere/vote.ethswarm.org)** **for the bonding curve vote API**, along with improvements and bug fixes for Bee-JS, Swarm CLI (it's now possible to encode data for different levels of error tolerance) and Gateway Proxy.

Due to Colony's transition to the Arbitrum chain, the Fair Data protocol team will have to recreate the **[Fairdrive DAO](https://github.com/fairDataSociety/Fairdrive-DAO)** on the said chain. And if you'd like to expand your knowledge of  the Fair Data Protocol, there's a [new tutorial](https://github.com/fairDataSociety/tutorials-fairdrive) available.

To wrap it all up, [Swarm Summit is almost around the corner](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/), with a little more than a month to go. If you have a Swarm-related paper that you would like to present to the community, you can submit it **[here](https://summit.ethswarm.org/swarm-summit-2024/cfp)**.


## Tracks
### Bee Track
* The [2.0.1](https://github.com/ethersphere/bee/releases/tag/v2.0.1) patch release was out last week including the latest version of libp2p. There had been issues about increased RAM that was caused by the previous libp2p version, resolved with the upgrade.
* Getting ready for the next release 2.1:
    *  This will include the last batch of the localstore changes package, with major change being the replacement of the storer transactions with leveldb batches. We also have improvements for the deferred uploads, cachestore and pinstore. The above mentioned changes are expected to bring performance improvements and reduced errors.
    * We are introducing the merge of the /bee and /debug APIs. In order to allow sufficient time for the node operators to prepare their systems, in the 2.1 release both the old and the new APIs will be available on different ports, and in the 2.2 release, we will be removing the old APIs, and only the merged ones will be available. Node operators are highly advised to take advantage of this transition period and prepare your machines accordingly. There will also be the relevant warning messages on both APIs and on startup.
* Stay tuned for the announcement of the 2.1 that will happen very soon!


### Research Track
* The Freezing Quota feature is being tested and will soon be ready for release to drastically reduce freezing for node operators, letting them play in more games and earn rewards. 
* The withdrawal threshold mechanism for stake is being developed, along with the neighbourhood hopping with transferable stake - to allow nodes to better position themselves in the network. 
* The voting and implications of the bonding curve is being analysed, and work is commencing on the enhanced oracle soon as well to assist in future price considerations. 


### JS Track
#### Bonding curve vote API 
* Released [source code](https://github.com/ethersphere/vote.ethswarm.org)
    * **Snapshot API Strategy Endpoint** – Contains the code used in the endpoint.
    * **Verification Script** – Adds a script that verifies vote results against fresh blockchain data.
    * **Database Build Script** – Includes a script that builds the database determining the voting power of staking nodes.



#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* [Version 6.9.1](https://github.com/ethersphere/bee-js/releases/tag/v6.9.1)
    * **Feed writer** – Adds the missing index parameter to the feed writer interface
    * **Shape testing** – Automatically checks that Bee node endpoint responses comply with TypeScript interfaces and types, using tests to confirm the correctness of assumptions about shapes.



#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* [Version 2.9.0](https://github.com/ethersphere/swarm-cli/releases/tag/v2.9.0)
    * **Erasure coding** – Enhances the upload command with a new redundancy option that encodes data for error tolerance. Available levels are MEDIUM, STRONG, INSANE and PARANOID. Detailed information is provided before uploading.    


#### [Gateway Proxy](https://github.com/ethersphere/gateway-proxy)
* [Version 0.14.0](https://github.com/ethersphere/gateway-proxy/releases/tag/v0.14.0)
    * **HTML rewrite** – When the HTTP request path doesn't include the .html extension, Gateway Proxy searches for a matching file instead of displaying a 404 Not Found error. This is similar to features in popular web servers like Nginx and Apache.
        * **User Agent based allowlist** – HTTP requests with specific User-Agent substrings bypass the allowlist configuration.
* [Version 0.14.1](https://github.com/ethersphere/gateway-proxy/releases/tag/v0.14.1)
    * **No crash on missing Host header** – Previously, HTTP requests without a Host header would crash Gateway Proxy due to undefined behaviour. This issue has been resolved.


### DevOps 
* Deployed Bee [2.0.1](https://github.com/ethersphere/bee/releases/tag/v2.0.1) to testnet and mainnet.
* Released multiple versions of [Beekeeper](https://github.com/ethersphere/beekeeper) (latest 0.15.9).


### Ecosystem

#### Bonding curve vote 
* [Announcing the Outcome of Swarm’s Bonding Curve Vote](https://blog.ethswarm.org/foundation/2024/announcing-the-outcome-of-swarms-bonding-curve-vote/)



#### Fair Data Protocol
##### [Fairdrive DAO](https://github.com/fairDataSociety/Fairdrive-DAO)
* Colony has transitioned from the Gnosis chain and launched the V3 Beta version on Arbitrum.  For us, this means we'll need to recreate the DAO on Arbitrum. This migration also provides an opportunity to review and potentially optimise how Fairdrive DAO is organised. Read more about this here: https://blog.colony.io/colony-is-going-multi-chain/ 
* [Suggestion](https://xdai.colony.io/colony/fairdrive/decisions/tx/0xc7dd34fab5d0c28ef05eeab542940ba72f0eb9588a08b8844d019936306603ea) to update our communication platform, and host all-hands bi-weekly.

##### [FairPortal](https://fairdrive.fairdatasociety.org/apps/fportal/)
* [UI improvements](https://github.com/fairDataSociety/fair-portal/pull/15)


##### [Fairdrive Web App](https://app.fairdrive.dev.fairdatasociety.org/)
* Learn how to use FDP! The new [tutorial](https://github.com/fairDataSociety/tutorials-fairdrive) provides developer documentation, examples, including a comprehensive tutorial on Fair Data Protocol (FDP), and a spreadsheet dApp implemented using FDP libraries.


### DevRel

#### Documentation 
* The backup instructions for [Swarm Desktop](https://docs.ethswarm.org/docs/desktop/backup-restore/) and [Bee](https://docs.ethswarm.org/docs/bee/working-with-bee/backups#files) have been [updated](https://github.com/ethersphere/bee-docs/pull/583/files) with new screenshots and clearer instructions.
* A [guide to the new withdrawal feature](https://docs.ethswarm.org/docs/bee/working-with-bee/cashing-out#withdrawing-xbzz-rewards-and-native-xdai) for xDAI and xBZZ has been added.

#### Educational Content
* [DevOps for Beginners: Part One](https://blog.ethswarm.org/foundation/2024/devops-for-beginners-pt-one/)


#### Content
* [Swarm Summit 2024: Upload the future](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/)
* [Monthly Development Update – March 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-march-2024/)
* [Swarm Community Call 28 March – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-28-march-recap/)



### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. We are hiring a [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go)), [QA Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/senior-software-engineer-go) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events:
##### **Swarm Community Call – 25 April:** the monthly “stay up to date” event
* April’s Community Call took place on 25 April. The main focus was on the upcoming 2.1 release which was presented in detail, along with future plans for the merge of /bee and /debug APIs as part of the 2.2 release, and the Research team’s roadmap, and on the bonding curve community vote that has since been closed.


### Upcoming events
##### **Swarm Community Call – 30 May 2024**
* Join us every last Thursday of the month at the Swarm Community Call on Discord to stay fully informed, perhaps seize the opportunity to jump into a live discussion, or ask the Swarm team a question! The next Community Call is on 30 May ([add to calendar](https://www.addevent.com/event/vq21267049)). 

You can also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3) or/and subscribe to our newsletter here. 



##### **Swarm Summit 2024 – 20–21 June 2024**
* Swarm Foundation is pleased to announce that the Swarm Summit is to happen **in real life** again! From **20–21 June**, the team will gather in **Ljubljana, Slovenia**, and you are welcome to join them in person, or follow the Summit online, as it will be held as a combined online-IRL conference/event. Save the date, start preparing your submissions – **the Call for papers is out** – and follow the Swarm Community Call to stay up to date. 


##### **Swarm Summit 2024: Hackdays – 17–19 June 2024**
* Swarm Foundation is delighted to invite you to join us IRL on the spot (in Ljubljana, Slovenia) and hack the days away working directly with Swarm Foundation's team members and the extended Swarm Fam. Submit your hack idea via this form and get your travel and accommodation costs covered through the special Swarm [Summit Hacker Grant](https://t.co/DG6UbtyRdE).