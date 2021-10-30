var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
console.log(form.elements);

form.addEventListener('input', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const DataForStorage = {
        email: "",
        text: '',
    }
    // formData.forEach((email) => console.log(email))
    console.log(event.elements)
});