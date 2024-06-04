+++
banner = "/uploads/2-1-pre-release.png"
images = [ "/uploads/2-1-pre-release.png" ]
categories = [ "Development updates" ]
date = 2024-05-13T00:00:00.000Z
description = "The Bee 2.1 release is right around the corner, and is scheduled to go live in just two weeks. This release brings with it several changes aimed at improving node performance as well as changes aimed at making the Bee client more streamlined and easy to work with."
references_and_footnotes = [ ]
title = "Bee Version 2.1 - Two Weeks Notice"
_template = "post"
slug="bee-2-1-pre-release"
+++

*Updated June 3rd, 2024 to include usage instructions for the `db repair-reserve` command.*

## Bee Version 2.1 Launches in Two Weeks

The Bee 2.1 release is right around the corner, scheduled to go live on Tuesday, May 28th, 2024. This release brings with it several changes aimed at improving node performance and making the Bee client more streamlined and easier to work with. Below, we outline the changes coming in the 2.1 release, along with the steps you, as a node operator or Swarm developer, need to take in order to prepare. 

{{< admonition warning >}}
Because Bee version 2.1 contains breaking changes, all node operators should update their nodes immediately following the release to avoid disruptions to their operations. 

Make sure to continue reading the rest of this article as it contains other steps which all node operators must take following the 2.1 release to avoid disruptions to their operations.
{{< /admonition >}}

## Reserve Repair Command

This release includes fixes to the localstore that prevent corrupted chunks from appearing in node reserves. However, these changes will not repair corrupted chunks already present in a node's reserve. To address this, the 2.1 release introduces the new `db repair-reserve` command, which will scan a node's reserves and fix any corrupted chunks. All node operators should make sure to run this command immediately following the 2.1 update on all their nodes. 

### How to Use the Command

{{< admonition warning >}}
Make sure to run the `db repair-reserve` immediately following the 2.1 upgrade. Running the command will repair corrupted chunks in your nodes' reserves and is expected to reduce freeze rates.

Also make sure to run the command one by one rather than concurrently for nodes which are running on the same physical disk, since running the command concurrently on multiple nodes could lead to drastic slowdowns.
{{< /admonition >}}

When running the command, specify the data directory of your node using the `--data-dir` flag. 

For example: 

```bash
bee db repair-reserve --data-dir=/home/bee/.bee
```

Make sure to replace `/home/bee/.bee` with your node's data directory if it differs from the one shown in the example. Make sure that the directory you specify is the root directory for your node's data files, not the localstore directory itself. This is the same directory specified using the `data-dir` option in your node's [configuration](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration/).



## Phasing Out of the Debug API 

The Bee client has historically utilised two APIs: the main Bee API and the Debug API, which share many of the same endpoints but also have unique functionalities. 

In order to streamline future client development and simplify node operation, ***the two APIs will be merged into the Bee API, and the Debug API will be removed entirely over the following two releases (2.1 and 2.2).⚠️*** 

The Debug API will be phased out and all of its exclusive endpoints will be integrated into the Bee API. 

The removal of the Debug API will take part in two phases:

#### ***Phase 1 - Bee 2.1:***

 In the 2.1 release, all exclusive endpoints of the Debug API will be integrated into the Bee API, and the Debug API will be marked as deprecated. This will give node operators and Swarm developers time to remove the Debug API from their setup and move over entirely to the Bee API.

#### ***Phase 2 - Bee 2.2:***

 In the 2.2 release, ***the Debug API will be entirely removed from the Bee client.⚠️*** 

{{< admonition warning >}}
Node operators and Swarm developers should use the period between the 2.1 and 2.2 releases to remove the Debug API from their setups and move over entirely to the Bee API in order to avoid any disruptions to their operations.
{{< /admonition >}}

### Changes to the `--restricted` Option For Bee 2.1

{{< admonition info >}}
The `--restricted` option and API authentication feature will be removed entirely in Bee version 2.2.
{{< /admonition >}}

