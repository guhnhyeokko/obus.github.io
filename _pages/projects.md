---
layout: page
title: Projects
permalink: /projects/
description: Research projects and funding support
nav: true
nav_order: 3
display_categories: [work]
horizontal: false
---

<!-- pages/projects.md -->

<!-- Projects Section -->
<div class="projects">
<h2 class="category" style="text-align: left; border-bottom: 1px solid var(--global-divider-color); padding-bottom: 0.5rem;">Projects</h2>

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="row row-cols-1 row-cols-md-3">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
</div>

---

<!-- Support Section -->
<div class="projects">
<h2 class="category" style="text-align: left; border-bottom: 1px solid var(--global-divider-color); padding-bottom: 0.5rem;">Support</h2>

{% if site.support %}
  {% assign sorted_support = site.support | sort: "importance" %}
{% else %}
  {% assign sorted_support = "" | split: "" %}
{% endif %}

<div class="row row-cols-1 row-cols-md-3 g-4">
  {% for support in sorted_support %}
    {% include support.liquid %}
  {% endfor %}
</div>
</div>
