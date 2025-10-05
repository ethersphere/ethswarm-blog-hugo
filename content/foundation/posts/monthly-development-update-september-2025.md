+++
banner = "/uploads/092025-devupdate.jpg"
images = [ "/uploads/092025-devupdate.jpg" ]
categories = [ "Development updates" ]
date = 2025-10-05T00:00:00.000Z
description = "Bee 2.7 is close to having all release items finalized, with a strong mix of performance improvements and new features. The research track is benchmarking different scenarios in the ongoing research into Swarm’s incentive systems..."
references_and_footnotes = [ ]
title = "Monthly Development Update – September 2025"
_template = "post"
+++


Bee 2.7 is close to having all release items finalized, with a strong mix of performance improvements and new features. The research track is benchmarking different scenarios in the ongoing research into Swarm’s incentive systems to pinpoint optimization opportunities. The long-term goal is to ensure a robust, performant, and competitive incentive system, potentially including adjustments to staking mechanisms.

Beeport is in its final round of polishing and testing before the release. Beeport enables quick and simple uploading and sharing of files, websites, and more, without running a node. 

Ecosystem partner Solar Punk hosted an interactive event at Budapest Blockchain Week, where participants could explore how Swarm powers censorship-resistant storage and communication for AI agents. The event also featured the release of a decentralized chat app and a panel of experts debating open AI ecosystems. Meanwhile, the Solar Punk development team continues work on the multimedia streaming service, the File Manager (to be launched in October, integrated into the Swarm Desktop App), and the MCP MVP.


### Bee Track 
* The Bee team’s focus has been the 2.7 release, and the list of included items is now finalized. There is already an RC out with erasure coding fixes, feeds and other small bug fixes. The rest of the items are currently under review and testing:
    * Support for multiple underlay addresses, which improves how nodes announce themselves and connect to the network. This also plays a critical role in supporting the Bee WASM bounty.
    * In the same context, The AutoTLS implementation has been finalized and is ready for review.
    * A fix for a pin eviction bug improves how Bee manages pinned content, ensuring that important data remains properly protected from garbage collection.
    * Improvements to pull syncing, a core part of how nodes keep data in sync. The next version introduces a refined approach (described in SWIP-25), currently under review, expected to improve consistency and performance.
    * Finally, we have the SOC replica, which enhances the way replicated chunks are handled in the network, helping ensure better reliability and data availability.


### Research Track 
* The team continues research into identity management, i.e. handling multiple personas in a decentralized context.
* Performance testing is underway across the network & incentives to measure their impact: 
    * Checkbook funding on upload/download speeds. This is critical to the ongoing research into Swarm’s incentive systems, with a particular focus on bandwidth incentives. Early findings suggest that enabling checkbook payments may introduce performance overhead due to additional signatures and steps.
    * The pullsync SWIP changes and results are under review and analysis by the team.
    * Benchmarking various scenarios—file sizes, erasure code levels, and network conditions—to pinpoint optimization opportunities.
* The incentives, namely staking, are being reviewed with external contributors to investigate if a more aligned and optimal solution is possible, one that allows for easier updates and migrations. 


### JS Track 

#### Beeport dApp

In the last stretch before the release, our focus areas have been directory uploads, stability, UX polish, FAQ/docs, ENS registration, and testing.
* **Upload & History Improvements**
    * Added support for folder uploads, including auto-generated directory indexes.
    * Fixed several issues with upload history entries and import/export.
    * Fixed an issue where filenames with foreign characters or unknown extensions would fail to upload with unclear error messages.
* **Stamps Improvements**
    * Improved the top-up flow with better explanatory texts and smoother redirects to the main view at the end.
    * Improved the stamp management UI, including warnings for stamps nearing expiry.
    * Fixed a rare issue where active stamps would be mistakenly marked as expired.
* **ENS Integration**
    * Added support for purchasing ENS domains within the app and linking them to Beeport uploads.
* **Other Updates**
    * Integrated Formbricks for user feedback.
    * Added FAQ explanations for local storage and stamp persistence.


### Ecosystem 
#### Solar Punk 
* At Budapest Blockchain Week, Solar Punk hosted an interactive event exploring the future of decentralized AI. Participants became “AI Wranglers” and, through a hands-on mission, learned how Swarm enables censorship-resistant storage and communication for AI agents ([materials](https://drive.google.com/drive/u/0/folders/1T7nJewpQjNt4C7b3HLBQH-k6KRvioS25)). The day ended with a panel discussion featuring Hungarian professionals on the potential and challenges of building an open, autonomous AI ecosystem. Solar Punk also released a [decentralized chat application](http://bbw2025buzz.eth.link/) for the event.
* A [Zero Knowledge Proofs Meetup](https://luma.com/wziwmseb) was organized in collaboration with [CryptoMondays](https://www.cryptomondays.io/).
* Progress continues on the implementation of our new multimedia streaming service.
* File Manager was featured on the latest Swarm Community Call and is planned for release as part of the new Swarm Desktop update this October.
* The implementation of [Swarm MCP](https://solarpunk.buzz/mcp-revolution-decentralized-ai-swarm/) MVP continues as planned.


### DevRel 


#### Documentation 
* Updated the [Getting Started page](https://docs.ethswarm.org/docs/develop/introduction/) to improve developer UX. New use cases will be added to the “Building on Swarm” section in the coming weeks.


#### Content 
* [Swarm Community Call, 25 September – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-25-september-recap/)
* [Monthly Development Update – August 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-august-2025/)
* [State of the Network: August 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-august-2025/)


### Events 
#### **Swarm Community Call – 25 September**
The [September Swarm Community Call](https://x.com/i/broadcasts/1MYGNlbpVoXxw) highlighted major progress on the upcoming Bee 2.7 release, an update on incentive system research, and ecosystem presentations including the new File Manager demo and MetaProvide’s introduction of IPSH (Interplanetary Swarm Hive).

You are welcome to read the [recap here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-25-september-recap/) or listen to the [recording here](https://x.com/i/broadcasts/1MYGNlbpVoXxw). 


### Upcoming events
#### **Swarm Community Call – 30 October**

Swarm Community Calls are held on the last Thursday of every month on [Discord](https://discord.com/events/799027393297514537/1386618353740939335) and are [broadcast on X](https://x.com/i/broadcasts/1zqKVjEPByAKB) at 17.00 CET. The next call is on **30 October** - [add it to your calendar](https://www.addevent.com/event/DF26807149). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Before the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team
If you are interested in joining the team and believe you have outstanding skills, visit our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!
