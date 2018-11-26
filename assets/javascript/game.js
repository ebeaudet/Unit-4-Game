//Global Variables
 var randomNum;
 var points;
 var wins;
 var losses;

for (var i = 0; i < 4; i++) {
    randomNum = Math.floor(Math.random() * 12);
    var crystal = $("div>");
    crystal.attr("class", 'uniqueCrystal');
    $(crystal).attr("Value", randomNum);
    console.log(randomNum);
}
 
    $(".uniqueCrystal").on("click", function() {
        var crystalNum = ($(".uniqueCrystal").append(randomNum));
        console.log(crystalNum);

    });

//start game 
//generate random number
//assign new value to each of the 4 crystals

//Playing the game
//update the total score on click of crystal
//check if total score is <> than random number
//if total is > than random then a loss if < continue, if = then win

 