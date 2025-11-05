+++
banner = "/uploads/DevUpdate-1025.png"
images = [ "/uploads/DevUpdate-1025.png" ]
categories = [ "Development updates" ]
date = 2025-11-05T00:00:00.000Z
description = "This month’s efforts continued to concentrate on delivering the Bee v2.7 release, now in its final testing phase. The work brings several significant improvements..."
references_and_footnotes = [ ]
title = "Monthly Development Update – October 2025"
_template = "post"
+++


This month’s efforts continued to concentrate on delivering the Bee v2.7 release, now in its final testing phase. The work brings several significant improvements—including support for multiple underlay addresses, Auto-TLS for secure browser-based connections, and SOC Replica for enhanced data resilience—alongside a strengthened testing pipeline to ensure long-term reliability. 

In parallel, research has progressed on staking and incentive design, automated network testing, and neighborhood splitting to support a more robust and scalable network. 

On the application layer, Beeport reached its first public release following extensive hardening, while Bee-JS and Swarm-CLI introduced new capabilities and performance enhancements. 

Finally, in the ecosystem track, the Solar Punk team continued advancing Swarm’s MCP integration and multimedia capabilities, following key learnings from the MCP Dev Summit in London. Together, these developments mark steady progress toward a more accessible, resilient, and developer-friendly Swarm.


### Bee Track 
* The team is fully focused on the 2.7 release.
    * Handling multiple underlay addresses progressed significantly, and in the process revealed areas for improvement in the codebase that are now being addressed, improving the general quality of Bee.
    * AutoTLS and SOC Replica are completed and currently in the review and testing phase.
    * Additional test cases were introduced to the CI/CD pipeline, greatly improving quality checks of the deliverables.
    * Multiple issues were reviewed and closed, bringing us much closer to the 2.7 release.


### Research Track 
* The research team is working on strengthening the automated network testing infrastructure. 
* The staking contract/incentives are being reimagined, with an emphasis on withdrawable stake and enabling upgrades through releases. 
* The neighborhood splitting and rebalancing SWIP/plan  is nearing a final solution aimed at improving overall network robustness.


### JS Track 
#### Apps

##### Beeport 
* After multiple hardening phases in October, we have officially launched the first version of Beeport. You can try it at [beeport.ethswarm.org](https://beeport.ethswarm.org/) to upload files, folders, or websites to the Swarm network without running a node.


##### Bee-JS
* Released versions v10.1.0 and v10.1.1, which add the parseFromString method to the Duration and Size classes, as well as a new way of calculating effective storage for postage batches based on erasure coding and encryption preferences.


##### Swarm-CLI
* Released version v2.36.0, which enriches the status command with a display of the current storage price of the network.


### Ecosystem 

#### Solar Punk 
* The Solar Punk team joined over 500 attendees at the [MCP Dev Summit in London](https://mcpdevsummit.ai/), receiving confirmation on the key strategic directions and possible use cases. 
* The [Swarm MCP](https://solarpunk.buzz/mcp-revolution-decentralized-ai-swarm/) is in a dev-ready state and will soon be published for public use. As a validation of the project findings, the team is developing a Swarm plugin for Hashgraph's leading AI ecosystem to integrate with its [conversational agent framework](https://github.com/hashgraph-online/conversational-agent).
* [Multimedia upgraded streaming solution to serve B2B partners](https://solarpunk.buzz/msrs-decentralized-streaming-swarm/)

#### Content 
* [The Evolution of Streaming on Swarm: Introducing MSRS](https://solarpunk.buzz/msrs-decentralized-streaming-swarm/)


### DevRel 

#### Content 
* [State of the Network: September 2025](https://blog.ethswarm.org/foundation/2025/state-of-the-network-september-2025/)
* [Monthly Development Update – September 2025](https://blog.ethswarm.org/foundation/2025/monthly-development-update-september-2025/)
* [Swarm Community Call, 25 September – Recap](https://blog.ethswarm.org/foundation/2025/swarm-community-call-25-september-recap/)


### Events 

##### **Swarm Community Call – 30 October**

The October Swarm Community Call highlighted that **Bee v2.7** is in final testing, bringing multi-address support, Auto-TLS for in-browser nodes, and SOC Replica for improved data durability—paving the way for Swarm’s in-browser client. 

The team also previewed its participation at **Devconnect Buenos Aires**, including the Web3Privacy Now Cypherpunk Congress and a Solar Punk side event focused on decentralized AI and media.

The call featured the **official launch of [Beeport](https://beeport.ethswarm.org/)**, a new browser-based tool allowing users to upload content to Swarm without running a node, including full sites with ENS support. 

Finally, a demo showcased how **AI tools paired with Context-7** can help developers query Swarm docs and generate code more efficiently.

You are welcome to read the [recap here](https://blog.ethswarm.org/foundation/2025/swarm-community-call-30-october-recap/) or listen to the [recording here](https://x.com/i/broadcasts/1ynKOMeyPkXJR). 


### Upcoming events

##### **Solar Punk: Concept to Commit – Decentralized AI and Media (Buenos Aires, Argentina, 21 November – Devconnect side event)**

The Solar Punk team will host a dedicated side event during Devconnect in Buenos Aires. On **21 November**, join us at **Club Lucero** for a half-day deep dive into the intersection of AI, decentralization, and web3 infrastructure. Follow this [link to register and learn more](https://luma.com/8ewy3a20)!


##### **Swarm Community Call – 27 November**

Swarm Community Calls are held on the last Thursday of every month and are [broadcast on X](https://x.com/i/broadcasts/1ynKOMeyPkXJR) at 17.00 CET. The next call is on **27 November** - [add it to your calendar](https://www.addevent.com/event/tkyc6240vpky). 

Community Calls are the best way to stay fully up to date with current developments. They also provide an opportunity to jump into live discussions, ask the Swarm team questions, and engage more! Before the Call, you are welcome to submit questions to the Team using this [online form](https://airtable.com/appNS3aNAw7rihPeg/shrBRyrMkXFsJvLS3), which will be answered live during the session.


### People & Culture team

If you are interested in joining the team and believe you have outstanding skills, visit our career page [https://www.ethswarm.org/jobs](https://www.ethswarm.org/jobs) or simply drop us a message at talent@ethswarm.org!

