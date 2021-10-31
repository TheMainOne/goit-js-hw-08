var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');
let dataForStorage = {};

if (localStorage.getItem('feedback-form-state')) {
  dataForStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

  for (let i in dataForStorage) {
      form[i].value = dataForStorage[i];
  }
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const formData = new FormData(form);
    
    formData.forEach((a, b) => (dataForStorage[b] = a));
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForStorage));
}

function onFormSubmit(event) {
    event.preventDefault();
  form.reset();

  console.log(dataForStorage);

  localValue = {};

  localStorage.removeItem('feedback-form-state');
}
