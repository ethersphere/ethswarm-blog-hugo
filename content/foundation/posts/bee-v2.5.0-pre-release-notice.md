+++
banner = "/uploads/bee-2-5-0-pre-release.jpg"
images = [ "/uploads/bee-2-5-0-pre-release.jpg" ]
categories = [ "Development updates" ]
date = 2025-02-27T00:00:00.000Z
description = "We're excited to announce that Bee v2.5.0 will be released in less than two weeks on March 11th! This update focuses on improving Bee node performance, reducing operational costs, and enhancing network stability.  "
references_and_footnotes = [ ]
title = "Bee Version 2.5.0 - Pre-release Notice"
_template = "post"
slug="bee-2-5-0-pre-release"
+++


## **Bringing Widespread Performance & Stability Enhancements**  

We're excited to announce that Bee v2.5.0 will be ***released in less than two weeks on March 11th***! This update focuses on improving Bee node performance, reducing operational costs, and enhancing network stability.  

:::info  
*Bee v2.5.0 follows the **[Bee v2.4.0](https://github.com/ethersphere/bee/releases/tag/v2.4.0)** release, which was primarily a commemorative update honoring the memory of ldeffenb—an irreplaceable pillar of the community who recently passed away. His personal motto, *"Share the knowledge,"* was added to the startup logs. Beyond this tribute, the release included only a minor bug fix.*  
:::

:::warning  
While v2.5.0 introduces no breaking changes, it delivers substantial performance and stability improvements. We strongly recommend all node operators upgrade promptly to optimize both their node's performance and the overall network stability.  
:::
### **Performance Enhancements**

#### **Increased Concurrency in Chunk Pushing**
The number of concurrent chunks that can be pushed at once has been increased from **100 to 128**. This change improves upload efficiency and throughput, leading to faster data propagation in the network and lower CPU usage for node operators.

#### **Optimized Stamp Validation for Reduced Overhead**
Previously, full and computationally costly stamp validation was required for every chunk before pushing to the next node as part of the chunk routing process. This has now been optimized to check only whether the batch is still valid, leading to reduced CPU usage.

#### **More Efficient Routing & Peer Management**
- **Kademlia Optimization:** The peer selection process now first evaluates whether a peer should be excluded before assessing its proximity, leading to reduced computational load and improved network traversal efficiency.
- **Forwarder Nodes Optimization:** Forwarder nodes will no longer check for shallow receipts, reducing unnecessary processing and optimizing routing behavior.
- **Shallow Receipt Tolerance for Reserve Doubling:** Chunks landing in the sister neighborhood of a node using the [reserve doubling](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#reserve-doubling) feature will no longer cause a "shallow receipt" error. Nodes will now apply extra tolerance to shallow receipts by a factor of the maximum allowed reserve doubling. This ensures that successful uploads do not return an irrelevant error.  

#### **Pushsync Multiplexer Bug Fix**
A bug affecting pushsync multiplexing has been resolved, allowing nodes to push chunks to multiple peers concurrently. This fix will lead to substantial improvements in chunk distribution efficiency.

### **API & Configuration Improvements**
- **Updated OpenAPI Specs**: The OpenAPI specifications for the `swarm-deferred-upload` value have been modified to the correct value of "`true`", and the relevant description was also updated.

- **Updated `/addresses` API**: The `ethereum` field is being deprecated and replaced by `chain_address` in the `/addresses` response for a increasingly chain-agnostic approach.
- **Improved `/pins` Endpoint**: This endpoint now returns an empty array instead of `null` when no content is pinned, ensuring better API consistency.

### **Various Bug Fixes & Stability Improvements**
A variety of other smaller performance improvements and bug fixes are also included in the 2.5.0 release. For the complete list of all these changes, refer to the 2.5.0 release notes from the [Bee releases page](https://github.com/ethersphere/bee/releases).


## **Looking Ahead**
Bee v2.5.0 lays the foundation to make Swarm even more robust and efficient. In the following releases we aim to continue to refine the user experience for Swarm node operators and developers with continual improvements to node performance, network sustainability, and user experience. 

For further support, join the [Swarm Discord community](https://discord.gg/kHRyMNpw7t) and follow us on [Twitter/X](https://x.com/ethswarm) to stay updated!


