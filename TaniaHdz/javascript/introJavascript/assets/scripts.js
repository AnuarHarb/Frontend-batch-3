//alert ("funciona!");
/*
Todo lo que esta dentro de los /* son comentarios, se utiliza para cuando son varios párrafos
*/

//Ejemplos de variables

/*
var nombre = 'tania';
var edad = 27;
var enamorada = true;

alert ('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años');

var precioSuper = 25 + 13 + 10;

var azucar = 25;
var limones = 13;
var agua = 10;

precioSuper = azucar + limones + agua;

//Fin de variables

//Ejemplos de funciones

//Declaración de una función
function totalDeSuper () {
  var azucar = 25;
  var limones = 13;
  var agua = 10;
  var precioTotal = azucar + limones + agua;
  console.log('El precio del super es $' + precioTotal)
}

//Otra forma de hacerlo sería:
totalDeSuper();

function totalDeSuperParametros (azucar, limones, agua) {
  var precioTotal = azucar + limones + agua;
  console.log('El precio del super es $' + precioTotal);

  //Validciones
  if(precioTotal >100) {
    console.log('Ya no me alcanza');
  } 
  else {
    console.log('Ya compre mi super');
  }

totalDeSuperParametros(26, 14, 11);

}
//Mandar llamar una función
totalDeSuper();

for(var i = 0; <10; i++){
  console.log(i);
}

var color = 'blue';
switch (color) {
  case "green":
    console.log('Me gusta el verde');
    break;
  case "blue":
    console.log('Me gusta el azul');
    break;
  default:
    console.log('Ese color no me gusta');
}

//Ejemplo
function precioDelSuper(azucar, sal, limones) {
  var precioTotal = azucar + sal + limones;
  alert('El precio total es $' + precioTotal);
}
precioDelSuper(15, 20,10);
*/

function horasDormidas(dormir, despertar){
  if(dormir > despertar) {
    var horasDormidas = despertar + (24 - dormir);
  } else {
    var horasDormidas = despertar - dormir;
  }
  console.log('Dormí' + horasDormidas + 'horas');
}

//horasDormidas(24, 9);

function precioSuper(sal, azucar, cereal, arroz, helado){
  var totalSuper = sal + azucar + cereal + arroz + helado;
  console.log('El precio total del super fue de $' + totalSuper);
}

//precioSuper(10, 20, 30, 40, 50);

function presupuesto(ingreso1, ingreso2, gasto1, gasto2, gasto3){
  var ingresos = ingreso1 + ingreso2;
  var gastos = gasto1 + gasto2 + gasto3;
  var total = ingresos - gastos;
  console.log('El presupuesto del mes es de $' + total);
}

//presupuesto(500, 1000, 100, 300, 500);

function herencia(jose, juan, herencia){
  var herenciaIndividual = herencia/2;
  jose = jose + herenciaIndividual;
  juan = juan + herenciaIndividual;
  var dineroTotal = jose + juan;
  alert (dineroTotal);
  console.log('El dinero total es $' + dineroTotal);
}

// herencia(100, 200, 5000);

function precioCompu(compu){
  var iva = 1.16;
  var total = compu * iva;
  console.log('El precio de la compu de Diego con IVA es de $' + total);
}

//precioCompu(15000);

function cuentaRestaurante(precio, individuos){
  var propina = 1.10;
  var pagoIndividual = precio / individuos;
  var pagoMasPropina = pagoIndividual * propina
  console.log('La cuenta por persona con propina es de $' + pagoMasPropina);
}

//cuentaRestaurante(600, 2);

function animo(hambre){
  if (hambre = true) {
    console.log('Estoy triste');
  } else {
    console.log('Estoy feliz');
  }
}

//animo(true);

function videoJuegos(nivel){
  if (nivel >= 10 && nivel < 20) {
    console.log('Eres nivel ACROBATA');
  } else if (nivel >= 20){
    console.log('Eres nivel NINJA');
  }else if (nivel <= 9){
    console.log('Eres nivel APRENDIZ');
  }
}

//videoJuegos(20);

function refrigerador(nombre, contrasena){
  if (nombre == 'Tania' && contrasena == "Trickster"){
    console.log('Acceso Concedido');
  } else {
    console.log('Acceso Denegado');
  }
}

//refrigerador('Tania', 'Trickster');

function refrigeradorPromt(){
  var nombre = prompt('Escribe tu nombre');
  var contrasena = prompt('Escribe tu contraseña');

  if (nombre == 'Tania' && contrasena == "Trickster"){
    console.log('Acceso Concedido');
  } else {
    console.log('Acceso Denegado');
  }
}

//refrigeradorPromt();

function promedio(examen1, examen2, examen3){
  var promedioFinal = (examen1 + examen2 + examen3) / 3;
  if (promedioFinal >= 8.5){
    console.log('Tendrás un premio');
  } else if (promedioFinal >= 6){
    console.log('Estas salvado por la campana');
  } else {
    console.log('Tendrás un castigo');
  }
}

//promedio (5, 5, 5);

function horario(día){
  if (día = 'lunes' || 'miércoles'){
    console.log('Tienes clase de Historia');
  } else if (día = )
}




























