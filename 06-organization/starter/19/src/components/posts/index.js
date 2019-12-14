import Post from "../post";

function Posts(posts) {
  let markup = `<ul id="posts">`;
  posts.forEach(
    post =>
      (markup += `<li><a data-id="${post.id}" href="#">${post.title}</a></li>`)
  );
  markup += `</ul>`;
  return markup;
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

function clearPosts() {
  const posts = document.querySelector(`#posts`);
  posts.parentElement.removeChild(posts);
}
export default Posts;
