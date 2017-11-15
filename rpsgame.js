//var userChoice = prompt("Do you choose Rock, Paper, or Scissors?");
var tally = {userWins: 0, computerWins: 0, ties: 0}
var rock = document.getElementById("rockBUTTON")
var paper = document.getElementById("paperBUTTON")
var scissors = document.getElementById("scissorsBUTTON")
// var clearButton = document.getElementById(“clearBtn”)

rock.addEventListener("click", function() {
  compare(1)
})
paper.addEventListener("click", function() {
  compare(2)
})
scissors.addEventListener("click", function() {
  compare(3)
})

var compare = function(userChoice) {
    var computerChoice = Math.floor(Math.random() * 3) + 1
    if (userChoice === computerChoice) {
        tally.ties++
    }
    else if (userChoice > computerChoice) {
      tally.userWins++
    }
    else if (userChoice < computerChoice) {
      tally.computerWins++
    }
    else {
      alert("There has been an issue. Please try again.")
    }


    document.getElementById("wins").innerHTML = ("Wins " + tally.userWins)
    document.getElementById("loses").innerHTML = ("Loses " + tally.computerWins)
    document.getElementById("ties").innerHTML = ("Ties " + tally.ties)

    document.getElementById("computer_wins").innerHTML = ("Wins " + tally.computerWins)
    document.getElementById("computer_loses").innerHTML = ("Loses " + tally.userWins)
    document.getElementById("computer_ties").innerHTML = ("Ties " + tally.ties)

}
// clearButton.addEventListener(‘click’, function() {
//   // Code to clear goes here
// })
