//state variables

//function pick computerNumber
computerNumber = Math.floor(Math.random()*120 + 19);
console.log(computerNumber);

//function give random values to crystals
//the random numbers are chosen from an array of 4 numbers
//then you pick a number from the array to give value to a crystal
//numbers from 1-12
var crytalArray = [1, 10, 5, 3];

//we want to pick a number for each of the crystals
for (var i = 0; i < crytalArray.length; i++) {


crystalNumber1 = Math.floor(Math.random()*12 + 1);
console.log("crystal number 1: " + crystalNumber1);
crystalNumber2 = Math.floor(Math.random()*12 + 1);
console.log("crystal number 2: " + crystalNumber2);
crystalNumber3 = Math.floor(Math.random()*12 + 1);
console.log("crystal number 3: " + crystalNumber3)

crystalNumber4 = Math.floor(Math.random()*12 + 1);
console.log("crystal number 4: " + crystalNumber4)
//key up function to add to userNumber

//start game