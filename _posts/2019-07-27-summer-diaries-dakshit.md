---
layout: post
title: "Summer Diaries: Carnegie Mellon University"
image: "dakshit1.png"
tags: [wona]
author: "Dakshit Agrawal"
category: summer2019
excerpt: 'My attempt to summarize the mind-boggling journey I have had in the past year, from being in for the long haul while applying for research internships, finally landing one at the Machine Learning Department at Carnegie Mellon University via the SN Bose Scholarship, to having a fruitful and joyous summer in the States.'
---

My attempt to summarize the mind-boggling journey I have had in the past year, from being in for the long haul while applying for research internships, finally landing one at the Machine Learning Department at Carnegie Mellon University via the SN Bose Scholarship, to having a fruitful and joyous summer in the States.

## Scenario Before August 2018:

I started reading about AI and deep learning seriously during the summer after my first year in college.  Some research projects under professors at IIT-R during the following semester helped me develop an idea of how a research problem is formulated and approached.  With this experience, I was able to convince professors at ETS Montreal to be my advisors during the summer after my second year. We submitted our research work to the EmotiW 2018 challenge, and surprisingly, ranked 4th among all participants. The awesome benefit though? A paper published in ICMI 2018 as a result of our novel approach in the challenge. 

It’s that summer which turned around my internship plans.  How? Two things:

The experience during the summers helped me realize that research in Deep Learning was the primary thing I wanted to do, specifically I wanted to improve certain aspects for a better application to real-world scenarios.
Having a research paper made me believe that I should be getting a lot of opportunities to work in some of the big colleges (totally not true as I found out later).

## Landing that Internship:

The top 5 Department Rankers of CSE get a direct offer from Adobe Research, which is a pretty sweet deal given that you don’t have to go through nerve-wracking days and nights during the internship season giving tests and interviews (believe me, it takes its toll, unless you get an offer in the first week).  Most of the other on-campus internship profiles are software engineering based.  After consulting with seniors about their experiences, I just didn’t believe I would be able to do the work that I wanted to do and hence opted out of the internship season itself, banking on my previous summer research experience to land me an internship at a good research lab.  Little did I know that I was in for a long run of applications.<br>

A tip I got from my seniors was to start early in emailing professors regarding internship opportunities. So, from August to December, I kept on emailing professors at various labs, sending well-curated and specific emails, as well as applying to numerous research programs.  In January, I got an email that I had been “provisionally” shortlisted as an SN Bose Scholar, meaning I would get a scholarship if I found an advisor in a US university research lab.  Backing up a bit: the SN Bose scholarship was a two-stage process.  Firstly, around September, I was nominated by my department (only 2 from each department could apply to the program).  The research experience I had played a major role in the nomination.  Having a good CG definitely helps, but I believe it shouldn’t be a strong criterion if your research experience is great.  After getting nominated, I applied to the SN Bose program in October and was one of the 50 students selected out of the 1500 odd applicants in India. The SN Bose scholarship provides $2500 as scholarship money, flight tickets as well as reimbursement of the health insurance (a necessity in the US). In short, I now had the funding but needed a research lab to go to.  You would think that my summers would be sorted in a week, but it took another 2 months to finally find someone who agreed to have me over for the summers.  But it was sure worth the wait, since I got a research internship offer at the Machine Learning Department at CMU, the #1 ranked school for that department in the world.  There were many learnings from the 7-8 months of applying to various research labs of which some of the important ones I list down:

1. Apply to places that actually interest you, else you might waste your whole summer intern hoping you had gone somewhere else.

2. Be specific, to-the-point and polite in your emails, but don’t dwell too long in drafting one. A little blunt here, but if a professor is searching for an intern, they’ll show interest; if not, there won’t be a reply. It’s as simple as that.

3. Install Mailtracker to at least give you the satisfaction that your email has been read (or misery that you got rejected besides the prof reading it, half-full half-empty scenario).  However, make sure that you leave no evidence that you’re using it.  Professors do deem it as off-putting if they receive a mail with Mailtracker.

4. Don’t be hesitant or judgemental of applying to lower-ranked universities.  You need to get rid of the mentality that “ranking of college > research lab”. It works the other way around in research.

5. Just hang in there.  You’ll spend lots of hours sending emails.  You will hardly get a response. I am talking about 5-6 replies from 45-50 well-curated emails. Even most of those will be negative, but the prof was kind enough to reply.  Some people get lucky, and have their summer plans sorted by November.  Some don’t, and have their plans sorted out by May.  But if you persevere, you’ll get through. :)

## Work Experience:

![pic2](/images/posts/dakshit2.png){: style="width:80%;height:auto;"}

To start with, the US probably has the most stringent and longest visa process, and it takes nearly 2 months to get the J-1 visa.  Thankfully, I was able to get it in time and was in Pittsburgh by May 14.  Carnegie Mellon University is world-renowned in Computer Science, and its Machine Learning Department is ranked #1 in the world.  My advisor was Katerina Fragkiadaki, whose current work was primarily to find a good 3D scene representation for embodied agents to use, and using that representation on various computer vision and reinforcement learning tasks.  Her lab had found a viable way to learn 3D scene representations from multiple 2D images.  Why 3D? They gave a much better understanding of the scene, especially when some of the objects in question were occluded by others in 2D images.<br>

For Actor-Critic based algorithms of reinforcement learning, you need a large sample pool of steps (an action taken by an agent in the simulation) and rewards (score the agent gets for taking that action, the more the better).  These samples were being collected on the CPU via Mujoco (a standard simulation environment for RL), which is pretty slow.  Shifting the sampling process to the GPU would make things a heck lot faster.<br>
 
