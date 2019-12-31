import "./index.css";

export default function profile(data) {
  const markup = `
  <div class="profile">
    <img src="${data.avatar_url}" alt="Avatar for ${data.name}">
    <h1>${data.name}</h1>
    <p><a href="${data.html_url}">${data.html_url}</a></p>
  </div>
  `;
  return markup;
}
