import Button from "./components/button";

import "./index.css";

const container = document.querySelector(`#app`);
let markup = ``;

markup += Button();

container.insertAdjacentHTML(`beforeend`, markup);
