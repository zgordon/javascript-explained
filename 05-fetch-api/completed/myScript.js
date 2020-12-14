// const url = `https://dog.ceo/api/breeds/image/random`;
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const img = `<img src="${data.message}" alt="Random photo of a dog" />`;
//     document
//       .querySelector(`#container`)
//       .insertAdjacentHTML(`beforeend`, img);
//   })
//   .catch(error => console.error(error));

const url = `https://dog.ceo/api/breeds/image/random`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const img = `<img src="${data.message}" alt="Random photo of a dog" />`;
        document
            .querySelector(`#container`)
            .insertAdjacentHTML(`beforeend`, img);
    })
    .catch(error => console.error(error));
