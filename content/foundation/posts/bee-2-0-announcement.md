+++
banner = "/uploads/2.0-release.png"
images = [ "/uploads/2.0-release.png" ]
categories = [ "Development updates" ]
date = 2024-03-15T00:00:00.000Z
description = "With just a week left until the launch of Bee 2.0 on March 26th, now is a time of great anticipation for the Swarm community and decentralised storage enthusiasts around the globe. This release is not just an update; it signifies a major leap forward in our journey towards creating a more fair, censorship-resistant, and user-driven internet."
references_and_footnotes = [ ]
title = "Announcing Bee 2.0: Pioneering Decentralised Storage"
_template = "post"
slug="announcing-bee-2.0-pioneering-next-gen-decentralised-storage"
+++



***UPDATE (26/03/24):** Bee 2.0 is now live! Make sure to read the [transition guide](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/) and [update](https://docs.ethswarm.org/docs/bee/working-with-bee/upgrading-bee) your node to experience all the enhancements introduced in 2.0. As a next step, get started [learning about erasure coding](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding) and how it can help protect your data. See the [release notes](https://github.com/ethersphere/bee/releases/tag/v2.0.0) for a detailed list of changes.*

With just a week left until the launch of Bee 2.0 on March 26th, now is a time of great anticipation for the Swarm community and decentralised storage enthusiasts around the globe. **This release is not just an update**; it signifies a major leap forward in our journey towards creating a more fair, censorship-resistant, and user-driven internet. 

Bee 2.0 reinforces Swarm's position as a trailblazer in decentralised storage by introducing world-class data retrievability through the incorporation of [erasure coding—a powerful and cost effective data protection technology](https://blog.ethswarm.org/foundation/2023/erasure-coding-supercharges-swarm/). Additionally, the 2.0 update enhances the user experience with comprehensive changes aimed at improving stability, security, and privacy across the board. 

## The Journey So Far

Bee 2.0 marks the culmination of months of significant technical advancements and the broader growth of the Swarm ecosystem. On the technical side, the development of the Bee client has undergone substantial refactoring to improve code maintainability and facilitate the development of new features. These efforts laid the foundation for the substantial upgrades introduced in the 2.0 release, including the new erasure coding feature serving as its cornerstone.

Parallel to the refactoring efforts, the rollout of the [postage stamp price oracle](https://blog.ethswarm.org/foundation/2023/oracle-overview/) has been underway. This feature enables dynamic pricing based on network usage, constituting a key component for Swarm's self-sustaining economic system. The release of the price oracle also marks the completion of [Swarm's storage incentives system](https://blog.ethswarm.org/foundation/2022/the-mechanics-of-swarm-networks-storage-incentives/).

The above technological developments have unfolded amidst rapid growth of the Swarm network. [Thousands of staking nodes](https://swarmscan.io/) are actively contributing to a vibrant, expanding global community, alongside the [continuously evolving storage incentives economy](https://blog.staging.ethswarm.org/foundation/2024/state-of-the-network-february/). The same period also witnessed the growing prominence of [SWIPs (Swarm Improvement Proposals)](https://github.com/ethersphere/SWIPs/pulls), highlighting the shift to a more decentralised, community-driven development process.


## New Developments in Bee 2.0

The new developments being introduced in Bee 2.0 fall into four broad categories alongside other minor changes. These include the introduction of the new erasure coding feature, widespread improvements to the Bee client's localstore, the transition from the Goerli testnet to Sepolia, and fixing a vulnerability in encrypted uploads. For a comprehensive breakdown of all the changes included in the 2.0 release, please refer to the [2.0 release notes on the releases page for the bee repo](https://github.com/ethersphere/bee/releases). Below, we take a closer look at each of these developments and their significance:

### **1. Erasure Coding for Swarm Uploads**

Erasure coding is a data protection approach which ensures high data retrievability at a fraction of the cost of full data replication. It guarantees that data uploaded to Swarm is retrievable even if some chunks are lost, providing a robust solution for data retrievability. The addition of this feature means that Swarm is now able to provide far higher levels of data protection than ever before.

### **2. Localstore Improvements**

The localstore is a vital component which is responsible for managing the data stored by the Bee client. The 2.0 release includes improvements to chunk syncing which help to reduce freezes and ensure data consistency within neighbourhoods. These improvements made to the localstore ensure a smoother and more reliable user experience for node operators.

### **3. Transition from Goerli to Sepolia**

As the Goerli testnet winds down, Swarm is shifting to the newer Sepolia testnet. Users are urged to promptly update their testnet nodes to use Sepolia. This is a routine but vital upgrade for the the continuation of Bee development.

⚠️ *[See the 2.0 transition guide for more info on the transition process.](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/)* 

### **4. Encryption Vulnerability Fix**

A vulnerability reported through a bug bounty by developers in the process of implementing Swarm encryption allowed a particular stretch of 8 bytes of certain files to be revealed. The bug has already been present since the first time encryption was introduced in the Swarm client of the pre-Bee era.

The fix involves a simple one-line change but is not backwards compatible. To mitigate this issue, uploaders of encrypted files prior to the 2.0 release should back up their uploaded files, allow the associated postage stamps to expire, and then perform another encrypted upload of the files using a post-2.0 client to guarantee the security of the uploaded data. 

⚠️ *[See the 2.0 transition guide for more info on protecting your encrypted uploads.](https://blog.ethswarm.org/foundation/2024/bee-2-0-transition-guide/)*

## Major Improvements to User Experience

The Bee 2.0 release brings significant improvements in user experience for both node operators and data uploaders:

**1. Stability and Performance:** The localstore improvements and the introduction of erasure coding result in a more stable network with far stronger data retrieval guarantees and reduced latency for file retrieval.

**2. Enhanced Security:** The encryption upgrade and erasure coding features together provide a significantly more secure solution for data storage.

**3. Unparalleled Data Retrievability:** With erasure coding, Swarm ensures that files remain retrievable even in cases of severe data loss (the [specific level of protection can be adjusted](https://docs.ethswarm.org/docs/develop/access-the-swarm/erasure-coding#uploading-with-erasure-coding) to match the desired balance of cost vs data protection).

**4. Smoother Experience for Node Operators:** Optimisations in the localstore component enhance chunk syncing performance, potentially reducing freezes and improving the user experience for node operators.


### Join the Swarm!

As the March 26th release date for Bee 2.0 gets closer, we're stepping into an exciting new chapter for decentralised storage. This update marks a significant milestone for the Swarm ecosystem and the decentralised storage landscape as a whole. With Bee 2.0, we're not simply updating software; we're laying the groundwork for a better online world. And we wouldn't have ever been able to get this far without the amazing support from the Swarm community. Therefore, we'd like to take this opportunity to express our gratitude for the hard work of the community of Swarm developers, node operators, and decentralised storage enthusiasts. 

If you're not yet part of the Swarm, we invite you to join us in this exciting new chapter. Whether you're a seasoned node operator, a developer, or simply intrigued by the potential of decentralised storage, there's never been a better time to be part of the Swarm ecosystem. Join the conversation on [the official Discord server](https://discord.gg/cRPBKXNpKW), and follow [the official Ethswarm account](https://twitter.com/ethswarm) to make sure you're always caught up on the latest news.

Stay tuned for more updates, and thank you for being an integral part of this journey!