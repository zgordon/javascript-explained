import config from "../../config";

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
  console.log(`Go Home!`);
}
