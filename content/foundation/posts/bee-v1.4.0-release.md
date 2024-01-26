+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2021-11-26T04:00:00.000Z
description = "The Swarm Bee Team is proud to announce the release of Bee v1.4.0. It includes a major change to the protocol behaviour that will improve network resilience significantly. You must update your nodes to this latest version or they will no longer be part of the network."
references_and_footnotes = [ ]
title = "Bee v1.4.0 Release"
_template = "post"
+++

The Swarm Bee Team is proud to announce the release of Bee v1.4.0. It includes a major change to the protocol behaviour that will improve network resilience significantly. **You must update your nodes to this latest version or they will no longer be part of the network.**

From now on, your nodes will have to be accessible from your public IP for them to participate in our core protocols. We’ve introduced new visibility metrics through the topology endpoint to allow node operators to determine their connectivity state and make the necessary steps to rectify any NAT reachability problems. We’ve also improved node resilience on blockchain errors. Please stay tuned for another release which will follow shortly!

Download and install the latest version of Bee:

[https://docs.ethswarm.org/docs/installation/install](https://docs.ethswarm.org/docs/installation/install "https://docs.ethswarm.org/docs/installation/install")

Please feel free to provide feedback to the dev team and your node-operator peers. You’re welcome to join our [Discord server](https://discord.gg/bpQ3sUpHBm).

# Main new feature or change

Please make sure to keep yourself up-to-date through [Discord](https://discord.com/invite/bpQ3sUpHBm), [Twitter](https://twitter.com/ethswarm), [Medium](https://medium.com/ethereum-swarm) and [GitHub](https://github.com/ethersphere) as more details about the upcoming releases will be duly communicated.

# Breaking changes

- Starting from \`v1.4.0\`, only nodes which are reachable from the public CIDRs are used for core protocols. Old nodes are not interoperable with the new version due to a handshake protocol version increase.
- The \`/stamps\` endpoints on the normal API which were deprecated three months ago have been finally removed in favour of the whole postage suite, which is available on the debug API. Please see the [OpenAPI specifications](https://docs.ethswarm.org/debug-api/) for more info.

# Optimisation

- The bee node will now wait up to ten minutes before forcing a restart due to a stalled blockchain backend.

# New features

- The node will now display information about the eth backend client on startup (#2618)
- OpenAPI version has been added to the health endpoint, so that clients can easily determine which features are supported by the node.

# Bugfixes

- Fixed a panic on stewardship endpoints in dev mode
- Fixed a panic in kademlia metrics
- Fixed a bug where futile attempts to sync chunks with invalid postage stamps were made

# Performance improvements

- Kademlia buildups should now be faster due to prioritisation of previously connected peers and non-blocking attempts in topology buildups

For a full PR-rundown, please consult [the v1.4.0 milestone](https://github.com/ethersphere/bee/milestone/9).
