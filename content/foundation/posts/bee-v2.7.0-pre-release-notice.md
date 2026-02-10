+++
banner = "/uploads/bee-2-7-0.jpg"
images = [ "/uploads/bee-2-7-0.jpg" ]
categories = [ "Development updates" ]
date = 2026-02-04T00:00:00.000Z
description = "Bee 2.7.0 is scheduled to go live next week on Tuesday, February 10th — mark the date and get ready to update your nodes! It introduces support for AutoTLS and secure WebSocket connectivity, improves the flexibility of the networking layer with support for multiple underlay addresses, and includes targeted improvements to durability, reliability, and overall node stability."
references_and_footnotes = [ ]
title = "Bee Version 2.7.0 Pre-release"
_template = "post"
slug = "bee-2-7-0-release"
aliases = [
  "/foundation/2026/bee-2-7-0-pre-release/"
]
+++

Here is your **fully updated, finalized release article**, including:

* Title changed to Released
* Description updated
* Date updated
* Slug kept as `bee-2-7-0-pre-release` (recommended to avoid breaking URLs)
* All wording changed to reflect an already released version
* `minimum-gas-tip-cap` YAML fixed to numeric
* Minor grammar/punctuation polish carried forward

---

```
+++
banner = "/uploads/bee-2-7-0.jpg"
images = [ "/uploads/bee-2-7-0.jpg" ]
categories = [ "Development updates" ]
date = 2026-02-10T00:00:00.000Z
description = "Bee 2.7.0 is now live. This release introduces support for AutoTLS and secure WebSocket connectivity, improves the flexibility of the networking layer with support for multiple underlay addresses, and includes targeted improvements to durability, reliability, and overall node stability."
references_and_footnotes = [ ]
title = "Bee Version 2.7.0 Released"
_template = "post"
slug = "bee-2-7-0-pre-release"
+++
```

## Bee v2.7.0 Is Now Live

Bee 2.7.0 is now live. This release introduces support for AutoTLS and secure WebSocket connectivity, improves the flexibility of the networking layer with support for multiple underlay addresses, and includes targeted improvements to durability, reliability, and overall node stability.

This release focuses on three main areas:

* Laying the groundwork for browser-based Bee with secure WebSocket (WSS) connectivity
* Improving data durability and retrievability
* Improving stability, observability, and overall node robustness

Bee 2.7 also includes many bug fixes and internal improvements that strengthen the reliability and operational stability of nodes across the network.

This post explains the key changes introduced in Bee 2.7.0, their significance, and what node operators and developers should know when upgrading.

{{< admonition info 2.7 >}}
Bee 2.7 is an almost entirely non-disruptive upgrade without any breaking changes. In almost all cases, no migrations or configuration changes are required, and all new functionality is opt-in.

There is one edge case regarding NAT-related options — with 2.7, the existing `nat-addr` and newly added `nat-wss-addr` options are now validated (validation was not included in previous Bee versions), so if these options are used, make sure they are set to valid host and port values.
{{< /admonition >}}

## AutoTLS and WSS: Foundations for Browser-Based Bee

Bee 2.7 introduces **AutoTLS** and support for secure WebSocket connections (`wss://`) for Bee’s p2p transport.

With AutoTLS, Bee nodes can automatically obtain and manage TLS certificates and expose secure WSS endpoints without manual configuration. This allows standard browser environments to connect to Bee directly in a secure way without custom proxies or manually managed certificates.

Previously, browser-based access required complex and fragile setups. Bee 2.7 makes secure browser connectivity a built-in feature and removes this operational overhead. While Bee 2.7 does not yet run fully in the browser, it provides a critical part of the technical foundation for browser-based Bee clients and WASM-based tooling.

*See the "Operator & Developer Changes" section below for options and usage details.*

### Why it Matters

Enabling Bee in the browser is an important milestone for Swarm. It allows applications to interact with the network directly from standard web environments, enables zero-install clients and in-browser tools, and significantly lowers the barrier to entry for both users and developers.

{{< admonition info >}}
If a node needs to connect over WSS to other nodes that expose WSS endpoints, WebSocket (WS) support must also be enabled, as this flag activates the WS client within the node.
{{< /admonition >}}

## Multiple Underlay Addresses

Bee 2.7 adds support for **advertising and storing multiple underlay addresses** per node.

Previously, Bee nodes could only advertise a single underlay address. With this change:

* Nodes can expose multiple p2p transport addresses (currently TCP and WSS)
* It lays the groundwork for more flexible transport selection in the future

This is a foundational networking improvement and *is opt-in only*. No steps need to be taken by operators if they do not wish to use the feature.


## Stronger Durability and Reliability

Bee 2.7 includes an important internal fix that improves Swarm’s real-world data durability and retrievability:

* **Erasure coding improvements** fix cases where successfully recovered chunks could later become inaccessible after eviction

This change improves the real-world durability and retrievability of data in the network.


## Feed Compatibility: Legacy Payload Support

Bee 2.7 improves compatibility with legacy feed payload formats.

* The new feed format remains the default
* Older feeds continue to work correctly
* Feed resolution is now deterministic and backward-compatible
* The `swarm-feed-legacy-resolve` header is no longer relevant and has been removed


## Operator & Developer Changes

This section lists all changes in Bee 2.7 that introduce new options, new APIs, new metrics, or otherwise affect how operators and developers interact with Bee.

### New WSS / AutoTLS Configuration Options

To enable WSS and AutoTLS, operators only need to change `p2p-wss-enable` from its default of `false` to `true`:

```yaml
# enable wss p2p connection (default: false)
p2p-wss-enable: true
```

Additionally, several other new configuration options related to secure WebSocket support and AutoTLS are introduced in Bee 2.7. Typically, the default values can be left unmodified by operators:

```yaml
# wss address (default: :1635)
p2p-wss-addr: ":1635"

# WSS NAT exposed address
nat-wss-addr: ""

# autotls domain
autotls-domain: libp2p.direct

# autotls registration endpoint
autotls-registration-endpoint: https://registration.libp2p.direct

# autotls certificate authority endpoint
autotls-ca-endpoint: https://acme-v02.api.letsencrypt.org/directory
```

### New Gas Configuration Option

Bee 2.7 adds a new configuration option:

```yaml
minimum-gas-tip-cap: 0
```

This allows node operators to:

* Enforce a minimum priority fee for transactions
* Avoid underpriced transactions in congested conditions
* Gain better control over on-chain transaction behavior


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

Bee 2.7 introduces various important fixes and internal improvements, including:

* Pinned chunks are no longer evicted, preventing accidental data loss
* ENS resolution failures no longer crash nodes
* Ultra-light nodes can start correctly without postage snapshots
* Multiple panic-prevention and robustness fixes across subsystems
* The underlying libp2p library has been updated after several years, introducing additional connectivity improvements and enabling AutoTLS support
* Small performance improvements when creating samples for the redistribution game

These changes significantly improve operational stability, connectivity, and overall node reliability but do not require operator or developer action.


## Need Help?

If you’re a node operator or developer and have questions about upgrading or using the new features, join the **#node-operators** channel on Swarm Discord:

[https://discord.gg/kHRyMNpw7t](https://discord.gg/kHRyMNpw7t)

