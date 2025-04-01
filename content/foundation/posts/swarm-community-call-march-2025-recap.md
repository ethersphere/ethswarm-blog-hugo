+++
banner = "/uploads/SCCrecap0325.jpg"
images = [ "/uploads/SCCrecap0325.jpg" ]
categories = [ "Events" ]
date = 2025-04-01T00:00:00.000Z
description = "The March Swarm Community Call covered significant progress on network stability, multi-chain support, enhancements to node usability, and ease of node spin up."
references_and_footnotes = [ ]
title = "Swarm Community Call, 27 March – Recap"
_template = "post"
+++

[The March Swarm Community Call](https://x.com/i/broadcasts/1OwxWXggYgMKQ) covered significant progress on network stability, multi-chain support, enhancements to node usability, and ease of node spin up.  It also presented the new [Bee-JS](https://github.com/ethersphere/bee-js) release, OCI registry implementation on Swarm, and an informational SWIP on data provenance.  


## Bee 2.5.0 Release: Performance and Stability Upgrades

The March release of **[Bee 2.5.0](https://github.com/ethersphere/bee/releases/tag/v2.5.0)** introduced several key improvements, particularly in performance, stability, and resource usage. Some notable enhancements include:

* **Better garbage collection** for more efficient memory management
* **Smarter postage stamp handling** to optimise data transactions
* **Faster and more reliable data retrieval and uploads**

So far, approximately **70% of nodes** have upgraded to Bee 2.5.0, and early results indicate a more stable and efficient network. The Bee and Research tracks will soon run comparative performance tests to measure improvements against previous benchmarks.


## Network Behaviour Monitoring with Swarm Scan

Understanding network behaviour remains a top priority for the Swarm Foundation. This will now be addressed through **[Swarm Scan](https://swarmscan.io/)**, a tool currently in development to measure key performance indicators such as upload/download speeds and latency across various regions. The goal is to provide deeper insights into real-world network performance. Once implemented, these insights will help further optimise Swarm’s infrastructure.


## Multi-Chain Support: Expanding Swarm’s Capabilities

The research team has also made significant progress on **multi-chain support**, with the **[MVP now ready](https://x.com/ethswarm/status/1906987441522610331)**. This functionality will enable cross-chain swaps that directly purchase postage stamps, allowing users without their own nodes to upload data via Swarm’s gateway. 

A demo was presented during the call, showcasing how the system integrates with a wallet extension for seamless transactions. Beta testing opportunities will be announced in the **[Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286)**, where the community can provide feedback ahead of the official launch.


## Making Node Setup Easier and Faster

Running a Swarm node is becoming more straightforward thanks to five major improvements:

1. **Quick Start Guide:** A streamlined guide to help users set up and fund a Bee node, create a postage batch, and start uploading data within minutes
2. **Postage Syncing Improvements:** Reducing the time required for nodes to synchronise postage batch data
3. **Warm-up Time Reduction:** Cutting down on the connection wait time before a node becomes fully operational
4. **Developer Experience Enhancements:** Better documentation and tooling for building Swarm-based decentralised applications
5. **Node Funding Improvements:** Exploring ways to simplify the process of funding Bee nodes, potentially leveraging upcoming multi-chain dapp features


## Bee-JS Given Another Boost

Áron presented the latest release of [Bee-JS](https://github.com/ethersphere/bee-js), which brings a significant overhaul focused on improving developer experience, type interoperability, and expanding its feature set. Here's what’s new:

* Token classes (BZZ and DAI) for easy instantiation, arithmetic operations, and token exchange
* Elliptic classes (Includes `PrivateKey`, `PublicKey`, `EthAddress`, and `Signature`) for convenient conversion between classes, as well as signing and verifying messages
* Swarm classes (Properly typed utilities like `Reference`, `Topic`, `Identifier`, and `FeedIndex`) for enhanced Swarm operations


![Swarm Types](/uploads/swarm-types.png)


* Client-side chunking using the MerkleTree class for efficient chunk streaming in both  browsers andNode.js
* Client-side stamping with the `Stamper`class, which allows pre-signed uploads via gateways

![Client-side Stamping](/uploads/client-site-stamping.png)

* Postage Batch developer experience enhancements: simplifying cost estimations, stamp creation and extension–without needing to deal with `amount` or `depth` complexities. New fields such as duration, size, and usage improve usability


![Postage-Batch](/uploads/postage-batch.png)



* Complete Manifest (a.k.a Mantaray) API which enables building, manipulating, loading, and saving manifests on the client-side
* GSOC support now includes three methods: `gsocMine`, `gsocSend`, and `gsocSubscribe`

In addition, [Swarm-CLI](https://github.com/ethersphere/swarm-cli) has been upgraded to the new Bee-JS version, introducing new commands and options to support ACT (Access Trie Control) and a `cid` command for seamless conversion between Swarm hashes and CIDs. 



## Swarm for Containerised Software Distribution

Andrew from DeBoot/ Uncloud presented a novel use case for Swarm in the realm of **containerised software distribution**. Given the widespread adoption of Docker and other container technologies, integrating Swarm with these systems could open up a significant market. The team has developed a custom **Swarm storage driver** for Docker registries, allowing container images to be stored and distributed via Swarm. This development has the potential to bring **decentralised storage** to millions of DevOps professionals worldwide.


## Advancing Data Provenance on Swarm: A New Framework Proposal

The last part of the call was dedicated to the latest updates on data provenance within Swarm, presented under the fellowship awarded to [Datafund](https://datafund.io/) for developing a toolkit for data and model provenance in decentralised AI. 

The proposed framework is designed to provide a decentralised storage layer for provenance metadata and data, ensuring immutability and reliability. It supports various provenance standards without enforcing a specific format, offering users the flexibility to choose the most suitable standard, while supporting time-to-live tracking for stamps and top-up mechanisms. This ensures efficient data availability management and cost control, simplifying adoption for both developers and users and bridging the gap between decentralised technologies and mainstream use cases.

This integration could attract new users and applications that require secure and transparent data management. The framework also has the potential to assist users in complying with emerging regulations, such as the EU AI Act.

Thank you all! The next Swarm Community Call will be held on 24 April, 17.00 CET on [Discord](https://discord.com/events/799027393297514537/1344704631586029680), and will be [broadcast on X](https://x.com/i/broadcasts/1vOxwXQrXzgKB) as well—[add to calendar](https://www.addevent.com/event/zb25028179). 
