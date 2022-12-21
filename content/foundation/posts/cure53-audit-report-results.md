+++
banner = ""
categories = []
date = 2021-10-01T04:00:00Z
description = ""
references_and_footnotes = []
title = "Cure53 Audit Report Results"

+++
Early this year, Swarm Foundation commissioned Cure53 to conduct a source code audit of Bee and the Swarm smart contract suite. The audit identified twelve security-relevant risks with varying severity levels within the scope delineated by the Swarm team which have now been addressed and resolved.

# Cure53

Cure53 was founded by Dr.-Ing. Mario Heiderich in 2007. Since then they have performed several hundred penetration tests against all kinds of web applications, online services, hardware interfaces, mobile applications, libraries and crypto tools.

With a team consisting of six senior testers, Cure53 conducted the assignment in March and April. Six team members responsible for the project’s preparation, execution and finalisation invested a total of thirty-three days to reach the coverage expected for this project.

Cure53 were commissioned to conduct the audit due to their extensive experience in auditing crypto projects and their no-nonsense approach to testing and reporting on their findings.

> _“The absence of serious problems is generally a good sign. However, it should not be seen as a conclusive verdict given that the codebase is still quite young and, as mentioned, continues to have many moving parts, alongside some unsolved design and architectural choices.”_
>
> _Cure53 Report_

# Audit Report

The audit identified twelve security-relevant risks with varying severity levels within the scope delineated by the Swarm team.

For optimal progress, coverage and tracking of issues, the work was split into four separate work packages:

* Threat-Modelling Exercise to determine the exact scope
* Penetration Tests & Source Code Audits against Ethswarm bee
* Penetration Tests & Delta Code Audits against bee-clef/clef
* Smart Contract Audits against Swarm-related Solidity files

White-box methods were applied in the project. Cure53 were given access to all relevant material, including the source code behind various components and detailed documentation. Most importantly, several meetings and mini-workshops with the Swarm team were held to facilitate comprehensive understanding of the objectives and technical traits of the objects subject to this review.

Given the complex scope, a lot of questions were asked and promptly answered by the Swarm dev team.

Despite several parts of the complex still being ‘work-in-progress’ and quite in flux, the Cure53 team managed to get good coverage over the work packages. As noted, the test and audit team managed to spot a total of twelve findings, nine of which were classified as security vulnerabilities and three as general weaknesses with lower exploitation potential. It should be noted that no findings of critical or even high severity were spotted, which means that the majority of issues were concluded to represent flaws with medium, low or informational scores.

The absence of serious problems is generally a good sign. However, it should not be seen as a conclusive verdict given that the software compound is still quite young and, as mentioned, continues to have many moving parts, alongside some unsolved design and architectural choices. At the same time, because the work took place so early in the development process, it can be stated that the Swarm team demonstrates a high level of security and privacy awareness.

# Implementing the audit recommendations

The Swarm Foundation dev team has been thoroughly going through the audit report and over a period of months has been implementing its recommendations. Since there were no critical vulnerabilities, this has been an ongoing and iterative process that has been concluded with the release of v1.2.0.

Feel free to [read the entire audit report here](https://gateway.ethswarm.org/access/c5da2df711722ca8edb6a01715ee03e1fd834b5c8241e625ad95c26d04292b28)