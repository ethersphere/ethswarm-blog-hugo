+++
banner = "/uploads/storage-incentives-ama.png"
categories = ["Events"]
date = 2022-12-07T04:00:00Z
description = "The October Monthly Ecosystem Call focused on the storage incentives upgrade (the progress so far) and Swarm network’s ecosystem."
references_and_footnotes = []
title = "Monthly Ecosystem Call, 27 October 2022 — Recap"

+++
The October Monthly Ecosystem Call focused on the storage incentives upgrade (the progress so far) and Swarm network’s ecosystem.

The October Monthly Ecosystem Call focused on the storage incentives upgrade (the progress so far) and Swarm network’s ecosystem.

# Phases 2 and 3 are on track

The call began with **Attila Gazsó** taking a look at how far along the roadmap storage incentives are. As he pointed out, the upgrade is currently in Phase 2, which is the release of the redistribution contract to the testnet. Since the release, the team developing the contract has identified several issues and will address them all with the 1.0.9 version of the contract. This will consequently require additional testing. _”We’ll see what we discover then,”_ he added.

Regardless of the issues, the team is on track with the releases and is implementing a private testnet to launch Phase 3 of the storage incentives upgrade, the price oracle. _“And once that’s tested, we are also going to release it on the public testnet. So this is all going according to plan,”_ Attila said.

When both releases prove to be stable on the testnet, then it will be time to deploy the redistribution contract to mainnet. This means that the participating staker nodes will be able to participate in the lottery game, and receive the rewards of the Schelling game. _“We won’t rush this. If we find issues, we might need to push this a bit further, because as I mentioned, there is real money at stake here,”_ he explained.

The plan is, therefore, to decide on the exact roll-out date according to test results. Once the distribution contract is on mainnet, the postage stamp price will be adjusted, since the current prices do not cover the cost of hosting the data. This will be fixed with the release of the price oracle to mainnet, which is currently scheduled for the end of November.

At the same time, the developers of the price oracle expect that the price will increase at least three orders of magnitude. That could mean that all of the existing stored data on the network could expire much more rapidly than was originally anticipated.

If you are storing large datasets on the Swarm network, reach out to the developers on the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/966664551628161064) to hash out a solution and keep your data on the network.

# Pinning problems will be solved later on

For the last part of his update, Attila also shared that during the latest testing, his team realised that the pinning functionality has serious issues. _“This is not new and actually, we have a project to fix this. But the fix for this issue is a longer-term project. What we realised is that by the time we plan to release the storage incentives to mainnet we might not have this pinning feature fixed. The recommendation is that if you are using the pinning feature, then don’t use it on staking nodes. In general, it may make sense to just use the pinning functionality within a light node. Pin the data with that and use a separate staking node just for hosting or providing capacity to the network,”_ Attila advised node operators.

He also reminded the audience that storage incentives upgrade is just part of the larger Swarm Foundation roadmap. So, after this upgrade is complete with the implementation of Phases 4 and 5, the next thing to work on is the support for large file uploads.

_“So basically, from this point, we are going to start working on improving the reliability of both the network parts and the local store parts of Bee so that it can more reliably store bigger datasets and enable people to host them on Swarm,”_ he added, and gave a few examples such as blockchain data and big scientific datasets.

# Possible strategies for stakers

Following Attila, Daniel A. Nagy outlined some possible strategies for node operators who want to participate in the Schelling game for funds redistribution. He began by explaining that the first distinguishing feature of stakes in the Swarm network is that they are not withdrawable.

_“This is in sharp contrast with, for example, Ethereum stakes, which means that you cannot use your staking as an interest-earning savings account, because you can never withdraw the stakes,”_ Daniel pointed out.

The reason for this decision is to prevent capital intensive attacks where an attacker could take out a flash loan of a large amount of BZZ, do something nasty, profit, withdraw the stake and pay back the flash loan. Stakes are currently also not transferable, but it hasn’t yet been decided whether it will stay this way.

This has several implications for staking strategies. _“One is that you shouldn’t stake more than you can hope to reasonably earn back within the timeframe in which you want to earn it back. If you stake too much, because stakes are not withdrawable, you might never earn that money back. Even if you keep winning frequently, it’s not enough. And also the returns from staking more are diminishing fast,”_ he warned.

He reminded the listeners that the winning neighbourhood is selected not in proportion to stakes, but uniformly with uniform probability, while the winning node is selected in proportion to its stake only within a neighbourhood.

_“Assuming that everybody plays honestly, outstaking the rest of the neighbourhood does not bring any significant profits. And one should also be aware that trying to earn more than everybody else by outstaking them is not really a stable strategy, because others might want to follow with the same tactics and that will just mean that there’s going to be a lot of value buried in the staking contract. But still, everybody will be selected with roughly the same probability,“_ Daniel explained the underlying mechanisms.

This implies that one should actually stake roughly the average stake in their neighbourhood. If everybody does that, then the stake does not increase. _“You start with an initial stake that you are hoping to earn back reasonably fast, and then, if the average stake in the neighbourhood is higher than what you have staked, you simply follow up with additional staking that would bring your own stake in line with the rest of the neighbourhood. So if everybody does that, then the stakes will stabilise at some value and everybody is going to win with approximately the same probability,”_ he outlined one possible strategy that also keeps the amount in the staking contract in check.

