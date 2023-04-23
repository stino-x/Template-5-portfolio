const form = document.querySelector('#form-desk');
const mobileForm = document.querySelector('#mobile-form');
const email = document.querySelector('#email-desk');
const mobileEmail = document.querySelector('#email-mobile');
const message = document.querySelector('#messageEmail');
const messageMobile = document.querySelector('#messageEmail-mobile');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');
const savedData = JSON.parse(localStorage.getItem('formData')) || {};
const savedDataDesk = JSON.parse(localStorage.getItem('formDataDesk')) || {};
const emailDesk = document.querySelector('#email-desk');
const nameDesk = document.querySelector('#nameDesktop');
const textareaDesk = document.querySelector('#textareaDesktop');
if (savedData) {
  nameInput.value = savedData.name;
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

if (savedDataDesk) {
  nameDesk.value = savedData.name;
  emailDesk.value = savedData.email;
  textareaDesk.value = savedData.message;
}

const saveData = () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

const saveDataDesk = () => {
  const formDataDesk = {
    name: nameDesk.value,
    email: emailDesk.value,
    message: textareaDesk.value,
  };
  localStorage.setItem('formData', JSON.stringify(formDataDesk));
};

nameInput.addEventListener('input', saveData);
emailInput.addEventListener('input', saveData);
messageInput.addEventListener('input', saveData);
nameDesk.addEventListener('input', saveDataDesk);
emailDesk.addEventListener('input', saveDataDesk);
textareaDesk.addEventListener('input', saveDataDesk);

function validateDesk() {
  const compare = email.value.toLowerCase();
  if (email.value === compare) {
    email.style.borderColor = 'inherit';
    message.innerText = '';
    return true;
  }
  email.style.borderColor = 'red';
  message.innerText = 'Emails cannot take CAPITAL Letters submit valid email';
  message.style.color = 'red';
  return false;
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateDesk()) {
    form.submit();
  }
});

function validateMobile() {
  const compare = mobileEmail.value.toLowerCase();
  if (mobileEmail.value === compare) {
    mobileEmail.style.borderColor = 'inherit';
    messageMobile.innerText = '';
    return true;
  }
  mobileEmail.style.borderColor = 'red';
  messageMobile.innerText = 'Emails cannot take CAPITAL Letters submit valid email';
  messageMobile.style.color = 'red';
  return false;
}

mobileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateMobile()) {
    mobileForm.submit();
  }
});
