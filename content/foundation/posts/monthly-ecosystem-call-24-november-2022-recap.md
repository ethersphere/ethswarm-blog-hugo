+++
banner = "/uploads/storage-incentives-ama.png"
categories = ["Events"]
date = 2022-11-28T04:00:00Z
description = "End of the month is here, and as is now the habit, last Thursday was reserved for the Monthly Ecosystem Call"
references_and_footnotes = []
title = "Monthly Ecosystem Call, 24 November 2022 — Recap"

+++
![](/uploads/storage-incentives-ama.png)

End of the month is here, and as is now the habit, last Thursday was reserved for the Monthly Ecosystem Call. The initial part of the call was dedicated to the latest updates regarding the Swarm network and [its ongoing upgrade](https://medium.com/ethereum-swarm/towards-the-world-computer-the-swarm-network-upgrade-has-started-cfba1ed68330).

During the upgrade, [two sets of issues were identified during the public testing of Phase 2](https://medium.com/ethereum-swarm/storage-incentives-timeline-update-26ab959d8ca3):

* Reserve Commitment Sampler: consensus between nodes in a given neighbourhood is not always given.
* Localstore and pull-sync: synchronisation with the previous reserve commitment sampler encounters some issues.

These behaviours of the reserve commitment sampler and localstore have an impact on the fairness of the Schelling redistribution game. You can read more about the Schelling game and why it is important in [**Daniel A. Nagy’s latest blogpost**](https://medium.com/ethereum-swarm/the-mechanics-of-swarm-networks-storage-incentives-3bf68bf64ceb).

According to **Attila Gazsó,** these issues are being actively addressed. The Swarm Foundation development team has already proposed 10 release candidates and fixed a substantial amount of bugs.

At this point the issues with the sampler, which were caused by an early release of the price oracle, are still affecting the consensus in the Schelling game. Because of this error, the team has opted to implement freezing instead of slashing the stakes since some nodes are still getting their stakes frozen.

The coming weeks will therefore be dedicated to additional testing of the reward redistribution mechanism on both private and public testnets, as well as tooling improvements, Attila concluded.

# Fdp-cli is feature-complete

The second part of the call was focused on the Fair Data Protocol (FDP) and the updates provided by **Viktor Toth**.

Great news is that fdp-cli is now feature-complete, allowing users to easily manage their personal storage such as pods, directories and files. There is still some feature fine tuning going on as the team prepares for final release.

You can also see the finished Fair Data Improvement Proposal [(FIP) on personal storage here](https://github.com/fairDataSociety/FIPs/pull/61).

FairOS’s metadata encryption and metadata structure have been updated as well, omitting unused props and including camelCase convention for properties which may break some applications. The fdp-storage update relating to this is still a work in progress.

At the same time Fairdrive has undergone important refactoring that will see it use the mainnet Swarm network for storing data and the Görli network for ENS resolution.

As Viktor pointed out, the Swarm browser extension now supports localhost subdomain redirection. You can type short versions of Swarm resources into the address bar by prefixing content hashes with the bzz:// protocol or bzz.link addresses and it will redirect to the corresponding CID-mapped subdomain localhost address.

FakeURLs are also supported but sessionId support has been left out due to manifest v3 limitations. This means that the requests will be redirected to the configured Bee client address but without dApp context. Instead of injected script dApps can interact with the extension via the corresponding swarm-extension library deployed onto NPM. A version of fdp-storage that uses a bee-js version that is not affected by the duplex issue appearing in a browser environment will be out soon as well.

# Swarm Foundation answers your questions and MetaRate presentation

The third part of the call was reserved for the answers to the “Ask Swarm Foundation” questions. Throughout each month members of our community can [**leave question for the members of the Foundation here**](https://airtable.com/shrKnOLdMkHkS1m3y). At each Monthly Ecosystem Call the team will provide you with the answers so make sure to not miss the next call if you have questions!

Following the Q&A round was a presentation by **Evgeny, George and Batyr** from [**MetaRate**](https://devfolio.co/projects/metarate-7c20). Their **EthBrno award winning project** enables users to rate and review smart contracts before they’re signed and stores all the reviews and likes in the Swarm network.

# Celebrate the winter solstice with the Swarm

Since the end of the year is fast approaching it is time to review the year that we are slowly leaving in the back mirror. There will be no Monthly Ecosystem Call on the last Thursday of December, but there will be a **special event on 21 December, the shortest day of the year**, when the Swarm will come together to celebrate the achievements, get ready for new challenges and share the festive mood. Be sure to join. A link to the live video stream will be posted on Swarm Foundation social media.

**Save the date: 21 December, 17:00 CET**

You can also keep busy in the meantime by coming to [**We Are Millions Twitter Spaces**](https://twitter.com/WAMillions) talk on 7 December at 17:00 CET. **Robert de Groot** will be hosting **Ali Rizvi** (Billions Health) and **Paul Kohlhaas** (Molecule, VitaDAO), who have been working for years on solutions to improve research and funding, building new tools for decentralisation and creating entirely new communities to further change in healthcare.

The panel will discuss their effects on research in genetics, therapeutics, and other fields to increase our longevity under a telling title: **“Longevity vs. web3 — will decentralisation extend our lives?”**

# **Join Swarm’s community**

* Follow community news on [**Twitter**](https://twitter.com/ethswarmhive), and development news [**here**](https://twitter.com/ethswarm)**.**
* Discussions about Swarm can be found on [**Reddit**](https://www.reddit.com/r/ethswarm/).
* All tech support and other channels have moved to [**Discord**](https://discord.gg/wdghaQsGq5)**.**
* Please feel free to reach out via **info@ethswarm.org**.
* Join the newsletter! [**Subscribe here**](https://www.ethswarm.org/newsletter.html).
* Subscribe to the [**Swarm Foundation YouTube channel**](https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/videos).