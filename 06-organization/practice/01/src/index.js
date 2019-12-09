import config from "./config";
import data from "./data";

function init() {
  let markup = `<h1>Welcome to ${config.name}</h1>`;
  markup += `<h2>Posts</h2>`;
  markup += `<ul>`;
  data.forEach(post => (markup += `<li>${post.title}</li>`));
  markup += `</ul>`;
  document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
}
init();
