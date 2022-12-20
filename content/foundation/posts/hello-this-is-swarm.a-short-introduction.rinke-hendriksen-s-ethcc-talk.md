+++
banner = ""
categories = ["Events"]
date = 2022-01-28T04:00:00Z
description = "The text below is a recap from Rinke Hendriksen’s EthCC [4] talk “Hello World, Swarm” from July 2021. In it, he gives a concise but complete introduction to the inner workings of the Bee nodes that make up the Swarm network."
references_and_footnotes = []
title = "Hello, this is Swarm. A short introduction. Rinke Hendriksen’s EthCC Talk"

+++
_The text below is a recap from Rinke Hendriksen’s EthCC \[4\] talk “Hello World, Swarm” from July 2021. In it, he gives a concise but complete introduction to the inner workings of the Bee nodes that make up the Swarm network._

![](https://miro.medium.com/max/1400/1*kEa42VOqWzrrCEsh11EBpA.jpeg =700x368)

Ethcc 4, Paris 2021

# Swarm, a global hard drive

Rinke sees Swarm as a global hard drive hosted by computers across the globe, which collaborate because they are incentivised to do so. Just like a normal computer, files and websites can be uploaded and downloaded to and from Swarm.

The difference is that uploaded files are split into smaller pieces of data called chunks and distributed to nodes all over the world. Downloading in this context is essentially requesting these pieces and puzzling them back together, Rinke explained. It is only for the person who requests specific content that these chunks make sense.

![](https://miro.medium.com/max/1400/0*lc8sUQZnG5YrqIGh =700x404)

Being this global hard drive gives Swarm some unique properties listed in the figure below.

![](https://miro.medium.com/max/1400/0*cj0jFgzzwVevufS2 =700x402)

# How Swarm works

The first thing to keep in mind, Rinke began the next section, is that Swarm is not a regular piece of software. It doesn’t just run on one computer but it is a collaboration of nodes who “talk” the same protocols and run the same software, called Bee.

He continued by listing the benefits of becoming a Swarm node operator: _“There are two reasons why a person would run their own node. The first is that they get access to the Swarm network, so they can upload and download files. And if you have an old computer lying around you can actually earn some money from your spare bandwidth and hard drive capacity”._

The second important thing about Swarm is that its network uses a specific type of a distributed hash table called Forwarding Kademlia. Let’s say Alice (address 0000) wants to send a message to Dave (address 1111). The question here is, what kind of a connectivity pattern does Alice have to follow to always be able to send a message to Dave?

![](https://miro.medium.com/max/1400/0*jS63me2YRGL6Ai6U =700x399)

She first divides the network in half: one half are the nodes whose address starts with 0 and the other half are addresses that start with 1. She makes one connection to the part of the network with the different first bit (Bin 0).

![](https://miro.medium.com/max/1400/0*sW2cfTqJPkGrXaxe =700x402)

Alice then divides her part of the network in two as well. By doing so she splits her part of the network into nodes with the same second bit (00) and into nodes with a different second bit (01). She then once again makes one connection in the part of the network called Bin 1.

In the last instance, she splits her quarter of the network to single out nodes with a different third bit (001) and makes one connection in the part of the network called Bin 2. All that remains is a part of the network called nearest neighbourhood. These are nodes with a very similar address and Alice connects to all of them. This is how Alice orders her network.

![](https://miro.medium.com/max/1400/0*QbX8tia5W6PDGcDn =700x401)

But it still doesn’t answer the question of how she connects to Dave. Alice has connected to a node with an address 1001. Let’s call that node Bob. Now, Swarm can’t guarantee that Bob is directly connected to Dave. But if he follows the exact same logic of connecting to different bins, he’ll be able to forward the message to nodes with an address more similar to Dave’s.

![](https://miro.medium.com/max/1400/0*qPhE0utiPC-e2_g6 =700x401)

What happens is explained in the figure below. Alice sends a message for Dave to Bob. Bob still doesn’t know who Dave is but he does know Carol, who is more likely to know Dave. He forwards her the message and since Carol actually knows Dave she sends the message to him. The exact opposite route happens when Dave sends a message back to Alice.

![](https://miro.medium.com/max/1400/0*SfqTD8K9yLjaHo0v =700x395)

# Chunks are the key

But Swarm nodes don’t just forward messages. This is reserved for uploading and downloading data. They also store chunks, which contain data and have an address. As Rinke pointed out in his talk, chunk addresses are very important because they determine which nodes will store them. Nodes will store chunks with similar addresses. Also, the same chunk will be stored by multiple nodes to provide redundancy in case nodes come and go from the network.

The chunk address is provided by the hash of the data or is attested to by a digital signature of the uploader to provide the integrity of the data.

![](https://miro.medium.com/max/1400/0*CoUsPRLMuYilkRNm =700x399)

In this context, Rinke added, uploading data to Swarm is routing a message to the chunk’s neighbourhood, where the message is basically the chunk. This message is answered with a receipt confirming the storage of the data. Downloading, on the other hand, is sending a chunk request message to the neighbourhood, which is answered by sending the requested chunk.

![](https://miro.medium.com/max/1400/0*hGvUqkK0RtfYVL14 =700x395)

This design has an important consequence. Nobody in the forwarding chain knows who the originator of the request is. The forwarder only knows that the request is coming from the currently requesting node. _“This facilitates the privacy of whoever is downloading via Swarm,”_ Rinke says.

# Why do nodes help each other?

The reason nodes act in this collaborative way is because they are financially motivated to do so. Alice has to pay to receive the desired chunk and the payment amount corresponds to the distance the chunk has to travel. The payment is also dispersed along the forwarding chain so that each node pockets some profit (see figure below). The profit is paid out either in Swarm’s native token, BZZ, or in reciprocal services.

![](https://miro.medium.com/max/1400/0*Ez9B6XGp9i0zmTO9 =700x400)

# What if Swarm runs out of space?

Just like any other hard drive, Swarm has a finite storage capacity. Unlike a regular hard drive, once the content is published it cannot be changed and nobody can revoke access from anybody. Meaning, as Rinke put it, it does not have a deletion operation.

_“Basically, how we do this is that every chunk has a payment reference, which signals the value of that particular chunk. These on-chain payments together with some expected profit measure allows the nodes to order the chunks based on their value. That’s how only the most relevant chunks are preserved in Swarm. And those chunks that are not requested that much eventually get replaced,”_ Rinke laid out Swarm’s “garbage collection” framework. Swarm, therefore, always preserves the content that is the most relevant to preserve at a given moment.

# Swarm and Web3

Although the greater part of the talk revolved around Swarm’s DISC (Distributed Storage of Chunks), the final part of the talk focused on how Swarm actually fits into the Web3 narrative.

![](https://miro.medium.com/max/1400/0*SmcrUmxCPO45_VEs =700x396)

_“Just as the hard drive on its own doesn’t really give meaning to the data, the DISC doesn’t give meaning to the chunks. It’s the data structures and how we interpret those chunks that gives meaning to them,”_ Rinke added.

With the Bee node you can request files, directories, and dynamic content and send messages in a permissionless and private manner. These capabilities together form the puzzle pieces that enable decentralised applications on top of Swarm.

And these applications can be whatever developers choose to build. The sky’s the limit!

# Join Swarm’s community

* Follow community news on[ Twitter](https://twitter.com/ethswarmhive), and development news[ here](https://twitter.com/ethswarm).
* Discussions about Swarm can be found on[ Reddit](https://www.reddit.com/r/ethswarm/).
* All tech support and other channels have moved to[ Discord](https://discord.gg/wdghaQsGq5)!
* Please feel free to reach out via [info@ethswarm.org](mailto:info@ethswarm.org)
* Join the newsletter! [**Subscribe here**](https://www.ethswarm.org/newsletter.html).
* Subscribe to the[ Swarm Foundation YouTube channel](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos).