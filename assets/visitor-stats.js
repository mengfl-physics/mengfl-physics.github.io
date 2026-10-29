/* Busuanzi site totals. Only the public site is counted, never local previews. */
(() => {
  'use strict';
  const liveHost = 'mengfl-physics.github.io';
  const panel = document.querySelector('.visitor-stats');
  const status = document.querySelector('.visitor-stats-status');
  const setState = (state, message) => {
    if (panel) panel.dataset.state = state;
    if (status) status.textContent = message;
  };

  if (!/^https?:$/.test(window.location.protocol) || window.location.hostname !== liveHost) {
    setState('preview', 'Statistics are available on the live website.');
    return;
  }
  if (document.getElementById('busuanzi-script')) return;

  let observer;
  let timeout;
  const refresh = () => {
    const values = ['busuanzi_value_site_pv', 'busuanzi_value_site_uv']
      .map(id => document.getElementById(id));
    if (values.every(node => node && /^\d[\d,]*$/.test(node.textContent.trim()))) {
      if (observer) observer.disconnect();
      window.clearTimeout(timeout);
      setState('ready', '');
    }
  };

  if (panel) {
    setState('loading', 'Loading statistics…');
    observer = new MutationObserver(refresh);
    observer.observe(panel, { childList: true, subtree: true, characterData: true });
    timeout = window.setTimeout(() => {
      setState('unavailable', 'Statistics are temporarily unavailable.');
    }, 12000);
  }

  const script = document.createElement('script');
  script.id = 'busuanzi-script';
  script.async = true;
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.onerror = () => {
    if (observer) observer.disconnect();
    window.clearTimeout(timeout);
    setState('unavailable', 'Statistics are temporarily unavailable.');
  };
  document.head.appendChild(script);
})();
