//map
const numbers = [1, 2, 3, 4, 5];
const numberMult = 6;

const numbersMultipliedByNumber = numbers.map(function (number) {
  return number * numberMult;
});

console.log(numbersMultipliedByNumber);

//filter
//apenas numeros pares
const estoque = [8, 7, 3, 8, 2, 1, 3, 5, 4, 9];

const evenEstoque = estoque.filter(function (qtd) {
  //se dividir por 2 e retornar zero, é numero par
  return qtd % 2 === 0;
});

console.log(evenEstoque);

//reduce
//agrupar todos os elementos dentro de um unico elemento
//neste caso, vamos somar todos os valores

const sumOfEstoque = estoque.reduce(
  function (qtd, accumulator) {
    //para cada numero, será executado a função de acumulação
    return accumulator + qtd;
  },
  0 //como inicia o accumulator 0 se iniciar em 100, será 100+1o numoro+2o numero...
);

console.log(sumOfEstoque);
