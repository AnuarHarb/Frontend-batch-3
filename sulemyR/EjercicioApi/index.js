'use strict';


const promise = fetch('http://www.amiiboapi.com/api/character');

promise
  .then(function(data) {
    return data.json();
  })
  .then(function(objectData) {
    const allAmiibos = objectData.amiibo;
    console.log(objectData);
    for(const amiibo of allAmiibos){
      let error = amiibo.name.indexOf(' ');
      if(error == -1){
        getAmiibo(amiibo.name);
       }
    }
  })
  .catch(function(reason) {
    console.error(reason);
    
  });

const tagDivContainer = document.querySelector('.container');

const tagDivHeader = (amiibo, tagDiv) => {
  const tagImg = document.createElement('img');
  tagImg.src = amiibo.image;
  tagImg.alt = amiibo.name;
  tagImg.classList.add('size-image');
  tagDiv.appendChild(tagImg);  
};

const tagDivSection = (amiibo, tagDiv) => {
  const tagDivBody = document.createElement('div');
  const tagH2Serie = document.createElement('h2');
  tagH2Serie.innerText = amiibo.gameSeries;
  const tagLabelName = document.createElement('label');
  tagLabelName.innerText = amiibo.name;
  tagDivBody.appendChild(tagH2Serie);
  tagDivBody.appendChild(tagLabelName);
  tagDiv.appendChild(tagDivBody);
  tagDivBody.classList.add('div-body');  
}

const getAmiibo = (characterValue) => {
  const pAmiiboName =  fetch('http://www.amiiboapi.com/api/amiibo/?character=' + characterValue);
  
  pAmiiboName
  .then(function(data) {
    return data.json();
  })
  .then(function(objectDataCharacter) {
    const amiibos = objectDataCharacter.amiibo[0];
    console.log(amiibos);
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('size-div');
    let claseGameSeries = amiibos.gameSeries.replace(/ /g, '');
    claseGameSeries = claseGameSeries.replace(/\'/g, '');
    claseGameSeries = claseGameSeries.replace(/\!/g, '')
    tagDiv.classList.add(claseGameSeries);
    tagDivHeader(amiibos, tagDiv);
    tagDivSection(amiibos, tagDiv);
    tagDivContainer.appendChild(tagDiv);
  })
  .catch(function(reason) {
    console.error(reason);
  });
}


//Funciones
// let mifuncion = function soyFuncion(casa) {
//   console.log('casa');
//   return casa.json;
// }

// let miFuncion = (casa) => {
//   return casa.json;
// }

// let myFunction = casa => { casa.json;} // solo es para un parametro y no lleva el return


