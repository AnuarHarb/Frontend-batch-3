'use strict';

function palindrome(word) {
  let min = word.replace(/\s/g, '');
  let minRealPosition = min.length - 1;
  let reverse = '';

  min = min.toLowerCase();

  if(min[0] != min[minRealPosition]) {
    console.log('No es un palíndromo');
  } else {
    for(let i = minRealPosition; i >= 0; i--){
      reverse += min[i];
    }
    if(min == reverse) {
      console.log('Es un palíndormo');
    } else {
      console.log('No es un palíndromo');
    }
  }
}

//palindrome('anita lava la tina');


function encryptorMassive(word) {
  let newWord = '';
  word = word.toLowerCase();
  for(let i = 0; i < word.length; i++) {
    if(word[i] == 'a') {
      newWord += 4;
    } else if(word[i] == 's') {
      newWord += 5;
    } else if(word[i] == 'i') {
      newWord += 1;
    } else if(word[i] == 'e') {
      newWord += 3;
    } else if(word[i] == 'o') {
      newWord += 0;
    } else {
      newWord += word[i];
    }
  }
  console.log(newWord);
}

// encryptorMassive('jonathan hola mundo MUNDO');

function encryptorMin(word) {
  word = word.replace(/a/gi, '4');
  word = word.replace(/e/gi, '3');
  word = word.replace(/i/gi, '1');
  word = word.replace(/s/gi, '5');
  word = word.replace(/o/gi, '0');
  console.log(word);
}

//encryptorMin('MaArio kart');

function fibonacci(number) {
  let sequence = [];
  let num1 = 0;
  let num2 = 1;

  for(let i = 0; i <= number - 1; i++) {
    sequence.push(num1);
    num1 = num2 - num1;
    num2 = num1 + num2;
  }

  console.log(sequence);
}

//fibonacci(7);