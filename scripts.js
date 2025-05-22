let body = document.querySelector("body")
let tenis = document.querySelector(".tenis-image")

function mudarVisual(cor) {
    body.style.background = cor
}

function trocaImagem(imagem) {
    tenis.src = imagem 
}