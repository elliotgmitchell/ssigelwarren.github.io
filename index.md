---
layout: default
title: Home
---

<div class="hero-section">
  <h1 class="name">Sophie Siegel-Warren</h1>
  <h2 class="profession">Dramaturg | Script Consultant | Researcher | Translator | Project Manager</h2>
</div>

<div class="carousel-container">
  <div class="carousel">
    <div class="carousel-item active">
      <img src="{{ site.baseurl }}/assets/images/productions/carousel1.png" alt="Production 1">
      <div class="carousel-caption">
        <h3>Production Title 1</h3>
        <p>Brief description or role</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl }}/assets/images/productions/carousel2.png" alt="Production 2">
      <div class="carousel-caption">
        <h3>Production Title 2</h3>
        <p>Brief description or role</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="{{ site.baseurl }}/assets/images/productions/carousel3.png" alt="Production 3">
      <div class="carousel-caption">
        <h3>Production Title 3</h3>
        <p>Brief description or role</p>
      </div>
    </div>
    <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
    <a class="next" onclick="changeSlide(1)">&#10095;</a>
  </div>
  <div class="carousel-indicators">
    <span class="indicator active" onclick="currentSlide(0)"></span>
    <span class="indicator" onclick="currentSlide(1)"></span>
    <span class="indicator" onclick="currentSlide(2)"></span>
  </div>
</div>

<!-- <section class="services">
  <h2>Services</h2>
  <div class="services-grid">
    <div class="service-item">
      <h3>Dramaturg</h3>
      <p>Providing context, research, and critical feedback throughout the production process.</p>
    </div>
    <div class="service-item">
      <h3>Script Consultant</h3>
      <p>Analyzing and improving scripts, focusing on structure, character development, and thematic elements.</p>
    </div>
    <div class="service-item">
      <h3>Researcher</h3>
      <p>Conducting thorough historical and contextual research to enhance authenticity and depth.</p>
    </div>
    <div class="service-item">
      <h3>Translator</h3>
      <p>Translating theatrical works while preserving cultural nuances and artistic intentions.</p>
    </div>
    <div class="service-item">
      <h3>Project Manager</h3>
      <p>Coordinating production elements, timelines, and communication between creative teams.</p>
    </div>
  </div>
</section> -->

<script src="{{ site.baseurl }}/assets/js/carousel.js"></script>