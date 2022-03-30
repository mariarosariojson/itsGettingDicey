// document.getElementById("rollTheDiceBtn").addEventListener("click", startGame);

function startGame() {
  const throwDiceOne = getRandomNumOne();
  const throwDiceTwo = getRandomNumTwo();
  const totalScore = document.getElementById("totalScore");
  const gameStatus = document.getElementById("gameStatus");
  let diceTotal = throwDiceOne + throwDiceTwo;
  console.log(`total score: ${diceTotal}`);
  totalScore.innerHTML = `<span style='font-size: 40px; color: grey;'>total score is: ${diceTotal}</span>`;

  let imgTagOne = document.getElementById("diceImgOne");
  imgTagOne.src = `src/img/dice-${throwDiceOne}.png`;
  let imgTagTwo = document.getElementById("diceImgTwo");
  imgTagTwo.src = `src/img/dice-${throwDiceTwo}.png`;
  
  if(inputNumber.value == diceTotal) {
      console.log(`KNOCK-OUT!`);
    totalScore.innerHTML = `<span style='font-size: 40px; color: red;'>KNOCK OUT!!!</span>`;
    gameStatus.innerHTML = `Sorry, you're out 👎`;
  } else {
      gameStatus.innerHTML = `<span style='font-size: 18px; color: green;'>You're good, Go again! 🎉</span>`;
  }
}

function getRandomNumOne() {
  return Math.ceil(Math.random() * 6);
}
function getRandomNumTwo() {
  return Math.ceil(Math.random() * 6);
}
function reload() {
  window.location.reload();
}
