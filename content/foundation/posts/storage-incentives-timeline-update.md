+++
banner = ""
images = [ "" ]
categories = [ "Development updates" ]
date = 2022-11-20T23:00:00.000Z
description = "The upgrade of the Swarm network storage incentives, which began on 13 September, is now in full swing. Both, Phase 2 and 3 of the upgrade, are currently undergoing extensive testing: Phase 2 on the public testnet and Phase 3 on a closed testnet."
references_and_footnotes = [ ]
title = "Storage incentives — Timeline update"
_template = "post"
+++

The upgrade of the Swarm network storage incentives, which began on 13 September, is now in full swing. Both, Phase 2 and 3 of the upgrade, are currently undergoing extensive testing: Phase 2 on the public testnet and Phase 3 on a closed testnet.

During the testing period of Phase 2, two sets of issues were identified:

1. Reserve Commitment Sampler: consensus between nodes in a given neighbourhood is not always given.
2. Localstore and pull-sync: synchronisation with the previous reserve commitment sampler encounters some issues.

These behaviours of the reserve commitment sampler and localstore have an impact on the fairness of the Schelling redistribution game. As a result, **Phase 2 will remain on testnet** until further testing is completed. To mitigate this, slashing has been removed from the game at this stage.

Everyone is actively working on resolving all the above issues. About every [three days](https://github.com/ethersphere/bee/releases) a new release candidate is proposed and tested. This involves continuous testing of the system as well as changes to the smart contract. A few more weeks of testing will be needed before releasing Phase 2 to mainnet. The sequence of events to release storage incentives remains [as planned](https://medium.com/ethereum-swarm/towards-the-world-computer-the-swarm-network-upgrade-has-started-cfba1ed68330).

According to **Callum Toner,** working with the inhouse dev team at Swarm Association, quality assurance of the redistribution game is currently the paramount responsibility: _“Storage incentives remain ready and will be further tested with the likes of the price oracle and system-wide changes until they meet the highest possible standard before release,”_ he noted.

For more information, join the [Swarm Foundation Discord](https://discord.com/channels/799027393297514537/801438093927776286) and [the next Monthly Ecosystem Call on 24 November](https://discord.gg/GtQFMht2?event=1038079446508376094), where Swarm Foundation members will give the latest updates and explain the next steps.

Onwards.

# Upcoming events

- To stay up to date with Swarm and be the first to hear updates, join The Monthly Ecosystem Call, online, 24 November
- Winter Solstice Event, online, 21 December
- WAM Hackathon, online, 1–21 March 2023
- Swarm Summit, TBC, 21 June 2023
