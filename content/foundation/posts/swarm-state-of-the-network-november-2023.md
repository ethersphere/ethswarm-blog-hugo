+++
banner = "/uploads/danis-blog.jpeg"
categories = [ "Development updates" ]
date = 2023-12-12T00:00:00.000Z
description = "In this comprehensive report, we delve into the key metrics and trends that have shaped the Swarm network throughout November. This month's analysis brings a focus on various critical aspects of the network, including the total active staking nodes, connectable nodes, winning nodes, and the geographic distribution of active nodes. Additionally, we explore the network's total monthly rewards, average and median win values, and the average earnings per active staking node."
references_and_footnotes = [ ]
title = "State of the Network: November"
_template = "post"
slug="state-of-the-network-november-zh"
+++

In this comprehensive report, we delve into the key metrics and trends that have shaped the Swarm network throughout November. This month's analysis brings a focus on various critical aspects of the network, including the total active staking nodes, connectable nodes, winning nodes, and the geographic distribution of active nodes. Additionally, we explore the network's total monthly rewards, average and median win values, and the average earnings per active staking node. Join us as we dissect the numbers and trends that define the Swarm network, reflecting its ongoing evolution and expanding global footprint in the decentralized storage landscape.

## Total Active Staking Nodes

The "Active staking node" metric has been redefined starting in November as any full node with a greater than zero reserve size. It is currently measured from a single snapshot from the [Swarmscan network dump API](https://api.swarmscan.io/v1/network/dump) early the following month.

Due to events on the network [in early December](https://discord.com/channels/799027393297514537/816617743688007702/1182285582882312233), the actual number of active staking nodes in November is likely higher than the value reported here as this month's report's snapshot was taken following the network events. In future reports we aim to move away from using a single snapshot in order to more accurately capture network data. 

Take note that this affects metrics which are derived in part from this metric, such as "Active Staking Node Monthly Average Earnings" and "Total Active Staking Nodes by Country". 


| Month     | Total Active Staking Nodes |
|-----------|----------------------------|
| June      | 2482                       |
| July      | 2657                       |
| August    | 4368                       |
| September | 4574                       |
| October   | 10367                      |
| November  | 7541                       |

![chart-Total-Active-Staking-Nodes](/uploads/chart-Total-Active-Staking-Nodes-November.png)

November saw a decrease in active staking nodes to 7,541, however as stated above, the actual number of staking nodes in November is likely under-reported.   

## Total Connectable Nodes

This metric shows the total number of nodes which are connectable each month, including both active staking nodes, inactive staking nodes, and non-staking nodes. In contrast with the "Total Active Staking Nodes" metric, this value is not snapshot based, and includes the cumulative connectable nodes which were reachable at any time over the entire month. 

| Month     | Total Active Nodes |
|-----------|---------------------|
| June      | 4002                |
| July      | 4221                |
| August    | 4554                |
| September | 5107                |
| October   | 16424               |
| November  | 17273               |

![chart-Total-Connectable-Nodes-by-Month](/uploads/chart-Total-Active-Nodes-by-Month-November.png)

November marked a new high with 17273 total active nodes, surpassing October's record. This continuous growth signifies a robust expansion in the network's overall reach and activity levels.

## Total Winning Nodes 

This metric shows the total number of unique nodes which have won at least once within the month.

| Month     | Total Winning Nodes |
|-----------|----------------------|
| June      | 1415                 |
| July      | 1541                 |
| August    | 1993                 |
| September | 2125                 |
| October   | 2462                 |
| November  | 2787                 |

![chart-Number-of-Winning-Staking-Nodes-by-Month](/uploads/chart-Number-of-Winning-Staking-Nodes-by-Month-November.png)

November saw a new peak with 2,787 active staking nodes winning at least once, continuing the upward trend observed in recent months.  

## Total Active Staking Nodes by Country

This metric shows the total number of active staking nodes across the top four countries and all other countries aggregated into the "Other" category, as well as the remaining nodes in the "Unknown" category.
 

|               | China | Germany | Finland | Unknown | United States | Other |
|---------------|-------|---------|---------|---------|---------------|-------|
| June          | 1062  | 409     | 609     | 230     | 9             | 163   |
| July          | 1172  | 445     | 630     | 224     | 7             | 179   |
| August        | 855   | 1481    | 1611    | 267     | 7             | 147   |
| September     | 574   | 2046    | 1607    | 217     | 8             | 123   |
| October       | 6242  | 2042    | 1543    | 175     | 282           | 91    |
| November      | 3588  | 1908    | 1701    | 16      | 273           | 55    |

![Total Staking Nodes by Country(4).png](/uploads/Total-Active-Staking-Nodes-by-Country.png)

November observed a redistribution in active staking nodes across countries, with China still leading, albeit with a reduced count compared to October. This change reflects a dynamic and evolving geographical distribution of network participants. The the numbers reported here should be considered in light of the issues described in the section on the "Total Active Staking Nodes" metric above. 

## Network Total Monthly Rewards

This metric shows the total rewards paid out across the entire network for each month.

| Month     | Total Network Rewards (xBZZ) |
|-----------|------------------------------|
| June      | 26655                        |
| July      | 34839                        |
| August    | 135927                       |
| September | 147825                       |
| October   | 152868                       |
| November  | 148617                       |

![chart-Total-Network-Monthly-Rewards](/uploads/chart-Total-Network-Monthly-Rewards-November.png)

In November, the Swarm network distributed a total of 148,617 xBZZ in rewards. While this marks a slight decrease from October's peak, it still represents one of the higher monthly payouts, reflecting sustained network activity and engagement.

## Monthly Median Win Values
This metric is the median win amount for each win event.

| Month     | Median Win Values (xBZZ) |
|-----------|---------------------------|
| June      | 8.29                      |
| July      | 9.63                      |
| August    | 43.97                     |
| September | 44.62                     |
| October   | 46.84                     |
| November  | 46.83                     |

![chart-Monthly-Median-Win-Values](/uploads/chart-Monthly-Median-Win-Values-November.png)

The median win value in November was 46.83, closely paralleling October's value. This consistency in median values suggests a stable and significant reward size for typical win events in the network.


## Monthly Average Win Values
This metric is the average win amount for each win event. 

| Month     | Average Win Values (xBZZ) |
|-----------|----------------------------|
| June      | 10.14                      |
| July      | 12.07                      |
| August    | 41.45                      |
| September | 46.52                      |
| October   | 62.09                      |
| November  | 47.41                      |

![chart-Monthly-Average-Win-Values](/uploads/chart-Monthly-Average-Win-Values-November.png)

For November, the average win value was 47.41 xBZZ. This indicates a slight decrease from October's all-time high but still shows a substantial value, signifying robust individual win events and consistent network participation.

## Active Staking Node Monthly Average Earnings
This metric shows the average monthly earnings for an active staking node. 

| Month     | Avg Total Earnings per Node (xBZZ) |
|-----------|------------------------------------|
| June      | 10.73                              |
| July      | 13.11                              |
| August    | 31.11                              |
| September | 32.31                              |
| October   | 14.73                              |
| November  | 19.707                             |

![chart-Avg-Total-Earnings-per-Node](/uploads/chart-Avg-Total-Earnings-per-Node-November.png)

In November, the average earnings per active staking node increased to 19.707 xBZZ. Taking into consideration what has been mentioned in the section above on the "Total Active Staking Nodes" metric, it is likely that that the average earnings this month deviate from the value reported here.

## Conclusion

The Swarm network has demonstrated considerable growth and vitality over the past six months, as evidenced by the evolving total monthly rewards, average and median win values, and the earnings per active staking node. The number of active nodes, both staking and non-staking, has continued to rise, signalling a growing global interest in the Swarm network. These trends not only signify an active and expanding network but also highlight the evolving nature of the Swarm ecosystem and its increasing significance in the decentralized storage space. 