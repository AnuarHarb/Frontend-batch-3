'use strict';

// Tipos de datos
let string = "text";
let number = 10;
let boolean = true;
let array = [1,2,"tres",[4, 4.1]];

function securePassword(word) {
  word = word.toLowerCase();
  let newWord = "";
  for(let i = 0; i < word.length; i++){
    if(word[i] == "a") {
      newWord += 4;
    } else if(word[i] == "s") {
      newWord += 5;
    } else if(word[i] == "i") {
      newWord += 1;
    } else if(word[i] == "e") {
      newWord += 3;
    } else if(word[i] == "o") {
      newWord += 0;
    } else {
      newWord += word[i];
    }
  }
  console.log(newWord);
}

function securePasswordMin(word){
  word = word.replace(/a/gi, '4');
  word = word.replace(/e/gi, '3');
  word = word.replace(/i/gi, '1');
  word = word.replace(/s/gi, '5');
  word = word.replace(/o/gi, '0');
  console.log(word);
}

// Reto para ganar un Sticker!
// Averiguar si es un palindromo
// "Anita lava la tina"
