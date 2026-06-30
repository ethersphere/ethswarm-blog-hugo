+++
banner = "/uploads/bee-2-8-1.png"
images = [ "/uploads/bee-2-8-1.png" ]
categories = [ "Development updates" ]
date = 2026-06-30T00:00:00.000Z
description = "Bee v2.8.1 is a non-disruptive release focused on performance, data durability, and developer experience, with some operational cleanup. It brings faster chunk hashing, crash-safe local storage, reduced blockchain RPC traffic, and a step toward browser-based uploads."
references_and_footnotes = [ ]
title = "Bee Version 2.8.1 Release Announcement"
_template = "post"
slug = "bee-2-8-1-release"
url = "/foundation/2026/bee-2-8-1-release/"
aliases = [
  "/foundation/2026/bee-2-8-1-pre-release/"
]
+++

*Bee v2.8.1 is a non-disruptive release focused on performance, data durability, and developer experience, with some operational cleanup. It is scheduled for release on **July 7th, 2026**.*

## What Is Changing

This release brings faster chunk hashing, stronger crash safety for local storage, reduced blockchain RPC traffic, and a step toward browser-based uploads, alongside some operational cleanup.

{{< admonition info >}}
Bee v2.8.1 is **non-disruptive for nodes already on the current network**. It includes no breaking p2p protocol changes, and the new performance functionality is opt-in. Two things to note before upgrading:

- If you use `bee dev` for local development, **dev mode has been removed**. See the alternatives below.
- If you are still running a **Bee v2.6.0 or older** node, follow the upgrade path below.
{{< /admonition >}}

## Faster Chunk Hashing with SIMD

Bee v2.8.1 adds an optional, hardware-accelerated (SIMD) path for chunk hashing, a frequent and CPU-intensive operation. On supported hardware it noticeably lowers the CPU cost of hashing, which speeds up uploads and other hashing-heavy work. The SIMD acceleration relies on specialized x86-64 CPU instructions that are currently built for Linux amd64.

{{< admonition tip >}}
**Linux x86-64 (amd64) operators** can opt in by starting Bee with `--use-simd-hashing` (off by default).
{{< /admonition >}}

## Crash-Safe Local Storage

This release fixes a data-integrity issue that could affect a node interrupted **mid-write** (for example, by a crash or power loss while actively uploading). Under those conditions, a node could end up with corrupted local storage and, in some cases, serve invalid chunk data. Idle nodes were not affected.

Bee v2.8.1 closes the window that caused this and adds an automatic integrity check: after an unclean shutdown, the node now validates chunks against their content hashes during recovery and removes any that are corrupted, so it starts clean and avoids serving corrupted data. **This recovery is automatic. No manual action or repair command is required.** The change improves the real-world durability and reliability of data stored across the network.

## Reduced Blockchain RPC Traffic

