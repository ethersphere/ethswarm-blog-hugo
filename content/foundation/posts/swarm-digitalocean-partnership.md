+++
banner = "/uploads/swarm-do.png"
images = [ "/uploads/swarm-do.png" ]
categories = [ "Ecosystem" ]
date = 2024-05-20T13:00:01.000Z
description = "The Swarm Foundation is excited to announce an exciting new partnership with Digital Ocean, marking a significant milestone in its journey to simplify and enhance decentralised storage accessibility. "
references_and_footnotes = [ ]
title = "Swarm unveils a partnership with Digital Ocean"
_template = "post"
+++



The Swarm Foundation is excited to announce an exciting new partnership with [Digital Ocean](https://www.digitalocean.com/), marking a significant milestone in its journey to simplify and enhance decentralised storage accessibility. This collaboration introduces the [Swarm Lightnode 1-Click App on Digital Ocean](https://marketplace.digitalocean.com/apps/swarm-lightnode), a breakthrough for developers and businesses aiming to effortlessly leverage decentralised storage solutions.


## Introducing Swarm Lightnode on Digital Ocean

Swarm Lightnode, powered by Bee version 1.18.2, licensed under the BSD-3-Clause, provides a robust and compliant software foundation. This partnership is set to revolutionise how developers interact with blockchain technology, making it more accessible, scalable, and efficient.


## Seamless Integration with Digital Ocean

The highlight of this partnership is the seamless integration of Swarm Lightnode with Digital Ocean's infrastructure. Users can now easily deploy Swarm Lightnodes using either the Digital Ocean control panel or the Digital Ocean API, accommodating  a broad range of applications from small projects to large-scale enterprise solutions.


## Getting Started with Swarm Lightnode

Deploying a Swarm Lightnode has never been easier. Here’s how you can get started:



* API Creation: In addition to deployment via the Digital Ocean control panel, the Digital Ocean API facilitates the creation of Swarm Lightnode Droplets.
* Simple Deployment: To deploy a 4GB Swarm Lightnode Droplet in the NYC3 region, you can use the following curl command. Ensure to replace $TOKEN with your API access token.

```
        curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
         '{"name":"choose_a_name","region":"nyc3","size":"s-2vcpu-4gb","image":"swarmfoundation-swarmlightnode"}' \
         "https://api.digitalocean.com/v2/droplets"
```


Alternatively, you can watch a video demo [here](https://www.youtube.com/watch?v=sm3JjHpeHyE&list=PL6fQnFAjtuY-Yl5uRcc5ToHVKKB7u9Rbg&index=8).

 

This partnership is more than just a technological collaboration; it's a commitment to fostering innovation and simplifying the complexities of decentralised technologies for developers worldwide.


## What This Means for Developers

Developers can now focus on building and scaling their applications without operational overhead. The Swarm Lightnode 1-Click App provides a direct, uncomplicated pathway to integrating decentralised storage solutions, offering scalability, security, and efficiency.


## Looking Ahead

As we celebrate this partnership, we look forward to the innovative solutions the Swarm community will build with the support of Digital Ocean and Swarm Lightnode. This collaboration is just the beginning of our journey to make blockchain technology more accessible and usable for everyone.

Stay tuned for updates and tutorials on how to maximise your use of Swarm Lightnode on Digital Ocean. Together, let's build the future of decentralised applications.
