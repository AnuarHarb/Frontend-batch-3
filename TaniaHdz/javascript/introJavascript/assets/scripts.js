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
  var resultadoHorasDormidas = document.querySelector('.resultado-horas-dormidas');

  if(dormir > despertar) {
    var horasDormidas = despertar + (24 - dormir);
  } else {
    var horasDormidas = despertar - dormir;
  }
 
resultadoHorasDormidas.innerHTML = 'Dormí ' + horasDormidas + ' horas';

  console.log('Dormí' + horasDormidas);
}

//horasDormidas(24, 9);

function precioSuper(sal, azucar, cereal, arroz, helado){
  var resultadoSuper = document.querySelector('.resultado-super');

  var totalSuper = sal + azucar + cereal + arroz + helado;

  resultadoSuper.innerHTML = 'El total del super es de $ ' + totalSuper;

  console.log('El precio total del super fue de $' + totalSuper);
}

//precioSuper(10, 20, 30, 40, 50);

function presupuesto(ingreso1, ingreso2, gasto1, gasto2, gasto3){
  var resultadoPresupuesto = document.querySelector('.resultado-presupuesto');

  var ingresos = ingreso1 + ingreso2;
  var gastos = gasto1 + gasto2 + gasto3;
  var total = ingresos - gastos;

  resultadoPresupuesto.innerHTML = 'El total del presupuesto es de $ ' + total;

  console.log('El presupuesto del mes es de $' + total);
}

//presupuesto(500, 1000, 100, 300, 500);

function herencia(jose, juan, herencia){
  var resultadoHerencia = document.querySelector('.resultado-herencia');
  
  var herenciaIndividual = herencia/2;
  jose = jose + herenciaIndividual;
  juan = juan + herenciaIndividual;
  var dineroTotal = jose + juan;
  alert (dineroTotal);

  resultadoHerencia.innerHTML = 'El dinero total es de $' + dineroTotal;

  console.log('El dinero total es $' + dineroTotal);
}

// herencia(100, 200, 500);

function precioCompu(compu){
  var resultadoPrecio = document.querySelector('.resultado-precio');

  var iva = 1.16;
  var total = compu * iva;

  resultadoPrecio.innerHTML = 'El precio total es de $' + total;

  console.log('El precio de la compu de Diego con IVA es de $' + total);
}

//precioCompu(15000);

function cuentaRestaurante(precio, individuos){
  var resultadoCuenta = document.querySelector('.resultado-cuenta');

  var propina = 1.10;
  var pagoIndividual = precio / individuos;
  var pagoMasPropina = pagoIndividual * propina

  resultadoCuenta.innerHTML = 'El precio por persona es de $' + pagoMasPropina;

  console.log('La cuenta por persona con propina es de $' + pagoMasPropina);
}

//cuentaRestaurante(600, 2);

function animo(hambre){
  var resultadoAnimo = document.querySelector('.resultado-animo');

  if (hambre == true) {

    resultadoAnimo.innerHTML = 'Mi estado de ánimo es triste';

    console.log('Estoy triste');
  } else {

    resultadoAnimo.innerHTML = 'Mi estado de ánimo es feliz';

    console.log('Estoy feliz');
  }
}

//animo(true);

function videoJuegos(nivel){
  var resultadoNivel = document.querySelector('.resultado-nivel');

  if (nivel >= 10 && nivel < 20) {

    resultadoNivel.innerHTML = 'Tu nivel es ACROBATA';

    console.log('Eres nivel ACROBATA');
  } else if (nivel >= 20){

    resultadoNivel.innerHTML = 'Tu nivel es NINJA';

    console.log('Eres nivel NINJA');
  }else if (nivel <= 9){

    resultadoNivel.innerHTML = 'Tu nivel es APRENDIZ';

    console.log('Eres nivel APRENDIZ');
  }
}

//videoJuegos(20);

function refrigerador(nombre, contrasena){
  var resultadoDatos = document.querySelector('.resultado-datos');

  if (nombre == 'Tania' && contrasena == "Trickster"){

    resultadoDatos.innerHTML = 'Acceso Concedido'; 

    console.log('Acceso Concedido');
  } else {

    resultadoDatos.innerHTML = 'Acceso Denegado';

    console.log('Acceso Denegado');
  }
}

//refrigerador('Tania', 'Trickster');

