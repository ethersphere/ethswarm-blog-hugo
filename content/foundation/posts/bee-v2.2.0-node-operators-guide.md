+++
banner = "/uploads/2-2-0-guide.png"
images = [ "/uploads/2-2-0-guide.png" ]
categories = [ "Development updates" ]
date = 2024-09-05T00:00:00.000Z
description = "This node operator's guide contains step by step instructions for the requirements to upgrade your node to 2.2.0 as well as instructions for other new features such as neighborhood hopping and partial withdrawals. To learn more about all the new features included in the 2.2.0 release, check out the one week announcement article."
references_and_footnotes = [ ]
title = "Bee Version 2.2.0 - Node Operators' Guide"
_template = "post"
slug="bee-2-2-guide"
+++


## Bee 2.2.0 Node Operator's Upgrade Guide 

{{< admonition danger >}}
DO NOT UPGRADE TO 2.2.0 before completely reading this guide, there are some steps which must be taken before upgrading.
{{< /admonition >}}

This node operator's guide contains step by step instructions for the requirements to upgrade your node to 2.2.0 as well as instructions for other new features such as neighborhood hopping and partial withdrawals. To learn more about all the new features included in the 2.2.0 release, check out the [one week announcement article](https://blog.ethswarm.org/foundation/2024/bee-2-2-pre-release/).


### Required 2.2.0 Upgrade Steps 

The basic upgrade process is as follows:

**Step One:** Unstake while on 2.1.0

**Step Two:** Stop your node

**Step Three:** Update to 2.2.0 & Restart Node

**Step Four:** Restake xBZZ

#### Step One: Unstake while on 2.1.0

Once the full version of 2.2.0 is released on Github, the current staking contract will be disabled, and withdrawals will be enabled. After the release of 2.2.0 on Github you should unstake your xBZZ *BEFORE* upgrading from 2.1.0 to 2.2.0.

Once the contract is disabled, withdraw all your stake by calling the `/stake` endpoint with the `DELETE` method (there is no time limit for moving your stake, however the longer you wait, the more potential rewards are lost):

```bash
curl -X DELETE http://localhost:1633/stake
```
This command will withdraw all stake from your node to your node's Gnosis Chain address. 

{{< admonition info >}}
If you may have accidentally overstaked more xBZZ than is strategically required as has been observed with some nodes that have 100s or 1000s of xBZZ, this withdrawal offers you a one-time chance to recover any excess stake which you deposited unintentionally.  
{{< /admonition >}}

#### Step Two: Stop your node

{{< admonition info >}}
Before turning off your node, you may wish to check whether or not your node is in an overpopulated neighborhood so you can decide whether or not to take advantage of 2.2.0's new neighborhood hopping feature. See the section below this one *"Neighborhood Hopping (Optional)"* in this blog post for instructions on how change your node's neighborhood. After turning off your node and before updating to 2.2.0, you can change the configuration as described in those instructions. 
{{< /admonition >}}

Stop your node. This step will vary depending on your setup, but will likely look something like one of these commands depending on your install method:

```bash
sudo systemctl stop bee
```

or 

```bash
docker compose down
```

or

```bash
docker stop <container_name_or_id>
```

While your node is stopped, remove these three options from your node's configuration as they are no longer supported:

```yaml
# bcrypt hash of the admin password to get the security token
admin-password: ""
# debug HTTP API listen address
debug-api-addr: :1635
# enable debug HTTP API
debug-api-enable: false
```

Read more about this and also other required steps for securing your node in the *"Removal of the Bee Debug API"* section further below in this article.

#### Step Three: Update to 2.2.0 & Restart Node

