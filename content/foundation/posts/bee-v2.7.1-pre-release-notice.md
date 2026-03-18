+++
banner = "/uploads/bee-2-7-1.jpg"
images = [ "/uploads/bee-2-7-1.jpg" ]
categories = [ "Development updates" ]
date = 2026-03-18T00:00:00.000Z
description = "Bee v2.7.1 is a patch release focused on improvements to the implementation of the multiple p2p protocol support introduced in 2.7.0. It also includes faster startup times, a crash fix, and general maintenance. The release goes live on March 23rd."
references_and_footnotes = [ ]
title = "Bee Version 2.7.1 Pre-Release Notice"
_template = "post"
slug = "bee-2-7-1-pre-release"
url  = "/foundation/2026/bee-2-7-1-pre-release/"
+++

## Bee v2.7.1 Goes Live March 23rd

Bee v2.7.1 is set to go live on March 23rd. This patch release brings improvements to the multiple p2p transport support introduced in 2.7.0, along with faster startup times and bug fixes.

{{< admonition info >}}
Bee v2.7.1 is a non-disruptive patch release with no breaking changes. If you're already running 2.7.0, the upgrade should be seamless — no migrations or configuration changes are required.
{{< /admonition >}}

## More Stable Connectivity

Bee 2.7.0 added support for multiple p2p transports, which was a big step forward for connectivity but also introduced some edge cases where nodes could become temporarily unreachable by their peers.
Bee 2.7.1 resolves these issues. Nodes should experience more reliable and stable connections overall.

## Faster Startup

New node startup time has been reduced thanks to improvements in how postage batch data is processed during startup.

## Bug Fixes & Maintenance

A crash triggered by invalid batch top-up values has been fixed, a Prometheus metric for node reachability status has been corrected, and some deprecated configuration flags have been cleaned up.

## Full Changelog

For a full list of all changes, refer to the [release changelog](https://github.com/ethersphere/bee/releases/tag/v2.7.1) on GitHub.

## Need Help?

If you're a node operator or developer and have questions about upgrading, join the [#node-operators](https://discord.gg/kHRyMNpw7t) channel on Swarm Discord.