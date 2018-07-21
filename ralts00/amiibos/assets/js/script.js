'use strict'
const amiiboApi = 'http://www.amiiboapi.com/api/amiibo/'
const container = document.querySelector('#container');

fetch(amiiboApi)
  .then(response => response.json())
  .then(responseJson => createAmiibo(responseJson.amiibo))

let createAmiibo = (amiibos) => {
  for(let amiibo = 0; amiibo <= 100; amiibo ++) {
    let classSeries = amiibos[amiibo].amiiboSeries.replace(/\s/g, '');
    classSeries = classSeries.replace(/\./g, '');
    classSeries = classSeries.replace(/-/g, '');
    classSeries = classSeries.replace(/[0-9]/g, '');
    classSeries = classSeries.replace(/'/g, '');
    const card = `
      <article class="card ${classSeries}">
        <img src="${amiibos[amiibo].image}" class="card__image">
        <span class="card__title">${amiibos[amiibo].name}</span>
        <span class="card__info">${amiibos[amiibo].amiiboSeries}</span>
        <span class="card__info">${amiibos[amiibo].gameSeries}</span>
        <span class="card__info">${amiibos[amiibo].release.eu}</span>
      </article>
    `
    container.innerHTML += card;
  }
}
