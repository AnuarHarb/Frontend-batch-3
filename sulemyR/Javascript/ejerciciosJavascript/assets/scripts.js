
//Ejercicio Dormir 
function dormir24(){
	var dormirDespertar24 = document.querySelector('.resultado-dormir24');

	var dormir = document.getElementById('dormir').value;
	var despertar = document.getElementById('despertar').value;
	var horasDormidas;
	if(dormir > 12){
		horasDormidas = (24 - dormir) + despertar;
	}
	else{
		horasDormidas = despertar - dormir
	}

	dormirDespertar24.innerHTML = 'Las horas que dormiste son: ' + horasDormidas;
}

// dormir24(23, 3);

//Ejercicio Dormir 
function dormir12(){
	var dormirDespertar12 = document.querySelector('.resultado-dormir12');

	var dormir = document.getElementById('dormir12').value;
	var despertar = document.getElementById('despertar12').value;
	var horasDormidas;
	if(dormir < despertar){
		horasDormidas = 0 - dormir; 
	}
	else{
		horasDormidas = 12 - dormir;
	}
	horasDormidas = horasDormidas + despertar;
	
	dormirDespertar12.innerHTML = 'Las horas que dormiste son: ' + horasDormidas;
}

// dormir12(12, 3);

//Ejercicio Precio del super
function totalSuper(precioSal, precioAzucar, precioCereal, precioArroz, precioHelado) {
	var totalSuper = document.querySelector('.resultado-total-super');

	var total = Number(precioSal) + Number(precioAzucar) + Number(precioCereal) + Number(precioArroz) + Number(precioHelado);
	// console.log('El precio total a pagar es: $' + total);
	totalSuper.innerHTML = 'El precio total a pagar es: $' + total;
	// return total; 
}

// totalSuper(10.00, 15.00, 50, 67.00, 78.90);

//Ejercicio Presupuesto
function presupuesto(ingreso1, ingreso2, gasto1, gasto2, gasto3) {
	var resultadoPresupuesto = document.querySelector('.resultado-presupuesto');

	var presupuesto = (ingreso1 + ingreso2)-(gasto1 + gasto2 + gasto3);
	console.log('Tu presupuesto mensual es: $' + presupuesto);
	resultadoPresupuesto.innerHtml = 'Tu presupuesto mensual es: $' + presupuesto;
	// return presupuesto;
}

// presupuesto(25000.00, 15000.00, 10000.00, 3000, 4000.00);
 
//Ejercicio Herencia de nietos
function herencia(jose, juan, herencia){
	var resultadoHerencia = document.querySelector('.resultado-herencia');//Manipular el DOM
	var resultadoJose = document.querySelector('.resultado-jose');
	var resultadoJuan = document.querySelector('resultado-juan');
	//El document se refiere al documento del html
	//document.querySelector('h1');
	//document.querySelector('#esunid');
	var herenciaIndividual = (herencia / 2);

	var valorJose = jose + herenciaIndividual;
	var valorJuan = juan + herenciaIndividual;

	var valorTotal = valorJose + valorJuan;

	
	resultadoHerencia.innerHTML = '<p>El total del dinero es: $' +  valorTotal + '<p>';
	resultadoJose.innerHTML = 'El resultado que le toca de la herencia a jose es: $' + valorJose;
	resltadoJuan.innerHTML = 'El resultado que le toca de la herencia a juan es: $' + valorJuan;
	// console.log('EL valor de José es: ' + valorJose);
	// console.log('El valor de juan es: ' + valorJuan);
	// console.log('El valor total es: ' + valorTotal); 
	// return "El valor de josé es: " + valorJose + "El valor de Juan es: " + valorJuan + "El valor Total es: " +
	// valorTotal; 
}

// herencia(15000, 30000, 1000000);

//Ejercicio Memify
function memify(valorStartup){
	var resultadoMemifySocio1 = document.querySelector('.resultado-memify-socio1');
	var resultadoMemifySocio2 = document.querySelector('.resultado-memify-socio2');
	var valorIndividual = valorStartup / 2; 
	var iva = .16;
	var valorIva = valorIndividual * iva; 

	var socio1 =  valorIndividual - valorIva; 
	var socio2 = valorIndividual - valorIva;

	resultadoMemifySocio1.innerHtml = 'El valor del socio 1 es: ' + socio1;
	resultadoMemifySocio2.innerHtml = 'El valor del socio 2 es: ' + socio2;

	// console.log('El valor del socio 1 es: ' + socio1);
	// console.log('El valor del socio 2 es: ' + socio2);
}

// memify(40000);

//Ejercicio Compu Diego
function compuDiego(compu){
	var resultadoComputadora = document.querySelector('.resultado-computadora');
	var iva = .16; 
	var total = compu + (compu * iva);

	resultadoComputadora.innerHtml = 'El total de la computadora de Diego es: ' + total;

	// console.log('El total de la compu de Diego es: ' + total); 
}

// compuDiego(25345.00); 

