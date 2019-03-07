var targetNumber = 0; //target number, randomly generated
var crystalArray = [{ crystal: "assets/images/black-crystal.jpeg", score: 0 }, { crystal: "assets/images/blue-crystal.jpeg", score: 0 }, { crystal: "assets/images/purple-crystal.jpeg", score: 0 }, { crystal: "assets/images/white-crystal.jpeg", score: 0 }]; //random number assigned to crystals
var counter = 0;
var wins = 0;
var losses = 0;

// -- Crystals need to be displayed as buttons -- //
// onclick event to add value of each crystal to the score//
function startGame() {
    for (var i = 0; i < crystalArray.length; i++) {
        var crystalImage = $("<img>");
        crystalImage.addClass("crystal-image")
        crystalImage.attr("src", crystalArray[i].crystal)
        crystalArray[i].score = Math.floor(Math.random() * 12) + 1
        crystalImage.attr("data-randomNum", crystalArray[i].score);
        $("#crystals").append(crystalImage)
    }
    targetNumber = Math.floor(Math.random() * (102)) + 19;
    $("#number-to-guess").text(targetNumber);
}

//Reset Function
function resetGame() {
    targetNumber = 0;
    counter = 0;
    $("#number-to-guess, #crystals, #current-score").text("");
}

startGame();

$("#crystals").on("click", ".crystal-image", function () {
    counter += parseInt($(this).attr("data-randomNum"));
    $("#current-score").text(counter);

    if (counter === targetNumber) {
        alert("WINNER WINNER CHICKEN DINNER!");
        wins++
        $("#wins").text(wins);
        resetGame ();
        startGame ();
    } else if (counter > targetNumber) {
        alert("YOU LOSE!")
        losses++
        $("#losses").text(losses);
        resetGame ();
        startGame ();

    }


})







