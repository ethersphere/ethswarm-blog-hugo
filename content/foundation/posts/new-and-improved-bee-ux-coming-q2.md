+++
banner = ""
images = [ "" ]
categories = [ ]
date = 2022-05-12T04:00:00.000Z
description = "Based on this, in Q1 of 2022, efforts were dedicated to creating a fluid and easy user experience when setting up a Bee node on the majority of operating systems."
references_and_footnotes = [ ]
title = "New and improved Bee UX coming Q2"
_template = "post"
+++

When developing features for the Swarm network, teams follow an internal [agenda](https://progress.ethswarm.org/). Based on this, in Q1 of 2022, efforts were dedicated to creating a fluid and easy user experience when setting up a Bee node on the majority of operating systems.

Although the release was originally planned for Q1/2022, the completion of the Bee new UX is now planned for Q2 of this year. An overview of the goals this important task entails, their meaning and current status are provided below.

# What will be done, what it will mean for Swarm and where we are now

# Goal 1

In the majority of cases, it will be possible for any crypto enthusiast with an interest in Swarm to set up and run a Bee node on Mac, Windows or Linux in under 30 minutes (both on mainnet and testnet).

Providing an intuitive and easy user experience will benefit the network as a whole, as it will remove the barriers to running a Bee node. As a consequence, we can expect more nodes, more capacity, more available content and higher network security.

**Current status:**

To achieve the goal of creating an easy node setup process, the development team added **two new options for running a Bee node**. Both options are fully completed and the related documentation is currently being drafted.

Here’s what you can expect from the new Bee options:

- **Ultra-light node**

Running an ultra-light node will give you limited functionalities. It will immediately connect to the Swarm network, but will only allow you to download files. Files cannot be uploaded to the network, and the node is also excluded from any incentive scheme. The ultra-light node can always be upgraded to a light-node.

- **Light node**

Once you set up your wallet and top it up with some BZZ tokens, your ultra-light node will upgrade to a light-node. A light node will allow you to:

- access data from the network
- store data on the network
- manage postage stamps
- manage a chequebook

A light-node **does not earn any incentives**, since it does not participate in forwarding or storing chunks for other members of the Swarm network. This is a very resource-friendly software and can be run on your personal computer.

A lot of effort has gone into the node setup, management and crypto onboarding to make it a smoother and more seamless experience.

# Goal 2

An external audit of the software update will assess the security of user funds.

**Current status:**

The completion of this goal hinges predominantly on the availability of external auditors. At the moment, all eligible auditors are fully booked and we are actively looking for a solution.

# Goal 3

With Goal 3, several well-documented ways of monitoring and interacting with a Bee node will become available.

**Current status:**

There are already several Swarm working tools available that make it possible to monitor and interact with a Bee node, but they are at varying stages of being documented. Currently available are the [Dashboard](https://github.com/ethersphere/bee-dashboard) for UI control, the [CLI tool](https://github.com/ethersphere/swarm-cli) and the [browser extension](https://github.com/ethersphere/swarm-extension). There is also the [Bee API](https://docs.ethswarm.org/docs/api-reference/api-reference) and a complementary [Javascript library](https://bee-js.ethswarm.org/docs/) to provide easy access to the API.

# Goal 4

Everything needed for an easy gateway setup is completed and available:

- It is possible to run a full node or a light node as a gateway node.
- The [gateway-proxy](https://github.com/ethersphere/gateway-proxy) solution is available to make the deployment of gateways easy and the management of postage stamps automated. This solution is based on our experience of running gateway nodes.

**Current status:**

All components are finished and working, except for a comprehensive documentation, which is currently being written.

# Next up: incentives

After achieving the goals described above, **all efforts will be steered towards completing and refining economic incentives for node operators** that contribute their storage space. This refined incentive model will make it economically rewarding to run a full Bee node, ensuring that content which is rarely accessed is nonetheless preserved in the Swarm network.

This new capability will also increase the economic sustainability of the network and enable any party to validate and understand the workings of the incentive system. The Research track’s work on this is already well underway with implementation as the next item on the agenda.

More information will be available in the following weeks so tune in to Swarm’s channels and never miss out on any of the latest updates.
