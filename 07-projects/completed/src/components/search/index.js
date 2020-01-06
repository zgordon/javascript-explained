import { state, setState } from "../../state";
import fetchImages from "../../data";
import lightbox, { init as initLightbox, clearLightbox } from "../lightbox";

import "./index.css";

// Create the markup for the search component
export default function search() {
  return `
    <h1>Search NASA Photos</h1>
    <form name="search" id="search">
      <p><label for="search-field">Enter Search Term Below:</label></p>
      <input id="search-field" name="search" type="search" />
      <input type="submit" id="submit" value="Search" />
    </form>
  `;
}

// Initialize the seach form
export function init() {
  const search = document.querySelector(`#search`);
  search.addEventListener(`submit`, doSearch);
}

// Make the search an async function
async function doSearch(event) {
  event.preventDefault();
  // Clear the lighbox if images already loaded
  clearLightbox();

  // Get the search term from the search field
  const term = document.querySelector(`#search-field`).value.toLowerCase();
  // Update the state with the search term
  setState(`searchTerm`, term);

  // Get the images and update state
  const images = await fetchImages();
  setState(`images`, images);

  // Check for images
  if (state.images.length === 0) {
    // Display a message if no results
    alert(`There are no results for "${state.searchTerm}"`);
    // Reset state for search term to null
    setState(`searchTerm`, null);
    // Reset the search field
    document.querySelector(`#search-field`).value = state.searchTerm;
  } else {
    // Get the markup for the lightbox
    const markup = lightbox();
    // Load the lightbox on the page
    document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
    // Initialize the lightbox
    initLightbox();
  }
}
