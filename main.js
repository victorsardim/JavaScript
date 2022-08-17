//logando a resposta da função

function sum(a, b) {
  console.log(a + b);
}

sum(2, 2);

//assinalando o retorno da função a uma variavel resposta e logando essa variável resposta

function sum2(a, b) {
  return a + b;
}

result = sum2(13, 43);

console.log(result);

//se algum parametro nao receber valor de entrada, pode ser definido um valor previamente estabelecido

function sum3(a = 10, b = 30) {
  return a + b;
}
result2 = sum3(undefined, 100);

console.log(result2);

function sum4(a = 10, b = 30) {
  return a + b;
}
result3 = sum4(100, undefined);

console.log(result3);

//arrow function

const sumArrow = (a, b) => {
  return a + b;
};
const resultArrow = sumArrow(2, 2);
console.log(resultArrow);

//arrow function mais simples ainda

const sumArrow2 = (a, b) => a + b;

const resultArrow2 = sumArrow2(2, 2);
console.log(resultArrow2);
