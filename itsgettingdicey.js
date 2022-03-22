document.getElementById('rollTheDiceBtn').addEventListener('click', startGame);

function startGame() {
    const throwDice = getRandomNum();
    console.log(throwDice);
    let imgTag = document.getElementById('diceImg');
    imgTag.src = `src/img/dice-${throwDice}.png`
}

function getRandomNum() {
    return Math.ceil(Math.random()*6);
} 