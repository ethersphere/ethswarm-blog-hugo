+++
banner = "/uploads/sotn-december-2024.png"
images = [ "/uploads/sotn-december-2024.png" ]
categories = [ "Development updates" ]
date = 2025-01-20T00:00:00.000Z
description = "As 2024 came to an end, the network demonstrated a range of trends reflecting seasonal and structural shifts. December data shows notable declines across key metrics compared to November and earlier months, with some metrics stabilizing after sharper fluctuations earlier in the year. These insights provide a deeper understanding of network performance, participation, and reward distribution dynamics."
references_and_footnotes = [ ]
title = "State of the Network: December"
_template = "post"
slug="state-of-the-network-december-2024"
+++

### **December 2024 Network Report**

As 2024 came to an end, the network demonstrated a range of trends reflecting seasonal and structural shifts. December data shows notable declines across key metrics compared to November and earlier months, with some metrics stabilizing after sharper fluctuations earlier in the year. These insights provide a deeper understanding of network performance, participation, and reward distribution dynamics.

{{< admonition info >}}
"Active nodes" are full nodes (identified by a unique Gnosis Chain address) with the required minimum staked xBZZ that have submitted a [commit](https://docs.ethswarm.org/docs/concepts/incentives/redistribution-game/#redistribution-game-details) transaction during the month. Although the statistical average gives each node a selection chance greater than one, a small minority may not have been selected within the month, slightly underestimating the true number.
{{< /admonition >}}

{{< admonition info >}}
All rewards are denominated in xBZZ. Since the fiat value of xBZZ fluctuates each month, these metrics may not reflect the real-world returns for node operators.
{{< /admonition >}}

{{< admonition info >}}
With the introduction of [reserve doubling](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#reserve-doubling) in Bee version 2.3.0, a single active node can double their chances of playing in the redistribution game by storing data from two neighborhoods. This should be taken into account when considering reward metrics for single active nodes.
{{< /admonition >}}

---

### **Network Total Monthly Rewards**

This metric shows the total rewards paid out across the entire network for each month.

![Total Network Rewards (xBZZ) vs. Month](/uploads/Total-Network-Rewards-xBZZ-vs-Month-December-2024.svg)

In December, total network rewards declined to 36,521 xBZZ, a 32.4% decrease from November's 54,053 xBZZ. This continues a consistent downward trend observed since July, reflecting reduced reward distribution across the network.

---

### **Monthly Median Win Values**

This metric is the median win amount for each win event, providing insight into the typical reward nodes can expect from a single win event.

![Median Win Values (xBZZ) vs. Month](/uploads/Median-Win-Values-xBZZ-vs-Month-December-2024.svg)

Median win values fell to 9.93 xBZZ in December, down 43.1% from 17.44 xBZZ in November. This sharp decline follows a similar trend seen in average win values and overall network rewards.

---

### **Monthly Average Win Values**

This metric shows the average win amount for each win event, offering an understanding of how the reward amounts are distributed across the network.

![Average Win Values (xBZZ) vs. Month](/uploads/Average-Win-Values-xBZZ-vs-Month-December-2024.svg)

In December, average win values dropped to 11.15 xBZZ, a 34.9% reduction from November's 17.13 xBZZ. This decrease aligns with the broader downward trend in network rewards and median win values.

---

### **Active Staking Node Monthly Average Earnings**

This metric shows the average monthly earnings for an active node.

![Avg Total Earnings per Node (xBZZ) vs. Month](/uploads/Avg-Total-Earnings-per-Node-xBZZ-vs-Month-December-2024.svg)

Average monthly earnings per active staking node fell to 4.69 xBZZ in December, a 32% decline from November's 6.90 xBZZ. This reflects the broader decrease in network rewards and reduced opportunities for earnings.

---

### **Total Active Staking Nodes by Month**

This metric shows the total number of active nodes.

![Total Active Staking Nodes vs. Month](/uploads/Total-Active-Staking-Nodes-vs-Month-December-2024.svg)

Total active nodes decreased slightly from 7,830 in November to 7,793 in December, showing a marginal 0.5% decline. This indicates relative stability in active participation despite the declining rewards environment.

---

### **Total Reachable Full Nodes Regardless of Active Status**

This metric counts the total number of unique full nodes that were reachable at any point in the month, providing a broader picture of network activity beyond just active committers.

![Total Reachable Full Nodes vs. Month](/uploads/Total-Reachable-Full-Nodes-vs-Month-December-2024.svg)

In December, the number of reachable full nodes increased to 15,007, a 6.6% rise from November's 14,075. This marks the first month-over-month growth since August, indicating a mild resurgence in network growth.

{{< admonition info >}}
The fact that there are a significant number of full nodes participating in the network without actively participating in the redistribution game may potentially indicate a significant group of altruistic operators who provide disk space purely as a social good.
{{< /admonition >}}

---

### **Total Winning Nodes by Month**

This metric tracks the number of unique staking nodes that won the redistribution game at least once during the month.

![Total Winning Nodes vs. Month](/uploads/Total-Winning-Nodes-vs-Month-December-2024.svg)

The total number of winning nodes slightly increased in December to 2,611, compared to 2,588 in November. This 0.9% growth suggests a marginally more distributed reward landscape.

---

### **Conclusion**

December 2024 demonstrated a continuation of declining reward trends, with total network rewards, win values, and average node earnings all decreasing compared to November. Despite this economic downturn, node participation remained relatively stable, with the total number of active staking nodes and winning nodes showing little change. This may suggest continued trust and engagement from node operators in the long-term future of the Swarm network. These node participation metrics reflect the resilience and sustained involvement of the node operator community even throughout shifting reward dynamics.

