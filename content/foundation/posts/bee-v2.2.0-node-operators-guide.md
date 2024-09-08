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

*Edit: 9/8/2024*

{{< admonition info >}}
2.2.0 upgrade guide currently under review. Please refer back to this guide on Sept. 9, 2024 for the completed 2.2.0 upgrade guide.
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

```yaml=
# HTTP API listen address
api-addr:  127.0.0.1:1633
```

Make sure that for your `p2p-addr:` option you DO NOT modify it to limit it to localhost, as it must be publicly available in order to communicate with the network.

```yaml
# P2P listen address
p2p-addr: :1634
```

{{< admonition warning >}}
You must also remove these three options from your configuration which are no longer supported:

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