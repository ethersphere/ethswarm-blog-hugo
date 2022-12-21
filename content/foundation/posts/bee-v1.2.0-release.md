+++
banner = ""
categories = ["Development Updates"]
date = 2021-10-08T04:00:00Z
description = "Today, Swarm Foundation is releasing a new version of Bee, the Swarm network client. It is being tested by the growing testergroup that can be found on Discord. Among the updates, the recommendations of the Cure53 audit were implemented."
references_and_footnotes = []
title = "Bee v1.2.0 Release"

+++
Today, Swarm Foundation is releasing a new version of Bee, the Swarm network client. It is being tested by the growing testergroup that can be found on Discord. Among the updates, the recommendations of the [Cure53 audit](https://medium.com/ethereum-swarm/cure53-audit-report-results-9d9d1b683eaf) were implemented.

Since 1.1.0, the Swarm dev team has been focusing on making the network perform better. Instead of developing new features, they wanted to make sure the existing ones are performing as expected. For instance, a lot of work has been done to make chunk syncing and retrieval more reliable.

# Update, Test, Report.

Download and install the latest version of Bee, there are no breaking changes:

[https://github.com/ethersphere/bee/releases/tag/v1.2.0](https://github.com/ethersphere/bee/releases/tag/v1.2.0 "https://github.com/ethersphere/bee/releases/tag/v1.2.0")

The best way to help build a truly stable and resilient network is by running testnet nodes. You’re welcome to join the testers channel on our [Discord server](https://discord.gg/bpQ3sUpHBm).

If you’re operating many nodes on the testnet, please also consider helping us with pre-release testing. Contact the Bee team via trainspotter@ethswarm.org.

# **Full changelog:**

# Hardening

* Avoid advertising private CIDR underlays to the public network (#2538)
* Kademlia will now periodically ping all connected peers and will blocklist peers that consistently don’t answer (#2543, #2522)
* Pushsync will continue forwarding if replication fails (#2524)
* Pull Sync context cancellation has been improved peer isolation for context cancellation (#2562)
* Pushsync will store more chunks when replication requests are received (#2526)
* Malformed recursive file joiner reads are no longer possible (#2481)
* Manifest file path handling has been improved for better security and consistency (#2489)
* Switched to each peer iterator for push sync replication to improve replication (#2529)
* Warn on underlay mismatch on handshake (#2464)
* Verify own transaction used for overlay calculation on startup to mitigate user input error (#2422)
* Postage stamp is no longer usable when postage stamp expires (#2390)
* Prune oversaturated bins when depth increases (#2412)
* P2P disconnect and blocklist now have a reason to improve code branching observability when inspecting logs (#2471)

# New features

* Added a — resync flag to force your node to resync all postage contract data on startup and more pprof profiles (#2405)
* Allow transaction from another sender for identity tx so that user onboarding can be improved (#2409)
* Added the new chainsync challenge-response protocol to verify that all connected peers are connected to a working blockchain backend (#2475)
* Added new postage endpoints for batch topup and dilution (#2410, #2401)
* Kademlia now measures peer latencies periodically using the ping-pong protocol and reports measurements using the topology endpoint and prometheus metrics (#2522)
* Kademlia can now have static nodes which are protected from kicking behavior (relevant for bootnode behavior) (#2512)
* Our libp2p abstraction adds a custom user agent and logs it on connection for better version propagation visibility on the mainnet (#2462, #2482)
* Increased targetMaxLength for PSS message mining (#2406)

# Bugfixes

* Added pss target input validation (#2463)
* Chunks stamped with an already expired stamp will be skipped for syncing and eventually deleted(#2392)
* Add missing ticker stop on tag wait to avoid timer leak (#2433)
* Added CORS expose swarm-tag header for bzz dir upload (#2450)
* Improved peer announcement context handling (#2539)
* Fixed broken ENS resolution due to an external package API change (#2458)
* Local storage push index dangling item caused item pushing to grind to a halt (#2534)
* Tag UID generation improved across node restarts using a different seed (#2425)
* Improve nonce check on tx cancelled (#2395)
* Persist postage stamps when added for better reliability (#2546)
* Kademlia displayed wrong bootnode connection direction (#2570)
* Pusher tag errors are no longer fatal (#2569)
* Puller will never store max uint as topmost (#2566)
* Wait for confirmations in WaitBlock when deploying a chequebook to improve reorg safety (#2416)

# Performance improvements

* Skip validation if peer is known to reduce blockchain backend calls (#2491)
* Prevent goroutine pileup on peer validation with a timeout (#2444)
* Flush kademlia metrics in separate goroutine (#2424)
* Kademlia PSlice data structure rewrite to reduce number of allocations (#2453)
* Add peer to cache if found in address book to reduce number of backend calls (#2511)
* Only flush dirty kademlia metrics (#2418)
* Allow dirty kademlia metrics shutdown on timeout (#2428)
* Improve inefficient kademlia metrics saving (#2452)
* Handshake handle checks with kademlia pick before overlay verification to reduce backend calls (#2541)

# Misc

* Dependency management and updates (go, go-ethereum, libp2p) (#2503, #2407, #2461, #2472, #2500, #2545, #2495, #2480, #2421
* Added and improved a ton of metrics (#2487, #2490, #2502, #2498, #2513, #2520, #2509, #2484, #2497, #2508, #2514
* Cleanups and refactorings (#2429, #2437, #2469, #2451, #2439, #2333, #2468, #2527, #2548, #2444, #2427)
* Include all DNS protocol prefixes when Discovering (#2571)

# Known Issues

A local storage leak has been observed on nodes that have intensive upload activity. This is due to a storage space optimization put in place due to the postage stamp storage incentives. We are working on deploying a fix and will update you on a migration path as soon as possible!

For the full PR rundown please consult the v1.2.0 milestone