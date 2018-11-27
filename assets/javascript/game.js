//Global Variables
 var magicNum;
 var points;
 var wins;
 var losses;
 var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];
 var crystalIMG = ["assets/images/blue.png", "assets/images/red.png", "assets/images/purple.png", "assets/images/darkblue.png"]


for (var i = 0; i < crystals.length; i++) {
    var crystal = $("<img>");
    crystal.addClass("uniqueCrystal");
    crystal.attr("value", Math.floor(Math.random() * 12) + 1);
    crystal.attr("src", crystalIMG[i]);
    $(".crystals").append(crystal);
    
}
    genMagicNum();

function genMagicNum() {
    magicNum = Math.floor(Math.random() * 120) + 19;
    $(".magicNumber").append("Magic Number: " + magicNum);
    console.log(magicNum)
}

$(".uniqueCrystal").on("click", function () {
    points = parseInt($(this).attr("value"));
    console.log=(points);
 
 });
 

//start game 
//generate random number
//assign new value to each of the 4 crystals

//Playing the game
//update the total score on click of crystal
//check if total score is <> than random number
//if total is > than random then a loss if < continue, if = then win

 