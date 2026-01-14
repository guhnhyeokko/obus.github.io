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

<div class="row row-cols-1 row-cols-md-3 g-4">

  <!-- NRF Card -->
  <div class="col">
    <div class="card h-100">
      <img src="/assets/img/support/nrf.png" class="card-img-top p-3" alt="NRF" style="height: 150px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body">
        <h5 class="card-title">National Research Foundation of Korea (NRF)</h5>
        <ul class="list-unstyled">
          <li><strong>2024-2027</strong>: Sample Project Title 1</li>
          <li><strong>2022-2025</strong>: Sample Project Title 2</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- MSIT Card -->
  <div class="col">
    <div class="card h-100">
      <img src="/assets/img/support/msit.png" class="card-img-top p-3" alt="MSIT" style="height: 150px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body">
        <h5 class="card-title">Ministry of Science and ICT</h5>
        <ul class="list-unstyled">
          <li><strong>2023-2026</strong>: Sample Project Title 3</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- JNU Card -->
  <div class="col">
    <div class="card h-100">
      <img src="/assets/img/support/jnu.png" class="card-img-top p-3" alt="JNU" style="height: 150px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body">
        <h5 class="card-title">Jeju National University</h5>
        <ul class="list-unstyled">
          <li><strong>2022-2024</strong>: Sample Project Title 4</li>
          <li><strong>2021-2023</strong>: Sample Project Title 5</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Add more support cards here -->

</div>
</div>
