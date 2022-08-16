// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//listas e for

const cars = ['ferrari', 'tesla', 'mercedes'];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//lista e for of

for (car of cars) {
  console.log(car);
}

//lista e forEach

cars.forEach(function (car, index) {
  console.log(index);
  console.log(car);
});

//loop while

let index = 0;

while (index < 10) {
  console.log(index);
  // index = index + 1;
  // index += 1;
  //mesma coisa dos acima
  index++;
}

//foop for In

const person = {
  name: 'jane',
  age: 21,
};

for (property in person) {
  console.log(person[property]);
}
