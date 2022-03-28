document.getElementById('rollTheDiceBtn').addEventListener('click', startGame);

let inputNumber = getElementById(inputNumber);
inputNumber

function startGame() {
    const throwDice = getRandomNum();
    let imgTag = document.getElementById('diceImg');
    imgTag.src = `src/img/dice-${throwDice}.png`
}

function getRandomNum() {
    return Math.ceil(Math.random()*6);
} 