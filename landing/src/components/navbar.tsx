import { component$ } from '@builder.io/qwik';

export const NavBar = component$(() => {
  return (
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="nav-logo">
          <span class="logo-icon">h4</span>
          helpers4
        </a>
        <div class="nav-links">
          <a href="#libraries" class="nav-link">
            Libraries
          </a>
          <a href="https://github.com/helpers4" target="_blank" rel="noopener noreferrer" class="nav-link">
            GitHub
          </a>
          <a href="https://github.com/helpers4/helpers4.github.io" target="_blank" rel="noopener noreferrer" class="nav-link">
            Source
          </a>
        </div>
      </div>
    </nav>
  );
});
