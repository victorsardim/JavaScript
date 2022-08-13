// //aula 1 - uso do alet
// alert('hello world!!!');

// //diferença entre var const e let
// //var metodo mais antigo e não mais usado pois nao tem back-scope??
// var message = 'hello world';
// message = 'olá mundo';

// //const nao permite alteração após ser dado um determinado valor inicial
// const message = 'hello wold';
// message = 'olá mundo';

// // let permite alteração
// let message = 'hello wold';
// message = 'olá mundo';

// console.log(message);

//string

//uso do length
const message = 'Hello World!';
console.log(message.length);

//concaternar variaveis string
const fistName = 'Victor';
const lastName = 'Sardim';

console.log('Meu nome é ' + fistName + ' ' + lastName);
console.log(`Meu nome é ${fistName} ${lastName}`);

//toUperCase toLowerCase

console.log(`Meu nome é ${fistName.toUpperCase()} ${lastName.toLowerCase()}`);

//split
const names = 'nome1,nome2,nome3';
console.log(names.split(',')); //usa o caracter para quebrar
console.log(names.split('')); //sem nada, quebra cada letra

//number
const number = 5;
console.log(number);
console.log(number / 2);
console.log(number.toString()); //converte de numero para texto
console.log(typeof number); //mostra o tipo de variavel
console.log(typeof number.toString()); //converte de num para texto e mostra o tipo

//boleanos
false;
true;

console.log(2 == 3); //retorna false
console.log(2 == 2); //retorna true

//null & undefined
const x = null;
const y = undefined;
console.log(x);
console.log(y);

//listas
const list = [1, 2, 3, 4, 5];
console.log(list);

//objetos
const object = { name: 'victor' };
console.log(object);
