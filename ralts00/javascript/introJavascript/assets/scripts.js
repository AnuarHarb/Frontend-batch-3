function horasDormidas12(dormir,despertar){
  var resultadoHorasDormidas12 = document.querySelector('.resultado-horas-dormidas-12');
  if(despertar >= dormir){
    var horasTranscurridas = despertar - dormir;
  } else {
    var horasTranscurridas = despertar - dormir + 12;
  }
  //console.log('Dormi: ' + horasTranscurridas + ' horas');
  resultadoHorasDormidas12.innerText = 'Dormiste: ' + horasTranscurridas + ' horas';
}

//horasDormidas12(10,10);

function horasDormidas24(dormir, despertar){
  var resultadoHorasDormidas24 = document.querySelector('.resultado-horas-dormidas-24');
  if(despertar >= dormir){
    var horasTranscurridas = despertar - dormir;
  } else {
    var horasTranscurridas = despertar - dormir + 24;
  }
  //console.log('Dormi: ' + horasTranscurridas + ' horas');
  resultadoHorasDormidas24.innerHTML = 'Dormiste: ' + horasTranscurridas + ' horas';
}

//horasDormidas24(12,9);

function precioSuper(sal, azucar, cereal, arroz, helado) {
  var resultadoPrecioSuper = document.querySelector('.resultado-precio-super');
  var totalSuper = sal + azucar + cereal + arroz + helado;
  //console.log('El total es $' + totalSuper)
  resultadoPrecioSuper.innerHTML = 'El total es $' + totalSuper;
}

//precioSuper(12,15,13,12,10);

function presupuesto(ingreso1, ingreso2, gasto1, gasto2, gasto3) {
  var totalPresupuesto = ingreso1 + ingreso2 - gasto1 - gasto2 - gasto3;
  console.log('Mi presuuesto es: $' + totalPresupuesto);
}

//presupuesto(200,300,100,100,100);

function herencia(juan, jose, herencia){
  var herenciaIndividual = herencia / 2;
  var herenciaJuan = juan + herenciaIndividual;
  var herenciaJose = jose + herenciaIndividual;
  var dineroTotal = herenciaJuan + herenciaJose + herencia;
  console.log('herencia de Juan: $' + herenciaJuan);
  console.log('herencia de jose: $' + herenciaJose);
  console.log('Total de la herencia: $' + dineroTotal);
}

//herencia(100,200,500)

function memify(valorStartup){
  var valorPerCapita = valorStartup / 2;
  var iva = .16;
  var valorIvaPerCapita = valorPerCapita * iva;
  var valorFinal = valorPerCapita - valorIvaPerCapita;
  console.log('Iva por cabeza: $' + valorIvaPerCapita);
  console.log('Ganancia por cabeza: $' + valorFinal);
}

// memify(10);

function compuDiego(valorCompu){
  var iva = .16;
  var totalPagar = valorCompu + (valorCompu * iva);
  console.log('El total a pagar es de $' + totalPagar);
}

// compuDiego(2000);

function restaurante(precio, individuos){
  var propina = 1.10;
  var pagoIndividual = precio / individuos;
  var pagoIndividualConPropina = pagoIndividual * propina;
  console.log('Pago por persona: $' + pagoIndividual);
  console.log('Pago con propina por persona: $' + pagoIndividualConPropina);
}

// restaurante(300, 3);

//Nivel 2

function felicidad(hambre){
  if(hambre == true) {
    console.log('Estoy triste')
  } else {
    console.log('Estoy feliz')
  }
}

// felicidad(true);

function videoGame(level){
  switch(true){
    case(level >= 10 && level < 20):
      range = 'acrobata';
      break;
    case(level >= 20):
      range = 'ninja';
      break;
    default:
      range = 'noob';
  }
  console.log('Mi rango es: ' + range);
}

//videoGame(23);

function refriAuth(name, pass) {
  if(name == 'Jonathan' && pass == '23452'){
    console.log('Entra');
  } else{
    console.log('No te robes mi comida')
  }
}

//refriAuth('Jonathan','23452');

function promedio(examen1, examen2, examen3){
  var promedioTotal = (examen1 + examen2 + examen3) / 3;
  switch(true){
    case(promedioTotal >= 8.5):
      console.log('Tienes un premio.');
      break;
    case(promedioTotal < 6):
      console.log('Hay castigo.');
      break;
    default:
      console.log('Chido, pero no hay premio.');
  }
}

//promedio(10,10,10);

function clases(day){
  switch(day){
    case('Lunes' || 'Miercoles'):
      console.log('Tienes clase de: Historia');
      break;
    case('Martes'):
      console.log('Tienes clase de: Natación');
      break;
    case('Jueves'):
      console.log('Tienes clase de: Esgrima');
      break;
    default:
      console.log('No tienes clases');
  }
}

//clases('Viernes');

function apuesta(shot1, shot2, shot3){
  if(shot1 == shot2 || shot1 == shot3 || shot2 == shot3){
    console.log('Ganaste el juego');
  } else {
    console.log('Perdiste el juego');
  }
}

//apuesta(5,2,3);

function apuestaRandom(){

  var dice1 = document.querySelector('.dice-1');
  var dice2 = document.querySelector('.dice-2');
  var dice3 = document.querySelector('.dice-3');
  var resultadoApuestaRandom = document.querySelector('.resultado-apuesta-random');
  var resultDice1 = Math.ceil(Math.random() * 6);
  var resultDice2 = Math.ceil(Math.random() * 6);
  var resultDice3 = Math.ceil(Math.random() * 6);

  resultadoApuestaRandom.innerHTML = '';

  setTimeout(function(){
    for(i=1; i<=6; i++){
      dice1.classList.remove("dice-for-" + i);
      dice2.classList.remove("dice-for-" + i);
      dice3.classList.remove("dice-for-" + i);
    }
  }, 400);

  dice1.classList.remove('dice-animation');
  dice2.classList.remove('dice-animation');
  dice3.classList.remove('dice-animation');

  setTimeout(function(){
    dice1.classList.add('dice-animation');
    dice2.classList.add('dice-animation');
    dice3.classList.add('dice-animation');

  }, 10);

  setTimeout(function(){
    dice1.classList.add('dice-for-' + resultDice1);
    dice2.classList.add('dice-for-' + resultDice2);
    dice3.classList.add('dice-for-' + resultDice3);
  }, 400);

  dice1.addEventListener("animationend", function(){
    if(resultDice1 == resultDice2 || resultDice1 == resultDice3 || resultDice2 == resultDice3){
      resultadoApuestaRandom.innerHTML = '¡Ganaste!';
    } else {
      resultadoApuestaRandom.innerHTML = 'Perdiste :(';
    }
  });

}

//apuestaRandom();

//Ejercicio nivel 3

function castigo(num1, num2){
  for(i = num1; i <= num2; i++){
    console.log(i)
  }
}

//castigo(3,10);

function nutriologo(peso, pesoIdeal, cambioDePeso){
  var semanas = 0;
  for(var i = peso; i > pesoIdeal; i -= cambioDePeso){
    semanas = semanas + 1;
  }
  console.log(semanas);
}

nutriologo(108, 67, 1)
