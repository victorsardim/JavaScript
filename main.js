const person = {
  firstName: 'Victor',
  lastName: 'Sardim',
  age: 36,
  hobbies: ['f1', 'nfl', 'futebol', 'games'],
};

//acessando valores das propriedades do objeto
//const firstName = person.firstName;
//const lastName = person.lastName;
//console.log(firstName + ' ' + lastName + ' ' + person.age);

//console.log(person.hobbies[3]);

//Destructuring

//const { firstName: primeiroNome, lastName, age, hobbies } = person;

// console.log(primeiroNome);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);

//inserindo novas propriedades dentro de um objeto
person.pet = 'Bruce';
console.log(person);

//inserindo objeto dentro de um objeto
person.pet = {
  namePet: 'Bruce',
  agePet: '7',
};
console.log(person);
console.log(person.pet.agePet);

const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,

  pet: { namePet: nomeDoPet, agePet: idadePet },
} = person;

console.log(idadePet);
console.log(nomeDoPet);

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

console.log(toDos[2].description);
