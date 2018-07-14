'use strict';

const selection = document.querySelector('.obiOne__select');
const showDown = document.querySelector('.obiOne__match');
// Sounds
const cloneSound = document.querySelector('.clone-sound');

const cloneCard = document.querySelector('.card__clone');

// Sound event listeners
cloneCard.addEventListener('mouseover', playClone);
cloneCard.addEventListener('mouseleave', stopClone);

function playClone() {
  cloneSound.play();
}

function stopClone() {
  cloneSound.pause();
  cloneSound.currentTime = 0;
}



function vsComputer(form) {
  const player1 = form.jugador.value;
  const obiOne = ObiOnePlay();

  match(player1, obiOne);
  showWinContainer();
}

function ObiOnePlay() {
  let obiOne = Math.ceil(Math.random()*3);
  if(obiOne == 1) {
    obiOne = 'lightsaber';
  } else if(obiOne == 2 ){
    obiOne = 'clones';
  } else {
    obiOne = 'force';
  }
  return obiOne;
}

function match(player1, obiOne) {
  switch(player1){
    case 'lightsaber':
      if(obiOne == 'lightsaber') {

      } else if(obiOne == 'force') {

      } else {

      }
      break;
    case 'force':
      if(obiOne == 'lightsaber') {

      } else if(obiOne == 'force') {

      } else {

      }
      break;
    default:
      if(obiOne == 'lightsaber') {

      } else if(obiOne == 'force') {

      } else {

      }
    break;
  };
}

function showWinContainer() {
  selection.classList.remove('active');
  showDown.classList.add('active');
}
















// d
