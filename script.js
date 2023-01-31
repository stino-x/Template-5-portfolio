const menu = document.querySelector('#menu-whole');
const x = document.querySelector('#x');
const smallMen = document.querySelectorAll('.h-menu');
const main = document.querySelector('main');
const hamber = document.querySelector('#hamber');

function display() {
  if(menu.style.display === 'none') {
    menu.style.display = 'block';
    main.style.display = 'none';
    hamber.style.display = 'none';
  }else {
    menu.style.display = 'none';
    main.style.display = 'block';
    hamber.style.display = 'block';
  }
}

function hide() {
  menu.style.display = 'none';
  
  hamber.style.display = 'block';
  main.style.display = 'block';
}

hamber.addEventListener('click', display);
x.addEventListener('click', display);

for (let i = 0; i < smallMen.length; i += 1) {
  smallMen[i].addEventListener('click', hide);
}
