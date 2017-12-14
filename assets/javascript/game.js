		
//state variables
var targetNumber = 0;
var counter = 0;
var numberOptions = [];
// var imageCrystal = 0;
var crystalValue = 0;
var wins = 0;
var losses = 0;
var images = [ 
		"assets/images/bluecrystal.jpg",
		"assets/images/dkpurplecrystal.jpg",
		"assets/images/whitecrystals.jpg", 
		"assets/images/tealcrystal.jpg"];
var myLossSound = new Audio("assets/sounds/aww.mp4");	
var myWinSound = new Audio("assets/sounds/yay2.mp4");

	


function gameOn() {
	counter = 0;
	imageCrystal = 0;
	crystalValue = 0;
	numberOptions = [];

	$(".counter").text(counter);
	$("#crystals").empty();
	$(".wins").text(wins);
	$(".losses").text(losses);

	targetNumber = Math.floor(Math.random()*120 + 19);
	console.log(targetNumber);


	$(".Computer-Number").text(targetNumber);
	//function give random values to crystals
	//the random values are chosen from an array of 4 numbers
	//then you pick a value from the array to give value to a crystal
	//numbers are to be from 1-12

	//here we pick a random number to put in an array of 4 values for each of the crystals

	for (var i = 0; i < 4; i++) {

		numberOptions[i] = Math.floor(Math.random()*12) + 1;
		console.log("crystal Value " + i + " is " + numberOptions[i]);
	}

	//then we access a value to each of the images so we need to create a for loop to call each image give it its html tag, class, give it the scr link then give that image its value. 
	for (var i = 0; i < 4; i++) {
		

		//need to give each image we need to give it its html tag
		var imageCrystal = $("<img>");

		//then for each image  need to assess it a class of crystals from the html file
		imageCrystal.addClass("crystal-image");

		//then for each image we need to assess its image src and image jpg location variable called in global
		imageCrystal.attr("src", images[i]);

		//then each image/crystal needs to be given its random number assessed to it
		imageCrystal.attr("data-crystalvalue", numberOptions[i]);

		//add click here as it was not working below (needed to be called within a function)
		//this key up function to allow user to pick crystals and its associated value to the total
		imageCrystal.click(crystalClick);

		//then each image with value gets added to the div
		$("#crystals").append(imageCrystal);

	}

}

function reviewForMatch() {
	if(counter === targetNumber) {
		$(".status").text("You won!");
		//the below timer did not work
		// setTimeout(function() {$(".status").empty();
  //   }, 3000);
		// timedText();
		setTimeout(reset, 2000);
		myWinSound.play();
		// alert("You won!");
		wins++;
		console.log("Counter: " + counter);
		console.log("Computer guess: " +targetNumber);
		$(".wins").text(wins);
		gameOn();
	}

	else if (counter >= targetNumber) {
		$(".status").text("You lost!");
		//the below timer did not work
		// setTimeout(function() {$(".status").empty();
  //   }, 3000);
		setTimeout(reset, 2000);
		myLossSound.play();
		losses++;
		console.log("Counter: " + counter);
		console.log("Computer guess: " +targetNumber);
		// alert("You lost!");
		$(".losses").text(losses);
		gameOn();
	}
}

function reset() {
	$(".status").empty();
}

// Game begins and works here ---------

gameOn();


function crystalClick() {
	crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $(".counter").text(counter);
    

reviewForMatch();

}

