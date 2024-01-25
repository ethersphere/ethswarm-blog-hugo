+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2021-03-24T04:00:00.000Z
description = "Over the past few weeks, in an effort to improve the user experience and resource usage of Bee, we’ve been looking into various issues that have been reported by the community. "
references_and_footnotes = [ ]
title = "Swarm v0.5.3 — Release Notes"
_template = "post"
+++

Dear Swarm supporters and Bee users,

Over the past few weeks, in an effort to improve the user experience and resource usage of Bee, we’ve been looking into various issues that have been reported by the community. This release has plenty of improvements to performance, node configurability, and metrics as well as the usual refactorings and cleanups. We’d like to thank all of you for your significant contributions, be they with bug reports, PRs of all sorts, debugging profiles or just test-driving version candidates on our [Discord channels](https://discord.gg/ykCupZMuww)! We’re humbled by your engagement and we hope you enjoy this latest release ❤

# Notes

We’ve exposed some of the underlying levelDB configuration parameters through new CLI flags of Bee. You can now tweak your setup without having to rebuild the image every time you’d like to adjust a parameter. Important to note: since the Swarm working set is over 20 gigabytes of data, levelDB has to have enough open file limit allowance for it not to be overburdened by continuous opening and closing of file handles to retrieve blocks.

We therefore recommend node operators set the number of open file limit to at least 7,200 open files. We did not set this value by default as this might be out of bounds for certain setups and operating systems, resulting in a setup which is broken by default; however, you are highly encouraged to set this number anywhere between 7,200–12,000.

If you experience high I/O, you can also toggle the disable seeks compaction option. Block cache and write buffer are also adjustable, and you are free to experiment with them and see what works best for your setup.

# Features:

- Allow specifying an account for clef, enabling one clef instance to control multiple Bee instances ([#1313](https://github.com/ethersphere/bee/pull/1313))
- Prevent users from starting with a different overlay address ([#1377](https://github.com/ethersphere/bee/pull/1377))
- Bootstrap Debug API in two phases to allow health checks response while node is still starting ([#1358](https://github.com/ethersphere/bee/pull/1358), [#1370](https://github.com/ethersphere/bee/pull/1370))
- Expose levelDB configuration parameters through CLI flags ([#1454](https://github.com/ethersphere/bee/pull/1454))
- Increase default cashout gas limit to 300K and allow gas price and gas limit to be specified through the cash debug API with headers ([#1455](https://github.com/ethersphere/bee/pull/1455))

# Performance improvements

- Limit the number of Kademlia connections per bin to 16 outside of depth ([#1352](https://github.com/ethersphere/bee/pull/1352)) and ([#1399](https://github.com/ethersphere/bee/pull/1399))
- Coalesce pull sync writes to localstore ([#1386](https://github.com/ethersphere/bee/pull/1386))
- Improve context handling in push sync ([#1416](https://github.com/ethersphere/bee/pull/1416))
- Increase batch size for garbage collection ([#1424](https://github.com/ethersphere/bee/pull/1424))
- Reduce number of pusher concurrent jobs ([#1430](https://github.com/ethersphere/bee/pull/1430))
- Improve localstore lock contention by reducing GC critical section ([#1435](https://github.com/ethersphere/bee/pull/1435))
- Utilize falling edge detection to await notifying subscriptions when there is a write to the database ([#1484](https://github.com/ethersphere/bee/pull/1384))
- Balanced bins in Kademlia ([#1207](https://github.com/ethersphere/bee/pull/1207), [#1453](https://github.com/ethersphere/bee/pull/1453))

# General improvements

- Improvements to logging ([#1360](https://github.com/ethersphere/bee/pull/1360), [#1379](https://github.com/ethersphere/bee/pull/1360))
- Don’t accept incoming connections before the node is online ([#1390](https://github.com/ethersphere/bee/pull/1390))
- Add expiration to connection attempt to bootnode ([#1407](https://github.com/ethersphere/bee/pull/1407))
- Fix a security issue with CORS headers ([#1421](https://github.com/ethersphere/bee/pull/1421))
- Fix panic by returning previously swallowed error ([#1426](https://github.com/ethersphere/bee/pull/1426))
- Fix typo in bee-get-addr for homebrew ([#1460](https://github.com/ethersphere/bee/pull/1460))
- Refactor content-addressed chunks and single-owner chunks ([#1363](https://github.com/ethersphere/bee/pull/1363)) ([#1394](https://github.com/ethersphere/bee/pull/1394))
- Remove abigen-generated bindings ([#1361](https://github.com/ethersphere/bee/pull/1361), [#1360](https://github.com/ethersphere/bee/pull/1360), [#1362](https://github.com/ethersphere/bee/pull/1362))

Added metrics to a bunch of places and fixed how we collect metrics at some ([#1373](https://github.com/ethersphere/bee/pull/1373), [#1410](https://github.com/ethersphere/bee/pull/1410), [#1417](https://github.com/ethersphere/bee/pull/1417), [#1427](https://github.com/ethersphere/bee/pull/1427), [#1446](https://github.com/ethersphere/bee/pull/1446), [#1373](https://github.com/ethersphere/bee/pull/1457))
