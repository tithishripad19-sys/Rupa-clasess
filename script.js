// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form -> sends message via WhatsApp (no backend needed)
const RUPA_WHATSAPP_NUMBER = '917700467778'; // country code + number, no + or spaces

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const child = document.getElementById('child').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  let text = `Hello Rupa Classes, I'd like to enquire.\n`;
  text += `Parent's Name: ${name}\n`;
  if (child) text += `Child's Name: ${child}\n`;
  text += `Phone: ${phone}\n`;
  if (message) text += `Message: ${message}`;

  const url = `https://wa.me/${RUPA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});
