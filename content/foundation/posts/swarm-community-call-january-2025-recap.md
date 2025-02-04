+++
banner = "/uploads/SCC-jan-recap2025.png"
images = [ "/uploads/SCC-jan-recap2025.png" ]
categories = [ "Events" ]
date = 2025-02-04T00:00:00.000Z
description = "The January Swarm Community Call kicked off 2025 with significant updates across core development areas, highlighting planned performance improvements and the upcoming multichain feature."
references_and_footnotes = [ ]
title = "Swarm Community Call, 30 January – Recap"
_template = "post"
+++

The January Swarm Community Call kicked off 2025 with significant updates across core development areas, highlighting planned performance improvements and the upcoming multichain feature.


## Bee 2.4.0 recent release and future plans

Niki Papadatou opened the session with news about the recent release of [Bee 2.4.0](https://github.com/ethersphere/bee/releases/tag/v2.4.0), which honours ldeffenb, a cherished member of the Swarm community who recently passed away. The release includes his personal motto, "Share the knowledge," in the startup logs, embodying the spirit and values also upheld by the Swarm Foundation.

The 2.4.0 release also includes a fix for a bug where push-sync requests would get stuck due to connectivity issues with storer neighborhood nodes.

The development team has been intensively working on upload and download speed improvements, reported Niki Papadatou. Initial testing revealed several challenges, including unpredictable chunk syncing freezes, protocol bottlenecks for large files, and receipt issues related to reserve doubling. The team has implemented fixes that have already shown promising results, with speeds now steadily reaching between 1-1.5 MB/s and occasional peaks exceeding 2 MB/s.

Future optimisations will target:
* Enhanced peer selection for more efficient data movement
* Implementation of the QUIC protocol to improve connectivity in regions where this is particularly necessary 
* LevelDB performance tweaks to address database access limitations

The team also announced that data availability will be their next major focus area following these speed improvements.


## Multichain development nears completion
Callum Toner shared progress on Swarm's multichain capabilities, reporting that development is approximately 80% complete. This feature will enable users to purchase storage on Swarm using various cryptocurrencies across different chains, with automatic conversion to BZZ tokens.

The initial release will support all EVM-compatible chains and Solana, with the potential for additional chains in future updates. The system has been designed to handle liquidity issues that might arise from bridges or swaps between chains. A comprehensive write-up detailing the implementation will be released ahead of the feature's launch.


## In focus: [Bee-JS](https://github.com/ethersphere/bee-js) library improvements

Áron Soós presented significant improvements to the Bee-JS library, aimed at enhancing the developer experience. Key updates include:
* **Universal byte class:** This new base class simplifies data handling, eliminating the need for manual encoding or casting while ensuring interoperability between different classes.
* **Elliptic classes:** Private keys, public keys, Eth addresses, and signatures are now subclasses of bytes and can be used very similarly.
* **Swarm classes:** References, identifiers, and chunks, are also now subclasses of bytes, with convenient methods for handling them.
* **Swarm primitives:** Now includes the Mantaray node and Merkle Trees, with low-level tools for node management.
* **New “Overview” section:** This new section in the READ.ME details all available BeeJS  methods, maps them to Bee endpoints, and indicates the Bee modes where each one can be used.
* **Streaming API**: This new API supports streaming arbitrary data from the browser and node.js.
* **Manifest API:** Allows users to create, explore, and work with Mantaray nodes, even in the browser.
* **Improved test suite:** The test suite is more comprehensive, running tests against mocked, full staking, light, and ultra-light node environments.
* **Replaceable parts:** BeeJS is modular under the hood, minimizing dependencies on vendor code. For example, the HTTP library, Axios, is isolated in a single file and can be easily replaced with a better implementation.  
* **Strict type checks**: BeeJS aims to eliminate 'any' types in TypeScript, enforcing better type safety.

The library will be released as version 9, maintaining familiar functionality while introducing new features. The team also plans to update the BeeJS documentation website and the create-swarm-app package to reflect these changes.


## **Community talk: Solar Punk's multimedia libraries**

András Arányi from [Solar Punk](https://solarpunk.buzz/) presented their recently released [multimedia libraries](https://solarpunk.buzz/decentralized-multimedia-libraries-launched/), developed as part of their fellowship with the Swarm Foundation. These libraries provide building blocks for:
* Audio and video streaming
* Live group chat 
* Comment wall system

The team announced a partnership with [Galaxis](https://galaxis.xyz/), a decentralised community platform, to showcase these libraries' capabilities. A new developer community has just been launched on Galaxis, serving as a future showroom for the libraries' features and facilitating community discussions.

Some of the libraries have already been battle-tested through various implementations, including the Devcon.Buzz app (at Devcon 2024 in November), demonstrating their capability for private communications. They are designed to work seamlessly with Swarm's existing infrastructure, requiring no special node configurations.
