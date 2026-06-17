// Collapsible sections
  function toggleSection(header) {
    const section = header.closest('.section');
    const body = section.querySelector('.section-body');
    const isCollapsed = section.classList.contains('collapsed');
    if (isCollapsed) {
      section.classList.remove('collapsed');
      body.style.maxHeight = body.scrollHeight + 'px';
      setTimeout(() => { body.style.maxHeight = 'none'; }, 360);
    } else {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        section.classList.add('collapsed');
      });
    }
  }

  // Init max-heights
  document.querySelectorAll('.section-body').forEach(b => {
    b.style.maxHeight = 'none';
  });

  // Active nav tab on scroll
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.section[id]');
  const tabOffset = 130;

  function updateActiveTab() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - tabOffset) {
        current = sec.id;
      }
    });
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveTab, { passive: true });
