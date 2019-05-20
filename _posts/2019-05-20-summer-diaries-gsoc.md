---
layout: post
title: "Summer Diaries: GSOC - What, Why, How and When"
image: geesock.png
tags: [wona]
author: "Mohit Sharma, Vaibhav and Ishan Rai"
excerpt: "Now that you’ve stepped into R, you might hear a lot of new buzzwords flying around in your first few weeks. Right beside Ghissu, Machau and chapo, you might catch wind of something called Gee-Sock."
category: summer2019
---

Now that you’ve stepped into R, you might hear a lot of new buzzwords flying around in your first few weeks. Right beside Ghissu, Machau and chapo, you might catch wind of something called Gee-Sock. Unsure of what it really is, you’re intrigued and eager to learn more, only to find that the guy who uttered the word to you knows no more about it than you do. The hype and mystique that surrounds this word exhorts you to dig deeper, and so begins your descent into an abyss of medium blogs and quora articles, each of which makes less sense than the last to someone who, at this point, barely knows what code is. That’s where WatchOut comes to the rescue.

## So What is GSoC?

First of all, GSoC stands for Google Summer of Code. This information is imperative if you plan to flex on your batchmates with this newfound treasure-house of knowledge. Before we delve further into what GSOC is and how it works, you need to know about a little something called ‘open source’ which constitutes the essence of this esoteric endeavor.

If a piece of software is open source, it means that its source code is freely available . It’s on the cloud for everyone to see, use, and hopefully contribute to. Contributions include everything from simple bug fixes like **“Hey, I center aligned this sidebar button”** to major enhancements, updating the documentation or even simple suggestions on what can be done to improve the technology. In a way, open source is the Self-Service equivalent of the coding regime.

More often than not, open source orgs (short for organizations because programmers like to be cool) are not big on contributors. GSOC is more or less a platform for these organizations to attract new developers. A bunch of such organizations apply to Google for entry to GSOC with a list of projects that they would be offering to interested students. A list of the selected organizations is then released on the official GSOC website.

Projects can be anything from “Oh that’s easy” to mildly intimidating to absolute monstrosities that can only be described as herculean at best and nigh impossible at worst, the range in topics being just as wide. There could be a project that requires you to change the css of a web-page to bootstrap, right next to one that requires you spend hours reading up on bioinformatics to even understand the terminology that is casually thrown around in the project description. But most importantly, you can always find something that you’re interested in. Computational physics? Machine learning? Aerodynamic simulations? Making mini-games for a website? There’s always something for everyone. So pick whatever floats your boat.

Getting selected for GSOC means being singled out by an organization to work on one of their projects for the duration of your summer vacations, which is typically the period during which GSOC takes place.

## How do I participate?

