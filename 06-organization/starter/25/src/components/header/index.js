import config from "../../config";
import Posts from "../posts";

export default function Header() {
  const markup = `
    <header id="site-header">
      <p><a href="#">${config.name}</a></p>
    </header>
  `;
  config.container.insertAdjacentHTML(`afterbegin`, markup);

  initHeader();
}

export function initHeader() {
  const headerLink = document.querySelector(`#site-header a`);
  headerLink.addEventListener(`click`, goHome);
}

function goHome(e) {
  e.preventDefault();
  Posts();
}
