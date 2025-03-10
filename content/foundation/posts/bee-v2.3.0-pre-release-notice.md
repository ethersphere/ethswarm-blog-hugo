+++
banner = "/uploads/bee-2-3-0-pre-release.png"
images = [ "/uploads/bee-2-3-0-pre-release.png" ]
categories = [ "Development updates" ]
date = 2024-11-21T00:00:00.000Z
description = "We're thrilled to announce that Bee Version 2.3.0 is scheduled for release on December 4th, 2024! The newest version of the Bee client includes exciting new features and improvements to existing features. Among these changes are the new reserve doubling feature, the new GSOC feature, and enhancements to the price oracle."
references_and_footnotes = [ ]
title = "Bee Version 2.3.0 - Pre-release Notice"
_template = "post"
slug="bee-2-3-pre-release"
+++

*Updated December 12th, 2024 - [Bee v2.3.0 Guide: Section 2A](#section-2a-reserve-doubling-reversing--withdrawable-stake) was added to address the relation between reversing reserve doubling and withdrawable stake.*

## Bee Version 2.3.0 - Reserve Doubling

We're thrilled to announce that Bee Version 2.3.0 is scheduled for release on **December 4th**, 2024! The newest version of the Bee client includes exciting new features and improvements to existing features. Among these changes are the new reserve doubling feature, the new GSOC feature, and enhancements to the price oracle.

### Reserve Doubling for Optimized Node Rewards

The reserve doubling feature allows nodes to store chunks from a "sister" neighborhood, effectively doubling their reserve size. By storing chunks from its sister neighborhood, a node gains the opportunity to participate in the redistribution game whenever its sister neighborhood is selected, doubling its chances of participating in the redistribution game.

While reserve doubling requires twice the disk space and will consume more bandwidth (double the bandwidth utilization for chunk syncing, no increase in bandwidth for chunk forwarding), its impact on CPU and RAM usage is minimal. This feature enables a single node to earn rewards as if it were two nodes operating in different neighborhoods, without the need for all the additional resources typically required to operate a second node. Reserve doubling gives node operators more flexibility in optimizing their nodes to maximize the ratio of rewards to resources used.

{{< admonition info >}}
For a more in-depth explanation of the reserve doubling feature, refer to [Swarm Improvement Proposal 21 (SWIP 21)](https://github.com/ethersphere/SWIPs/pull/56/files).
{{< /admonition >}}

### GSOC Enables New Dynamic Content on Swarm  

The new GSOC (Graffiti Several Owner Chunks) feature [(GSOC SWIP)](https://github.com/ethersphere/SWIPs/blob/99e6cf90a4768b24d27e5339b205c18825b53322/SWIPs/swip-draft_graffiti-soc.md) is inspired by the Graffiti Feed feature which was originally specified by the Fair Data Society last year. One of the main objectives of both the Graffiti Feed and GSOC features are to allow for multiple users to write to a single [SOC (single owner chunk)](https://docs.ethswarm.org/docs/develop/tools-and-features/chunk-types/#single-owner-chunks). However, the Graffiti feed was held back by several significant limitations that reduced the utility of the feature. GSOC addresses these issues and opens up a new world of possibilities for dynamic content on Swarm. GSOC will enable the construction of applications such as multi-user forums, social media sites, chat applications, and much more. It also offers an alternative and cheaper option for secure messaging when compared with [PSS](https://docs.ethswarm.org/docs/concepts/pss/). 

Further details about GSOC architecture and a usage guide are coming soon! Make sure you're following Swarm on [Twitter](https://x.com/ethswarm) and have joined the [official Discord group](https://discord.gg/kHRyMNpw7t) to stay up to date.


### Oracle Enhancement Brings More Responsive Pricing

When the price oracle was first introduced, limits were placed on the rate at which it could change the price of storage in order to protect against events where rapid price changes could result in data loss. Now that the oracle has been functioning smoothly for quite some time, these limits are being relaxed in order to enhance the functioning of the price oracle. The enhancement made to the price oracle will make pricing more dynamic and responsive to changes in network utilization. The update increases the rate at which postage price changes, allowing for storage pricing to more rapidly adjust to current network conditions.  



## Bee v2.3.0 Guide

The Bee v2.3.0 guide is divided into two sections. Section 1 contains a detailed guide for upgrading from Bee v2.2.0 to v2.3.0. Section 2 contains instructions for enabling the new reserve doubling feature.

### Section 1: Updating to 2.3.0

Since the v2.3.0 update includes a new staking contract, node operators must manually withdraw and re-stake their xBZZ before updating their nodes, [as they did for the v2.2.0  update](https://blog.ethswarm.org/foundation/2024/bee-2-2-guide/). 

{{< admonition info >}}
Stake should be withdrawn ***before*** updating to 2.3.0.
{{< /admonition >}}

#### **Step 1.1**: Withdraw xBZZ 

When Bee v2.3.0 is released, the previous staking contract will be disabled, and stake withdrawals will be enabled. 

Once the contract is disabled, stake can be withdrawn by calling the `/stake` endpoint with the `DELETE` method:

```bash
curl -X DELETE http://localhost:1633/stake
```

This command will withdraw all stake from the node to the node’s Gnosis Chain address.

Confirm that the stake was withdrawn:

```bash
 curl -s  http://localhost:1633/stake | jq
```
The value for `stakedAmount` should now be zero:
```
{
  "stakedAmount": "0"
}
```
#### **Step 1.2**: Stop node

This step will vary depending on how the node was set up:

```bash
sudo systemctl stop bee
```

or

```
docker compose down
```

or

```
docker stop <container_name_or_id>
```

#### **Step 1.3**: Update to 2.3.0 & Restart 

After withdrawing stake and stopping the node, update the node to v2.3.0. The [installation method](https://docs.ethswarm.org/docs/bee/installation/install/) will vary depending on the node setup. After updating, restart the node.

The specific restart command will depend on your installation method (Docker, install script, package installer, etc.) 

{{< admonition danger >}}
Before every Bee client upgrade, it is best practice to ALWAYS take a full backup of your node.
{{< /admonition >}}


#### **Step 1.4**: Re-stake xBZZ


After upgrading to v2.3.0 and restarting, xBZZ should be restaked into the new staking contract so that the node can continue to participate in the redistribution game. 

To stake the minimum required 10 xBZZ:

```bash
curl -X POST localhost:1633/stake/100000000000000000
```

{{< admonition info >}}
If using the reserve doubling feature, this is the point in the update process where additional stake can be added to meet the increased minimum stake requirement of 20 xBZZ. See next section for details.
{{< /admonition >}}

Confirm that the staking transaction was successful:

```bash
curl -s  http://localhost:1633/stake | jq
```
The expected output after staking the minimum of 10 xBZZ:

```bash
{
  "stakedAmount": "100000000000000000"
}
```

The expected output after staking the increased minimum of 20 xBZZ required for the reserve doubling feature:

```bash
{
  "stakedAmount": "200000000000000000"
}
```

The upgrade to 2.3.0 is now complete. From here on, the node will continue to participate in the redistribution game as normal.


### Section 2: Reserve Doubling Guide

After updating your node to v2.3.0 and manually migrating your stake, you can enable the reserve doubling feature by following the steps below:


#### **Step 2.1**: Stake at least 20 xBZZ 

{{< admonition info >}}
This step can also be done while manually restaking during [step 1.4](#Step-Four-Re-stake-xBZZ) of the v2.3.0 update process. See section above for details.
{{< /admonition >}}

The reserve doubling feature comes with an increase in the required minimum xBZZ stake from 10 xBZZ to 20 xBZZ. 

For doubling the reserve of a node which already has 10 xBZZ staked, simply stake an additional 10 xBZZ for a total of 20 xBZZ stake:

{{< admonition info >}}
As always, make sure that to properly convert the stake parameter to PLUR where 1 PLUR is equal to 1e-16 xBZZ. As in our example below, we have converted from 10 xBZZ to 100000000000000000  PLUR.
{{< /admonition >}}

```bash
curl -X POST localhost:1633/stake/100000000000000000
```

Or for a node with zero staked xBZZ, the entire 20 xBZZ can be staked at once:

```bash
curl -X POST localhost:1633/stake/200000000000000000
```

We can use the `GET /stake` endpoint to confirm the total stake for our node:

```bash
curl -s  http://localhost:1633/stake | jq
```

```bash
{
  "stakedAmount": "200000000000000000"
}
```
#### **Step 2.2**: Set `reserve-capacity-doubling` to `1`.

The reserve doubling feature can be enabled by setting the new `reserve-capacity-doubling` config option to `1`  using the [configuration method](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration#configuration-methods-and-priority) of your choice. 

#### **Step 2.3**: Restart node 

After ensuring the node has at least 20 xBZZ staked and the `reserve-capacity-doubling` option has been set to `1`, restart the node.

After restarting your node, it should then begin syncing chunks from its sister neighborhood. 

The `/status/neighborhoods` endpoint can be used to confirm that the node has doubled its reserve and is now syncing with its sister neighborhood:

```bash
{
  "neighborhoods": [
    {
      "neighborhood": "01111101011",
      "reserveSizeWithinRadius": 1148351,
      "proximity": 10
    },
    {
      "neighborhood": "01111101010",
      "reserveSizeWithinRadius": 1147423,
      "proximity": 11
    }
  ]
}
```

The expected output should contain two neighborhoods, the node's original neighborhood along with its sister neighborhood. 

We can also check the `/status` endpoint to confirm our node is syncing new chunks:

```bash
curl -s  http://localhost:1633/status | jq
```

```bash
{
  "overlay": "be177e61b13b1caa20690311a909bd674a3c1ef5f00d60414f261856a8ad5c30",
  "proximity": 256,
  "beeMode": "full",
  "reserveSize": 4192792,
  "reserveSizeWithinRadius": 2295023,
  "pullsyncRate": 1.3033333333333332,
  "storageRadius": 10,
  "connectedPeers": 18,
  "neighborhoodSize": 1,
  "batchCommitment": 388104192,
  "isReachable": true,
  "lastSyncedBlock": 6982430
}
```

We can see that the `pullsyncRate` value is above zero, meaning that our node is currently syncing chunks, as expected.


#### Summary of Important Details

- The new `reserve-capacity-doubling` Bee configuration option is used to double a node's reserve. The only valid values are `0` and `1`.
- In order for a node to be able to participate in the redistribution game for both its own and its sister neighborhood, it must have a total of 20 xBZZ staked (10 xBZZ for each neighborhood). 
- A doubling can be reversed by changing `reserve-capacity-doubling` back to `0` and restarting the node. There is then a two [round](https://docs.ethswarm.org/docs/concepts/incentives/redistribution-game/#redistribution-game-details) delay, after which the additional xBZZ over the minimum 10 xBZZ can then be withdrawn.
- After doubling, there will be a delay of two rounds of the redistribution game until the node is able to participate in the game.

### Section 2A: Reserve Doubling Reversing & Withdrawable Stake

Due to certain [implementation details](https://github.com/ethersphere/storage-incentives/blob/20bf3c0e3fcf1e98dedcbf16cd82fb4d337fdaf7/src/Staking.sol#L136), the order in which a node's reserve is doubled and then reversed can have an impact on the amount of withdrawable stake.

When doubling a node's reserve, stake should be added AFTER 
setting `reserve-capacity-doubling` to 1. If instead, xBZZ is first staked with `reserve-capacity-doubling` set to 0, and the reserve is then doubled by increasing from 0 to 1 without the addition of more stake, this will prevent stake from being withdrawable when the doubling is reversed.  

In order to maximize the amount of withdrawable stake after reversing a reserve doubling, make sure to follow the steps as described in the previous section in the same order as described.

#### How to free up withdrawable stake from a node with >= 20 xBZZ stake that currently has zero withdrawable stake

In the case that a node with 20 xBZZ stake was doubled directly by increasing `reserve-capacity-doubling` from 0 to 1, the surplus xBZZ over the minimum required 10 xBZZ cannot be made withdrawable by simply reversing the `reserve-capacity-doubling` from 1 back to 0. 

In this case, you will need to first send a very small staking transaction of a single PLUR while `reserve-capacity-doubling` is set to 1, and after that, change `reserve-capacity-doubling` from 1 to 0. This works because every time any amount of stake is added, it forces to staking contract to redo its calculations.  

The detailed steps are:

1. Issue a staking transaction for 1 PLUR while `reserve-capacity-doubling` is set to 1.
    ```bash
    curl -X POST localhost:1633/stake/1
    ```
2. Stop node and set `reserve-capacity-doubling` to 0.
3. Restart node. The 10 xBZZ should now be withdrawable.

###  Section 3: Modification to `/rchash` endpoint

The [`/rchash` endpoint](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#run-sampler-process-to-benchmark-performance) can be used to generate a sample reserve hash and can be used for benchmarking a full node's processor speed. Previously, the endpoint would allow for random `anchor` parameters. In Bee v2.3.0, this has been modified to require that the `anchor` parameters match the prefix bits of the node up to the node's current storage depth. 

In total, the `/rchash` endpoint has 3 parameters: storage depth, anchor_01, and anchor_02:

```bash
 /rchash/{depth}/{anchor_01}/{anchor_02}
```

The current depth of a node can be found from the `/reservestate` endpoint:

```bash
curl -sX GET http://localhost:1633/reservestate | jq
```

```bash
{
  "radius": 15,
  "storageRadius": 11,
  "commitment": 128332464128
}
```
The value for `storageRadius` is your node's storage depth. Use this value as the `depth` parameter for `/rchash`.

For the two anchor values of `anchor_01` and `anchor_02`, they must contain a prefix hex string that matches your own node's bits up to the current storage depth. So for the current depth of 11, and with 4 bits represented by each hex digit, 3 hex digits is sufficient. We will use 4 just to make sure we are covered in the case of future depth increases. For a node with overlay address `e59aa85b5899cd62d54bcd9bf511824883512f7151df196820c0e6d1a02d964b`, we will use the first 4 hex digits of `e59a`:


```bash
curl -sX GET http://localhost:1633/rchash/11/e59a/e59a| jq
```
	
## Conclusion

The reserve doubling feature introduced in the 2.3.0 update offers node operators tools for increasing the efficiency of their setup with minimal increase in overhead, improving the economic viability of running nodes. Node operators will have a new tool to optimize their nodes for both scalability and profitability. For more support and to stay up to date with all the latest Swarm news for node operators, make sure you're in the [node operator Discord channel](https://discord.com/channels/799027393297514537/811553590170353685) and follow us on [Twitter](https://x.com/ethswarm).