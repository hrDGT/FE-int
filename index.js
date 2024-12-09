menuOpen = () => {
    document.querySelector(".nav").style.display = "flex"
    document.querySelector(".header__burger").style.display = "none"
    document.querySelector(".header__cross").style.display = "block"
}

menuClose = () => {
    document.querySelector(".nav").style.display = "none"
    document.querySelector(".header__burger").style.display = "block"
    document.querySelector(".header__cross").style.display = "none"
}