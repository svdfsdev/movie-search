import {
  ERROR_MSG,
  TEMP,
  clear,
  SEARCH_FIELD,
  errorNotFound,
  msgNoResults,
  msgError,
  SPINNER,
  hiddenClass,
  falseResponse,
  omdbApiKey,
  resultsFor,
} from './magicStrings.js';
import { mySwiper } from './slider.js';

export async function getData(word = 'war', page = 1) {
  showSpinner();
  localStorage.requestWord = word;

  const omdbURLrequest = `https://www.omdbapi.com/?s=${word}&page=${page}&apikey=${omdbApiKey}`;

  const movies = await fetch(omdbURLrequest).then((response3) =>
    response3.json()
  );

  if (movies.Response !== falseResponse) {
    if (page === 1) {
      TEMP.innerHTML = clear;
    }
    if (word !== word) {
      ERROR_MSG.innerHTML = resultsFor + response2.text[0];
    } else {
      ERROR_MSG.innerHTML = clear;
    }

    movies.Search.forEach(async (element) => {
      const movieInfoUrl = `https://www.omdbapi.com/?i=${element.imdbID}&apikey=${omdbApiKey}`;
      const movieInfo = await fetch(movieInfoUrl).then((response) =>
        response.json()
      );

      const movieCardHtml = `<div class="swiper-slide card">
                                  <div class="movieCard" id="${movieInfo.Title}">
                                    <a href="http://www.imdb.com/title/${movieInfo.imdbID}/" class="movie-card-text title-movie-card" target="_blank">${movieInfo.Title}</a>
                                    <a href="http://www.imdb.com/title/${movieInfo.imdbID}/" target="_blank">
                                      <img class="poster-movie" src="${movieInfo.Poster}" alt="movie poster">
                                    </a>
                                    <p class="movie-card-text">${movieInfo.Year}</p>
                                    <span class="movie-card-text"><i class="fa fa-star" aria-hidden="true"></i> ${movieInfo.imdbRating}</span>
                                    <span class="like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                                  </div>
                                </div>`;

      TEMP.insertAdjacentHTML('beforeend', movieCardHtml);
      mySwiper.update();
    });
  } else {
    ERROR_MSG.innerHTML =
      movies.Error === errorNotFound
        ? msgNoResults + SEARCH_FIELD.value
        : msgError + movies.Error;
  }

  showSpinner();
}

export function clearTextField() {
  SEARCH_FIELD.value = clear;
  ERROR_MSG.innerHTML = clear;
}

function showSpinner() {
  SPINNER.classList.toggle(hiddenClass);
}
