function horasDormidas24(dormir, despertar){
  if(despertar >= dormir){
    var horasTranscurridas = despertar - dormir;
  } else {
    var horasTranscurridas = despertar - dormir + 24;
  }
  console.log('Dormi: ' + horasTranscurridas + ' horas');
}

//horasDormidas24(12,9);


function horasDormidas12(dormir,despertar){
  if(despertar >= dormir){
    var horasTranscurridas = despertar - dormir;
  } else {
    var horasTranscurridas = despertar - dormir + 12;
  }
  console.log('Dormi: ' + horasTranscurridas + ' horas');
}

//horasDormidas12(10,10);

function precioSuper(sal, azucar, cereal, arroz, helado) {
  var totalSuper = sal + azucar + cereal + arroz + helado;
  console.log('El total es $' + totalSuper)
}

//precioSuper(12,15,13,12,10);

function presupuesto(ingreso1, ingreso2, gasto1, gasto2, gasto3) {
  var totalPresupuesto = ingreso1 + ingreso2 - gasto1 - gasto2 - gasto3;
  console.log('Mi presuuesto es: $' + totalPresupuesto);
}

//presupuesto(200,300,100,100,100)

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

function(felicidad){
  if(felicidad == true) {
    console.log(Estoy triste)
  } else {
    console 
  }
}
