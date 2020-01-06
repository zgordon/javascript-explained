import search, { init as initSearch } from "./components/search";
import "./index.css";

function init() {
  const markup = search();
  document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);

  initSearch();
}
init();
