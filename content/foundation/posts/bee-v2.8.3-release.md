+++
banner = "/uploads/bee-2-8-3.png"
images = [ "/uploads/bee-2-8-3.png" ]
categories = [ "Development updates" ]
date = 2026-10-08T00:00:00.000Z
description = "Bee v2.8.3 includes a security fix, and all node operators should upgrade as soon as it is released on October 15th, 2026. It also lets operators pause redistribution without a restart, fixes a bug that could silently stop uploads, and makes reserve sampling much lighter on memory."
references_and_footnotes = [ ]
title = "Bee Version 2.8.3 Release Announcement"
_template = "post"
slug = "bee-2-8-3-release"
url = "/foundation/2026/bee-2-8-3-release/"
aliases = [
  "/foundation/2026/bee-2-8-3-pre-release/"
]
+++

*Bee v2.8.3 includes a security fix, and all node operators should upgrade as soon as it is released on **October 15th, 2026**.
It also lets operators pause redistribution without a restart, fixes a bug that could silently stop uploads, and makes reserve sampling much lighter on memory.*

## What Is Changing

Bee v2.8.3 includes a security fix.
Alongside it, the release gives full-node operators more control over redistribution, fixes a bug that could quietly stop a node from uploading, and makes nodes lighter on memory and more compatible with common RPC providers.

{{< admonition danger >}}
**Upgrade to v2.8.3 as soon as it is released on October 15th.**
This release includes a security fix that every node operator should apply.
{{< /admonition >}}

{{< admonition info >}}
The upgrade is **non-disruptive**.
It includes no breaking p2p protocol changes and needs no manual migration.
Two things are worth knowing before you upgrade:

- **Developers** who use ACT with `POST /chunks` or `POST /soc` should read API & Developer Changes below.
- **Operators** with monitoring alerts on Bee's logs should check the Monitoring and Alerts section below.

The network's minimum supported version remains **v2.8.0**.
{{< /admonition >}}

## Security Fix

To protect nodes that have not yet upgraded, Swarm Foundation is holding back the details of the security fix until operators have had time to move to the new version.
All node operators should upgrade as soon as v2.8.3 is released.

## Pause Redistribution Without Restarting

Full-node operators can now switch redistribution participation off and back on while the node is running.
Until now, the only way to opt out was to change the node's configuration and restart it, and a restart in the middle of a round could cost the node that round.

When participation is paused, the node stops entering new rounds but finishes any round it is already part of.
Before taking a node down for maintenance, you can also check `GET /redistributionstate` to see whether it is still in the middle of a round.

{{< admonition tip >}}
To pause participation:

```bash
curl -X PATCH http://localhost:1633/redistributionstate \
  -H "Content-Type: application/json" \
  -d '{"enabled": false}'
```

Send `{"enabled": true}` to resume.
The setting is **not saved across restarts**: participation switches back on whenever the node restarts.
{{< /admonition >}}

## Uploads No Longer Stall Silently

Bee v2.8.3 fixes a bug where a single invalid chunk could stop a node from uploading anything to the network, without logging an error.
The stall survived restarts, so an affected node could stay stuck for hours.

After upgrading, the invalid chunk is dropped and any pending uploads resume on their own.
**No manual action is needed.**

## A Healthier Reserve

Nodes now check more carefully that the chunks they receive from peers are valid, so invalid chunks are no longer stored in a node's reserve.

<!-- PENDING #5645: keep only if merged before release -->
Any invalid chunks that earlier versions already stored are cleaned up automatically the first time the node starts on v2.8.3.
<!-- /PENDING #5645 -->

When a full node's neighborhood is selected in a redistribution round, the node samples its reserve, which can mean working through millions of chunks.
Bee v2.8.3 makes this much lighter: in testing, the memory used during a sampling round fell by more than half.
The result of the sampling is unchanged.

<!-- PENDING #5634: keep only if merged before release -->
Sampling also skips chunks from soon-to-expire postage batches earlier, which makes it faster on nodes that hold many of them.
<!-- /PENDING #5634 -->

## Postage Sync with More RPC Providers

Some RPC providers limit how many blocks a single request can cover.
Nethermind, for example, allows up to 1,000 blocks by default, while Bee could ask for up to 5,000 at a time.
A node using such a provider could fall behind on postage data and eventually shut itself down.

