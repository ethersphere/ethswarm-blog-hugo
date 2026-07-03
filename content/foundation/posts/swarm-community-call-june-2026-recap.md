+++
banner = "/uploads/SCC0626-recap.png"
images = [ "/uploads/SCC0626-recap.png" ]
categories = [ "Events" ]
date = 2026-07-03T00:00:00.000Z
description = "June's Swarm Community Call covered the upcoming non-breaking Bee 2.8.1 release in final testing, and an extended field report from Berlin Blockchain Week — talks, panels, The Plural Monolith livecoding installation, a Subcult demo, and DeSci conversations."
references_and_footnotes = [ ]
title = "Swarm Community Call, 25 June – Recap"
_template = "post"
+++

[June’s Swarm Community Call](https://www.youtube.com/live/hOWuTt89W78) combined the usual Core Development Updates with a less formal field report from Berlin Blockchain Week. On the technical side, the call covered the **upcoming** **Bee 2.8.1** release: a non-breaking package in final testing, with hardening work, RPC traffic optimizations, API changes aimed at browser/JavaScript clients, technical-debt cleanup, and an opt-in SIMD chunk-hashing improvement for Linux AMD64 nodes. The rest of the call moved through Swarm’s presence and reflection on Berlin Blockchain Week, from talks, panels and special livecoding collaborative experimental art installation at the Web3Privacy Now’s Neocypherpunk Summit, at Web3 Summit, DeSci.Berlin, Brew, and AI agents day.


## **Core Development Updates – Bee 2.8.1 Release**

Elad opened with an update on the upcoming **Bee 2.8.1** release, which had been - at the time of the Call - in final testing stages. Unlike Bee 2.8.0, this is a **non-breaking release**, so there is no emergency upgrade pressure — but it includes enough improvements that node operators are still encouraged to upgrade once it lands. The **release date** is set on **7 July**, with a [detailed release blog out now](https://blog.ethswarm.org/foundation/2026/bee-2-8-1-release/).

The release contains more than 40 PRs and focuses on several practical areas:

* **General hardening**, including consistency improvements under edge cases
* **Reduced blockchain RPC traffic**, improving operational efficiency
* **API updates** that allow clients to stamp content directly, which should help browser clients and JavaScript implementations that need more control over this logic
* **Technical-debt cleanup**, including removal of the old dev mode and legacy Bee 2.6 compatibility paths
* **API contract cleanup**, making endpoint behavior more consistent
* **Opt-in SIMD chunk hashing** for Linux AMD64 systems, using hardware acceleration to improve hashing performance (**2–4x faster chunk hashing** while reducing runtime overhead)

TLDR: Bee 2.8.1 is a non-breaking but meaningful cleanup and performance release: less technical debt, better API surfaces, lower RPC overhead, and opt-in faster chunk hashing for supported node operators.


## **In Focus / Community Talk — Berlin Blockchain Week Field Report**

The second part of the call combined **In Focus** and **Community Talk** into one extended report from **Berlin Blockchain Week**. Rather than a polished conference recap, the framing was deliberately closer to a field report.

Migle opened with covering Web3Privacy Now’s Neocypherpunk Summit, where she delivered **a keynote** on **Decentralization Theater** and hosted a panel on decentralization. The core argument was direct: the space needs more collaboration between projects with aligned ethics, and less default positioning as competitors. The panel was intentionally framed to avoid the usual contextless conference format and instead ask a harder question: what is not working in the industry that everyone keeps pretending does?

Migle noted that after years of conferences, the industry has become “too sugar-coaty,” losing some of the raw honesty of earlier Bitcoin and Ethereum meetups. The panel brought together Mario Havel, Kyle Den Hartog from Brave Browser, Meinhard Benn from Freedom Browser, and Viktor Trón, and was designed to avoid the usual disconnected conference format and instead create an honest conversation testing whether projects with overlapping values could recognize possible collaboration instead of reflexively occupying separate corners.

A major part of the call focused on **The Plural Monolith**, experimental live coding audio-visual-infrastructure installation created by Swarm in collaboration with **DarkFi** and **WinPrivacy**.

On a conceptual level, it was a probe into one of Web3’s central contradictions: how to coordinate collectively while preserving individual sovereignty; how to surrender individual authorship without losing voluntary human participation; and how to let many people shape one shared output without handing control to a central owner.

This was not only the theme of the installation — it was also how the project worked in practice. The Plural Monolith invited people to participate live, contribute sounds, join the coding session, and become part of a collective performance where no single person fully “owned” the final result. The infrastructure was not hidden, but it was also not presented as a product pitch. Swarm entered the work as an instrument: the layer through which sounds were stored, accessed, and brought back into the livecoded mix.

**The performance premiered** at the **Web3Privacy Now Neocypherpunk Summit** and later had a second session at **Web3 Summit**. A [dedicated Swarm-hosted page remains live](https://livecoding.eth.limo/), allowing people to contribute samples to the soundbank. Those samples can then be pulled into future livecoding sessions, making the project less of a one-off and more of an ongoing social/art experiment.

In that sense, The Plural Monolith became one of the clearest expressions of the call’s wider Berlin takeaway: decentralized infrastructure becomes easier to understand when it stops being explained only as infrastructure. Here, it became a material, an instrument, and a coordination surface — something people could touch, feed, fork, perform with, and continue.

Special guest **Alaska** joined the call to reflect on entering the Plural Monolith almost by accident and quickly becoming part of the project. Coming from the intersection of decentralized tech, art, and music, he framed the project as exactly the kind of strange cultural inroad that can make sovereign infrastructure feel meaningful. In his words, people often hear conference talks full of future-facing handwaving; sometimes what makes the technology click is something funny, strange, curious, and creative.

He also connected this to a wider thesis: decentralized tools need to reach the creative class and the “weirdos” who build scenes, symbols, and cultural adoption. Live coding may look quirky on the surface, but the deeper point is the ability to decentralize global co-creation — not as a pitch deck, but as an actual shared artistic system.

Alaska then **demoed Subcult – a decentralized music application with direct payments he had integrated with Swarm**. The app streams music from Swarm and adds an automatic donation/payment layer on top, with funds going directly to artists (and, in the demo, a small share to the platform). The point was not that this is already a finished product, but that the pieces are now close enough to assemble: decentralized media storage, app delivery, and blockchain-based payment flows can form a working alternative to platform-controlled music infrastructure.

His practical takeaway was blunt: once the complexity works, users do not need to know it is there. “I’m streaming a file into my web app” should be all they experience. The fact that a full integration could be built in a day was presented as a sign that Swarm is moving from abstract infrastructure toward usable application substrate.

Koss additionally noted that Berlin brought together not only philosophers, builders, and artists, but also people who directly need these tools: activists, NGOs, and groups facing censorship or suppression. That gave the week a more grounded quality. The discussion was not only about decentralization as an abstract ideal, but about who actually needs decentralized frontends, privacy, self-sovereign tooling, and resilient infrastructure.

In the final round, Koss connected this to the maturity of the space: compared with earlier crypto years, the technology, market, and narrative have all grown up. The old clunkiness and purely financial use cases are giving way to more real-world possibilities — even if the process of becoming “adult” infrastructure is messy.

The team then took a look at what was happening at the Brew event, which became another important proof point. Swarm ran workshops, including decentralized media streaming, and the live coding experiment evolved into both a workshop and a closing performance. The team originally planned an AI Agents workshop, but demand around live coding led to a pivot: Alaska ended up giving a workshop on it.

That shift mattered because people walked away understanding that Swarm’s technology could be used directly for music creation and decentralized media. As Migle put it, this was a move **from telling** people what Swarm is** to showing** it.

The call also touched on Migle’s DeSci.Berlin talk. The framing was intentionally cautious: Swarm is not claiming to have “the solution” for decentralized health data storage. Instead, the Foundation is opening a conversation with the DeSci community: what could be useful, what should be tested, and whether Swarm’s stack can support scientific or healthcare-related data needs in practice.

Migle noted that several people from the DeSci audience followed up after the talk, and raised the possibility of organizing an online workshop series around decentralized storage for scientific and healthcare purposes.


### Closing takeaways

The final round was broadly optimistic. The speakers agreed that Berlin was somewhat a reminder that, despite market noise and crypto Twitter sentiment, the people who are still showing up are committed, inspired, and continuing to work. The takeaway was that the tech is better than it has ever been, and the culture feels alive, with some serious attempts to break out of Web3 bubbles into contact with artists, activists, DeSci communities, and other groups outside the usual circuit.

The next Swarm Community Call will take place on **30 July**, as usual on the last Thursday of the month.
