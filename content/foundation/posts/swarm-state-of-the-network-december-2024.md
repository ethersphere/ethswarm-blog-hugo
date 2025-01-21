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

### **December 2024 State of the Network Report**

As 2024 came to a close, the network exhibited trends shaped by both seasonal and structural shifts. December data highlights notable changes across key metrics compared to November and earlier months, with some metrics stabilizing after sharper fluctuations earlier in the year. These insights provide a deeper understanding of network performance, participation, and reward distribution dynamics.

{{< admonition info >}}
"Active nodes" are full nodes (identified by a unique Gnosis Chain address) with the required minimum staked xBZZ that have submitted a [commit](https://docs.ethswarm.org/docs/concepts/incentives/redistribution-game/#redistribution-game-details) transaction during the month. While the statistical average gives each node a selection chance greater than one, a small minority may not have been selected within the month, slightly underestimating the true number.
{{< /admonition >}}

{{< admonition info >}}
All rewards are denominated in xBZZ. Since the fiat value of xBZZ fluctuates monthly, these metrics may not reflect the real-world returns for node operators.
{{< /admonition >}}

{{< admonition info >}}
With the introduction of [reserve doubling](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#reserve-doubling) in Bee version 2.3.0, a single active node can double its chances of playing in the redistribution game by storing data from two neighborhoods. This should be considered when evaluating reward metrics for single active nodes.
{{< /admonition >}}

---

### **Network Total Monthly Rewards**

This metric shows the total rewards distributed across the entire network for each month.

![Total Network Rewards (xBZZ) vs. Month](/uploads/Total-Network-Rewards-xBZZ-vs-Month-December-2024.svg)

In December, total network rewards dropped to 36,521 xBZZ, a 32.4% decrease from November's 54,053 xBZZ. 

---

### **Monthly Median Win Values**

This metric is the median reward amount for each win event, providing insights into the typical reward nodes can expect from a single win event.

![Median Win Values (xBZZ) vs. Month](/uploads/Median-Win-Values-xBZZ-vs-Month-December-2024.svg)

Median win values fell to 9.93 xBZZ in December, marking a 43.1% drop from November's 17.44 xBZZ. 

---

### **Monthly Average Win Values**

This metric calculates the average reward amount for each win event, showing the average amount of xBZZ distributed in a single win event. 

![Average Win Values (xBZZ) vs. Month](/uploads/Average-Win-Values-xBZZ-vs-Month-December-2024.svg)

In December, average win values dropped to 11.15 xBZZ, a 34.9% reduction from November's 17.13 xBZZ. 

---

### **Active Staking Node Monthly Average Earnings**

This metric tracks the average monthly earnings for an active node.

![Avg Total Earnings per Node (xBZZ) vs. Month](/uploads/Avg-Total-Earnings-per-Node-xBZZ-vs-Month-December-2024.svg)

Average monthly earnings per active staking node declined to 4.69 xBZZ in December, a 32% decrease from November's 6.90 xBZZ. 

---

### **Total Active Staking Nodes by Month**

This metric shows the total number of active nodes.

![Total Active Staking Nodes vs. Month](/uploads/Total-Active-Staking-Nodes-vs-Month-December-2024.svg)

The number of active nodes decreased slightly from 7,830 in November to 7,793 in December, showing a marginal 0.5% decline. This indicates relative stability in active participation despite the declining rewards environment.

---

### **Total Reachable Full Nodes Regardless of Active Status**

This metric counts all unique full nodes reachable at any point during the month, providing a broader picture of network activity beyond just active committers.

![Total Reachable Full Nodes vs. Month](/uploads/Total-Reachable-Full-Nodes-vs-Month-December-2024.svg)

In December, the number of reachable full nodes increased to 15,007, a 6.6% rise from November's 14,075. This marks the first month-over-month growth since August, indicating a mild resurgence in network growth.

{{< admonition info >}}
The presence of a significant number of full nodes that participate in the network without actively engaging in the redistribution game may suggest altruistic operator who contribute disk space solely as a social good, supporting the network without direct financial incentives.
{{< /admonition >}}

---

### **Total Winning Nodes by Month**

This metric tracks the number of unique staking nodes that won the redistribution game at least once during the month.

![Total Winning Nodes vs. Month](/uploads/Total-Winning-Nodes-vs-Month-December-2024.svg)

The total number of winning nodes rose slightly to 2,611 in December, compared to 2,588 in November. This 0.9% growth suggests a marginally more distributed reward landscape.

---

### **Conclusion**

December 2024 demonstrated a continuation of declining reward trends, with reductions in total network rewards, win values, and average node earnings compared to November. However, node participation remained relatively stable, with only minor changes in the total number of active staking nodes and winning nodes, and even minor increases in certain metrics. This suggests continued trust and engagement from node operators in the Swarm network's long-term potential. These participation metrics highlight the resilience and commitment of the node operator community amid shifting reward dynamics.

