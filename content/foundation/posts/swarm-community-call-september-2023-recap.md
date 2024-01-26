+++
banner = "/uploads/SCC-recap-sept.png"
images = [ "/uploads/SCC-recap-sept.png" ]
categories = [ "Events" ]
date = 2023-10-04T00:00:00.000Z
description = "In the past month, the most notable release was Bee 1.17.4. It features an advanced Bee logging system for the pushsync and the retrieval protocols, vital components responsible for syncing chunks among nodes. Since this is a breaking change, all node operators should update to the latest version of Bee as soon as possible, if they haven't yet."
references_and_footnotes = [ ]
title = "Swarm Community Call, 28 September — Recap"
_template = "post"
+++

The September Swarm Community Call started with Niki Papadatou and Esad Akar presenting the core updates and setting the stage for an information-packed call.

In the past month, the most notable release was **[Bee 1.17.4.](https://blog.ethswarm.org/foundation/2023/bee-1-17-4-pre-announcement/)** It features an advanced Bee logging system for the pushsync and the retrieval protocols, vital components responsible for syncing chunks among nodes. Since this is a breaking change, all node operators should **update to the latest version of Bee** as soon as possible, if they haven't yet.

Other improvements include the introduction of an immutable default batch type, which ensures that any tampering with the node doesn’t accidentally override stored data. Additionally, a new configuration enables a fresh Bee install to initiate the node in ultra-light mode, sidestepping potential errors. On the data upload front, uploads are made to the local Bee node first, rather than directly to the Swarm network.

The main focus of development teams is now on the ongoing hardening phase, while streamlining internal development processes. The transition to a support network for the testnet (move to Sepolia) is also on the agenda.

## The price oracle is on the testnet

But the call’s main news was that the long-awaited [decentralised price oracle](https://blog.ethswarm.org/foundation/2023/oracle-overview/) is now in the testing phase. As Callum Toner explained, the oracle aims to ensure that the price of storage in Swarm isn't volatile, preventing sudden spikes or drops that could impact users. Even under extreme conditions, the price cannot more than double in less than a year.

As the network grows and more data is stored, the system will naturally become more stable, allowing for potential adjustments to the oracle's sensitivity.

The primary advantage of this decentralised price oracle is that the storage price in Swarm will be determined purely by its internal supply and demand. Any questions, feedback or observations can be directed at the team on the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286), while you are welcome to read more about the price oracle and its mechanics [here](https://blog.ethswarm.org/foundation/2023/oracle-overview/).

## Making the most out of Swarm

While working with Web3 can be tricky at times, Swarm offers developers a plethora of tools to ease their work. During the call, Noah Maizels delved into the various [JS tools available](https://blog.ethswarm.org/foundation/2023/swarm-ecosystem-tools-update/#ethercomb-status--under-development) for working with Bee and building on Swarm, as well as providing a sneak peek at tools still under development.

Here are some [tools](https://blog.ethswarm.org/foundation/2023/swarm-ecosystem-tools-update/#ethercomb-status--under-development) you can already use (check out the [GitHub repo](https://github.com/ethersphere) too):

- **[BeeJS](https://github.com/ethersphere/bee-js):** A Node.js package that allows developers to seamlessly interact with a Bee node, bypassing the need to directly interact with an HTTP API.
- **[Swarm CLI](https://github.com/ethersphere/swarm-cli):** A command-line tool designed for an intuitive node interaction. A new feature, the “status” command, provides pertinent information about the node's current state.
- **[Ether Proxy](https://github.com/ethersphere/etherproxy):** Tailored for node operators with multi-node setups. It reduces the number of RPC calls preserving resources with providers like Infura.
- **[Bee Dashboard](https://github.com/ethersphere/bee-dashboard):** Serving as a frontend for the Bee node, the dashboard powers the Swarm Desktop app. New features include the ability to top up and dilute stamp batches and an added tooltip explaining the mutability option.

**Tools Under Development:**

- **[Ethercomb](https://github.com/Cafe137/ethercomb):** A CLI tool designed to automate the creation of a multi-node Docker setup.
- **[Etherjot](https://github.com/Cafe137/etherjot):** This tool facilitates the creation and management of blogs on Swarm.
- **[Gateway Proxy Tool](https://github.com/ethersphere/gateway-proxy):** This tool offers features such as stamp management and enables users to create access to Swarm without having a Bee node.
- **Ethercast:** Still in its infancy, this tool promises live streaming capabilities directly on Swarm.

## More neighbourhoods, more chances to win

Recently, the Swarm network again doubled in capacity, the number of chunks and also the number of neighbourhoods, signalling a strong demand for the network’s services.

This also has left some neighbourhoods underpopulated but Bee 1.17.4 brings node operators a great feature where they can choose less populated neighbourhoods to increase their chances of [winning rewards](https://blog.ethswarm.org/foundation/2023/state-of-the-network-august/) in the Schelling game. There’s also a new page in [Swarm scan](https://swarmscan.io/) which shows the list of underpopulated neighbourhoods that can serve as a guide for node operators.

## The Full Moon grants wave is here

Besides the great news of the price oracle coming live on the testnet, another exciting announcement concerned the new wave of grants. According to Costanza Gallo, the **Full Moon grant wave is making available 300,000 BZZ** for different types of applications with a common goal of empowering user data and control. [You can see the conditions and the application form here](https://my.ethswarm.org/grants).

## Swarm 2.0: A new dawn on the winter solstice

The last announcement of the call was a surprise one: on this year’s winter solstice, all eyes will be on the Bee, on Swarm and on its growing ecosystem, as **21 December** will mark the birth of **Swarm 2.0**. We will commemorate this occasion with a special event, showcasing the full potential of the Swarm, announcing strategic partnerships, presenting the growing ecosystem and celebrating the beginning of a new Swarm era. **Therefore, this is also your call for participation: Swarm is all of its users, it is owned by no-one and belongs to everyone. **

## Community talk – FaVeDB

The call’s last segment was, as always, reserved for projects that stem from Swarm's avid community. Presented by Sabyasachi Patra and Tadej Fius from Datafund, [FaVeDB](https://github.com/fairDataSociety/FaVe/discussions/34) is a decentralised vector store that runs on top of [FairOS](https://docs.fairos.fairdatasociety.org/docs/) and the Swarm network. It provides advanced tooling, presently in development, that offers an efficient way to query and manipulate large data sets and implement search or recommendation features for their applications in a GPT-like way.

It aims to ensure data redundancy, fault tolerance and enhanced security, while its p2p nature provides data availability even if some nodes fail.

Enterprises, including e-commerce companies, content providers, healthcare organisations, and financial institutions, can utilise FaVeDB for various applications such as recommendations, fraud detection and data analysis. Academics, researchers and students can explore its algorithms and data structures. The project welcomes contributions from the open-source community to enhance its features and performance.

You can check out FaVeDB [here](https://github.com/fairDataSociety/FaVe/discussions/34).

## Next Swarm Community Call is 26 October

And last but not least, while our monthly recap captures the key highlights, there's nothing quite like being there live. Dive into engaging Q&As, enjoy the spirited chat, and share in the collective purpose of moving the project forward. At Swarm, we value every member's contribution and firmly believe that just by being there, you can amplify this strong sense of community.

So, [mark your calendars](https://www.addevent.com/event/Ky18866277). Join the team and other Swarm enthusiasts for the next call on 26 October at 17:00 CET on the [Swarm Foundation Discord](https://discord.gg/yYqF3kSN?event=1154426576025432156). See you there!
