+++
banner = "/uploads/state-of-network-blog.png"
categories = [ "Development updates" ]
date = 2023-06-20T00:00:00.000Z
description = ""
references_and_footnotes = [ ]
title = "State of the Network – June 2023"
+++


The last few months have been a transformative time for Swarm. Development is progressing on multiple fronts, and the hard work of the research and development teams is reflected by network growth and performance improvements. In this article we discuss the state of the network on multiple fronts. We’ll kick things off with an overview of Swarm network economics and network growth. In the next section we will tackle the issue of network capacity, and to wrap things up we’ll take a closer look at how the recent developments on the Bee client have led to advances in network performance.


## Swarm Network Continues to Mature 

The rollout of Swarm’s storage incentives system has been ongoing since late 2022. Starting in February 2023 there was a dramatic increase in storage incentives which has made it financially viable for node operators to start contributing their services. Over the last two months the network has grown from only 1000 nodes participating in staking to over 2700! Geographically these nodes span the entire globe, including countries in Asia, Europe, Australia, and North and South America. There are currently 30,792 in staked xBZZ amongst all these nodes, and a total of approximately 60,000 xBZZ has been paid out in incentives since the incentives system went live. 


## Reward Statistics Overview

The Swarm research team is still in the process of defining the methodology for calculating expected return rates for Swarm node operators. The team has provided some data relating to node operator earnings, however these data have many limitations and should not be interpreted as being predictive for any prospective node operators, or used for planning of business operations, and are merely provided for educational purposes. These data were collected from nodes monitored by the Swarm research team, and it excludes nodes which did not win any xBZZ.

| March, 2023  | Total Wins in xBZZ (per node) |
|--------------|-------------------------------|
| Min          | 3.914                         |
| 1st Quartile | 6.410                         |
| Median       | 12.531                        |
| Mean         | 14.957                        |
| 3rd Quartile | 18.959                        |
| Max          | 73.165                        |

| April, 2023  | Total Wins in xBZZ (per node) |
|--------------|-------------------------------|
| Min          | 5.993                         |
| 1st Quartile | 6.326                         |
| Median       | 12.531                        |
| Mean         | 13.921                        |
| 3rd Quartile | 18.869                        |
| Max          | 100.823                       |

| May, 2023  | Total Wins in xBZZ (per node) |
|--------------|-------------------------------|
| Min          | 5.864                         |
| 1st Quartile | 6.354                         |
| Median       | 12.508                        |
| Mean         | 14.296                        |
| 3rd Quartile | 18.948                        |
| Max          | 107.420                       |

*Data collected from [https://swarmscan.io/](https://swarmscan.io/)*

## Network Performance Improvements 

Parallel to the ongoing rollout of the storage incentives system, the Swarm dev team has also been working at improving other aspects of Swarm network performance. Some of the most significant improvements are those related to the push-sync, pull-sync, and retrieval protocols which make up the technical infrastructure responsible for uploading and downloading data from the Swarm network. The teams’ work is reflected in the most recent performance metrics measuring error rates as well as download / upload speeds. 

Let’s take a look at exactly how all those changes have actually affected network performance. Based on metrics collected by the Bee dev team, there have been major improvements in network performance over the month of May. Starting with upload speed – in April the average upload speed was 187 kbps, while in May it increased to 1700 kbps, an almost tenfold increase! The download error rate has also decreased to practically zero since the 1.16.0 update from mid-May. Download speeds have not changed significantly, but have remained at a stable speed of close to 450 kbps. For an average website of around 2000 kb, it would take a little over one second to complete an upload, and from four to five seconds for a download. 

![](/uploads/april-smoketest.png)*April Smoke Test*

![](/uploads/may-smoketest.png)*May Smoke Test*

## Moving Forward

Make sure to follow Swarm on Twitter to get the latest development and ecosystem updates, and join the [Discord channel](https://discord.gg/ZvBWZC3GEa) to get in on the conversation. And don’t forget to mark your calendar for the upcoming [Swarm summit](https://summit.ethswarm.org/swarm-summit-2023/talk/#)!