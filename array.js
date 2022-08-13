const names = ['felipe', 'joao', 'maria', 10, false];

const nomeSelected = names[2];
console.log(nomeSelected);

names.push('pedro');
console.log(names);

names.unshift('fernanda');
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names[2] = 'gustavo';
console.log(names);

const indexOfSelectedName = names.indexOf('gustavo');
console.log(indexOfSelectedName);

const sortedNames = names.sort();
console.log(sortedNames);

const tamanhoLista = names.length;
console.log(tamanhoLista);

const nameIsArray = Array.isArray(names);
console.log(nameIsArray);
