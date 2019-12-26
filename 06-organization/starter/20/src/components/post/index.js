import data from "../../data";

function Post(id) {
  const post = data.find(post => id == post.id);
  console.log(post);
}

export default Post;
