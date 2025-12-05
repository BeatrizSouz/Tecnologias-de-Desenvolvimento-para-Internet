export function showToast(message, duration = 2200) {
  const el = document.createElement('div');


  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.className = 'notificacao';
  el.textContent = message;

  document.body.appendChild(el);

  
  requestAnimationFrame(() => el.classList.add('visible'));

  setTimeout(() => {
    el.classList.remove('visible');

    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }, duration);
}
