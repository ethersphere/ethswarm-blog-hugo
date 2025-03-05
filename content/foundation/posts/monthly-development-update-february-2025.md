+++
banner = "/uploads/DevUpdate0225.jpg"
images = [ "/uploads/DevUpdate0225.jpg" ]
categories = [ "Development updates" ]
date = 2025-03-05T00:01:00.000Z
description = "In February, the Bee Track invested significant effort into improving the performance and efficiency of Bee, with teams working on version 2.5."
references_and_footnotes = [ ]
title = "Monthly Development Update – February 2025"
_template = "post"
+++


In February, the Bee Track invested significant effort into improving the performance and efficiency of Bee, with teams working on [version 2.5](https://blog.ethswarm.org/foundation/2025/bee-2-5-0-pre-release/), which brings enhancements to garbage collection, postage stamp handling, and optimizations for faster data retrieval and uploads.

At the same time, the Research Track has nearly completed multichain support, which is now nearing completion for final testing. Performance improvements and protocol efficiency boosts have been completed, with all metrics showing improvement.

There have also been several updates to Bee-JS, including token helper classes for BZZ and DAI, easier stamp handling methods, clearer distinctions between  references and payloads, and a new Stamper class for client-side stamping mechanisms.

Meanwhile, the DevRel Documentation team has completed a major revision of the installation section and related areas, as well as a new GSOC page explaining its purpose and usage.

All of these new features were covered in more detail in the latest Swarm Community Call, which was [streamed](https://x.com/i/broadcasts/1djGXVbAkvdxZ) for the first time on X. You can read the recap here.


### Bee Track 
* The team has been working on [Bee v2.5](https://blog.ethswarm.org/foundation/2025/bee-2-5-0-pre-release/),  a major update focused on improving performance, stability, and overall efficiency. This version brings enhancements to garbage collection, better postage stamp handling, and optimizations for faster and more reliable data retrieval and uploads.
* We are developing a new tool to gather insights into node behavior and network performance. This will help us understand upload/download speeds, storage availability, and response times across different regions. The participation will be fully voluntary and completely transparent regarding information sharing and data processing.


### Research Track  
* Multichain nears completion for final testing, and once ready, we will announce its long-awaited release. 
* Performance improvements to speeds and writeups for protocol efficiency boosts are complete, with all metrics improving. These updates will roll out gradually in upcoming releases. 


### JS Track 
#### [Bee-JS](https://github.com/ethersphere/swarm-cli)
* Added token helper classes: BZZ and DAI
* Added methods on Bee for easier stamp handling: buyStorage, extendStorageDuration, extendStorageSize, getStorageCost, etc.
* Added methods on FeedWriter and FeedReader to distinguish references and payloads
* Added Stamper class that enables building client-side stamping mechanisms
* Install as npm install @upcoming/bee-js; Follow the [Pull Request](https://github.com/ethersphere/bee-js/pull/977)

### DevRel
#### Documentation 
* A major revision of the installation section and related sections (configuration, backup, etc.) has been completed and is under review before publishing ([see PR](https://github.com/ethersphere/bee-docs/pull/719)).
* The new GSOC page which explains GSOC and includes an example of how to use it, is also completed and currently under review before publishing ([see PR](https://github.com/ethersphere/bee-docs/pull/718)).


#### Content 
* [Bee Version 2.5.0 - Pre-release Notice](https://blog.ethswarm.org/foundation/2025/bee-2-5-0-pre-release/)
* [Swarm Community Call, 30 January – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-30-january-recap/)


### Events 
##### **Swarm Community Call – 27 February**
February’s Call highlighted key updates and community initiatives. The first section covered the upcoming Bee [2.5.0 release](https://blog.ethswarm.org/foundation/2025/bee-2-5-0-pre-release/), which focuses on improving network performance. Community Talks explored the growing importance of data provenance solutions in the AI era and how Swarm can contribute to this evolving landscape. Additionally, a discussion was held on improving the developer experience, particularly around stamp management, to make storage handling on Swarm more intuitive.

You are welcome to read the full recap [here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-27-february-recap/). 


### Upcoming events
##### **Swarm Community Call – 27 March**
Swarm Community Calls are held on the last last Thursday of every month on Discord, at 17.00 CET. The next call is on 27 March - [add to calendar.](https://www.addevent.com/event/zb25028179) 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Prior to the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team:
* Join the team shaping the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!
