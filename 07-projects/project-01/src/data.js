import { username } from "./config";

export function fetchUser() {
  const url = `https://api.github.com/users/${username}`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.error(error));
}

export function fetchRepos() {
  const url = `https://api.github.com/users/${username}/repos`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.error(error));
}
