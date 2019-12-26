function Posts(posts) {
  let markup = `<ul id="posts">`;
  posts.forEach(
    post =>
      (markup += `<li><a data-id="${post.id}" href="#">${post.title}</a></li>`)
  );
  markup += `</ul>`;
  return markup;
}

export default Posts;
