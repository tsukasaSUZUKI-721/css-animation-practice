window.addEventListener('DOMContentLoaded', () => {
  const stalker = document.querySelector('.stalker');
  document.addEventListener('mousemove', (e) => {
    stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});