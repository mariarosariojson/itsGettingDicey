document.getElementById("rollTheDiceBtn").addEventListener("click", startGame);

// let inputNumber = getElementById(inputNumber);
// inputNumber;

function startGame() {
  const throwDiceOne = getRandomNumOne();
  const throwDiceTwo = getRandomNumTwo();

  let imgTagOne = document.getElementById("diceImgOne");
  imgTagOne.src = `src/img/dice-${throwDiceOne}.png`;
  let imgTagTwo = document.getElementById("diceImgTwo");
  imgTagTwo.src = `src/img/dice-${throwDiceTwo}.png`;
}

function getRandomNumOne() {
  return Math.ceil(Math.random() * 6);
}

function getRandomNumTwo() {
  return Math.ceil(Math.random() * 6);
}
