document.getElementById("rollTheDiceBtn").addEventListener("click", startGame);

function startGame() {
  const throwDiceOne = getRandomNumOne();
  const throwDiceTwo = getRandomNumTwo();
  const totalScore = document.getElementById("totalScore");
  let diceTotal = throwDiceOne + throwDiceTwo;
  console.log(diceTotal);
  totalScore.innerHTML = `<span style='font-size: 40px; color: grey;'>total score is: ${diceTotal}</span>`;

  let imgTagOne = document.getElementById("diceImgOne");
  imgTagOne.src = `src/img/dice-${throwDiceOne}.png`;
  let imgTagTwo = document.getElementById("diceImgTwo");
  imgTagTwo.src = `src/img/dice-${throwDiceTwo}.png`;
  if (throwDiceOne == throwDiceTwo) {
    totalScore.innerHTML = `<span style='font-size: 40px; color: green;'>It's a pair!!</span>`;
  }
}

function getRandomNumOne() {
  return Math.ceil(Math.random() * 6);
}
function getRandomNumTwo() {
  return Math.ceil(Math.random() * 6);
}
