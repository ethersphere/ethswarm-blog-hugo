+++
banner = "/uploads/scc0226-recap.png"
images = [ "/uploads/scc0226-recap.png" ]
categories = [ "Events" ]
date = 2026-03-04T00:00:00.000Z
description = "February’s Swarm Community Call focused on three areas: a look back at the Bee 2.7 release and what comes next, a walkthrough of the new “Building on Swarm” developer guides, and a forward-looking community talk on identity management."
references_and_footnotes = [ ]
title = "Swarm Community Call, 26 February – Recap"
_template = "post"
+++

[February’s Swarm Community Call ](https://x.com/i/broadcasts/1mrGmByzOLkJy)focused on three areas: a look back at the **Bee 2.7 release and what comes** next, a walkthrough of the **new** **“Building on Swarm”** developer guides, and a forward-looking community talk on **identity management** led by the Snaha team. While the Swarm Foundation remains focused on refining core infrastructure, we are also steadily reducing friction for both builders and end users.


### Core Development Updates

The call opened with an update on **[Bee 2.7.0, released ](https://blog.ethswarm.org/foundation/2026/bee-2-7-0-release/)** on 11 February. The release was framed as a **safe drop-in upgrade**: no migrations, no required configuration changes, and all new features remaining opt-in. Bálint noted that adoption had already moved quickly, with **nearly 90% of nodes upgraded** by the time of the call.

The release itself introduced groundwork in **peer-to-peer connectivity**, especially around improving compatibility across different network setups. Browser nodes can now address peers more effectively, **TLS connections** are supported, and automatic, verifiable certificates are included. Alongside this, the release emphasized **stability and long-term predictability**.

This included:
* Improvements to handling erasure-coded data
* Refined management of pinned content
* More robust ENS resolution
* Fixes for several edge-case errors
* Improved feed compatibility with legacy formats
* Various bug fixes, API updates, and a Go version upgrade


Looking ahead, the team has already identified further P2P improvements, and a **2.7.1 patch release** is **expected in March**, with more to follow. The stated goal is straightforward: make Bee more **stable, efficient, reliable, and easier to operate** over time.

The update also touched on the **Swarm Desktop App**, where a new version has been released and users are prompted to upgrade automatically on launch.

A notable addition is the new **File Manager**, now available in the left-hand navigation. This marks an important shift in how storage is handled in the Desktop App: instead of a single upload action, users can now organize files through drives, manage version history, restore earlier versions, and move content to trash. In practical terms, this makes the Desktop App  more usable as an everyday client and strengthens its role as the simplest way to run a light node and interact directly with the network.

What followed were updates from the Research team. One area of focus is the **tokenomics roadmap**: a broader overhaul of incentive systems and economic mechanics. **Withdrawable stake** has already been agreed upon and is moving toward development, though the design of the **queue system** for withdrawals is still under discussion.

A more detailed document outlining related tasks, epics, and roadmap items is expected to be shared in the coming weeks.

On the protocol side, a key effort is the planned **revision of the pull-sync protocol**, with current work examining edge-case failures that can disrupt the network, particularly around **radius changes**.

The team is also running testnet experiments exploring multi-chain scenarios, including the possibility of operating a **Swarm testnet on Base**.

In parallel, internally reported bugs have been reviewed, discussed, and are being worked through as part of ongoing stabilization efforts.

At the end of the Core development segment, a new series of practical workshops from the **Swarm DevRel team** was announced, beginning in **March**.

The first session, **How to Decentralize Any Front End**, is presented as a **hands-on, no-fluff workshop** aimed at beginner-to-intermediate users who want to host apps and websites on decentralized infrastructure without unnecessary complexity. Date and details are expected to drop this week. 


### In Focus — New Developer Guides

Noah introduced the new **[“Building on Swarm” section in the documentation](https://docs.ethswarm.org/docs/develop/introduction/)**, designed as a clearer and more practical entry point for developers. The section presents **guides in a structured progression, moving** from basic workflows to more advanced use cases. Previously, much of this information existed across documentation, Discord threads, and community memory. The new structure aims to make that path clearer.

Most of the guides include **working examples** with code snippets and explanations, allowing builders to move directly from concept to implementation.

Among the guides highlighted on the call were:
* **Working with a file system and routing**, focused on **Manifests** and how they map file names or paths to content on Swarm. This is essential for preserving directory structures, building virtual file systems, and supporting application routing.
* **Running a gateway**, a guide for setting up **swarm-gateway**, which is intended to replace the soon-to-be-deprecated **Swarm proxy** tool. This guide focuses on infrastructure configuration, covering DNS setup and command-line deployment.


Noah noted that the guides are still being refined. Current work includes a new guide on **using Feeds for dynamic content**, including “feeds of feeds.” Feedback, issues, and pull requests are welcome via the **BDOC repo** on the **ethersphere GitHub**.


### Community Talk — SwarmID: Identity Management for Swarm

The final segment featured Attila from the Snaha team, introducing **SwarmID**: a proof-of-concept identity layer aimed at filling a long-recognized gap in the Swarm stack.

The motivation is practical. While Swarm provides decentralized data storage and delivery, identity remains closely tied to infrastructure rather than to users themselves. This limits portability across devices and complicates the development of applications with user-level accounts.

It also affects storage funding. Developers currently need to manage postage batches directly within their applications, often implementing custom logic to do so. 

SwarmID proposes **moving identity **and **postage stamp management** **into a portable application layer** that can operate across apps and devices.

At the moment, SwarmID is being built primarily for **web applications** and includes:
* A **JavaScript library**
* A dedicated **account management interface**

From a security perspective, the system runs inside an **iframe**, so connected applications do not gain direct access to private keys unless explicitly authorized by the user. Communication is handled through **encrypted chunks**, allowing the model to function securely even when accessed via a gateway.

The current feature set includes:
* **Account creation** using either an **Ethereum wallet** or a **passkey**
* **Support for multiple identities** under a single account
* **Local accounts** (read-only, browser-stored, no postage required)
* **Synced accounts** (network-writing accounts that store encrypted data on Swarm and manage postage-backed writes) \


On the API side, the team reported implementations for:
* Chunk data upload and download
* File upload and download
* Both feed types
* Access control

All data is encrypted and chunked client-side, using the node’s chunk API. Most APIs are modeled after Bee-JS but simplified, as postage handling is automated in the background.

The demo walkthrough showed a user signing up with a passkey or Ethereum account, generating a default identity, and managing connected apps, identities, and postage systems through the interface.

Attila also outlined open challenges:
* Safari’s Intelligent Tracking Protection, which complicates iframe-based data sharing
* Deterministic Ethereum wallet-based key derivation comparable to passkeys
* Managing shared postage batches across devices
* Supporting temporary session keys with expiration

SwarmID is **not production-ready yet**. The team is seeking feedback, with the goal of completing a proof-of-concept by the end of March 2026 before expanding usage and building a more comprehensive demo application.

This presentation framed SwarmID as an expansion of Swarm’s scope: from a storage and delivery layer toward becoming a real user platform-network. By separating identity from infrastructure, it enables applications that rely on persistent accounts, portable identities, and frequent signing operations, such as messaging, creator tools, and other interactive apps.

Those interested in contributing or trying out SwarmID were encouraged to contact Attila on the [Swarm Discord.](https://discord.gg/9EJTdUKa)

As **[Discord](https://discord.gg/9EJTdUKa) remains the main space** for developer discussions, tech support, and connecting directly with the Swarm team, we encourage you to **post any follow-up questions there**—and to **keep an eye on the ongoing public threads** if you’d rather just follow along.

The next Swarm Community Call will take place on **[Thursday, 26 March](https://scc.swarm-devrel.bzz.link/)**, as usual on the last Thursday of the month, at 17:00 CET – [broadcast on the Swarm Foundation’s X](https://x.com/i/broadcasts/1dxYljlkMwyJX).