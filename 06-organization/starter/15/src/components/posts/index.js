function Posts(posts) {
  let markup = `<ul id="posts">`;
  posts.forEach(post => (markup += `<li>${post.title}</li>`));
  markup += `</ul>`;
  return markup;
}

export default Posts;
