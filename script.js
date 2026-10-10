document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close the menu once a link is tapped
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Menu tab filter ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      tabButtons.forEach((b) => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });

      menuCards.forEach((card) => {
        card.classList.toggle('hidden', card.dataset.category !== category);
      });
    });
  });

  /* ---------- Signup form ---------- */
  const form = document.getElementById('signup-form');
  const formMsg = document.getElementById('form-msg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email-input').value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (isValid) {
        formMsg.textContent = `Thanks — we'll send roast-day notices to ${email}.`;
        form.reset();
      } else {
        formMsg.textContent = 'That email doesn\'t look right — try again.';
      }
    });
  }

  /* ---------- Footer year ---------- */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});