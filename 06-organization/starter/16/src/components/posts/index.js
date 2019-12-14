function Post(postId) {
  console.log(postId);
  let markup = `<article id="post">`;
  markup += `<h1>${post.title}</h1>`;
  markup += `<div>${post.content}</div>`;
  markup += `</article>`;
  return markup;
}

export default Post;
