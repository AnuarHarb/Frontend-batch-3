'use strict';

function abrirRefri(form) {
  const email = form.mail.value;
  const passwordValue = form.password.value;
  const age = parseInt(form.age.value);

  console.log(email, passwordValue, age);

  if(email == "mail@mail.com") {
    if(password == "Gatits") {
      console.log('Accediste al refri!');
    }
  } else {
    console.log('No tienes comida');
  }
}
