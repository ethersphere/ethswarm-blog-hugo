+++
banner = "/uploads/devupdate0926.png"
images = [ "/uploads/devupdate0926.png" ]
categories = [ "Development updates" ]
date = 2026-10-05T00:00:00.000Z
description = "September brought work on faster syncing, greater operator control and reliability as the Bee team prepared the next release. Research set a firm direction for moving stamp handling to Ethereum, while SDK and app updates improved feeds, file management and video streaming."
references_and_footnotes = [ ]
title = "Monthly Development Update – September 2026"
_template = "post"
+++

TL;DR: September brought work on faster syncing, greater operator control, and reliability as the Bee team prepared the next release. Research set a firm direction for moving stamp handling to Ethereum, while SDK and app updates improved feeds, file management, and video streaming. Alongside these developments, early AI marketplace demos and plans for Swarm Studio explored new ways to build applications on Swarm.


### [Bee Track](https://github.com/ethersphere/bee)

In September the Bee team focused on preparing the next release, with work across networking, node operations, and stability:

* Key highlights merged for the upcoming release include faster peer discovery and syncing, which will help new and restarted nodes join the network and become eligible for redistribution sooner, and a new API switch that will let operators pause redistribution participation and see when it's safe to stop a node.
* Developers will get finer-grained GSOC subscriptions that let clients choose which chunk fields each message carries, and the staking API will report the actual minimum deposit. A new postage sync option will help nodes work with RPC providers that limit log queries, and access control (ACT) was removed from the chunk and SOC upload endpoints, where it didn't work as intended.
* The team also added fuzz tests across the codebase and fixed the issues they surfaced, made reserve sampling more memory-efficient, shrank the embedded postage snapshot by about 30%, and updated dependencies, including go-libp2p v0.49.0.
* Overall, September focused on network performance, operator control, and reliability, setting the stage for the next release.


### Research Track

* We continue to wrestle with the redesign of the Redistribution Game, where clear steps to sequence improvements have been established but prove hard to adhere to. Competing approaches currently vie for the pool position to make a major contribution to trustless network design, pioneered by Swarm.
* Streaming has arrived as a research topic with testing of network capacity as well as robustness at the center of debate and exploration. Both the simulation of thousands of simultaneous viewers and the causes of the radius change frictions of last November shape the layout of new integration tests.
* We arrived at a strong decision regarding homecoming that sets the firm goal to have all stamp handling on Ethereum to make it easier to get started with Bee and reduce one of the most serious usability hurdles for developers and users.
* A new edition of the Swarm protocol specification is in the works, going through predefined phases making heavy use of multiple AI vendors. To be more useful for humans and AI agents alike it closes the remaining gaps in the current edition and syncs with the reality of the Bee client implementation.
* The Swarm Studio has been announced that will focus on AI-driven, rapidly paced application building to intently chase Swarm killer apps and expand the horizon of Swarm devs and researchers.
* Deletion and GDPR compliance continue to be slow burning, controversial topics coming up in discussions where ideas are being articulated more concretely now.
* Pubsub is being implemented by the Bee team after a focused effort to make the concept as narrow as possible to get an MVP off the ground fast, with a valuable learning about the limits of the AI use in concept and coding work.


### JS Track

#### Apps

##### [Bee-JS](https://github.com/ethersphere/bee-js)

* Released version 13.1.0
    * This version introduces classes for working with rolling feeds, a technique on top of sequential feeds that periodically restart the feed to keep the number of indices short. Rolling feeds work well with mutable postage batches - since feeds periodically restart, old feed indices may be overwritten with new data without breaking the feed.

##### [Core SDK](https://github.com/ethersphere/core-sdk)

* Released versions 0.2.0 and 0.2.1
    * Both new versions improve the stability of the library, fixing edge case bugs in the chunk splitter and the mantaray manifest.
    * Bytes and all its subclasses now implement the Symbol for nodejs.util.inspect.custom. This improves how the objects are printed to the console - previously raw byte dumps, now hex strings.


### Ecosystem

#### Solar Punk

* Swarm Desktop v0.56.0 and Bee Dashboard v0.37.0 are out, moving both apps to the new bee-js v13 API, with fixes to Bee log handling, tray icons and the node map.
* On the File Manager side, the core library for the next version reached a milestone: folder handling and file versioning were completed and passed QA, and the library was migrated to bee-js v13 (file-manager-lib v1.1.0).
* On the AI side, we presented the Swarm AI roadmap at the September Community Call, along with an early demo of our Data-Enriched AI Marketplaces interface: buyer and seller agents transacting in real time, with x402 payments routed through seller-specific splitter contracts. A more developed version is being prepared for Devcon 8.
* On the video streaming side, Swarm HLS Stream v3 was released, bringing adaptive bitrate streaming, crash recovery and more configurable deployments to our streaming stack for Swarm. The infrastructure behind it also moved to automated, repeatable provisioning.


