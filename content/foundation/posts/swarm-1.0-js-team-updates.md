+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2021-07-02T04:00:00.000Z
description = """
Last month, Swarm released Bee 1.0, and finalised its token sale. During this incredibly busy week, other projects and tools were released. In this article, you will find an overview of the tools and projects the Bee-JS team has published.
"""
references_and_footnotes = [ ]
title = "Swarm 1.0: JS Team Updates"
_template = "post"
+++

_Last month, Swarm released Bee 1.0, and finalised its token sale. During this incredibly busy week, other projects and tools were released. In this article, you will find an overview of the tools and projects the Bee-JS team has published._

# Bee-js 1.0

Bee-js is a javascript library that exposes Bee’s decentralised storage functionalities and makes it easy to use them in javascript-based projects. A [new version was released last week](https://github.com/ethersphere/bee-js/releases/tag/v1.0.0) which fully supports the Bee 1.0 version and provides full Bee API support.

The Swarm team uses this library to build user-facing tools and web applications. It is well-tested and considered mature enough for use in production. The following projects are all built with it and showcase some of the applications that are possible today.

# Bee Dashboard

A dashboard that helps configure a Bee node and interacts with it on a web UI. It has a wizard-like interface to help set up a Bee node and troubleshoot problems. Once the node is running, it shows the connectivity status and peers, manages the BZZ account and postage stamps, and also uploads and downloads files.

Click [here to install the latest version](https://github.com/ethersphere/bee-dashboard) of Bee Dashboard.

# Swarm-cli

A command line tool to manage a Bee node and interact with the Swarm network. Although the basic functionality is similar to Bee Dashboard, this tool was created for enabling automation and for users who actually prefer the command line over web-based UIs.

Also, Swarm-cli has a much richer feature set covering almost all of the Bee API, including features such as pinning, feeds and PSS. Using some of these features from the API can be a bit cumbersome (identities, postage stamps, etc.), so the team went the extra mile to make it easy to use these functions by showing interactive dialogs. When using the tool in silent mode, for automation purposes the interactive features are disabled.

Click [here to install the latest version](https://github.com/ethersphere/swarm-cli) of Swarm-cli.

# Swarm Gateway

A simple website operated by the Swarm Foundation which provides the easiest way to share and access files on the Swarm network. A new version of the [Gateway](https://gateway.ethswarm.org/) was released last week. It enables sharing photos or files with users who haven’t yet installed a Bee node.

This service is under development and provided for testing purposes only. Currently, it has a limitation of sharing a single file smaller than 10MB. For unlimited use of the Swarm network, consider [running your own Bee node](https://docs.ethswarm.org/docs/).

The Gateway is built as a React frontend app that uses Swarm exclusively as backend with some nginx configuration for limits and URL routing. Expect a follow-up post where the service is explained in detail, and a tutorial describing the steps and best practices to build similar applications.

# Conclusion

The projects mentioned above are only those that had a new version released last week; however, the team is also working on other interesting projects. For example, there is a [browser extension](https://github.com/ethersphere/swarm-extension) in the works for researching how to extend browser behaviour for decentralised applications. Of course, all the projects are open source and contributions are welcome. Feel free to [join Swarm’s discord](https://discord.gg/wdghaQsGq5) and get involved with the community!

# Be careful

Be aware that there are many fake BZZ circulating and scams out there. Always do your own research and double check the contracts and markets you’re interacting with. Swarm Foundation does not have any representatives, neither global nor local. Swarm Foundation will only communicate via official channels that can be found on [https://www.ethswarm.org](https://www.ethswarm.org "https://www.ethswarm.org").
