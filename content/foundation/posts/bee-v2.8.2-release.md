+++
banner = "/uploads/bee-2-8-2.png"
images = [ "/uploads/bee-2-8-2.png" ]
categories = [ "Development updates" ]
date = 2026-08-28T00:00:00.000Z
description = "Bee v2.8.2 is a security-hardening release, focused on keeping nodes running when the data they receive is not what it claims to be. It is available now, and every node operator should upgrade."
references_and_footnotes = [ ]
title = "Bee Version 2.8.2 Release Announcement"
_template = "post"
slug = "bee-2-8-2-release"
url = "/foundation/2026/bee-2-8-2-release/"
aliases = [
  "/foundation/2026/bee-2-8-2-pre-release/"
]
+++

*Bee v2.8.2 is a security-hardening release, focused on keeping nodes running when the data they receive is not what it claims to be. It is available now, and every node operator should upgrade.*

## What Is Changing

As announced on August 19th, v2.8.2 is a security-related release. Swarm Foundation held back the technical details until operators had time to move to the patched version. Those details are now published in full with the release on GitHub, and this post covers what the release means and what operators should do about it.

The release hardens Bee against untrusted or corrupted input, tightens the permissions on data a node writes to disk, and brings tracing up to date with OpenTelemetry. It is backward compatible with v2.8.1 and needs no network-wide coordination.

{{< admonition danger >}}
**Every node operator should be running v2.8.2.** Nodes on v2.8.1 or earlier do not have these fixes.

The network's minimum supported version is still **v2.8.0**. Nodes on v2.6.0 or older cannot upgrade directly and must move to v2.8.0 first.
{{< /admonition >}}

## Why This Release Matters

A Bee node spends its life handling data it did not create: chunks and messages from other nodes, responses from a blockchain RPC provider, and records it wrote to its own disk in an earlier session. Almost all of that data is exactly what it claims to be. This release is about the rest of it.

Across manifest decoding, chunk storage, file assembly, settlement, and transaction handling, Bee now checks what it reads before acting on it, instead of trusting the sizes and shapes declared inside the data itself. Where a malformed or corrupted value could previously bring the process down, the node now returns an error and keeps going. Behind those specific checks sits a general safety net: background workers are wrapped so that an unexpected failure in one of them is caught and logged rather than taking the whole node with it.

The practical effect is uptime. A node that crashes stops serving and syncing chunks, drops its peer connections, and cannot take part in a redistribution round while it is down. Every fix in this group is aimed at keeping the node up and doing its job.

The complete breakdown, issue by issue, is in the [v2.8.2 release notes](https://github.com/ethersphere/bee/releases/tag/v2.8.2) on GitHub.

## What Operators Should Check

Three changes are worth a few minutes of your time after upgrading.

**Tracing configuration has changed.** Bee's tracing has moved from OpenTracing and Jaeger to OpenTelemetry, exporting over OTLP to any compatible collector.

{{< admonition warning >}}
**If you have tracing enabled, check your config.** The `tracing-endpoint` option still exists but now points at an OTLP collector rather than a Jaeger agent, and the default moved from port `6831` to `127.0.0.1:4318`. A config still pointing at the old port will start cleanly and quietly export nothing.

`tracing-host` and `tracing-port` no longer do anything. Replace them with the new `tracing.*` options, which cover the endpoint, transport, TLS, sampling, and service name.

Trace attribute names changed too, so saved queries and dashboards built on the old keys need updating.
{{< /admonition >}}

**Node data is no longer world-readable.** New state and stamper store directories are now created with owner-only permissions, and the files inside them likewise.

{{< admonition info >}}
Directories that already exist are left as they are, so an existing node keeps its current permissions until you change them yourself. If you run any tooling that reads Bee's data directory as a different user, such as a backup or monitoring script, confirm it still has the access it needs.
{{< /admonition >}}

**The light node connection limit is now adjustable, and raising it helps.** Light nodes rely on full nodes to reach Swarm, so the number of light node connections full nodes are willing to accept sets the ceiling on how many light nodes the network can carry. That limit was previously fixed at 100, with no way for an operator to change it. Making it configurable is a stability measure: if your full node has capacity to spare, raising `light-node-limit` above the default of 100 puts that capacity where the network can use it.

Set it in your config, or use the `--light-node-limit` flag or the `BEE_LIGHT_NODE_LIMIT` environment variable.

## Also In This Release

- **The peer addressbook now cleans itself up.** Long-running nodes accumulated entries for peers that left the network long ago, and nothing removed them. Bee now tracks when each peer was last seen and prunes entries that have gone stale, which keeps the state store from growing on disk indefinitely. This is automatic and needs no action.
- **A new metric for sync progress.** `bee_puller_pullsync_rate` reports how fast a node is pulling historical chunks, giving a direct answer to whether a node is still catching up and how quickly. Operators running Grafana can add it to their dashboards.
- **`HEAD` requests behave correctly.** `HEAD` on `/bytes` and `/bzz` now honors range headers and HTTP preconditions instead of always returning `200 OK`, so the headers it returns describe what a `GET` would actually deliver. This release ships an updated OpenAPI specification, so developers using generated clients should regenerate them.
- **Cleaner peer connection handling.** A failed handshake now closes only the connection that failed, rather than every connection to that peer.
- **Dependency updates**, including `golang.org/x/net`, `golang.org/x/crypto`, and gRPC, pulling in upstream security fixes.

## Need Help?

If you're a node operator or developer with questions about upgrading, join the [#node-operators](https://discord.gg/qs7QBKxrR4) channel on the Swarm Discord.

---

*If your node is not yet on v2.8.2, upgrade now.*