In this step, upgrade your node to 2.2.0 using your preferred [installation method](https://docs.ethswarm.org/docs/bee/installation/install), and restart your node.


The specific restart command will depend on your installation method (Docker, install script, package installer, etc.) If you are unsure, check with the [node operator's Discord group](https://discord.gg/kHRyMNpw7t).   

{{< admonition danger >}}
Before every Bee client upgrade, it is best practice to ALWAYS take a full backup of your node.

The 2.2.0 upgrade includes a localstore migration which will take an extended time to complete (the exact time will vary based on your particular system specs). You can [check your node's logs](https://docs.ethswarm.org/docs/bee/working-with-bee/logs-and-files) for messages related to the migration in order to check on the migration progress. 

Turning off your node before the migration is complete could cause your node to become corrupted! ⚠️
{{< /admonition >}}


#### Step Four: Restake xBZZ

After upgrading to 2.2.0 and restarting your node, restake your xBZZ. In order to stake the minimum required 10 xBZZ you can use the following command:

```bash
curl -X POST localhost:1633/stake/100000000000000000
```

Your upgrade to 2.2.0 is now complete. From here on, your node will continue to participate in the redistribution game as normal. 

### Neighborhood Hopping (Optional)

Following the 2.2.0 update, you now have the option to set your node to operate in any neighborhood of your choice. You can use the option `target-neighborhood` in order to switch your node over to a new neighborhood. If you do not set this option following the 2.2.0 upgrade, then your node will continue to operate in its current neighborhood. 

{{< admonition info >}}
Changing your node's neighborhood is not a required part of the upgrade to 2.2.0, and it is only suggested that you change to a new neighborhood if your node is in an overpopulated neighborhood. 
{{< /admonition >}}

#### Checking if in Overpopulated Neighborhood

For a quick check of your node's neighborhood population, we can use the `/status` endpoint: 

```bash
curl -s http://localhost:1633/status | jq
{
  "peer": "e7b5c1aac67693268fdec98d097a8ccee1aabcf58e26c4512ea888256d0e6dff",
  "proximity": 0,
  "beeMode": "full",
  "reserveSize": 1055543,
  "reserveSizeWithinRadius": 1039749,
  "pullsyncRate": 42.67013868148148,
  "storageRadius": 11,
  "connectedPeers": 140,
  "neighborhoodSize": 6,
  "batchCommitment": 74463051776,
  "isReachable": false
}
```

Here we can see that at the current storage depth/radius of 11, our node is in a neighborhood with size 6 from the `neighborhoodSize` value. Using the [Swarmscan neighborhoods tool](https://swarmscan.io/neighborhoods) we can see there are many neighborhoods with fewer nodes, so it would benefit us to move to less populated neighborhood:

![](/uploads/swarmscan.png)
 
While you might be tempted to simply pick one of these less populated neighborhoods, it is best practice to use the neighborhood suggester API instead, since it will help to prevent too many node operators rapidly moving to the same underpopulated neighborhoods, and also since the suggester takes a look at the next depth down to make sure that even in case of a neighborhood split, your node will end up in the smaller neighborhood. 

```bash
curl -s https://api.swarmscan.io/v1/network/neighborhoods/suggestion
```

Copy the binary number returned from the API:

```bash
{"neighborhood":"01100011110"}
```

Use the binary number you just copied and set it as a string value for the `target-neighborhood` option in your config. 

```bash
## bee.yaml
target-neighborhood: "01100011110"
```
    
{{< admonition info >}}
Depending on your setup, you may need change the `target-neighborhood` option by updating your `bee.yaml` file, adding the `--target-neighborhood` command line flag, or edit a `.env` file, among several possible common options. 
{{< /admonition >}}


{{< admonition warning >}}
While you may update your neighborhood as often as you wish, it takes significant time for a full staking node fully sync and become eligible for playing in the redistribution, so it is not advised to hop from neighborhood to neighborhood too frequently.
{{< /admonition >}}


### Partial Withdrawals

2.2.0 will support the partial withdrawal of stake based on the price of xBZZ. In cases that the price of xBZZ rises so much that it is more than enough to act as collateral, a partial withdrawal will be allowed down to the minimum required stake (which, as mentioned in the section above, is no longer statically set, but depends dynamically on the price of xBZZ):

#### Step One:

Check for withdrawable stake:

```bash
curl http://localhost:1633/stake/withdrawable | jq
```
If there is any stake available for withdrawal, the amount will be displayed in PLUR:

```bash
{
  "withdrawableStake": "18411"
}
```

#### Step Two:

Withdraw available stake:

If there is any stake available for withdrawal, you can withdraw it using the `DELETE` method on `/stake/withdrawable`:

```bash
curl -X DELETE http://localhost:1633/stake/withdrawable
```



### Removal of the Bee Debug API

{{< admonition danger >}}
With the removal of the basic auth `/auth` and `/refresh` endpoints, Bee client users are now responsible for securing their Bee API endpoint themselves. 
{{< /admonition >}}

While the use of a firewall or other security measures are recommended, one other practical solution is to simply make sure that the Bee API is bound to the localhost only by default in your node's configuration options. This is now the new default configuration for new nodes, but you must update it manually for any already existing nodes as simply upgrading to 2.2.0 will not modify your configuration options. Make sure to append the `localhost` address of `127.0.0.1` to each `api-addr:` port (`:1633` by default).

```yaml
# HTTP API listen address
api-addr:  127.0.0.1:1633
```

Make sure that for your `p2p-addr:` option you DO NOT modify it to limit it to localhost, as it must be publicly available in order to communicate with the network.

```yaml
# P2P listen address
p2p-addr: :1634
```

{{< admonition warning >}}
You must also remove these three related options from your configuration which are no longer supported:

```yaml
# bcrypt hash of the admin password to get the security token
admin-password: ""
# debug HTTP API listen address
debug-api-addr: :1635
# enable debug HTTP API
debug-api-enable: false
```
{{< /admonition >}}


## Wrapping Up

It's crucial for you to follow the instructions in this guide to maintain your node’s eligibility for rewards and ensuring optimal performance. We also encourage you to take advantage of the new features such as [ACT](https://docs.ethswarm.org/docs/develop/tools-and-features/act), neighborhood hopping (and the new staking strategies it enables), and partial withdrawals. To find out more general information about the 2.2 release, check out the [one week notice article](https://blog.ethswarm.org/foundation/2024/bee-2-2-pre-release/).