const menu = document.querySelector('#menu-whole');
const cancel = document.querySelector('#cancel');
const menulist = document.querySelectorAll('.h-menu');
const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const mobileheader = document.querySelector('.mobile-header');

function display() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    main.style.display = 'none';
    hamburger.style.display = 'none';
    mobileheader.style.display = 'none';
  } else {
    menu.style.display = 'none';
    main.style.display = 'block';
    hamburger.style.display = 'block';
  }
}

function hide() {
  menu.style.display = 'none';
  mobileheader.style.display = 'flex';
  hamburger.style.display = 'block';
  main.style.display = 'block';
}

hamburger.addEventListener('click', display);
cancel.addEventListener('click', display);

for (let i = 0; i < menulist.length; i += 1) {
  menulist[i].addEventListener('click', hide);
}
