import config from "../../config";
import data from "../../data";
import Post from "../post";

export default function Posts() {
  let markup = `<ul id="posts">`;
  data.forEach(
    post =>
      (markup += `<li><a data-id="${post.id}" href="#">${post.title}</a></li>`)
  );
  markup += `</ul>`;

  clearPosts();
  config.container.insertAdjacentHTML(`afterend`, markup);
  initPosts();
}

export function initPosts() {
  const posts = document.querySelectorAll(`#posts a`);
  posts.forEach(post => post.addEventListener(`click`, showPost));
}

function showPost(e) {
  e.preventDefault();
  clearPosts();
  Post(this.dataset.id);
}

export function clearPosts() {
  const posts = document.querySelector(`#posts`);
  if (posts) posts.parentElement.removeChild(posts);
}
