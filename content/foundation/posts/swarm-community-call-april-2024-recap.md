+++
banner = "/uploads/scc-april-recap.png"
images = [ "/uploads/scc-april-recap.png" ]
categories = [ "Events" ]
date = 2024-05-07T00:00:00.000Z
description = "After intensive testing and development, the Bee team is on the brink of releasing Bee 2.1, focusing on critical updates to the local storage system. "
references_and_footnotes = [ ]
title = "Swarm Community Call, 25 April – Recap"
_template = "post"
+++


## Upcoming Release: Bee 2.1

After intensive testing and development, the Bee team is on the brink of releasing Bee 2.1, focusing on critical updates to the local storage system. Niki Papadatou explained that the local store overhaul will simplify backend processes and address previous bugs, particularly around chunk storage and syncing issues. 


## Merge of the Bee and Debug APIs 

The integration of the Bee and Debug APIs marks a significant update in the 2.1 release, aiming for smoother node operation transitions with dual-port availability until the subsequent 2.2 release. Operators are encouraged to use this transition period to adjust their setups.

In the meantime, the [2.0.1](https://github.com/ethersphere/bee/releases/tag/v2.0.1) release is out. It is a patch release that updates libp2p to the latest version, addressing a potential memory leak issue. Therefore, it is advisable to upgrade your nodes to the latest version. 


## Freezing Quota

Following the overview of the upcoming Bee 2.1 release, Callum Toner addressed the audience about the research team's latest developments on the freezing quota. This new feature, intended to be part of the 2.1 release, aims to significantly mitigate node freezes through a probabilistic model rather than a deterministic approach. With the proposed quota model, node freezes that are beyond the node operator’s control are expected to decrease dramatically, to 5% or under. 

Callum emphasised the potential impact of this change, noting that it could greatly enhance operational node efficiency, rewards, and the overall return on investment for node operators. He reiterated the team's commitment to optimising economic conditions for node operators, highlighting this as a priority for the research team's ongoing efforts.


## Transfer of Stake or Neighbourhood Hopping

While the focus is currently on reducing freezes to pave the way for an enhanced price oracle (which would facilitate quicker and more accurate price updates), the research team is also conceptualising the transfer of stake or neighbourhood hopping, which would allow node operators to move their stake from one neighbourhood to another. Though not yet in development, future plans include a withdrawal mechanism for node operators' stakes above a certain threshold. 


## The Bonding Curve Vote

Costanza Gallo provided an update just hours before the bonding curve vote concluded. However, since the Call, the voting has concluded, and the Swarm Community has decided to remove the bonding curve. The smart contract will be terminated on 4 May at 12 PM UTC, with more details to come for a smooth transition.


## Announcements: Swarm Summit 2024 and Swarm Hackdays

The Swarm Summit is back and live again! This time, it will be happening **in Ljubljana, Slovenia**, broadcast live **online as well**, from **20 to 21 June.** 

If you believe you could contribute to the programme, we invite you to submit your talk or presentation through our **[call for papers, open until 20 May](https://summit.ethswarm.org/swarm-summit-2024/cfp)**. 

But that is not all. Swarm Foundation is delighted to extend an invitation to the **Swarm Hackdays** as well, which will be taking place from **17-19 June**, in real life only. You are welcome to apply for a **special Summit Hacker Grant** to reimburse your travel and accommodation costs if your proposed hack idea is approved. See the details [here](https://docs.google.com/forms/d/e/1FAIpQLScXcz_Dm0jvrJD79pKw-9s8og59d06IN_NUwybzWMovZsSn3g/viewform) and apply!


## Community Talk: DevOps Guide For Beginners 

The community call concluded with a community talk on DevOps for beginners, led by Noah Maizels. Noah introduced a new two-part article series focused on DevOps for beginners. The main purpose of this guide is to make Bee and Swarm more accessible to a wider range of people by targeting potential node operators who may lack the basic knowledge needed to run a node. This beginner’s DevOps guide aims to bridge that knowledge gap.

You can read part one of the series here: [DevOps Guide For Beginners](https://blog.ethswarm.org/foundation/2024/devops-for-beginners-pt-one/).

The next Community Call is scheduled for 30 May—[add to the calendar](https://www.addevent.com/event/vq21267049). 

See you then!