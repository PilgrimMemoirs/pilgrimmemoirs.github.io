---
layout: page
title: Topics
permalink: /topics/
---

<ul id="cat-list">
  {% for category in site.categories reversed %}
    <li class="category"><h2>{{ category | first | upcase}}</h2>
      <ul>
      {% for posts in category %}
        {% for post in posts %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
