import config from "../../config";

function Header() {
  return `<h1>${config.name}</h1>`;
}

export default Header;
