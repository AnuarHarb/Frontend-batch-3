


  /*para comentar
  varias
  lineas
  "block de codigo"
  */

  //comenta una linea

  var nombre = "Gladys";
  var edad = 24;
  var enamorada = true;

  alert("mi nombre es " + nombre + " y tengo " + edad + " años");

  var precioSuper = 25 + 13 + 10; //las variable pueden ser resultados de operaciones

  var azucar = 25;
  var limones = 13;
  var agua = 10;

  precioSuper = azucar + limones + agua; //las variables se pueden sobreescribir

  function totalDeSuper(){
    var precioTotal = azucar + limones + agua;
    console.log("el precio del super es $ " + precioTotal);

    if(precioTotal > 100) {
      console.log("ya no me alcanza");
    } else {
      console.log("ya compre mi super :D")
    }
  }

  totalDeSuper(); //manda a llamar una función

  //VALIDACIONES


  for(var i = 0; i < 10; i++){
    console.log(i);
  }

  //segun sea:
  switch (color = "green") {
    case"green":
      console.log("me gusta el verde");
      break;
    case "blue":
      console.log("me gusta el azul");
      break;
    default:
      console.log("ese color no me gusta");
  }
