const CARDS = [
    {
      code: "B4",
      image: "./blueFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "B3",
      image: "./blueThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "B2",
      image: "./blueTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "B1",
      image: "./blueOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "B0",
      image: "./blueZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "BSkip",
      image: "./blueSkip.png",
      value: 20,
      suit: "Numbers",
    },
    {
      code: "G4",
      image: "./greenFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "G3",
      image: "./greenThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "G2",
      image: "./greenTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "G1",
      image: "./greenOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "G0",
      image: "./greenZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "GSkip",
      image: "./greenSkip.png",
      value: 20,
      suit: "Numbers",
    },
    {
      code: "RSkip",
      image: "./redSkip.png",
      value: 20,
      suit: "Numbers",
    },
    {
      code: "R4",
      image: "./redFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "R3",
      image: "./redThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "R2",
      image: "./redTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "R1",
      image: "./redOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "R0",
      image: "./redZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "Y0",
      image: "./yellowZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "Y1",
      image: "./yellowOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "Y2",
      image: "./yellowTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "Y3",
      image: "./yellowThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "Y4",
      image: "./yellowFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "YSkip",
      image: "./yellowSkip.png",
      value: 20,
      suit: "Numbers",
    },
  ];
  function getRandom() {
    return CARDS[Math.floor(Math.random() * CARDS.length)];
  }
  function game() {
    let player1 = getRandom();
    const player1Img = document.createElement("img");
    player1Img.src = player1.image;
    player1Img.style.width = "30%";
    player1Img.style.marginTop = "50px";
    const playerValue = player1.value;
    document.querySelector("#deck-of-cards-player").appendChild(player1Img);
    console.log(playerValue);
    let player2 = getRandom();
    const player2Img = document.createElement("img");
    player2Img.src = player2.image;
    player2Img.style.width = "30%";
    player2Img.style.marginTop = "50px";
    const cpuValue = player2.value;
    document.querySelector("#deck-of-cards-cpu").appendChild(player2Img);
    console.log(cpuValue);
    let result = document.getElementById("result")

    if (playerValue > cpuValue) {
      result.innerText = "Player 1 wins";
      document.body.style.backgroundColor = 'red';
    } else if (cpuValue > playerValue) {
      result.innerText = "Player 2 wins";
      document.body.style.backgroundColor = 'blue';
    } else {
      result.innerText = "it's a tie";
      document.body.style.backgroundColor = 'grey';
    }
  }
  function reset() {
    location.reload();
  }
  const resetBtn = document.querySelector("#reset");
  const startBtn = document.querySelector("#Controller");
  resetBtn.addEventListener("click", reset);
  startBtn.addEventListener("click", game);