import data from "../../data";
import config from "../../config";

export default function Post(id) {
  const post = data.find(post => id == post.id);

  let markup = `<article id="post">`;
  markup += `<h1>${post.title}</h1>`;
  markup += `<div>${post.content}</div>`;
  markup += `</article>`;

  document.querySelector(`#site-header`).insertAdjacentHTML(`afterend`, markup);
}

export function clearPost() {
  const post = document.querySelector(`#post`);
  if (post) post.parentElement.removeChild(post);
}
