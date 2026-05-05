+++
banner = "/uploads/devupdate-0526.png"
images = [ "/uploads/devupdate-0526.png" ]
categories = [ "Development updates" ]
date = 2026-05-05T00:00:00.000Z
description = "April's development work focused on tightening the foundations: better performance, cleaner tooling, stronger reliability, and smoother user flows across..."
references_and_footnotes = [ ]
title = "Monthly Development Update – April 2026"
_template = "post"
+++


April's development work focused on tightening the foundations: better performance, cleaner tooling, stronger reliability, and smoother user flows across the Swarm stack. 

The month was also shaped by the **Swarm Accelerator Hackweek**, where several teams stress-tested ideas in practice, produced working PoCs, and turned exploratory concepts into more concrete collaboration tracks.

On the Bee side, the team worked through infrastructure, performance, and stability improvements, including optimized RPC calls, better WebSocket upload handling, sharky corruption fixes, dependency updates, configuration improvements, and broader test/code-quality cleanup.

The JS track continued to improve developer experience across Bee-JS, Swarm-CLI, and gateway tooling. Bee-JS saw several releases, including an axios upgrade and a new method for BZZ-based postage batch top-ups. Swarm-CLI gained more attention, with work on upload history and simpler BZZ amount handling, while gateway tooling received CORS and dependency updates.

Across the ecosystem, partners also moved key work forward: Solar Punk shipped a new Swarm Desktop release and advanced collaborative editing, AI agent identity, streaming, mobile node, and Swarm ID work. Datafund pushed provenance tooling further with `storageRef` support across the stack, SDK updates, monitoring improvements, and progress toward the `dataprovenance.app` alpha.


### [Bee Track](https://github.com/ethersphere/bee)

* Focused development across infrastructure, performance, and stability improvements. Key highlights include optimized RPC calls and a per-chunk stamped putter for WebSocket uploads that enhance performance, while sharky corruption fixes and binary codec migration with backward compatibility strengthen reliability.
* The team standardized code formatting with gofumpt, removed dev-mode, and stabilized flaky tests to improve code quality. Environment variable resolution for nested blockchain-RPC configs and Docker updates ensure better configuration management. Dependencies were updated, including libp2p v0.48.0, while new features like auto-detected file content-types and soft-fail handling for insufficient stake improve user experience and API robustness.
* Overall, April focused on performance optimization, code quality, and foundational improvements to support production deployments.

### JS Track

#### Apps

##### [Bee-JS](https://github.com/ethersphere/bee-js)

We have released 3 versions, the latest is v12.1.0.
* We have updated axios from major version 0 to 1. Our goal with Bee-JS is to keep it fully compatible across environments (browser, node, and mobile) and module systems (require, import). Axios had some recurring problems where 1.x versions did not properly support CJS/ESM dual-compatibility, but a recent investigation showed that this is no longer the case. We upgraded to axios v1.15.x to receive the security and other fixes which were not all available on the old branch.
* A new method has been introduced: `calculateTopUpForBzz`. This function enables postage batch top-ups based on the desired BZZ input rather than the duration (or "amount" in Swarm jargon). For example, you can use this to extend the duration of a stamp for exactly 10 BZZ — ideal also for the case where you want to support someone else's work for a flat amount.


##### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)

We have allocated more focus to Swarm-CLI to enhance the user experience.
* We are adding a new "upload history" feature — similar to what you have seen in Swarm Desktop and Beeport — so that you can find your prior uploads made with Swarm-CLI anytime. This feature can be easily disabled for users who seek more privacy and prefer not to store this data on disk. It is already merged to the master branch and can be used by building from source.
* We are reviewing several commands to see where we can make improvements — which led us to the `cheque deposit`, `cheque withdraw`, and `stake` commands. We are unifying and simplifying the way our users specify BZZ amounts for commands. Previously, some actions required specifying the exact BZZ values to all 16 decimal places, which we are improving now.


##### [Swarm Gateway](https://github.com/ethersphere/gateway-ui)
We have patched the CORS headers in our gateway tooling so that presigned (stamped) chunks can now be uploaded, and updated our dependencies to stay clear of vulnerability issues.


### Ecosystem

#### Solar Punk

