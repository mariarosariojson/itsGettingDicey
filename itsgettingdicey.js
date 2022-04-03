function getRandomNumOne() {
  return Math.ceil(Math.random() * 6);
}
function getRandomNumTwo() {
  return Math.ceil(Math.random() * 6);
}

function startGame() {
  let throwDiceOne = getRandomNumOne();
  let throwDiceTwo = getRandomNumTwo();
  const totalScore = document.getElementById("totalScore");
  const gameStatus = document.getElementById("gameStatus");
  let diceTotal = throwDiceOne + throwDiceTwo;

  totalScore.innerHTML = `<span style='font-size: 40px; color: grey;'>
  total is: ${diceTotal}</span>`;

  let imgTagOne = document.getElementById("diceImgOne");
  imgTagOne.src = `src/img/dice-${throwDiceOne}.png`;
  let imgTagTwo = document.getElementById("diceImgTwo");
  imgTagTwo.src = `src/img/dice-${throwDiceTwo}.png`;

  if (inputNumber.value == diceTotal) {
    totalScore.innerHTML = `<span style='font-size: 60px; color: red;'>KNOCK OUT!!!</span>`;
    gameStatus.innerHTML = `Sorry, you got ${diceTotal} 👎 <br/>Click Go again to start a new game.`;
  } else {
    gameStatus.innerHTML = `<span style='font-size: 18px; color: green;'>🎉<br/>Roll the dice again! </span>`;
  }
}

function reload() {
  window.location.reload();
}
