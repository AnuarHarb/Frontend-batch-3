'use strict';
const promise = fetch('https://rickandmortyapi.com/api/character');

promise
  .then(function(response) {
    return response.json();
  })
  .then(function(characters) {
    console.log(characters)
  })
  .catch(function(reason) {
    console.error(reason);
  })
