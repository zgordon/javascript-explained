import profile from "./components/profile";
import accordion, { init as initAccordion } from "./components/accordion";
import { fetchUser, fetchRepos } from "./data";
import "./index.css";

async function init() {
  const user = await fetchUser();
  const repos = await fetchRepos();
  console.table(user);

  let markup = ``;
  markup += profile(user);
  markup += accordion(repos);
  document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
  // data.forEach(repo => console.log(  ))

  initAccordion();
}
init();
