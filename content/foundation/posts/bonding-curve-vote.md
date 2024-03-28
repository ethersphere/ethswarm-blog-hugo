+++
banner = "/uploads/bc111.png"
images = [ "/uploads/bc111.png" ]
categories = [ "Ecosystem" ]
date = 2024-03-28T00:00:01.000Z
description = "The Swarm protocol is at a pivotal moment with an upcoming vote on the future of the bonding curve mechanism."
references_and_footnotes = [ ]
title = "How to Participate in the Bonding Curve Vote"
_template = "post"
+++




The Swarm protocol is at a pivotal moment with an [upcoming vote on the future of the bonding curve mechanism](https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/). Here's everything you need to know to participate in this critical decision-making process.

This blogpost will help you navigate the voting process, and contains information regarding: 
* Summary of the voting
* Platform
* Timeline
* Eligibility criteria
* Voting calculation
* Quorum and majority	
* Special considerations for stakers
* Voting
* Further reading


## Summary of the voting
The Swarm Foundation addressed concerns about the current relevance of the Swarm bonding curve design, and announced that the bonding curve’s existence would be put to a vote, offering the community the choice to either maintain or remove it.

**Important implications on the vote**

Please note that if the bonding curve gets voted down, the smart contract will be deactivated, and the DAI remaining in the smart contract will not be accessible. There will be no issuance of new tokens, the BZZ in circulation will remain, users will simply buy BZZ from CEXes and DEXes instead of from the bonding curve. 



![bee](/uploads/bee-line.jpeg)



