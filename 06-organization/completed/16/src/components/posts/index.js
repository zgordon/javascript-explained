function Post(postId) {
  console.log(postId);
  let markup = `<article id="post">`;
  markup += `<h1>${post.title}</h1>`;
  markup += `<div>${post.content}</div>`;
  markup += `</article>`;
  return markup;
}

export function initPosts() {
  const posts = document.querySelectorAll(`#posts a`);
  posts.forEach(post => post.addEventListener(`click`, showPost));
}

function showPost(e) {
  e.preventDefault();
  console.log(this.innerText);
}

export default Post;
