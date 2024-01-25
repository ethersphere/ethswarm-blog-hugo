+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2021-09-09T04:00:00.000Z
description = """
In August, a new mainnet release happened, fixing bugs from the initial Swarm 1.0 release, and improving the performance and stability of the network. Some new features were added too. Make sure to update your nodes and check the release notes.

"""
references_and_footnotes = [ ]
title = "Monthly Development Update — August 2021"
_template = "post"
+++

In August, a new mainnet release happened, fixing bugs from the initial Swarm 1.0 release, and improving the performance and stability of the network. Some new features were added too. Make sure to [update your nodes](https://docs.ethswarm.org/docs/working-with-bee/upgrading-bee/) and check the [release notes](https://github.com/ethersphere/bee).

The ecosystem track was busy organising the Swarm Summer School ’21. This 5-days-long event was packed with interesting talks, presentations, and workshops. Each day focused on a specific topic, relevant to people who build their projects on Swarm. You can watch the recordings of the event on Youtube.

## **Bee Track**

- Version 1.1.0 went live to mainnet
- Working on improving network stability and reliability

## **DevOps Track**

- Release and deployment of the [Bee](https://github.com/ethersphere/bee) (v1.1.0).
- Released a new version of [Bee Helm chart](https://github.com/ethersphere/helm/tree/master/charts/bee) (v0.10.8).
- Released a new version of [Beekeeper Helm chart](https://github.com/ethersphere/helm/tree/master/charts/beekeeper) (v0.3.3).
- Released a new version of [Beekeeper](https://github.com/ethersphere/beekeeper) (v0.8.3).

## **JS Track**

1\.) Released three new versions of [Bee-js](https://github.com/ethersphere/bee-js), the latest is 1.2.1

- Bee 1.1 version compatibility
- The Stamps API endpoints moved to the Debug API
- Added pending transaction management support
- Bug fixes and improvements

2\.) Released a new version of [Swarm CLI](https://github.com/ethersphere/swarm-cli), the latest is 1.3

- Bee 1.1 version compatibility
- Add immutable flag to stamp buy command
- Better debug API handling

3\.) Released three new version of [Bee Dashboard](https://github.com/ethersphere/bee-dashboard) the latest is 0.7

- Bee 1.1 version support
- UX and style improvements, new sidebar design

4\.) Released a new library called [mantaray-js](https://github.com/ethersphere/mantaray-js) that lets you work with Swarm Manifests from Javascript.

## **Research Track**

- The research track expanded with a new full-time member. Eknir, previously the Product Owner of the Bee track, is excited to start working with the research team. He will be contributing his time to specific research and creating a more structured approach towards anything research-related in Swarm
- The research team picked up the thread again for inventing a method to redistribute the income from the postage stamp system to the storer nodes. We aim to deliver an achievable method to doing this and will work closely together with the Bee team to validate our ideas. In our first official meeting on this topic, we considered [https://swarmresear.ch/t/postage-payment-redistribution/66](https://swarmresear.ch/t/postage-payment-redistribution/66 "https://swarmresear.ch/t/postage-payment-redistribution/66") and identified that the main shortcoming of this idea is that we cannot assume that the majority stake in a neighborhood is honest
- The research team is actively collaborating with the Bee team on analyzing how syncing of chunks happens in the real network and identify shortcomings in order to propose solutions in a structured manner

## **Ecosystem Track**

- Swarm Summer School ’21 was organized. This 5-days-long event consisted of many interesting talks and workshops tackling the following topics: social, business, technology, and legal. On the last day of the school, a demo day was organised where projects could present their ideas to the Swarm team and other school participants. If you missed school, [you can watch the recordings of the event on YouTub](https://www.youtube.com/playlist?list=PL6fQnFAjtuY-t9UhPHaDCv7wbb7fFP266)e.
