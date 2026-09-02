+++
banner = "/uploads/SCC0826-recap.png"
images = [ "/uploads/SCC0826-recap.png" ]
categories = [ "Events" ]
date = 2026-09-02T00:00:00.000Z
description = "August’s Swarm Community Call was streamed over Swarm itself for the first time. The call covered the security-focused Bee 2.8.2 release and the hardening work that follows it, introduced Etherchunk — a practical approach to reclaiming storage capacity on immutable storage — and took a close look at the streaming system that was delivering the broadcast, including a parallel test of an in-browser Swarm node."
references_and_footnotes = [ ]
title = "Swarm Community Call, 27 August – Recap"
_template = "post"
+++

[August’s Swarm Community Call](https://streamoverswarm.eth.limo/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/b882a334-7146-4daa-a3ec-99b3f8be02e8) was, in part, its own demonstration. For the first time, the call was streamed over Swarm alongside the usual X and YouTube broadcasts. Behind the scenes, another test was running in parallel: the team was watching the same stream through an in-browser Swarm node. Both worked. It was a small but consequential moment – Swarm was no longer only the subject of the broadcast, but part of the infrastructure delivering it.

The call also covered the security-focused [Bee 2.8.2 release](https://blog.ethswarm.org/foundation/2026/bee-2-8-2-release/) and introduced [Etherchunk](https://github.com/Cafe137/etherchunk), a practical form of “deletion” without changing the underlying immutability of Swarm itself.


## **Bee 2.8.2: Hardening the Network**

[Bee 2.8.2 was released the day before the Call](https://blog.ethswarm.org/foundation/2026/bee-2-8-2-release/), with node operators asked to upgrade promptly. The release followed a security review by a Swarm community contributor that identified several **code-hygiene issues** and one exploitable **vulnerability**, all of which **have now been patched**.

Elad explained that the work does not end with the patch. **The team is adding fuzz testing and stricter automated code checks** to the development process, helping surface similar problems earlier, alongside improvements to tracing, panic recovery, and general code safety.

Another important change already committed to the codebase concerns backward compatibility. **Future breaking protocol changes will be able to introduce a grace period during which newer and older clients can continue communicating**. Instead of expecting the entire network to switch versions at once, upgrades can become gradual network migrations.

The team has also increased the number of light-node connections that full nodes can support after testing showed that the network could comfortably accommodate more. That matters beyond raw connectivity: light nodes are becoming increasingly relevant to applications such as streaming and, eventually, Swarm clients running directly in the browser.

Work toward the next release is already underway, including improvements to PullSync convergence, Hive, and edge cases in the persistence layer and protocol. The team is also investigating whether postage stamp information can be incorporated into erasure-coded data, with the longer-term aim of making content repair possible by parties other than the original uploader.


## **Etherchunk: Reclaiming Storage Capacity**

Immutable storage gives you a useful guarantee: once data is addressed by its content, it does not quietly change underneath you. It also creates an unusually ordinary problem. Eventually, somebody wants to delete a file or simply make better use of the storage they have paid for.

Áron introduced [Etherchunk](https://github.com/Cafe137/etherchunk), a CLI experiment that approaches deletion without trying to make Swarm itself mutable.

The idea is straightforward. **Etherchunk chunks and stamps files client-side and keeps track of which postage-batch slots each file occupies**. When the user “deletes” a file, the chunks are not removed from Swarm. Instead, Etherchunk **marks those slots as available for future uploads**. Once they are reused, the new chunks overwrite the old allocation.

This gives the user something missing between Swarm’s existing immutable and mutable batch behavior: **control over what gets reclaimed**.

Áron described the problem as “upload paralysis”: if putting something into decentralized storage feels irreversible, users may hesitate to put ordinary personal data there in the first place.

Etherchunk makes the model behave more like a familiar disk: **deleting something means declaring that its capacity may be used again**. The data itself remains subject to Swarm’s underlying storage mechanics, but from the user’s perspective, the scarce resource – the capacity they paid for – is theirs to manage.

There is still a coordination problem to solve. Because Etherchunk currently keeps its accounting locally, using the same postage batch independently across several devices can result in inconsistent records of which slots are available. How that state can be coordinated without introducing a central authority remains an open question for now.


## **Streaming Over Swarm: This Time, We Used It**

The Community Talk began with a fact rather than a slide: **the call was already [streaming over Swarm](https://streamoverswarm.bzz.link/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/b882a334-7146-4daa-a3ec-99b3f8be02e8).**

Levilk, Solar Punk’s multimedia streaming development lead, walked us through the system that made it possible. The production side still speaks the language broadcasters already use – RTMP, SRT, and HLS – but after the stream has been ingested and packaged, its segments are uploaded to Swarm. Viewers using the Swarm streaming site then receive the video from Swarm rather than from a conventional CDN.

The current setup is delivering continuous Full HD video through light nodes at roughly 10–15 seconds of latency.

But perhaps the more interesting test was happening quietly in parallel. While the public Community Call was running, the team was also watching the livestream internally **through a Swarm node running in the browser**. No separately installed Bee client was needed. It worked.

Running a Swarm node in the browser could remove the need for users to install and configure a Bee client before accessing a decentralized stream. Opening a stream could become as straightforward as opening any other page on the web, while the client underneath remains part of the decentralized network.

Today, there are already several routes into a Swarm stream. A viewer can access it through their own Bee node – full, light, or ultra-light – or use a gateway as an on-ramp. The in-browser client points toward another route in which much of that infrastructure simply disappears from the user’s view.

Publishing directly from the browser is further down the roadmap. The current broadcast setup still uses a thin conventional ingestion layer before the stream enters Swarm. Work continues on SRT support, crash recovery, HD optimization, and adaptive bitrate streaming, with the system being developed for larger, multi-stage events and, eventually, audiences in the thousands.

Because Swarm provides both delivery and storage, the livestream is archived as it is broadcast rather than uploaded separately after the event.


## **From the Community Call to the Valley of the Commons**

The Community Call was not the only live test.

At the same time, [the streaming setup](https://streamoverswarm.bzz.link/#/watch/video/6F2728386F8a47ef5EBe323721188e630Ff0FdE9/0df18d95-6f50-4f3c-9e67-fa82f5cd9817) was being used at the [Valley of the Commons](https://www.valleyofthecommons.com/), where Koss joined the call from the event and the on-site AV team used Swarm streaming for the first time.

This put the system into an event-production workflow outside the development team, providing a practical test of how well it integrates with existing broadcasting tools and processes.


## **Announcements**

The August call highlighted several places to meet the Swarm team and community over the coming weeks.

In Lagos, Zoey is representing the [Swarm Foundation at Web3Bridge](https://event.web3bridge.com/), with further coverage to follow.

During Cypherpunk Week in Amsterdam, Migle will speak at [Common S3nse (4–5 September)](https://commons3nse.cryptocanal.org/). Her talk, *Who Gets to Delete the Record: Decentralized Media as Infrastructure for Resistance*, will explore decentralized media, while Kelly and Gergely will support builders working with Swarm during the hackathon.

Later in September, the team will be at [ETHRome (11–13 September)](https://www.ethrome.org/), where Migle will speak and Kelly and Krisztián will support hackers as part of Swarm’s sponsorship of the hackathon.

The next Swarm Community Call will take place on **24 September at 17:00 CEST**.

See you then.
