const form = document.querySelector('#form-desk');
const email = document.querySelector('#email-desk');
const message = document.querySelector('#messageEmail');

function validateDesk() {
  const compare = email.value.toLowerCase();
  if (email.value == compare) {
    email.style.borderColor = 'inherit';
    message.innerText = '';
    return true;
  } else {
    email.style.borderColor = 'red';
    message.innerText = 'remove Uppercase character please';
    message.style.color = 'red';
    return false;
  }
}

/*const but = document.querySelector('#but');

but.addEventListener('click', () => {
  console.log(validateDesk());
});*/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateDesk()) {
    form.submit();
  }
});