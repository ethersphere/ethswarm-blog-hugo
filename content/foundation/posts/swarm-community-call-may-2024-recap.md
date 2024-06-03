+++
banner = "/uploads/scc-may-recap1.png"
images = [ "/uploads/scc-may-recap1.png" ]
categories = [ "Events" ]
date = 2024-06-3T00:00:00.000Z
description = "With the recent release of Bee 2.1 came a refactored localstore that brings increased stability and performance and a lower level of chunk loss. "
references_and_footnotes = [ ]
title = "Swarm Community Call, 30 May – Recap"
_template = "post"
+++


## Better performing localstore 

With the **recent release of Bee 2.1** came a refactored localstore that brings increased stability and performance and a lower level of chunk loss, Niki Papadatou explained. The new release also includes a new DB repairing reset command which will scan the nodes reserves and fix any corrupted chunks. Node operators should make sure to **run this command** **just following the upgrade to the new version**, for each node, one by one, on the same disk. 

This upgrade will vastly decrease the amount of freezing, which means node operators will have better chances of winning, since they’ll be able to participate in the Schelling game, instead of being frozen out of the game entirely.  


## What to expect in Bee 2.2?

The upcoming version will merge the debug API and then the Bee API, leaving only one unified API in Bee 2.2. The latter will feature an access control tree. This is a data structure that stores access control information for certain nodes, and is used to determine whether a node has permission to access a particular source.

Support for neighbourhood hopping is coming as well, which enables moving a node to another neighbourhood without the need to pay for the stake. Under certain conditions node operators will be allowed to withdraw their stakes. 


## Get ready for a whole week of Swarm Summit goodness

**Swarm Summit** is coming to Ljubljana, Slovenia, on [20–21 June](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/). Even though the event will last for two days, a whole week will be dedicated to activities surrounding the event. The days leading up to the Summit will be reserved for hacking, followed by [a party after the event](https://www.kinosiska.si/en/dogodek/modeselektor/). You’ll also be able to chill with the team on 22 June at Lake Bled, soaking up the sun and the fairytale-like surroundings of the lake. 

As for the programme, it will be chock full of interesting and inspiring talks that will showcase just what can be done with Swarm at this stage, as well as where the development is headed. The topics will range from media streaming to transcoding services, content incentives, data availability plans, and decentralised AI, and touch upon specific solutions, like cross-chain postage batch purchase, self-governed Digital Assets Monetisation on Swarm, a decentralised file and folder management tool from your own cloud, running a Swarm node inside a browser or light node as a mobile app, and much more. 

There will be a **[live stream](https://streameth.org/swarm)** of the majority of the event, but nothing beats an in-person experience in the vibrant and relaxed city of Ljubljana. Head [here](https://blog.ethswarm.org/foundation/2024/swarm-summit-2024-upload-the-future/) to read more about the Summit, **[RSVP](https://www.meetup.com/ethereum-swarm/events/301034793/)** and stay alert for posts revealing the full schedule in the coming days.  

<div style="text-align: center;">
    <a href="https://www.meetup.com/ethereum-swarm/events/301034793/" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #F7931A; text-align: center; text-decoration: none; border-radius: 5px;">Swarm Summit RSVP Now</a>
</div>


## Community Talk –  Ensuring your stored Bee content is correct

In the Community Talk, community member Avik Saikat demoed the Python version of the binary, multiple module, which helps calculate the Merkel tree and verify the integrity of data uploaded to a Bee node. By calculating the chunk address and utilising the module's functions, it’s possible to verify the data uploaded to a Bee node and ensure its authenticity by comparing the generated hash with the one received from the Bee node. This process ensures data integrity and validates the originality of the uploaded content. 

The next Swarm Community Call will be held on the last Thursday of July, which is 25 July, as the Summit is taking over the June events space. 

See you there!