const emailInputAreaDesk = document.querySelector('#email-desk');
const message = [];
const form = document.querySelector('#form-desk');
const error = document.querySelector('#error-message');
const emailValidate = (e) => {
  const emailInput = emailInputAreaDesk.value;
  const rightEmail = emailInputAreaDesk.value.toLowercase();
  console.log(emailInput);
  if (emailInput !== rightEmail) {
    message.push('invalid email input, please use ONLY lowercase letters.');
  }
  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(',');
  }
};
form.addEventListener('submit', emailValidate);