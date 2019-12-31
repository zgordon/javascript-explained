import moment from "moment";
import "./index.css";

export default function accordion(data) {
  // Create the accordion markup
  let markup = `<div class="accordion">`;

  // Create the tab sections
  data.map(item => {
    const format = `MMM. Do, YYYY`;
    // const created = ;
    markup += `
      <section>  
        <h3>${item.name}</h3>
        <div class="content">          
          <p>${item.description}</p>
          <ul>
            <li>Is a Fork: ${item.fork.toString()}</li>
            <li>Created: ${moment(item.created_at).format(format)}</li>
            <li>Last Updated: ${moment(item.updated_at).format(format)}</li>
            <li>Stars: ${item.stargazers_count}</li>
            <li>Watches: ${item.watchers_count}</li>
            <li>Forks: ${item.forks_count}</li>
            <li>Open Issues: ${item.open_issues_count}</li>
            <li>Clone URL: ${item.clone_url}</li>
          </ul>
        </div>        
      </section>
    `;
  });

  // Close and return the tab markup
  markup += `</div>`;
  return markup;
}

export function init() {
  // Get all the tab groups
  const accordions = Array.from(document.querySelectorAll(`.accordion`));

  // Setup first tabs and section to be active
  accordions.map(accordion => {
    accordion.querySelector("section").classList.add(`active`);

    // Setup event listeners on accordion
    const sections = Array.from(
      accordion.querySelectorAll(".accordion section")
    );
    sections.map(section => {
      const title = section.querySelector(`h3`);
      title.addEventListener("click", handleAccordion.bind(section));
    });
  });
}

// Event listener for tabs
export function handleAccordion(e) {
  if (e) e.preventDefault();

  // Get the active section
  const id = this.dataset.id;
  const activeTabGroup = this.parentNode.parentNode;
  const activeSection = activeTabGroup.querySelector(`#${id}`);

  // Clear all active classes
  clearActive(activeTabGroup);

  // Make the new tab and section active
  this.classList.add(`active`);
  activeSection.classList.add(`active`);
}

// Clears all active classes from tabs and sections
function clearActive(tabGroup) {
  const sections = Array.from(tabGroup.querySelectorAll(`.accordion section`));
  sections.map(section => section.classList.remove("active"));
}
