//uma vaziável string vazia é false
const x = '';
console.log(!!x);

//uma variável zero é false
const y = 0;
console.log(!!y);

//uma variável nula é false
const z = null;
console.log(!!z);

//uma variável indefinida é false
const w = undefined;
console.log(!!w);

//uma lista vazia é true
const list = [];
console.log(!!list);

//um objeto vazio é true
const object = {};
console.log(!!object);

// check se uma lisa é vazia

if (list.length > 0) {
  console.log('não é vazia');
} else {
  console.log('é vazia');
}

//ou inverter a logica do true/false
console.log(!!list); //!! verifica se list (que é vazio) é verdadeiro ou falso - verdadeiro pq uma lista vazia é verdadeiro
console.log(!list); //! inverte o boleano - torna lista vazia como falso
console.log(!false); //! inverte o boleano - torna false em true
console.log(!true); //! inverte o boleano - torna true em false
