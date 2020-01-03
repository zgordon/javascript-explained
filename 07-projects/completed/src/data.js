import { state } from "./state";

export default function fetchImages() {
  const url = `https://images-api.nasa.gov/search?q=${state.searchTerm}&media_type=image`;
  return fetch(url)
    .then(res => res.json())
    .then(data => data.collection.items)
    .catch(error => console.error(error));
}
