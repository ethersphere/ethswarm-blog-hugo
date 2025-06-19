+++
banner = "/uploads/bee-2-6-0.jpg"
images = [ "/uploads/bee-2-6-0.jpg" ]
categories = [ "Development updates" ]
date = 2025-06-10T00:00:00.000Z
description = "Bee v2.6.0 brings faster than ever startup times (~10x faster!) so you can get busy uploading and downloading from Swarm in just a couple minutes."
references_and_footnotes = [ ]
title = "Bee Version 2.6.0 Release Notice"
_template = "post"
slug="bee-2-6-0-release"
+++

*Bee v2.6.0 is **NOW LIVE as of June 24, 2025**! **Node operators** - make sure to read warning note below and follow instructions for the update.*

{{< admonition warning >}}
**Important:** It is required that **node operators** must migrate their stake to continue participating in the redistribution game. Without migrating, nodes will no longer be eligible for rewards after updating to v2.6.0.
👉 [See the migration instructions here](https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#stake-migration)
{{< /admonition >}}

## Bee v2.6.0 Brings Lightning Fast New-Node Startup Times  

The main feature of the Bee v2.6.0 release is the massively reduced startup time. The time from start to being able to upload and download has been decreased from over 30 minutes to just a couple of minutes!

Other changes in this update include the addition of new metrics, and providing support for legacy feed resolution.

### Reduced Node Startup Time

This release significantly decreases the time required for a node to become operational after installation. Previously, initializing a node and synchronizing postage batches could take over 30 minutes. With the addition of the postage snapshot feature, the startup time has been reduced to just a few minutes.

The postage snapshot is enabled by default for fresh installations. It applies only to newly started nodes and does not affect previously started nodes that are restarted (restarted nodes will start syncing from the last block before they were shut down). The feature can be disabled using the `--skip-postage-snapshot` flag.

Startup times were also reduced by changing the way readiness is determined. Instead of waiting a fixed period, the node now monitors peer connections to decide when the node is ready - allowing it to start as soon as possible.

### Gas Efficiency Upgrade

Gas cost estimation in Bee v2.6.0 has been updated to fully support [EIP-1559](https://help.coinbase.com/en/coinbase/getting-started/crypto-education/eip-1559). Previously, Bee relied on the legacy `eth_gasPrice` method, which often resulted in inaccurate fee estimates. With this release, Bee now uses modern fee market mechanics to provide more reliable and up-to-date gas estimations.

This change improves the accuracy of required gas funds and helps avoid both overpayment and underfunded transactions. Further optimizations to gas efficiency are planned for upcoming releases.

### New Monitoring Metrics

New metrics have been added to help analyze upload and download speeds. These new metrics are primarily intended to help the Bee development team monitor network performance and plan future optimizations.

### Legacy Feed Resolution

Support for legacy feed resolution has been added to address an edge case where legacy feeds do not resolve properly. It can be enabled with the `--legacy-feed-resolution` option. More details can be found in [GitHub issue #5027](https://github.com/ethersphere/bee/issues/5027).

For the complete list of changes, please refer to the [v2.6.0 release notes](https://github.com/ethersphere/bee/releases/tag/v2.6.0).

If you have any questions or need support, please reach out on [Discord](https://discord.gg/kHRyMNpw7t).
