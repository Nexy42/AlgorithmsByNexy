//spinGame you can run the code and test it :)

const line1 = [1, 2, 3, 4, 5];
const line2 = [1, 2, 3, 4, 5];
const line3 = [1, 2, 3, 4, 5];

//To generate a random Number between 1-5
function spinTheReels() {
  return [
    line1[Math.floor(Math.random() * line1.length)],
    line2[Math.floor(Math.random() * line2.length)],
    line3[Math.floor(Math.random() * line3.length)],
  ];
}

//Here we check if the leftmost number - second number AND the leftmost number and the last number are the same
function checkWin(spinResult) {
  return spinResult[0] === spinResult[1] && spinResult[0] === spinResult[2];
}

function performSpinsAndCheckWins() {
  let winCount = 0;
  let spinsResult = [];
  //Here we generate one array in spinTheReels() function, we increase it to three with this for loop
  //checkWin() function to test if three numbers are next to each other
  for (let i = 0; i < 3; i++) {
    const spinResult = spinTheReels();
    console.log(`${i + 1}:`, spinResult);
    spinsResult.push(spinResult);
    if (checkWin(spinResult)) {
      winCount++;
    }
  }

  if (winCount > 0) {
    console.log("Kazandiniz! 🍾🍾🍾");
  } else {
    console.log("Tekrar cevir! 😊");
  }
}

performSpinsAndCheckWins();
