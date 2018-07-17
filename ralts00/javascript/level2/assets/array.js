//Array

let string = "text";
let number = 10;
let boolean = true;
const coche = "sturu";
let array = [1,2,3,4,5,6,7,8,9,10];
let multiType = [1, "dos", 3, true, 5, coche];
let multiArray = [1, "dos",["uno-uno, coche"], true, 5, coche]

console.log(multiArray[3]);

console.log(multiArray.length);

//Ultima posición

console.log(multiArray.length - 1);

let coches = ['tsuru'];

console.log(coches);

//Empujar - Push

coches.push('Jetta');

console.log(coches);

coches.push('Jetta');

coches.push('Otro');

console.log(coches);

//Shift

console.log('-----');

coches.shift();
console.log(coches);

//Slicing

console.log('-----');

coches.slice(2);
console.log(coches);


//Imprimiendo con For
console.log('-----');

for(let i = 0; i < coches.length; i++) {
  console.log(coches[i]);
}