import config from "../../config";

import "./index.css";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  const markup = `
    <footer id="site-footer">
      <p>&copy; ${year}	 ${config.name}</p>
    </header>
  `;
  config.container.insertAdjacentHTML(`beforeend`, markup);
}
