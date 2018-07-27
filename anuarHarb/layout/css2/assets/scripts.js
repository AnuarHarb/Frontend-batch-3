'use strict';

// Seleccionando elementos del DOM
const sidenavButton = document.querySelector('.sidenav-button');
const sidenav = document.querySelector('.sidenav');
const sidenavX = document.querySelector('.sidenav-x');

// Escuchando eventos del DOM
sidenavButton.addEventListener('click', toggleSidenav);

sidenavX.addEventListener('click',toggleSidenav);

//Declarando funciones
function toggleSidenav() {
  sidenav.classList.toggle('sidenav-hidden');
}