So, there I was shifting all of the agent step and reward calculations, as well as the 2D image inputs for generating the 3D representations, onto a fairly new simulator called Nvidia FleX, which ran solely on the GPU and whose only resources to refer to were the documentation and source code.  The work was way out of my comfort zone, having to deal with C++ code and reading through the source code of the inner workings of a simulator.  I did expect a much more deep learning centric work, but I trained just one neural network during the whole internship.  Most of the time, I was scavenging for solutions through the source code, and it wasn’t easy at all.  But working on a simulator gave me experience and confidence of being able to create a new environment in Nvidia FleX, and also a more general understanding of what RL algorithms require from simulators. <br>

The atmosphere of the place, however, was quite relaxed, with extremely flexible work hours.  People solely care about the work getting done by a certain deadline, although that was also flexible for me as I was working on something completely new.  The workplace is pretty open, with lots of areas for discussions where you can just write on the wall (and erase it afterwards :P). There are lounges where you can get coffee and free snacks, and sit around to chat with someone about almost anything, since there is such a large diversity of people in the department, as well as the college in general.  People respect your personal space, allowing you to work literally at any place. Just walking around the campus, you can see people sitting on the grass, benches or big chairs with their laptops and notebooks. 

## Getting Used to the Differences in Culture:

Staying alone in a foreign land is daunting, and to tell the truth, I was a bit anxious.  But I was fortunate to get an awesome roommate, who made my months in the States go by so quickly. My apartment was nearly 2 km from CMU.  Unlike in India where we can have maids, you’re off on your own to get everything done.  That meant I had to clean my apartment, do the laundry, wash the dishes, but most importantly, cook by myself.  I tried my hand at cooking for the first time. With time, we were able to make pretty decent food (definitely not like my mom, but surely better than the hostel messes).  Cooking was pretty fun, not to mention annoying people (which some of my friends would attest to :P) as well as shocking them (especially family members) via WhatsApp status updates. 


Before coming to the US, I was told that being a vegetarian would be difficult to get by.  It turns out there is a large Indian and Asian contingent at CMU (around 70-80% during the summer), and so, Indian and vegetarian options were available much more frequently than expected. Another nice feature of most of the regular food places was the option to customize or build your meal (like a Subway, but for Italian, Mexican, Indian, Burgers, and whatnot).

![pic3](/images/posts/dakshit3.png){: style="width:80%;height:auto;"}

The American culture is very different, with trust and openness very important virtues.  People thank the bus driver, apologize for obstructing your way, are open and blunt with their views.  The most shocking thing for me was paying with my credit card without any authentication, except for inserting the card, and a signature at some bigger places.  That’s the level of trust there.

## Sightseeing and Activities:

Pittsburgh is much cheaper compared to some of the other cities in the US, and your CMU ID card gives you access to all the sports facilities and library of CMU, and even free rides on the public transport.  The summers arrive pretty late in the US compared to India (around July), and it rains pretty spontaneously in Pittsburgh.  The weather is still pretty pleasant during May and June, getting a bit hot during July, although it’s nothing compared to the scorching 40 C back in India. There are many places to go around in Pittsburgh, and I never left an opportunity to spend my weekends in sightseeing along with my roommate.  There were some really memorable experiences, like the casino (coming back from -$1 to earn $70), go-karting at 60 kph, going on a sight-seeing cruise, frantically searching and figuring out clues to get out of an escape room just in time, watching a baseball game with enthusiastic home fans or riding up the Duquesne Incline to see the city of Pittsburgh from above at dusk.  But the most unique experience for me would have to be axe throwing.  You read that right. Literally, throw axes at targets (flashback to Jason Mamoa throwing axes with a beer cup in the other hand).  I got to admit, it was pretty scary at first, despite it being completely safe.  Slowly the nerves eased out and became pretty fun in the end.  If anyone of you have an opportunity to try it out, I recommend doing it. 


I was also fortunate to be able to visit Chicago, Washington DC, New York City, St. Louis, San Jose, San Francisco, and Los Angeles (I know, it’s a LOT of traveling for a 2-month internship).  But the best part of all of these places was the people I got to interact and connect with.  There was an orientation session held for SN Bose Scholars (and Khorana, a similar program) in Chicago, and that was where I got to interact with a lot of students from various colleges and disciplines in India.  You definitely won’t get a better chance to network with so many people, and will even find some people to accompany you for later trips. 

![pic4](/images/posts/dakshit4.png){: style="width:80%;height:auto;"}
  
## Summing Up

The major takeaway for me was that research isn’t always as sugar-coated and straight-forward as it was in my previous summer with ETS Montreal, that you have got to stumble and explore a lot before you make some progress, especially when you don’t know how to proceed.  Having clarity and a record of explored directions helps a lot in these situations.
But if you ask me now, if opting out of the internship season, if waiting for 8 months with my hope rising from each email notification just to see it crushed by a reject or unrelated matter, if I would go through it all again to experience what I did during the summers, I would say definitely, because hey,

1. interacting with so many people and making new friends
2. getting to know a new culture
3. sightseeing 
4. achieving a more complete sense of what research entails 
was worth every single moment.

So don’t be afraid to take that risk and go after what you want to do!  Internships are for exploring your options after college, and unless you don’t put yourself out of your comfort zone, you’ll be robbing yourself of that chance to find what motivates you and what your limits are.  Mind you, this doesn’t mean that you apply without any experience or work to show. :P

Cheers!





