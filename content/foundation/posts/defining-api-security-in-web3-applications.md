+++
banner = ""
categories = ["Tutorials"]
date = 2021-12-09T04:00:00Z
description = "The Swarm Bee team is excited to announce that an initial version of the Restricted API feature is available and ready for experimentation!"
references_and_footnotes = []
title = "Defining API Security in Web3 Applications"

+++
By Peter and Anatol, Swarm Foundation Dev Team

**The Swarm Bee team is excited to announce that an initial version of the Restricted API feature is available and ready for experimentation!**

Decentralised web programming paradigms and data access patterns pose novel threats to user data security. The different ways in which users publish their data can incentivise (but also prevent) attackers to act in different ways and utilise different attack vectors in order to obtain user data or misuse keys in ways that demand a potentially radical rewrite of what we conceive as “internet security”.

The Bee Restricted API design is a first iteration of a larger planned API redesign. It is the result of intersecting work done by the Swarm JS team, the Research team and the Bee team.

# Background

It is undesirable for a malevolent actor to be able to access all of a node’s API endpoints. By restricting API access, a node operator can increase the security of their node and improve the security of user funds. It’s also a good idea to have some sort of granularity when accessing the API endpoints, whether this is to mitigate trust issues or just to introduce some sort of hierarchy in the system in order to gain more control over who is able to do what. Since a role-based access control (RBAC) security model can fulfil these requirements, the Bee team have decided to implement this feature in the Bee node software and hence improve the security of the exposed API.

It’s worth noting that for the moment the following endpoints will remain unrestricted:

* /health
* /metrics
* /readiness
* /debug/*

# Getting Started

To get started, you will need to run your node with the `--restricted` configuration flag. You also need to set the `--token-encryption-key` (which will be used for encrypting the issued security tokens) and the `--admin-password` (which is the login password for the `/auth` endpoint).

> _The `--admin-password` value must be hashed with_ [_bcrypt_](https://bcrypt-generator.com/)_._

It is also possible to include/set those options in your _yaml_ configuration file as follows:

    restricted: truetoken-encryption-key: <your_super_secret_encryption_key>admin-password: <your_bcrypt_hashed_admin_password>

# Using the API in Restricted Mode

> _Our assumption here is that the node api is exposed at the address `localhost:1633`._

With the restricted API mode enabled, we can obtain our first security token by sending the POST request to the `/auth` endpoint as follows:

    curl -X POST http://localhost:1633/auth \-H 'Content-Type: application/json' \-H 'Authorization: Basic :<your_base64_basic_auth>' \-d'{"role":"consumer","expiry":3600}'

Where the `role` is one of the predefined roles (consumer, creator, maintainer or accountant), and `expiry` defines the lifetime of the issued token (in seconds).  
The value of `your_base64_basic_auth` is the value of the`- admin-password` parameter prefixed with a `:` character and base64 encoded (ex. `base64(':passwd1')` where `passwd1` is the value specified as`- admin-password`).  
The returned result is in the form of:

    {"key":"<the_super_secret_access_token>"}

Now the protected endpoints can be accessed by using the `'Authorization: Bearer <the_super_secret_access_token>'` header in the HTTP requests. E.g.:

    curl -X GET http://localhost:1633/bzz/<hash_of_some_secret_content>/ \-H 'Authorization: Bearer <the_super_secret_access_token>' \-o my_file

If you want to refresh your token you are able to do so by sending the following request to the `/refresh` endpoint:

    curl -X POST http://localhost:1633/refresh \-H 'Content-Type: application/json' \-H 'Authorization: Bearer <the_super_secret_access_token>' \-d'{"role":"creator","expiry":86400}'

where the result will be similar to the login case:

    {"key":"<the_refreshed_super_secret_access_token>"}

# Expectations

This is a new feature that’s still experimental, so the feature set is incomplete and may be subject to breaking changes or deprecation (in the case we find a better way of providing the same solution to users).

The main motivation behind this feature is to make it safer and easier for node operators to operate a Bee node in situations where the API endpoints are publicly accessible. This means that a node operator can run their Bee node on a server (e.g.: Raspberry Pi) and securely access it from all other devices with the bearer token.

One such example is: webpages returned from the `/bzz` endpoint share the same context that is used by management tools such as Swarm-CLI and Bee dashboard. In this case, if a hostile dApp is loaded using the `/bzz` endpoint, it can access any endpoint of your Bee API. CORS will not prevent this action from occurring. A result of these actions can be to download data that the attacker wants to spread over the Swarm network and then pin it to your node or, even worse, if the attacker has figured out your active postage stamp ID, they will be able to upload arritrary data, depleting the value of your postage stamp. The bearer token requirement prevents such scenarios. In the future, responses can even be mutated based on the role that the token carries; for example, if there is a `/status` endpoint that gives information about your node mixed with sensitive data, requests with lesser permissioned roles get back only just a part of that information.

Another consideration is that an improved API security model will be an enabling step in our overall strategy to enable granular modes of operation on our APIs, while allowing other second-layer solutions to emerge over the RBAC model. A good example of this would be a gateway model where access would be proxied with payments (crypto or otherwise) and the actual features could be utilised from an encapsulating service.

# What’s next?

The policies definition is currently hardcoded but a plan is in the works to make these configurable and thus allow the users to define new roles.

There is also the possibility to have a proxy server situated in front of the node, managing only the access permissions. One of the advantages of such an approach would be the increased flexibility gained from the lack of coupling between the Bee node implementation and the security solution. On the other hand, this would be an extra dependency and thus it might make the initial setup a bit more complex for the user.

Keep an eye on our blog for updates on this feature, and for discussion and general feedback, please join the [Swarm Discord](https://discord.gg/wdghaQsGq5).