+++
banner = "/uploads/devupdate0125.jpg"
images = [ "/uploads/devupdate0125.jpg" ]
categories = [ "Development updates" ]
date = 2025-01-05T00:01:00.000Z
description = "This month, the focus was on improving upload and download speeds in Swarm, with teams working closely together to test bug fixes and benchmark results.Bee 2.4.0 was released in honour of ldeffenb."
references_and_footnotes = [ ]
title = "Monthly Development Update – January 2025"
_template = "post"
+++


This month, the focus was on improving upload and download speeds in Swarm, with teams working closely together to test bug fixes and benchmark results. [Bee 2.4.0](https://github.com/ethersphere/bee/releases/tag/v2.4.0) was released in honour of ldeffenb, a valued member of the community, and his motto “Share the knowledge” was included in the startup logs.

The multichain application is now 80% complete. Final product decisions are currently under review, and key performance testing continues to improve Swarm’s efficiency.

There have been several updates to [Bee-JS](https://github.com/ethersphere/swarm-cli), including new types, improved streaming capabilities, and a new way to track upload progress.

Meanwhile, Solar Punk has released middleware libraries for decentralised multimedia and social networking applications that simplify media streaming and real-time interaction on Swarm.

All of these new features were covered in more detail in this year’s first Community Call. If you want to stay up to date on all new developments in Swarm, join the next call on [27 February](https://www.addevent.com/event/Ns24718088).


### Bee Track 

* The main focus of the team for the foreseeable future is improving upload and download speeds. After an initial investigation phase, the team has already started testing fixes, benchmarking results, and monitoring behaviour.
* There are also major additions to Beekeeper, with a  primary focus on enhancing testing capabilities, better observability, and ease of use.
* [Bee 2.4.0](https://github.com/ethersphere/bee/releases/tag/v2.4.0) release, which honours ldeffenb, a cherished member of the Swarm community who recently passed away.  His personal motto, “Share the knowledge,” has been added to the startup logs, embodying the spirit and values also upheld by the Swarm Foundation.


### Research Track  

* The multichain application is 80% complete, and all key product decisions have been finalised and are now out for internal feedback. The remaining changes involve  a postage stamp contract field update, which will be included in the next release. 
* The team has conducted extensive testing on Swarm’s performance across all upload and download scenarios with various parameters. They are now working in unison with the Bee team to further enhance these key performance metrics. 
* Several SWIPs and specifications are currently being drafted for upcoming tasks, which are expected to go into development after the next release. 


### JS Track 

#### [Bee-JS](https://github.com/ethersphere/swarm-cli)
* Added universal base type: Bytes
* Added elliptic types: PrivateKey, PublicKey, EthAddress, Signature
* Added Swarm types: Reference, Identifier, TransactionId, FeedIndex, Topic, PeerAddress, BatchId, Span
* Added MantarayNode that enables efficient manifest handling and fixing some previous issues, such as removing all children instead of removing an exact fork.
* Added streamDirectory and streamFiles methods to Bee for arbitrary-sized, cross-environment streaming uploads
* Introduced a new upload tracking method with precise chunk count visibility
* Added an Overview section to the README that lists all available methods, corresponding Bee endpoints, and OpenAPI URL.
* Install as npm install @upcoming/bee-js; Follow the [Pull Request](https://github.com/ethersphere/bee-js/pull/977)



### Ecosystem 

#### Solar Punk

Solar Punk has released multimedia middleware libraries to facilitate the development of decentralised multimedia and social networking applications on the Swarm infrastructure. These libraries provide cost-effective and scalable building blocks for developers, making it easier to create streaming multimedia applications as well as social media platforms.

* **[Audio-Video Live Streaming Library](https://www.npmjs.com/package/@solarpunkltd/swarm-stream-js)**: Enables media streaming over Swarm. 
* **[Group Chat Library](https://www.npmjs.com/package/@solarpunkltd/swarm-chat-js)**: Facilitates real-time messaging. 
* **[Comment System Library](https://www.npmjs.com/package/@solarpunkltd/comment-system)**: Supports dynamic comment walls. 


### DevRel 

#### Content 

* [State of the Network: December](https://blog.ethswarm.org/foundation/2025/state-of-the-network-december-2024/)
* [Monthly Development Update – December 2024](https://blog.ethswarm.org/foundation/2025/monthly-development-update-december-2024/)


#### Events 

##### **Swarm Community Call – 30 January**
The first Community Call of the year took place on 30 January. A week earlier, Bee 2.4.0 was released as a tribute to *ldeffenb*, a cherished member of the Swarm community, with his motto—*“Share the knowledge”*—now immortalized in the startup logs.

The call highlighted immediate development priorities, such as improving upload/download speeds and advancing multichain support. It also showcased the revamped BeeJS library and introduced new multimedia libraries.

 You are welcome to read the [full recap here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-30-january-recap/). 


### Upcoming events

##### **Swarm Community Call – 27 February**

Swarm Community Calls are held on the last last Thursday of every month on Discord, at 17.00 CET. The next call is on 27 February - [add to calendar](https://www.addevent.com/event/Ns24718088). 

Community Calls are the best way to stay fully up to date with current developments.They also provide an opportunity to jump into live discussions,ask the Swarm team questions, and engage more! Prior to the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.

### People & Culture team:

* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org! \
