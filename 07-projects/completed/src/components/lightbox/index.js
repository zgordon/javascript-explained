import { state, setState } from "../../state";
import { open as openModal } from "../modal";

import "./index.css";

// Main function for creating lighbox modal
export default function lightbox() {
  // Create markup for lightbox
  let markup = `<div class="lightbox">`;

  // Iterate over images in state
  state.images.forEach(image => {
    const url = image.links[0].href;
    const title = image.data[0].title;
    markup += `<div class="thumbnail">
      <img src="${url}" alt="${title}" />
    </div>`;
  });

  // Close markup
  markup += `</div>`;

  // Return lightbox markup
  return markup;
}

// Function for initializing lightbox
export function init() {
  // Select images from the page
  const images = Array.from(document.querySelectorAll(`.lightbox img`));

  // Add event listeners to each modal
  images.forEach(image => {
    image.addEventListener(`click`, openLightbox);
  });
}

// Function for opening the modal
// Main function to be called to add modal to page
export function openLightbox(event) {
  event.preventDefault();
  // Get the current image index based on image clicked
  const currentImageIndex = getCurrentImageIndex(event.target);
  // Update the state for current image
  setState(`currentImage`, currentImageIndex);
  // Open the modal
  openModal();
}

// Function for removing the lightbox
export function clearLightbox() {
  const lightbox = document.querySelector(`.lightbox`);
  // Make sure lightbox exists before removing it
  if (lightbox) lightbox.remove();
}

// Helper function for getting index of current image
function getCurrentImageIndex(image) {
  // Get all images
  const images = Array.from(document.querySelectorAll(`.lightbox img`));

  let currentImageIndex = images
    // Go through each image and get markup for entire image
    .map(img => img.outerHTML)
    // Compare markup to current image markup
    .findIndex(img => img == image.outerHTML);

  // Return the index for current image
  return currentImageIndex;
}
