import search, { init as initSearch } from "./components/search";
import "./index.css";

async function init() {
  let markup = ``;
  markup += search();
  document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);

  initSearch();
}
init();
