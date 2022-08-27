const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const errorMsg = document.querySelector('.msg');
const list = document.querySelector('.items');

//ao clicar no botao
//1 validar se tem algo preenchido
//se nao, mostrar msg de erro
//se sim, gravar o conteudo de nome e emai na lista abaixo do botao
submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  //limpar o list anterior
  list.innerHTML = '';
  //pegar os imputs
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  if (nameValue === '' || emailValue === '') {
    errorMsg.textContent = 'preencher formulário';
    errorMsg.classList = 'error';

    setTimeout(() => {
      errorMsg.textContent = '';
      errorMsg.classList = '';
    }, 3000);

    return;
  }
  //gravar os inputs no final do form

  //subir em uma array os valores dos campos imputados
  const inputArray = [nameValue];
  inputArray.push(emailValue);

  // criar um ul para receber os li
  let ul = document.createElement('ul');
  ul.classList = 'items';
  ul.innerHTML = '';
  //para cada li, colocar um imput
  for (i = 0; i < inputArray.length; i++) {
    let currentInput = inputArray[i];
    let liInput = document.createElement('li');
    liInput.textContent = currentInput;
    ul.appendChild(liInput);
  }

  //subir na list as lis carregadas
  list.appendChild(ul);

  //limpar
  nameInput.value = '';
  emailInput.value = '';
  return;
});
