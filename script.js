/* ═══════════════════════════════════════════
   iSalud Landing — Interactivity
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Smooth Scroll ───────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const pos = target.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  /* ── FAQ Accordion ───────────────────── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(el => el.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  /* ── Fade-in Observer ────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => obs.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Ticker Marquee ──────────────────── */
  const tickerTrack = document.getElementById('ticker-track');
  if (tickerTrack) {
    const items = [
      'Agenda online', 'Historias clínicas', 'Facturación DIAN',
      'RIPS automáticos', 'Consentimientos', 'Firma digital',
      'Reportes', 'Control de inventario', 'Múltiples sedes',
      'Telemedicina', 'Roles y permisos', 'Certificado digital'
    ];
    const icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    const html = items.map(t => `<div class="ticker-item">${icon} ${t}</div>`).join('');
    tickerTrack.innerHTML = html + html; // duplicate for seamless loop
  }

  /* ── Form Handling ───────────────────── */
  document.querySelectorAll('.lead-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      let valid = true;
      form.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) { input.style.borderColor = '#EF4444'; valid = false; }
        else { input.style.borderColor = ''; }
      });
      if (!valid) return;
      console.log('📩 Lead capturado:', data);
      const formFields = form.querySelector('.form-fields');
      const success = form.querySelector('.form-success');
      if (formFields && success) { formFields.style.display = 'none'; success.classList.add('show'); }
      const name = data.nombre || '';
      const type = data.tipo === 'ips' ? 'una IPS/Clínica' : 'un profesional independiente';
      const waLink = `https://wa.me/573236883323?text=${encodeURIComponent(`Hola, soy ${name}. Quiero solicitar una demo de iSalud para ${type}.`)}`;
      const waBtn = success?.querySelector('.wa-redirect');
      if (waBtn) waBtn.href = waLink;
    });
  });

  /* ── Dark Mode Toggle ────────────────── */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  if (localStorage.getItem('isalud-theme') === 'dark') htmlEl.setAttribute('data-theme', 'dark');

  themeToggle?.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    themeToggle.classList.add('spin');
    setTimeout(() => themeToggle.classList.remove('spin'), 500);
    if (isDark) { htmlEl.removeAttribute('data-theme'); localStorage.setItem('isalud-theme', 'light'); }
    else { htmlEl.setAttribute('data-theme', 'dark'); localStorage.setItem('isalud-theme', 'dark'); }
  });

});
