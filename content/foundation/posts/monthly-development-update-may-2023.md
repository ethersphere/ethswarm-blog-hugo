+++
banner = "/uploads/dev_update_may.png"
categories = [ "Development updates" ]
date = 2023-06-05T05:00:00.000Z
description = "The Swarm network was abuzz with activity in May and there’s a lot of ground to cover, so let’s dive right in. The Bee Track has released versions 1.15.0 and 1.16.0, introducing new features and several improvements. In version 1.15.0, a new pushsync feature has been introduced to improve chunk syncing and replication during uploading. Other enhancements include improved blocklist display, storage radius adjustment, chainstate total amount, and peer mode added to the status protocol, and reduced workload during initial historical syncing."
references_and_footnotes = [ ]
title = "Monthly Development Update – May 2023"
_template = "post"
+++


The Swarm network was abuzz with activity in May and there’s a lot of ground to cover, so let’s dive right in. The **Bee Track** has released versions [1.15.0](https://github.com/ethersphere/bee/releases/tag/v1.15.0) and [1.16.0](https://github.com/ethersphere/bee/releases/tag/v1.16.0), introducing new features and several improvements. In version **1.15.0**, a **new pushsync feature** has been introduced to improve chunk syncing and replication during uploading. Other enhancements include improved blocklist display, storage radius adjustment, chainstate total amount, and peer mode added to the status protocol, and reduced workload during initial historical syncing.

Version **1.16.0** introduces **"salud", a health check system** for connected peers using data acquired from the status protocol. A self-check is also in place where if the node's own storage radius does not match that of the network, the node won't participate in the Schelling game. Version 1.16.0 brings **a breaking change** where the status protocol includes the reachability of a peer and the total batch commitment of the network reported by each peer.

This version also addresses a bug and eases the requirements of the pushsync protocol for improved performance. The patch release **v1.16.1** fixes a panic in the salud service and introduces a health service for monitoring the effects & storage incentives. This moves the network towards getting realistic hardware requirements. Progress has been made on the inclusion proof for Phase 4, with testing in the final stages.

**Research Track** saw the **completion of the [Storage Incentives paper ](https://www.ethswarm.org/swarm-storage-incentives.pdf)and diagrams**, which are now out for community feedback. Notably, DISC specs are also in their final version. The Phase 4 testing environment is being prepared to release Phase 4, and work on erasure coding documentation and graphical statistics representation is progressing.

In **JS Track**, Bee JS [v6.0.0](https://github.com/ethersphere/bee-js/releases/tag/v6.0.0) was released, introducing streaming upload support for single files and numerous bug fixes, including the one causing incompatibilities between Node versions 16, 18 and 19. **Swarm Desktop v0.25.0** was upgraded to the latest Bee v1.16.1.

**Fair Data Protocol** updates include some notable novelties. FairOS now supports ChatGPT plugin and has moved to Sepolia testnet. The Fairdrive Web App has seen significant improvements and enhancements and the Fairdrive Desktop App saw the release of v0.1.6. Blossom version 0.4.0 is already available in the Chrome Store. 

**DevOps Track** created a 1,000-node private cluster for testing and released Beekeeper ([0.12.3](https://github.com/ethersphere/beekeeper/releases/tag/v0.12.3)).

Big news on the **DevRel** side. [New and updated Swarm documentation ](https://docs.ethswarm.org/)is out. It's more comprehensive and user-friendly than the previous editions and is aimed at anyone who wants to take a deep dive into the world of Swarm. The latest addition to our resources is the [Bee Node Hardware Requirements and Performance Benchmarking Guide](https://blog.ethswarm.org/foundation/2023/bee-node-hardware-requirements/), now available on the Swarm. It's a great read for anyone looking to benchmark their node. A new Mandarin language section was also added to Swarm News to bring Swarm closer to audiences in China. [Etherjot](https://github.com/Cafe137/etherjot) has received various improvements to make it more potent.


## Tracks


### Bee Track
* [Released 1.15.0](https://github.com/ethersphere/bee/releases/tag/v1.15.0) 
    * With this release, we introduce a new pushsync feature to improve chunk syncing and replication in the network during uploading. Peers that forward chunk into the neighbourhood will fire multiple requests to target multiple storer nodes. Forwarding will also terminate at the first peer within the neighbourhood and will no longer be forwarded to the closest peer within the network.
        * Breaking changes
            * Pushync forwarding nodes one hop from the neighbourhood multiplexes the chunk to multiple storer nodes in the neighbourhood. Forwarding terminates at the first neighbour. 
        * Hardening
            * Blocklist endpoint now correctly displays the mode and reason for the blocklisting of the peer. 
            * Storage radius decreasing based on reserve size increased back to the 50% threshold. 
            * Chainstate total amount and peer mode added to the status protocol.
            * Connecting light nodes are not rejected based on bin size. 
        * Performance improvements
            * Initial historical syncing is limited to reduce workload. 
            * Peer skiplist mechanism in retrieval and pushsync protocols now prune peers in a much more efficient way. 
            * For a full PR rundown, please consult the v1.15.0 diff.
* [Released v1.16.0](https://github.com/ethersphere/bee/releases/tag/v1.16.0) 
    * With salud, nodes will periodically perform certain health checks on their connected peers with data acquired from the status protocol. The checks as of this release are based on the duration of response to the status protocol msg, number of connected peers, the storage radius, and total batch commitment as computed by each peer. For duration and number of connected peers, each peer must be within the 80th percentile to be deemed healthy. Radius and batch commitment are measured in terms of the most common values as reported by each connected peer. Measurements are created anew for each periodic health check. A self-check is also in place where, if the node's own storage radius does not match with the rest of the networks', the node won't participate in the Schelling game. With this release, only the pushsync protocol utilises the filtering of peers for requests based on the health status.
        * Breaking changes
            * The status protocol now includes the reachability of a peer and the total batch commitment of the network reported by each peer. 
        * Bug fixes
            * Fixed the last played round field in the redistribution state endpoint to report the current round instead of the previous round. 
        * Hardening
            * Loosened the requirements of the pushsync protocol so that when a neighbourhood is down or does not exist, the chunk is pushed as close as possible to its neighbourhood. 
            * Increased the wake up interval for the depth monitor from 5 to 15 minutes. 
* [Released v1.16.1](https://github.com/ethersphere/bee/releases/tag/v1.16.1)
    * This one is a patch release to address a bug found in the new salud service.
    * Bug fixes: Fixed a panic in the salud service when the response to the status request is terminated early by the peer. 
* Health service released, monitoring the effects & storage incentives: this is progress towards getting realistic hardware requirements and putting any missing rules in place.
* Phase 4 inclusion proof is in the final stages of testing & then looking for a release window on/after localstore dates.
* Localstore testing begins on large cluster. 


### Research Track
* [The Storage Incentives paper](https://www.ethswarm.org/swarm-storage-incentives.pdf) and all diagrams are complete and out for feedback to the community. 
* Investigations into freezing/sampling problems and other edge cases.
* DISC specs & SI paper in final version.
* The Phase 4 testing environment is coming along to test and be able to release Phase 4. 
* Erasure coding documentation and graphical stats and representation progressing (discovery phase).


### JS Track
* [Bee JS v6.0.0](https://github.com/ethersphere/bee-js/releases/tag/v6.0.0)
    * Adds streaming upload support for single files.
    * Fixes a segmentation fault when running tests in a project where bee-js is a dependency.
    * Fixes incompatibilities between Node versions 16, 18 and 19.
    * Fixes an issue with directory and website uploads, where the resulting tar file had more zero-byte padding than standard, causing a connection reset from Bee’s side.
    * Fixes a bug where projects could not be installed as root where bee-js is a dependency.
    * Fixes a bug related to code splitting, causing frontend projects built with webpack not being able to fully load bee-js.
    * Can now be built with slim Docker images, Python is no longer a dependency during project build.
* [Swarm Desktop v0.25.0](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.25.0)
    * Upgrades Bee to the latest version (1.16.1).


### Ecosystem
#### Fair Data Protocol

####  [Blossom](https://github.com/fairDataSociety/blossom)



* [Blossom version 0.4.0](https://github.com/fairDataSociety/blossom/releases) submitted to Chrome Web Store.

#### [fdp-storage](https://github.com/fairDataSociety/fdp-storage)



* [fdp-storage version 0.7.2](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.7.2) released with several fixes.


#### [FairOS](https://github.com/fairDataSociety/fairOS-dfs)

* [FairOS-dfs version 0.9.4](https://github.com/fairDataSociety/fairOS-dfs/releases) released with
    * [Move to Sepolia](https://github.com/fairDataSociety/fairOS-dfs/issues/497) testnet for user accounts.
    * [ChatGPT plugin support](https://github.com/fairDataSociety/fairOS-dfs/issues/493).
    * [Multiple bug fixes](https://github.com/fairDataSociety/fairOS-dfs/releases).
    * [Breaking change of renaming network config parameter](https://github.com/fairDataSociety/fairOS-dfs/issues/471). 


#### [Fairdrive Web App](https://app.fairdrive.fairdatasociety.org/)
* [34 issues closed](https://github.com/fairDataSociety/fairdrive-theapp/issues?q=is%3Aissue+is%3Aclosed+closed%3A2023-05-01..2023-05-31), including several bug fixes and many more enhancements.
* [Fairdrive with Blossom support](https://app.fairdrive.fairdatasociety.org/) deployed to Swarm Mainnet.


#### [Fairdrive Desktop App](https://github.com/fairDataSociety/fairdrive-desktop-app)
* [Fairdrive Desktop App version 0.1.6](https://github.com/fairDataSociety/fairdrive-desktop-app/releases) released with
    * [Pod subscription integration](https://github.com/fairDataSociety/fairdrive-desktop-app/issues/170) support for apps.
    * [Move to Sepolia](https://github.com/fairDataSociety/fairdrive-desktop-app/issues/175) testnet for user accounts.


#### [Fair Portal](https://github.com/fairDataSociety/fair-portal)
* [Switched to using Sepolia network](https://fairdrive.fairdatasociety.org/apps/fportal/). 


### DevOps Track
* Created 1000-node private cluster for testing session for Bee team.
* Beekeeper [0.12.3](https://github.com/ethersphere/beekeeper/releases/tag/v0.12.3) released.
* Deployed 1.16.1 [Bee](https://github.com/ethersphere/bee) to testnet and mainnet.
* Setup internal Sepolia node for testnet.


### DevRel


#### Docs update
* [New and updated Swarm documentation ](https://docs.ethswarm.org/)was released.


#### Educational content
* [Bee Node Hardware Requirements and Performance Benchmarking Guide](https://blog.ethswarm.org/foundation/2023/bee-node-hardware-requirements/)
* [New Mandarin language section added to Swarm News](https://blog.ethswarm.org/c/%E4%B8%AD%E6%96%87). There will be more blog posts translated into Mandarin over time. 


#### Swarm Community Call
* Swarm Community Call, our main monthly online event, was held on 25 May. You can read a recap blog post about it [here](https://blog.ethswarm.org/foundation/2023/swarm-community-call-25-may-recap/).


#### Apps:
#####  [Etherjot](https://github.com/Cafe137/etherjot)
* Improves the overall design of the generated blog.
* Adds optional search functionality.
* Adds optional newsletter functionality.
* Adds many customisation options, such as header and footer description, social links, link to external website, etc.
* Adds option to promote blog posts on the front page.
* Images are now also part of the Mantaray and not hosted as separate files.

##### [Gateway Proxy](https://github.com/orgs/ethersphere/projects/12/views/7?pane=issue&itemId=27577921)
* Improvement, rebranding, usage with Docker and ngrok. Gateway Proxy is in the shadows and has bad UX. By fixing the UX and showing multiple ways of using it, we could elevate it from its current state.


### Upcoming events 
* **[Swarm Virtual Summit - Call for Papers](https://summit.ethswarm.org/)** - Are you using Swarm to supercharge your project? Then submit a proposal for a talk at Swarm Virtual Summit, which will take place from 21 to 23 June. Due date for proposals is 5 June. Target format: 30 minutes in total - 20-minute presentation followed by Q&A or a 45-minute workshop. 
* Join the hive and submit your talk [proposal](https://summit.ethswarm.org/).