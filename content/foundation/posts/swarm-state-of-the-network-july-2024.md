+++
banner = "/uploads/bc.png"
images = [ "/uploads/bc.png" ]
categories = [ "Development updates" ]
date = 2024-08-15T00:00:00.000Z
description = "This report provides a comprehensive analysis of the Swarm network metrics for July 2024, building upon the trends observed in the previous months. The focus remains on redistribution-related data such as total rewards, win values, earnings, and node activity. Geographic distribution is also examined, offering insights into the network's growth and performance across different regions."
references_and_footnotes = [ ]
title = "State of the Network: July"
_template = "post"
slug="state-of-the-network-july-2024"
+++



## Introduction

This report provides a comprehensive analysis of the Swarm network metrics for July 2024, building upon the trends observed in the previous months. The focus remains on redistribution-related data such as total rewards, win values, earnings, and node activity. Geographic distribution is also examined, offering insights into the network's growth and performance across different regions. These metrics help to better understand the dynamic nature of the Swarm network and its ongoing evolution.

## Network Total Monthly Rewards

This metric shows the total rewards paid out across the entire network for each month.

| Month     | Total Network Rewards (xBZZ) |
|-----------|------------------------------|
| February  | 152,974                      |
| March     | 104,657                      |
| April     | 76,024                       |
| May       | 109,209                      |
| June      | 112,037                      |
| July      | 105,855                      |

![chart-Total-Network-Monthly-Rewards](/uploads/chart-Total-Network-Monthly-Rewards-July-2024.png)

### Analysis

The total network rewards in July slightly decreased from June, falling from 112,037 xBZZ to 105,855 xBZZ. This marks a downturn in rewards following the previous month's upward trend. Despite the decline, the overall reward distribution remains strong, indicating consistent network activity.

## Monthly Median Win Values

This metric is the median win amount for each win event.

| Month     | Median Win Values (xBZZ) |
|-----------|--------------------------|
| February  | 49.15                     |
| March     | 27.43                     |
| April     | 22.27                     |
| May       | 32.65                     |
| June      | 33.92                     |
| July      | 33.67                     |

![chart-Monthly-Median-Win-Values](/uploads/chart-Monthly-Median-Win-Values-July-2024.png)

### Analysis

The median win values in July showed a minor decrease, dropping slightly from 33.92 xBZZ in June to 33.67 xBZZ. While this represents a small dip, it reflects a stable pattern of reward distribution among winning nodes, maintaining levels similar to the previous month.

## Monthly Average Win Values

This metric is the average win amount for each win event.

| Month     | Average Win Values (xBZZ)  |
|-----------|----------------------------|
| February  | 54.42                      |
| March     | 34.96                      |
| April     | 25.43                      |
| May       | 36.56                      |
| June      | 37.07                      |
| July      | 36.05                      |

![chart-Monthly-Average-Win-Values](/uploads/chart-Monthly-Average-Win-Values-July-2024.png)

### Analysis

July saw a slight decrease in the average win value, dropping from 37.07 xBZZ in June to 36.05 xBZZ. This decrease mirrors the trend seen in the total network rewards, suggesting a slight contraction in average rewards per event but still within a steady range.

## Active Staking Node Monthly Average Earnings

This metric shows the average monthly earnings for an active staking node (with an "active node" defined as a node which has submitted a commit transaction at least once in the month).

| Month     | Avg Total Earnings per Node (xBZZ) |
|-----------|------------------------------------|
| February  | 13.21                              |
| March     | 7.71                               |
| April     | 5.64                               |
| May       | 10.66                              |
| June      | 9.37                               |
| July      | 8.22                               |

![chart-Avg-Total-Earnings-per-Node](/uploads/chart-Avg-Total-Earnings-per-Node-July-2024.png)

### Analysis

Average earnings per active staking node decreased from 9.37 xBZZ in June to 8.22 xBZZ in July. This decline could be attributed to the increased number of active nodes in the network, which spreads the rewards over a larger pool of participants.

