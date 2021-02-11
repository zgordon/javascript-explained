import posts from "../../data.js";

function Posts(posts) {
  let markup = `<ul>`;
  posts.forEach(post => (markup += `<li>${post.title}</li>`));
  markup += `</ul>`;
  return markup;
}

export default Posts;
