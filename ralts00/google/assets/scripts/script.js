'use strict'

function toGoogle(form) {
  let searchText = form.search.value
  searchText = searchText.replace(/\s/g, '%20');
  location.href = 'https://www.google.com.mx/search?q=' + searchText;
}


function toLucky(form) {
  let searchText = form.search.value
  searchText = searchText.replace(/\s/g, '%20');
  location.assign('http://google.com/search?&btnI=1&q=' + searchText);
}

const search = document.querySelector('#seach-input');

search.addEventListener('keypress', function(event) {

  if(event.keyCode == 13) {
    event.preventDefault();
    const searchText = event.target.form;
    toGoogle(searchText);
  }
});
