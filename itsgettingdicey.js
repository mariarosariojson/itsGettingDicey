// document.getElementById("rollTheDiceBtn").addEventListener("click", startGame);

function startGame() {
  const throwDiceOne = getRandomNumOne();
  const throwDiceTwo = getRandomNumTwo();
  const totalScore = document.getElementById("totalScore");
  let diceTotal = throwDiceOne + throwDiceTwo;
  console.log(`total score: ${diceTotal}`);
  totalScore.innerHTML = `<span style='font-size: 40px; color: grey;'>total score is: ${diceTotal}</span>`;

  let imgTagOne = document.getElementById("diceImgOne");
  imgTagOne.src = `src/img/dice-${throwDiceOne}.png`;
  let imgTagTwo = document.getElementById("diceImgTwo");
  imgTagTwo.src = `src/img/dice-${throwDiceTwo}.png`;

  if (inputNumber.value == diceTotal) {
    console.log(`It's a MATCH`);
    inputNumber.value.innerHTML = `<span style='font-size: 40px; color: green;'>It's a pair!!</span>`;
  } else {
    console.log(`It's NOT a match`);
  }
}

function getRandomNumOne() {
  return Math.ceil(Math.random() * 6);
}
function getRandomNumTwo() {
  return Math.ceil(Math.random() * 6);
}
