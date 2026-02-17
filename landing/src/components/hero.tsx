import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
  return (
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Modular Utilities
          <br />
          <span class="gradient-text">for Modern Development</span>
        </h1>
        <p class="hero-subtitle">
          A collection of open-source libraries built for TypeScript, DevContainers, and GitHub Actions.
          Choose what you need. Use only what you use.
        </p>
        <div class="hero-cta">
          <a href="#libraries" class="btn btn-primary">
            Explore Libraries →
          </a>
          <a href="https://github.com/helpers4" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            View on GitHub
          </a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat-box">
          <div class="stat-number">3</div>
          <div class="stat-label">Libraries</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">12+</div>
          <div class="stat-label">Categories</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">∞</div>
          <div class="stat-label">Tree-shakable</div>
        </div>
      </div>
    </section>
  );
});
