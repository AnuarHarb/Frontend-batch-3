'use strict'
const newMovie = fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22?api_key=8358b2f66408fb510fe420aabfe5683d');
const container = document.querySelector('#container');

const name = (pokemon) => {
  const pokemonName = document.createElement('h2');
  pokemonName.innerText = pokemon.name;
  container.appendChild(pokemonName);
};

newMovie
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  })

const amiiboApi = 'http://www.amiiboapi.com/api/amiibo/'
