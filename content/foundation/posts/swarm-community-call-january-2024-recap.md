+++
banner = "/uploads/SCC-jan-recap.png"
images = [ "/uploads/SCC-jan-recap.png" ]
categories = [ "Events" ]
date = 2024-01-30T00:00:00.000Z
description = "The focus at the beginning of the new year was enhancing Swarm network’s performance. Significant efforts went into improving network connectivity and addressing various issues."
references_and_footnotes = [ ]
title = "Swarm Community Call, 25 January – Recap"
_template = "post"
+++

## Core development update

The focus at the beginning of the new year was enhancing Swarm network’s performance. Significant efforts went into improving network connectivity and addressing various issues. These efforts have led to **better node connectivity and more robust health checks**, along with **improvements in protocols**. New fixes are also in the works that will enhance data uploads by nodes.

Regarding the roadmap, Niki Papadatou pointed out that this is an active topic. There is plenty of constructive input coming in both from the community and internally, and the team has a clear indication of where future efforts should be directed. _“We’re trying to find a balance between resolving known issues within the network and the client and features that are either requested by the community or are internal ideas,”_ she explained.

With plenty at hand, the **Bee team** is looking to grow stronger, **opening new positions** for senior software engineers with Go and systems experience and a QA engineer. Suitable candidates are welcome to apply [here](https://www.ethswarm.org/jobs). 


## Erasure codes – magic in action

The addition of [erasure coding](https://papers.ethswarm.org/p/erasure/) is one of Swarm network’s biggest feats to date. A video showed why this is the case, by demonstrating how an unretrievable file can be completely reconstructed from just a subset of retrievable chunks. 

According to Callum Toner, it goes beyond that. **One could cut the Swarm network in half and everything would still work perfectly. “This is a key differentiating factor [for Swarm]. It’s a massive, massive product performance upgrade. This functionally works and really does transform the product ,”** he added excitedly. At the same time, erasure coding enables Swarm to avoid massive overhead that comes from the duplication of data used for redundancy.

If all goes according to plan, erasure codes should be on mainnet this week.


## Earth Observation Manifesto and new partnerships

Swarm is continuously expanding its ecosystem and an important part of those efforts is to 

store the world’s valuable public data in the Swarm network (The Great Data Upload initiative). A part of this effort is also the recently forged partnership with **[Polygon Village and the European Space Agency that resulted in the Decentralised Earth Observation Manifesto](https://blog.ethswarm.org/foundation/2024/the-swarm-foundation-announces-groundbreaking-decentralised-eo-manifesto/)**. 

_“It was truly an exciting moment, not only for the Swarm Foundation, but for the entire community because I think it's one of the first times that such an important institution has opened up to the public,”_ Costanza Gallo explained.

No less important is the growing network of projects that have chosen Swarm as their partner to store data on. The latest such additions to our growing web of partners are **[H-farm](https://blog.ethswarm.org/foundation/2024/swarm-foundation-partners-with-futured-in-the-national-accelerator-network/)**, **[ColdStack](https://blog.ethswarm.org/foundation/2024/swarm-unveils-partnership-with-coldstack/)** and **[Context Protocol](https://blog.ethswarm.org/foundation/2024/context-protocol-integrates-the-swarm-network/)**. 

Alex Puig from Context Protocol joined the call to explain how they’ve implemented Swarm. Using their solution, you can employ standard JSON schemas to store a document on Swarm and then use Polygon to create a registry that points to that data, creating a permanent storage for documents. An SDK is available, so feel free to give it a try. 


## Community talk – Swarm CLI manifests, PasteBee and a new Python module for Bee API

Community Talk rounded off the official part of the call with three segments. 

**The first** centred around Swarm CLI and 'manifests', which are essentially indexes containing metadata about files and directories on the Swarm network, Áron Soós told the audience. 

Using the Swarm CLI, users can upload files to Swarm and then employ the manifest commands to delve into these uploads, viewing details such as file names, content types, and other metadata. They also allow users to update manifests without re-uploading the entire directory, remove entries from them or merge separate folders into a single manifest. 

**The second part** highlighted [PasteBee](https://pastebee.com/), a tool for sharing logs, code and other content on the Swarm network quickly and easily. PasteBee is to join Etherjot as a stand alone “demo app” in the Desktop App version of Bee. But, “the vision is that we collect applications that use Swarm and have a rich set of use cases at your hands if you use the Swarm Desktop,” Áron concluded.

He also announced a **[new bounty](https://app.dework.xyz/swarm-41421/main-space-85561?taskId=edb2e660-0a25-404d-8ed0-d89f5536cd74)** for creating a small dApp or utility focused on encrypted screenshots. 

**The third and final segment** was reserved for community members from AlienRobotNinja, Saikat Karmakar and Nate Mamman, who demonstrated their Python module designed to interact with the Bee API. It allows users to perform various operations like buying postage stamps, creating and managing tags, and uploading and downloading files and data. 

A lively debate ensued during the AMA round, already hinting at the **next** month’s Community Call topics. Don’t miss it **on 29 February at 17:00 CET on Swarm Discord**. Save the date – it’s a special one! – and see you then.