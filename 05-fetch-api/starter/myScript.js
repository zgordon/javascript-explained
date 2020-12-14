const url = `https://dog.ceo/api/breeds/image/random`;

async function init() {
    loadSpinner();
    const data = await getRandomDogPhoto();
    removeSpinner();
    renderDogPhoto(data.message);
}

function getRandomDogPhoto() {
    return (
        fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error))
    );
}

function renderDogPhoto(photo_url) {
    const img = `<img src="${photo_url}" alt="Photo of a dog" />`;
    document.querySelector(`#container`).insertAdjacentHTML(`beforeend`, img);
}

function loadSpinner() {
    const spinner = `../assets/loader.svg`;
    const img = `<img src="${spinner}" id="spinner" alt="Loading spinner image" />`;
    document.querySelector(`#container`).insertAdjacentHTML(`beforeend`, img);
}

function removeSpinner() {
    const spinner = document.querySelector(`img#spinner`);
    spinner.parentElement.removeChild(spinner);
}

init();