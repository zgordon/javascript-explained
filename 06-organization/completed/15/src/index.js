import data from "./data";
import Header from "./components/header/index";
import Posts from "./components/posts/index";

const container = document.querySelector(`#app`);
let markup = Header();
markup += Posts(data);

container.insertAdjacentHTML(`beforeend`, markup);
