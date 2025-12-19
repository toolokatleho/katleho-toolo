// Navbar injection and handling
const navHTML = `
  <div class="container">
    <a href="index.html" class="logo">KST<span>.</span></a>
    <button class="mobile-toggle" aria-label="Toggle navigation">
      ☰
    </button>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="projects.html">Projects</a>
      <a href="contact.html">Contact</a>
    </div>
  </div>
`;

const footerHTML = `
  <div class="container">
    <div class="footer-content">
      <div>
        <h3>Katleho Samuel Toolo</h3>
        <p>Secure Systems & Intelligent Software Solutions.</p>
      </div>
      <div class="social-links">
        <a href="#" aria-label="GitHub"><i data-lucide="github"></i></a>
        <a href="https://www.linkedin.com/in/katleho-samuel-634240220" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
        <a href="#" aria-label="Email"><i data-lucide="mail"></i></a>
      </div>
    </div>
    <div style="text-align: center; font-size: 0.875rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 2rem;">
      &copy; ${new Date().getFullYear()} Katleho Samuel Toolo. All rights reserved.
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject Navbar
  const navElement = document.querySelector('.navbar');
  if (navElement) {
    navElement.innerHTML = navHTML;
    setActiveLink();
    initMobileMenu();
  }

  // Inject Footer
  const footerElement = document.querySelector('footer');
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
    // Initialize Lucide icons after injection
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Initialize Animations
  observeElements();
});

function setActiveLink() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    // Handle root path matching or exact match
    if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');
  
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.innerHTML = links.classList.contains('open') ? '✕' : '☰';
    });
  }
}

// Simple Intersection Observer for fade-in animations
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .skill-bar, h1, p').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}
