+++
banner = ""
categories = [ "Tutorials" ]
date = 2021-11-30T04:00:00.000Z
description = "The Swarm ecosystem is young, and there is always space for a lot of cool utilities, apps, and use cases. We support developing on Swarm with a set of libraries, CLIs, and utilities. I will demonstrate how to utilize some of these components with a small hacking session."
references_and_footnotes = [ ]
title = "Hacking with Swarm and Bee-js"
_template = "post"
+++

The Swarm ecosystem is young, and there is always space for a lot of cool utilities, apps, and use cases. We support developing on Swarm with a set of libraries, CLIs, and utilities. I will demonstrate how to utilize some of these components with a small hacking session.

What is the goal? It is common for developers to share application logs with each other. What about using Swarm for storing the logs? It would be awesome just to pipe the output of the command directly to Swarm, so let’s develop it!

# Pining data to Swarm

First, we need a proper name for our future tool. Since there is a similar project for pasting notes to Swarm called [Pastebee](https://pastebee.com/), I have decided to call it Pastebee CLI.

Second, we need to have a Bee instance to use for development. There are several ways to achieve this. You could deploy your Bee nodes using a testnet deployment, use a tool like [Bee Factory](https://github.com/ethersphere/bee-factory/) that spawns a local Bee cluster using Docker, or the most simple solution, the one that we will use: Bee’s dev mode. Dev mode mocks all the blockchain requirements and is somewhat limited in its capabilities, yet the main functionality, upload and download of data, is available for local development, and that is all we need. So, first install Bee if you do not have it already. See our [documentation](https://docs.ethswarm.org/docs/installation/manual) for more details. Once you have Bee installed, simply run the command `bee dev` in your command prompt, which will start the development server with endpoints `http://localhost:1633` for the normal endpoint and `http://localhost:1635` for the debug endpoint. Now, we can move on to hacking.

Let’s set up an environment and connect to our node with TypeScript. Create a new package and install the dependencies that we will need:

$ npm init -y
$ npm install --save @ethersphere/bee-js yargs
$ npm install --save-dev ts-node typescript @ethersphere/swarm-cli @types/yargs

To upload data to Swarm, we have to get a postage stamp. We will use Swarm’s handy utility: [swarm-cli](https://github.com/ethersphere/swarm-cli) to communicate with the Bee node using the command prompt.

$ npx swarm-cli stamp buy --depth 20 --amount 1_000_000
Stamp ID: a28a6fe8bd11deff49beb77005884f8043a5048aa4100c757f65e886ddcb1123

Before starting coding, create an env. variable `BEE_STAMP` with the Stamp ID you got from the previous step so that we can use it in our code:

$ export BEE_STAMP=”<<INSERT YOUR STAMP HERE!>>”

Now finally, some code to connect to the Bee node.

 import { Bee } from '@ethersphere/bee-js'

const BEE_URL = process.env.BEE_URL || 'http://localhost:1633'
const BEE_STAMP =  process.env.BEE_STAMP

async function main(): Promise<void> {
  if(!BEE_STAMP) throw new Error ('You have to configure Postage Stamp env. variable BEE_STAMP!')
  
  const bee = new Bee(BEE_URL)
  const result = await bee.uploadFile(BEE_STAMP, 'Hello world Swarm!')
  console.log(\`${BEE_URL}/bzz/${result.reference}\`)
}

main()

With this code, we connect to our Bee node defined under `BEE_URL` constant and use our previously created `BEE_STAMP` to upload the first bytes to Bee. When you execute this file, you will get a link that you can visit in a browser that should display “‘Hello world Swarm!”:

$ npx ts-node index.ts  
http://localhost:1633/bzz/f20e1a0fdacd0c6e95de2e63979765e34100418639050c6835b27d6fa8f57d0c

Let’s extend this to fetch the data from standard input (STDIN) with a custom function `loadStdin()`

 import { Bee } from '@ethersphere/bee-js'

const BEE_URL = process.env.BEE_URL || 'http://localhost:1633'
const BEE_STAMP = process.env.BEE_STAMP

async function loadStdin(): Promise<string> {
  const chunks = \[\]
  for await (const chunk of process.stdin) chunks.push(chunk)

  return Buffer.concat(chunks).toString('utf8')
}

async function main(): Promise<void> {
  if(!BEE_STAMP) throw new Error ('You have to configure Postage Stamp env. variable BEE_STAMP!')
  
  const bee = new Bee(BEE_URL)
  const data = await loadStdin()
  const result = await bee.uploadFile(BEE_STAMP, data)
  console.log(\`${BEE_URL}/bzz/${result.reference}\`)
}

main()

Now we can pipe some data to Swarm!

$ echo “Hello Swarm world from STDIN!” |  npx ts-node index.ts
http://localhost:1633/bzz/f78dc7a4cc6b3fb5df79b3f219f21265bad67ffd38be8552d2536e5e2b02ac92

To wrap it up, we will add some CLI options with `yargs` to configure the Bee node and postage stamps and point the user to the Pastebee app that displays the logs.

  
 import { Bee } from '@ethersphere/bee-js'
import yargs from 'yargs'

async function loadStdin(): Promise<string> {
  const chunks = \[\]
  for await (const chunk of process.stdin) chunks.push(chunk)

  return Buffer.concat(chunks).toString('utf8')
}

async function main(): Promise<void> {  
  const argv = await yargs(process.argv.slice(2))
    .usage('Usage: <some STDOUT producing command> | $0 \[options\]')
    .option('bee', {
      alias: 'b',
      type: 'string',
      describe: 'Bee node URL.',
    })
    .option('stamp', {
      alias: 'p',
      type: 'string',
      describe: 'Postage Batch Stamp ID. Required if custom Bee node is used.',
    }).argv

  const BEE_URL = argv.bee || process.env.BEE_URL || 'http://localhost:1633'
  const BEE_STAMP =
    argv.stamp || process.env.BEE_STAMP
  
  if(!BEE_STAMP) throw new Error ('You have to configure Postage Stamp env. variable BEE_STAMP!')

  const bee = new Bee(BEE_URL)
  const data = await loadStdin()
  const result = await bee.uploadFile(BEE_STAMP, data)

  process.stdout.write(\`Uploaded! [https://pastebee.bzz.link/?](https://pastebee.bzz.link/? "https://pastebee.bzz.link/?")${result.reference}\`)
}

main()

  
That is our fully functional `pastebee-cli` utility! You can use an already published package that does all this and also has more polished UX and additional features. See here: [https://www.npmjs.com/package/pastebee-cli](https://www.npmjs.com/package/pastebee-cli "https://www.npmjs.com/package/pastebee-cli"). If you are interested, you can also see its source code here: [https://github.com/auhau/pastebee-cli](https://github.com/auhau/pastebee-cli "https://github.com/auhau/pastebee-cli")