* [Swarm Desktop v0.53.1](https://github.com/ethersphere/swarm-desktop/releases/tag/v0.53.1) is out, with bugfixes and Bee 2.7.1.
* A PoC of collaborative document editing on Swarm has been created during Swarm Accelerator, and it can be used as a basis for partner collaborations.
* We made significant progress on Decentralized AI Agent Identity & Discovery utilizing Swarm MCP.
* We are working on making our [video streaming](https://cryptomondays.beebridge.buzz/) even more customizable and scalable.
* There are investigations underway about providing a much easier onboarding experience into the Swarm ecosystem.
* We've wrapped up the Mobile Node PoC.
* Internal testing of Swarm ID integration has been completed successfully.

#### Datafund

* **Provenance Toolkit & related updates**
    * `storageRef` shipped across the full stack — bidirectional lookup between Swarm storage references and on-chain hashes. New `setStorageRef` in V4 smart contract (Base Sepolia), propagated to SDK (v0.6.1), CLI, and MCP server.
    * SDK v0.6.1 published — raw JSON upload, `storageRef` in chain anchoring, OIDC trusted publisher flow for npm.
    * `swarm_connect` monitoring — Prometheus metrics, Grafana Cloud integration, pool stamp health metrics, rate limiting for stamp replenishment, fixed false balance alerts.
    * `dataprovenance.app` approaching alpha — landing page and demo frontend for the provenance toolkit. Live Records dashboard with on-chain data, stamp validity UX, receipt downloads, file-drop verification.


### DevRel

#### Content

* [State of the Network: March 2026](https://blog.ethswarm.org/foundation/2026/swarm-state-of-the-network-march-2026/)
* [Monthly Development Update – March 2026](https://blog.ethswarm.org/foundation/2026/monthly-development-update-march-2026/)
* [Swarm Community Call, 26 March – Recap](https://blog.ethswarm.org/foundation/2026/swarm-community-call-26-march-recap/)


### Events

#### Swarm Accelerator Hackweek

The Swarm Accelerator Hackweek (20–24 April, Budapest) brought contributors and external builders together for a focused week of hacking on decentralized infrastructure.

The projects covered a wide range: from a native mobile browser for the decentralized web, to a new model for storage capacity that behaves more like a predictable reservation than a slowly expiring prepaid batch; from agent-to-agent data exchange with payments, granular access control, and identity, to food traceability systems; from improved chat-based interfaces for managing stamps and files, to new notification and messaging layers for light-node users; and even work on email and Ethereum data access through Swarm.

What tied these efforts together was that they were all, in one way or another, exploring what still needs to exist around the protocol foundations for Swarm to become easier to access, easier to build on, and more useful — without giving up the properties that make it worth building in the first place.

We will be unpacking these project highlights across our Swarm Community Calls: April's edition already covered some of them, while more will be presented in May.


#### Swarm Community Call – 30 April

[April's Swarm Community Call](https://www.youtube.com/live/3vMBhtm6FjE) was intentionally different: rather than the usual monthly segment rotation, the call served as a high-level report-out from the **Swarm Accelerator Hackweek in Budapest** — a week-long, invitation-only sprint bringing together Swarm contributors, ecosystem teams (including Solar Punk), and external builders. The goal wasn't to dive deep into implementation details, but to surface what teams tried to solve, why it matters, and what these experiments suggest about the "missing middle layers" Swarm needs to become easier to use in real life.

You are welcome to watch the full event [recording here](https://www.youtube.com/live/3vMBhtm6FjE).


### Upcoming events

#### [Swarm Workshops](https://workshops.swarm.bzz.link/)

A new series of practical, no-fluff [workshops](https://workshops.swarm.bzz.link/) is underway. The first aired on 25 March — **Intro to Swarm** — followed by **Decentralizing your agent with Swarm MCP** on 8 April. Today we continue with **How to decentralize any frontend**.

If Swarm ever sounded interesting but too complicated, [start here](https://youtube.com/live/lkrNZJFCmOc) — and share it with anyone who should finally get what this stack is actually about.

Planned next:

* **Decentralized streaming** (12 May)

[Read more and sign up](https://workshops.swarm.bzz.link/).


#### Swarm Sessions at ETH NS in May

The [Genesis Month](https://luma.com/ethns) of [ETH NS](https://www.ethns.io/) (Ethereum's node at [Network School](https://ns.com/) in Malaysia) is in full swing, and Swarm will be present with two workshops on **Swarm MCP** and **decentralized frontends**.


#### Swarm Community Call – 28 May

The next Swarm Community Call will take place on **[Thursday, 28 May](https://scc.swarm.bzz.link/)**, as usual on the last Thursday of the month, at 17:00 CET — [broadcast on the Swarm Foundation's X](https://scc.swarm.bzz.link/).


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our careers page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
