var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

let dataForStorage = {};

if (localStorage.getItem('feedback-form-state')) {
  dataForStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

  for (let key in dataForStorage) {
    form[key].value = dataForStorage[key];
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
