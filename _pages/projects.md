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
    <div class="card h-100 shadow-sm">
      <img src="/assets/img/support/nrf.jpg" class="card-img-top p-3" alt="NRF" style="height: 150px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold mb-3" style="font-size: clamp(0.75rem, 2vw, 1rem); line-height: 1.3;">National Research Foundation of Korea (NRF)</h5>
        <ul class="list-unstyled mb-0" style="font-size: clamp(0.75rem, 1.8vw, 0.9rem); line-height: 1.8; color: #555;">
          <li class="mb-2"><strong style="color: #333;">2024-2027:</strong> Sample Project Title 1</li>
          <li class="mb-2"><strong style="color: #333;">2022-2025:</strong> Sample Project Title 2</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- MSIT Card -->
  <div class="col">
    <div class="card h-100 shadow-sm">
      <img src="/assets/img/support/fusf.png" class="card-img-top p-3" alt="MSIT" style="height: 150px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold mb-3" style="font-size: clamp(0.75rem, 2vw, 1rem); line-height: 1.3;">Ministry of Science and ICT</h5>
        <ul class="list-unstyled mb-0" style="font-size: clamp(0.75rem, 1.8vw, 0.9rem); line-height: 1.8; color: #555;">
          <li class="mb-2"><strong style="color: #333;">2023-2026:</strong> Sample Project Title 3</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- JNU Card -->
  <div class="col">
    <div class="card h-100 shadow-sm">
      <img src="/assets/img/support/erc.png" class="card-img-top p-3" alt="JNU" style="height: 150px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold mb-3" style="font-size: clamp(0.75rem, 2vw, 1rem); line-height: 1.3;">Jeju National University</h5>
        <ul class="list-unstyled mb-0" style="font-size: clamp(0.75rem, 1.8vw, 0.9rem); line-height: 1.8; color: #555;">
          <li class="mb-2"><strong style="color: #333;">2022-2024:</strong> Sample Project Title 4</li>
          <li class="mb-2"><strong style="color: #333;">2021-2023:</strong> Sample Project Title 5</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Add more support cards here -->

</div>
</div>
