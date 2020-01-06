import { state, setState } from "../../state";
// Import the Moment.js date library for easy formatting
import moment from "moment";

import "./index.css";

// Create the markup for the modal window
export function modal() {
  return `
  <div id="overlay">
    <div id="modal">
      <article>
        <h1></h1>
        <img src="" alt="" />
        <p class="description"></p>
        <p><em>Date Created: <span class="date"></span></em></p>
      </article>
      <button id="close" href="#">X</button>
      <button id="prev" href="#">&lt;</button>
      <button id="next" href="#">&gt;</button>
    </div>
  </div>
  `;
}

// A function for updating the modal window
// Uses content from current image in state
function updateModalContent() {
  // Get the current image from state
  const image = state.images[state.currentImage];

  // Create variables for easy reference
  const title = image.data[0].title;
  const url = image.links[0].href;
  const description = image.data[0].description_508;
  const date = moment(image.data[0].date_created).format(`MMM. Do, YYYY`);

  // Select the content areas from the modal
  const titleEl = document.querySelector(`#modal h1`);
  const imageEl = document.querySelector(`#modal img`);
  const descriptionEl = document.querySelector(`#modal .description`);
  const dateEl = document.querySelector(`#modal .date`);

  // Update the modal content areas
  titleEl.innerHTML = title;
  imageEl.src = url;
  imageEl.alt = title;
  descriptionEl.innerHTML = description;
  dateEl.innerHTML = date;
}

// A function to open the modal window
export function open() {
  // Add the modal to the page
  const container = document.querySelector(`#app`);
  container.insertAdjacentHTML("beforeend", modal());

  // Update the content for the modal
  updateModalContent();

  // Initialize the event listeners
  init();
}

function init() {
  // Add event listener for clicking on close button
  const closeBtn = document.querySelector(`#modal #close`);
  closeBtn.addEventListener("click", close);

  // Add event listener for clicking on overlay
  const overlay = document.querySelector(`#overlay`);
  overlay.addEventListener("click", handleCloseClick);

  // Add event listener for Escape keypress
  document.addEventListener("keyup", handleKeys);

  // Add event listeners to prev and next links
  const prev = document.querySelector(`#modal #prev`);
  const next = document.querySelector(`#modal #next`);

  prev.addEventListener(`click`, handlePrev);
  next.addEventListener(`click`, handleNext);
}

// Event handler for key presses
function handleKeys(event) {
  if (event.key === "Escape") close();
  if (event.key === "ArrowLeft") handlePrev();
  if (event.key === "ArrowRight") handleNext();
}

// Event handler for closing modal
function handleCloseClick(event) {
  // Check if clicked on overlay and not modal
  if (event.target.id == "overlay") {
    close();
  }
}

function handlePrev(event) {
  if (event) event.preventDefault();

  // Update state with correct image
  if (state.currentImage - 1 < 0) {
    setState(`currentImage`, state.images.length - 1);
  } else {
    setState(`currentImage`, state.currentImage - 1);
  }

  // Update the modal content
  updateModalContent();
}

function handleNext(event) {
  if (event) event.preventDefault();

  // Update state with correct image
  if (state.currentImage + 1 >= state.images.length) {
    setState(`currentImage`, 0);
  } else {
    setState(`currentImage`, state.currentImage + 1);
  }

  // Update the modal content
  updateModalContent();
}

// Function for closing the modal
function close() {
  // Select elements from page with event listeners
  const overlay = document.querySelector(`#overlay`);
  const prev = document.querySelector(`#modal #prev`);
  const next = document.querySelector(`#modal #next`);

  // Remove the entire modal and overlay
  overlay.remove();

  // Remove event listeners
  document.removeEventListener("keyup", handleKeys);
  overlay.removeEventListener("keyup", handleCloseClick);
  prev.removeEventListener(`click`, handlePrev);
  next.removeEventListener(`click`, handleNext);
}
