// //selecionar pelo id

// const addUserText = document.getElementById('add-user');

// console.log(addUserText);

// //modificar o id selecionado
// addUserText.innerHTML = 'Adicionar Usuário!!!';

//selecionar pelo elemento, que pode ser um id

//quando for usar id no querySelector, precisa usar o #
const addUserText = document.querySelector('#add-user');

console.log(addUserText);

addUserText.textContent = 'Adicionadarrr Usuárioooo';

// selecionar um objeto dentro de uma classe

const myForm = document.querySelector('.container #my-form');
console.log(myForm);

//selecionar multiplos elementos
const allItens = document.querySelectorAll('.item');
console.log(allItens);
