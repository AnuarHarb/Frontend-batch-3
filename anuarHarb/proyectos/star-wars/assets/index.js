'use strict';

const winner = document.querySelector('.winner');

function play(form) {
  const player1 = form.jugador.value;
  const obiOne = ObiOnePlay();
  console.log(player1, obiOne);
  if(player1 == obiOne) {
    console.log('empate');
  } else if(player1 == 'tijera' && obiOne == 'piedra') {
    console.log('Ganó obiOne con ' + obiOne + ' a tus ' + player1);
    winner.classList.add('active');
    form.classList.remove('active');
  } else if(player1 == 'tijera' && obiOne == 'papel') {
    console.log(`Ganaste con tu ${player1} a obiOne con su ${obiOne}`);
  }
}

function ObiOnePlay() {
  let obiOne = Math.ceil(Math.random()*3);
  if(obiOne == 1) {
    obiOne = 'tijera';
  } else if(obiOne == 2 ){
    obiOne = 'papel';
  } else {
    obiOne = 'piedra';
  }
  return obiOne;
}
