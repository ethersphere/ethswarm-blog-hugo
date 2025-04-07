+++
banner = "/uploads/DevUpdate0325.jpg"
images = [ "/uploads/DevUpdate0325.jpg" ]
categories = [ "Development updates" ]
date = 2025-04-05T00:01:00.000Z
description = "In March 2025, the Bee Track focused on improving upload and download efficiency with Release 2.5, including optimisations to the pusher, pushsync protocol, and peer routing."
references_and_footnotes = [ ]
title = "Monthly Development Update – March 2025"
_template = "post"
+++


In March 2025, the Bee Track focused on improving upload and download efficiency with [Release 2.5](https://github.com/ethersphere/bee/releases/tag/v2.5.0), including optimisations to the pusher, pushsync protocol, and peer routing. 

The Research Track has brought the multichain support product to the MVP stage, and it’s now ready for community use and feedback. The JS Track released [Bee-JS](https://github.com/ethersphere/swarm-cli), now at version 9. This marks a significant overhaul of the library, adding token, elliptic, and Swarm classes, client-side chunking and stamping, and improved Postage Batch handling. The new release also includes the latest versions of [Create Swarm App](https://github.com/ethersphere/create-swarm-app), [Swarm-CLI](https://github.com/ethersphere/swarm-cli), and [Swarm Desktop](https://github.com/ethersphere/swarm-desktop). 

The DevRel Documentation team published a [new GSOC page](https://docs.ethswarm.org/docs/develop/tools-and-features/gsoc) and reorganised the [Installation section](https://docs.ethswarm.org/docs/bee/installation/quick-start/). In case you missed it, the March Swarm Community Call covered these updates–you can read [the recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-march-recap/) or watch the event [here](https://x.com/i/broadcasts/1OwxWXggYgMKQ).


### Bee Track 

* [Release 2.5](https://github.com/ethersphere/bee/releases/tag/v2.5.0) is out, focusing on improvements to uploads and downloads through several optimisations to the pusher, pushsync protocol, and peer routing.
* Our metrics tool is progressing toward enhanced performance and speed measurements, helping us better understand network behaviour.
* The node spin-up/ease-of-use project has kicked off, and the Bee team has been working on several related tasks.


### Research Track  

* Benchmarks and statistics have been collected  and are being updated with every release to monitor performance.
* The multichain product demo is ready for community use and feedback. 
* [SWIPs](https://github.com/ethersphere/SWIPs) are being reorganised and assessed for priorities and development. 
* As well as approvals for network stability changes 


### JS Track 
####  [Bee-JS](https://github.com/ethersphere/swarm-cli)

Version 9 of Bee-JS has been released! It includes a major overhaul of the library with a focus on developer experience, type interoperability, and a rich feature set. Below is an overview of the additions in the new version:

* Token classes (BZZ and DAI) for easy instantiation, arithmetic operations, and exchanges.
* Elliptic classes (PrivateKey, PublicKey, EthAddress, Signature) to conveniently convert between classes and to sign/verify messages.
* Swarm classes (Reference, Topic, Identifier, FeedIndex, etc.) for properly typed Swarm operations.
* Client-side chunking with the MerkleTree class, which enables efficient chunk streaming in both the browser and Node.js.
* Client-side stamping with the Stamper class, which enables pre-signed uploading via gateways.
* Postage Batch developer experience improvements–estimate cost, create, and extend stamps without having to learn about the intricacies of `amount` of `depth`. New fields on postage batches, such as duration, size, and usage, make stamp handling more intuitive.
* Complete Manifest (a.k.a Mantaray) API to construct, manipulate, load, and save manifests on the client-side.
* GSOC support via three methods: gsocMine, gsocSend, and gsocSubscribe.


#### [Create Swarm App](https://github.com/ethersphere/create-swarm-app)

* A new version has been released which scaffolds Swarm projects using the new Bee-JS version.


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)

* The new Swarm-CLI release includes:
    * Updates to the new Bee-JS version
    * Adds new commands and options to support ACT and grantees
    * Adds the cid command to convert Swarm hashes to CIDs and vice versa


#### [Swarm Desktop](https://github.com/ethersphere/swarm-desktop)

* A new version has been released with updates to the new Bee version (2.5.0).


### DevRel 

#### Documentation 

* A [new page](https://docs.ethswarm.org/docs/develop/tools-and-features/gsoc) was published with an introduction to GSOC along with a usage guide.
* A major reorganisation of the Installation section was published in [PR #719](https://github.com/ethersphere/bee-docs/pull/719):
    * [New Quickstart page](https://docs.ethswarm.org/docs/bee/installation/quick-start)
    * [Updated Config page](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration)
    * [New Node Types page](https://docs.ethswarm.org/docs/bee/working-with-bee/node-types)
    * Various minor updates–see [commits](https://github.com/ethersphere/bee-docs/pull/719/commits)
* Additional small fixes and corrections were published–see [closed PR list](https://github.com/ethersphere/bee-docs/pulls?q=is%3Apr+is%3Aclosed) for details.


#### Content 

* [Swarm Community Call, 27 February – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-february-recap/)
* [Monthly Development Update – February 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-february-2025/)
* [State of the Network: February 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-february-2025/)


### Events 

##### **Swarm Community Call – 27 March**

[The March Swarm Community Call](https://x.com/i/broadcasts/1OwxWXggYgMKQ) covered significant progress on network stability following the Bee 2.5.0 release, multichain support, enhancements to node usability, ease of node spin-up. It also featured the new Bee-JS release and an OCI registry implementation on Swarm–all aimed at making Swarm more efficient and accessible.

 You are welcome to read the recap [here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-march-recap/) or watch the [recording here](https://x.com/i/broadcasts/1OwxWXggYgMKQ). 


### Upcoming events

##### **Swarm Community Call – 24 April**

Swarm Community Calls are held on the lastThursday of every month on Discord at 17.00 CET. The next call is on **24 April** - [add to calendar](https://www.addevent.com/event/FQ25299609). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Prior to the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team:
* Join the team shaping the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!