// function refrigeradorPromt(){
//   var nombre = prompt('Escribe tu nombre');
//   var contrasena = prompt('Escribe tu contraseña');

//   if (nombre == 'Tania' && contrasena == "Trickster"){
//     console.log('Acceso Concedido');
//   } else {
//     console.log('Acceso Denegado');
//   }
// }

//refrigeradorPromt();

function promedio(examen1, examen2, examen3){
  var promedioFinal = (examen1 + examen2 + examen3) / 3;

  var resultadoPromedio = document.querySelector('.resultado-promedio');

  if (promedioFinal >= 8.5){

    resultadoPromedio.innerHTML = 'Tendrás un premio';
    
    console.log('Tendrás un premio');
  } else if (promedioFinal >= 6){

    resultadoPromedio.innerHTML = 'Estas salvado por la campana';

    console.log('Estas salvado por la campana');
  } else {

    resultadoPromedio.innerHTML = 'Tendrás un castigo';

    console.log('Tendrás un castigo');
  }
}

//promedio (5, 5, 5);

function horario(día){
  var resultadoDia = document.querySelector('.resultado-dia');

  if ((día == 'lunes') || (día == 'miércoles')){

    resultadoDia.innerHTML = 'Tienes clase de Historia';

    console.log('Tienes clase de Historia');
  } else if (día == 'martes'){

    resultadoDia.innerHTML = 'Tienes clase de Natación';

    console.log('Tienes clase de Natación');
  } else if (día == 'jueves'){

    resultadoDia.innerHTML = 'Tienes clase de Esgrima';

    console.log('Tienes clase de Esgrima');
  } else{

    resultadoDia.innerHTML = 'Es día de descanso';

    console.log('Es día de descanso');
  }
}

//horario('jueves');

function apuesta(shot1, shot2, shot3){
  var mensaje

  var resultadoDado = document.querySelector('.resultado-dado');

  switch(true){
    case shot1 == shot2:

    resultadoDado.innerHTML = 'Gané';

      mensaje = 'Gané';
      break;
    case shot1 == shot3:

    resultadoDado.innerHTML = 'Gané';

      mensaje = 'Gané';
      break;
    case shot2 == shot3:

    resultadoDado.innerHTML = 'Gané';

      mensaje = 'Gané';
      break;
    default:

    resultadoDado.innerHTML = 'Perdí';
    
      mensaje = 'Perdí';
  }

  console.log(mensaje);
}

//apuesta(3, 2, 2);

// function apuesta() {
//   var dado1 = Math.ceil(Math.random()*6)
//   var dado2 = Math.ceil(Math.random()*6)
//   var dado3 = Math.ceil(Math.random()*6)

//   if (dado1 == dado2){
//     alert('Ganaste');
//   }else if (dado2 == dado3){
//     alert('Ganaste');
//   }else if (dado1 == dado3){
//     alert('Ganaste');
//   } else {
//     alert('Perdiste');
//   }
// }

// console.log('dado1', dado1);
// console.log('dado2', dado2);
// console.log('dado3', dado3);
// console.log(mensaje);


// function apuesta() {
//   var dado1 = Math.ceil(Math.random()*6)
//   var dado2 = Math.ceil(Math.random()*6)
//   var dado3 = Math.ceil(Math.random()*6)

//   if(dado1 == dado2 || dado2 == dado3 || dado1 == dado3){
//     var mensaje = 'Ganaste';
//   } else {
//     var mensaje = 'Perdiste';
//   }

//   console.log('dado1', dado1);
//   console.log('dado2', dado2);
//   console.log('dado3', dado3);
//   console.log(mensaje);
// }

// apuesta();


function regaño(num1, num2){

  var resultadoRegaño = document.querySelector('.resultado-regaño');
  var listaNumeros = '';

  for (var i = num1; i <= num2; i++){
    listaNumeros += '<li>' + i + '</li>';
  }
  resultadoRegaño.innerHTML = listaNumeros;
}

function peso(peso, pesoIdeal, cambioDePeso){
  var semanas = 0;
  var resultadopeso = document.querySelector('.resultado-peso');

  for (var contador = peso; contador >= pesoIdeal; contador = contador - cambioDePeso){
    console.log(contador);
    semanas = semanas + 1;

    resultadopeso.innerHTML = 'Bajaste en ' + semanas + ' semanas' ;

  }

  console.log('Bajaste en ' + semanas + ' semanas');

}

//peso(70, 56, 2);

























