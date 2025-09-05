+++
banner = "/uploads/082025-devupdate.jpg"
images = [ "/uploads/082025-devupdate.jpg" ]
categories = [ "Development updates" ]
date = 2025-09-05T00:00:00.000Z
description = "The Bee team made steady progress on the WASM implementation contributions, a key part of assisting in the otherwise community driven development of Bee in the browser."
references_and_footnotes = [ ]
title = "Monthly Development Update – August 2025"
_template = "post"
+++


The Bee team made steady progress on the WASM implementation contributions, a key part of assisting in the otherwise community driven development of Bee in the browser. Major progress was made on secure WebSocket communication with AutoTLS, support for multiple underlay addresses, and alignment on node certificates. Work also advanced on the Pullsync SWIP, with metrics implemented and dashboards nearing completion.

The Research team finalised the Bee WASM architecture and began implementing the pull-sync SWIP. Discussions also moved forward on key proposals, including negative incentives and smart neighbourhood management.

The JS Track shipped [Bee-JS](https://github.com/ethersphere/swarm-cli) versions 9.7.0 through 10.0.0, introducing features like improved storage handling, a new extendStorage method, and better debug support. [Swarm-CLI](https://github.com/ethersphere/swarm-cli) updates included Bee 2.6.0 support, expanded metadata display, and fixes for postage batch handling. The Swarm Gateway introduced Pretty URL support, streamlining content access.

In the Ecosystem, development of the Swarm Desktop App continued with a new File Manager aimed at lowering entry barriers for users, scheduled for release at the end of September. Work also progressed on multimedia streaming, decentralised chat through DevCon.buzz, and extending the AI Model Context Protocol (MCP) from proof-of-concept to MVP.

Content efforts included two new blog posts, [The Future of AI is Decentralized](https://solarpunk.buzz/decentralized-ai-future-swarm-mcp-poc/), and It’s Being Built on Swarm and [From IPFS to Swarm](https://solarpunk.buzz/from-ipfs-to-swarm-decentralized-web-migration-tool): Your Bridge to a Truly Decentralized Web. Bee documentation also received a series of corrections and improvements.

The August [Swarm Community Call](https://x.com/i/broadcasts/1djGXVNypnLxZ) highlighted progress on Bee 2.7, ecosystem projects like Swarmy, BeePort, and MCP, and featured a conversation with Lou Kerner on the evolving Web3 landscape. A full recap is available on the blog.


### Bee Track  
* The Bee team made steady progress on the WASM implementation contributions, a key part of assisting in the otherwise community driven development of Bee in the browser.One major milestone was advancing secure WebSocket communication, specifically, AutoTLS. The team is now resolving the final reachability issues to ensure smooth and secure connections for the nodes. 
* Support for multiple underlay addresses is also underway. Following several design iterations and close collaboration with the research team, a final architecture has been defined and is now being implemented. Additionally, there was significant progress in defining how to handle node certificates, which is a crucial step in ensuring browser-native nodes remain secure and reliable.
* Another key focus this month was the Pullsync SWIP. The first stage–adding metrics and visualising them via dashboards—is now nearly complete. Implementation of the SWIP itself has already begun, in coordination with the research team.


### Research Track  
* The research team finalised the Bee Wasm architecture, and implementation is now underway.
* Discussions with the Bee team over the pull-sync SWIP have resulted in a clear plan, and this will be a central focus for September.
* There were also productive conversations around other major proposals, particularly the negative incentives and smart neighbourhood management SWIPs, which the team is eager to begin implementing.


### JS Trackd
#### [Bee-JS](https://github.com/ethersphere/swarm-cli)
* Released versions 9.7.0 .. 10.0.0
    * Features
        * A new “isWarmingUp” flag has been added to the “getStatus” method, indicating whether Bee is ready to upload and download data.
        * We are now using the “debug” package, meaning that running projects using Bee-JS with the “DEBUG=bee-js:*” environment variable will add debug messages to the log.
        * Methods related to storage creation and extension now support the “erasureCodeLevel” and “encryption” parameters, which adjust calculations by assuming that all uploads will be done with the same settings.
        * A new “extendStorage” method has been added, which supports extending both the duration and the capacity of a postage batch in one step.
        * PSS and GSOC handlers now require a mandatory “onClose” handler to ensure that the lifecycle of the WebSocket connection is properly handled and anticipated.
        * JSDocs have been significantly improved for the available methods, including code examples and links to the Bee API reference.
    * Bug Fixes
        * It is now possible to set the index-document and error-document properties in the “streamDirectory” method.
        * An issue has been fixed related to unmarshalling encrypted manifests in the MantarayNode class.
        * Storage-related methods now depend on the “batchTTL” field instead of “amount” in storage methods to provide accurate duration calculations.


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released versions 2.34.0 and 2.35.0
    * Features
        * The “get-bee” utility command has been updated to download Bee version 2.6.0.
        * The “manifest list” command now also displays the Mantaray node root metadata.
    * Bug Fixes
        * Postage batches can now be bought in dev mode by specifying the “--dev” flag.
        * Encrypted references are now properly saved unencrypted to disk after download.
        * Postage batches are no longer checked after uploading to a gateway, which previously printed an error message
        * Wrapped feeds are now used more consistently throughout the commands.


#### [Swarm Gateway](https://github.com/ethersphere/swarm-gateway)
* Pretty URL support has been added, helping to automatically serve index.html files without having to specify in the URL, as well as allowing the .html extension to be omitted for other paths.




### Ecosystem 
#### Solar Punk
* As a part of [Swarm Desktop App](https://github.com/ethersphere/swarm-desktop) a File Manager app is in development, designed to lower the barrier for new users. It now mirrors conventional file manager interfaces and simplifies terminology (e.g. "drives" instead of “postage stamps”). Release is planned for the end of September.
* File Manager ACT: while the first milestone is under development, specifications are being prepared for a follow-up phase that will enable sharing via [ACT](https://docs.ethswarm.org/docs/concepts/access-control/), bringing the tool closer to full personal cloud storage functionality.
* Multimedia Streaming Restricted Solution: as a continuation of the previous sales demo, a freemium streaming solution is being developed. Partners can apply for "slots" to stream videos via dedicated landing pages and announce live streams with URLs in advance (e.g. for scheduled conference talks). 
* Decentralized chat application: Solar Punk is preparing for the new conference season with a new version of [DevCon.buzz](https://devcon.buzz/), now featuring updates to the [Comment System](https://github.com/Solar-Punk-Ltd/swarm-comment-react-example) library, including message threads and emojis.
* AI MCP: the proof-of-concept for Swarm Model Context Protocol (MCP) has been finished. The next step is to evolve it into a fully functioning MVP.

#### Content 
* [The Future of AI is Decentralized, and It’s Being Built on Swarm](https://solarpunk.buzz/decentralized-ai-future-swarm-mcp-poc/)
* [From IPFS to Swarm: Your Bridge to a Truly Decentralized Web](https://solarpunk.buzz/from-ipfs-to-swarm-decentralized-web-migration-tool)


### DevRel 
#### Documentation 
* Numerous small corrections and fixes were made to the Bee documentation website. Refer to the [latest closed PRs](https://github.com/ethersphere/bee-js-docs/pulls?q=is%3Apr+is%3Aclosed) for details.


#### Content 
* [Monthly Development Update – July 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-july-2025/)
* [Swarm Community Call, 31 July – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-31-july-recap/)


### Events 
##### **Swarm Community Call – 28 August**

The August's [Swarm Community Call](https://x.com/i/broadcasts/1djGXVNypnLxZ) highlighted major progress in core development and looked ahead to Bee 2.7. Updates also covered ecosystem projects including Swarmy, Beeport, and the Model Context Protocol (MCP). A broader discussion explored accessibility and usability improvements, such as global pinning and Swarm Desktop. The call concluded with a conversation with a special guest Lou Kerner, Founder of the CryptoMondays Collective, on the shifting Web3 landscape amid regulatory changes, privacy concerns, and the rise of decentralised AI.

You are welcome to read the recap here or listen to the [recording here](https://x.com/i/broadcasts/1djGXVNypnLxZ). 


### Upcoming events
##### **Swarm Community Call – 25 September**

Swarm Community Calls are held on the last Thursday of every month on [Discord](https://discord.com/events/799027393297514537/1386618353740939335) and [broadcast on X](https://x.com/i/broadcasts/1zqKVjEPByAKB) at 17.00 CET. The next call is on **25 September** - [add it to your calendar](https://www.addevent.com/event/FK26537395). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Before the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team:

Join the team shaping the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 

Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!