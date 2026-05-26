+++
banner = "/uploads/bee-2-8.jpg"
images = [ "/uploads/bee-2-8.jpg" ]
categories = [ "Development updates" ]
date = 2026-05-26T00:00:00.000Z
description = "Bee v2.8.0 is a security-focused release that hardens Bee's p2p layer with improvements to handshake validation, peer address records, underlay handling, signed timestamps, nonce validation, chequebook verification, and protocol compatibility. It includes breaking p2p protocol changes, so node operators should upgrade promptly."
references_and_footnotes = [ ]
title = "Bee Version 2.8.0 Released"
_template = "post"
slug = "bee-2-8-release"
url = "/foundation/2026/bee-2-8-release/"
aliases = [
  "/foundation/2026/bee-2-8-release-notice/"
]
+++

## Bee v2.8.0 Released

*Full [release notes](https://github.com/ethersphere/bee/releases/tag/v2.8.0) can be found on GitHub.*

This release focuses on security hardening in Bee's p2p layer, with improvements around handshake validation, address record verification, underlay handling, signed timestamps, nonce validation, chequebook verification, and protocol compatibility.

{{< admonition warning >}}
Bee v2.8.0 includes breaking changes that affect Bee's p2p protocols. Node operators should upgrade promptly to stay compatible with the updated network.

If you are not already in the [#node-operators Discord channel](https://discord.gg/kHRyMNpw7t), make sure to join it for real-time updates and upgrade coordination.
{{< /admonition >}}

## What Is Changing

Bee v2.8.0 includes the following changes:

- Improved handshake validation
- Stronger nonce validation
- Stricter underlay address limits
- Signed timestamps for address records
- Chequebook verification improvements
- New logs and metrics for rejected peer records
- Updated p2p protocol compatibility

## Improved Handshake Validation

Bee v2.8.0 improves how nodes handle malformed handshake messages. Invalid peer handshake data is now rejected cleanly instead of being able to disrupt node operation.

This strengthens the handshake path and helps nodes remain available even when receiving invalid peer data.

## Stronger Nonce Validation

Bee v2.8.0 strengthens how peer identity data is verified. The overlay nonce is now included in the signed address record, and overlay verification is mandatory.

This means peer records need to match their signed identity data before they can be accepted. Invalid or tampered records received through gossip are dropped before they reach the address book.

## Stricter Underlay Address Limits

Bee v2.8.0 adds explicit limits to underlay address data exchanged between peers. Peer records are now limited by both the number of underlay addresses and the serialized size of the underlay field.

Peer records are limited to a maximum of **20 underlay addresses** and a **4 KB serialized size cap** for the underlay field. Both limits must be respected. The 4 KB cap applies to the serialized underlay data sent and received by the node.

Oversized inbound records are rejected, while outbound underlay lists are prioritized and trimmed so the most useful addresses are kept.

This helps protect nodes from processing excessive peer-address data.

## Signed Timestamps for Address Records

Address records now include signed timestamps. This gives Bee a way to distinguish fresh peer-location information from stale or replayed records.

With this change, Bee can reject old, future-dated, or too-frequent address updates while preserving valid newer records. This helps the address book move forward instead of accepting outdated peer-location data indefinitely.

## Chequebook Verification Improvements

Bee v2.8.0 introduces opt-in chequebook verification improvements for full nodes. Peer chequebook information can now be checked before the peer is accepted as a valid network peer.

Chequebook verification is **disabled by default** and can be enabled with the `--chequebook-verification` flag.

Verification only runs when the operator explicitly enables it and the node is a full node with chequebook and chain functionality enabled. Light nodes skip chequebook verification.

When chequebook verification is enabled, the node verifies incoming full-node connections and rejects peers whose chequebook balance is lower than the configured threshold. The default minimum chequebook balance is **11 BZZ**, and operators can configure this threshold with `--chequebook-min-balance`.

Remote peers do not need to enable chequebook verification themselves in order to be accepted. The check is based on whether the peer's chequebook balance meets the threshold configured by the verifying node.

This feature provides an optional additional layer of defense for full node operators who want to reject peers that do not maintain a sufficient chequebook balance. Note that configuring it too a value which is too high will reduce the connectivity of your node, so start conservatively.

## New Logs and Metrics for Node Operators

Bee v2.8.0 adds clearer logs and metrics around rejected peer data, making it easier for node operators to understand when invalid records are being dropped.

This includes additional observability for rejected handshakes, oversized underlay records, timestamp validation failures, and chequebook verification outcomes. These logs and counters should help operators distinguish normal peer churn from invalid or malformed peer data.

## Updated p2p Protocol Compatibility

Some of these changes update Bee's p2p protocol behavior and address record format. As a result, older peers will not be able to handshake or exchange peer records with upgraded nodes.

Specifically, the handshake protocol version changes from `14.0.0` to `15.0.0`, and Hive changes from `1.1.0` to `2.0.0`.

{{< admonition warning >}}
**Node operators should upgrade as soon as possible.**

Bee v2.8.0 includes breaking p2p protocol changes. Older nodes may not be able to handshake or exchange peer records with upgraded nodes.
{{< /admonition >}}

## Full Changelog

For a full list of changes, refer to the [Bee v2.8.0 release notes](https://github.com/ethersphere/bee/releases/tag/v2.8.0) on GitHub.

## Need Help?

If you're a node operator or developer and have questions about upgrading, join the [#node-operators](https://discord.gg/kHRyMNpw7t) channel on Swarm Discord.



