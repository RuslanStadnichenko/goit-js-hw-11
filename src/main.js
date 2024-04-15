import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (event) => {
  if (searchInput.value.trim() === '') {
    event.preventDefault();
    iziToast.error({
      title: 'Error',
      message: 'Enter a search name',
      position: 'topRight',
    });
  }
});
