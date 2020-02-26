---
layout: post
title:  "Why aren’t my commits showing in my Github contribution grid?"
date:   2020-02-24 01:00:00
categories: tips help
tags: Github
author: Jamie Pilgrim
comments: true
photo: "../images/github/github_profile.png"
---

<p><em>
There have been a few cases where I had been working on something, committed it, pushed it to master, and yet the ‘Contributions’ section on my profile wasn’t reflecting those commits. Even stranger, commits I did at work would show, but when I worked on personal project at home they would not show.
</em></p>
<br>

<figure>
  <img src="../images/github/github_contributions.png" alt="My personal contributions grid on Github. With a few gaps I couldn't explain until now!">
  <figcaption> My personal contributions grid on Github. With a few gaps I couldn't explain, ...until now!  </figcaption>
</figure>

<h2> The Solution: </h2>

<p>
There’s a whole list of potential reasons, <a href="https://help.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile">detailed here</a>, on what the issue could have been. The issue I was running into was that the email I had set on my local machine for git was different than the email I use for my Github account.
</p>

<p>
Use the following command, in your command line, to change the email on your local machine. Make sure it's the same as the email you use for you Github account.
</p>

<code>git config --global user.email youremail@email.com</code>
<br><br>

<p>That’s it!</p>

<p>
Now your commits, that have made their way to the master branch, should be reflected on your contributions chart!  If not, you have another issue that’s probably documented in link I gave above, <a href="https://help.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile">here it is again</a>.
</p>
