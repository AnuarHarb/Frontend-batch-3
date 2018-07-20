'use strict';

const cardListContainer = document.querySelector('.card-list');
const url_api = 'https://rickandmortyapi.com/api/character';

fetch(url_api)
  .then(respuesta => respuesta.json())
  .then(respJson => createCards(respJson.results))

function createCards(characters) {
  for(let character of characters) {
    const card = `
      <article class="card ${character.status}">
        <picture class="card__picture">
          <img class="card__image" src="${character.image}">
        </picture>
        <h3 class="card__title">${character.name}</h3>
        <ul class="card__stats">
          <li><span>Especie: </span>${character.species}</li>
          <li><span>Genero: </span>${character.gender}</li>
          <li><span>Estatus: </span>${character.status}</li>
        </ul>
      </article>
    `
    cardListContainer.innerHTML += card;
  }
}


  // Nomal function ----
  // let mifuncion = function soyFuncion(casa) {
  //   let mensaje = 'esta es mi' + casa
  //   return mensaje;
  // }

  // Arrow function -----
  // let miFuncion = (casa) => {
  //   return casa.json()
  // }

  // one line arrow function ----
  // let myFuncion = casa => { casa.json() }
