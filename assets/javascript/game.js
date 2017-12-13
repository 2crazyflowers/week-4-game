//state variables

var computerNumber = 0;
var crystalImagesArray = [];
var crystalValue = [];
var wins = 0;
var losses = 0;
var counter = 0;
var crystalImage = 0;


function gameOn() {
	$(".crystals").empty();
	
	$(".wins").text(wins);
	$(".losses").text(losses);

	computerNumber = Math.floor(Math.random()*120 + 19);
	console.log(computerNumber);


	$(".Computer-Number").text(computerNumber);
	//function give random values to crystals
	//the random values are chosen from an array of 4 numbers
	//then you pick a value from the array to give value to a crystal
	//numbers are to be from 1-12

	//here we pick a random number to put in an array of 4 values for each of the crystals

	for (var i = 0; i < 4; i++) {

		crystalValue[i] = Math.floor(Math.random()*12) + 1;
		console.log("crystal Value " + i + " is " + crystalValue[i]);
	}

	//then we access a value to each of the images so we need to create a for loop to call each image give it its html tag, class, give it the scr link then give that image its value. 
	for (var i = 0; i < 4; i++) {
		//need to call the array of images to call from
		//===================issue with relative path set
		var crystalImagesArray = [ 
		"assets/images/bluecrystal.jpg",
		"assets/images/pinkcrystal.jpg",
		"assets/images/whitecrystal.jpg", 
		"assets/images/redcrystal.jpg"];

		//need to give each image we need to give it its html tag
		var crystalImage = $("<img>");

		//then for each image  need to assess it a class of crystals from the html file
		crystalImage.addClass("crystals");

		//then for each image we need to assess its image src and image jpg location
		crystalImage.attr("src", crystalImagesArray[i]);

		//then each image/crystal needs to be given its random number assessed to it
		crystalImage.attr("data-crystalvalue", crystalValue[i]);

		//then each image with value gets added to the div
		$(".crystals").append(crystalImage);

	}

	console.log(crystalValue[0]);
	console.log(crystalValue[1]);
	console.log(crystalValue[2]);
	console.log(crystalValue[3]); 
}

// function reviewForMatch() {
// 	if(computerNumber === counter) {
// 		alert("You won!");
// 		wins++;
// 		console.log("Counter: " + counter);
// 		console.log("Computer guess: " +computerNumber);
// 		$("#wins").text(wins);
// 		counter = 0;
// 		crystalValue = 0;
// 		gameOn();
// 	}

// 	else if (counter >= targetNumber) {
// 		losses++;
// 		console.log("Counter: " + counter);
// 		console.log("Computer guess: " +computerNumber);
// 		alert("You lost!");
// 		$("#losses").text(losses);
// 		counter = 0;
// 		crystalValue = 0;
// 		gameOn();
// 	}
// }

//Game begins and works here ---------

gameOn();

//key up function to add to userNumber
$(".crystal").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $(".number").text(counter);

// reviewForMatch();
