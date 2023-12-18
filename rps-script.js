
function getComputerChoice() {
    /* randomly generate and return rock paper or scissors string for game */

    const rps = ["Rock", "Paper", "Scissors"];

    /* use rps.length to give the right number to random number generator */
    return rps[Math.floor(Math.random() * rps.length)];
}


function playRound( playerSelection, computerSelection ) {
    /* rock beats scissors, paper beats rock, scissors beats paper */

    const rpsIndex = [ "Rock", "Paper", "Scissors" ];

    /* use playerIndex and computerIndex to select answer from this array
    playerIndex is column, computerIndex is row */
    const lookupTable = [
        /*  0        1         2 */
        [ "Tie", "You Win!", "You Lose!" ], /* 0  */
        [ "You Lose!", "Tie", "You Win!" ], /* 1  */
        [ "You Win!", "You Lose!", "Tie" ]  /* 2  */
    ]

    /* Check to see if user clicked "Cancel" in prompt box
       if so, return to caller with null */
    if( playerSelection === null) { return null; }

    /* Check that player entered a valid choice
       assume computer generated computerSelection is valid. */
      

       /* first make string all lower case */
       let stringPlay = playerSelection.toLowerCase();
        /* now capitalize the first letter */
        stringPlay = stringPlay.charAt(0).toUpperCase() + stringPlay.slice(1);
        let playerIndex = rpsIndex.indexOf(stringPlay);
    
        /* if player enters invalid choice, generate error and exit function*/
       if ( playerIndex === -1) {
        return "Input Error Do Over";
       }

       /* get computer choice index for lookupTable */
    let computerIndex = rpsIndex.indexOf(computerSelection);

    /* get answer who won or if it was a tie */
                              /*  column           row  */
    let answer = lookupTable [computerIndex] [playerIndex];

       if (answer === "You Win!") {
        return "You Win! " + stringPlay + " beats " + computerSelection;
       } else if (answer === "You Lose!") {
        return "You Lose! " + computerSelection + " beats " + stringPlay;
       } else {
        return "Tie" + " Do Over";
       } 

       return answer;
}

 /* numPLays is how many rounds a game consists of */
function game(numPlays) {
    let playerScore = 0;
    let computerScore = 0;

    /* Main loop for game */
    for(rndCnt=0; rndCnt<numPlays;) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        let rndResult = (playRound(playerSelection, computerSelection));

    /* check if user clicked "Cancel" on prompt box, if so exit function to main caller*/
        if (rndResult === null) { return "User Terminated Game Early";}
    
        /* Check if valid result, display result and increment winner */
        if ( rndResult.substring(0, 3) === "You" ) {
            if(rndResult.substring(4, 7) === "Win") { ++playerScore; 
            console.log(rndResult);}
            else {++computerScore;
            console.log(rndResult);}
        /* Increment round count, proper round played */
        rndCnt++;
        } else { console.log(rndResult); } /* invalid result play round over */
    }   
        /* Display final result of game and return to caller */
        console.log("Player " + playerScore);
        console.log("Computer " + computerScore);
        if( playerScore > computerScore){ console.log("You Win!");}
         else {console.log("You Lose!");}
         
    /* return to main caller */
     return "GAME OVER";
}