### DevRel

#### Content

* [Swarm Community Call, 24 September – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-24-september-recap/)
* [State of the Network: August 2026](https://blog.ethswarm.org/foundation/2026/swarm-state-of-the-network-august-2026/)
* [Monthly Development Update – August 2026](https://blog.ethswarm.org/foundation/2026/monthly-development-update-august-2026/)


### Events

##### **ETHRome Hackathon – 11–13 September**

ETHRome (11–13 September, Rome) produced 15 submissions, 14 of them built on Swarm, and the adoption pattern is worth recording: 12 of those 14 used Swarm ID, Snaha's browser-based identity layer, which signs postage stamps in the browser and reads batch state from chain, letting a team upload through a public gateway without running a funded node or acquiring xBZZ and xDAI first – which on a three-day deadline removes most of the setup that normally comes before a first upload. Beyond identity, seven projects used ACT for access control, six worked directly with Bee-JS, and three built on feeds.

The submission flow and the showcase both run on Swarm: entries were signed with a browser wallet and written to Swarm with their private fields encrypted client-side, each one linked from a shared feed, and the showcase page that now lists all 14 projects is served from Swarm as well, with its project data pulled from a separate Swarm reference at page load.

##### **Swarm Community Call – 24 September**

[September’s Swarm Community Call](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/9bfaad4f-5bf4-4c2b-a402-23acd36e8fbc) showed several strands of development moving from proposition into practice. SwarmID made perhaps the clearest jump: from the proof of concept introduced earlier this year to a working identity layer used by 12 of the 14 Swarm projects at ETHRome, demonstrating portable identity across applications and a simpler route for developers and users to interact with Swarm.

The call also presented the efforts on following a quite ambitious AI roadmap. Andras from the Solar Punk team demonstrated an emerging stack for agent identity, data access, payments and verifiable reputation, including working agent marketplaces built around Swarm, MCP, ERC-8004, x402 and ACT. Core and research updates covered ongoing Bee performance and security work, the first PubSub implementation for streaming and other real-time applications, and the publication of the DREAM paper on deletable content in immutable storage.

You are welcome to watch the full event [recording here](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/9bfaad4f-5bf4-4c2b-a402-23acd36e8fbc).


### Upcoming events

##### **Swarm Community Call – 29 October**

The next Swarm Community Call will take place on **[Thursday, 29 October,](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/fd4ba42d-e9fa-4a57-ac84-51a74b6d2532)** as usual on the last Thursday of the month, at 17:00 CET – [broadcast on the Swarm Foundation’s X, YouTube and the Swarm network itself](https://scc.swarm.bzz.link/).

##### **Swarm Foundation Team at Devcon 8, Mumbai – 2–7 November**

Swarm’s road to Devcon starts before the conference itself.

At the **Web3Privacy Now Ethereum Cypherpunk Congress**, Protocol Lead **Henning Diedrich** will take the stage, while the **Congress itself will be livestreamed over Swarm** using our latest in-browser node technology for the first time. At the same time, the live broadcast written to Swarm will create its decentralized archive as the event happens.

At **Devcon 8**, Swarm Foundation will have an **Impact Booth**, a space reserved for FOSS, non-profit and values-aligned ecosystem projects. Our team will be there throughout Devcon to talk about infrastructure, demonstrate new technology, help builders explore integrations, and connect Swarm with the wider open and decentralized technology ecosystem.

You’ll also find us across the program. **Viktor Tron** will present *Blob or Chunk — Which One Is Cypherpunk? Infinitely Scalable Data for Smart Contracts*, while **Henning Diedrich** will present *Why Every Supply Chain Blockchain Died: Capture, Neutrality, and Lessons from Inside*, and **Migle Rakitaite** will take the stage covering *Decentralized Media*. Solar Punk’s Levente Kiss will also seize the stage to unpack the decentralized video-streaming pipeline and what we have learned from trying to make sovereign media infrastructure work at real-world scale.

Our presence will not be limited to talks and technical sessions. Swarm will also surface through more creative, participatory formats: **Manifesto Roulette** will turn Swarm into an interactive art installation, while the **livecoding** experiment started during Berlin Blockchain Week returns **on Devcon’s Music Stage** — music created and performed with samples living on Swarm. There may be one more appearance after dark — but let’s leave something for surprise.


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
