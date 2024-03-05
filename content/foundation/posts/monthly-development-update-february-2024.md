+++
banner = "/uploads/dev-update-february.png"
images = [ "/uploads/dev-update-february.png" ]
categories = [ "Development updates" ]
date = 2024-03-05T00:00:00.000Z
description = "In February, the Bee Track team focused on preparing for the imminent Swarm 2.0 release, which promises substantial enhancements, including best-in-class redundancy via erasure codes."
references_and_footnotes = [ ]
title = "Monthly Development Update – February 2024"
_template = "post"
+++



In February, the **Bee Track** team focused on preparing for the **imminent Swarm 2.0 release**, which promises substantial enhancements, including best-in-class redundancy via erasure codes. Comprehensive fixes to the localstore will also deliver marked improvements across several components, such as the upload store, pinstore and cachestore. In addition, the team is finalising the move of the testnet to the Sepolia network. 

The **Research Track** is wrapping up the testing of erasure codes and has completed the wider research roadmap for 2024.

**Bee-JS library** saw two notable issue fixes with 6.7.3 and 6.7.4 releases. The JS track also released a [prototype of chunked streaming](https://github.com/fairDataSociety/bmt-js/pull/24/files), a.k.a “unlimited uploads”. It provides a solution for uploading files of any size.

There are a bunch of great new additions to the Ecosystem as well. Check out the SWIPs section for three new proposals, and [three new educational videos](https://www.youtube.com/@ethereumswarm4033) are now available too. They explain “doubling” events in Swarm, chunks, and how to spin up a node with DigitalOcean.

The **Fair Data Protocol** team has released **Fairos-dfs v.0.10.0**. It brings several novelties and fixes, including a public kv store and the ability to store an unlimited number of pods and files within them. Plus, pod subscription feat [is on the way](https://github.com/fairDataSociety/fairdrive-theapp/tree/feat/subscription-pods).

To wrap it all up, discussions and the subsequent vote on **the fate of Swarm’s bonding curve** will begin in two weeks’ time, so don’t hesitate to voice your opinion. And Swarm Summit is coming back in person (not just in the virtual world) from 20–21 June.


## Tracks
### Bee Track
* The team has been working on the preparation of the 2.0 release with the following items included:
    * The team has been focusing on the redundancy feature, i.e erasure codes. This will be an absolutely optional feature that can be set in the headers during upload. At the moment, erasure codes PRs have been completed and the feature is being tested.
    * Localstore fixes that are expected to bring big improvements across many ends. These fixes include the upload store, pinstore, stamping, localstore reserve and cachestore. All the fixes will be included in detail in the release notes.
    * We are finally moving our testnet from the deprecated Goerli network to Sepolia.
* In order to help towards a more normalised distribution of the nodes in neighbourhoods across storage radius’, we now have a SwarmScan API tool that can be used by node operators on nodes spinup that suggests the least populated neighbourhoods to point their node to. This has been extended to specify the exact storage radius (depth) of the suggested neighbourhood.
* A new localstore scanning tool has been developed, which detects any invalid or corrupted chunks for the pinned files. This tool shows the numbers for the total chunks of the file, how many of them are corrupted and how many are missing. This will be served over an API endpoint and will provide a nice insight to the node operators about their localstore's pinned files. It is already in use and will also be served through API.
* From now on, all of our releases (including 2.0) will be announced two weeks before the actual release date, with a specific date about the release, so that all the node operators can prepare on their side in advance for upgrades. An exception to this are the patch releases, where we will not be allowed for this two week window and the engineering teams will have to get hotfixes out asap.


### Research Track
* The final version of the  Swarm 2.0 erasure codes is in the final testing stage and handed over to the Bee team for wider testing and execution. 
* The Sepolia testnet is in use internally and the final PR is ready for release so that the community can spin up their own nodes.
* The wider research roadmap is complete and being integrated with all teams to communicate the wider org roadmap for 2024. And we have already finished our next draft PRs for future releases, such as reducing freezing. 


### JS Track
#### [Bee-JS](https://github.com/ethersphere/bee-js/)
* Released version 6.7.3, fixing an issue when waiting for postage batches to become usable after creating them.
* Released version 6.7.4, fixing an issue regarding the upload functionalities with the File API when used in the browser.
* The [examples repository](https://github.com/ethersphere/examples-js) is now up to date with the latest version, showing an example use case for a React upload application and Metamask signing with Bee JS.
* Support for the erasure coding has been updated and is [staged on a branch](https://github.com/ethersphere/bee-js/pull/896) for release.


#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released version 2.8.0, which speeds up manifest commands by calculating hashes locally instead of fetching data from the network.

[BMT-JS](https://github.com/fairDataSociety/bmt-js)
* The prototype of chunked streaming, a.k.a “unlimited uploads”, is working and [can be tried out experimentally](https://github.com/fairDataSociety/bmt-js/pull/24/files). It provides a cross environment solution for uploading files of any size, even with very limited heap memory size.


### Ecosystem

#### SWIP’s
* [Data Availability in Swarm](https://github.com/ethersphere/SWIPs/pull/42/files)
* [Increase of Reserve Size](https://github.com/ethersphere/SWIPs/pull/44/files)
* [Responsible Neighbourhood Splitting](https://github.com/ethersphere/SWIPs/pull/43/files)



#### Fair Data Protocol

##### [Fairos-dfs](https://github.com/fairDataSociety/fairOS-dfs)
* [New release v.0.10.0](https://github.com/fairDataSociety/fairOS-dfs/releases/tag/v0.10.0) 
    * In this update, error messages have been fixed and improved for better clarity. File renaming and removal functionalities have also been enhanced.
    * New features include a public kv store, allowing easy access to kv entries from a public pod. Additionally, users can now list and subscribe to pods in Datahub with the new pod subscription feature.
    * Kv APIs have been added in wasm for expanded functionality, and a feed cache has been implemented to efficiently cache feeds in LRU and update them in batches.
    * Notably, fairOS-dfs now supports storage of an unlimited number of pods, as well as an unlimited number of files and folders in a given location.
    * A new 'dev' command has been added in fairOS-dfs, enabling users to spin up a server with an in-memory bee. Furthermore, the dfs-cli now utilises access tokens for longer sessions.
    * Lastly, a special pod has been introduced where multiple users can access and modify content based on given permissions.
* [Other enhancements](https://github.com/fairDataSociety/fairOS-dfs/pulls?q=is%3Apr+is%3Aclosed+merged%3A2024-02-01..2024-02-29+)

##### [Fairdrive App](https://github.com/fairDataSociety/fairdrive-theapp)
* [Docs update](https://github.com/fairDataSociety/fairdrive-theapp/pulls?q=is%3Apr+is%3Aclosed+merged%3A2024-02-01..2024-02-29+)
* Pod subscription feat [is on the way](https://github.com/fairDataSociety/fairdrive-theapp/tree/feat/subscription-pods).

##### [Fdp-play](https://github.com/fairDataSociety/fdp-play)
* [New release](https://github.com/fairDataSociety/fdp-play/releases/tag/v3.0.1) v3.0.1, This update includes corrections for CI DockerHub push, along with updates for the BeeJS and dockerode versions. Tests have been tailored for the new environment, and documentation has been updated accordingly.
* Furthermore, the 2.0.1 blockchain release is now available, along with funding for the Geth wallet.

##### [Fdp-storage](https://github.com/fairDataSociety/fdp-storage)
* [New release](https://github.com/fairDataSociety/fdp-storage/releases/tag/v0.18.0) v0.18.0 here; the features include the ability to upload any amount of items and pod subscriptions.


### DevRel
#### Educational Content
* Explanation video: [Neighborhood Doublings & Setting Target Neighborhoods](https://youtu.be/0Uli66yqudk?si=rKn8nbhgxHchx0q2)
* Explanation video: [Visualizing Swarm Hashes, Node Addresses and Neighborhoods](https://youtu.be/NJS14Rbcz3k?si=-yhbqbFglfoAZFJ6)
* [How to: Run Bee on DigitalOcean](https://youtu.be/sm3JjHpeHyE?si=QvwvxsVjQ3d_-lHY)


#### Content
* [State of the Network: January](https://blog.ethswarm.org/foundation/2024/state-of-the-network-january/)
* [Monthly Development Update – January 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-january-2024/)
* [Swarm Community Call, 25 January – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-25-january-recap/)


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has multiple open positions. We are hiring a [Software Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/Software_Engineer_go_blockchain), [Senior Software Engineer (Go, blockchain](https://www.ethswarm.org/jobs/senior-software-engineer-go), [QA Engineer (Go, blockchain)](https://www.ethswarm.org/jobs/senior-software-engineer-go) and a [Grant Manager](https://www.ethswarm.org/jobs/grant-manager)
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org!



### Events:
##### Swarm Community Call – 29 February: the monthly “stay up to date” event
* February’s Community Call brought forth three SWIPs that were proposed in the last month – one addressing [Data Availability](https://github.com/ethersphere/SWIPs/pull/42) in Swarm, second one [responsible neighbourhood split](https://github.com/ethersphere/SWIPs/pull/43) and the third one [increasing reserve size](https://github.com/ethersphere/SWIPs/pull/44) of nodes. It has been announced that the bonding curve’s future is to be put to a vote. Discussions and the subsequent vote on **the fate of Swarm’s bonding curve** will begin in two week’s time. More will be shared at the next Call, meanwhile you are welcome to read a recap blog post about February's event [here](https://blog.ethswarm.org/foundation/2024/swarm-community-call-25-january-recap/).


### Upcoming events
##### Swarm Community Call – 28 March 2024
* Join us every last Thursday of the month at the Swarm Community Call on Discord to stay fully informed, perhaps seize the opportunity to jump into a live discussion or ask the Swarm team a question! The next Community Call is on 28 March – [add to calendar](https://www.addevent.com/event/Ey20419663). You may also submit your questions for the AMA segment upfront [here](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3) or/and subscribe to our newsletter here. 


##### Swarm Summit 2024 – 20–21 June 2024
* Swarm Foundation is pleased to announce that the Swarm Summit is to happen **in real life** again! A combined online-IRL conference/event will take place from 20–21 June. Save the date, start preparing your submissions and follow Swarm Community Call to stay up to date. 