'use strict'
//Arrays
const coche = 'tsuru';
let Array = [1,2,3,4,5,6,7,8,9,10];
let Array2 = [1, 'dos', 3, true, 5, 'seis'];
let Array3 = [1,'dos', ['uno-uno', coche], true, 5, coche];//tiene 6 elementos 
console.log(Array[3]);
console.log(Array.length);
console.log(Array[Array.length - 1]);

//Pushing 
let coches = ['tsuru'];
coches.push('Jetta');// el push agrega el nuevo elemento a la lista 

console.log(coches);

//Slice corta el array 
let fruits = ['apple', 'banana', 'mango'];
fruits.slice(1);

let yellowFruist = fruits.slice(1);
console.log(yellowFruist); 
console.log(fruits);
console.log(fruits[0] = 'manzana');

///
let Array6 = [1,'dos', ['uno-uno', coche], true, 5, coche];//tiene 6 elementos 

for(let i = 0; i < Array6.length; i ++)
{

	console.log(Array6[i]);
}
///

let prueba = 'coche';
console.log(prueba.length);

console.log(prueba[3]);

let prueba2 = 'super coche'; 
console.log(prueba2[5]);

console.log(prueba2.split(" "));// Los separa y elimina el caracter
///

let coche2 = 'pruebas';
console.log(coche.toUpperCase());

///
function encriptPassword(word)
{
	let newPassword = word.toLowerCase();
	//Expresion regular
	// /a/g  que busque todas globalmente
	// /a/gi que busque globales y mayusculas
		newPassword = newPassword.replace(/s/g, 5); // solo remplaza el primero que encuentre
		newPassword = newPassword.replace(/i/g, 1);
		newPassword = newPassword.replace(/e/g, 3);
		newPassword = newPassword.replace(/o/g, 0);
		newPassword = newPassword.replace(/a/, 4);
   console.log('El password Nuevo es: ', newPassword);

}
/// 

function securePassword(word)
{
	word = word.toLowerCase();
	let newWord = '';
	for(let i = 0; i < word.length; i++)
	{
		if(word[i] == 'a' || word[i] == 'A'){
			newWord += 4;
		} else if(word[i] == 's'){
			newWord += 5;
		} else if(word[i] == 'i'){
			newWord += 1;
        } else if(word[i] == 'e'){
			newWord += 3;
		} else if(word[i] == 'o'){
			newWord += 0;
		} else {
			newWord += word[i];
		}
		console.log(newWord);
	}
}
encriptPassword('Holaa mundo');
securePassword('Hola mundo');


///Palindromo 

function Palindrome(word)
{

}