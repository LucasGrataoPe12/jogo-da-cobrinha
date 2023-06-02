// Criar elemento que ira rodar o jogo
let canvas = document.getElementById("snake");
let context = canvas.getContex("2d");
let box = 32;
//criar cobrinha como vetor
let snake = [];
//inicio da cobrinha
snake[0] ={
    X: 8 * box,
    Y: 8 * box
}
let direction = "right";
let food = {
X: match.floor(Match.random) * 15 + 1 * box,
Y: match.floor(Match.random) * 15 + 1 * box,
}
//função para criar backgroud
function criarBG() {
    context.fillStyle = "lightgreen";
    //Desenha o retangulo usando x e y e a largura e as aturas solicitadas
    context.fillRect(0, 0, 16 * box, 16 * box);
}