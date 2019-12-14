import config from "../../config";

export default function Header() {
  return `
    <header id="site-header">
      <p>${config.name}</p>
    </header>
  `;
}
