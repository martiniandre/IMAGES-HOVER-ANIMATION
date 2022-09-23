const cards = document.querySelector('.cards')
const searchInput = document.querySelector('input')

let characters = []

async function fetchData() {
    const response =  await fetch("https://breakingbadapi.com/api/characters")
    return await response.json();
}


function createCards (characters) {
    characters.forEach(character => {
        renderCards(character)
    })
}

function renderCards(character) {
    const cardHTML = `
    <div class="card first-card" style="background-image: url(${character.img})">

        <h1>${character.name}</h1>
    </div>
    `

    cards.insertAdjacentHTML("beforeend",cardHTML)
}

async function onLoad() {
    characters = await fetchData()
    createCards(characters)
}

document.onloadstart = onLoad()
console.log(characters)



