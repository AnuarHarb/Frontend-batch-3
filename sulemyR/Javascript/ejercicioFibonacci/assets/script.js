'use strict'

function fibonacci(position) {
	var resultado = document.querySelector('.result-fibonacci');
	let array = []; 
	let num1 = 0; 
	let num2 = 1;
	for(let i = 0; i <= position; i++){
			array[i] = num1;
			resultado.innerHTML += num1 + '-';
        	num1 = num1 + num2; 
        	num2 = array[i];
		console.log(array);
	}
}


// fibonacci(3);