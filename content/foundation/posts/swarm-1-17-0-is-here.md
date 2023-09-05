+++
banner = "/uploads/bee-1-17-0.png"
categories = [ "Development updates" ]
date = 2023-08-03T00:00:00.000Z
description = "Bee 1.17 is here! This update represents a significant step forward in terms of increased ease of code maintainability and reduced time for new feature development. With the storage incentives rollout nearing completion, the team has in recent months focused on the completion of the 1.17 update. The update will go live by the end of this week, and since it is a breaking update at the protocol level, all node operators should make sure to update their nodes."
references_and_footnotes = [ ]
title = "Bee 1.17 Paves the Way for the Future of Swarm"
_template = "post"
+++

***⚠️IMPORTANT⚠️**: After the 1.17 release node operators should make sure to **update their nodes** as it is a breaking release and the update is required to keep participating in the network. Note that the update for a single
node may take up to 25 minutes on slower drives. Also it is **strongly
recommended** for nodes running on a shared physical disk to only update
a single node at a time, since concurrently updating nodes on the same
physical disk can lead to exponentially longer update times. See the
[<u>release notes</u>](https://github.com/ethersphere/bee/releases) for
more details after 1.17 goes live.*

Bee 1.17 is here! This update represents a significant step forward in
terms of increased ease of code maintainability and reduced time for new
feature development. With the [<u>storage
incentives</u>](https://blog.ethswarm.org/foundation/2022/the-mechanics-of-swarm-networks-storage-incentives/)
rollout [<u>nearing
completion</u>](https://blog.ethswarm.org/foundation/2023/postage-stamp-price-increases-as-swarm-network-reaches-milestone-of-self-sustainability/),
the team has in recent months focused on the completion of the 1.17
update. The update will go live by the end of this week, and since it is
a breaking update at the protocol level, all node operators should make
sure to update their nodes. In addition to the protocol changes, there
are also some minor breaking changes to the Bee HTTP API which we will
cover below. Continue reading to learn more about the background and
motivations behind the changes and improvements introduced in the newest
version of Bee.

**Improvements to Client Architecture**

To understand the motivations behind the Bee 1.17 update we first need a
grounding in the basics of the Bee client architecture. As explained by
Bee team software engineer Esad in his [<u>recent
talk</u>](https://streamyard.com/3tb38vbzv3jv) (starting at minute 24)
at the Swarm summit, the Bee client consists of four main parts, **p2p
communication**, **local storage**, **blockchain connection**, and
**user interface** (the HTTP API). Of these four parts, the 1.17 update
is primarily focused on changes to local storage (and to the
**localstore** component in particular). Local storage is split into two
parts, the localstore and the statestore, which are closely
interrelated. The **localstore** is responsible for the chunk
[<u>reserve</u>](https://docs.ethswarm.org/docs/learn/technology/incentives#storage-incentives),
and for uploading, caching, and removing
[<u>chunks</u>](https://docs.ethswarm.org/docs/learn/technology/disc#chunks),
while the **statestore** is responsible for managing data related to the
node’s state, including an address book of other nodes, [<u>postage
stamps</u>](https://docs.ethswarm.org/docs/learn/technology/contracts/postage-stamp),
and [<u>bandwidth
incentives</u>](https://docs.ethswarm.org/docs/learn/technology/incentives#bandwidth-incentives-swap).

**Accelerating and Simplifying the Development Process**

The pre-1.17 localstore had a
[<u>monolithic</u>](https://en.wikipedia.org/wiki/Monolithic_application)
design in which its various components were all interrelated so that any
change made to one of its components could lead to unintended and
unpredictable effects on other components. Throughout 2022 various
[<u>issues</u>](https://github.com/ethersphere/bee-backlog/issues/41)
related to the localstore’s monolithic design were identified. It became
clear that in order to address these issues, a rewrite of the localstore
was needed which would exchange the monolithic architecture for a
modular one. In addition to solving the various issues linked to above,
this rewrite has multiple other benefits including making the codebase
easier to understand and work with, simplifying and accelerating the
development process, and also making the onboarding process much faster
for developers who are new to the project.

**New Features and Changes for Node Operators and Developers**

In addition to the changes made to the client architecture, the 1.17
update also includes several changes which are relevant to Bee node
operators and Swarm DApp developers. For node operators, **the 1.17
update includes breaking changes at the protocol level, so all node
operators will be required to update their nodes** in order to continue
participating in the network. For Swarm developers, there are **two new
features** they should be aware of. The first is support for multiple
stamp batches for the same chunk. Previously only a single stamp batch
was supported for each chunk. The second new feature is that the
\`stewardship PUT\` endpoint now allows users to configure a stamp to
use for re-upload. This allows pinned content to be uploaded with new
stamps if the old stamp batch expires.

In addition to the breaking changes at the protocol level, there are
also **two breaking changes** made to the HTTP API which Swarm DApp
developers should be aware of. First, the \`/tags\` endpoint has been
added to the main API has been deprecated in the Debug API. The tag
response fields have also changed. Second, the DELETE \`/chunk\`
endpoint has been deprecated, and support for it will be phased out.

**Laying the Foundation for the Future of Bee**

The Bee 1.17 update lays a firm foundation for the future development of
the client. The improved architecture makes it faster and easier than
ever to develop new features for Bee. Those improvements combined with
the ongoing development of the Bee client
[<u>technical</u>](https://github.com/ethersphere/bee-docs/tree/feat-protocols-spec-2)
[<u>specifications</u>](https://github.com/ethersphere/specs) will soon
enable the development of alternative Bee clients which will in turn
strengthen the Swarm ecosystem.
