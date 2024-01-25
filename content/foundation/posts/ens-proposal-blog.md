+++
banner = "/uploads/ens_blog.jpeg"
images = [ "/uploads/ens_blog.jpeg" ]
categories = [ "Ecosystem" ]
date = 2023-08-23T03:00:00.000Z
description = "The Swarm Foundation made a proposal to implement ENS on Swarm, a full-blown name resolution service handled completely off-chain yet in a cryptographically provable way allowing for trustless provision in a decentralised environment that would address two of issues of the current ENS architecture"
references_and_footnotes = [ ]
title = "ENS on Swarm Decentralised Storage"
_template = "post"
+++

## Proposal to implement ENS on Swarm

The Swarm Foundation made a [proposal to implement ENS on Swarm](https://discuss.ens.domains/t/ens-on-swarm-decentralized-storage/17642), a full-blown name resolution service handled completely off-chain yet in a cryptographically provable way allowing for trustless provision in a decentralised environment that would address two of issues of the current ENS architecture:

1. To significantly decrease the fee for write operations
2. To improve the availability of the service

There are three components at play in this proposal:

### Off-Chain ENS Resolvers: Enhancing Efficiency and Availability

The proposal introduces off-chain ENS resolvers as an alternative to on-chain interactions. By utilising the Single Owner Chunk (SOC)-based Feed concept of Swarm, [data can be efficiently addressed and resolved off-chain](https://github.com/fairDataSociety/fdp-contracts/blob/feat/signatures/contracts/signatures/SocSig.sol). This approach reduces fees for write operations and enhances the availability of the ENS service ensuring trustless provision in a decentralised environment.

### User Record Handling: Empowering User Control

Management of user records and metadata is streamlined in this proposal. Instead of setting up new on-chain resolver contracts, users can upload and version their records off-chain. This results in cost-effective and faster solutions compared to traditional on-chain management. Retrieval of data is achieved through a calculated node topic within the feed, giving users real-time control over their records.

### Moving ENS Registry Data Off-Chain: Expanding Possibilities

Finally, the proposal envisions moving ENS Registry data off-chain. The registry owner maintains a service feed that stores Registry-related information and resolver-related metadata. Ethereum addresses of trusted TLD service feeds act as points of interaction, eliminating the need to hard-code contract addresses. This streamlined approach enhances flexibility and scalability within the ecosystem.

If this has intrigued you, and you want to read more about it, you can check the full proposal and join the conversation [here](https://discuss.ens.domains/t/ens-on-swarm-decentralized-storage/17642).