First things first, go through the <span style="text-decoration:underline">[list of selected orgs](https://summerofcode.withgoogle.com/organizations/)</span> and pick one you would be happy working with. Though interest and interest alone is often hailed as the quintessential standard for picking an organization, practically speaking, that’s not always for the best if one actually aims to crack GSOC . The key is to be at just the right place on the spectrum between ambitious and complacent. Don’t go with it just because it sounds cool, it may turn out to be very different than what you initially thought . Also don’t pick something just because it seems easy; remember the main goal is to learn as much as possible. If it intrigues you, take a look, see if you find it interesting. Feel free to experiment a bit before you finalize on which organizations to go with.

Having gotten that out of the way, comes one of the most important steps of this adventure: **Contributing**.

In order to be selected by an org, one has to prove their calibre by contributing to their codebase in any way possible. Their code is usually linked in their page on the organizations list. This usually requires you to have a grip on the fundamentals of **Version Control Systems**. Learning, atleast the <span style="text-decoration:underline">[basics of git](https://www.atlassian.com/git)</span> is crucial to open source.

Git is what you call a version control system, meaning it helps you track all changes made to your code and recall specific versions later. VCSs are often not the prettiest things in the world and may even seem useless at first, but once you get used to them, it’s objectively better than having multiple folders of the same project with names like “Project final” “Project final-est” and “Project final-est v2.o”. It also makes collaboration much easier as multiple people can work on the same file at the same time, which surprisingly enough is essential for an essential requisite for an open source environment.

**“What is Github?”**

Github is a website for developers to host their code and build their egos. It’s quite similar to google-drive, except for code but with a bunch of fancy vocabulary tossed in to make it sound cool. In order to make a contribution to an organization, stalk them on github, pick a repository (fancy word for a folder that contains the source code of an application) that you can and want to work on and fork (copy)  it. Scan through the Issues tab on the original repository to find something you can work on. A vague overview of how it works: you pick an app you wanna work on and make a copy of it in your own account. Then make whatever changes you want to that copy and once you think you’ve done something significant enough to be integrated into the original application, you “open a pull request” which is basically you asking the admins (benevolent dictators)  to review and accept your work i.e merge it with their own source. The more merged requests you have, the better. Brownie points if you also reported some issues.

If it’s the first time you look at the codebase of an industrial application, just reading it, let alone modifying, may seem like a daunting task. But get this, no-one reads the entire code. Just pick an issue to work on and try to get a grip on the relevant segments. Try to start with small and simple bugs or improving documentation, slowly making your way up the ladder.

Contributions should be kept as concise and useful as possible. It’s also useful if you already have in mind what project you’re going to work on and contribute to the parts of the codebase most relevant to that project.

Then comes THE most important part. **Drafting a proposal.**

Now that you have everything you need to think that you’re the best person in the universe for a project, that sentiment has to be communicated across via a well written, comprehensive project proposal highlighting your contributions to the org, which project you wanna undertake and how you plan to execute it. Consider this your first and only impression at the higher-ups so it needs to be as polished as can be with a well versed timeline, execution details full of all the technical jargon you can muster without sounding too pretentious and a motivations section describing your undying passion for the organization that you mysteriously developed over the past month. There's nothing about reaching out to the community. Keeping in touch with the core team, talking and updating them with what you're working on. Bonus points if you also get your proposal reviewed by one of the mentors before the final submission.

That’s just the gist of it. A more formal and comprehensive template for the proposal is usually provided by the organization on their website or github and should be followed as accurately as possible.

All set with a considerable pile of contributions and an eloquent proposal, given one plays their cards right with the existing community, an eligible candidate may make his way into the GSOC-student roster of the org. Their efforts are duly rewarded as they  become the subject of discussion among their friends, the discussions being mainly focused on chapos and GPLs, and gain the respect of peers. Congratulations, you are now eligible to utilize the entirety of your summer vacations, working 8-10 hours a day for the organization you worked so hard to get in.

**“Wait, so all the effort I put in was just so that I could work even harder?”**

Well, Yes but NO.

## Incentives

### MAD MONEY

The organizations in GSOC don’t make you work for free. The monetary perks are obviously essential motivators for incoming participants whether or not they like to admit it. The profuse stipend also calls for more lavish chapos.

**\#AndhaaPaisa**

### KNAAWLEDGE

Let’s not forget what the primary aim of GSOC is. To bring in talented, dedicated students to open source organizations in need of enthusiastic contributors, providing a talent pool to the org and exposure and work experience to the students involved. 

### MAD RESPECT

Clearing GSOC not only imbues an individual with wealth and wisdom but also an intangible accolade that you are now free to flaunt around for the rest of your college life, though at the risk of coming across as a an arrogant know-it-all but can play out quite well if used right.

**“Sudhang ne GSOC nikal liya. Andha machaya!”**

So here you are, a few months since you began your GSoC odyssey after first coming to know about it from a loquacious chap who probably  went on to forget all about it a couple days later. You have now conquered the exigent battle that is GSoC,  gaining experience,opportunities and bragging rights that you couldn’t have gotten elsewhere, along with the universal respect of the opposite gender*. You are now the epicenter of chapos and GPLs that, under any other circumstance, would’ve physically and financially fatal but now seem all the merrier.

## Oh you didn’t make it? 

You know what awaits you? A second chance. The thing with GSoC is, if an attempt doesn’t kill you (which it rarely does), it makes you stronger. If you put in effort and fail, you still get contributions and community exposure in the org that you tried to get into, giving you a significant head start for your next try. 

So don’t be afraid to give it a second go, especially considering that the stipend is known to go up with each passing year. 

**\* Some conditions may have been exaggerated to inspire more people**
