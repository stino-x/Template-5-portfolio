const form = document.querySelector('#form-desk');
const mobileForm = document.querySelector('#mobile-form');
const email = document.querySelector('#email-desk');
const mobileEmail = document.querySelector('#email-mobile');
const message = document.querySelector('#messageEmail');
const messageMobile = document.querySelector('#messageEmail-mobile');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');
const rawData = localStorage.getItem('cachedFormData');

// const formbutton = document.querySelector('#form-button');
// const formbuttondesktop = document.querySelector('#form-button-desk');

const formobject = {
  name: '',
  email: '',
  message: '',
};

if (rawData) {
  const formobject = JSON.parse(rawData);
  emailInput.value = formobject.email;
  nameInput.value = formobject.name;
  messageInput.value = formobject.message;
}

const dataStore = (event) => {
  const element = event.target;
  formobject[element.name] = element.value;
  localStorage.setItem('cachedFormData', JSON.stringify(formobject));
};
nameInput.addEventListener('change', dataStore);
emailInput.addEventListener('change', dataStore);
messageInput.addEventListener('change', dataStore);

function validateDesk() {
  const compare = email.value.toLowerCase();
  if (email.value === compare) {
    email.style.borderColor = 'inherit';
    message.innerText = '';
    return true;
  }
  email.style.borderColor = 'red';
  message.innerText = 'remove ALL Uppercase characters please';
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
  messageMobile.innerText = 'remove ALL Uppercase characters please';
  messageMobile.style.color = 'red';
  return false;
}

mobileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateMobile()) {
    mobileForm.submit();
  }
});
