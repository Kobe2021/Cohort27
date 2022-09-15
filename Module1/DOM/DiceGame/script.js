let timesPlayed = 0;
//================ Task 1 ==============================
        // Create a function (rollDice)
        function rollDice(){
            // Roll Two "dice" one for the player and one for the computer
            // Use one variables for the (player) and one for the (computer)
            // (use a random number from 1-6 to represent a dice)
            let dicePlayer = Math.ceil(Math.random() * 6)
            let diceComp = Math.ceil(Math.random() * 6)
            // If the player's dice roll is higher than the computer dice roll,
            // console.log("PLAYER WINS")
            // otherwise, log ("COMPUTER WINS")
            // Use a ternary to check for the winner
            let winner = "";
            if(dicePlayer > diceComp){
                winner = "PLAYER WINS"
            } else if(dicePlayer === diceComp){
                winner = "TIE!"
            } else {
                winner = "COMPUTER WINS"
            }
            return [dicePlayer, diceComp, winner]
        }
        
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]
    
      // ============ Task 2 ==============================
      // Let's update our UI (User Interface)
      // Create a function (displayScore)
      function displayScore(results){
          //const results = rollDice()
          const div = document.createElement('div')
          div.innerHTML = `<p>Computer Score: ${results[1]},</p> <p>Player Score: ${results[0]},</p> <p>Winner: ${results[2]}</p>`

          const winnerDiv = document.querySelector('#winner')
          winnerDiv.appendChild(div)
          console.log(div);
      }
    //   displayScore()
      // Create a new a div displaying:
      // Computer Score: , Player Score:  & the Winner:
      // so there is a running record of game data.
      // Append the new div to the parent div on the HTML.
      const resetBtn = document.querySelector('#reset')
      const playGameBtn = document.querySelector('#play-game')

      // Create a Reset Function (resetGame)
      const resetGame = () => {
        // console.log(document.querySelector('#winner').firstElementChild)
        document.querySelector('#winner').firstElementChild.remove();
      }
      // REMOVE the div with the game score, leaving just the parent div
      // creating a clean slate for a new set of games :)

      // ==== Final Step =====================
      // Create a new function (playGame):
      // Call the rollDice and the displayScore function inside this function
      
      const playGame = () => {
        const results = rollDice() //gets the array
        displayScore(results)
      }

      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button
      resetBtn.addEventListener('click', resetGame)
      playGameBtn.addEventListener('click', playGame)

      // ===== Now let's host this game in GITHUB PAGES and style it !!!