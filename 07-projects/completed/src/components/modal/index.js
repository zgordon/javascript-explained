import { state, setState } from "../../state";
import moment from "moment";

import "./index.css";

export function modal() {
  let markup = `
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

  return markup;
}

function updateModalContent() {
  const image = state.images[state.currentImage];
  const title = image.data[0].title;
  const url = image.links[0].href;
  const description = stripHtml(image.data[0].description);
  const date = moment(image.data[0].date_created).format(`MMM. Do, YYYY`);

  const titleEl = document.querySelector(`#modal h1`);
  const imageEl = document.querySelector(`#modal img`);
  const descriptionEl = document.querySelector(`#modal .description`);
  const dateEl = document.querySelector(`#modal .date`);

  titleEl.innerHTML = title;
  imageEl.src = url;
  imageEl.alt = title;
  descriptionEl.innerHTML = description;
  dateEl.innerHTML = date;
}

export function open() {
  // Add the modal to the site
  const container = document.querySelector(`#app`);
  container.insertAdjacentHTML("beforeend", modal());

  // Update the content for the modal
  updateModalContent();

  // Initialize the event listeners
  init();
}

export function init() {
  // Add event listener for Escape keypress
  document.addEventListener("keyup", handleKeys);

  // Add event listener for clicking on overlay
  const closeBtn = document.querySelector(`#modal #close`);
  closeBtn.addEventListener("click", close);

  // Add event listener for clicking on overlay
  const overlay = document.querySelector(`#overlay`);
  overlay.addEventListener("click", handleCloseClick);

  // Add event listener to prev and next links
  const prev = document.querySelector(`#modal #prev`);
  const next = document.querySelector(`#modal #next`);

  prev.addEventListener(`click`, handlePrev);
  next.addEventListener(`click`, handleNext);
}

function handleKeys(event) {
  if (event.key === "Escape") close();
  if (event.key === "ArrowLeft") handlePrev();
  if (event.key === "ArrowRight") handleNext();
}

function handleCloseClick(event) {
  if (event.target.id == "overlay") {
    close();
  }
}

function handlePrev(event) {
  if (event) event.preventDefault();

  if (state.currentImage - 1 < 0) {
    setState(`currentImage`, state.images.length - 1);
  } else {
    setState(`currentImage`, state.currentImage - 1);
  }

  updateModalContent();
}

function handleNext(event) {
  if (event) event.preventDefault();

  if (state.currentImage + 1 >= state.images.length) {
    setState(`currentImage`, 0);
  } else {
    setState(`currentImage`, state.currentImage + 1);
  }

  updateModalContent();
}

function close() {
  const overlay = document.querySelector(`#overlay`);
  const prev = document.querySelector(`#modal #prev`);
  const next = document.querySelector(`#modal #next`);

  overlay.parentNode.removeChild(overlay);

  document.removeEventListener("keyup", handleKeys);
  overlay.removeEventListener("keyup", handleCloseClick);
  prev.removeEventListener(`click`, handlePrev);
  next.removeEventListener(`click`, handleNext);
}

function stripHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}
