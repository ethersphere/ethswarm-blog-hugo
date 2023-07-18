+++
banner = "/uploads/NFTonSwarm.png"
categories = [ "Tutorials" ]
date = 2023-07-17T04:00:00.000Z
description = "This article provides a comprehensive guide on deploying, minting, and importing NFTs on the Swarm Network."
references_and_footnotes = [ ]
title = "How to Create an NFT and store metadata on Swarm"
_template = "post"
+++

**TL;DR:** This article provides step-by-step instructions on how to deploy, mint and import an NFT using [Hardhat](https://hardhat.org/), [Swarm Desktop App](https://www.ethswarm.org/build/desktop) and [Metamask](https://metamask.io/). You will learn how to deploy an NFT contract on [Gnosis](https://www.gnosis.io/), mint an NFT to your wallet address, store the NFT image and metadata on Swarm, and import your NFT in Metamask. The [NFT example repo](https://github.com/rampall/nft-example) used in this article is intended to serve as an easy reference that can then be built upon to create collections of NFTs that store their data, decentralised, in the Swarm.

 {{< youtube Ye3UH8ZmDjg >}}

## On NFTs

An NFT (Non-Fungible Token) is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content, such as artwork, music, videos and even tweets. Unlike fungible tokens, such as cryptocurrencies, which are interchangeable and have the same value, each NFT is unique and can have its own distinct value, based on its rarity, historical significance or popularity. NFTs are typically stored on a blockchain, which provides a decentralised and tamper-proof record of ownership and transaction history. This makes NFTs an exciting new way for creators and collectors to monetise and trade digital assets, while also providing a new level of transparency and authenticity in the digital world. 

![image](https://github.com/rampall/nft-example/assets/520570/7251109b-9f55-48b2-8e66-b93ad2dd58ea)

## Prerequisites

Before we get started, make sure you have the following prerequisites:

- `node = 16`
- [Swarm Desktop](https://docs.ethswarm.org/docs/desktop/introduction) running a [light node funded with some BZZ and XDAI](https://docs.ethswarm.org/docs/desktop/configuration#upgrading-from-an-ultra-light-to-a-light-node)


## Deploying an NFT Contract on Gnosis

The first step to creating an NFT is to deploy an NFT contract on Gnosischain. Here's how to do it:

### Clone repository and install packages

Let's clone the [NFT Example repository](https://github.com/rampall/nft-example) and install the packages

```
git clone https://github.com/rampall/nft-example.git
cd nft-example
npm install
```

### Deploy NFT contract

Steps to deploy the NFT contract:

1. Copy the contents of `.env.example` in the project root to a new `.env` file : `cp .env.example .env`
2. Create a new account in Metamask and fund it with a small amount of XDAI (XDAI 0.10 is enough) on Gnosischain; this will be your deployment account.
3. In Metamask, click the three dots next to your account address and select "Account Details", then "Export Private Key".
4. Enter your password and then copy the private key into your `.env` file after `GNOSIS_PRIVATE_KEY=0x` (it should have an 0x prefix).
5. Deploy your contract  using the following command: `npx hardhat run --network gnosis scripts/deploy.ts`
6. The NFT contract address should be printed in the output message. Copy and paste it into `.env` after `NFT_TOKEN_ADDRESS=0x`.

### Mint NFT
  
7. Start up [Swarm Desktop](https://www.ethswarm.org/build/desktop).
8. [Buy a postage stamp batch by following these steps](https://docs.ethswarm.org/docs/desktop/postage-stamps#how-to-buy-a-postage-stamp-batch). This should give you a Batch ID.
9. Copy the Batch ID value into the `.env` after `POSTAGE_BATCH_ID=`
10. Create another new account in Metamask and copy the address into `.env` after `NFT_TO_ADDRESS=0x`; this is the address that will receive your NFT.
11. Mint your NFT using the following command: `npx hardhat run --network gnosis scripts/mint.ts`

### Import NFT

12. In Metamask, with your `NFT_TO_ADDRESS` account selected, select network 'Gnosis Chain', click `NFT` then scroll down and select `Import NFTs`.
13. Copy the NFT contract address from **step 6**  into the `Address` field and input `0` as the `Token ID`.
14. You should be able to see your own Beelon Musk NFT in your Metamask wallet; keep it or send it to a friend!
15. Replace `{{0x...}}` in this url with your contract address from step x and open the link `https://gnosis.nftscan.com/{{0x...}}/0`. You should be able to see your Beelon Musk NFT on nftscan!

![Metamask with NFT Metadata on Swarm](https://hackmd.io/_uploads/ByhN_8TKh.png)

Congratulations 👏! You've successfully created an NFT and stored its metadata on Swarm. You can use this repo as a starting point to create collections of NFTs that store their data, decentralised, in the Swarm.

## References

- https://github.com/rampall/nft-example
- [Youtube video guide](https://youtu.be/Ye3UH8ZmDjg)
