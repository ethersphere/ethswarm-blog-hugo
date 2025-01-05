+++
banner = "/uploads/devupdate-dec.png"
images = [ "/uploads/devupdate-dec.png" ]
categories = [ "Development updates" ]
date = 2025-01-05T00:01:00.000Z
description = "December was an exciting month for the Swarm Network. The Bee 2.3 update doubled the reserve size and the odds of winning the redistribution game."
references_and_footnotes = [ ]
title = "Monthly Development Update – December 2024"
_template = "post"
+++


December was an exciting month for the Swarm Network. The Bee [2.3 update](https://github.com/ethersphere/bee/releases/tag/v2.3.0) doubled the reserve size and the odds of winning the redistribution game. Another powerful feature is the GSOC, which opens the door to an era of powerful dApps on Swarm, such as multi-user forums, social media sites, chat apps and much more.

There is also exciting news from the Research Track. Multichain support is moving to the production version and the updated price oracle now enables truly decentralised pricing.

[Swarm-CLI](https://github.com/ethersphere/swarm-cli) has received several important updates, including the “stamp create” command, which is a more human-friendly version of “stamp buy”, which it will replace in the future.

The release of Bee 2.3 has also had an impact on Swarm’s documentation. The documentation has been updated to include instructions on [reserve doubling ](https://github.com/ethersphere/bee-docs/pull/674/files)as well as the updated [OpenAPI specifications](https://github.com/ethersphere/bee-docs/pull/672) and the [address of the staking contract](https://github.com/ethersphere/bee-docs/pull/673). The logging section has also been completely revamped.

[The Swarm Winter Solstice Event 2024](https://blog.ethswarm.org/foundation/2024/swarm-winter-solstice-event-2024-time-for-real-world-impact/) marked Swarm’s transition to real-world impact, highlighting its feature-completeness as the backbone of Web3. The event featured ambitious 2025 goals presented by COO Sándor A. Nagy, showcased ecosystem applications in decentralised AI and community-building, and included valuable insights from Web3Privacy Now.


### Bee Track
* The [2.3 release](https://github.com/ethersphere/bee/releases/tag/v2.3.0) was out on 4 December, introducing the doubling of the reserves and the doubling of chances of winning at the redistribution game. In this release we also had the GSOC that is bringing a new era to Swarn’s Single Owner Chunks,  opening the door to the construction of dApps such as multi-user forums, social media sites, chat applications, and much more.
* Later on in December, we deployed a hot fix in the [2.3.1 version](https://github.com/ethersphere/bee/releases/tag/v2.3.1), fixing a retrieval issue for feeds in the /bzz endpoint.
* The bee team has started investigating ways to improve download and upload speeds. Everything is going back to the push-sync and pull-sync protocol, and therefore we are investigating possible optimisations.


### Research Track 
* Most work has been in conjunction with the bee team as seen above, as well as investigating and producing an analysis and benchmarking of speeds and performance on Swarm. 
* The multichain product has moved from PoC and is now headed towards a production version. 
* The Oracle released with the 2.3 release is performing as expected, now giving reactive, truly decentralised pricing based on supply and demand. 


### JS Track 
#### [Swarm-CLI](https://github.com/ethersphere/swarm-cli)
* Released several new versions to add quality-of-life features
    * Added chainsync information to the status command.
    * Added stamp create command, which is a human friendly version of stamp buy and is intended to replace it in the future. It allows specifying capacity and time-to-live in familiar units.
    * Added get-bee command, which downloads a released Bee binary from the GitHub page based on the current operating system, and optionally creates a pre-configured bee.yaml based on user intention.



### DevRel 
#### Documentation 
* The [logging section](https://docs.ethswarm.org/docs/bee/working-with-bee/logs-and-files/#logging-guidelines) has been completely overhauled to improve clarity and understandability. 
* Instructions for [reserve doubling](https://github.com/ethersphere/bee-docs/pull/674/files) were added to the docs.
* Several 2.3.0 related updates were added: The [OpenAPI specs](https://github.com/ethersphere/bee-docs/pull/672) were updated for v2.3.0 and the [staking contract address](https://github.com/ethersphere/bee-docs/pull/673) was updated. 
* A [notice was added](https://github.com/ethersphere/bee-docs/pull/680) to the neighbourhood hopping section about the two-round delay before a node can join the incentives game after hopping.


#### Content 
* [Swarm Winter Solstice Event 2024: Time for real-world impact](https://blog.ethswarm.org/foundation/2024/swarm-winter-solstice-event-2024-time-for-real-world-impact/)
* [Monthly Development Update – November 2024](https://blog.ethswarm.org/foundation/2024/monthly-development-update-november-2024/)
* [Swarm Community Call, 28 November – Recap](https://blog.ethswarm.org/foundation/2024/swarm-community-call-28-november-recap/)


### Events 
##### **Swarm Winter Solstice Event**

[The Swarm Winter Solstice Event 2024](https://x.com/ethswarm/status/1870454428320584129) marked a pivotal shift, celebrating Swarm's evolution from infrastructure building to real-world impact, with feature-completeness positioning it as the backbone of Web3. Newly appointed COO Sándor A. Nagy revealed ambitious goals for 2025. The event also showcased ecosystem applications in decentralised AI, streaming, and community-building, as well as a community partners Web3Privacy Now’s address. You are welcome to read the [full recap here](https://blog.ethswarm.org/foundation/2024/swarm-winter-solstice-event-2024-time-for-real-world-impact/). 


### Upcoming events

##### **Swarm Community Call – 30 January**
Swarm Community Calls will continue to be held every last Thursday of the month on Discord in 2025, starting 30 January, 17.00 CET - [add to calendar](https://www.addevent.com/event/GJ24269470). 

Community Calls are the best way to stay fully up to date with the current development, as well as to seize the opportunity to jump into a live discussion or ask the Swarm team a question and engage more! Prior to the Call, you are welcome to post any questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3); the questions received are answered live at the Calls.


### People & Culture team:
* Join the team creating the future of decentralised storage and communication. The Swarm Foundation currently has several open positions. 
* Find out more on our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message: talent@ethswarm.org! \
