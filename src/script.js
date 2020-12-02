import { getData, clearTextField } from './getData.js';
import { SEARCH_BTN, SEARCH_FIELD, likeClass, 
        CLEAR_SEARCH_FIELD, SHOW_FAVORITES,
        SHOW_KEYBOARD, SWIPER } from './magicStrings.js';
import { mySwiper } from './slider.js';
import { showLikes, addToFavorite } from './swiper/favouritMovie.js';
import { showKeyboard } from './keyboard/keyboard.js';

window.onload = () => getData();
SEARCH_FIELD.focus();
let page = 1;

SEARCH_BTN.addEventListener('click', (event) => {
  event.preventDefault();
  getData(SEARCH_FIELD.value);
});

CLEAR_SEARCH_FIELD.addEventListener('click', () => {
  clearTextField();
});

SHOW_FAVORITES.addEventListener('click', () => {
  showLikes();
});

SHOW_KEYBOARD.addEventListener('click', () => {
  showKeyboard();
});

SWIPER.addEventListener('click', (event) => {
  if (event.target.closest(likeClass)) {
    addToFavorite(event.target);
  }
});

mySwiper.on('reachEnd', (event) => {
  getData(localStorage.requestWord, page += 1);  
});