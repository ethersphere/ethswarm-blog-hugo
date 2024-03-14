

+++
banner = "/uploads/swarm2-0.png"
images = [ "/uploads/swarm2-0.png" ]
categories = [ "Development updates" ]
date = 2024-03-14T00:00:00.000Z
description = "A Bee 2.0 transition guide for staking node operators, uploaders, & Swarm testnet users."
references_and_footnotes = [ ]
title = "Bee 2.0 Transition Guide"
_template = "post"
slug="bee-2-0-transition-guide"
+++

Bee 2.0 goes live in less than two weeks, so we've put together this short guide to make sure you're prepared, and ensure that the transition is as smooth as possible. If you're an ***encrypted data uploader***, a ***staking node operator***, or a Swarm ***testnet user***, then this guide is for you! 


### Encrypted Data Uploaders 

⚠️ *TLDR: All pre-2.0 encrypted uploads must be backed-up before 2.0 release and re-uploaded after release.* ⚠️


The 2.0 release includes important upgrades to file encryption that address vulnerabilities and optimise data security and privacy. These upgrades include breaking changes which require that encrypted data uploads made prior to Bee 2.0 must be downloaded prior to the 2.0 release and then re-uploaded using the newly updated encryption method. 

To do so, simply download and back-up any encrypted uploads at any time before the 2.0 release on DATE, and then re-upload them after updating your node to the 2.0 client after the release.


### Staking Node Operators

Bee 2.0 includes important upgrades to the localstore store which include various upgrades to chunk syncing, caching, and other areas. These changes have the potential to reduce the incidences of freezes for staking node operators along with other general performance improvements. For those reasons, and also because the 2.0 release ***includes breaking changes***, it is important that staking node operators take note of the release date and get ready to update their nodes as soon as the release goes live. Make sure to mark the date on your calendar and prepare to update your nodes.


### Goerli Testnet Users

Along with improvements to the Bee client itself, the 2.0 release also marks the completion of the Swarm testnet's transition from the Goerli testnet to its successor, the Sepolia testnet. Users who have uploaded data with Sepolia nodes which they wish to preserve should make certain to backup their data ASAP, and testnet node operators should make sure to switch over to Sepolia as well. 

To update your node to run on Sepolia, update `bootnode` with the address shown below:

```
bootnode: /dnsaddr/sepolia.testnet.ethswarm.org
blockchain-rpc-endpoint: wss://sepolia.infura.io/ws/v3/<API-KEY>
```

Make sure that you have replaced the `blockchain-rpc-endpoint` with a Sepolia testnet RPC endpoint. 

After modifying these settings, start your node and check the logs for these messages:

```bash
"time"="2024-03-06 14:24:29.563915" "level"="warning" "logger"="node/chequebook" "msg"="learn how to fund your node by visiting our docs at https://docs.ethswarm.org/docs/installation/fund-your-node"
"time"="2024-03-06 14:24:49.883940" "level"="warning" "logger"="node/chequebook" "msg"="cannot continue until there is at least min ETH (for Gas) available on address" "min_amount"="0.0003044902892" "address"="0x0E429c1F38901275b2A5143b67F44fCE338fA072"
```

You will also need to make sure to fund your node with approximately 0.001 Sepolia ETH (or any amount greater than min_amount) to the address shown above. You can obtain Sepolia ETH from any of a variety of public faucets such as [this one from Infura](https://www.infura.io/faucet/sepolia).

To stake your Sepolia node you will also need to obtain some Sepolia BZZ (sBZZ).

To do so, first make sure you have selected the Sepolia chain in your browser wallet and then navigate to [this trading pair](https://app.uniswap.org/swap?outputCurrency=0x543dDb01Ba47acB11de34891cD86B675F04840db&inputCurrency=ETH&chain=sepolia) on Uniswap. 

![H1ShrJLp6](https://hackmd.io/_uploads/B1rOgJTTa.png)

After obtaining your sBZZ, transfer 10 or more sBZZ to the wallet address,

Check your node's wallet balance:

```bash
curl localhost:1635/wallet
```

And once you see the sBZZ has been deposited, you're ready to add your stake:

```bash
curl -XPOST localhost:1635/stake/100000000000000000
```

And now you're good to go!



## Join the Swarm!

If you've still got any questions about how to prepare for the Bee 2.0 launch, join the Swarm over the official Discord server and hop on into the [`node-operators` channel](https://discord.com/channels/799027393297514537/811553590170353685) where you'll find other Swarm node operators and support team members. 