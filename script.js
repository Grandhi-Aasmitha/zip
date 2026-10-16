const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const toTop = document.getElementById('toTop');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

function onScroll(){
  if (header) header.classList.toggle('scrolled', window.scrollY > 35);
  if (toTop) toTop.classList.toggle('show', window.scrollY > 520);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Front-end only for now. No backend/API is connected.
if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks! The enquiry form is currently frontend-only. Backend or WhatsApp booking can be connected later.';
  });
}
