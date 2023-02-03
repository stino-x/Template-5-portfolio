// const { messages } = require("stylelint/lib/rules/alpha-value-notation");

const menu = document.querySelector('#menu-whole');
const cancel = document.querySelector('#cancel');
const menulist = document.querySelectorAll('.h-menu');
const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const mobileheader = document.querySelector('.mobile-header');
const form = document.querySelector('.form');
const emailInputArea = document.querySelectorAll('.email');
const error = document.querySelector('#error-message');
const nameInputArea = document.querySelectorAll('.name');
const messageInputArea = document.querySelectorAll('.message');

// const formbutton = document.querySelector('.Start-collab-2');

const formObject = {
  name: '',
};

form.addEventListener('submit', (e) => {
  const message = [];
  const emailInput = emailInputArea.value;
  const rightEmail = emailInputArea.value.toLowercase();
  if (emailInput !== rightEmail) {
    message.push('invalid email input');
  }
  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(',');
  }
});

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
cancel.addEventListener('click', hide);

for (let i = 0; i < menulist.length; i += 1) {
  menulist[i].addEventListener('click', hide);
}
