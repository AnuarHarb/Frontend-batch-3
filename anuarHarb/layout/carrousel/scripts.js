'use strict';

const preview = document.querySelector('.preview');
const next = document.querySelector('.next');
const carrouselImages = document.querySelectorAll('.carrousel__image');
const dots = document.querySelectorAll('.dot');

preview.addEventListener('click', previewImage);
next.addEventListener('click', nextImage);

for(const dot of dots) {
  dot.addEventListener('click', specificImage);
}

function specificImage(event) {
  const activeImage = getActiveImage();
  const newImage = event.target.getAttribute('data-target');
  for(const image of carrouselImages){
    if(image.getAttribute('data-target') == activeImage){
      image.classList.remove('active');
    }

    if(image.getAttribute('data-target') == newImage) {
      image.classList.add('active');
    }
  }
}

function nextImage() {
  const activeImage = getActiveImage();
  const nextImageNumber = Number(activeImage) + 1;
  if(activeImage >= carrouselImages.length - 1) {
    carrouselImages[0].classList.add('active');
  }
  for(const image of carrouselImages){
    if(image.getAttribute('data-target') == activeImage){
      image.classList.remove('active');
    }

    if(image.getAttribute('data-target') == nextImageNumber) {
      image.classList.add('active');
    }
  }
}

function previewImage() {
  const activeImage = getActiveImage();
  const previewImageNumber = Number(activeImage) - 1;
  if(activeImage <= 0) {
    carrouselImages[carrouselImages.length - 1].classList.add('active');
  }
  for(const image of carrouselImages){
    if(image.getAttribute('data-target') == activeImage){
      image.classList.remove('active');
    }

    if(image.getAttribute('data-target') == previewImageNumber) {
      image.classList.add('active');
    }
  }
}

function getActiveImage() {
  for(const image of carrouselImages) {
    if(image.classList.contains('active')){
      return image.getAttribute('data-target');
    }
  }
}
