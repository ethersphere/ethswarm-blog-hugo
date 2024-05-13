+++
banner = "/uploads/general-graphic-4.jpg"
images = [ "/uploads/general-graphic-4.jpg" ]
categories = [ "Development updates" ]
date = 2024-05-13T00:00:00.000Z
description = "The Bee 2.1 release is right around the corner, and is scheduled to go live in just two weeks. This release brings with it several changes aimed at improving node performance as well as changes aimed at making the Bee client more streamlined and easy to work with."
references_and_footnotes = [ ]
title = "Bee Version 2.1 - Two Weeks Notice"
_template = "post"
slug="bee-2-1-pre-release"
+++

## Bee Version 2.1 Launches in Two Weeks

The Bee 2.1 release is right around the corner, and is scheduled to go live on DATE. This release brings with it several changes aimed at improving node performance and at making the Bee client more streamlined and easy to work with. Below are outlined the changes coming in the 2.1 release, along with any steps you as a node operator or Swarm developer need to take in order to prepare. 

## Phasing Out of the Debug API 

The Bee client has long had two APIs used for interaction with the Bee client, the main Bee API along and the Debug API. The two APIs shared many of the same endpoints with the same functionality, with several exclusive to one or the other API.

In order to streamline future client development and simplify node operation, ***the two APIs will be merged into the Bee API, and the Debug API will be removed over the following two releases (2.1 and 2.2).⚠️*** 

The Debug API will be phased out and all of its exclusive endpoints will integrated into the Bee API. 

The removal of the Debug API will take part in two phases:

#### ***Phase 1 - Bee 2.1:***

 In the 2.1 release, all Debug API exclusive endpoints will be integrated into the Bee API and the Debug API will be marked as deprecated. This will give node operators and Swarm developers time to remove the Debug API from their setup and move over entirely to the Bee API.

#### ***Phase 2 - Bee 2.2:***

 In the 2.2 release ***the Debug API will be entirely removed from the Bee client.⚠️*** 

{{< admonition danger >}}
Node operators and Swarm developers should use the period between the 2.1 and 2.2 to remove the Debug API from their setups and move over entirely to the Bee API in order to avoid any disruptions in their operations.
{{< /admonition >}}

## Changes to the `--restricted` Option 

Along with the merging of the Debug API into the Bee API, changes are being made to the `--restricted` option. Currently the `--restricted` option is used together with the `/auth` endpoint to control access to [business related endpoints](https://docs.ethswarm.org/docs/bee/working-with-bee/security/) on the Bee API (it does not apply to the Debug API). The business related endpoints are not available by default without using the `--restricted` option and setting up authentication with the `/auth` endpoint.

In the 2.1 release, the business related endpoints will now all be made available by default, and only the authentication related `/auth` and `/refresh` endpoints will not be available by default. If a node is spawned with the `--restricted` option, the `/auth` and `/refresh` endpoints will be made available, and the  business endpoints will be restricted and require the security token generated from the `/auth` endpoint to be accessed. 


Available only when a node is spawned with the `--restricted` option:
- /auth
- /refresh

Available by default, can be restricted with the `--restricted` option:
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

All other endpoints have no restrictions and are always available.


## Localstore Transaction Optimisation

The current implementation of localstore transactions (which are responsible for write operations to the chunkstore) is complex, prone to errors, and difficult to maintain. Therefore in 2.1 it is being replaced with LevelDB batch transactions. 

The benefits of this change include:

* LevelDB batch transactions allow for transactions to be bundled together in batches rather than executed one by one, which improves efficiency and decreases the potential for errors.
* By relying on LevelDB batch transactions, the continued maintenance  of a custom transaction implementation is no longer required.

This change will improve overall node performance and stability for node operators and Swarm developers. 

## Stay Tuned

Don't forget to start preparing early for the 2.1 release, and stay tuned for additional updates over the next two weeks. Make sure you're [following us on Twitter](https://twitter.com/ethswarm) for all the most up to date information, and that you've [joined us on Discord](https://discord.gg/uX8ekKcwRu) to keep up with all the latest community discussions.