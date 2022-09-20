const CARDS = [
    {
      code: "B4",
      image: "./blueFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "B3",
      "image": "./blueThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "B2",
      "image": "./blueTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "B1",
      "image": "./blueOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "B0",
      "image": "./blueZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "BSkip",
      "image": "./blueSkip.png",
      value: 20,
      suit: "Numbers",
    },
    {
      code: "G4",
      "image": "./greenFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "G3",
      "image": "./greenThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "G2",
      "image": "./greenTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "G1",
      "image": "./greenOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "G0",
      "image": "./greenZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "GSkip",
      "image": "./greenSkip.png",
      value: 20,
      suit: "Numbers",
    },
    {
      code: "RSkip",
      "image": "./redSkip.png",
      value: 20,
      suit: "Numbers",
    },
    {
      code: "R4",
      "image": "./redFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "R3",
      "image": "./redThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "R2",
      "image": "./redTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "R1",
      "image": "./redOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "R0",
      "image": "./redZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "Y0",
      "image": "./yellowZero.png",
      value: 0,
      suit: "Numbers",
    },
    {
      code: "Y1",
      "image": "./yellowOne.png",
      value: 1,
      suit: "Numbers",
    },
    {
      code: "Y2",
      "image": "./yellowTwo.png",
      value: 2,
      suit: "Numbers",
    },
    {
      code: "Y3",
      "image": "./yellowThree.png",
      value: 3,
      suit: "Numbers",
    },
    {
      code: "Y4",
      "image": "./yellowFour.png",
      value: 4,
      suit: "Numbers",
    },
    {
      code: "YSkip",
      "image": "./yellowSkip.png",
      value: 20,
      suit: "Numbers",
    },
  ]


const startPlayer1 = document.querySelector('#start-player1')
const startPlayer2 = document.querySelector('#start-player2')
const drawOne = document.querySelector('#draw-card')

// const pickTwo = document.querySelector('#pick-two')
// const pickFour = document.querySelector('#pick-four')
function getCard(){
    let randomCard = CARDS[Math.floor(Math.random() * CARDS.length)]
    const newImg = document.createElement('img')
    newImg.src = randomCard.image
    newImg.style.width = '10%'
    newImg.style.marginTop = '50px'
    document.querySelector('#deck-of-cards-player').appendChild(newImg)
    // let value = document.createElement('H3')
    // value.textContent = `Points = ${randomCard.value}`
    // document.querySelector('.buttons').appendChild(value)
  }
  function getCPUCards(){
    let randomCard = CARDS[Math.floor(Math.random() * CARDS.length)]
    const newImg = document.createElement('img')
    newImg.src = randomCard.image
    newImg.style.width = '10%'
    newImg.style.marginTop = '50px'
    document.querySelector('#deck-of-cards-cpu').appendChild(newImg)
    // let value = document.createElement('H3')
    // value.textContent = `Points = ${randomCard.value}`
    // document.querySelector('.buttons').appendChild(value)
  }

  //This is the start of the game where you get seven cards
  function drawPlayersSeven(){
    getCard()
    getCard()
    getCard()
    getCard()
    getCard()
    getCard()
    getCard()
  }
  function drawCPUsSeven(){
    getCPUCards();
    getCPUCards();
    getCPUCards();
    getCPUCards();
    getCPUCards();
    getCPUCards();
    getCPUCards();
  }


//   const sg_btn = document.createElement('button');
//       sg_btn.classList.add('uno-game-btn');
//       sg_btn.innerHTML = 'Star Game';
//       this._div.appendChild( sg_btn );

//       sg_btn.addEventListener('click', e => {
//         this.send({ctrl: 'startGame'});
//         this._div.remove();
//       });

//   function drawTwo(){
//     getCard()
//     getCard()
//   }
//   function drawFour(){
//     getCard()
//     getCard()
//     getCard()
//     getCard()
//   }
function disperseCards(){
    return [drawSevenForPlayer1(), drawSevenForComputer()]
}
  drawOne.addEventListener('click', getCard)
  startPlayer1.addEventListener('click', drawPlayersSeven)
  startPlayer2.addEventListener('click', drawCPUsSeven)
//   pickTwo.addEventListener('click', drawTwo)

let canvasStack = CARDS.slice(CARDS.length / 2)
console.log(canvasStack)