But there are ways others could render this approach unprofitable, such as depositing a huge stake. In that case, one could never win back the average stake and it would no longer be profitable to operate in that neighbourhood.

_“So if somebody does that, which is not a profitable thing to do, then, unfortunately, basically your best course of action is to regenerate the keys of your node and start operating in a different neighbourhood,”_ he added. Although this is a (costly) attack vector, higher stakes do play a role in the network, because in general they increase its security by raising the bar for attacks that use high stakes.

Replying to a question from the audience, Daniel added that the first version of the staking mechanism is not the last one and that they are also considering the idea of a delayed withdrawal. Those interested in research write-ups on the price oracle can also look forward to the team releasing them in the future.

# Fair Data Protocol (FDP) updates

Following Daniel’s talk, it was time for Viktor Toth to share [the latest updates on FDP](https://github.com/fairDataSociety). The new encryption for metadata has recently been merged with the FDP storage JavaScript library and it can be built from the code repository.

Also, the library supports a feature that can fetch an HD wallet from Swarm, which is called a portable account. At the same time, the FDP team has researched how to use this in React native. For that they have merged the documentation about how to upload with BeeJS and FDP storage in React native based applications into the above-mentioned library.

A Swarm Chrome extension is available as well with an updated Bee dashboard dependency that has fixed the issue with website uploads and aligned its UI with the Swarm desktop. It also supports subdomain redirection.

What is causing the team grey hair is Google’s new manifest V3 and its new feature set for which they haven’t found the solution just yet.

Viktor added that they are working on Blossom, where improvements for CI and testing have been made, along with the development of a signer interface where each personal drive has its own key pair.

There is also a new proposal about the Swarm DB that utilises BeeSon and creates a decentralised database. k.

# Swarm at Devcon and WEDF

After the developer part of the call was over, it was time to turn the audience’s attention to the community side of Swarm. The main event in October was, of course, [**Devcon VI and the week leading up to it**](https://ethswarmhive.medium.com/swarm-is-empowering-digital-freedom-at-devcon-live-blog-ca896524bc31), where the main thing for the network was to showcase that it is ready to host large amounts of data by [**hosting the Devon archive and agenda**](https://ethswarmhive.medium.com/through-etherna-the-devcon-video-archive-is-now-available-on-the-swarm-network-66d4583df8c0).

Another important event took place at the end of October, the [**World Ethical Data Forum**](https://worldethicaldataforum.org/) (WEDF), where Swarm was in good company with organisations such as the Mozilla Foundation, Tor, Ford Foundation and others. As **Gregor Žavcer** pointed out, positive social impact is important for Swarm and it reflects in what its ecosystem does. That’s why Swarm was one of WEDF’s main sponsors, to promote the much needed reflection on the ethical use of personal data and how we can disrupt surveillance capitalism with fair data.

# Swarm Nextcloud plugin demo

Next up was Metaprovide’s demonstration of their [**Swarm plugin for Nextcloud**](https://apps.nextcloud.com/apps/files_external_ethswarm). **Björn Magalhães** told the story behind the plugin, explaining that the reason for developing it was _“basically to escape the data hungry mining horrors like Google Drive and Dropbox, Trello and Discord, and to find some other way to own our own data”_.

He saw that there was an IPFS plugin so he thought to himself, why not Swarm? _“And the reason for this was that this was very difficult to do. People tried to actually talk me out of it. Then the techies in Metaprovide were optimistic and started to say maybe it’s possible and we started to work on this a bit over a year ago. When Ron started to help us, that changed everything. The reason why we also did this is… It was a gift we wanted to give to **Viktor Trón**, one of the founders of Swarm. Because without him, Metaprovide wouldn’t exist._

_Right now, we have Swarm storage, but I think what is really interesting is to go from Swarm storage to Swarm integration with all the various apps that are inside Nextcloud,”_ he concluded. After this introduction, it was time to show the technical aspects of the plugin.

Once it is configured in Nexcloud’s administration settings, it requires the IP address of where your node is running, your debug API and your port API, if you permit Nextcloud to communicate with your remote server. There’s also the option to authenticate through HTTPS authentication. As an administrator you have the ability to see the status of your Bee node and enable or disable encryption.

It also gives information about the batches within a given node, which gives the information such as BZZ balance, whether it’s usable, and as a user you can activate or deactivate a batch ID as well. It also provides the management of certain key aspects of the Bee node without going to an external app or any other client. You can run various nodes off the same Nextcloud instance, and you can also purchase new stamps.

A Bee node is fully integrated like any other storage, which allows for a seamless upload/download of any file to a Bee node, you can copy from a Bee node to any other storage, and you can move or copy from any other storage to your Bee node. At the moment, you’ll still need to fund your cheque book externally through another API or client.

# WAM 2.0 is coming in March and a Swarm solstice event in December

The last part of the call was reserved for the official [We Are Millions](https://www.wearemillions.online/) (WAM) Hackathon announcement. A new WAM is coming in March 2023, bringing together efforts to make a positive social impact. And as we wait, there are monthly [WAM Sessions](https://twitter.com/WAMillions) to make the time until then pass a little faster.

But before that there will be another Swarm solstice event In December, where we’ll take a look at the current developments and reflect with our ecosystem on what’s being built and what Swarm can bring to society.