### Platform: 
Voting will be conducted on [Snapshot](https://snapshot.org/#/swarmfoundation.eth), ensuring a transparent and secure process. 


### Timeline:
* 28 February,12:00am UTC: snapshot taken for voting eligibility, at [ethereum block 19322320](https://etherscan.io/block/19322320) and [gnosis block 32668301](https://gnosisscan.io/block/32668301) 
* 28 March, 11:59 pm UTC: voting officially opens
* 25 April, 11:59 pm UTC: voting closes

**Important considerations on the timeline**

You have 28 days to cast your vote, so if you have any questions regarding the bonding curve or Swarm tokenomics, or if you are unsure about how to cast your vote, there is no need to rush. Please take the time to make an informed decision. Below you can find further reading recommendations to cast your vote intentionally. 


### Eligibility criteria

To vote, you must hold at least 10 BZZ in your wallet. This threshold is aligned with the minimum staking requirement, ensuring active community members can participate. 


> Note that wallets associated with the Swarm Foundation, Swarm Association, and Centralised Exchanges (CEX) are excluded from voting in order to maintain impartiality. All other participants, including early contributors and nodes actively staking BZZ, are welcome to cast their vote.


### Voting calculation: Quadratic voting

Your vote's weight will be calculated using a quadratic formula to promote equitable participation. 

For _X_ BZZ held beyond the initial 10, your vote V is calculated as



![formula](/uploads/formula.png)

where the square brackets [∙] denote the integral part; that is, the largest integer smaller than the value inside the brackets. The reason 9 is subtracted instead of 10 from _X_ under the square root is to ensure that someone with 10 BZZ gets a vote.

This ensures a fair representation of all community members' voices. For example, having 10 tokens gives one vote, based on the formula above. In turn, 100 tokens yield 9 votes; 1000 tokens 31 votes; 10,000 tokens 99 votes; 100,000 tokens 316 votes, and one million tokens 999 votes. Figure 1 below shows in more detail how the number of votes increases as a function of BZZ tokens.



![voting-power](/uploads/wp.png)


Figure 1: The number of votes (y-axis) as a function of the number of BZZ tokens in a wallet (x-axis). The left panel shows how the number of votes increases up to having 100 BZZ; the right panel does the same but up to 1000 BZZ. The vertical dotted line is at 10 BZZ, the smallest amount of tokens making one eligible to vote in the first place.

Quadratic voting has gained traction in the Web3 space since Vitalik wrote a [blogpost](https://vitalik.eth.limo/general/2019/12/07/quadratic.html) in 2019, and it has been chosen as the governance method following community concerns about the fairness of the vote. 

Quadratic voting is an experimental governance voting system that’s gaining traction in the Web3 space because it offers a pragmatic solution to the trade-off expressed above:

* One-wallet-one-vote would be detrimental to those who are heavily invested in the Swarm Network.
* A simple ERC20 token balance would not represent fairly the interest of the wider Swarm community.

In addition to the quadratic voting, a snapshot of the blockchain taken on 28 February will freeze the status of the blockchain, by avoiding bots and sockpuppets multiplying their effective influence dramatically by creating multiple wallets.

This governance model aims for a more democratic voting scenario by mitigating the possibility where a few large wallets accrue a majority of voting power such as in an oligopoly.


### Quorum and majority
Given the quadratic voting, there will be no minimum quorum. The vote will be considered valid if there is a majority of 50% + 1 BZZ.

A vote is a BZZ token in a wallet that is eligible for voting. 


### Special considerations for stakers

Further instructions will come on how to vote if you’re staking BZZ, so stay tuned. 


    
## Voting

**Question:**


*Should the Swarm Network maintain or remove the bonding curve?*


**Summary:**

*The Swarm community is at a pivotal moment with an upcoming vote on the future of the bonding curve mechanism.*

*The Swarm Foundation invites the community to decide on the future of the bonding curve mechanism, as several community members expressed concerns about the current relevance of the Swarm bonding curve design.*

*You can read more about the voting and the reasons behind it [here](https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/).*


**What is the Bonding Curve?**

*The bonding curve is a mathematical function designed to automatically adjust the token price based on its supply, offering a transparent and predictable pricing mechanism. Initially deployed to enhance resilience against price manipulation and establish a fair distribution system that discourages inflation, the bonding curve ensures token availability for purchase regardless of market supply and demand (more info [here](https://blog.ethswarm.org/foundation/2021/swarm-and-its-bzzaar-bonding-curve/)).*

*However, after almost three years, it’s now time for the community of token holders to determine the direction they wish Swarm to pursue.*

*More information can be found at these links:*
* *Bonding curve description [blogpost](https://blog.ethswarm.org/foundation/2021/swarm-and-its-bzzaar-bonding-curve/).*
* *Voting announcement [blogpost](https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/).*
* *“Rethinking Bonding Curves” an expert debate. Watch the YouTube video [here](https://www.youtube.com/watch?v=43x-GxCO9K8), or read the summary [here](https://blog.ethswarm.org/foundation/2024/rethinking-bonding-curves/).* 
* *“Are Bonding Curves good or bad?” Twitter space with Web3 and DeFi experts, listen to it [here](https://twitter.com/i/spaces/1yNxaZdRdaDKj?s=20).*

**Voting options:**

1. *REMOVE: Select this option if you want to remove the bonding curve. A majority vote for this option means that the bonding curve will be shut down.*
2. *MAINTAIN: Select this option if you want to keep the bonding curve in existence. A majority vote for this option means that the bonding curve will remain in place.*

**Voting timeline:** 
* *28 February,12:00am UTC: snapshot taken for voting eligibility, at [ethereum block 19322320](https://etherscan.io/block/19322320) and [gnosis block 32668301](https://gnosisscan.io/block/32668301)* 
* *28 March, 11:59 pm UTC: voting officially opens*
* *25 April, 11:59 pm UTC: voting closes*
* *4 May, 12:00 pm UTC: if  the quorum is met and “REMOVE” won, the bonding curve will be shut down.* 

**Important implications on the vote**

*Please note that if the bonding curve gets voted down, the smart contract will be killed, and the BZZ and the DAI remaining in the smart contract will be lost. There will be no issuance of new tokens, the BZZ in circulation will remain, users will simply buy BZZ from CEXes and DEXes instead of from the bonding curve.* 


**Important considerations**

*You have 28 days to cast your vote, so if you have any questions regarding the bonding curve or Swarm tokenomics, or if you are unsure about how to cast your vote, there is no need to rush. Please take the time to make an informed decision.*  

*In the case of unforeseen black swan events that might detriment the integrity of the voting, the voting might be suspended.*



## Further reading
If you need more information in order to cast your vote, in the past weeks, several panels have taken place and materials have been disseminated, some of which you can find here: 

* Bonding curve description [blogpost](https://blog.ethswarm.org/foundation/2021/swarm-and-its-bzzaar-bonding-curve/). 
* Voting announcement [blogpost](https://blog.ethswarm.org/foundation/2024/swarms-community-governance-the-bonding-curve-vote/). 
* “Rethinking Bonding Curves” an expert debate. Watch the YouTube video [here](https://www.youtube.com/watch?v=43x-GxCO9K8), or read the summary [here](https://blog.ethswarm.org/foundation/2024/rethinking-bonding-curves/). 
* “Are Bonding Curves good or bad?” Twitter space with Web3 and DeFi experts, listen to it [here](https://twitter.com/i/spaces/1yNxaZdRdaDKj?s=20). 

 Also, please feel free to come to our [discord server](https://discord.gg/Ycpj8gstQP)’s channel #tokenomics to discuss the subject with other community members. 


### In conclusion

This vote is more than a decision on a financial mechanism; it is a testament to our commitment to democratic governance and community empowerment. Ensure your voice is heard by participating in this crucial vote. Your participation shapes the future of Swarm.

For any questions or further assistance, join the discussion on our community channels. Together, let's make an informed decision for the future of Swarm.
