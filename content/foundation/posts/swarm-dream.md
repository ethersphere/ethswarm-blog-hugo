+++
banner = "/uploads/DREAM.jpg"
images = [ "/uploads/DREAM.jpg" ]
categories = [ "Development updates" ]
date = 2025-04-18T00:01:00.000Z
description = "Swarm introduces an innovative solution called DREAM (Deletion by Revoking Encryption Access for Mutable resources), which tackles deletion not by physically erasing data, but by ensuring data becomes completely inaccessible once deleted."
references_and_footnotes = [ ]
title = "Feeling Cute. Might Delete It Later? The Challenge of Deletion and Swarm’s DREAM Solution"
_template = "post"
slug="swarm-dream"
+++


Have you ever posted a photo on social media, immediately regretted it, and quickly hit "delete"? Perhaps you’ve deleted an embarrassing tweet or tried to recall an email sent by mistake. Platforms like Instagram, Twitter, Google Drive, or email providers make deletion appear effortless—just one click, and your content seems to vanish instantly. But is it really gone?

The uncomfortable truth is that when you delete something online, you're usually just removing your own immediate access to it, not necessarily erasing the content entirely.
Behind the scenes, companies often retain copies on backups or servers, sometimes indefinitely. Even worse, if someone else has already seen your content, they can easily copy, screenshot, or repost it. This means your data might still exist, even after you've pressed “delete.”

## Gatekeepers of Deletion

The rapid digitisation of our lives and the widespread use of cloud storage have heightened concerns around privacy and data control. Regulators now frequently demand platforms provide reliable ways to remove or delete sensitive data. However, they overlook a fundamental reality: once data is viewed or shared, it’s nearly impossible to ensure every copy disappears.

Centralised platforms like Facebook, Twitter, or YouTube address this challenge by acting as “gatekeepers.” They control whether data remains visible or is removed from their own servers. This centralised approach seems convenient because it offers regulators an easy target to enforce data deletion rules.

But here's the problem: Centralised deletion rarely solves the underlying privacy issue. Even if a social media platform deletes your post, the information might have already spread elsewhere. More troubling, this centralised authority can be misused for censorship. Content creators—bloggers, artists, journalists—sometimes lose access to their own work simply because a platform decides to remove it. Users who spent years building their audience suddenly find themselves "deplatformed," with limited recourse.

Think about your favorite YouTube creator suddenly losing access to their account without warning. They lose followers, income, and their voice overnight. High switching costs mean creators can’t just easily migrate to another platform and recover their audience.

## Decentralised Storage and Deletion

Frustrations with centralised gatekeeping have fueled a move towards decentralised storage solutions, such as Swarm, where your data isn't held in a single location. Instead, it's scattered across hundreds or even thousands of independent nodes worldwide. This decentralisation prevents censorship because no single party can arbitrarily remove or restrict your data.

Yet, decentralisation introduces its own problem: How do you genuinely delete data when there’s no central "delete" button? Since your data lives everywhere, physically removing it from every node is virtually impossible. The concern remains: will sensitive information linger online indefinitely, outside your control?

## The DREAM Solution to Decentralised Deletion

Swarm introduces an innovative solution called [DREAM](https://papers.ethswarm.org/p/dream/) (Deletion by Revoking Encryption Access for Mutable resources), which tackles deletion not by physically erasing data, but by ensuring data becomes completely inaccessible once deleted—effectively making it vanish.

Intuitively, the idea behind DREAM is like handing out locked boxes (data chunks) that contain your valuable documents (private data). Only people with the correct key (encryption pads) can unlock them. When you want to revoke someone’s access, you don't try to physically destroy every box around the world. Instead, you change the locks by discarding the original keys and creating new ones. Without the original keys, even if someone still possesses the locked box, it’s useless, they can't open it or make sense of what's inside.

Just like changing locks after losing your house keys makes the old keys useless, DREAM effectively prevents access without needing to locate and destroy every copy of the data.

Lets take an example to see what happens when you share an image online with DREAM. Instead of just uploading it openly, DREAM encrypts your content with a special encryption key. Only users you share this key with can decrypt and view the content. The data itself is still stored across multiple decentralised nodes, but without the key, it’s just meaningless noise, like pages of a book written in an unknown language.

Now, imagine you no longer want someone to access your image. Rather than trying to delete the data physically from every node, you simply discard the encryption key, effectively "destroying the translator." Without the key, the original data can't be recovered, becoming effectively deleted in practical terms.

## Security with DREAM Path
The DREAM model uses multiple nodes working together to generate your encryption key. This approach is called the "DREAM path":

- Each node along the DREAM path contributes partially to generating the final encryption key.
- To revoke access, you only need to update data at one point along this path. This tiny change immediately breaks the entire key-generation chain, rendering the original data permanently unreadable.

## Mathematical Assurance of Security
To visualise how secure this deletion method is, consider this scenario:
Suppose 1 in every 10 nodes in the network might be malicious (trying to preserve deleted data). If your DREAM path involves just 6 nodes, the probability of all six nodes being malicious (thus potentially undermining your deletion attempt) is only 1 in 1,000,000. This simple mathematical model shows clearly why DREAM provides practical and robust deletion.

### Privacy and Control Restored

Beyond just secure deletion, DREAM also enhances privacy. When someone accesses your content, they never discover details like how many nodes were involved or where those nodes are located. Each node along the DREAM path only knows its immediate neighbour.

This design offers an additional layer of privacy called plausible deniability: you can convincingly deny responsibility for sensitive content, as encryption keys can't be clearly traced back to specific content.

To sum it up easily, DREAM ensures deletion with the following properties:
- Deniable: Encryption keys aren't traceable directly to specific content, giving you plausible deniability.
- Revocable: You have complete control to revoke data access instantly.
- Expirable: Keys can be designed for single-use, adding an extra layer of security.
- Addressable: You can precisely define who can access your content based on node locations.
- Malleable: The system adjusts dynamically to changes in the network.

## Taking Back Control of Your Data

Swarm’s DREAM model solves the paradox of deleting data in decentralised systems by offering robust, cryptographic-based revocation. It gives you real control and genuine security over your digital content without depending on central gatekeepers.

So, the next time you worry about your sensitive data living online forever, remember: genuine deletion is possible, even in a decentralised world. DREAM gives you back what traditional systems can't: true control, genuine privacy, and real peace of mind.

Swarm's DREAM is coming true—but if you'd like to contribute, check out our collaborative Overleaf project [here](https://www.overleaf.com/4677157878yvwrxwnzkbdt#df6abe), and don't hesitate to leave a comment with your thoughts or questions!

*Disclaimer: DREAM is a proposed design concept and has not yet been implemented in the Swarm network.*