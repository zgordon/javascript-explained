import Header from "./components/header";
import Posts from "./components/posts";

const container = document.querySelector(`#app`);
let markup = Header();
markup += Posts();

container.insertAdjacentHTML(`beforeend`, markup);
