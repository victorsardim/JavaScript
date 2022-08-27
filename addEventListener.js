// const submitButton = document.querySelector('#submit-button');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
//console.log(submitButton);

// submitButton.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('clicked!');
//   const valueName = nameInput.value;
//   console.log(valueName);
//   const valueEmail = emailInput.value;
//   console.log(valueEmail);
// });

// nameInput.addEventListener('change', function (e) {
//   console.log(e.target.value);
// });

// emailInput.addEventListener('change', function (e) {
//   console.log(e.target.value);
// });
const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector('#my-form');
const body = document.querySelector('body');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const listSelected = document.querySelector('.items');
console.log(listSelected);

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  const valueName = nameInput.value;
  const valueEmail = emailInput.value;

  if (valueName === '' || valueEmail === '') {
    return alert('preencha o formulário');
  }
  myForm.style.background = 'green';
  body.style.background = 'blue';

  listSelected.children[0].textContent = valueName;
  listSelected.children[1].textContent = valueEmail;
});
