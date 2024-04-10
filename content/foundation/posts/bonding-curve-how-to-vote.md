+++
banner = "/uploads/bc1111.png"
images = [ "/uploads/bc1111.png" ]
categories = [ "Ecosystem" ]
date = 2024-04-10T00:00:01.000Z
description = "This guide will walk you through the steps to cast your vote on the latest proposal using Snapshot."
references_and_footnotes = [ ]
title = "Your Voice Matters: How to Vote in the Swarm Bonding Curve Community Vote"
_template = "post"
+++


The Swarm protocol is at a pivotal moment with an upcoming vote on the future of the bonding curve mechanism. Here’s everything you need to know to cast your vote. 

The bonding curve vote is being held on [Snapshot](https://snapshot.org//#/swarmfoundation.eth). This vote represents the first step toward decentralising the governance process around the Swarm Network and its commitment to creating a decentralised future for the web.

This guide will walk you through the steps to cast your vote on the latest proposal using Snapshot. 

If you are a node operator, please find instructions [here](https://www.npmjs.com/package/swarm-vote) on how to vote. 


## What is Snapshot and what is a “snapshot”?

Snapshot (capital “S”) is a voting platform that allows crypto projects to vote easily and without gas fees.  Projects can customise the settings best meeting their needs. For instance, the “[Swarm bonding curve community vote](https://snapshot.org/#/swarmfoundation.eth/proposal/0x28b308188ed7afba140ac5629b2aff4d6b6012b400403468e595d4af0549cdbd)” proposal uses a quadratic weighting strategy. 

On the other hand, ”snapshot” (lowercase “s”) refers to the record of a blockchain’s state at a specific point in time, one then knows the amount and balance of token holders at a specific chosen block height, which then is used to establish eligibility for the vote and the voting power  


## Who can vote?

Holders of at least 10 BZZ tokens on Ethereum Mainnet and/or Gnosis Chain before Feb-28-2024, 12:00:00 AM +UTC are eligible to vote.

A snapshot was taken on Feb-28-2024 at 12:00AM UTC, at [Ethereum block 19322320](https://etherscan.io/block/19322320) and [Gnosis block 32668301](https://gnosisscan.io/block/32668301). If you had at least 10 BZZ at that moment, you are eligible to vote. 

Please note that the voting power is calculated based on the number of tokens at the time of the snapshot: if a wallet has more or fewer tokens at the moment of the voting, it won’t affect its voting power. 

## Voting weight?

The voting weight or voting power represents the influence your vote has on the final outcome.

To create a fairer system, the voting strategy implemented in the proposal is Quadratic Weighting: a mathematical formula used to calculate your voting weight that gradually decreases the influence of each vote as the number of held tokens goes up. This ensures fair representation of all community members’ voices.


## How does it work? 

The minimum BZZ required to vote is 10, and your vote V is calculated as: 

(V=[√x-9]).



![voting-power](/uploads/wp.png)


**Example**
* If you hold 10 $BZZ tokens: Voting Weight = √(10-9) ≈ 1
* If you hold 100 $BZZ tokens: Voting Weight = √(100-9) ≈ 10
* If you hold 1000 $BZZ tokens: Voting Weight = √(1000-9) ≈ 31
* If you hold 10000 $BZZ tokens: Voting Weight = √(10000-9) ≈ 100

*You can find more information on voting calculation and Quadratic voting [here](https://blog.ethswarm.org/foundation/2024/how-to-participate-in-the-bonding-curve-vote/).


### Before you vote

<span style="text-decoration:underline;">Self-Custodial Wallet:</span> To verify whether you are eligible to vote, and cast your vote, you need to connect your wallet to Snapshot. Currently, Snapshot supports: MetaMask, WalletConnect, Coinbase Wallet, Portis, Stargazer, Kaikas. It is important to note that only token holders who self custody are eligible to vote, if you hold tokens on an exchange you can’t participate in the governance. 

Please be careful and never connect your wallet or approve anything if you have any doubt on the legitimacy of the frontend you are using.

<span style="text-decoration:underline;">Tokens:</span> In order to be eligible to vote, you must have staked or held at least 10 BZZ tokens on Ethereum or Gnosis Chain at the time of the snapshot.

Please note that if a wallet held BZZ both on Ethereum mainnet or Gnosis Chain, their totals will be summed for the purpose of calculating voting power. For instance, if a wallet has 100 BZZ and 100 xBZZ, its voting power will be calculated with this formula: 

√(100 + 100 - 9) -> ~14


### Timeline

Record of all eligible wallets was finalised on February-28-2024, at [Ethereum block 19322320](https://etherscan.io/block/19322320) and [Gnosis block 32668301](https://gnosisscan.io/block/32668301).

Voting officially opened on March-28-2024, at 11:59 PM UTC via [Snapshot](https://snapshot.org/#/swarmfoundation.eth/proposal/0x28b308188ed7afba140ac5629b2aff4d6b6012b400403468e595d4af0549cdbd).

Voting closes on April-25-2024, at 11:59 PM UTC.


### Casting your Vote



![snapshot](/uploads/sn1.png)

Please [watch this demo](https://youtu.be/vzWweyUmh7Q) developed by a community member to learn how to cast your vote.

[![youtube](/uploads/video-bodning-curve.png)](https://youtu.be/vzWweyUmh7Q){:target="_blank"}





### Node operators

If you are a node operator, [here](https://www.npmjs.com/package/swarm-vote) you can find instructions on how to vote. 


## Helpful tips

Here are some blogposts that will give further details about the bonding curve and the vote.Please join the discussion on [Discord](https://discord.ethswarm.org/) where you can ask all your questions and connect with other community members.



1. Swarm and its “Bzzaar” Bonding Curve \
[https://blog.ethswarm.org/foundation/2021/swarm-and-its-bzzaar-bonding-curve/](https://blog.ethswarm.org/foundation/2021/swarm-and-its-bzzaar-bonding-curve/)
2. Rethinking Bonding Curves \
[https://blog.ethswarm.org/foundation/2024/rethinking-bonding-curves/](https://blog.ethswarm.org/foundation/2024/rethinking-bonding-curves/)
3. Swarm’s Community Governance: The Bonding Curve Vote \
[https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/](https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/)
4. How to Participate in the Bonding Curve Vote \
[https://blog.ethswarm.org/foundation/2024/how-to-participate-in-the-bonding-curve-vote/](https://blog.ethswarm.org/foundation/2024/how-to-participate-in-the-bonding-curve-vote/)
5. Bonding Curve voting AMA \
[https://blog.ethswarm.org/foundation/2024/bonding-curve-voting-ama/](https://blog.ethswarm.org/foundation/2024/bonding-curve-voting-ama/)

There is still plenty of time to vote.Voting closes on April-25-2024, at 11:59 PM UTC.

Be cautious when connecting your wallet to online platforms. Ensure you are on the official Snapshot voting page for Swarm:

[https://snapshot.org/#/swarm foundation.eth](https://snapshot.org/#/swarmfoundation.eth)


## Conclusion

By following these steps, you should be able to easily cast your vote on the Swarm  proposal using Snapshot. If you encounter any issues or have a question, join the discussion on our community channels and lets build the future of the Swarm together!
