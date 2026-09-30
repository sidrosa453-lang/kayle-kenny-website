/* SARL ETAHG: mobile navigation, services dropdown, header state, print. No dependencies. */
(function () {
  var d = document, root = d.documentElement;
  var header = d.querySelector('[data-header]');
  var toggle = d.querySelector('.nav-toggle');
  var nav = d.getElementById('site-nav');
  var sub = d.querySelector('.sub-toggle');
  var mq = window.matchMedia('(min-width: 1280px)');
  // Content behind the open mobile menu is made inert so focus cannot land on hidden elements.
  var behind = [d.querySelector('main'), d.querySelector('.site-footer')];

  function setMenu(open) {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', String(open));
    root.classList.toggle('nav-open', open);
    var label = toggle.querySelector('.sr-only');
    if (label) label.textContent = label.getAttribute(open ? 'data-close' : 'data-open');
    for (var i = 0; i < behind.length; i++) if (behind[i]) { if (open) behind[i].setAttribute('inert', ''); else behind[i].removeAttribute('inert'); }
  }
  function setSub(open) {
    if (!sub) return;
    sub.setAttribute('aria-expanded', String(open));
    sub.parentNode.classList.toggle('is-open', open);
    if (open) sub.parentNode.classList.remove('is-dismissed');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && !mq.matches) setMenu(false);
    });
  }
  if (sub) {
    var item = sub.parentNode;
    sub.addEventListener('click', function (e) {
      e.stopPropagation();
      setSub(sub.getAttribute('aria-expanded') !== 'true');
    });
    d.addEventListener('click', function (e) {
      if (mq.matches && !e.target.closest('.has-sub')) setSub(false);
    });
    item.addEventListener('focusout', function (e) {
      if (mq.matches && !item.contains(e.relatedTarget)) setSub(false);
    });
    // A hover-opened submenu can be dismissed with Escape until the pointer leaves it (WCAG 1.4.13).
    item.addEventListener('mouseleave', function () { item.classList.remove('is-dismissed'); });
  }
  d.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (sub && mq.matches && sub.parentNode.matches(':hover')) sub.parentNode.classList.add('is-dismissed');
    if (sub && sub.getAttribute('aria-expanded') === 'true') { setSub(false); sub.focus(); }
    else if (toggle && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  var onMq = function () { setMenu(false); setSub(false); };
  if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);

  if (header) {
    var ticking = false;
    var update = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); ticking = false; };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  var p = d.querySelectorAll('[data-print]');
  for (var i = 0; i < p.length; i++) p[i].addEventListener('click', function () { window.print(); });
})();
