+++
banner = "/uploads/2.0-release.png"
images = [ "/uploads/2.0-release.png" ]
categories = [ "Development updates" ]
date = 2024-03-15T00:00:00.000Z
description = "With less than two weeks until the launch of Bee 2.0 on March 26th, now is a time of great anticipation for the Swarm community and decentralised storage enthusiasts around the globe. This release is not just an update, it's a major step forward in our journey towards creating a more fair, censorship-resistant, and user-driven internet. Bee 2.0 introduces world class data retrievability with the addition of erasure coding - a powerful and cost effective data protection technology, along with widespread improvements to stability, security, and privacy."
references_and_footnotes = [ ]
title = "Announcing Bee 2.0: Pioneering Decentralised Storage"
_template = "post"
slug="announcing-bee-2.0-pioneering-next-gen-decentralised-storage"
+++


With less than two weeks until the launch of Bee 2.0 on March 26th, now is a time of great anticipation for the Swarm community and decentralised storage enthusiasts around the globe. **This release is not just an update**, it's a major step forward in our journey towards creating a more fair, censorship-resistant, and user-driven internet. 

Bee 2.0 reinforces Swarm's role as a decentralised storage pioneer with the introduction of world class data retrievability enabled by the addition of [erasure coding — a powerful and cost effective data protection technology](https://blog.ethswarm.org/foundation/2023/erasure-coding-supercharges-swarm/). The 2.0 update also includes a significant upgrade to user experience through widespread changes that bring improvements to stability, security, and privacy. 

## The Journey So Far

Bee 2.0 represents the culmination of months of significant technical advances as well as the broader growth of the Swarm ecosystem. On the technical side, development of the Bee client has been marked by substantial refactoring to enhance code maintainability and facilitate the development of new features. These developments laid the foundation for the significant upgrades introduced in the 2.0 release, including the new erasure coding feature which forms the cornerstone of the release. 

Parallel to the refactoring has been the rollout of the [postage stamp price oracle](https://blog.ethswarm.org/foundation/2023/oracle-overview/) which enables dynamic pricing based on network usage — a key component for Swarm's self-sustaining economic system. The release of the price oracle also marks the completion of [Swarm's storage incentives system](https://blog.ethswarm.org/foundation/2022/the-mechanics-of-swarm-networks-storage-incentives/).

The above technological developments have also been made against a backdrop of rapid growth within the Swarm network, with [thousands of staking nodes](https://swarmscan.io/) contributing to a vibrant, expanding global community, and the [continually evolving storage incentives economy](https://blog.staging.ethswarm.org/foundation/2024/state-of-the-network-february/). The same period also so the growing prominence of [SWIPs (Swarm Improvement Proposals)](https://github.com/ethersphere/SWIPs/pulls), highlighting the shift to a more decentralised, community driven development process.


## New Developments in Bee 2.0

The new developments being introduced in Bee 2.0 fall into four broad categories alongside other more minor changes. First is the introduction of the new erasure coding feature, second are widespread improvements to the Bee client's localstore, third is the transition from the Goerli testnet to Sepolia, and finally fourth is an upgrade to encrypted uploads. For a complete breakdown of all the changes included in the 2.0 release, please refer to [2.0 release notes on the releases page for the bee repo](https://github.com/ethersphere/bee/releases). Below we take a closer look at each of these developments and their significance:

### **1. Erasure Coding for Swarm Uploads**

Erasure coding is a data protection approach which ensures high data retrievability at a fraction of the cost of full data replication. It ensures that data uploaded to Swarm is retrievable even if some data chunks are lost, providing a robust solution for data retrievability.

### **2. Localstore Improvements**

The localstore is a vital component of the Bee client which is responsible for managing the data stored by the Bee client. The 2.0 release includes improvements to chunk syncing which help to reduce freezes and ensure data consistency of chunks within neighbourhoods. The improvements made to the localstore address previous issues affecting node operations, ensuring a smoother and more reliable user experience for node operators.

### **3. Transition from Goerli to Sepolia**

As the Goerli testnet winds down, Swarm is making its transition to the newer Sepolia testnet. Users are encouraged to promptly update their testnet nodes to use Sepolia. This is a routine but vital upgrade for the the continuation of Bee development.

⚠️ *[See the 2.0 transition guide for more info on the transition process.](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/).* 

### **4. Encryption Vulnerability Fix**

A vulnerability affecting encrypted uploads was reported which allowed for 8 bytes of an encrypted chunk to be revealed. The 2.0 update includes a fix for this so that the entire chunk is securely encrypted. 

The fix is a simple one-line change, however it is not backwards compatible. To address this issue, uploaders of encrypted files prior to the 2.0 release should back up their uploaded files, allow the associated postage stamps to expire, and then do another encrypted upload of the files with a post 2.0 client to guarantee the security of the uploaded data. 

⚠️ *[See the 2.0 transition guide for more info on protecting your encrypted uploads.](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/)*

## Major Improvements to User Experience

The Bee 2.0 release is about more than just technical enhancements, it's about significantly improving the user experience for both node operators and data uploaders:

**1. Stability and Performance:** The localstore improvements and the introduction of erasure coding enable a more stable network with far stronger data retrieval guarantees and reduced latency for file retrieval.

**2. Enhanced Security:** The introduction of the encryption upgrade and erasure coding features together provide a significantly more secure solution for data storage.

**3. Unparalleled Data Retrievability:** With erasure coding, Swarm can ensure that files remain retrievable even in cases of severe loss of data (the [specific level of protection can be adjusted](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding#uploading-with-erasure-coding) to match the desired balance of cost vs data protection.)

**4. Improved Incentives for Node Operators:** Optimizations in the localstore component enhance chunk syncing performance, potentially reducing freezes and improving user experience for node operators.


### Join the Swarm!

As the March 26th release date for Bee 2.0 gets closer, we're stepping into an exciting new chapter for decentralised storage. This update is a big deal for the Swarm ecosystem and for the world of decentralised storage as a whole. With Bee 2.0, we're not just updating software, we're building the foundation for a better online world. And we wouldn't have ever been able to get this far without the amazing support from the Swarm community, so we'd like to take this opportunity to say thanks for the hard work of the community of Swarm developers, node operators, and decentralised storage enthusiasts. 

And if you're not yet a part of the Swarm, then we invite you to join us in this exciting new chapter. Whether you're a seasoned node operator, a developer, or simply intrigued by the potential of decentralised storage, there's never been a better time to be part of the Swarm ecosystem. Join the conversation on [the official Discord server](https://discord.gg/cRPBKXNpKW), and follow [the official Ethswarm account](https://twitter.com/ethswarm) to make sure you're always caught up on the latest news.

Stay tuned for more updates, and thank you for being an integral part of this journey!