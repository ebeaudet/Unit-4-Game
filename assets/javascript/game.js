//Global Variables
$(document).ready(function () {

    var magicNum;
    var points = 0;
    var wins =0;
    var losses;
    var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];
    var crystalIMG = ["assets/images/blue.png", "assets/images/red.png", "assets/images/purple.png", "assets/images/darkblue.png"]

    //assign attributes to each of the 4 crystals
    for (var i = 0; i < crystals.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("uniqueCrystal m-2");
        crystal.attr("value", Math.floor(Math.random() * 12) + 1);
        crystal.attr("src", crystalIMG[i]);
        $(".crystals").append(crystal);

    }
    //generate random number
    genMagicNum();

    function genMagicNum() {
        magicNum = Math.floor(Math.random() * 120) + 19;
        $(".magicNumber").text("Magic Number: " + magicNum);
        console.log(magicNum)
    }

    $(".uniqueCrystal").on("click", function () {
        points += parseInt($(this).attr("value"));
        $(".totalScore").text("Total Score:" + points);
        if (points === magicNum) {
            alert("You Win!")
            wins ++;
            $(".wins").text("Wins:" + wins);
            genMagicNum();
            points = 0;
            $(".totalScore").text("Total Score:" + points);
        } else if (points > magicNum) {
            alert("You Lose")
            genMagicNum();
            points = 0;
            $(".totalScore").text("Total Score:" + points);
        }

        console.log(points);
    });

})
//start game 
//Playing the game
//update the total score on click of crystal
//check if total score is <> than random number
//if total is > than random then a loss if < continue, if = then win

