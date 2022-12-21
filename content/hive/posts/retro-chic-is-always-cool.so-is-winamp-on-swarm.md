+++
banner = "/uploads/winamp-png.webp"
categories = ["Ecosystem"]
date = 2021-11-06T23:00:00Z
description = "If you started to listen to mp3s at the turn of the century, there’s a very good chance you did it on Winamp. The iconic music player has amassed an almost cult-like following that persists to this day. No wonder someone was bound to show up and decide to bring it to life in a Web3 setting."
references_and_footnotes = []
title = "Retro Chic is always cool. So is Winamp on Swarm."

+++
If you started to listen to mp3s at the turn of the century, there’s a very good chance you did it on Winamp. The iconic music player has amassed an almost cult-like following that persists to this day. No wonder someone was bound to show up and decide to bring it to life in a Web3 setting.

That’s exactly what happened. A user called “kacy” published a Winamp clone on the IPFS network and shared his work with the community on the Hacker News forum. But a member of the Swarm community, who goes by the nickname “psKama” on that same forum, had difficulties making it work. Fast forward, [**Winamp is now alive in Swarm**](https://bee-9.gateway.ethswarm.org/bzz/bd9b7d91ddb9789d2c0f102d33b9b4504c06100b078884c0669f49187bffba4b/).

You can simply drag and drop your mp3 file(s) (but keep them below 5 MB), hit play, turn it up and enjoy the music. But Winamp on Swarm goes beyond that.

# New powers

Its new decentralised and censorship-resistant nature gives Winamp some super powers that its predecessor lacked. For one, it’s now an unstoppable app living in Swarm. Imagine someone from an oppressive regime who wants to host their podcast. They could record it, add it as an mp3 file to the playlist and bypass the censors.

You can now also use Winamp on any device that has an internet connection. Play it on your fridge, watch, TV, smartphone or all of them at once.

In the future, you could create your own playlist and share it with others with a link directly from the UI. Others could then add to the playlist and re-share it with their friends… This could be the beginning of a decentralised community streaming service.

At an event, a DJ could start the playlist and then let the crowd add their own songs and create an event playlist. That playlist could later even become an NFT!

You could embed it in a video game as a hidden candy and let gamers find it. Or they could unlock tracks as achievements. You could use plugins to remix the songs, add lighting effects or change the interface.

These are just some off-the-top-of-the-head ideas.

However…

_What happens when we add geolocation data to it?_

_What happens when Swarm becomes a partial host of the whole world’s music library?_

_What happens when we start connecting physical devices to it? Maps?_

_What happens when we mix all of the above with NFTs?_

There are no rules. It’s a sandbox for everyone to play in. It’s this permissionless creativity that will decide what the community wants to create.

# Make your own copy

Want to give it your own twist? It’s simple. You can find the original code on [**GitHub**](https://github.com/captbaritone/webamp)**.**

Use a[ swarm-cli](https://github.com/ethersphere/swarm-cli) command to download it to a folder called webamp:

    swarm-cli download bzz://bd9b7d91ddb9789d2c0f102d33b9b4504c06100b078884c0669f49187bffba4b webamp --bee-api-url https://bee-9.gateway.ethswarm.org```

There will be two files in the downloaded folder:

* index.html
* retro.mp3

Add your own mp3 files to the folder and then edit the \`index.html\` file for the initial playlist as a javascript object (called `initialTracks`). The \`metadata\` and the \`duration\` fields are optional.

Once you are done editing, you can upload it using the following command:

    swarm-cli upload webamp --bee-api-url https://bee-9.gateway.ethswarm.org

So there you have it. A piece of history waiting for its new future in Swarm for everyone to enjoy!