+++
banner = "/uploads/scc-0326-recap.png"
images = [ "/uploads/scc-0326-recap.png" ]
categories = [ "Events" ]
date = 2026-04-02T00:00:00.000Z
description = "February’s Swarm Community Call focused on three areas: a look back at the Bee 2.7 release and what comes next, a walkthrough of the new “Building on Swarm” developer guides, and a forward-looking community talk on identity management."
references_and_footnotes = [ ]
title = "Swarm Community Call, 26 February – Recap"
_template = "post"
+++

[March’s Swarm Community Call ](https://www.youtube.com/live/bRkYQfXbawA)widened the lens beyond pure client updates: we introduced Koss as Swarm’s new Community Lead, shared a short preview of **upcoming** **workshops and conference presence**, then moved into the **Bee 2.7.1** patch release debrief, a first public look at the **new Protocol Team** formation, and a practical Community Talk demoing a **mobile light-node PoC** on Android. The call touched on tighter networking, tighter processes, and more ways to access Swarm without depending on third-party infrastructure.


## Community and Upcoming Activities

The call opened with an introduction to Koss, who will focus on community engagement and moderation – primarily on Discord, with increased presence on X as well. The goal is straightforward: The focus is on keeping feedback flowing from the community into the team, improving channel coordination, and supporting ecosystem monitoring and growth.

Koss also shared updates on the newly launched **[workshop series](workshops.swarm.bzz.link)**. The first session, **“Intro to Swarm,”** aired the day before the call and is [available to rewatch](https://youtube.com/live/lkrNZJFCmOc). Three more workshops are scheduled:
* **8 April: Decentralizing your agent with Swarm MCP**
* **5 May: How to decentralize any frontend** 
* **12 May: Decentralized streaming** 


We also took a quick look at near-term events: **EthCC (Cannes)** with [coffee hours on Swarm ](https://luma.com/fu90m321) planned for 1 April, **EthPrague (8–10 May)** where Swarm will be present as a sponsor with a booth, hackathon participation, [a talk and panel](https://ethprague.com/speakers), and a preview of **Swarm Accelerator Hackdays** (20–24 April), with a full report planned for April’s Community Call.


## Core Development Updates

Ljubiša walked through **Bee 2.7.1**, a patch release following 2.7.0, focused primarily on stabilizing and scaling the multi-transport work introduced with AutoTLS and secure WebSockets.

The release included **nine pull requests**, with the most substantial changes centered on peer-to-peer robustness:
* Addressing connectivity issues arising from multiple underlay addresses by adjusting connection timeouts (allocating time per underlay with a larger overall budget)
* Introducing **transport filtering**, so nodes preferentially communicate with peers supporting the same transport
* Improving the internal reacher component responsible for peer reachability: exponential backoff with jitter, fewer workers, and performance improvements to reduce propagation of unreachable addresses


Two additional improvements landed in the postage package:
* Faster, lower-impact snapshot loading
* Fixing a panic related to postage batch top-ups


Looking ahead, the Bee team’s near-term focus remains **stability and performance**, including **reducing unnecessary RPC calls** (lower operational overhead for node operators) and **improving reserve sample** computation (proof-of-storage mechanics relevant for incentives). Ljubiša also noted internal work toward a faster release cadence with smaller, more targeted releases.

*“One-line summary: Bee 2.7.1 tightens the multi-transport networking foundations from 2.7.0 and improves real-world connectivity and operational stability, with the team pushing toward more frequent, focused performance and reliability updates.”*


## In Focus — Protocol Reshape

The “In Focus” segment unpacked why Swarm is establishing a **Protocol Team** now. There has been a long-running internal and community debate about when protocol changes are necessary versus when issues can be solved at the implementation layer. This also raises a practical question: how to address deeper protocol-level issues without drifting into slow, opaque processes.

Andrew McPherson approached the topic from a tokenomics and market-structure perspective, highlighting a growing gap between community demand for protocol changes and the speed at which they reach implementation. This has shifted attention toward improving Swarm’s protocol development process, including revisiting the SWIP framework. Andrew's recommendations have been delivered to the Foundation, and process changes are now underway.

Henning Dietrich, who will lead the newly formed team, emphasized a dual focus: protocol-level depth paired with operational clarity. He pointed to the existing backlog — open PRs and issues — as a tangible example of why better organization, prioritization, and communication are needed. Henning framed the new team as a bridge between research, engineering, and the broader community: improving how protocol work is structured, explained, and coordinated, so that meaningful protocol evolution becomes more agile, more visible, and ultimately more useful for adoption-driven work.

Both Andrew and Henning noted they will attend the **Swarm Accelerator Hackdays**, with further details expected to surface publicly in April.


## Community Talk — Mobile Node PoC

The Community Talk featured Nándor (Solar Punk) [demoing a proof of concept](https://solarpunk.buzz/swarm-mobile-web3-power-in-your-pocket/) for running **Bee client functionality on Android** as a **light or ultra-light node**. The framing was simple: if Swarm aims to become everyday infrastructure, it needs clients that live where users live — and mobile is a large part of that.

Nándor’s demo showed a native Android application running in an emulator, replicating key dashboard-style workflows:
* Selecting node mode (light or ultra-light) and connecting to the Swarm network
* Creating/selecting postage batches (“stamps”), with user-friendly inputs for depth, duration, mutability, labeling, and indicative pricing queried from chain data
* Uploading a file to Swarm and using Android’s native share flow to distribute the gateway link
* Downloading content by pasting the reference and saving it locally
* Running the node as an Android service so it can remain active in the background while other apps are opened


Nándor encouraged those interested to review the **[Solar Punk GitHub repository](https://github.com/Solar-Punk-Ltd/swarm-mobile-android)**, where issues and solutions are documented. 

The key takeaway wasn’t that this is finished. It was that this PoC establishes a reference implementation and a set of principles that other developers can build on — whether the next step is a more complete mobile client, new mobile-first applications, or experiments like a “node in your pocket” concept.

**The next Swarm Community Call** will take place on **[30 April](https://scc.swarm.bzz.link/)**, as usual on the last Thursday of the month, at **17:00 CET**, with fresh updates expected from the Swarm Accelerator Hackdays.

As **[Discord](https://discord.gg/9EJTdUKa) remains the main space** for developer discussions, tech support, and connecting directly with the Swarm team, we encourage you to **post any follow-up questions there**, or to follow along in **the ongoing public threads**.
