+++
banner = "/uploads/how-to-run-a-bee-node.png"
categories = ["Tutorials"]
date = 2023-04-11T22:00:00Z
description = "Running a Bee node is essential for building decentralised applications on the Swarm network. However, as a developer, it is often convenient to work in an environment where interactions with the node/network can be tested rapidly and without putting the node’s storage data or the user’s tokens at risk."
references_and_footnotes = []
title = "Build on Swarm: How to Run a Bee Node for Testing and Development"

+++
Running a Bee node is essential for building decentralized applications on the Swarm network. However, as a developer, it is often convenient to work in an environment where interactions with the node/network can be tested rapidly and without putting the node’s storage data or the user’s tokens at risk.

In this article, we’ll explore three safe and risk-free options available for developers to simulate a Bee node running on Swarm primarily for testing and development:

1. Run Bee in developer mode
2. Run a local network with Bee Factory
3. Run a local network with FDP Play

Whether you’re a beginner or an experienced developer, these options will help you get started with Swarm quickly. So let’s dive in!

# Option 1: Run Bee in Developer Mode

When a Bee node is run in developer mode, it creates an instance with volatile persistence and mocked backends which makes this mode highly advantageous for experimenting and testing out various Bee node features. Any changes made to the node’s state are temporary and discarded when the node is stopped. As a result, there is no impact on real-world data or assets, making this mode an ideal option for developers looking to experiment with the Bee node.

### Prerequisites

* Ports `1633` and `1635`must be free and available

### Step 1: Install `bee` on your system

1. Using the [Installer packages](https://docs.ethswarm.org/docs/installation/install)
   * Ubuntu/Debian (*.deb)
   * CentOS (*.rpm)
   * MacOS (brew)
2. Use the [installer script](https://docs.ethswarm.org/docs/installation/manual) which automatically detects your execution environment and installs the latest stable version of `bee` on your computer
   * Linux (bee-linux-*)
   * MacOS (bee-darwin-*)
   * Windows (bee-windows-*)
3. [Build from source](https://docs.ethswarm.org/docs/installation/build-from-source) on all systems.

You can download the most recent bee packages here: [https://github.com/ethersphere/bee/releases/latest](https://github.com/ethersphere/bee/releases/latest "https://github.com/ethersphere/bee/releases/latest")

### Step 2: Start Bee in `dev` mode

Open a terminal window and run:

    bee dev
    
     (                      *        )  (
     )\ )                 (  *    ( /(  )\ )
    (()/(   (    (   (    )\))(   )\())(()/(   (
     /(_))  )\   )\  )\  ((_)()\ ((_)\  /(_))  )\
    (_))_  ((_) ((_)((_) (_()((_)  ((_)(_))_  ((_)
     |   \ | __|\ \ / /  |  \/  | / _ \ |   \ | __|
     | |) || _|  \ V /   | |\/| || (_) || |) || _|
     |___/ |___|  \_/    |_|  |_| \___/ |___/ |___|
    
    
    Starting in development mode
    
    "time"="2023-03-08 13:55:59.008839" "level"="info" "logger"="node/localstore" "msg"="database capacity" "chunks"=1000000 "~size(GB)"=20.29025
    "time"="2023-03-08 13:55:59.008726" "level"="info" "logger"="node" "msg"="starting debug api server" "address"="[::]:1635"
    "time"="2023-03-08 13:55:59.022163" "level"="info" "logger"="node" "msg"="starting api server" "address"="[::]:1633"

Great! Our bee node is now running in `dev` mode. You can now safely interact with all of its API endpoints. Any changes to the node’s state resulting from your interactions will only be persisted to volatile memory.

# Option 2: Run a local network with Bee Factory

[Bee Factory](https://github.com/ethersphere/bee-factory) offers a complete solution to simulate an entire Swarm Network on your machine. Bee Factory is a CLI tool used to spin up a Docker cluster of Bee nodes as well as a test Blockchain for advanced testing and development.

### Prerequisites

* Docker must be already be installed
* `node` >= `16`
* Ports `1633` and `1635` must be free and already, but blocked from external connections

### Step 1: Install Bee Factory

    npm install -g @ethersphere/bee-factory

### Step 2: Using Bee Factory

Spin up the cluster for a specific Bee version and attach to the Queen container and display its logs (Press Ctrl+C to stop):

    bee-factory start 1.13.0

Or spin up the cluster for a specific Bee version, detach and exit:

    bee-factory start --detach 1.13.0

Stop a running bee cluster:

    bee-factory stop

To delete existing containers while switching versions, you can use the `–-fresh` flag:

    bee-factory start 1.13.0 --fresh

To list all available subcommands:

    bee-factory --help

To list help content for a specific subcommand:

    bee-factory <subcommand> --help

You can check out [https://github.com/ethersphere/bee-factory](https://github.com/ethersphere/bee-factory "https://github.com/ethersphere/bee-factory") for more information on `bee-factory`.

# Option 3: Run a local network with FDP Play

[Fair Data Protocol](https://fdp.fairdatasociety.org/) (FDP) is a data interoperability protocol and a layer 2 solution built on top of Swarm. It promotes self-sovereignty and privacy for dApps that use personal data in the decentralised cloud.

Much like `bee-factory`, [FDP Play](https://github.com/fairDataSociety/fdp-play) is a CLI tool used to spin up a local development FDP environment with Docker. It includes a ganache blockchain for testing, a Docker cluster of bee nodes as well as a FairOS instance.

### Prerequisites

* Docker must be already installed
* `node` >= `16`
* Ports `1633`, `1635` and `9090` must be free and available

### Step 1: Install FDP Play

    npm install -g @fairdatasociety/fdp-play

### Step 2: Using FDP Play

Start a bee cluster using the latest supported Bee version:

    fdp-play start

Attach to the Queen container and displays its logs:

    fdp-play logs queen --follow

Stop the cluster (container data persists between restarts):

    fdp-play stop

Clear all data (fresh) and pull latest docker images:

    fdp-play start --pull --fresh

Spin up the cluster using the specified blockchain image:

    fdp-play start --detach --blockchain-image fairdatasociety/fdp-play-blockchain

You can check out [https://github.com/fairDataSociety/fdp-play](https://github.com/fairDataSociety/fdp-play "https://github.com/fairDataSociety/fdp-play") for more information on `fdp-play`.

# Alright, what’s next?

Now that we’ve explored three risk-free ways to get a bee node running for testing and development, it’s time to start interacting with it and building on the Swarm network. The [Bee JS](https://github.com/ethersphere/bee-js) SDK and its [documentation](https://bee-js.ethswarm.org/docs/) is a great place to get started.

Check out our growing list of [free and open-source projects](https://github.com/ethersphere/awesome-swarm) related to Swarm and its ecosystem. Join the #develop-on-swarm channel on [Discord](https://discord.ethswarm.org/) to connect with other developers in the Swarm community. If you have a great idea that can make an impact, consider [applying for a grant](https://my.ethswarm.org/grants). The Swarm is waiting for _you_!