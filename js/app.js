(function () {
  const sections = document.querySelectorAll('.section');
  const navButtons = document.querySelectorAll('[data-section]');
  const sidebar = document.getElementById('sidebar');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const backBtn = document.getElementById('back-btn');
  const totalSections = sections.length;

  let currentSection = 0;
  let navOpen = false;

  function updatePageIndicator() {
    navButtons.forEach((btn, index) => {
      const isActive = index === currentSection;
      btn.classList.toggle('nav-active', isActive);
      btn.classList.toggle('nav-inactive', !isActive);
      const num = btn.querySelector('.nav-num');
      if (num) {
        num.classList.toggle('nav-num-active', isActive);
        num.classList.toggle('nav-num-inactive', !isActive);
      }
      const title = btn.querySelector('.nav-title');
      if (title) {
        title.classList.toggle('text-white', isActive);
        title.classList.toggle('text-zinc-600', !isActive);
      }
    });

    sections.forEach((section, index) => {
      section.classList.toggle('hidden', index !== currentSection);
    });

    document.title = `${sections[currentSection].dataset.title} - SEO Training Manual - NOVAXWARE`;
    history.replaceState(null, '', `#section-${currentSection + 1}`);
  }

  function goToSection(index) {
    if (index < 0 || index >= totalSections) return;
    currentSection = index;
    updatePageIndicator();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth < 1024) {
      closeNav();
    }
  }

  function openNav() {
    navOpen = true;
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    navToggle.textContent = 'Hide Navigation';
  }

  function closeNav() {
    navOpen = false;
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('translate-x-0');
    navToggle.textContent = 'Show Navigation';
  }

  function toggleNav() {
    if (navOpen) closeNav();
    else openNav();
  }

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      goToSection(parseInt(btn.dataset.section, 10));
    });
  });

  navToggle.addEventListener('click', toggleNav);
  if (navClose) navClose.addEventListener('click', closeNav);

  backBtn.addEventListener('click', () => {
    if (currentSection > 0) goToSection(currentSection - 1);
    else window.history.back();
  });

  document.querySelectorAll('[data-next]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.next;
      if (action === 'next') goToSection(currentSection + 1);
      else if (action === 'stay') btn.textContent = 'Noted — re-read this section';
    });
  });

  const hash = window.location.hash.match(/section-(\d+)/);
  if (hash) {
    const idx = parseInt(hash[1], 10) - 1;
    if (idx >= 0 && idx < totalSections) currentSection = idx;
  }

  if (window.innerWidth >= 1024) openNav();
  updatePageIndicator();
})();
