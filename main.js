//
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  speak() {
    console.log('hello world!');
  }

  static speak2() {
    console.log('hello world2!');
  }
}

const person = new Person('victor', 'sardim', 36);

console.log(person);

person.getFullName();
person.speak();
Person.speak2();

//heranças
class Animal {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  speak() {
    console.log(`${this.name} made some noise`);
  }

  sizeTipe() {
    console.log(`${this.name} is ${this.size} size`);
  }
}

const animal = new Animal('Leao', 'Medium');

animal.speak();
animal.sizeTipe();

class Dog extends Animal {
  constructor(name, size) {
    super(name, size);
  }

  sizeTipe() {
    console.log(`${this.name} is ${this.size} pet`);
  }
}

const dog = new Dog('Bruce', 'Medium');
dog.speak(); //mantendo a classe herança
dog.sizeTipe(); //sobrescrevendo a classe herança
