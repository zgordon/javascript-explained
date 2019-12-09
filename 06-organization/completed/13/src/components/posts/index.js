var posts = [
  {
    title: `Hello JavaScript`
  },
  {
    title: `Hello Code Organization`
  },
  {
    title: `Hello Tooling!`
  }
];

function Posts() {
  let markup = `<ul>`;
  posts.forEach(post => (markup += `<li>${post.title}</li>`));
  markup += `</ul>`;
  return markup;
}

export default Posts;
