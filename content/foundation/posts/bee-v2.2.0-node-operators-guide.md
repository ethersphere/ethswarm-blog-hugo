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
DO NOT UPGRADE TO 2.2.0 before completing this guide, allow your node to remain at version 2.1.0 until these steps are completed. All full staking nodes must follow the steps described below to continue to be eligible for rewards.
{{< /admonition >}}

This node operator's guide contains step by step instructions for the requirements to upgrade your node to 2.2.0 as well as instructions for other new features such as neighborhood hopping and partial withdrawals. To learn more about all the new features included in the 2.2.0 release, check out the [one week announcement article](https://blog.ethswarm.org/foundation/2024/bee-2-2-pre-release/).


### Required 2.2.0 Upgrade Steps 

One of the most significant and ***breaking*** aspects the 2.2.0 upgrade is the updated staking contract which allows for neighborhood hopping. Therefore, node operators must withdraw their stake from the previous staking contract ***(while their nodes are still operating on version 2.1.0)***, and then re-stake into the new contract designed for Bee 2.2.0, ***before*** updating their nodes to version 2.2.0:

#### Step One:

Once the full version of 2.2.0 is released on Github, the current staking contract will be disabled, and withdrawals will be enabled.

#### Step Two:

Once the contract is disabled, withdraw all your stake by calling the `/stake` endpoint with the `DELETE` method (there is no time limit for moving your stake, however the longer you wait, the more potential rewards are lost):

    ```bash
    curl DELETE http://localhost:1633/stake
    ```
This command will withdraw all stake from your node to your node's Gnosis Chain address. 

{{< admonition info >}}
If you may have accidentally overstaked more xBZZ than is strategically required as has been observed with some nodes that have 100s or 1000s of xBZZ, this withdrawal offers you a one-time chance to recover any excess stake which you deposited unintentionally.  
{{< /admonition >}}

#### Step Three:

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

#### Step Four:

Update your node's configuration option `target-neighborhood`


{{< admonition info >}}
This step is not strictly required, as you may simply allow your node to use the default `neighborhood-suggester` option, which is set by default to an [endpoint from Swarmscan](https://api.swarmscan.io/v1/network/neighborhoods/suggestion) that returns an underpopulated neighborhood for your node to join. 
{{< /admonition >}}



To manually update the `target-neighborhood` option, simply set it to the string value of the binary representation of the neighborhood you wish to join. You can find a [list of underpopulated neighborhoods](https://swarmscan.io/neighborhoods) from Swarmscan:

```bash=
## bee.yaml
target-neighborhood: "0010100001"
```


By using the `target-neighborhood` option your node will mine a new overlay address within the target neighborhood. From now on, your node will be able to change neighborhoods at will. As a general rule of thumb, the highest rewards can be statistically found in the least populated neighborhoods. 
    
{{< admonition info >}}
Depending on your setup, you may need change the `target-neighborhood` option by updating your `bee.yaml` file, adding the `--target-neighborhood` command line flag, or edit a `.env` file, among several possible common options. 
{{< /admonition >}}


{{< admonition warning >}}
While you may update your neighborhood as often as you wish, it takes significant time for a full staking node fully sync and become eligible for playing in the redistribution, so it is not advised to hop from neighborhood to neighborhood too frequently.
{{< /admonition >}}

#### Step Five:

Upgrade to 2.2.0 

In this final step, upgrade your node to 2.2.0 using your preferred [installation method](https://docs.ethswarm.org/docs/bee/installation/install).  

### Localstore Migration Caution

Before every Bee client upgrade, it is best practice to ALWAYS take a full backup of your node. How

The 2.2.0 upgrade includes a localstore migration which will take an extended time to complete (the exact time will vary based on your particular system specs). You can[ check your node's logs](https://docs.ethswarm.org/docs/bee/working-with-bee/logs-and-files) for messages related to the migration in order to check on the migration progress.



{{< admonition danger >}}
Do not turn off your node after you have started the 2.2.0 upgrade while the node is still in the process of the localstore migration, as it could cause your node to become corrupted! Wait until the migration is complete before stopping or restarting your node. ⚠️
{{< /admonition >}}

### Partial Withdrawals

As mentioned above, 2.2.0 will support the partial withdrawal of stake based on the price of xBZZ. In cases that the price of xBZZ rises so much that it is more than enough to act as collateral, a partial withdrawal will be allowed down to the minimum required stake (which, as mentioned in the section above, is no longer statically set, but depends dynamically on the price of xBZZ):

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

```yaml=
# HTTP API listen address
api-addr:  127.0.0.1:1633
```

Make sure that for your `p2p-addr:` option you DO NOT modify it to limit it to localhost, as it must be publicly available in order to communicate with the network.

```yaml
# P2P listen address
p2p-addr: :1634
```

{{< admonition info >}}
While not strictly required, it's also good practice to remove any of the options from our configuration which are no longer supported due to the changes described above. To clean up your config file, remove these three options:

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