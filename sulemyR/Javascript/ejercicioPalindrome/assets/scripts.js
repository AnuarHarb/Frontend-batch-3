'use strict'
function palindrome(word)
{
	let resultPalindrome = document.querySelector('.result-palindrome');
	let wordOrPhrase = word.toUpperCase();
	let newWordOrPhrase = '';

	wordOrPhrase = wordOrPhrase.replace(/ /g, '');
	wordOrPhrase = wordOrPhrase.replace(/Á/gi, 'A');
	wordOrPhrase = wordOrPhrase.replace(/É/gi, 'E');
	wordOrPhrase = wordOrPhrase.replace(/Í/gi, 'I');
	wordOrPhrase = wordOrPhrase.replace(/Ó/gi, 'O');
	wordOrPhrase = wordOrPhrase.replace(/Ú/gi, 'U');

	for(let i = wordOrPhrase.length; i > 0; i--)
	{
		newWordOrPhrase += wordOrPhrase[i-1];
		console.log(newWordOrPhrase);
	}

	let message; 
	if(wordOrPhrase == newWordOrPhrase){
		message = 'Es un palindrome';
	}
	else{
		message = 'No es un palindrome';
	}

	resultPalindrome.innerHTML = 'La palabra o frase ' + word + ' ' + message ;

}