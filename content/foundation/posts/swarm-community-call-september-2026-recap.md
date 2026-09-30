+++
banner = "/uploads/SCC0926-recap-v2.png"
images = [ "/uploads/SCC0926-recap-v2.png" ]
categories = [ "Events" ]
date = 2026-09-29T00:00:00.000Z
description = "September’s Swarm Community Call showed work moving from proposition into practice: Bee’s first PubSub implementation, a published paper on deletable content in immutable storage, SwarmID used by 14 projects at ETHRome, and a working demo of AI agents discovering data, paying for access and building verifiable reputation on Swarm."
references_and_footnotes = [ ]
title = "Swarm Community Call, 24 September – Recap"
_template = "post"
+++

[September’s Swarm Community Call](https://streamoverswarm.eth.limo/) offered several signs of work moving from proposition into practice. The call was once again streamed over Swarm, while development of the in-browser node watch mode tested during August continued in parallel. SwarmID made a more visible jump: from the proof of concept introduced earlier this year to a working identity layer used by 14 projects at ETHRome. And the AI roadmap became considerably more concrete, with a working demonstration of agents discovering data, paying for access, establishing verifiable reputation, and participating in marketplaces built using Swarm infrastructure.


## **Bee: from security hardening to PubSub**

Following the security-focused Bee 2.8.2 release in August, core development has moved back toward performance, protocol improvements, and the capabilities needed by applications building on Swarm.

Work on storage incentives has focused on reducing memory use and garbage-collection pressure, with the aim of improving the performance of storage-incentive proofs. A number of smaller protocol improvements and refactorings have also landed, while fuzzing and broader codebase auditing continue as part of the security work introduced after 2.8.2.

A more visible piece of development is the first implementation of PubSub. Video streaming is the immediate use case, but the underlying problem is broader: applications such as collaborative editing, live coding, messaging, and other interactive systems need information to move quickly between publishers and subscribers rather than repeatedly checking whether something has changed.

The Bee team is **targeting another release in the first half of October**, ahead of Devcon, followed by a stabilization period and another release this year expected after the conference.


## **Research: incentives, PubSub and a D.R.E.A.M. of deletion**

Research is working alongside the Bee team on **hardening the redistribution game** against more sophisticated attacks. Details remain limited while that work is underway, but the objective is to strengthen the incentive mechanism rather than treat recently identified security questions as isolated bugs.

**PubSub is another major research priority**. The current streaming implementation relies on polling Swarm feeds for updates; the proposed PubSub architecture would instead propagate those updates through a dedicated subnetwork. Starting with broadcasting, the design can expand into multicast trees as the number of viewers grows, and later accommodate multi-publisher applications such as collaborative editing.

September also brought the publication of a research paper: ***[A DREAM Come True: Deletable Content in Immutable Storage](https://dl.acm.org/doi/10.1145/3805028)***, in *ACM Transactions on the Web*.

The apparent contradiction is deliberate. Swarm’s chunks are immutable, yet some applications need content to become unavailable. DREAM approaches deletion not by trying to make immutable chunks mutable, but by changing the conditions under which designated content can be retrieved. It therefore addresses a different problem from Etherchunk, presented during August’s Community Call: Etherchunk is concerned with reclaiming storage capacity, while DREAM investigates **provable forgetting**.

On Ethereum “homecoming,” the direction remains toward Ethereum Mainnet, including postage stamps and potentially the redistribution-game contracts. The precise path is still being worked through, with a fuller update expected in a future call.


## **Swarm ID: from proof of concept to applications**

When SwarmID was first presented on the Community Call in February, it was still a proof of concept. At ETHRome in September, 14 hackathon projects used it.

That matters because SwarmID is intended to remove one of the more stubborn pieces of friction in building applications on Swarm. **Instead of identity being tied to whichever node or device someone happens to be using, users can create a portable identity using a passkey, Ethereum wallet, or password and carry it between applications.** For developers, SwarmID also abstracts away some of the work involved in connecting users to storage on Swarm.

The call demonstrated this with two [ETHRome projects](https://ethrome2026.swarm-devrel.bzz.link/).

**[Gitkiv](https://github.com/robdgs/gitkiv)**, essentially a proof-of-concept decentralized GitHub, stores repository data on Swarm rather than leaving its availability dependent on one hosting platform. A SwarmID could be created directly from the application and used to begin interacting with Swarm without the user first having to configure a Bee node.

The second project, **[APIritivo](https://github.com/pf55351/apiritivo-eth-26)**, made the portability argument even clearer. The same SwarmID created while using Gitkiv was used to log straight into a different application. APIritivo is an API marketplace in which endpoint metadata is stored on Swarm and access can be unlocked after payment.

The important part of the demonstration was almost mundane: **the same identity simply followed the user from one application to another.**

That is the proposition SwarmID has been working toward. Identity becomes part of the shared application layer rather than something every application has to recreate and control for itself. ETHRome provided the first useful evidence of what happens when that primitive is put in front of builders.


## **AI on Swarm: from separate pillars to a stack**

Swarm’s AI work has appeared in pieces over recent months: MCP tooling, agent identity, access control, payments, data markets and reputation. September’s Community Talk put those pieces together into a more coherent architecture.

The roadmap now has three layers.

The first is **access**. Swarm MCP already gives AI agents a way to use Swarm, including storing persistent agent memory.

The second is a **social layer**. Using ERC-8004 alongside Swarm, agents can establish an on-chain identity while keeping richer agent metadata and reputation information on Swarm. Agent cards can contain information needed to find and interact with an agent without forcing all of that data on-chain.

The third is the **economic layer**, where those identities and data become the basis for transactions between agents.

The demonstration showed the beginnings of that system in operation. Seller agents can publish catalogs of data, accept payments using x402, and use Swarm’s Access Control Trie (ACT) to grant buyers access after payment. Purchases are indexed so that subsequent reviews can be tied to actual transactions: an agent that has not bought from a seller cannot simply manufacture a review that the marketplace treats as verified reputation.

**This addresses a practical gap in agent economies**. Identity alone tells you who an agent claims to be. A transaction history linked to verifiable reviews begins to tell another agent whether it has reason to transact with it.

The Solar Punk team’s Andras and Andrei also demonstrated an early marketplace interface showing buyer agents, seller agents and the marketplace treasury interacting in real time. Payments made in USDC pass through seller-specific splitter contracts, allowing a marketplace-defined share to go to the operator while the remainder goes to the seller.

Crucially, **the proposal is not to build one Swarm AI marketplace**. The work is **intended as infrastructure from which anyone could operate a marketplace** – small and specialized or considerably larger – using common components for identity, discovery, payment, access and reputation.

Work is continuing on discovery and categorization, including research into OntoDeck, as well as ERC-8183 for future markets in which agents could sell work or complete tasks rather than simply sell existing data. A more developed version of the agent-marketplace flow is being prepared for Devcon 8 in Mumbai.


## **Announcements**

The team members are currently in Tokyo for a series of privacy and Web3 events, with recordings being livestreamed and archived through [streamoverswarm.eth.limo](https://streamoverswarm.eth.limo/). The team will next be involved with ETHGlobal as mentors, followed by ZuCity.

After that, Devcon will become a major focus, but more on that in [the next Community Call, which will take place on 29 October](https://scc.swarm.bzz.link/).

See you then.
