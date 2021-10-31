var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');
const dataForStorage = {
    email: '',
    text:'',
};

form.addEventListener('submit', () => {
    localStorage.removeItem('feedback-form-state');
});

form.addEventListener('input', throttle((event) => {
    event.preventDefault();

    if (event.target.name === 'email') {
        dataForStorage.email = event.target.value;
    } else {
        dataForStorage.text = event.target.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(dataForStorage));
}, 500));


if (localStorage.getItem('feedback-form-state')) {
    const dataForOutput = JSON.parse(localStorage.getItem('feedback-form-state'));
    textArea.textContent = dataForOutput.text;
    input.value = dataForOutput.email;
}
