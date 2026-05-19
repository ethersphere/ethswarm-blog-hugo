+++
banner = "/uploads/hackdays-2026-hero.jpg"
images = [ "/uploads/hackdays-2026-hero.jpg" ]
categories = [ "Events" ]
date = 2026-05-19T00:00:00.000Z
description = "For five days in late April, eleven teams formed, built, and demoed projects on top of Swarm — spanning AI agents, decentralized data marketplaces, mobile browsers, food traceability, email bridges, and more. Here's what they built."
references_and_footnotes = [ ]
title = "Swarm Accelerator 2026 Hackdays: Eleven Projects, One Decentralized Stack"
_template = "post"
+++

*April 20–24, 2026 · Swarm Foundation*

For five days in late April, the Swarm community came together for the **Swarm Accelerator Hackdays 2026** — a builder-first event focused on shipping real tools, apps, and integrations on top of Swarm. Eleven teams formed, built, and demoed projects spanning AI agents, decentralized data marketplaces, mobile browsers, food traceability, email bridges, and more.

The throughline across all of them: practical infrastructure that makes Swarm easier to use, more accessible, or solves a real problem for users and developers today.

Here's what the teams built.

![Hackdays discussion in progress](/uploads/hackdays-2026-discussion.jpg)

---

## 1. Swarm AI Data Exchange

