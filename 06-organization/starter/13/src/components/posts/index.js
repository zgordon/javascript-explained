const posts = [
    {
        title: `Hello JavaScript`
    },
    {
        title: `Hello Code Organization`
    },
    {
        title: `Hello Tooling!`
    }
];

export default function Posts() {
    let markup = `<ul>`;
    posts.forEach(element => {
        markup += `<li>${element.title}</li>`
    });
    markup += `</ul>`;
    return markup;
}