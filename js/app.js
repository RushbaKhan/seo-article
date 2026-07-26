(function () {
  const sections = document.querySelectorAll('.section');
  const navButtons = document.querySelectorAll('[data-section]');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const backBtn = document.getElementById('back-btn');
  const totalSections = sections.length;
  const desktopQuery = window.matchMedia('(min-width: 1024px)');

  let currentSection = 0;
  let navOpen = false;

  function isDesktop() {
    return desktopQuery.matches;
  }

  function updatePageIndicator() {
    navButtons.forEach((btn, index) => {
      const isActive = index === currentSection;
      btn.classList.toggle('nav-active', isActive);
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
      const meta = section.querySelector('.section-meta');
      if (meta) {
        meta.textContent = `PAGE ${index + 1} OF ${totalSections}`;
      }
    });

    document.title = `${sections[currentSection].dataset.title} - SEO Training Manual - ZADEYO`;
    history.replaceState(null, '', `#section-${currentSection + 1}`);
  }

  function goToSection(index) {
    if (index < 0 || index >= totalSections) return;
    currentSection = index;
    updatePageIndicator();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!isDesktop()) closeNav();
  }

  function setNavState(open) {
    navOpen = open;
    sidebar.classList.toggle('open', open);
    if (overlay) {
      overlay.classList.toggle('visible', open && !isDesktop());
      overlay.setAttribute('aria-hidden', open && !isDesktop() ? 'false' : 'true');
    }
    navToggle.textContent = open ? 'Hide Navigation' : 'Show Navigation';
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function openNav() {
    setNavState(true);
  }

  function closeNav() {
    setNavState(false);
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
  if (overlay) overlay.addEventListener('click', closeNav);

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

  desktopQuery.addEventListener('change', () => {
    if (isDesktop()) {
      openNav();
      if (overlay) overlay.classList.remove('visible');
    } else if (!navOpen) {
      closeNav();
    }
  });

  const hash = window.location.hash.match(/section-(\d+)/);
  if (hash) {
    const idx = parseInt(hash[1], 10) - 1;
    if (idx >= 0 && idx < totalSections) currentSection = idx;
  }

  sections.forEach((section, index) => {
    const title = section.querySelector('.section-title');
    if (title) {
      title.textContent = title.textContent.replace(': ', ' — ');
      if (!section.querySelector('.section-meta')) {
        const meta = document.createElement('p');
        meta.className = 'section-meta';
        meta.textContent = `PAGE ${index + 1} OF ${totalSections}`;
        section.insertBefore(meta, title);
      }
    }
  });

  if (isDesktop()) openNav();
  else closeNav();
  updatePageIndicator();
})();
