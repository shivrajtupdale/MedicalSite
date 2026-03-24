// Shared nav + footer injected into every page
// Usage: <script src="components.js"></script> at top of <body>

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? 'class="active"' : '';
  }

  const topBar = `
  <div class="top-bar">
    <span><i class="fas fa-map-marker-alt"></i> 123 Wellness Ave, New York, NY 10001</span>
    <span><i class="fas fa-clock"></i> Mon–Fri 9am–7pm &nbsp;|&nbsp; Sat 10am–5pm</span>
  </div>`;

  const nav = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="logo">
        <span class="logo-icon"><i class="fas fa-plus-circle"></i></span>
        <div class="logo-text">
          <span class="logo-main">HealthPoint</span>
          <span class="logo-sub">Pharmacy &amp; Wellness</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="services.html" ${isActive('services.html')}>Services</a></li>
        <li><a href="about.html" ${isActive('about.html')}>About</a></li>
        <li><a href="membership.html" ${isActive('membership.html')}>Membership</a></li>
        <li><a href="rx-forms.html" ${isActive('rx-forms.html')}>Rx Forms</a></li>
        <li><a href="contact.html" ${isActive('contact.html')}>Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="rx-forms.html" class="btn btn-outline">Transfer Rx</a>
        <a href="tel:5165051550" class="btn btn-primary"><i class="fas fa-phone"></i> (516) 505-1550</a>
      </div>
      <button class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="services.html">Services</a>
      <a href="about.html">About</a>
      <a href="membership.html">Membership</a>
      <a href="rx-forms.html">Rx Forms</a>
      <a href="contact.html">Contact</a>
      <a href="rx-forms.html" class="btn btn-primary">Transfer Rx</a>
    </div>
  </nav>`;

  const footer = `
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-brand">
        <a href="index.html" class="logo logo-white">
          <span class="logo-icon"><i class="fas fa-plus-circle"></i></span>
          <div class="logo-text">
            <span class="logo-main">HealthPoint</span>
            <span class="logo-sub">Pharmacy &amp; Wellness</span>
          </div>
        </a>
        <p>Your trusted community pharmacy, dedicated to personalized care and your overall wellness.</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html">Prescriptions</a></li>
          <li><a href="services.html">Vitamins &amp; Supplements</a></li>
          <li><a href="services.html">Blister Packing</a></li>
          <li><a href="services.html">Consultations</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="membership.html">Membership</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="rx-forms.html">Transfer Rx</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Hours</h4>
        <ul class="hours-list">
          <li><span>Mon – Fri</span><span>9am – 7pm</span></li>
          <li><span>Saturday</span><span>10am – 5pm</span></li>
          <li><span>Sunday</span><span>Closed</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 HealthPoint Pharmacy &amp; Wellness. All rights reserved.</p>
    </div>
  </footer>`;

  // Inject top bar + nav before body content
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('afterbegin', topBar);

  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', footer);

  // Init hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  // Sticky shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Scroll-reveal
  setTimeout(() => {
    const fadeEls = document.querySelectorAll(
      '.service-card, .plan-card, .testimonial-card, .about-content, .about-image, ' +
      '.contact-info, .contact-form-wrap, .section-header, .trust-item, ' +
      '.team-card, .value-card, .faq-item, .form-section, .page-hero-content, .stat-item'
    );
    fadeEls.forEach(el => el.classList.add('fade-up'));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = [...entry.target.parentElement.children];
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('visible'), idx * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => obs.observe(el));
  }, 50);
})();
