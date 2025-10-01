+++
banner = "/uploads/SCC-recap-092025.png"
images = [ "/uploads/SCC-recap-092025.png" ]
categories = [ "Events" ]
date = 2025-10-01T00:00:00.000Z
description = "The September Swarm Community Call highlighted major progress toward the upcoming Bee 2.7 release, an update on incentive system research, and ecosystem presentations ..."
references_and_footnotes = [ ]
title = "Swarm Community Call, 25 September – Recap" 
_template = "post"
+++

The [September Swarm Community Call](https://x.com/i/broadcasts/1MYGNlbpVoXxw) highlighted major progress toward the upcoming Bee 2.7 release, an update on incentive system research, and ecosystem presentations, including a demo of the new File Manager and MetaProvide’s introduction of IPSH (Interplanetary Swarm Hive).


## Core Development: Final Stretch Toward Bee 2.7 Release

Bee 2.7 is approaching release readiness, reported Niki Papadatou, and includes a strong mix of performance improvements and new features:
* Erasure coding enhancements strengthen data redundancy and recovery, improving resilience and chunk reassembly.
* Legacy payload support has been improved, making compatibility with older formats more explicit.
* Multiple underlay address support enables nodes to announce and connect across multiple interfaces—a critical step for in-browser node development.
* AutoTLS is being finalized to ensure in-browser nodes can establish secure connections automatically.
* Pin eviction bug fix improves the protection of pinned content from garbage collection.
* Refined pull-sync logic is under review, promising more consistent and performant syncing.
* SOC replica support introduces more robust chunk replication, further boosting reliability.


Alongside release preparations, the team continues research into identity management, i.e. handling multiple personas in a decentralized context. Performance testing is also underway to measure the impact of checkbook funding on upload/download speeds.

As Callum Toner explained, this is critical to the ongoing research into Swarm’s incentive systems, with a particular focus on bandwidth incentives. The current system relies on a combination of time-based settlement (free forwarding allowance) and checkbook-based settlement (paid bandwidth). Early findings suggest that enabling checkbook payments may introduce performance overhead due to additional signatures and steps.

The research team is benchmarking various scenarios—file sizes, erasure code levels, and network conditions—to pinpoint optimisation opportunities. The long-term goal is to ensure robust, performant, and competitive incentive systems, possibly including adjustments to staking mechanisms.

Community feedback and anecdotal performance data remain important inputs to this process.


## Community Talk: Introducing the File Manager

Nidish Ramakrishnan presented the File Manager, a major UX leap forward developed by Swarm Foundation’s ecosystem partner Solar Punk. Designed to feel like a familiar operating system file explorer, the File Manager introduces: 
* Admin stamp creation to manage file permissions.
* Drive-based organization for content with adjustable lifetime and redundancy levels.
* Drag-and-drop uploads with progress indicators and automatic metadata assignment. 
* Version control, allowing users to restore earlier versions of files. 
* Spotlight search across all drives, including archived items. 
* File actions including renaming, local downloading, and a “forget” function that hides a file from view without deleting it from the network. 

Integration into [Swarm Desktop](https://desktop.ethswarm.org/) is expected soon, once final reviews are completed.


## Community Talk: Towards InterPlanetary Swarm Hive
João Raposo, product development manager at [MetaProvide](https://metaprovide.org/), introduced HejBit, a service that integrates Swarm storage with Nextcloud to deliver Web3-powered data sovereignty—without requiring users to interact with wallets or blockchain tools. Current features include Nextcloud and WordPress plugins that enable decentralized storage and backup. To address adoption challenges, the team is now developing IPSH (InterPlanetary Swarm Hive), a protocol designed to bridge IPFS and Swarm. IPSH exposes IPFS-compatible endpoints while persisting data on Swarm, effectively serving as a drop-in replacement for services like Pinata. This approach enables seamless migration for existing IPFS projects while improving speed, redundancy, and availability by leveraging Swarm. Through this approach, a tiered service model is introduced with free or low-cost tiers based on IPFS and premium tiers powered by Swarm’s stronger performance. Importantly, IPSH is open source, allowing anyone to run their own node and ensuring that the infrastructure remains community-driven.


The next Swarm Community Call will take place on **30 October 2025**, as always, on the last Thursday of the month - [add it to your calendar now](https://www.addevent.com/event/DF26807149)!