//Ejercicio Restaurante
function restaurante(precio, individuos){
	var resultadoRestaurante = document.querySelector('.resultado-restaurante-total');
	var resultadoIndividual = document.querySelector('.resultado-restaurante-individuos');
	var precioPorcentaje = precio + (precio * .10);
	var precioIndividual = precioPorcentaje/individuos; 

	resultadoRestaurante.innerHtml = 'El total a pagar es: $' + precioPorcentaje;
	resultadoIndividual.innerHtml = 'El total a pagar por individuo es: $' + precioIndividual;

	// console.log('El precio total a pagar por individuo ' +
	// 	'con propina incluida es: $' + precioIndividual);
}

// restaurante(350.00, 6);

//Ejercicio Felicidad o hambre
function felizHambre(hambre){
	var resultadoHambre = document.querySelector('.resultado-hambre');
	var estadoDeAnimo; 
	if(hambre = false){
		estadoDeAnimo = 'Feliz';
	}
	else{
		estadoDeAnimo = 'Triste';
	}

	resultadoHambre.innerHtml = 'Tu esta de ánimo es: ' + estadoDeAnimo;

	// console.log('su estado de animo según tu hambre es: ' + estadoDeAnimo);
}

// felizHambre(true);

//Ejercicio Nivel de videoJuegos
function videojuego(nivel){
	var videojuego = document.querySelector('.resultado-videojuego');
	var personaje;
	switch(true){
		case (nivel >= 10 && nivel < 20):
			personaje = 'Acrobata';
			break;
		case (nivel > 20):
			personaje = 'ninja';
			break;
		default:
			personaje = 'Aprendizaje';
	}

	videojuego.innerHtml = 'Mi personaje es un: ' + personaje;
	// console.log('Mi personaje es un: ' + personaje);
}

// videojuego(15);

//Ejercicio Acceso al refrigerador
function abrirRefrigerador(nombre, contrasenia){
	var refrigerador = document.querySelector('.resultado-refrigerador')
	var nombreCorrecto = 'Sulemy';
	var contraseniaCorrecta = '123';

	var mensaje; 

	if((nombre = nombreCorrecto) && (contrasenia = contraseniaCorrecta)){
		mensaje = 'El nombre y la contraseña es correcta';
	}
	else{
		if(nombre != nombreCorrecto){
			mensaje = 'El nombre es Incorrecto';
		}
		if(contrasenia != contraseniaCorrecta){
			mensaje = 'La contraseña es incorrecta';
		}
	}

	refrigerador.innerHtml= mensaje;
}

// abrirRefrigerador('Sulemy', '123');

//EjercicioPromedio
function promedio(examen1, examen2, examen3){
	var resultadoPromedio = document.querySelector('.resultado-promedio');
	var promedio = (examen1 + examen2 + examen3)/3;

	var mensaje;
	if(promedio >= 8.5){
		mensaje = 'Recibiras un premio';
	}
	else{
		mensaje = 'Recibirás un castigo';
	}

	resultadoPromedio.innerHtml = 'El promedio es : ' + promedio + ' por lo que ' + mensaje; 
	// console.log(mensaje); 
}

// promedio(8.5, 7.0, 10.0);

//Ejercicio Horario
function horario(horario){
	var resultadorHorario = document.querySelector('.resultado-horario');
	var materia;
	switch(horario) {
		case 'Lunes':
			materia = 'Voy a historia';
			break;
		case 'Miércoles':
			materia = 'Voy a historia';
			break;
		case 'Martes':
			materia = 'Voy a natación';
			break;
		case 'Jueves':
			materia = 'Voy a esgrima';
			break; 
		default:
			materia = 'Voy a descansar';
	}

	resultadoHorario.innerHtml = materia; 
	// console.log(materia);
}

// horario('Lunes');

//Ejercicio Apuesta
function apuesta(shot1, shot2, shot3){
	var apuesta = document.querySelector('.resultado-apuesta');
	var mensaje; 
	switch(true){
		case shot1 == shot2:
			mensaje = 'Ganaste';
			break;
		case shot1 == shot3:
			mensaje = 'Ganaste';
			break; 
		case shot2 == shot3:
			mensaje = 'Ganaste';
			break;
		default: 
			mensaje = 'Perdiste';
	}
     
     apuesta.innerHtml = 'El resultado es: ' + mensaje
	// console.log(mensaje);
}

// apuesta(3, 3, 3);

// //Ejercicio Apuesta
// function apuesta()
// {
// 	//Math.round(5.5) al mas cercano
// 	//Math.floor(9.9) mas abajo
// 	//Math.ceil(9.1) arriba 
// 	var dado1 = Math.ceil(Math.random()*6);
// 	var dado2 = Math.ceil(Math.random()*6);
// 	var dado3 = Math.ceil(Math.random()*6);

// 	if(dado1 == dado2 || dado2 == dado3 || dado3 == dado2)
// 	{
// 		alert('Ganaste');
// 	}
// 	else {
// 		alert('Perdiste');

// 	}
// }

//Ejercicio Regaño
function reganio(num1, num2){
	var contador = num1;
	while(contador <= num2){
		contador = contador + 1;
		console.log(contador); 
	}
}

reganio(1,9);

// //Ejercicio Peso
function peso(peso, pesoIdeal, cambioDePeso){
	var semanas = 0; 
	for(var contador = peso; contador >= pesoIdeal; contador = contador - cambioDePeso){
		console.log(contador);
		semanas = semanas + 1; 
	}

   console.log('Bajaste en: '+ semanas + ' semanas');
}

peso(90, 56, 5);
