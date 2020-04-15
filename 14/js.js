/*
let age = 100;
let age2 = 100;
console.log(age, age2);
age = 50;
console.log(age, age2);



const players = ["Adi", "Seba", "Łysy", "Lewy", "Kowal"];
const team = players;

console.log(players, team);
team[3] = "Kudłaty"
console.log(players, team);

team2 = players.slice();
team3 = [...players]
*/

const person = {
  name: "Adi P",
  age: 90
}

const person2 = person;
person2.name = "Adxion"

console.log(person.name);

const person3 = Object.assign({}, person, {number : 25})
console.log(person3);
console.log(person);


const person4 = {...person3};
console.log(person4);
