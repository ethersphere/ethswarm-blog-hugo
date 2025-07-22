+++
banner = "/uploads/bee-2-6-0.jpg"
images = [ "/uploads/bee-2-6-0.jpg" ]
categories = [ "Development updates" ]
date = 2025-07-22T00:00:00.000Z
description = "Bee v2.6.0 brings faster than ever startup times (~10x faster!) so you can get busy uploading and downloading from Swarm in just a couple minutes."
references_and_footnotes = [ ]
title = "Bee Version 2.6.0 Goes Live"
_template = "post"
slug="bee-2-6-0-release"
+++




# 🚀 Bee v2.6.0 Is Now Live!

{{< admonition warning >}}
⚠️ **Immediate Action Required for Node Operators**
**Bee v2.6.0 introduces changes that require a stake migration.**
For continued data availability and the ability to participate in the redistribution game, you must **upgrade your node** and **migrate your stake** ASAP.
🔗 [Follow the migration guide →](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#stake-migration)
{{< /admonition >}}

We’re excited to announce that **Bee v2.6.0** has officially been released!

This update brings **faster node startup**, **protocol readiness improvements**, and a collection of important **bug fixes, monitoring enhancements, and compatibility updates**.

## ⚡ Faster Startup

Bee nodes now import postage batch data from a **snapshot file** by default, allowing them to skip syncing historical postage events. This drastically improves **startup speed for new mainnet nodes**, streamlining node deployment and reducing time-to-readiness.

{{< admonition information >}}
📌 The snapshot import is only used for new mainnet nodes.
If your node has previously run, it will continue syncing the usual way.
{{< /admonition >}}

This behavior is enabled by default, but can be disabled by setting this configuration option:

```yaml
skip-postage-snapshot: true
```

Additionally, the fixed startup delay has been replaced with **dynamic protocol readiness** based which ensures that nodes begin protocol operations as soon as they’re actually fully connected to the network rather than waiting a fixed period of time, reducing idle time and improving responsiveness.

If you're running multiple nodes or deploying fresh infrastructure, these changes will save time and simplify the onboarding process.

## 🐞 Bug Fixes & Maintenance

This release includes:

* **New upload/download speed metrics** in the status protocol, enabling better performance analysis across nodes.
* A fix for inaccurate Prometheus vector variables, ensuring more reliable monitoring.
* Memory optimization: the number of background cache workers has been reduced from 128 to 32, lowering resource consumption.
* Clearer error messages during startup, including improved feedback when chequebook deployment fails due to insufficient funds.
* Deprecated CLI flags like `swap-endpoint` and `swap-deployment-gas-price` have been removed.

The release also upgrades to **Go 1.24** and **go-ethereum v1.14.13**, improving performance, security, and compatibility with the latest tooling. Smart contracts and OpenAPI docs have also been updated, including removal of outdated auth entries and improvements to the `/stake` and `/status` endpoints.

For developers maintaining integrations or using monitoring systems, these improvements enhance clarity, stability, and debugging workflows.

## 📘 Full Release Notes

For a complete list of changes, see the [v2.6.0 Release Notes](https://github.com/ethersphere/bee/releases/tag/v2.6.0).
For technical details, view the [v2.6.0 diff on GitHub](https://github.com/ethersphere/bee/compare/v2.5.0...v2.6.0-rc3).

## 🐝 Need Help?

If you're a node operator looking for support, join the Swarm Discord [#node-operators channel](https://discord.com/channels/799027393297514537/811553590170353685) where you can get answers from the team and community.

