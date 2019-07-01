//alert("funciona!");
/*varias 
lineas*/

var nombre = 'sulemy'; //para declarar un string pueden ser comillas dobles o simples
var edad = 28;
var enamorado = true;

alert(nombre);
alert('Mi nombre es ' + nombre);
alert('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años');

var precioSuper = 25 + 13 + 10;
var azucar = 25;
var limones = 13;
var agua = 10; 

precioSuper = azucar + limones + agua; // las variables se pueden sobreescribir

//FUNCIONES
//No llamar a las funciones Igual por que se sobreEscriben
function totalDeSuper1() {
	var precioTotal = azucar + limones + agua;
	console.log('El precio del super es: $' + precioTotal);
	return precioTotal;
}
//Para mandarla a llamar ponemos totalDeSuper();

function totalDeSuper(azucar, limones, agua) {
	var precioTotal = azucar + limones + agua;
	console.log('El precio del super es: $' + precioTotal);

	if(precioTotal > 100) {
		console.log('Ya no me alcanza');	
	}
	else {
     	console.log('Me alcanzó!');
	}

	return precioTotal;

}

for(var i = 0; i < 10; i++)
{
	console.log(i);
}

var color = 'Blue';
 switch (color) {
 	case 'green':
 		console.log('Me gusta el verde');
 		break; 
 	case 'Blue':
 		console.log('Me gusta el azul');
 		break; 
 	default:
 		console.log('Ese color no me gusta');
 		break; //Puede llevar o no llevar el break
 }

//Realizar nuestro ejercicio de esta manera 
function precio (azucar, sal, limones){
	var precioTotal = azucar + sal + limones;
	alert('El precio total es: ' + precioTotal);
}

precio(25, 15, 20); 


