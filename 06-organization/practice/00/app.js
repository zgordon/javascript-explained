import config from "./config";
import posts from "./posts";

function init() {
  let markup = `<h1>Welcome to ${config.name}</h1>`;
  markup += `<h2>Posts</h2>`;
  markup += `<ul>`;
  posts.forEach(post => (markup += `<li>${post.title}</li>`));
  markup += `</ul>`;
  document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
}
init();
