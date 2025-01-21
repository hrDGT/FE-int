menuOpen = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector(".nav").style.display = "flex"
        document.querySelector(".header__burger").style.display = "none"
        document.querySelector(".header__cross").style.display = "block"
    }
}

menuClose = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector(".nav").style.display = "none"
        document.querySelector(".header__burger").style.display = "block"
        document.querySelector(".header__cross").style.display = "none"
    }
}



Promise.all([
    fetch("https://rickandmortyapi.com/api/character"),
    fetch('https://jsonplaceholder.typicode.com/todos')
])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => Reviews(data[0].results, data[1]))


function Reviews(clients, description) {
    const reviewsRow = document.querySelector('.reviews__row')
    console.log(description)
    for (i = 0; i < 3; i++) {
        reviewsRow.innerHTML = reviewsRow.innerHTML +
            `
        <div class="reviews__item">
            <div class="reviews__info">
                <img class="reviews__image" src="${clients[i].image}" alt="satisfied client">
                <p class="reviews__name">${clients[i].name}</p>
            </div>
            <p class="reviews__review">${description[i].title}</p>
        </div>
        `
    }
}