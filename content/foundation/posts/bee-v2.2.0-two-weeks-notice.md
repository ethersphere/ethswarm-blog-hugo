+++
banner = "/uploads/2-2-0-notice.png"
images = [ "/uploads/2-2-0-notice.png" ]
categories = [ "Development updates" ]
date = 2024-09-05T00:00:00.000Z
description = "Bee version 2.2.0 launches in just two weeks on DATE, introducing significant new features and improvements for both DAPP developers and node operators. These features unlock exciting new potential use cases for Swarm developers and come with important enhancements to the user experience and economics for node operators."
references_and_footnotes = [ ]
title = "Bee Version 2.2 - Two Weeks Notice"
_template = "post"
slug="bee-2-2-pre-release"
+++


## Bee 2.2.0 Goes Live in Two Weeks!

Bee version 2.2.0 launches in just *two weeks* on DATE, introducing significant new features and improvements for both DAPP developers and node operators. These features unlock exciting new potential use cases for Swarm developers and come with important enhancements to the user experience and economics for node operators.

This article provides an overview of the major changes in Bee version 2.2. For a complete list of changes, refer to the [release notes](https://github.com/ethersphere/bee/releases) for 2.2 on GitHub.

{{< admonition danger >}}
**Node Operators:** Make sure to read the [Node Operator's Guide](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/) fully to avoid *loss of rewards* or compromising your nodes' security.
{{< /admonition >}}

### Access Control Trie (ACT)  

The Access Control Trie (ACT) is a major new feature that gives DAPP developers specific control over who can access encrypted data on Swarm. ACT introduces two main roles: "content publishers" and "content viewers." Content publishers can grant or revoke access to content viewers on a fine-grained, chunk-by-chunk basis. Publishers can also establish and update group lists for managing access.

For example, a content creator could use ACT to grant access to subscribers of a newsletter while keeping the content private from non-subscribers. ACT also allows publishers to control which version of the content viewers can access.

You can find a [detailed usage guide for ACT](https://docs.ethswarm.org/docs/develop/tools-and-features/act) here, and you can read a high-level overview of the concepts and motivations for the ACT on the [ACT page](https://docs.ethswarm.org/docs/learn/technology/act) in the documentation.

### Neighborhood Hopping
 
Previously, nodes were locked into the [neighborhood](https://docs.ethswarm.org/docs/learn/glossary#neighborhood) they started staking in, which could lead to low chances of winning rewards in overcrowded neighborhoods. The new neighborhood hopping feature allows node operators to move their nodes to underpopulated neighborhoods, improving their chances of winning rewards. Detailed instructions are available in the [Node Operator's Guide]https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/).

### Partially Withdrawable Stake

Previously, stake was non-withdrawable and set arbitrarily to 10 xBZZ. The new partial stake withdrawal feature allows operators to withdraw part of their stake, as long as the remaining stake meets the minimum requirement. See the [Node Operator's Guide](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/) for specific instructions.

### Bee Debug API Removal

With the 2.2.0 release, the Bee Debug API has been entirely removed, and its endpoints have been merged into the main Bee API. Additionally, the `/auth` and `/refresh` endpoints have been removed.

This removal, announced with the 2.1.0 release, is now fully implemented in 2.2.0. It simplifies development of the Bee client and streamlines operations for node operators.

{{< admonition danger >}}
**Protect Your Bee API:** If you haven't done so, ensure your Bee API is protected. Follow the [Node Operator's Guide](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/) for specific instructions.
{{< /admonition >}}


### Optimized Peer Connections

Nodes will now connect with fewer peers, but these connections will be more stable, resulting in greater network stability and reduced bandwidth costs for node operators.

## Node Operator's Guide

The official [Node Operator's Guide](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/) has been published alongside this announcement of the upcoming 2.2.0 release.

{{< admonition danger >}}
**Important:** As a node operator, it is ***VERY IMPORTANT*** that you read and follow the instructions in the guide to avoid losing rewards or leaving your nodes in an insecure state.
{{< /admonition >}}

## Bee 2.2.0 in a Nutshell

Bee 2.2.0 introduces significant new features and improvements, with the Access Control Trie (ACT) taking center stage. ACT empowers DAPP developers by offering precise control over who can access encrypted content on Swarm, enabling new possibilities such as subscription-based content services. In addition to ACT, this release brings neighborhood hopping, allowing node operators to optimize their reward potential, and partially withdrawable stake, providing flexibility in stake management. The removal of the Bee Debug API streamlines operations, and optimized peer connections promise improved network stability and reduced bandwidth usage. Bee 2.2.0 is a pivotal update that enhances both developer capabilities and node operator experiences.


{{< admonition danger >}}
**Final Reminder:** Node operators must read the [Node Operator's Guide](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/) fully to avoid *loss of rewards* or compromising your nodes' security.
{{< /admonition >}}
