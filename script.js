'use strict';

const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('sticky', window.scrollY > 100);
});

const menu = document.querySelector('#menu-icon');
const navMenu = document.querySelector('.nav_links');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navMenu.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navMenu.classList.remove('open');
};
