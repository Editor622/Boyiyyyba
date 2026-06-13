// Mobile nav toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

burger.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '68px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'var(--cream)';
  navLinks.style.padding = '16px 24px';
  navLinks.style.borderBottom = '1px solid var(--gray-300)';
  navLinks.style.gap = '1rem';
  if (!isOpen) navLinks.style.display = 'flex';
});

// Form submit handler
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => success.classList.add('hidden'), 5000);
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.program-card, .value-item, .testimonial-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
