import { state } from "./state";

export default function fetchImages() {
  // URL for the NASA Photo API
  const url = `https://images-api.nasa.gov/search?q=${state.searchTerm}&media_type=image`;

  // Return a Promise so can be used with await
  return fetch(url)
    .then(res => res.json())
    .then(data => data.collection.items)
    .catch(error => console.error(error));
}
