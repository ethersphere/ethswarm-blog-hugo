+++
banner = "/uploads/scc_recap-march.png"
categories = ["Events"]
date = 2023-04-03T22:00:00Z
description = "The Swarm Community Call began with a round of updates. \n"
draft = true
references_and_footnotes = []
title = "Swarm Community Call, 30 March — Recap"

+++
## Moving to a data-driven approach

The Swarm Community Call began with a round of updates. According to **Callum Toner** from the Research Track, the research and development teams are making good progress towards the completion of the [storage incentives roadmap](https://blog.ethswarm.org/foundation/2022/towards-the-world-computer.-the-swarm-network-upgrade-has-started./).

In about a month the rewrite of the localstore (the part of the network dedicated to the actual storing of data) should be completed, strengthening the network even further. At the same time, they are working on Phase 4 and continuously modelling and testing the price oracle, which is one of the core components of the storage incentives mechanism.

Callum shared some insights gained through this newly available data on how the network has been behaving since the [substantial increase of the storage price in February](https://blog.ethswarm.org/foundation/2023/postage-stamp-price-increases-as-swarm-network-reaches-milestone-of-self-sustainability/). The increase rendered invalid some of the postage stamp batches (each data upload in the Swarm network has a related postage stamp batch that proves the upload has been paid for). As a consequence, those batches were “evicted” from the network.

_“Basically, the storage incentives mechanism locks, if that's happening widely across the network, which it obviously was with such a drastic price increase. So when you're getting massive, massive fluctuations like that … then the storage incentives lock until the network basically stabilises itself again,”_ Callum explained. The lock lasted approximately three hours before the mechanism restarted itself. This did not affect data availability.

Once the storage incentives roadmap is complete and the robustness of the core use cases is achieved, then there is still the larger roadmap to finalise. This includes things such as the scalability of the network, big data upload, the streamlining of UX and UI, and other important aspects, he concluded.

## Streamlining Swarm’s documentation

An important part of any project today is its documentation. Right now, the [documentation related to the Swarm network](https://docs.ethswarm.org/docs/) is in the process of being thoroughly reorganised to better reflect what Swarm is and to offer the community better resources.

According to **Noah Maizels** from Developer Relations, he is currently reorganising the documentation into three sections: the first will be aimed at those who want to _learn_ about Swarm in general, the second will be dedicated to _develope_rs and the third to _node operators_. To better engage the Swarm community in this ongoing process, a bounty will soon be available to anyone who is interested in giving detailed feedback on improving the docs.

Another goal that Noah is focusing on with the developers is to enhance the communication with the node operator community. Together they are creating a survey focused on developers and node operators to learn more about what they are trying to do with Swarm, what kind of issues are they running into, and on what the developers should focus on next.

## Formalising storage incentives in a new paper by Viktor Trón

During the event Swarm’s co-founder and research lead, Viktor Trón, also presented his latest paper, titled [“Future-proof Storage - Economic incentives for sharing DISC space in the Swarm peer-to-peer network”](https://www.overleaf.com/project/6173a105d96be57785c743e0). The paper gives a comprehensive context of why and how Swarm incentivises the storage of data that is not popular and fairly compensates nodes for doing so.

In light of this, Viktor pointed out the importance of the decentralised price oracle, which is mathematically formalised in this paper and will serve as an automatic setter of the storage price in the Swarm network once it is deployed in the near future.

If you would like to comment on the paper, you can do that on the [Swarm Foundation’s Discord #research channel](https://discord.com/channels/799027393297514537/1068161013934985287). All your constructive feedback will be appreciated.

## Fair Data Society’s New Day event recap

Another item on the event's agenda was the recap from [Fair Data Society’s graduation event titled New Day](https://m.youtube.com/watch?v=5oMKsbK_iak). Fair Data Society (FDS) has been supported by Swarm since 2020 and, just like Swarm, graduated from the Ethereum Foundation. FDS is now embarking on its own journey.