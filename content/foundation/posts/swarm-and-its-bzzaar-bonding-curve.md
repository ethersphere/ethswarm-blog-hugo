+++
banner = "/uploads/1_vl42mggflx3mehmgnbpbnw.webp"
categories = ["Development Updates"]
date = 2021-10-19T16:00:00Z
description = "A comprehensive description of the insights of the single faucet of BZZ Token, explained in detail."
references_and_footnotes = []
title = "Swarm and its “Bzzaar” Bonding Curve"

+++
## A comprehensive description of the insights of the single faucet of BZZ Token, explained in detail.

Live since June, [_Bzzaar_](https://bzz.exchange/), an exchange platform launched as a means to buy and sell BZZ, takes a unique approach to kickstarting a new token economy. Unlike typical buy and sell platforms, Bzzaar doesn’t rely on traditional market makers for users to exchange BZZ but rather makes use of a _bonding curve_ to instantaneously complete transactions.

![](/uploads/1_kufyoxb7pdkg97dh_rsdba.webp)

New projects can easily call the contracts to their own interfaces allowing the creation of a front-end modal to hold the exchange. With this, projects that require BZZ can provide their users with an exchange interface that calls the [Bzzaar’s contract](https://etherscan.io/address/0x4f32ab778e85c4ad0cead54f8f82f5ee74d46904) functions. **The bonding curve belongs to the community and serves to fuel all and any project created on Swarm.**

## What Is A Bonding Curve?

A bonding curve is a mathematical function in the form of y=f(x) that determines the price of a single token, depending on the number of tokens currently in existence, or the market supply. The key difference is that with a traditional exchange platform market makers are required to provide liquidity to the market, whereas a bonding curve takes over the role of providing liquidity, negating the need for market makers.

> _ELI5 — Bonding curves are smart contracts that can mint or burn tokens according to a previously determined equation. The equation is a graphable curve that defines the relationship between the token’s price and its supply — where the price of a token increases with supply._

Let’s elaborate on this. On a traditional exchange, market makers use the available pricing data of users wanting to buy and sell tokens, actively adjusting the price so that token purchases and sales can happen instantaneously. Users can set buy and sell orders to ensure that transactions only occur when a token reaches a certain price, and unfortunately, this may never occur.

![](/uploads/0_ynwspei_iqw0tkzk.png)

_Figure 1._ A traditional market maker exchange platform

With the Bzzaar’s bonding curve, new tokens are minted when purchased by users and burned when sold to the exchange. This creates an autonomously fluctuating exchange where the price is actively adjusting. As users buy tokens, the price of the next token increases, and only decreases when users sell tokens back to the bonding curve. Since the bonding curve equation is known, token prices are predictable and are dependent on the [market supply](https://tokenservice.ethswarm.org/circulating_supply) at any given moment.

![](/uploads/1_wj1i8em2olyfqtqsal2yeg.webp)

_Figure 2._ How a bonding curve determines token prices

## A Summary Of The Benefit Of Bonding Curves

Besides the speed at which purchases and sales take place, a bonding curve has a few other benefits:

* **Resilience to manipulation:** The Token’s value is far more resilient to outside influences attempting to manipulate its price, such as pump and dump schemes. This is because the bonding curve protects users from panic selling by ensuring every token is sold at a predictable price.
* **No third-party market makers:** Since the price of each token is predetermined by the bonding curve, there is no need for any market makers. The bonding curve itself acts as an automated market maker.
* **Immediately reacts to demand:** Since the bonding curve can mint and burn tokens, the price of a token is immediately adjusted to its demand.

**Fair distribution:** Bonding curves have no validators, negating the need for additional tokens to be minted as validator rewards. This leads to no inflation rate or inflation scheduled. Node operators are rewarded from the existing token pool for providing bandwidth and storage to the ecosystem.

## Using a Bonding Curve

Now that we have discussed what a bonding curve is, let’s look at how you, as a user, can interact with the bonding curve. The most basic calculation we can make using the bonding curve is calculating the most cost of one token at the current token supply. All we have to do is substitute the current token supply value in for x (or s) in the equation

However, users will rarely want to purchase a single token, and calculating the individual cost of each token they want to purchase can become tedious. Let’s look at an example where a user wants to buy b amount of tokens when the current token supply is at a;

![](/uploads/1_ojek5av_ppa-wqwmqkdodg.webp)

Figure 3.The area under a curve

We know that if we add the value of each value for token supply from a to a+b together, we can calculate the area under a curve. This is impractical for large purchases; an easier method is to use calculus. In calculus, the area under a curve is determined by taking the integral of your function.

For example, our function (not the actual price function of bzzaar) takes the form of:

![](/uploads/1_4gcefu_5-ru9b4j-ty3n8g.webp)

The integral of our function will then be:

![](/uploads/1_o-bw1l_t_f2e_htrss8eva.webp)

Where y is the total cost of purchasing b amount of tokens.

The same technique can be used to help users calculate how much they would receive when selling b amount tokens back to the bonding curve:

![](/uploads/1_mgd42gtnpvp7rbjdoljrng.webp)

## How Bzzaar’s Bonding Curve Works

The Bzzaar maintains its own mathematical function to determine the price of a single BZZ token. To understand how the bonding curve function works, we must first discuss chunks.

All data uploaded to Swarm is automatically split into chunks and stored across several Bee nodes, where it is hashed. A _chunk_ is the canonical unit of storage in Swarm and consists of a maximum of 4 kilobytes of data. In order to upload data, users will need to buy batches of _postage stamps._ Each chunk requires a postage stamp, as each stamp attaches a value of BZZ to the chunk. Stamp batches are created in buckets with a depth of 16. Swarm’s entire address space is divided into 216(65,536) different buckets.

Unlike most other ECR-20 tokens, Swarm uses 16 decimal places. This was done to ensure calculations in the bonding curve contract are gas-efficient while maintaining a human-friendly nominal scale of 1100, and 1 on the atomic scale. As a result, in a situation where every BZZ token is sold to the bonding curve, the price of the very first BZZ token minted will be 0.01 DAI.

Now we can take a closer look at the bonding curve equation:

![](/uploads/1_lnbj3p4nndxwo5pv78y15q.webp)

Where _p_ is the price of a single BZZ token, _s_ is the current supply of BZZ, accurate to 16 decimal places, and _c_ is a fixed constant of 6.25×1023.

The integral of p is:

![](/uploads/1_dl-8njmd7rcx6ggyqur6tg.webp)

A large amount of initial collateral was required to activate the bonding curve. Through initial token sales, and minting additional tokens after the fact, **a total of 66,208,125 BZZ tokens was sold to generate a total collateral of US$ 3,364,662.** With the amount of collateral generated and token sold, the launch price of a BZZ on the Bzzaar was 1.92 DAI. To prove the supply of BZZ at 1.92 DAI, we can simply substitute 66,208,125 for s in the bonding curve equation:

![](/uploads/1_2fdcjvcxzreej2053oosag.webp)

## Maximum Supply

There is a hardcoded theoretical maximum supply of 125 million BZZ tokens. The high polynomial order of the bonding curve makes it **highly unlikely that this theoretical maximum will ever be achieved** due to the associated costs. To illustrate these costs, we can set a circulating supply amount to a theoretical value of 120 million BZZ, or 96% of the maximum supply.

![](/uploads/1_9tuam7nvqwkws5w_kwqpiq.webp)

This shows us that the 120th million BZZ token minted would cost 687 million DAI.

We can visualise the high polynomial order of taking several values for the maximum supply, and how each value affects the market cap.

![](/uploads/0_pn3uz-0z2a5n_l-b.png)

_Figure 4. BZZ supply affecting price and market cap_

![](/uploads/1_jz2abcajzk4-awhrrftqcw.webp)

## Bonding Curve Emergency Shutdown

The bonding curve is self-sustaining and does not require any external input to function. However, there are **three critical situations** in which an emergency shutdown may get triggered:

1. A critical or exploitable bug is discovered in the bonding curve contract;
2. MakerDAO discovers a critical bug or is shut down for any reason; and
3. DAI loses its peg to the USD.

The decision to trigger an emergency currently belongs to the Swarm Foundation.

## Additional Information

All [contract information](https://github.com/ethersphere/bzzaar-contracts) is freely available to any persons interested in Swarm and the bonding curve. **A full** [**audit of Swarm**](https://github.com/ethersphere/bzzaar-contracts/tree/v1.0.0) **was performed by QuantStamp and the** [**final audit report**](https://github.com/ethersphere/bzzaar-contracts/blob/v1.0.0/audit/Buzzar_final_audit_report.pdf) **has been made publicly available.** For more information regarding Swarm, BZZ, Bee nodes, and The Bzzaar, feel free to join the Swarm community on [Discord](https://discord.gg/GU22h2utj6).