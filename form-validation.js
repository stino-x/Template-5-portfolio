const form = document.querySelector('#form-desk');
const mobileForm = document.querySelector('#mobile-form');
const email = document.querySelector('#email-desk');
const mobileEmail = document.querySelector('#email-mobile');
const message = document.querySelector('#messageEmail');
const messageMobile = document.querySelector('#messageEmail-mobile');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');
// const formbutton = document.querySelector('#form-button');
// const formbuttondesktop = document.querySelector('#form-button-desk');

const formobject = {
  name: '',
  email: '',
  message: '',
};

function storeInput() {
  const stringobject = JSON.stringify(formobject);
  nameInput.value = formobject.name;
  emailInput.value = formobject.email;
  messageInput.value = formobject.message;
  localStorage.setItem('formobject', stringobject);
}

form.addEventListener('click', storeInput());
mobileForm.addEventListener('click', storeInput());

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

// const languagecontainer = document.queryselector('.languages');
//   projectsID.forEach((project) => {
//     languagecontainer.insertAdjacentHTML('beforeend',
//       ` <h2${project.name}</h2>
//         <ul class="H-R-J">
//             <li class="Html-css">${project.technologies[0]}</li>
//             <li class="Ruby">${project.technologies[1]}</li>
//             <li class="Javascript">${project.technologies[2]}</li>
//         </ul>
//         <a class="see-this-project-mobile" data-id="${project.id} href="#">
//             See this project
//             <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
//         </a>`);
//   });