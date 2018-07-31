//sadalert("funciona");

/*
Comentar varias
lineas
*/

var nombre = 'Jon';
var edad = 27;
var enamorado = true;


// alert('Mi nombre es ' + nombre + 'y tengo ' + edad + ' años');

var precioSuper = 25 + 13 + 10;


//Declaración de la función
function totalDelSuper() {
  var azucar = 25;
  var limones = 13;
  var agua = 10;
  var precioTotal = azucar + limones + agua;
  console.log('El precio del super es: ' + precioTotal);
}

totalDelSuper();

//Pasando parametros
function totalDelSuperParametros(azucar, limones, agua) {
  var precioTotal = azucar + limones + agua;
  console.log('El precio del super es: ' + precioTotal);

  if(precioTotal > 100) {
  console.log('Ya no me alcanza')
  } else {
  console.log('Ya compré mi super! :)')
  }
}

//Mandando a llamar con parametros

totalDelSuperParametros(12,12,34);

//Mientas es for, va a repetir algo un N número de veces.
for(var i = 0; i < 10; i++) {
  console.log(i);
}

//Casos

var color = 'green';

switch(color) {
  case "green":
    console.log('me gusta el verde');
    break;

  case "blue":
    console.log('Me gusta el azul');
    break;

  default:
    console.log('Ese color no me gusta');
}



