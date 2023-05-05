+++
banner = ""
categories = ["Development updates"]
date = 2021-10-29T04:00:00Z
description = "Two weeks after the 1.2.0 release, Swarm Foundation is releasing a new version of Bee. The most important thing to know is that Bee will now block peers that don’t agree on the same block hash of a certain block height."
references_and_footnotes = []
title = "Bee v1.3.0 Release"

+++

Two weeks after the 1.2.0 release, Swarm Foundation is releasing a new version of Bee. The most important thing to know is that Bee will now block peers that don’t agree on the same block hash of a certain block height.

Download and install the latest version of Bee:

[https://github.com/ethersphere/bee/releases/tag/v1.3.0](https://github.com/ethersphere/bee/releases/tag/v1.3.0 "https://github.com/ethersphere/bee/releases/tag/v1.3.0")

Please feel free to provide feedback to the dev team and your node-operator peers. You’re welcome to join our [Discord server](https://discord.gg/bpQ3sUpHBm).

# Don’t get ostracised

As outlined recently over several public channels, this release introduces breaking changes in the chainsync protocol behaviour while addressing some bugs and other minor refinements. Nodes which run an outdated version (lower than v1.2.0) will be ostracised from the network.

The next release of bee v1.4.0 is expected to take place W45-W46 21'.

Please make sure to keep yourself up-to-date through Discord, Twitter, Medium and GitHub as more details about the upcoming releases will be duly communicated.

# Breaking changes

- The chainsync protocol will now block peers that don’t agree on the same block hash of a certain block height. If you’re running a node with version < 1.2.0 you will lose connection to the main Swarm network. Please update your clients immediately! (#2585, #2622, #2619)
- Removed support for QUIC protocol. We will reinstate this feature at a future point where we can fully support and make use of QUIC (#2597)

# Deprecations

- Removed dead code from the bitvector package (#2601)

# Hardening

- Kademlia will only do quick pruning on net errors (#2599)
- Batches with very low value (with value <= price per block) are no longer considered valid (#2610)
- Transaction monitor consistency improvements (#2496)

# New features

- Added a db nuke command to clean the node storage up and start afresh, with an option to forget the overlay too (#2577, #2594)

# Bugfixes

- Fixed a panic in the pushsync protocol while forwarding chunks with invalid stamps (#2608)

[For a full PR-rundown, please consult the v1.3.0 milestone.](https://github.com/ethersphere/bee/releases/tag/v1.3.0)
