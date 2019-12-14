function Posts(posts) {
  let markup = ``;
  posts.forEach(post => (markup += `${post.title}`));
  return markup;
}

export default Posts;
