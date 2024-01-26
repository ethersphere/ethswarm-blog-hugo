+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2021-09-16T04:00:00.000Z
description = """
By Elad, Swarm Foundation Dev Team Lead

It’s been an exciting couple of months for the Bee team since the much anticipated 1.0 release."""
references_and_footnotes = [ ]
title = "Improving the Swarm DHT (part 1)"
_template = "post"
+++

By Elad, Swarm Foundation Dev Team Lead

It’s been an exciting couple of months for the Bee team since the much anticipated 1.0 release.

The transition to a fully incentivised mainnet has challenged not only our engineering mannerisms and etiquette, but also the way we organise as individuals and teams of a decentralised organisation. Our efforts have been focused not only at addressing the key technical problems that have surfaced since the 1.0 release, but also on creating more effective ways to communicate within and across teams, all while striving to improve our visibility and transparency as a dev team and as an open-source organisation. More on this will follow in a future blog post.

Pivoting back to our beloved Swarm, the 1.0 release has flushed out problems in the ways in which we create and then enforce the rules of a platform meant to stage monetary interactions between nodes in a network that engraves trustlessness as one of the key elements of its manifesto. It cannot be stressed enough that this is probably _the_ most challenging factor in engineering a swarm, especially given the nature of its novel flavour of Kademlia. As a nascent technology stack, the game-theoretical aspects of Swarm are difficult to fully grasp and predict, therefore changes, not only to our thought processes but also to underlying technological automatisms, are to be expected.

Some of the key aspects demonstrated on the mainnet are of nodes that do not maintain reliable syncing with on-chain data. While other projects rely on embedded state-trie syncing (that greatly increases the entry barrier into the network), Swarm does not, allowing node operators to join the network while relying on 3rd party providers to provide them with chain data subscriptions. The transition to the xDai network has exposed that some of the chain backend clients are unstable, and that some of them start demonstrating drift from the tip of the chain, connectivity issues and syncing issues. Future plans to migrate xDai to be a Nethermind-only chain poses further questions with regards to stability, as the current client has clear stability issues.

While we recognise these underlying issues as extremely important and we have full trust in future stability of the blockchain backend clients, we nevertheless will start shifting setup responsibility and accountability to node operators more and more, putting solutions in place to ensure that your fellow node operators have reliable, trustworthy setups that deserve to participate in a working, reliable Swarm.

Our series of upcoming releases will start tackling these issues in the following ways:

- Ensuring reliable chain synchronisation by the introduction of a challenge-response protocol that validates that peers are satisfactorily synced to the network: this solution is two-tiered; in the short run we will (1) measure the prevalence of unsynced nodes on the network and (2) introduce a blocking policy that would block unsynced nodes. In this manner, Swarm will transition to be a network in which reliable setups are mandated and unreliable setups are circumvented by automatisms controlled by quality-of-service parameters. Unreliable nodes will simply end up as orphan nodes in potential zombie-neighbourhoods in which only non-syncing nodes participate. In the long run, we envision chain-syncing of postage events as an inter-node service that can be capitalised between node operators. A node may ask another node for postage events in a way that can be verified against the header chain with inclusion proofs. Indeed, some contract data would have to be verified against the chain, but the reliance on, and volume of, calls would be diminished.
- Ensuring better, more reliable syncing of client data to the network: this is closely related to the previous point. While unsynced nodes can potentially contribute to the overall committed network storage, they eventually become a burden to the network as they are not informed of newly purchased postage batches, causing them to actively reject data chunks on the grounds that they are not paid-for. We will also be testing better strategies related to ensuring chunks arrive safely and with adequate redundancy in the correct neighbourhoods. Our efforts here would be divided into two processes: (1) better observation and measurement of network conditions and (2) the introduction of gradual changes to improve certain performance indicators.
- Favouring resilient connections over unstable ones: this has been a prevalent strategy in hardening DHTs in general and similar projects have found success when using this strategy to harden their DHTs. Since Swarm is no stranger to the adverse network conditions of DHTs, we shall be following suit, implementing our own solutions better suited to deal with the vernacular network conditions of Swarm.

Future blog posts will announce upcoming releases, so please stay tuned to keep in sync (no pun intended) with our release cycles.

I also invite you to stay in touch with us using our [Discord server](https://discord.gg/wdghaQsGq5) and keep an eye out on this blog for more future dev-team updates as we publish our activities and observations. Also feel free to register to the Swarm Foundation [newsletter](https://www.ethswarm.org/newsletter.html) which includes future notifications about upcoming versions, new tooling and breaking changes.
