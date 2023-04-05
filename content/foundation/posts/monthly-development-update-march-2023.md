+++
banner = "/uploads/devupdate-3.png"
categories = ["Development updates"]
date = 2023-04-04T22:00:00Z
description = "Bee client is now version 1.13.0 and is bringing breaking changes. This includes the upgrade of the go-libp2p, which uses a new format for the p2p keys. The update will exclude nodes from storage incentives unless they have enough balance to cover at least five storage-incentives-related transactions."
references_and_footnotes = []
title = "Monthly Development Update – March 2023"

+++
## The go-libp2p has been upgraded

**Bee client is now version 1.13.0 and is bringing breaking changes**. This includes the upgrade of the go-libp2p, which uses a new format for the p2p keys. The update will exclude nodes from storage incentives unless they have enough balance to cover at least five storage-incentives-related transactions.

## The price oracle model is all set up

The **price oracle model is set up** and is being continuously tested and developed in a cluster. The development of Phase 4 of the storage incentives roadmap is running in parallel and you can also check out the new [Storage incentives paper here](http://parallel).

## A new Swarm Desktop is out

On the UI side of things, the **JS Track** has released a **new Swarm Desktop version** ([0.20.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.20.0)) to include the latest changes in the Bee client. They have made numerous upgrades and bug fixes in the latest [Swarm-CLI](https://github.com/ethersphere/swarm-cli/releases) and [Bee-JS](https://github.com/ethersphere/bee-js/releases).

## New updates in the Fair Data stack

The **Fair Data Protocol** released a **new version of** **the Fairdrive Desktop App, FairOS, fdp-storage, Blossom** and published a new [**FIP**](https://github.com/fairDataSociety/FIPs/pull/71).

## Bounties, good data upload, a how-to blog and Ethereum Zürich

The **Ecosystem** is also buzzing with activity. We invite you to check out the open bounties and if your project is focused on doing social good, the Swarm Odyssey Data Upload sponsorship initiative is now sponsoring good data uploads to Swarm. You can also show your support for privacy and digital freedom by getting yourself some awesome swag in the [Freedom shop](https://freedomshop.org/collections/swarm).

If you’re interested in future-proofing your website, the [new blog ](https://blog.ethswarm.org/foundation/2023/how-to-publish-a-website-on-swarm-using-the-swarm-desktop-app-a-step-by-step-guide/)by the **DevRel** team shows you how to publish it on the Swarm network and give it that Web3 boost.

From 14–16 April, the Ethereum community will gather at a meetup in Zurich. Swarm's **Daniel A. Nagy** will be there to talk about the upcoming price oracle, and you can swing by our booth at any time for a friendly face-to-face chat with the team.

## Tracks

### **Bee Track**

##### New Bee Release [1.13.0](https://github.com/ethersphere/bee/releases/tag/v1.13.0) was deployed – Breaking change

* The main focus of this release has been the upgrade of our communication library – go-libp2p, which uses a new format for the p2p keys.
* Golang version upgraded to 1.20.
* Another important news is that a node will no longer participate in storage incentives if the node's xDAI balance is not enough to cover at least five storage-incentives-related transactions. The status of the wallet can be checked using the new field in the redistributions status API.

### **Research Track**

* Work on the network statistics continues, whereby we’re uncovering certain patterns in neighbourhood, node, and distribution round behaviour.
* The oracle modelling is now set up and is continuing as well as development and testing in a cluster.
* Phase 4 of the storage incentives is in development and running in parallel to other developmental tracks.
* The [Storage Incentives paper](https://t.co/v7MGmMJikG) was released and new diagrams are to follow to give more context

### **JS Track**

##### [**Swarm Desktop v0.20.0**](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.20.0)

* Updates Bee to 1.13.0
* Migrates chain-enable property

##### Swarm-CLI v2.1.0

* Changes single file upload to stream data instead of reading it all to memory
* Fixes “Can not create a string longer than 0x1fffffe8 characters” bug when uploading large data
* Fixes “Invalid time value” bug
* Fixes printing feed “Number of updates”

##### Bee-JS v6.0.0-pre.6

* Release candidate for an under-the-hood revamp
* Changes HTTP library to axios
* Fixes Node18+ compatibility issues
* Fixes segmentation fault when running jest and having bee-js as a dependency

### **Fair Data Protocol**

* **Fairdrive Desktop App version** [**0.1.5**](https://github.com/fairDataSociety/fairdrive-desktop-app/releases/tag/v0.1.5) **released**
* FairOS version [0.9.3](https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.9.3) released
* fdp-storage version [0.7.1](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.7.1) released
* Blossom version [0.2.3](https://github.com/fairDataSociety/blossom/releases/tag/blossom-ext-v0.2.3) released
* [FIP #71](https://github.com/fairDataSociety/FIPs/pull/71) about External account generator in process of review

### **Ecosystem**

##### **Data Upload Sponsorships**

* [**Swarm Odyssey Data Upload**](http://my.ethswarm.org/uploads) **is empowering social good startups, non-profits, and research projects to store their data in a censorship-resistant fashion**

##### Active bounties in progress

* [Extend Swarm gateway to support registering uploaded files](https://bounties.gitcoin.co/issue/29813)
* [PDF viewer Dapp for Fairdrive, using Blossom to access fdp-storage](https://bounties.gitcoin.co/issue/29812)
* [Implement Slate rich text editor as Fairdrive dApp](https://bounties.gitcoin.co/issue/29819)

##### Open bounties:

* [Integrate WinAMP with Fairdrive](https://bounties.gitcoin.co/issue/29335)
* [Implement a dApp using Blossom extension and fdp-storage](https://bounties.gitcoin.co/issue/29811)

### **DevOps Track**

* Deployed [Bee](https://github.com/ethersphere/bee) to the mainnet (v1.13.0).
* Released the [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.12.0).

### **DevRel**

##### [**Etherjot**](https://github.com/Cafe137/etherjot)

* Etherjot enables you to effortlessly create a blog on Swarm. It takes care of the publishing process and layout, allowing you to focus on writing. You can easily add article pages and menu pages one at a time. If you have a markdown file ready to be published, simply use a straightforward command, and it will be accessible on your website.

##### Educational content

* [How to Publish a Website on Swarm Using the Swarm Desktop App: A Step-by-Step Guide](https://blog.ethswarm.org/foundation/2023/how-to-publish-a-website-on-swarm-using-the-swarm-desktop-app-a-step-by-step-guide/)

##### The Swarm Community Call

* The Swarm Community Call, our main monthly online event, was held on 30 March. You can read a recap blog post about it [here](https://blog.ethswarm.org/foundation/2023/swarm-community-call-30-march-recap/).

### **Upcoming events**

##### **Ethereum Zurich**

* [**Ethereum Zurich**](https://ethereumzuri.ch/ ) - From 14–16 April the Ethereum community will gather at a meetup in Zurich. Swarm’s **Daniel A. Nagy** will be there to talk about Swarm and you can swing by our booth at any time for a friendly face-to-face with the team.

##### **Swarm Community Call**

* **Swarm Community Call -** our main monthly online event, will take place on 27 April at 17:00 CET in the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286) ([add to calendar](https://www.addevent.com/event/yr16580319)). Meanwhile, you are welcome to send any questions you might have for the teams building the Swarm network by using this [online form](https://airtable.com/shrBRyrMkXFsJvLS3) for them to be addressed on the call.