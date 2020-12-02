import { TEMP, likeClass, likeAdded, movieCardClass, swiperSlidedClass, ERROR_MSG, noFavourites, clear } from "../magicStrings.js";
import { mySwiper } from "../slider.js";

let likes = new Map();

export async function showLikes() {

    if (likes.size > 0) {
        TEMP.innerHTML = '';

        for (const movie of likes.values()) {
            TEMP.prepend(movie);
            mySwiper.update();
        }   
    } else {
        ERROR_MSG.innerHTML = noFavourites;
        setTimeout(() => ERROR_MSG.innerHTML = clear, 5000);
    }
}

export function addToFavorite(element) {
    element.closest(likeClass).classList.toggle(likeAdded);

    let movie = element.closest(likeClass).closest(movieCardClass);

    if (likes.has(movie.id)) {
        likes.delete(movie.id);
    } else {
        likes.set(movie.id, element.closest(swiperSlidedClass));
    }
}