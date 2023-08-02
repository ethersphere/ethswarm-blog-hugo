+++
banner = "/uploads/scc_recap-july-2023.png"
categories = [ "Events" ]
date = 2023-08-02T00:00:00.000Z
description = "For those who missed out on our monthly gathering on Discord, with the latest news, retrospective and a debate on features and future plans, here is a short recap of July's Swarm Community Call."
references_and_footnotes = [ ]
title = "Swarm Community Call, 27 July — Recap"
_template = "post"
+++

For those who missed out on our monthly gathering on Discord, with the
latest news, retrospective and a debate on features and future plans,
here is a short recap of July's Swarm Community Call.

## Release of the new localstore

**The new localstore** is in the final stages of testing and is **about
to go live this week** as Bee v1.17, Callum Toner from the Research
Track announced. The latest version of Bee **will be a breaking
change**, which is a gentle reminder to all node operators to **update**
their **nodes** as soon as possible to avoid any loss of functionality.

As Callum Toner from the Research Track pointed out, the new release
will include the rewritten localstore, essentially leading to Bee 2.0
once the team feels that there is enough user value included and
everything is working as expected.

Regarding the importance of the new release, Alok Nerurkar, Bee team
developer, explained that the localstore is one of the defining elements
of the Swarm network, because it's responsible for the actual storage of
data chunks. Since chunks are used in different contexts (i.e. in data
uploads, caching, reserve storage, etc.), the new local store can
isolate and prevent these contexts from affecting each other. This way,
the storage component is more observable and maintainable.

As community members soon pointed out, the new localstore also enables
multi-stamp chunks, which is good news. Multi-stamp chunks make it
possible for more people to support the same content on Swarm; for
instance, good public data will be able to persist as long as anybody is
interested in persisting it.

## Formalising the ethos of decentralisation with SWIPs

[**Swarm improvement proposals
(SWIPs)**](https://www.ethswarm.org/contribute) are **a way
for the Swarm community to propose features** that they think should be
included in the Swarm's software **to make it better**. One such
proposal has already been created and concerns the implementation of
erasure coding, which helps protect against errors and data corruption.

*"We want to make a lot of system- and very user-centric changes and not
reference just the roadmap, which is influenced predominantly by our
research, or Bee ideas, or business development. The important thing is,
we need to deliver for the users and there\'s no better way to do that
than for our users to actually tell us what their problems are and what
makes the product better ... We want the user feedback and to actually
make those improvements sooner rather than later,"* Callum succinctly
laid out the logic behind SWIPs.

## Better Swarm, better docs

The [**entire documentation
website**](https://docs.ethswarm.org/) has been
**revamped** in the past few months, including logos, colours, fonts and
the OpenAPI specs. Noah Maizels emphasised how the "Learn" section is
now populated with completely new content that gives **a very high-level
overview of Swarm**. It is also meant for newcomers to get more gently
acquainted with the core concepts from the [**Book of
Swarm**](https://www.ethswarm.org/The-Book-of-Swarm.pdf).
The latter is undergoing a streamlining process to make it easier to
read and more accessible to a wider audience.

For those who want to dig a bit deeper into the documentation, all the
Bee client specs currently under development are accessible
[here](https://github.com/ethersphere/specs) (concrete
specs) and
[here](https://github.com/ethersphere/bee-docs/tree/feat-protocols-spec-2)
(this is a branch of the Bee documentation).

## Community Talks -- NFT metadata on Swarm

In the Community Talks segment Ramesh Palikara presented a simple
project that lets you upload NFT metadata to Swarm. [The example
demonstrated on the
call](https://github.com/ethersphere/nft-example) uploaded
one NFT image and its data as a reference, but the idea is that anyone
can fork the original NFT, create their own instance of it and build
upon it with original creative ideas.

For example, one can use their own algorithm to generate multiple images
with different characteristics and then upload them to Swarm. You can
also configure it so that other blockchains can deploy the NFTs as well.
And because it is hosted on Swarm, it works the same with all file types
-- audio, video, image, even with whole websites with their own embedded
multimedia.

So, as a playful challenge, [check out this blog to learn how to store
NFT metadata on
Swarm.](https://blog.ethswarm.org/foundation/2023/how-to-create-an-nft-and-store-metadata-on-swarm/)

See you on 31 August at the next Swarm Community Call!
