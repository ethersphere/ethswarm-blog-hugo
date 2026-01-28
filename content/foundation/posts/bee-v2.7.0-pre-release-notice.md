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

Bee 2.7.0 is scheduled to go live in **X weeks**, on **TBD**. It introduces support for AutoTLS and secure WebSocket connectivity, improves the flexibility of the networking layer with support for multiple underlay addresses, and includes targeted improvements to durability, reliability, and overall node stability.

This release focuses on three main areas:

* Laying the groundwork for browser-based Bee and secure WebSocket (WSS) connectivity
* Improving data durability and retrievability
* Improving stability, observability, and overall node robustness

Bee 2.7 also includes many bug fixes and internal improvements that strengthen the reliability and operational stability of nodes across the network.

This post is a **pre-release announcement** intended to explain what is coming in Bee 2.7.0, the significance of the changes included in the release, as well as everything that node operators and developers should be aware of before the release.

{{< admonition info 2.7 >}}
Bee 2.7 is a safe, non-disruptive, drop-in upgrade.
No migrations or configuration changes are required, and all new functionality is opt-in. Existing nodes and applications should continue to work as before after upgrading.
{{< /admonition >}}

## AutoTLS and WSS: Foundations for Browser-Based Bee

Bee 2.7 introduces **AutoTLS** and support for secure WebSocket connections (`wss://`).

With AutoTLS, Bee nodes can automatically obtain and manage TLS certificates and expose secure WSS endpoints without manual configuration. This allows standard browser environments to connect to Bee directly in a secure way without custom proxies or manually managed certificates.

Previously, browser-based access required complex and fragile setups. Bee 2.7 makes secure browser connectivity a built-in feature and removes this operational overhead. While Bee 2.7 does not yet run fully in the browser, it provides a critical part of the technical foundation for browser-based Bee clients and WASM-based tooling.

Enabling Bee in the browser is an important milestone for Swarm. It allows applications to interact with the network directly from standard web environments, enables zero-install clients and in-browser tools, and significantly lowers the barrier to entry for both users and developers.


## Multiple Underlay Addresses

Bee 2.7 adds support for **advertising and storing multiple underlay addresses** per node.

Previously, Bee nodes could only advertise a single underlay address. With this change:

* Nodes can expose multiple transport addresses (for example TCP and WSS)
* It lays the groundwork for more flexible transport selection in the future

This is a foundational networking improvement and *is opt-in only*, no steps need be taken by operators if they do not wish to use the feature    


## Stronger Durability and Reliability 

Bee 2.7 includes an important internal fix that improves Swarm’s real-world data durability and retrievability:

* **Erasure coding improvements** fixes cases where successfully recovered chunks could later become inaccessible after eviction

This change improves the real-world durability and retrievability of data in the network.  


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

(However, nodes exposed on public domains must allow outbound **port 80 and 443** for certificate verification. More complex setups (NAT, multi-node, custom domains) may require additional configuration.)


### New Gas Configuration Option

Bee 2.7 adds a new configuration option:

```yaml
minimum-gas-tip-cap: 0
```

This allows node operators to:

* Enforce a minimum priority fee for transactions
* Avoid underpriced transactions in congested conditions
* Gain better control over on-chain transaction behavior

Gas estimation logic under EIP-1559 has also been refined for more predictable behavior.



### API Change: `/reservestate`

The `/reservestate` endpoint now exposes a new field:

```json
reserveCapacityDoubling
```

Developers who consume this endpoint should update their tooling and dashboards accordingly.


### New Bootup Metrics

Bee 2.7 introduces new **bootup and startup metrics**. 

Node operators who monitor Bee using Prometheus and Grafana should plan to update their dashboards to include these new metrics.


### Deprecation Notice: `dev-bee`
Bee 2.7 introduces deprecation warnings when using `dev-bee`. This is an early signal of upcoming workflow and tooling changes in future releases.


## Bug Fixes and Stability Improvements

Bee 2.7 introduces various important fixes, including:

* Pinned chunks are no longer evicted, preventing accidental data loss
* ENS resolution failures no longer crash nodes
* Ultra-light nodes can start correctly with postage snapshots
* Multiple panic-prevention and robustness fixes across subsystems

These changes significantly improve operational stability but do not require operator or developer action.

## Need Help or Want to Prepare?

If you’re a node operator or developer and want to prepare for the upgrade or ask questions about the release, join the **#node-operators** channel on Swarm Discord:

[https://discord.gg/kHRyMNpw7t](https://discord.gg/kHRyMNpw7t)

