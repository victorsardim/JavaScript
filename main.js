//if else

const sum = 1 + 1;

if (sum === 2) {
  //condição verdadeira
  console.log('sum is 2!');
} else {
  //condição falsa
  console.log('sum is not 2!');
}

//else if

const sum2 = 1 + 2;

if (sum2 === 2) {
  //condição verdadeira
  console.log('sum is 2!');
} else if (sum2 === 3) {
  //verdadeira
  console.log('sum is 3!');
} else {
  //condição falsa
  console.log('sum is not 2!');
}

//and &&
//or ||

const sum3 = 2 + 2;
const sum4 = 3 + 10;

if (sum3 === 4 && sum4 === 6) {
  console.log('sum3 is 4 and sum4 is 6!');
} else {
  console.log('sum3 is not 4 and sum4 is not 6!');
}

if (sum3 === 4 || sum4 === 6) {
  console.log('sum3 is 4 or sum4 is 6!');
} else {
  console.log('sum3 is not 4 or sum4 is not 6!');
}

//terary operator
let number; //pode declarar variável sem determinar o valor dela incialmente
const sum5 = 1 + 1;

if (sum5 === 2) {
  number = 2;
} else {
  number = 4;
}
console.log(number);

//mesma resposta do acima - mais limpo
let number2 = sum5 === 2 ? 2 : 4;
console.log(number2);

//switch
const car = 'Ferrari';

switch (car) {
  case 'Mercedes':
    console.log('Mercedes is builtiful ');
    break;
  case 'Ferrari':
    console.log('Ferrari is red ');
    break;
  case 'Tesla':
    console.log('Tesla is Smart ');
    break;
}
