// ===== CUSTOM CURSOR =====
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

(function animate() {
  cur.style.left  = mx - 5  + 'px';
  cur.style.top   = my - 5  + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 16 + 'px';
  ring.style.top  = ry - 16 + 'px';
  requestAnimationFrame(animate);
})();

document.querySelectorAll('a, button, .skill-cat, .project-card, .intern-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.transform   = 'scale(2.2)';
    ring.style.opacity    = '0.2';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.transform   = 'scale(1)';
    ring.style.opacity    = '0.4';
  });
});


// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(
        () => e.target.classList.add('visible'),
        +e.target.dataset.d || 0
      );
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.skill-cat, .intern-card, .project-card, .edu-item, .cert-item, .achieve-item'
).forEach((el, i) => {
  el.dataset.d = (i % 4) * 90;
  observer.observe(el);
});


// ===== ANIMATED COUNTERS =====
function count(el, target, decimals, duration) {
  let current = 0;
  const step  = target / (duration / 16);

  (function tick() {
    current = Math.min(current + step, target);
    el.textContent = current.toFixed(decimals);
    if (current < target) requestAnimationFrame(tick);
  })();
}

setTimeout(() => {
  count(document.getElementById('cgpaCounter'),   7.60, 2, 1800);
  count(document.getElementById('internCounter'), 3,    0,  900);
  count(document.getElementById('certCounter'),   7,    0, 1100);
}, 1400);
