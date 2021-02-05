import Header from "./components/header";
import Posts from "./components/header"

const container = document.querySelector(`#app`);
let markup = Header();

container.insertAdjacentHTML(`beforeend`, markup);
