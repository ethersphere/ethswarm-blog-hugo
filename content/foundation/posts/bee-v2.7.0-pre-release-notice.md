+++
banner = "/uploads/bee-2-7-0.jpg"
images = [ "/uploads/bee-2-7-0.jpg" ]
categories = [ "Development updates" ]
date = 2026-01-21T00:00:00.000Z
description = "A pre-release overview of Bee 2.7.0, covering upcoming changes including AutoTLS and WSS support, improved durability and reliability, new metrics, and other updates relevant to node operators and Swarm developers."
references_and_footnotes = [ ]
title = "Bee Version 2.7.0 "
_template = "post"
slug="bee-2-7-0-pre-release"
+++



## Bee v2.7.0 Is Coming Soon - on TBD

Bee 2.7.0 is scheduled to go live in **X weeks**, on **TBD**. This release focuses on three main areas:

* Laying the groundwork for browser-based Bee and secure WebSocket (WSS) connectivity
* Improving data durability and retrievability 
* Improving stability, observability, and overall node robustness

Bee 2.7 introduces several new features such as **AutoTLS**, **secure WSS support**, **multiple underlay addresses**, as well as a number of internal durability improvements and many bug fixes.

This post is a **pre-release announcement** intended to explain what is coming in Bee 2.7.0, the significance of the changes included in the release, as well as everything that node operators and developers should be aware of before the release.

{{< admonition info 2.7 >}}


Bee 2.7 is a safe, non-disruptive, drop-in upgrade.
No migrations or configuration changes are required, and all new functionality is opt-in. Existing nodes and applications should continue to work as before after upgrading.
{{< /admonition >}}

## AutoTLS and WSS: Foundations for Browser-Based Bee

Bee 2.7 introduces **AutoTLS** and support for secure WebSocket connections (`wss://`).

With AutoTLS, Bee nodes can automatically obtain and manage TLS certificates and expose secure WSS endpoints without manual configuration. This makes it possible for standard browser environments to connect to Bee directly in a supported and secure way.

CHECK FOR ACCURACY PLEASE:

> (Previously, connecting a browser-based application to Bee required custom setups using proxies and manually managed certificates. Bee 2.7 removes this complexity and makes secure browser connections a built-in feature. This is an important step toward browser-based Bee clients and WASM-based tooling. While Bee 2.7 does not yet run fully in the browser, it provides a key part of the technical foundation for that direction.)



## Multiple Underlay Addresses

Bee 2.7 adds support for **advertising and storing multiple underlay addresses** per node.

Previously, Bee nodes could only advertise a single underlay address. With this change:

* Nodes can expose multiple transport addresses (for example TCP and WSS)
CHECK FOR ACCURACY PLEASE:
(* This is required for browser/WASM nodes and multi-interface setups)
* It lays the groundwork for more flexible transport selection in the future

This is a foundational networking improvement and *is opt-in only*, no steps need be taken by operators if they do not wish to use the feature    



## Stronger Durability and Reliability (Internal Improvements)

Bee 2.7 contains several important internal improvements that strengthen Swarm’s reliability and data availability guarantees:

* **SOC replication** adds redundancy for single-owner chunks (including feeds), improving availability in case of network disruptions
* **Erasure coding improvements** fix cases where successfully recovered chunks could later become inaccessible after eviction

These changes improve the real-world durability and retrievability of data in the network.  


## Feed Compatibility: Legacy Payload Support

Bee 2.7 improves compatibility with **legacy feed payload formats**.

* The new feed format remains the default
* Older feeds continue to work correctly
* Feed resolution is now deterministic and backward-compatible

This change is primarily relevant for existing applications and historical datasets and does not require any action in normal cases.



## Operator & Developer Changes

This section lists all changes in Bee 2.7 that introduce new options, new APIs, new metrics, or otherwise affect how operators and developers interact with Bee.

### New WSS / AutoTLS Configuration Options

Bee 2.7 introduces several new configuration options related to secure WebSocket support and AutoTLS:

```yaml
# enable wss p2p connection (default: false)
p2p-wss-enable: false

# wss address (default: :1635)
p2p-wss-addr: ":1635"

# wss nat exposed address
nat-wss-addr: ""

# autotls certificate storage directory
autotls-storage-dir: ""

# autotls domain
autotls-domain: ""

# autotls registration endpoint
autotls-registration-endpoint: ""

# autotls ca endpoint
autotls-ca-endpoint: ""
```

To enable WSS and AutoTLS, operators only need to set:

```yaml
p2p-wss-enable: true
```
CHECK FOR ACCURACY PLEASE:

(However, nodes exposed on public domains must allow outbound **port 80 and 443** for certificate verification. More complex setups (NAT, multi-node, custom domains) may require additional configuration.
)


### New Gas Configuration Option

Bee 2.7 adds a new configuration option:

```yaml
minimum-gas-tip-cap: 0
```

This allows node operators to:

CHECK FOR ACCURACY PLEASE:

(* Enforce a minimum priority fee for transactions
* Avoid underpriced transactions in congested conditions
* Gain better control over on-chain transaction behavior)

Gas estimation logic under EIP-1559 has also been refined for more predictable behavior.



### API Change: `/reservestate`

The `/reservestate` endpoint now exposes a new field:

```json
reserveCapacityDoubling
```

Developers who consume this endpoint should update their tooling and dashboards accordingly.



### New Bootup Metrics

Bee 2.7 introduces new **bootup and startup metrics**. (LINK)

Node operators who monitor Bee using Prometheus and Grafana should plan to update their dashboards to include these new metrics.



### Deprecation Notice: `dev-bee`(LINK)
Bee 2.7 introduces deprecation warnings when using `dev-bee`. This is an early signal of upcoming workflow and tooling changes in future releases.


## Bug Fixes and Stability Improvements

Bee 2.7 includes many important fixes, including:

CHECK FOR ACCURACY PLEASE:

(* Pinned chunks are no longer evicted, preventing accidental data loss
* ENS resolution failures no longer crash nodes
* Ultra-light nodes can start correctly with postage snapshots
* Multiple panic-prevention and robustness fixes across subsystems)

These changes significantly improve operational stability but do not require operator or developer action.


## Release Timing

Bee 2.7.0 is currently in its final preparation and testing phase. A final release date will be announced soon.

Once released, the full release notes will be published here:

[https://github.com/ethersphere/bee/releases/tag/v2.7.0](https://github.com/ethersphere/bee/releases/tag/v2.7.0)


## Need Help or Want to Prepare?

If you’re a node operator or developer and want to prepare for the upgrade or ask questions about the release, join the **#node-operators** channel on Swarm Discord:

[https://discord.gg/kHRyMNpw7t](https://discord.gg/kHRyMNpw7t)