**Team:** Andrei, Andras, Levi
**Links:** [GitHub](https://github.com/Solar-Punk-Ltd/swarm-ai-data-exchange)

![Swarm AI Data Exchange demo screenshot](/uploads/hackdays-2026-ai-data-exchange.png)

**The problem.** AI agents and humans don't have a secure, private, and trustless way to share and monetize gated data with each other.

**What they built.** A decentralized data marketplace combining three primitives: X402 for payments, Access Control Tries (ACT) for gated content, and the ERC-8004 standard for permanent agent identities and discoverability. The team shipped CLI tools and an AI skill to register agents with ERC-8004, and extended the Swarm Model Context Protocol (MCP) to support ACT and marketplace catalog feed uploads.

**Demo highlight.** A discovery dashboard featuring autonomous LangGraph agents acting as sellers — trading AI-generated art and proprietary data using trustless identities and on-chain payments.

**Next steps.** Refine the X402 flow and MCP extension to production standards, and integrate ERC-8004 reputation registries so on-chain feedback with metadata can live on Swarm.

---

## 2. Full Circle

**Team:** Vojtech, David, Attila
**Links:** [swarmblocks.eth.limo](https://swarmblocks.eth.limo/) · [GitHub](https://github.com/snaha/fullcircle-research)

![Full Circle block explorer prototype](/uploads/hackdays-2026-full-circle.png)

**The problem.** Indexing and storing massive Ethereum historical datasets — think 25 million blocks and states — on Swarm is too slow, memory-intensive, and technically challenging today.

**What they built.** A TypeScript-based indexer with a JavaScript EVM to calculate historical wallet balances, paired with a caching proxy that manages chunk uploading. The team experimented with three indexing strategies: mandatory manifests, SQLite databases, and proximity-order tries.

**Demo highlight.** A working prototype block explorer and validated chunk uploading and indexing mechanisms.

**Next steps.** Build out decentralized indexer infrastructure with validation, staking, and reward mechanisms — turning it into a permanent public good.

---

## 3. Swarm Collab

**Team:** Nugaon, Bálint, Ekrem, Marios
**Links:** [GitHub (Apiary Suite)](https://github.com/Apiary-Suite)

![Swarm Collab document editing demo](/uploads/hackdays-2026-swarm-collab.png)

**The problem.** Light clients on Swarm can't currently do real-time application communication without a centralized server in the middle.

**What they built.** A PubSub network designed for light clients. A broker node manages subscribers and broadcasts messages back to them. Messages are assigned a single chunk bound to the channel's topic, enabling stateless verification.

**Demo highlight.** A "Swarm Collab doc" application — a Google Docs alternative — running on top of the Swarm PubSub network, with Waku tested as an alternative transport, passing messages through broker peers.

**Next steps.** Allow light clients to join each other directly via the broker using UTR, and add incentives for message relaying.

---

## 4. Swarm Volumes API

**Team:** Andrew, Pavel

![Swarm Volumes Sepolia demo](/uploads/hackdays-2026-swarm-volumes.png)

**The problem.** Dynamic pricing in the existing Swarm postage stamp batch system makes data expiry hard to predict — and predictability is what developers expect from cloud storage.

**What they built.** A "good till canceled, pay as you go capacity reservation" model — called Volumes — implemented as a smart contract. An autonomous keeper bot tops up postage batches every minute to maintain storage.

**Demo highlight.** A live setup on Sepolia showing volumes ticking down and being automatically replenished by the bot.

**Next steps.** Make Volumes available in production on Gnosis Chain so agents can create and manage them directly.

---

## 5. MCP Swarm Apps

**Team:** Roland, Ferenc

![MCP Swarm Apps VS Code demo](/uploads/hackdays-2026-mcp-swarm-apps.png)

**The problem.** Complex Swarm operations are hard to surface natively inside natural-language AI assistants.

**What they built.** An MCP-App that recognizes user prompts and renders an interactive visual iframe directly inside an AI chat (demoed in VS Code Insiders) — bringing MCP-Apps and the Swarm MCP together in one interface.

**Demo highlight.** An AI interpreting requests to buy postage stamps and upload files by automatically filling parameters like size and TTL into the visual interface.

**Next steps.** Polish the Swarm MCP extension to production standards and merge it into the main repository.

---

## 6. Mobile Freedom Browser

**Team:** Meinhard, Florian
**Links:** [freedombrowser.eth.limo](https://freedombrowser.eth.limo/) · [GitHub](https://github.com/solardev-xyz/freedom-browser)

![Freedom Browser iOS and Android demo](/uploads/hackdays-2026-mobile-freedom-browser.png)

**The problem.** Running a peer-to-peer node natively on mobile is hard — memory and load requirements rarely play well with iOS and Android constraints.

**What they built.** Native mobile apps wrapping Bee-light: Java for Android, Swift/WebKit for iOS. The browser uses a quorum of multiple RPCs for name resolution to prevent RPC takeovers.

**Demo highlight.** Successfully ported Freedom Browser to both iOS and Android, with the node running stably as a system process in the foreground or as a background service on Android.

**Next steps.** Test and publish the cross-platform Bee-light wrapper for other developers, and launch the mobile Freedom Browser in app stores.

---

## 7. Swarm Notify (Nook)

**Team:** Marios, David, Gašper, Črt
**Links:** [GitHub](https://github.com/GasperX93/swarm-notify)

![Nook redesigned UI with shared drives](/uploads/hackdays-2026-swarm-notify.png)

**The problem.** Encrypted content sharing on Swarm lacks discoverability, notifications, and an inbox model — making collaboration friction-heavy.

**What they built.** The Swarm Notify library: an identity key, paired message feeds, and an on-chain notification contract that alerts clients when they're contacted.

**Demo highlight.** A redesigned Nook UI sharing encrypted "drives" and pinging recipients with on-chain notifications, automatically populating their "shared with me" section.

**Next steps.** Support collaborative feeds by moving manifests out of ACT to a separate SOC for access control — letting multiple users modify the same drive.

---

## 8. BDF Protocol — Food Traceability

**Team:** Antonio, Ljubisa, Marcio

![BDF Protocol berry traceability demo](/uploads/hackdays-2026-bdf-protocol.png)

**The problem.** Verifying food provenance through traditional intermediaries breaks trust; doing it fully on-chain breaks the bank on gas fees.

**What they built.** A growing NFT that accumulates agronomic and logistic references across the harvesting and processing lifecycle. Rich data lives on Swarm; the blockchain only holds references and state transitions.

**Demo highlight.** Deployed the first real-world traced berry packages on-chain using a fully reproducible, cryptographically sealed 6-layer pipeline.

**Next steps.** Integrate with ERP systems via ODU, run broader multi-party feed sync signing pilots, and build an SDK for auditors.

---

## 9. The Hive Node

**Team:** Henry Bergström, Ramesh Pallikara, Mahyar (MetaProvide)

![Hive Node IPFS-to-Swarm migration demo](/uploads/hackdays-2026-hive-node.png)

**The problem.** Migrating projects that depend on centralized IPFS gateways over to a fully decentralized Swarm network takes too much effort.

**What they built.** The Hive node intercepts initial IPFS requests and stores them on Swarm. Future requests are served from the Swarm cache, with a local offline cache as a fallback.

**Demo highlight.** A website seamlessly shifting its origin from IPFS to Swarm — and remaining fully accessible even when both IPFS and Swarm networks were artificially paused.

**Next steps.** Add S3 compatibility to broaden adoption.

---

## 10. Simaps (formerly Lazy PM)

**Team:** Gergő Zsiák, Bálint Csorvási

**The problem.** Project data is scattered across GitHub, Jira, and disjointed documentation sources — leaving project managers stitching context together by hand.

**What they built.** MCP connectors fetch and harmonize data from various tools into Markdown files, which are then fed into LLMs to detect anomalies and generate insights. The setup also supports a BMAD agent ecosystem for agile development.

**Demo highlight.** Integrated documentation sources, Jira, and GitHub — and showed the agent surfacing project anomalies automatically.

**Next steps.** Simplify configuration setup, develop visual dashboards, and optimize data representation to reduce token usage.

---

## 11. Dmail

**Team:** Jarkko, Aata, Chris

![Dmail Thunderbird and Roundcube demo](/uploads/hackdays-2026-dmail.png)

**The problem.** Bridging core Web1/Web2 internet protocols — SMTP and IMAP — with Web3 decentralized storage, without breaking the way people already use email.

**What they built.** A local Dmail bridge that connects standard mail clients (Thunderbird, Roundcube) to Swarm. It translates SMTP traffic into Swarm transactions, addresses recipients via ENS, and fetches incoming mail by pulling feeds.

**Demo highlight.** Sending and receiving an ENS-addressed email — complete with a large image attachment — through a standard mail client, using Swarm feeds end to end.

**Next steps.** Add PGP encryption over the protocol and implement MX record functionality for mailbox discovery.

---

## Closing Thoughts

![Hackdays closing demo session](/uploads/hackdays-2026-closing.jpg)

Eleven teams. Five days. One decentralized stack.

What stood out across the projects: every team picked a real friction point — predictable storage, mobile node performance, AI-native interfaces, food provenance, email — and shipped something close enough to working code that the next step is production, not prototype.

The Swarm Accelerator Hackdays exist to surface exactly this kind of work: practical, opinionated, and built by people who want to use the network themselves. Thanks to every team for showing up and shipping.

Follow each project's repo for what comes next, and watch this space — several of these are heading toward production over the coming months.

---

**Want to build on Swarm?**

- Docs: https://docs.ethswarm.org/
- GitHub: https://github.com/ethersphere
- Discord: https://discord.com/invite/hyCr9BMX9U
- X: https://x.com/ethswarm
