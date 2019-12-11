import data from "./data";
import Header from "./components/header";
import Posts, { initPosts } from "./components/posts";

const container = document.querySelector(`#app`);
let markup = Header();
markup += Posts(data);

container.insertAdjacentHTML(`beforeend`, markup);

initPosts();
