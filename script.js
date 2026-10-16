const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const toTop = document.getElementById('toTop');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterNote = document.getElementById('newsletterNote');

function onScroll(){
  header.classList.toggle('scrolled', window.scrollY > 35);
  toTop.classList.toggle('show', window.scrollY > 500);
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Front-end only for now. No backend/API is connected.
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Form is ready. Backend connection can be added later.';
});
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterNote.textContent = 'Newsletter backend can be connected later.';
});
