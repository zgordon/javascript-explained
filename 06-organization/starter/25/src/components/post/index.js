import data from "../../data";

export default function Post(id) {
  const container = document.querySelector(`#app`);
  const post = data.find(post => id == post.id);

  let markup = `<article id="post">`;
  markup += `<h1>${post.title}</h1>`;
  markup += `<div>${post.content}</div>`;
  markup += `</article>`;

  container.insertAdjacentHTML(`beforeend`, markup);
}
