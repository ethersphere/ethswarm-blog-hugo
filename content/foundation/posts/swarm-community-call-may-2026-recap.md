+++
banner = "/uploads/SCC0526-recap.png"
images = [ "/uploads/SCC0526-recap.png" ]
categories = [ "Events" ]
date = 2026-06-02T00:00:00.000Z
description = "May’s Swarm Community Call covered a breaking Bee 2.8.0 release requiring urgent operator upgrades, a research update on the next wave of protocol work, two Swarm Hackweek follow-ups, and a full EthPrague + hackathon report with bounty winners."
references_and_footnotes = [ ]
title = "Swarm Community Call, 28 May – Recap"
_template = "post"
+++

[May’s Swarm Community Call](https://www.youtube.com/watch?v=8wpS8tuiE6o&t=278s) covered a **breaking Bee release (2.8.0)** requiring urgent operator upgrades, a research update on the next wave of protocol work, two concrete Swarm Hackweek follow-ups (including a Google-Docs-style **collaborative editor on Swarm**), and a full **EthPrague + hackathon report** with bounty winners and takeaways.


## **Core Development Updates**


### **Bee 2.8.0 — breaking release, security hardening**

The Bee team [shipped Bee 2.8.0](https://blog.ethswarm.org/foundation/2026/bee-2-8-release/) as a **breaking release focused on security hardening**, and node operators were again urged to **upgrade as soon as possible** to remain on the network. Elad outlined an overhaul of the handshake / hive gossip path, including **stronger handshake validation** and protections aimed at mitigating classes of attacks (e.g., Sybil / eclipse / replay), with additional fields and checks introduced as part of the new handshake. He noted that not all nodes had upgraded yet (a few hundred lagging), but replication levels were still sufficient to avoid immediate integrity concerns; operators can also monitor version distribution via SwarmScan.


### **Research updates**

Callum framed research work as “protocol overhauls and improvements across the board,” with several strands nearing final review: **pullsync improvements**, handling **radius-change edge cases**, **smart neighborhood rebalancing**, and the tokenomics roadmap being broken down into milestones—starting with **withdrawable stake** (again described as near final review). He also mentioned work-in-progress around economic UX (pricing stability), bandwidth incentives, and continued experimentation on running testnets on chains beyond Gnosis.


## **In Focus — Swarm Hackweek Follow-ups**


### **Swarm Collab App: real-time collaborative editing on Swarm**

The first [Hackweek](https://blog.ethswarm.org/foundation/2026/swarm-accelerator-2026-hackdays-eleven-projects-one-decentralized-stack/) spotlight was a proof-of-concept “**Google Docs, but decentralized**”: documents and metadata persist on Swarm, while real-time updates are delivered via **Swarm PubSub** (a publish/subscribe relay mechanism implemented in Bee). The demo showed multiple users joining a shared document link, live cursor tracking, and near-instant text sync. The team also demonstrated a code-editor mode (VS Code core features like syntax highlighting / IntelliSense) and discussed longer-term plans like commenting, version history, wallet sign-in, and optional encryption/ACT-based access control.

Nugaon also previewed protocol-direction work: reducing reliance on manually specified “brokers” by adding discovery (so the network can figure out who should serve you), and aligning broker incentives with Swarm’s bandwidth incentives so relaying messages becomes economically legible.


### **In-browser client: major usability milestone**

The call also highlighted progress on the **in-browser light client**: Abel demonstrated a major usability milestone on **testnet**, with a browser-based light client successfully **retrieving content in under 10 seconds**. The demo used a simple “call for a picture” flow and then scaled up to real media by pulling and playing a movie, showing that this is no longer limited to tiny files or toy examples. The takeaway is straightforward: shrinking “time-to-first-use” for a browser node is one of the most important unlocks for making Swarm feel like everyday infrastructure.


## **Community Talk — EthPrague + Hackathon report**


### **[EthPrague overview](https://blog.ethswarm.org/foundation/2026/swarm-at-ethprague-2026/) and what changed in hackathons**

Migle described [EthPrague](https://ethprague2026.devfolio.co/projects?show_winners=true) as a value-aligned, ethics-and-privacy-heavy gathering, and noted a noticeable shift in the hacker profile: more university blockchain clubs and younger entrants, plus a wider diversity of presentation styles. The team also reflected on AI’s impact: hackathons are faster, but judging becomes harder when some teams can pitch well while shipping less, or ship more while struggling to explain and validate what’s in the repo.


### **Swarm hackathon turnout and bounty winners**

Swarm saw strong engagement early: ~10 teams on day one, and **21 submissions** total involving at least one Swarm bounty track. Four primary bounty winners were announced:

* **Verified Fetch:** *Truth Market*
* **Key-Value Store:** *Fama*
* **Blockchain Data on Swarm:** *VigilBot.eth* (AI-generated security reporting + Swarm publication)
* **DappNode Packages on Swarm:** *DappSwarm* (package distribution via Swarm)

Because submissions exceeded expectations, Swarm also gave **four ad-hoc awards** to recognize standout effort and/or unusual angles:

* **Pipeo** (deep learning focus; mainnet node + GSOC feature)
* **Jimmy Agent** (encrypted agent data + space/satellite transaction signing “wow factor”)
* **TASS** (VS Code extension checking files against MiCA regs; Swarm as data layer)
* **SwarmKey** (p2p marketplace using Swarm + Freedom Browser; valuable terminology/library feedback)


### **Main track winner: PHARE**

Migle also highlighted the **main track winner** that Swarm additionally rewarded: **Phare**, described as a citizen-powered registry for sightings of sanctioned oil tankers—users submit images, which are stored on Swarm to create a more resilient, organized record than fragmented posts across platforms.


### **Levi’s conference takeaways**

Levi’s take was a split-screen: hackathon interest in Swarm felt like a genuine step toward “production-like adoption,” but he was disappointed by a lack of “why are we doing this?” vision in many talks. He framed Swarm’s value as enabling freedom of choice along the centralization ↔ decentralization spectrum—helping users start with familiar access paths while gradually taking more ownership as they learn. A conversation to be continued for sure, as the team is heading to the Berlin Blockchain Week next.


---

As always, follow-up questions and deeper threads are encouraged on **Swarm Discord**, which remains the main place for dev discussion, support, and connecting with the team.

The [next Swarm Community Call will take place on Thursday, 25 June](https://scc.swarm.bzz.link/) (last Thursday of the month).