## Total Active Staking Nodes by Month

This metric shows the total active staking nodes by month (as defined by unique overlays which have issued a commit transaction at least once within the month).

| Month     | Total Active Staking Nodes |
|-----------|----------------------------|
| February  | 11,576                     |
| March     | 13,571                     |
| April     | 13,486                     |
| May       | 10,245                     |
| June      | 11,950                     |
| July      | 12,871                     |

![chart-Total-Active-Staking-Nodes](/uploads/chart-Total-Active-Staking-Nodes-July-2024.png)

### Analysis

The total number of active staking nodes increased from 11,950 in June to 12,871 in July, marking a significant rise in participation. This growth highlights the increasing engagement within the Swarm network as more nodes participate in redistribution events.

## Total Reachable Full Nodes Regardless of Active Status

This metric has been recorded since May 2024, and it reports the total number of unique reachable full nodes, regardless of whether or not they have issued a commit transaction within the month. This metric can help offer a fuller picture of network activity, as some minority of nodes will be actively operating in neighborhoods which were not chosen to play the redistribution game during the month (it does however very likely also represent an over-count of nodes, as it records even nodes which were only reachable momentarily at one point during the month).

| Month     | Total Reachable Full Nodes |
|-----------|----------------------------|
| May       | 16,000                     |
| June      | 18,916                     |
| July      | 20,898                     |

### Analysis

July saw an increase in the number of reachable full nodes, rising from 18,916 in June to 20,898. This growth indicates the growth of the network, with more nodes being online and reachable throughout the month.

## Total Winning Nodes by Month

This metric shows the total number of unique active staking nodes which have won at least once within the month.

| Month     | Total Winning Nodes  |
|-----------|----------------------|
| February  | 2,814                |
| March     | 2,413                |
| April     | 2,486                |
| May       | 2,554                |
| June      | 2,680                |
| July      | 2,622                |

![chart-Number-of-Winning-Staking-Nodes-by-Month](/uploads/chart-Number-of-Winning-Staking-Nodes-by-Month-July-2024.png)

### Analysis

The total number of winning nodes saw a slight decrease, from 2,680 in June to 2,622 in July. 

## Total Active Staking Nodes by Country

This metric shows the total number of active staking nodes across the top four countries and all other countries aggregated into the "Other" category, as well as the remaining nodes in the "Unknown" category.

|               | China  | Germany | Finland | Unknown | United States | Other |
|---------------|--------|---------|---------|---------|---------------|-------|
| February      | 6,787  | 1,958   | 1,952   | 688     | 116           | 75    |
| March         | 7,785  | 1,953   | 2,232   | 1,408   | 91            | 102   |
| April         | 7,249  | 1,912   | 2,291   | 1,851   | 92            | 91    |
| May           | 6,010  | 1,739   | 2,173   | 1,899   | 84            | 69    |
| June          | 7,480  | 1,718   | 2,276   | 370     | 79            | 27    |
| July          | 8,539  | 1,828   | 2,395   | 1       | 83            | 25    |

![Total Staking Nodes by Country](/uploads/Total-Active-Staking-Nodes-by-Country-July-2024.png)

### Analysis

China saw the largest increase in active nodes during July, further solidifying its dominant position within the network. Germany, Finland, and other regions also experienced growth, while the Unknown category shrank significantly (this was mainly due to improvements made to the scripts used for analysing network activity). The U.S. and Other categories remained relatively stable, with minor fluctuations.

## Conclusion

In July, the Swarm network continued to show a continuation of the trends established in previous months, along with a notable increase in active nodes and a rise in the number of reachable full nodes. While total rewards and average earnings per node decreased slightly, these changes reflect the ongoing expansion and competitiveness within the network. The geographic distribution also continued to evolve, with significant increases in some regions, contributing to the overall network health and robustness.

