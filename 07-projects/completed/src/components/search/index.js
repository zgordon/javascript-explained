import { state, setState } from "../../state";
import fetchImages from "../../data";
import lightbox, { init as initLightbox, clearLightbox } from "../lightbox";

import "./index.css";

export default function search(term) {
  return `
    <h1>Search NASA Photos</h1>
    <form name="search" id="search">
      <p><label for="search-field">Enter Search Term Below:</label></p>
      <input id="search-field" name="search" type="search" />
      <input type="submit" id="submit" value="Search" />
    </form>
  `;
}

export function init() {
  const search = document.querySelector(`#search`);
  search.addEventListener(`submit`, doSearch);
}

async function doSearch(event) {
  event.preventDefault();
  clearLightbox();

  const term = document.querySelector(`#search-field`).value.toLowerCase();
  setState(`searchTerm`, term);

  const images = await fetchImages();
  setState(`images`, images);

  if (state.images.length === 0) {
    alert(`There are no results for "${state.searchTerm}"`);
    setState(`searchTerm`, null);
    document.querySelector(`#search-field`).value = state.searchTerm;
  } else {
    const markup = lightbox();
    document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
    initLightbox();
  }
}
