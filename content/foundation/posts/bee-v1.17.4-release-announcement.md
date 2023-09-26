+++
banner = "/uploads/1-17-4-pre-release.png"
categories = [ "Development updates" ]
date = 2023-09-19T00:00:00.000Z
description = "The 1.17.4 update will be going live later this week. As this release will introduce breaking changes at the protocol level, it is important to update your nodes as soon as possible, so please be on the lookout for the release announcement and ready to update your nodes later this week."
references_and_footnotes = [ ]
title = "Bee v1.17.4 Pre-release Notice"
_template = "post"
slug="bee-1-17-4-pre-announcement"
+++


The 1.17.4 update will be going live on Thursday, September 21, this week. As this release will introduce breaking changes at the protocol level, it is important to update your nodes as soon as possible, so please be on the lookout for the release announcement and ***ready to update your nodes this Thursday***. This version includes some changes which will affect both Swarm developers as well as Bee node operators which are discussed in more detail below. 

⚠️⚠️⚠️⚠️

***Node operators should update ASAP after the Thursday release as this version introduces breaking changes.***

***Full node operators must enable set the `swap-enable` option to `true` if it was not previously explicitly set to `true` to continue to operate as normal since the default value has been set to `false` in this update.***

⚠️⚠️⚠️⚠️

### Pushsync and retrieval protocols updated

The pushsync protocol which manages the syncing of chunks among nodes in the Swarm network and the retrieval protocol responsible for retrieving chunks when they are requested have been updated with improved logging so that problems can now be identified and addressed more easily.

***This is a breaking change*** so it is imperative that you ***upgrade your nodes as early as possible*** so that they can continue participating in the network.


### Default batch type is now immutable

In previous version of Bee, the `immutable` header parameter of the [`/stamps POST`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bamount%7D~1%7Bdepth%7D/post) endpoint for buying postage stamp batches was turned off by default. In this release the `immutable` option has been turned ***on*** (set to `true`) by default. This change was made in order to ensure that stamp purchasers do not unintentionally overwrite their uploaded data by accident, as could happen for data uploaded with the `immutable` option off. You can find out more about how `immutable` batches work [in the docs](https://docs.ethswarm.org/docs/learn/technology/contracts/postage-stamp/#batch-utilisation).


### Default for `swap-enable` set to `false`

The `swap-enable` config option is now by default `false`. This change was made so that when running the `bee start` command after a fresh install without changing any options, the node in ultra-light mode rather than throwing an error. 

⚠️⚠️
Full node operators must enable set the `swap-enable` option to `true` if it was not previously explicitly set to `true` to continue to operate as normal. 
⚠️⚠️

### Default upload type is now deferred

The default header parameter `swarm-deferred-upload` for the [`/bzz POST`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post) and [`/bytes POST`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes/post) endpoints has been set to `true`, changing the default upload type to deferred for all uploads. 

Deferred upload data is first uploaded to the local Bee node before being uploaded to the Swarm network, while non-deferred or "direct" uploads are directly uploaded to the network chunk by chunk.

This change was made as deferred uploads are generally faster, and direct uploads are not required for general use cases.

### Overlay mining option

A new `--target-neighborhood` option has been added to the [Bee configuration options](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration#configuration-for-bee-start). This option can be set to a specific neighborhood by supplying the leading bits of the target neighborhood for which you want your new node to operate in. When this option is set, an overlay address which falls in that neighborhood will be mined and assigned for your new node. The number of leading bits you should use is equal to current depth of the network. 

This option is great for node operators, as it means they can now easily target neighborhoods which fewer nodes, which may increase their chances of winning rewards. Underpopulated neighborhoods and their leading bits can be found at the [neighborhoods page](https://swarmscan.io/neighborhoods) on Swarmscan. 

*Note: As other factors such as stake density can also affect reward chances, operating in an underpopulated neighborhood may not necessarily lead to an increase reward probability.*

In addition to potentially increasing the reward chances by starting up new nodes in underpopulated neighborhoods, doing so also contributes to the stability and data redundancy of the network.

### Stay in the Loop

Make sure to join the [node operators channel](https://discord.com/channels/799027393297514537/811553590170353685) on Discord for the latest announcements on Bee updates and other important information for Bee node operators.
