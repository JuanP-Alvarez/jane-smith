const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const checkbox = document.querySelector('input[name=theme]');
const logo = document.querySelector('.logo-img');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

const setTransition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 3000);
};

checkbox.addEventListener('change', function () {
  if (this.checked) {
    setTransition();
    document.documentElement.setAttribute('data-theme', 'dark');
    logo.setAttribute('src', '/img/devjane-white.png');
  } else {
    setTransition();
    document.documentElement.setAttribute('data-theme', 'light');
    logo.setAttribute('src', '/img/devjane-black.png');
  }
});
