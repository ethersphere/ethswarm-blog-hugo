+++
banner = "/uploads/general-graphic-3.jpg"
categories = [ "Development updates" ]
date = 2023-09-26T00:00:00.000Z
description = "The Bee client is a powerful piece of software which has been developed to realise the vision of unstoppable decentralised Web3 storage described in the Swarm Whitepaper and The Book of Swarm. Alongside the development of the Bee client is an ecosystem of tools and apps which are being developed to make it easier for developers and content creators to work with Bee. "
references_and_footnotes = [ ]
title = "Swarm Tools Overview and Updates"
_template = "post"
slug="swarm-ecosystem-tools-update"
+++


The Bee client is a powerful piece of software which has been developed to realise the vision of unstoppable decentralised Web3 storage described in the [Swarm Whitepaper](https://docs.ethswarm.org/swarm-whitepaper.pdf) and [The Book of Swarm](https://docs.ethswarm.org/the-book-of-swarm.pdf). Alongside the development of the Bee client is an ecosystem of tools and apps which are being developed to make it easier for developers and content creators to work with Bee. While all Swarm community members are surely familiar with the [Swarm Desktop](https://docs.ethswarm.org/docs/desktop/introduction) app, they may not be familiar with some of the other tools we explore in this article. These tools make it easier for node operators to manage their nodes, for devs to connect their apps to the Swarm, and for content creators to start publishing their articles on Swarm. In this article we give a quick overview of  Swarm ecosystem tools, and highlight recent updates.


## Bee JS

[Bee JS](https://github.com/ethersphere/bee-js) is a Javascript library which makes it easy for developers to connect their applications to Swarm’s decentralised storage network. Rather than interacting directly with Bee’s HTTP API, devs simply need to add Bee JS to their app to get instant access to a range of commonly used methods (downloadFile, uploadFile, etc.). See the [Bee JS docs](bee-js.ethswarm.org/) for details.
    
![](/uploads/swarm-tools-01.png)

### Bee JS Updates:

* Added [new fields](https://github.com/ethersphere/bee-js/commit/c049101a16faf5c44f8a2abce62eb6583baad32d) from redistribution state endpoint.
* Added compatibility for 1.17.2 update.
* Added new `utils` function for calculating derived stamp related values (i.e., values derived from data returned from the base API).
* Added `status` endpoint from the Bee debug API.

## Swarm CLI
[Swarm CLI](https://github.com/ethersphere/swarm-cli) is a NodeJS-based command line utility for interacting with Bee nodes which will be helpful for developers and node operators. It makes it easy to manage your Bee node and interact with the Swarm network from the command line without the need to interact directly with the Bee HTTP API. See the [Swarm CLI README](https://github.com/ethersphere/swarm-cli/blob/master/README.md) for more details.

#### Creating an Identity
![](/uploads/swarm-tools-gif-01.gif)
#### Uploading a File
![](/uploads/swarm-tools-gif-02.gif)

### Swarm CLI Updates:
* `swarm-cli status` added as an all-in-one "context aware" command. Depending on the mode your node is running in (light, ultra-light, full, staking / non-staking) the command will return the relevant information collected from multiple Bee API endpoints (node status, balance, topology, staking).
* `swarm-cli utility lock` and `swarm-cli utility unlock` commands to manage V3 keystore files and private key strings. The commands will either password protect a wallet or unlock a password protected wallet.
* Added functions for estimating stamp costs, capacity, and TTL.
* Added `hash` command for printing the Swarm hash of a file.

## Etherproxy

[Etherproxy](https://github.com/ethersphere/etherproxy) is a reverse proxy tool aimed at node operators that can be especially beneficial for multi-node setups.  It bundles commonly made requests to the blockchain RPC endpoint made within a small time period and makes them only once (For example, requests such as `eth_blockNumber` and `eth_getLogs` are frequently called, sometimes generating many unnecessary requests). This helps to ensure that all nodes receive identical responses and greatly cuts down on the number of requests made to the RPC endpoint, reducing the load on your Gnosis Chain node or preserving your quota of requests if using a paid API service. 

### Etherproxy Updates

* Added K8s/Docker support
* .deb package/service (under development)

## Bee Dashboard
[Bee Dashboard](https://github.com/ethersphere/bee-dashboard) is the front end which powers the Swarm Desktop app. It can also be used outside Swarm Desktop as a front end interface for any Bee nodes operating on your machine.
### Bee Dashboard Updates
![](/uploads/swarm-tools-02.png)


* Added features to top up and dilute (increase depth in order to increase amount of data which can be stored) existing stamps.
* Added tooltip to explain the `mutability` option.

 
# Other Tools Under Development

The following tools are actively under development, but are not currently in a completely usable state:

## Ethercomb (Status – Under Development)

[Ethercomb](https://github.com/Cafe137/ethercomb) is a CLI tool that automates the process of creating a multi-node Docker stack that makes it easy to get started staking, fast.

For example, with this single command, you can set up 5 Bee nodes ready to start staking:

```
ethercomb create --wallet $PK --count=5 --rpc $JSON_RPC
```
Replacing $PK with your private key and $JSON_RPC with your JSON-RPC endpoint.


## Etherjot (Status – Under Development)

[Etherjot](https://github.com/Cafe137/etherjot) is a tool which allows you to effortlessly create a blog on Swarm. It takes care of the publishing process and layout, allowing you to focus on writing. You can easily add article pages and menu pages one at a time. If you have a markdown file ready to be published, simply use a straightforward command, and it will be accessible on your website.

It also makes it easy to publish any static website you have generated using familiar static website tools such as Hugo or Jekyll. 

![](/uploads/swarm-tools-03.jpg)


*Etherjot default template*

## Gateway Proxy (Status – Under development)

The [Gateway Proxy](https://github.com/ethersphere/gateway-proxy) tool is a multi-purpose proxy tool for Bee nodes. It has four modes of operation which are each aimed at different use cases:


* It can just proxy requests without manipulating the request
* It can add/replace the request postage stamp with one provided through environment variable POSTAGE_STAMP
* It can add/replace the request postage stamp with an auto-bought stamp or existing stamp that fulfils the amount, depth and is not too full or about to expire. To enable this, provide at minimum POSTAGE_DEPTH, POSTAGE_AMOUNT and BEE_DEBUG_API_URL.
* It can extend the TTL of a stamp that is about to expire. To enable this, set POSTAGE_EXTENDSTTL=true, provide POSTAGE_AMOUNT, POSTAGE_DEPTH with the desired amount to use and POSTAGE_TTL_MIN above with a number above or equal to 60.


## Ethercast (Status – Coming Soon)

Ethercast is a tool for live-streaming directly on Swarm! It will allow anyone to instantly go live with a video or screencast on Swarm. This project is in the early stages of development and we will continue to provide you with updates as they occur.

Follow us for future updates!

