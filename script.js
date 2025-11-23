// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Nav toggle
  const nav = document.getElementById('nav');
  const btn = document.getElementById('nav-toggle');
  btn.addEventListener('click', () => nav.classList.toggle('active'));

  // Smooth scroll for anchor links
  document.querySelectorAll('nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav
      if(nav.classList.contains('active')) nav.classList.remove('active');
    });
  });

  // Typing effect
  const words = ['Web Developer','Software Developer','System Designer'];
  const typingEl = document.querySelector('.typing-text span');
  let idx = 0, charIndex = 0, deleting = false;
  function type(){
    const word = words[idx];
    if(!deleting){
      typingEl.textContent = word.slice(0, ++charIndex);
      if(charIndex === word.length){ deleting = true; setTimeout(type, 1200); return; }
    } else {
      typingEl.textContent = word.slice(0, --charIndex);
      if(charIndex === 0){ deleting = false; idx = (idx+1)%words.length; }
    }
    setTimeout(type, deleting ? 80 : 120);
  }
  if(typingEl) type();
});
