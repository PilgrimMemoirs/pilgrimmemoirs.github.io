---
layout: page
title: Posts
permalink: /posts/
photo: "../images/selfies/IMG_2152.jpg"
---


 <ul class="post-list" id="posts">
    {% for post in site.posts %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <h4> {{ post.date | date: "%B %-d, %Y"  }} </h4>
      </li>
    {% endfor %}
  </ul>