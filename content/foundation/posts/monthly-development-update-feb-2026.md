+++
banner = "/uploads/devupdate0226.png"
images = [ "/uploads/devupdate0226.png" ]
categories = [ "Development updates" ]
date = 2026-02-05T00:00:00.000Z
description = "February was a strong month of steady execution across the stack: Bee 2.7.0 rolled out smoothly and is already followed by active testing for the next patch release..."
references_and_footnotes = [ ]
title = "Monthly Development Update – February 2026"
_template = "post"
+++


February was a strong month of steady execution across the stack: **Bee 2.7.0** **rolled out** smoothly and is already followed by active testing for the next patch release, while research continues to define the next round of protocol, tokenomics, and multichain work. Across the developer layer, **Bee-JS** was updated for Bee 2.7 compatibility with several practical improvements, and ecosystem teams kept pushing on usability, AI integration, provenance tooling, and early product prototypes—from the **Swarm Desktop File Manager** and **Mobile Node PoC** to **Datafund’s blockchain-anchored provenance toolkit**. The overall direction is clear: improving core reliability while making Swarm easier to build on, easier to operate, and more relevant to real-world applications.


### [Bee Track](https://github.com/ethersphere/bee) 
* **Successful 2.7.0 Rollout:** [Bee 2.7.0](https://github.com/ethersphere/bee/releases/tag/v2.7.0) was officially released on February 10th as a safe, drop-in upgrade. The rollout has been highly successful, with nearly 90% of nodes already upgraded. You can find more detailed information about this release in our [blog post](https://blog.ethswarm.org/foundation/2026/bee-2-7-0-release/) and the full [release notes](https://github.com/ethersphere/bee/releases/tag/v2.7.0).
* **Active Testing for 2.7.1:** Following the release, the team identified further optimizations around libp2p and Kademlia. A Release Candidate for these improvements is already live on the public testnet.
* **March Deliverables and Next Steps:** The 2.7.1 patch release is expected to land in March. This will be followed by additional patch releases to consistently improve node reliability and efficiency.


### Research Track 
* Development planning for the Pullsync changes is underway, focusing on improvements to network stability in certain edge cases.
* Multichain testnet experiments are scheduled for the month ahead.
* Tokenomics roadmap priorities and implementation details are being defined, starting with withdrawable stake.


### JS Track 
#### Apps
##### [Bee-JS](https://github.com/ethersphere/bee-js)
* Released versions [v11.0.0](https://github.com/ethersphere/bee-js/releases/tag/v11.0.0), [v11.1.0](https://github.com/ethersphere/bee-js/releases/tag/v11.1.0) and [v11.1.1](https://github.com/ethersphere/bee-js/releases/tag/v11.1.1) (latest).
    * We have updated API compatibility to match the newly released Bee v2.7.0.
    * The internal utility function “convertEnvelopeToMarshaledStamp” and type “UploadProgress” have been exposed.
    * AbortController support has been added, allowing HTTP calls to be cancelled from the caller side.
    * Uint8Array request payloads have been replaced with ArrayBuffers to work around an upload size limitation in browser environments.
    * The create-swarm-app quickstart project has been updated as well for the new Bee-JS version.


##### Multichain Library
* We are continuing QA work on the Multichain Funding widget. While the app already functions properly most of the time, we are still patching rare edge cases and improving stability with additional retry logic and a second line of JSON-RPC providers for multiple supported blockchains.


### Ecosystem 
#### Solar Punk 
* **File Management/Swarm Desktop:**
    * [Swarm Desktop v0.52.1](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.52.1): Provided official support for **Bee v2.7** along with bug fixes.
    * **Future Planning:** Active planning is underway for advanced **Folder Handling** and the integration of **Multichain Funding** directly within the File Manager interface to simplify node operations.
* **AI/DeSci:** In collaboration with Taltech, we have started detailed project planning for a **Sovereign Health Data Wallet**. This PoC focuses on emergency use cases, demonstrating how Swarm can securely host critical medical data.
* **AI Integration (MCP):** [Swarm MCP](https://github.com/ethersphere/swarm-mcp) has been updated to include the latest [MCP specification changes](https://modelcontextprotocol.io/specification/2025-11-25/changelog). As the space is evolving rapidly, business research is underway to guide the next phase of AI-related development on Swarm.   
* **Mobile Node PoC:** We have finalized UI refinements and are currently conducting performance measurements before moving toward specifying the requirement for the MVP phase.
* **Multimedia & Streaming:** The team is focused on adding smaller features based on real-life learnings to MSRS (Limited Live Streaming MVP) product currently used, for example, by [CryptoMondays](https://cryptomondays.beebridge.buzz). The roadmap for the next architectural additions has also been completed, including features such as transcoding and identity management using [SwarmID](https://github.com/snaha/swarm-id).

#### Datafund 
* **Blockchain Anchoring Across CLI and SDK**: Added on-chain provenance anchoring to both the [Python CLI](https://github.com/datafund/swarm_provenance_CLI) and [TypeScript SDK](https://github.com/datafund/swarm_provenance_SDK), supporting the Base Sepolia testnet. Provenance records can now be anchored to a blockchain with chain status queries, delegation, batch anchoring, and transfer protection. Chain workflow [documentation and diagrams](https://github.com/datafund/swarm_provenance_CLI/blob/main/docs/chain-workflows.md) have also been added.
* **TypeScript SDK v0.2.0 Released with Blockchain Support**: The [SDK](https://github.com/datafund/swarm_provenance_SDK) now includes ChainClient for blockchain anchoring with batch operations, transform tracking, delegation, and status queries. A blockchain anchoring UI has also been added to the demo web app. A CI/CD pipeline with npm trusted publishing (OIDC) has been set up for automated releases.
* **CLI Examples Library**: Added [10+ example scripts](https://github.com/datafund/swarm_provenance_CLI/tree/main/examples) covering basic upload/download, domain-specific use cases (audit trails, scientific data, encrypted data, market memory), batch processing, stamp management, CI/CD integration, and verification workflows.
* **Provenance Hub Repo and Landing Page**: Created a unified [datafund/provenance](https://github.com/datafund/provenance) umbrella repo with architecture overview and toolkit documentation. The [provenance.datafund.io](provenance.datafund.io) landing page has also been updated with new information. 


### DevRel 
#### Documentation 
* A new “description” field was added to the front matter of each article in the documentation to provide a brief summary and improve LLM compatibility.


#### Content 
* [Bee Version 2.7.0 Release Announcement](https://blog.ethswarm.org/foundation/2026/bee-2-7-0-release/)
* [State of the Network: January 2026](https://blog.ethswarm.org/foundation/2026/state-of-the-network-january-2026/)
* [Monthly Development Update – January 2026](https://blog.ethswarm.org/foundation/2026/monthly-development-update-january-2026/)
* [Swarm Community Call January - Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-january-recap/)


### Events 
##### Swarm Community Call – 26 February

[February’s Swarm Community Call ](https://x.com/i/broadcasts/1mrGmByzOLkJy)focused on three areas: a look back at the **Bee 2.7 release and what comes** next, a walkthrough of the **new** **“Building on Swarm”** developer guides, and a forward-looking community talk on **identity management** led by the Snaha team. While the Swarm Foundation remains focused on refining core infrastructure, we are also steadily reducing friction for both builders and end users.

You are welcome to watch the full event [recording here](https://x.com/i/broadcasts/1mrGmByzOLkJy). 


### Upcoming events
##### [Swarm Workshops](https://workshops.swarm.bzz.link/) 
Introducing: **a new series of practical, no-fluff [workshops](https://workshops.swarm.bzz.link/).** First up in March is **How to Decentralize Any Frontend** – a beginner-to-intermediate session on hosting dApps and websites on decentralized infrastructure, without the usual friction. We’ll cover three routes depending on your knowledge and expectations: Beeport for *drag-drop-deploy simplicity*; the Swarm Desktop App for* direct control with no middleman*; and Bee light node + swarm-cli for *full terminal-based flexibility*. 

In a world where building a site is now trivial, the real question is whether you still need to hand it over to a platform. This workshop is about how not to.

[Read more and sign up](https://workshops.swarm.bzz.link/)


##### **Swarm Community Call – 26 March**
The next Swarm Community Call will take place on **[Thursday, 26 March](https://scc.swarm-devrel.bzz.link/)**, as usual on the last Thursday of the month, at 17:00 CET – [broadcast on the Swarm Foundation’s X](https://x.com/i/broadcasts/1dxYljlkMwyJX).


### People & Culture team
If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