Bee now asks for **1,000 blocks** at a time by default, so it works with these providers out of the box, and the value is configurable.
Bee also now waits between retries when an RPC call fails, which eases the load on your RPC endpoint.

{{< admonition tip >}}
The smaller default means a catching-up node makes more RPC calls than before.
If your provider allows wider block ranges, you can raise the value, for example in `bee.yaml`:

```yaml
postage-sync-block-range: 5000
```

The equivalent flag is `--postage-sync-block-range` and the environment variable is `BEE_POSTAGE_SYNC_BLOCK_RANGE`.
{{< /admonition >}}

## Other Operator Improvements

- **Faster peer discovery and sync.** Nodes now share peer information more efficiently, and neighborhoods settle more quickly after nodes join or restart. Several bugs in how nodes introduce peers to each other are also fixed.
- **More reliable AutoTLS.** For operators running WSS with AutoTLS, certificate registration no longer hangs or fails against the default registration service, and a certificate that expired while the node was offline is now renewed on startup.
- **SIMD hashing crash fixed.** On Linux x86-64 nodes started with `--use-simd-hashing`, heavy hashing load such as reserve sampling could crash the node and leave it restarting. This is now fixed. Nodes running without the flag were never affected.
- **Clearer staking errors.** A stake deposit that the staking contract would reject used to be sent to the chain anyway and fail with a generic error. Bee now checks the deposit first and, if it is too small, tells you the minimum required. `GET /stake` also now shows this `minimumDeposit`.

## Monitoring and Alerts

If you monitor your node with Prometheus and Grafana:

- **API metrics are back.** The `bee_api_*` metrics have been missing from `/metrics` since v2.2.0. API dashboard panels that have sat empty will populate again.
- **Connection metrics are split by transport.** `bee_libp2p_created_connection_count` and `bee_libp2p_handled_connection_count` now show which transports your node's connections use, such as WSS. Wrap existing queries in `sum(...)` to keep a single total.
- **New metrics** show whether redistribution participation is switched on (`bee_storageincentives_redistribution_enabled`) and track peer discovery activity.

{{< admonition tip >}}
**Check your alerts.**
The `stream handler: handshake: handle failed` log line is now a warning instead of an error, because it fired constantly on healthy nodes.
The log message for content that cannot be found now reads `erasure coded content not found` instead of `swarmageddon has begun`.
Alerts that match either of these should be updated.
{{< /admonition >}}

## API & Developer Changes

{{< admonition warning >}}
**ACT is no longer supported on `POST /chunks` and `POST /soc`.**
ACT never actually protected data uploaded through these endpoints.
ACT headers sent to them are now ignored, and uploads return a plain reference.

Use `/bytes` or `/bzz` for access-controlled uploads, where ACT is unchanged.
References created with ACT on earlier versions still resolve.
{{< /admonition >}}

Other API changes:

- **GSOC subscriptions** can now choose which fields of each message they receive. The default is unchanged, so existing clients are unaffected.
- **Slow GSOC subscribers** now keep a backlog of up to 256 messages. When a client falls too far behind, the oldest messages are dropped.
- **Range downloads** with `Swarm-Lookahead-Buffer-Size: 0` could return incomplete data. This is now fixed. The default download path was not affected.
- **Stewardship** (`PUT /stewardship`) now also restores the redundant copies of erasure-coded content, which it previously reported as restored without doing so.
- **Redistribution control** and **staking** changes are described above.

{{< admonition tip >}}
The OpenAPI specification moves to version **8.2.0**.
Developers using generated clients should regenerate them.
{{< /admonition >}}

## Full Changelog

For the complete list of changes and all technical details, see the [Bee v2.8.3 release notes](https://github.com/ethersphere/bee/releases/tag/v2.8.3) on GitHub (live on release day).

## Need Help?

If you're a node operator or developer with questions about upgrading or the new features, join the [#node-operators](https://discord.gg/qs7QBKxrR4) channel on the Swarm Discord.

---

*Bee v2.8.3 is scheduled for release on **October 15th, 2026**.
This post will be updated when it goes live.
Plan to upgrade on release day.*
