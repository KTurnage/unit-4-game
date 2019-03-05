var targetNumber = 5; //target number, randomly generated
var randomCrystalValue; //random number assigned to crystals
var counter = 0;
var wins = 0;
var losses = 0;
var button;

// -- Crystals need to be displayed as buttons -- //
// onclick event to add value of each crystal to the score//

// crystal1 button needs randomCrystalValue;
// crystal2 button needs randomCrystalValue;
// crystal3 button needs randomCrystalValue;
// crystal4 button needs randomCrystalValue;

//if the players score is === targetNumber the player WINS..add to win count
//if the players score is < targetNumber the player continues to play..
//else the player score is > targetNumber the player LOOSES..add to loss count

//set the "number-to-guess" header to match targetNumber
$("#number-to-guess").text(targetNumber);
//set the "current-score" neader to match counter
$("#current-score").text(counter);
//set "wins" header to match wins
$("#wins").text(wins);
//set "losses header to match losses"
$("#losses").text(losses);


//?? can I add an array of the 4 crystal images here?
$(".crystal-image1").on("click", function () {
    counter += 1;
    alert("Your new score is: " + counter); //change from an alert to update counter



    if (counter === targetNumber) {
        alert("WINNER WINNER CHICKEN DINNER!");
    } ifelse, { 
        (counter < targetNumber) {
        //something happens here
    }else {
        (counter > targetNumber) {
            alert("YOU LOSE!")
        })
        }

    }
    
});



// -- onclick at start of the game -- //
//generate a targetNumber as goal number to reach
//game restarts when the player wins or loses
//..with reset targetNumber, hidden values on crystals, score set to 0, score counter set to 0

$(".crystal-image").on("click", function () {
    alert("You clicked a crystal!")
});