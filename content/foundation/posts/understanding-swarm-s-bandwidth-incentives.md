+++
banner = ""
categories = ["Development Updates"]
date = 2021-12-21T04:00:00Z
description = "Swarm works the way it does because it is formed of many independent nodes that collaborate to store and deliver your data. But why do these nodes collaborate and can’t the system be abused? Understanding Swarm’s bandwidth incentives is key to answering these questions."
references_and_footnotes = []
title = "Understanding Swarm’s bandwidth incentives"

+++
_By_ [_Rinke Hendriksen_](https://twitter.com/EknirNL/)_, Swarm Research Track Lead_

> _Swarm works the way it does because it is formed of many independent nodes that collaborate to store and deliver your data. But why do these nodes collaborate and can’t the system be abused? Understanding Swarm’s bandwidth incentives is key to answering these questions._

Swarm’s system of incentives consists of three components. One component takes care of counting the relative bandwidth consumed and provided, while the other two components are jointly responsible for settling the debt when one peer has consumed significantly more bandwidth than the other.

Bandwidth incentives aim to:

* Ensure that nodes collaborate in routing chunks;
* prevent spam requests in the network; and
* ensure frequently accessed content is cached across the network.

In what follows, I will explain all three components separately, to illustrate how they work and why they were designed in this way.  
If you are a node operator, you will be able to use this information to help understand why your node has been rewarded from participating in the swarm. As a Swarm user who contributes data or fetches some, you will understand why BZZ is used for downloading and uploading content.

This blog is part of a series, explaining why nodes behave the way they do. I don’t intend to communicate new information, merely to present what has already been communicated with more context and in a friendly format. I truly believe that Swarm is something special and by understanding Swarm in more depth, you will hopefully further appreciate why.

If you are reading this blog, I assume you already have a basic knowledge of Swarm. If not, please watch [my talk at EthCC](https://youtu.be/d2TX5AtBcQk?t=363) and read [Swarm’s whitepaper](https://www.ethswarm.org/swarm-whitepaper.pdf).

# Swarm Accounting Protocol

The Swarm Accounting Protocol (SWAP) is at the heart of Swarm’s bandwidth incentive system and is active when data is uploaded or downloaded from the network. SWAP’s basic functionality is simple: nodes in the Swarm network keep tabs on each other by recording the relative bandwidth consumed and provided. As an illustration, imagine a situation in which my node requests a chunk from another node to which it is connected. When the chunk is delivered to me, my node keeps a record that it owes something to the node that provided the service. The node on the other side of the line also keeps a record of the service delivered.

Since a normal operation of a Swarm node is to forward many chunks, it is likely that any such requests will soon be offset by a successive equivalent request in the opposite direction. When that service is delivered, my node simply updates its account with the other node, and the other node does so with my node’s account. The balance updates could therefore cancel each other out and result in a net-zero SWAP balance. This is how SWAP enables a service-for-service exchange.

Now, let’s go from the example to reality. In Swarm, requesting or uploading a file constitutes many small requests for chunks and each chunk request passes many nodes before it arrives at its destination. The price for any chunk depends on the distance (as a proxy for the number of expected hops) of the requester to the chunk. The closer a node is to a chunk, the lower the price. Swarm’s routing algorithm ensures that any node in the forward chain is closer than the previous one. Hence, any successive forwarder pays less to request a chunk than what it receives for it when delivered. As such, nodes are thus motivated to help route the chunks.

To benefit even more, nodes can decide to cache a chunk when forwarding responses to retrieve requests. Any successive request for this chunk, then, can be immediately delivered — saving the forwarder the cost of purchasing the chunk from downstream. This mechanism makes it incentive-aligned for popular content to spread throughout the network, reducing latency and allowing it to stay available.

But what do nodes do with a positive SWAP balance? If the debt is large, it may be settled for BZZ, as explained in the next section. But even a small positive balance is useful. Such a balance can not only be used by the node operators themselves to request content, it also helps the node operator to provide a good quality of service because, with a sufficient outstanding balance with their peers, they are more likely to be able to serve requests.

# Settling a large outstanding debt

The Swarm Accounting Protocol is intended to offset debts between forwarders, i.e. nodes that don’t request or upload data to the network themselves. Originators of requests, on the contrary, are expected to have significant negative balances with other nodes in the network too large to be offset by reciprocal service. An excessive negative balance will prevent further consumption, so before sending any further requests to their peers, Swarm nodes must settle their debt. They can either do so promptly by sending a cheque or simply rely on the amortisation of debt over time.

# Time-based amortisation

Nodes in the Swarm network gradually amortise each other’s debt over time. This means that all nodes have a certain amount of bandwidth which they can use without providing any reciprocal service. This feature allows nodes to request content for free. This is useful when you want to share content with a friend who is not yet onboarded to the Swarm ecosystem.

The second reason that time-based amortisation is important in the Swarm is because it allows forwarder nodes to have more bandwidth available to serve their upstream peers without the need to commit funds (to write cheques, see below) to their node. This significantly increases the safety of running a Swarm node because non-committed funds are not at risk of being lost. It allows Swarm to be much safer because it effectively short-circuits many potential attacks.

The third and final reason is more holistic, from an architectural perspective. Without time-based settlements, a connection to the blockchain would be a critical dependency for Swarm to function. With time-based settlements, the network’s functionality is independent of the functionality of the Ethereum’s xDai sidechain (needed for cheque settlements). This will make it much easier in the future to upgrade the bandwidth-incentive mechanism or use a different chain for settlement. In the unlikely case that xDai stops functioning, Swarm will continue to provide a service.

# Cheque settlements

Originators of a request have the possibility of settling outstanding debt with a cheque. A cheque is a cryptographically signed piece of data that can be presented to a smart contract in exchange for BZZ tokens. After receiving a cheque from a peer, a node immediately adjusts the balance of its account with that node, applying the available bandwidth credits, so that any ongoing download is speeded up.

Cheques can be presented to a smart contract that has been deployed by the creator of a cheque. Multiple cheques from the same creator can be combined so they are efficiently processed by the blockchain. Upon receiving a cheque, the chequebook smart contract ([source code here](https://github.com/ethersphere/swap-swear-and-swindle)) validates the digital signature and pays out the amount requested as long as it has sufficient BZZ balance.

Just as with real-life cheques, a cheque may bounce due to insufficient funds. This is the reason that waiting to cash cheques presents a risk that must be weighed by the beneficiary node against the benefit of potential savings on transaction costs by combining it with subsequent cheques.

In normal circumstances, however, such a risk should not materialise, because nodes are not programmed to write more cheques than their chequebook balance allows. It is trivial for Swarm nodes to detect such a behaviour and when a node does this, it can decide to penalize the misbehaving node to protect the health of the network.

# Fin

I hope this blog post has helped you better understand why Swarm works the way it does. As mentioned in the beginning, this blog post is the start of a series in which I will highlight specific aspects of Swarm and provide context around why they work in the way they do. Swarm is an open-source project, where anyone is welcomed to be part and make the community, contribute in various permissionless ways and take ownership over the project. If, after reading this blog, you have questions or suggestions, you can discuss them in Swarm’s community-operated [Discord server](https://discord.gg/wdghaQsGq5). You can also find me there as @eknir.