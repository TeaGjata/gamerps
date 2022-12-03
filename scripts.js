alert("Welcome to our game!")
const playerSelection = "";
const computerSelection = "";
game();

function game() {
    const win = 0;
    const lost = 0;
    const draw = 0;
    for (const i = 0; i < 5; i++) {
        playerSelection = window.prompt("To play this game you have to select a choice: rock, paper or scissors?", "");
        const string = playRound(playerSelection, computerSelection);
        if (string.match(/Win/g) == "Win") {
            alert(string);
            win++;
        } else if (string.match(/Lose/g) == "Lose") {
            alert(string);
            lost++;
        } else {
            alert(string);
            draw++;
        }
        console.log(string);
    }
    if (playerSelection) {
        if (win > lost) {
            console.log("Congratulations! You are the winner!");
        } else if (win < lost) {
            console.log("Sorry! You lost!");
        } else {
            console.log("You both have the same point!");
        }
    }

    function playRound(playerSelection, computerSelection) {

        computerSelection = computerPlay();
        const option = playerChoice(playerSelection);

        switch (option) {
            case "rock":

                if (computerSelection == "scissors") {
                    return "You Win! Rock beats Scissors";
                } else if (computerSelection == "paper") {
                    return "You Lose! Paper beats Rock";
                } else {
                    return "Its a draw!";
                }

            case "paper":

                if (computerSelection == "rock") {
                    return "You Win! Paper beats Rock";
                } else if (computerSelection == "scissors") {
                    return "You Lose! Scissors beats Paper";
                } else {
                    return "Its a draw!";
                }
            case "scissors":
                if (computerSelection == "paper") {
                    return "You Win! Scissors beats paper";
                } else if (computerSelection == "rock") {
                    return "You Lose! Rock beats Scissors";
                } else {
                    return "Its a draw!";
                }
        }
    }
    function playerChoice(playerSelection) {
        return playerSelection.toLowerCase();
    }

    function computerPlay() {
        const computer = Math.random() * 151;
        if (computer <= 100) {
            return "rock";
        } else if (computer <= 50) {
            return "paper";
        } else {
            return "scissors";
        }
    }
}
