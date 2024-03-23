
document.addEventListener("DOMContentLoaded", function() {

    const username = prompt("ENTER USERNAME");
    const passcode = prompt("ENTER PASSCODE");


    document.getElementById("userinfo").innerHTML = "Welcome, " + username + "! Click to play.";

  
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

   
    document.getElementById("play").addEventListener("click", function() {
        let attempts = 0;
        let guessedCorrectly = false;
        let score = 0; 

        const randomNumber = generateRandomNumber(20, 40);

        while (attempts < 4 && !guessedCorrectly) {
            const userGuess = parseInt(prompt("Guess a number between 20 and 40."));

            if (userGuess === randomNumber) {
                guessedCorrectly = true;
                alert("Congratulations! You have won 100k the correct number!");
                score += 100; 
            } else {
                attempts++;
                if (attempts < 4) {
                    alert("Incorrect guess. Please try again.");
                } else {
                    alert("You have exceeded the number of attempts. Please play again later.");
                }
            }
        }

        if (guessedCorrectly) {
       
            const bonusScore = 10;
            score += bonusScore;
            alert("You have been awarded " + bonusScore + "% mark for guessing the correct number.");
        }

   
        document.getElementById("randomnumber").innerHTML = "Generated Random Number: " + randomNumber;
        document.getElementById("score").innerHTML = "Score: " + score;
    });
});