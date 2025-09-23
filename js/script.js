// main.js - interatividade leve

// Atualiza ano no footer
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // collapse mobile menu if open
      const bsCollapse = document.querySelector('.navbar-collapse');
      if(bsCollapse && bsCollapse.classList.contains('show')){
        new bootstrap.Collapse(bsCollapse).toggle();
      }
    });
  });

  // WhatsApp quick message example - customize if needed
  const whatsappBtn = document.getElementById('whatsappBtn');
  if(whatsappBtn){
    // prefill message (optional)
    const phone = '559199999999'; // substitua pelo número real sem sinais
    const text = encodeURIComponent('Olá Black Smoke Machine! Gostaria de informações sobre shows / merch.');
    whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;
  }
});

// main.js - interatividade leve

// Atualiza ano no footer
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // collapse mobile menu if open
      const bsCollapse = document.querySelector('.navbar-collapse');
      if(bsCollapse && bsCollapse.classList.contains('show')){
        new bootstrap.Collapse(bsCollapse).toggle();
      }
    });
  });

  // WhatsApp quick message example - customize if needed
  const whatsappBtn = document.getElementById('whatsappBtn');
  if(whatsappBtn){
    const phone = '559199999999'; // substitua pelo número real sem sinais
    const text = encodeURIComponent('Olá Black Smoke Machine! Gostaria de informações sobre shows / merch.');
    whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;
  }
});