Bee nodes query their blockchain RPC endpoint constantly, which adds cost and rate-limit pressure for operators on paid or self-hosted RPC providers. Bee v2.8.1 substantially reduces how often a node makes those calls (in part by relying on the chain's average block time to estimate values locally between syncs), lowering RPC cost and load.

{{< admonition tip >}}
The block-number syncing interval defaults to **`10`**, so operators who want to keep the default don't need to do anything.

To change it, set the `block-sync-interval` option using any of Bee's configuration methods (CLI flag, environment variable, or YAML config). 

For example, in `bee.yaml`:

```yaml
block-sync-interval: 10
```

The equivalent flag is `--block-sync-interval` and the environment variable is `BEE_BLOCK_SYNC_INTERVAL`.

- A higher value means fewer RPC calls, at the cost of a slightly staler block-number estimate.
- `1` refreshes the block number as often as possible.
- `0` is not allowed; the node treats it as "no interval" and clamps it to `1`.
{{< /admonition >}}

## Client-Side Stamping for Browser Uploads

Bee v2.8.1 lets a client sign its own postage stamps and upload already-stamped chunks, rather than handing raw data to a node to stamp. This opens up new possibilities for applications built on Swarm:

- **Browser-based uploads with the key in the browser.** The signing key can stay client-side, so an app can upload to Swarm directly from the browser without entrusting its key to a node.
- **Faster uploads through parallel stamping.** Stamp signing can be spread across Web Workers, parallelizing the work to improve upload performance.
- **Per-chunk batch selection.** Different chunks can be stamped with different postage batches within the same upload.

Together with the AutoTLS and secure WebSocket (WSS) support from v2.7.0, this is another step toward running Bee directly in the browser.

{{< admonition tip >}}
**For developers:** this is a feature update to the existing `/chunks/stream` WebSocket endpoint. To upload pre-signed (stamped) chunks, set the `Swarm-Postage-Batch-Id` header on the `/chunks/stream` request. Browsers, which can't set custom headers on a WebSocket connection, can pass the `swarm-tag` query parameter instead.
{{< /admonition >}}

## Dev Mode Has Been Removed

The `bee dev` command (and its `devnode` / `start-dev` internals) has been removed. Bee now supports only its three production runtime modes: **light, full, and ultra-light**. This completes the deprecation first announced with Bee v2.7.0.

Node operators are unaffected, as production nodes never ran in dev mode. 

{{< admonition tip >}}
**Developers who used `bee dev` for local development** should switch to one of two options:

- **[Bee Factory](https://github.com/ethersphere/bee-factory):** a one-command local Swarm development stack (multiple Bee nodes plus a local blockchain), ideal for fully local development and integration testing.
- **[The Sepolia testnet configuration](https://docs.ethswarm.org/docs/bee/working-with-bee/configuration/#sepolia-testnet-configuration):** run a real Bee node against the public test network for realistic, pre-mainnet testing.
{{< /admonition >}}


## More Efficient Peer Handshakes

Previously, a Bee node re-signed a new address record on **every handshake**, each carrying a fresh timestamp, so even when nothing had changed, the record looked new to its peers. Receiving nodes treated each one as an update, wrote it to their address book, and re-gossiped it, producing needless disk writes, signing work, and gossip traffic across the whole network.

Bee v2.8.1 fixes this: the node now signs its address record **once and reuses the identical record**, re-signing only when its advertised addresses or chequebook actually change. A reconnecting peer now costs a cached read and no disk write, reducing disk I/O, CPU, and gossip traffic across the network.

{{< admonition tip >}}
**For developers building on or reimplementing Bee:** re-signing the address record on every handshake was an inessential pattern in the original Bee code, and it is worth avoiding. The correct approach is to sign the record once and re-sign only when the advertised data actually changes.
{{< /admonition >}}

## Bee v2.6.0 Support Removed

The network's minimum supported version has been **v2.8.0** since the [v2.8.0 release](https://blog.ethswarm.org/foundation/2026/bee-2-8-release/#updated-p2p-protocol-compatibility), which introduced breaking p2p protocol changes. Bee v2.8.1 now removes the remaining v2.6.0 backward-compatibility code, so nodes still on v2.6.0 or earlier also lose the ability to upgrade directly to v2.8.1.

{{< admonition warning >}}
**If you are still running a Bee v2.6.0 (or older) node:** upgrade to **v2.8.0 now**, then to **v2.8.1** once it is released, or re-install the node fresh on **v2.8.1**.
{{< /admonition >}}

## API & Developer Changes

This release includes several additive, backward-compatible API changes:

- The `/soc` endpoint now honors the `Swarm-Tag`, `Swarm-Pin`, and `Swarm-Deferred-Upload` headers, bringing single-owner-chunk uploads in line with other upload endpoints.
- A new `GET /batches/{batch_id}` endpoint fetches a single global postage batch directly by ID.
- A new `PATCH /stamps/{batch_id}` endpoint updates the label of an existing postage batch; the label is local metadata only, has no on-chain effect, and persists across restarts.
- `GET /chainstate` now returns `minimumValidityBlocks`, so applications can compute postage-batch validity and cost without querying the chain directly.
- Postage stamp responses (`GET /stamps`, `GET /stamps/{batch_id}`) now include `utilizationRatio`, a value between 0 and 1 giving true fractional batch usage.
- For single-file `POST /bzz`, Content-Type is optional: if the client sends it, it is preserved exactly. If not, the content type is automatically detected.
- `GET /wallet` now returns balances even when swap or chequebook is disabled, so light and chequebook-disabled nodes can read their balances.
- The ACT and grantee endpoints now honor a caller-specified default redundancy level.

{{< admonition tip >}}
These changes come with an updated OpenAPI specification. Developers using generated clients should regenerate them.{{< /admonition >}}

## Bug Fixes & Maintenance

A few reliability fixes worth highlighting:

- A node that lacks sufficient stake for reserve-capacity doubling no longer fails at startup; it now starts normally (without redistribution participation) and updates its on-chain status automatically once enough stake is added.
- The redundancy retrieval path now reads exactly the values it expects and fails cleanly instead of returning an incomplete result, improving erasure-coding correctness.
- The hive (peer discovery) and pullsync (chunk sync) protocols are hardened against malformed peer messages to prevent rare panics.
- The OpenAPI specification has been aligned with the actual API behavior, so generated clients match runtime behavior.

This release also includes a set of smaller fixes: clearer fail-fast behavior when a node's stored block is ahead of its RPC's chain tip, more reliable stamp-expiry handling, reconciled peer counts in the status endpoints, the ability to set the blockchain RPC endpoint via environment variable, and a fix that prevents `--resync` from wiping the postage snapshot.

On the maintenance side: the Docker Compose environment variables were updated to match the current configuration; a postage-snapshot optimization from v2.7.1 was reverted and re-applied without the component that caused issues (keeping the faster snapshot sync); and **go-ethereum was updated, pulling in upstream security and vulnerability fixes**.

## Full Changelog

For the complete list of changes, see the [Bee v2.8.1 release changelog](https://github.com/ethersphere/bee/releases/tag/v2.8.1) on GitHub (live on release day).

## Need Help?

If you're a node operator or developer with questions about upgrading or the new features, join the [#node-operators](https://discord.gg/qs7QBKxrR4) channel on the Swarm Discord.

---

*Bee v2.8.1 is scheduled for release on **July 7th, 2026**. This post will be updated when it goes live. Start planning your upgrade now, especially if you use dev mode for local development or still run a Bee v2.6.0 node.*
