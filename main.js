//lista (array) de objetos
const toDos = [
  {
    id: 1,
    description: 'estudar',
    isCompleted: false,
  },
  {
    id: 2,
    description: 'ler',
    isCompleted: true,
  },
  {
    id: 3,
    description: 'treinar',
    isCompleted: true,
  },
];

console.log(toDos);

//usar o JSON para enviar para servidor

//para enviar a lista para o servidor, precisamos transformar a lista em string

const toDosJSON = JSON.stringify(toDos);
console.log(toDosJSON);

//para consumir dados de um servidor, precisamos transformar a string em lsita

const toDosList = JSON.parse(toDosJSON);
console.log(toDosList);
