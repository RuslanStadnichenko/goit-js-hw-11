import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { requestServer } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');
const listGallery = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');


searchForm.addEventListener('submit', (event) => {

  event.preventDefault();


  if (searchInput.value.trim() === '') {
    event.preventDefault();
    iziToast.error({
      message: 'Enter a search name',
      position: 'topRight',
    });
    listGallery.innerHTML = '';
    return;
  }
})