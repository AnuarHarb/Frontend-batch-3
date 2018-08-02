'use strict';

const nextButton = document.querySelector('.next');
const previewButton = document.querySelector('.preview');
const carrouselImages = document.querySelectorAll('.carrousel__picture');

nextButton.addEventListener('click', nextImage);
previewButton.addEventListener('click', previewImage);

// setInterval(nextImage, 1000);


function nextImage() {
  let nextPosition;
  const activePosition = getActiveImage();
  nextPosition = Number(activePosition) + 1;
  if(nextPosition > carrouselImages.length - 1) {
    nextPosition = 0;
  }
  carrouselImages[nextPosition].classList.add('active');
}

function previewImage() {
  let previewPosition;
  const activePosition = getActiveImage();
  previewPosition = Number(activePosition) - 1;
  if(previewPosition < 0) {
    previewPosition = carrouselImages.length - 1;
  }
  carrouselImages[previewPosition].classList.add('active');
}

function getActiveImage() {
  for(const image of carrouselImages) {
    if(image.classList.contains('active')) {
      const activePosition = image.getAttribute('data-position');
      carrouselImages[activePosition].classList.remove('active');
      return activePosition;
    }
  }
}
