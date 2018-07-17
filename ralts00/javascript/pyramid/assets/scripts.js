'use strict'

function contructorPyramidConsole(height) {
  for(let row = 1; row <= height; row++) {
    let withSpace = height - row;
    let space = ' ';
    let asterix = '*';
    let actualRow = '';
    for(let actualSpace = withSpace; actualSpace >= 1; actualSpace--) {
      actualRow = actualRow + space;
    }
    for(let actualAsterix = 1; actualAsterix <= (2*row - 1); actualAsterix++) {
      actualRow = actualRow + asterix;
    }
    for(let actualSpace = withSpace; actualSpace >= 1; actualSpace--) {
      actualRow = actualRow + space;
    }
    console.log(actualRow);
  }
}

contructorPyramidConsole(5);

function constructorPyramid(form) {
  let pyramidForm = Number(form.heightInput.value);
  const pyramid = document.querySelector('.pyramid');
  let pyramidDone = '';
  for(let row = 1; row <= pyramidForm; row++) {
    const block = '<span class="block"></span>';
    let actualRow = '';
    for(let actualBlock = 1; actualBlock <= row; actualBlock++) {
      actualRow = actualRow + block;
    }
    pyramidDone += '<div class="step">' + actualRow + '</div>';
  }
  pyramid.innerHTML = pyramidDone;
}

//Piramide en clase

