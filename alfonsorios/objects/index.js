'use strict';


const promise = fetch('https://rickandmortyapi.com/api/character/');

const tagDivContainer = document.querySelector('.container');

const tagDivHeader = (character, tagDiv) => {
  
  const tagImg = document.createElement('img');
  tagImg.src = character.image;
  tagImg.alt = character.name;
  tagImg.classList.add('radius-image');
  tagDiv.appendChild(tagImg);
  
  
};

const tagDivBody = (name, tagDiv) => {
  const tagH2 = document.createElement('h2');
  tagH2.innerText = name;
  tagDiv.appendChild(tagH2);
};

const tagDivFooter = (property, value, tagDiv) => {
  const tagItem = document.createElement('div');
  tagItem.classList.add('item');
  const tagH3 = document.createElement('h3');
  const tagP = document.createElement('p');
  tagH3.innerText = property;
  tagP.innerText = value;
  tagItem.appendChild(tagH3);
  tagItem.appendChild(tagP);
  tagDiv.appendChild(tagItem);
};


promise
  .then(function(data) {
    return data.json();
  })
  .then(function(objectData) {
    const characters = objectData.results;
    for (const character of characters) {
      const tagDiv = document.createElement('div');
      tagDiv.classList.add('card');
      tagDivHeader(character, tagDiv);
      tagDivBody(character.name, tagDiv);
      const tagFooter = document.createElement('div');
      tagDivFooter('Estatus', character.status, tagFooter);
      tagDivFooter('Especie', character.species, tagFooter);
      tagDivFooter('Genero', character.gender, tagFooter);
      tagFooter.classList.add('footer-container');
      tagDiv.appendChild(tagFooter);
      tagDivContainer.appendChild(tagDiv);
    }
  })
  .catch(function(reason) {
    console.error(reason);
    
  });
