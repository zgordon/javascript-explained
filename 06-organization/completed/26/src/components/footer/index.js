import config from "../../config";

export default function Footer() {
  const markup = `
    <footer id="site-footer">
      <p>${config.name}</p>
    </header>
  `;
  config.container.insertAdjacentHTML(`beforeend`, markup);
}
