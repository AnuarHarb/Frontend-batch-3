'use strict'

function toGoogle(form) {
  let searchText = form.searchInput.value
  searchText = searchText.replace(/\s/g, '%20');
  window.location.href = 'https://www.google.com.mx/search?q=' + searchText;
}


function toLucky(form) {
  let searchText = form.searchInput.value
  searchText = searchText.replace(/\s/g, '%20');
  window.location.href = 'http://google.com/search?&btnI=1&q=' + searchText;
}

const search = document.querySelector('#searchInput');

search.addEventListener('keypress', function(event) {

  if(event.keyCode == 13) {
    event.preventDefault();
    const searchText = event.target.form;
    toGoogle(searchText);
  }
});