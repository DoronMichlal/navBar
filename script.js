const list = document.querySelector('.nav-items');
const hamburgerBtn = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', () => {
  list.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
});
