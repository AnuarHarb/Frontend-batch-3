'use strict'

function pyramidArm()
{
	let result = document.querySelector('.result');
	result.innerHTML= '';
	const num = document.getElementById('size').value; 
	const character = '*'; 
    let chain = '</br>'; 
    console.log(num);
	for(let cont = 1; cont <= num; cont++)
	{
		chain = chain + character; 
		console.log(chain);
		result.innerHTML += chain;
	}
	
}
