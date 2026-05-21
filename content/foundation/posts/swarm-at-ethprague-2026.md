+++
banner = "/uploads/ethprague-2026-hero.jpg"
images = [ "/uploads/ethprague-2026-hero.jpg" ]
categories = [ "Events" ]
date = 2026-05-20T00:00:00.000Z
description = "Swarm Foundation joined ETHPrague 2026 — running a booth, mentoring teams, giving talks, and backing nine hackathon projects across four named bounties, one track award, and four custom Swarm rewards."
references_and_footnotes = [ ]
title = "Swarm at ETHPrague 2026: From booth conversations to stage time, and more hackathon wins than there were bounties"
_template = "post"
slug="swarm-at-ethprague-2026"
+++


*May 8–10, 2026 · Municipal House, Prague*

[ETHPrague 2026](https://ethprague.com/) brought the Ethereum community back to the Municipal House for three days of talks, hacking, and the kind of corridor conversations that move ideas faster than any panel. Swarm Foundation joined with a booth, two on-site mentors, bounties open across all three hackathon tracks, a talk by Viktor Tron exploring how Swarm's protocol primitives and tooling can support different storage setups and how this creates a practical path from Web2-style usage toward fully decentralized infrastructure, a "probe" into decentralization theatre by Migle Rakitaite, and a resounding panel Decentralisation Stack - Where Are We Still Lying To Ourselves? with distinguished guests.

Read the [official ETHPrague 2026 recap](https://ducttapeevents.notion.site/ETHPrague-2026-Recap-35d1a305cfe780098219dbeba35e2773) for the wider event picture. This post focuses on what Swarm brought, who built with us, and what they walked away with.

---

## At the booth

Set up in the café area, the Swarm booth was the place to meet the team, ask direct questions, and get a practical look at what we are building — from decentralized frontend hosting with Beeport to decentralized streaming, hackathon guidance, and early conversations around the upcoming ambassador program. Uplifting conversations over specialty coffee and the local classic, Marlenka honey nuggets, moved from “what’s the difference between Swarm and IPFS?” to deeper dives into postage stamps, Feeds, ACT, and what it actually takes to build on decentralized infrastructure.

![The Swarm booth at ETHPrague 2026](/uploads/ethprague-2026-booth.jpg)

![Conversations at the Swarm booth](/uploads/ethprague-2026-booth-2.jpg)

---

## Talks

Three sessions on the program featured Swarm voices — a foundational protocol talk, a cultural audit, and a cross-stack panel.

#### From Free to Fast: Product Tiers of Decentralised Storage
**Speaker:** Viktor Trón (Swarm Foundation)  ·  **9 May, 11:15 · Sladkovský Stage**  ·  [Watch](https://www.youtube.com/watch?v=YoXNfdwSZ4k)

Viktor walked through the spectrum of what's possible on Swarm — from free self-hosting at one end to high-availability, low-latency delivery at the other — and how the protocol's primitives and tooling combine into distinct service tiers. The framing: a practical on-ramp from Web2-style usage to fully decentralized infrastructure, without the usual "rewrite your stack" cliff.

![Viktor Trón presenting From Free to Fast at ETHPrague 2026](/uploads/ethprague-2026-viktor-talk.png)

#### Decentralisation Theatre
**Speaker:** Migle Rakitaite (Swarm Foundation)  ·  **9 May, 16:00 · Grégr Stage**  ·  [Watch](https://www.youtube.com/watch?v=5lvPOVB3zlg)

October 2025: AWS went down — and so did Coinbase, MetaMask, Base, and half of "decentralized" crypto. Migle's talk was an honest audit of where the stack actually breaks — frontends, gateways, RPCs, DNS — and why fixing it requires the one thing the industry is bad at: working together instead of pretending we're not all building the same thing.

![Migle Rakitaite presenting Decentralisation Theatre at ETHPrague 2026](/uploads/ethprague-2026-migle-talk.png)

#### The Decentralization Stack: Where Are We Still Lying to Ourselves?
**Panel:** Migle Rakitaite (Swarm Foundation), Viktor Trón (Swarm Foundation), Václav Pavlín (Logos), Mario (Ethereum Foundation), Amir Taaki (DarkFi), Meinhard Benn (Freedom browser), Attila Gazso  ·  **10 May, 11:40 · Grégr Stage**  ·  [Watch](https://www.youtube.com/watch?v=7BgkLAr_ZYQ)

A cross-stack panel asking the question most decks tiptoe around: what actually breaks if a single company disappears? Infrastructure builders from storage, compute, identity, and frontend sat down for an honest conversation about which parts of the stack are genuinely decentralized — and which parts everyone hopes nobody looks at too closely. No roadmaps. No token plugs.

![The Decentralization Stack panel at ETHPrague 2026](/uploads/ethprague-2026-decentralization-panel.png)

---

## The hackathon: four bounties, three tracks, nine winning projects

Swarm offered **four named bounties** spanning developer infrastructure, Ethereum data accessibility, and integration with adjacent platforms — alongside a **+$1,000 bonus** for any track winner whose stack used Swarm. Mentors were on-site throughout to help teams onboard quickly, debug live, and shape their submissions.

The result: **nine projects took home Swarm prizes**, including four bounty winners, one track award, and four custom Swarm rewards handed out to teams whose work the Swarm team wanted to back beyond the named challenges.

![Swarm bounty winners on stage at ETHPrague 2026](/uploads/ethprague-2026-hackathon.jpg)

### Track and bounty winners

#### 1. Phare — *Future Society Award*
**Team:** eStorm — Nicolò, Lorenzo, Ruben · [Devfolio](https://devfolio.co/projects/phare-e849)

*"What satellites can't see, citizens can."* Phare is a citizen-reporting protocol for spotting sanctioned oil tankers that disable their AIS transponders. Anyone can photograph a suspicious vessel and submit a bonded report — no account required. Photos, metadata, and verifier reasoning logs are stored on Swarm via Single Owner Chunks and Feeds; UMA's optimistic assertion framework adjudicates claims; verified reports get permanent ENS identities with full dossiers behind a Swarm contenthash. The team picked up the Future Society Award plus two additional prizes.

#### 2. Truth Market — *Verified Fetch — Trust No Gateway*
**Team:** Sarthi, Sandro · [Devfolio](https://devfolio.co/projects/truthmarket-2eb3)

*"Prediction for the Age of AI."* A prediction market that resolves subjective, hard-to-verify claims through staked, private commit-reveal jury voting rather than a centralized oracle. Built in Solidity + Next.js, with market documents and evidence pulled from Swarm via the Verified Fetch API so participants can independently verify what they're voting on — no gateway trust required.

#### 3. fama — *A Simple Key-Value Store on Swarm*
**Team:** Viki's Vacuum — Viki, Jana, Martin · [Devfolio](https://devfolio.co/projects/fama-5b40)

*"Claims expire. Credibility compounds."* fama turns social-media posts into falsifiable claims with deadlines, then assigns non-transferable credibility scores to authors based on how their predictions resolve. The team built a custom key-value store on Swarm (`@swarmkv/core`) as the application's data backbone, directly answering the bounty brief — and shipped a working app on top of it.

#### 4. Vigilbot — *Ethereum Chain State on Swarm*
**Team:** 0xj4an, Krisztian · [Devfolio](https://devfolio.co/projects/audit-agent-5916)

An autonomous AI agent that monitors Ethereum proxy upgrades in real time — detecting EIP-1967 events, diffing bytecode and ABI, flagging storage-layout violations, scoring severity with GPT-4o, and paying for off-chain intelligence via Apify X402 micropayments. Every alert (diff, AI analysis, block data) is published to a permanent Swarm Feed indexed by block number using Mantaray manifests, so threat intelligence stays retrievable long after the incident — without a centralized server.

#### 5. Obec & dAppSwarm — *Dappnode Packages on Swarm*
**Team:** Prokop, Rev M · [Devfolio](https://devfolio.co/projects/hromada-5c7a)

A double act. **Obec** treats ENS records as the state machine for neighborhood DAOs — proposals, funding, and lifecycle stages live directly in ENS text records and subnames. **dAppSwarm** is a Rust CLI that publishes Dappnode packages to Swarm using Mantaray manifests and Feeds, replacing the IPFS-plus-central-registry dependency with signed Single-Owner-Chunk feed entries and exponential-probe binary search for version lookup. Exactly the architecture the Dappnode bounty was looking for.

### Custom Swarm rewards

Awarded to teams whose builds caught the Swarm mentors' attention — whether for integration depth, ambition, or production-readiness — even though they didn't map cleanly onto a named bounty.

#### 6. swarmkey
**Team:** Josef V (@atris), noad dev (@noad) · [Devfolio](https://devfolio.co/projects/swarmkey-22aa)

A fully peer-to-peer marketplace for buying and selling decryption keys to digital content. No intermediaries — users need only a site reference hash, the Freedom browser, and a small amount of xDAI on Gnosis Chain. Encrypted user profiles back up to Swarm for cross-device portability, and the team also shipped a key-value store module for Swarm as part of the build.

#### 7. TASS (SolidScan)
**Team:** Srini, Shriya, Tianhao Gu, Anna · [Devfolio](https://devfolio.co/projects/tass-c2c0)

A VS Code extension that consolidates smart-contract security review and compliance checking — leveraging the Sourcify dataset to surface vulnerabilities and legal risks before deployment, with Swarm's Verified Fetch as the backend so contract verification data doesn't depend on a centralized gateway. Also won first place in the Sourcify bounty track.

#### 8. JimmyAgent
**Team:** Kostiantyn, Igor, Elena, Tetiana · [Devfolio](https://devfolio.co/projects/simbaagent-a916)

*"AI-powered satellite wallet."* JimmyAgent separates intent, reasoning, memory, and signing across multiple trust layers: users hold local intent, an AI agent explains and prepares actions, ENS handles identity and agent discovery, and SpaceComputer's satellite infrastructure handles signing. Swarm acts as the encrypted decentralized memory layer for the agent's reasoning and transaction context — replacing both browser wallets and centralized state servers.

#### 9. Pipeo
**Team:** Agoston, Ondřej, Dawid · [Devfolio](https://devfolio.co/projects/pipeo-3cf1)

*"Channels that never sleep."* A Reddit-style messaging layer for humans and agents, where each participant runs their own Feed and an aggregator composes them into a unified channel structure. Built on Node.js + Docker, with Swarm as the peer-to-peer messaging substrate.

---

## What we'll take into the next one

The headline for us isn't the prize money — it's that **more than 20 teams used Swarm in their hackathon builds**, well beyond the nine that walked away with named awards. That's the adoption signal worth tracking: more teams trying Swarm in real projects than we had bounties to back.

The other thing we'll carry forward is the energy. A lot of younger developers in the room, consistently positive feedback from the teams that worked with the mentors, and a new wind in the air that's hard to put on a slide. We're taking that into the next event.

---

## Thank you

To every team that built with Swarm in Prague — thank you. The next step isn't filing your project away. The Swarm team would love to keep working with you: technical mentorship, infra access, intros in the ecosystem, future bounty opportunities.

The fastest way to stay close is Discord — drop your handle once you join and we'll set up the hackathon-winner role: [discord.com/invite/hyCr9BMX9U](https://discord.com/invite/hyCr9BMX9U)

And to the ETHPrague team — thanks for putting on an event that consistently attracts people who actually build.