Along with the merging of the Debug API into the Bee API, changes are being made to the `--restricted` option. Currently, the `--restricted` option is used together with the `/auth` endpoint to control access to [business related endpoints](https://docs.ethswarm.org/docs/bee/working-with-bee/security/) on the Bee API (it does not apply to the Debug API). The business related endpoints are not available by default without using the `--restricted` option and setting up authentication with the `/auth` endpoint.

In the 2.1 release, the `--restricted` option will be off by default, and all endpoints except for the authentication related `/auth` and `/refresh` endpoints will be available and unrestricted. If a node is started with the `--restricted` option turned on, the `/auth` and `/refresh` endpoints will be available, and the business endpoints will be restricted, requiring a security token generated from the `/auth` endpoint to access. 


Available only when a node is spawned with the `--restricted` option:
- /auth
- /refresh

Available by default, can be restricted and protected with basic authentication by enabling the `--restricted` option:
- /transactions (GET)
- /trasactions/{hash} (GET | POST | DELETE)
- /peers (GET)
- /peers/{address} (DELETE)
- /pingpong/{address} (GET)
- /reservestate (GET)
- /connect/{address} (GET)
- /blocklist (GET)
- /chunks/{address} (GET)
- /toplogy (GET)
- /welcome-message (GET | POST)
- /balances (GET)
- /balances/{peer} (GET)
- /consumed (GET)
- /consumed/{peer} (GET)
- /timesettlements (GET)
- /settlements (GET)
- /settlements/{peer} (GET)
- /chequebook/cheque/{peer} (GET)
- /chequebook/cheque (GET)
- /chequebook/cashout/{peer} (GET | POST)
- /chequebook/balance (GET)
- /chequebook/address (GET)
- /chequebook/deposit (POST)
- /chequebook/withdraw (POST)
- /wallet (GET)
- /wallet/withdraw/{coin} (POST)
- /stamps (GET)
- /stamps/{batchId} (GET)
- /stamps/{batch_id}/buckets (GET)
- /stamps/{amount}/{depth} (POST)
- /stamps/topup/{batch_id}/{amount} (PATCH)
- /stamps/dilute/{batch_id}/{depth} (PATCH)
- /batches (GET)
- /accounting (GET)
- /stake/{amount} (POST)
- /stake (GET | DELETE)
- /redistributionstate (GET)
- /status (GET)
- /status/peers (GET)
- /rchash/{depth}/{anchor1}/{anchor2} (GET)

All other endpoints are unrestricted and are always available.


## Localstore Transaction Refactor

The current implementation of localstore transactions (which are responsible for write operations to the chunkstore) is complex, prone to errors, and difficult to maintain. Therefore in 2.1 it is being replaced with LevelDB batch transactions. 

The benefits of this change include:

* LevelDB batch transactions allow for transactions to be bundled together in batches rather than executing them one by one. This not only improves efficiency but also reduces the potential for errors.
* By relying on LevelDB batch transactions, the continued maintenance of a custom transaction implementation is no longer required.

This change will improve overall node performance and stability for node operators and Swarm developers. 

## Freezing Quota Feature

Currently, there is a relatively high probability of nodes getting frozen, even for those honestly participating in the redistribution game. The localstore changes described above are expected to reduce freeze rates by improving the consistency of nodes' reserves. As an additional measure to reduce freeze rates, a freezing quota feature has been added to the newest smart contract, which will be initially disabled at the launch of Bee version 2.1. Based on the impact observed on freezing rates post-release, the freezing quota may be enabled to further decrease freeze occurrences.

## Stay Tuned

Don't forget to start preparing early for the 2.1 release, and stay tuned for additional updates over the next two weeks. Make sure you're [following us on Twitter](https://twitter.com/ethswarm) for the most up-to-date information, and that you've [joined us on Discord](https://discord.gg/uX8ekKcwRu) to participate in all the latest community discussions.