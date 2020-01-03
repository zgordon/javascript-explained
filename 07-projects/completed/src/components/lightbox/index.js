import { state, setState } from "../../state";
import { open as openModal } from "../modal";

import "./index.css";

export default function lightbox() {
  let markup = `<div class="lightbox">`;
  state.images.forEach(image => {
    const url = image.links[0].href;
    const id = image.data[0].nasa_id;
    const date = image.data[0].date_created;
    const title = image.data[0].title;
    const description = image.data[0].description;
    markup += `<div class="thumbnail">
      <img 
        src="${url}" 
        alt="${title}" 
        data-description="${description}"
        data-id="${id}"
        data-created="${date}"
      />
    </div>`;
  });
  markup += `</div>`;
  return markup;
}

export function init() {
  const images = Array.from(document.querySelectorAll(`.lightbox img`));
  images.forEach(image => {
    image.addEventListener(`click`, openLightbox);
  });
}

export function openLightbox(event) {
  event.preventDefault();
  const currentImageIndex = getCurrentImageIndex(event.target);
  setState(`currentImage`, currentImageIndex);
  console.log(state.currentImage);
  openModal();
}

export function clearLightbox() {
  const lightbox = document.querySelector(`.lightbox`);
  if (lightbox) lightbox.remove();
}

function getCurrentImageIndex(image) {
  const images = Array.from(document.querySelectorAll(`.lightbox img`));

  let currentImageIndex = images
    .map(img => img.outerHTML)
    .findIndex(img => img == image.outerHTML);

  return currentImageIndex;
}
