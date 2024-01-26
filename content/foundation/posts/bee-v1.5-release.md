+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2022-04-07T04:00:00.000Z
description = "The Bee team is happy to announce the latest release v1.5 This release comes with significant changes to how the Bee nodes store data locally."
references_and_footnotes = [ ]
title = "Bee v1.5 Release"
_template = "post"
+++

The Bee team is happy to announce the latest release v1.5 This release comes with **significant changes to how the Bee nodes store data locally.**

The team’s proud to announce the introduction of `sharky`. Nodes upgrading from the older version will have to perform an automatic migration to the new storage format. The bee node will store chunks and indexes in separate storages with `sharky`. The indexes will be stored in levelDB and the chunks will be stored in `sharky`. Due to the drastic reduction in size of levelDB, the database operations on indexes will be significantly faster. Also, with `sharky`, retrieving chunks will be optimized and hence you should see improvement in the overall performance and usability of bee nodes.

This change is not backwards-compatible, so **the local storage will only work with v1.5.0 and up after the migration**. And along with the changes in storage, the update includes some other small features and bug fixes.You can view more details about the specific changes at the bottom of this article.

# How do I upgrade to v1.5?

As aforementioned above, Bee v1.5 contains an entirely new data storage format called Shark

As part of these changes, **existing data must be migrated** to the new data structure expected by the 1.5 client. This will happen **automatically, but may require extra space** and cause a spike in cpu requirements for the duration of the migration.

If you can not accommodate approximately 3x as much disk space as is currently being used by your Bee datadir. In that case, you may want to run `bee db nuke` before upgrading (but after stopping the Bee service) to resync your nodes content from the network. If you use `db nuke` on large clusters of Bees, please stagger your upgrades to allow the network to maintain it’s content. If you have **locally pinned content**, please ensure **you have a local backup** to restamp and restore it to the network in case of disaster.

If you have any questions regarding this update or need assistance, you can join the discord community and talk directly with the Swarm team.
Changes, New Features, and Bug Fixes

# Hardening

- cc80f74c Allow duplicate handshakes (#2794)
- e46af6cc Use `testing.TempDir` to create temporary test directories (#2790)
- 4ce3f7df Stamps endpoint `amount` value OpenAPI specification (#2817)
- 046c5e83 Introduce timeout for all make and beekeeper runs (#2811)
- d21bf5bf Add test to validate max input stream behaviour in libp2p (#2809)

# New features

- ebe988e5 Sharky store for fix-length blobs (#2685)
- 66f07993 Start bee node without a connected chain backend. This feature is still experimental and it will be completed by the next release. (#2783)
- 7849e332 bcrypt command to generate or validate bcrypt hashes (#2788)
- 0b77fa63 Security role inheritance (#2808)

# Bugfixes

- dcc07c4f Fix to return empty array instead of null in API responses (#2821)

[For a full PR-rundown, please consult the v1.5.1 milestone.](https://github.com/ethersphere/bee/releases/tag/v1.5.1)
