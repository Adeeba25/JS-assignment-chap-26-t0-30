// Q1//

// let user_input = +prompt("enter a number");
// document.write("number: "+user_input + "<br>");
// document.write("round off value: " +Math.round(user_input) + "<br>");
// document.write("floor value: " +Math.floor(user_input) + "<br>");
// document.write("ceil value: " +Math.ceil(user_input) + "<br>");

// Q2//


// let user_input = +prompt("enter negative number");
// document.write("number: "+user_input + "<br>");
// document.write("round off value: " +Math.round(user_input) + "<br>");
// document.write("floor value: " +Math.floor(user_input) + "<br>");
// document.write("ceil value: " +Math.ceil(user_input) + "<br>");


// Q3//

// let userNum = +prompt("Enter a number, either positive or negative:");

// if (userNum < 0) {
//     var numConverted = (userNum * userNum) / (-userNum);
//     document.write("The absolute value of " + userNum + " is " + numConverted);
// }

// else {
//     document.write("The absolute value of " + userNum + " is " + userNum);
// }

// Q4//

// var randomNo =Math.random();
// var maths = (randomNo * 6) + 1;
// var diceNumber = Math.floor(maths);
// document.write("random dice value " + diceNumber);

// //Q5//

// var valueOfCoin = Math.random() * 3;
// var floor = Math.floor(valueOfCoin);
// if (floor < 2){
//     document.write(floor + "<br>" + " random coin value: " + "Tails" )
// }
// else{
//     document.write(floor + "<br>" + " random coin value: " + "Heads")
// }

// Q7//

// let userWeight = prompt("Enter your weight:");
// let convertedWeight = parseFloat(userWeight);

// if (!isNaN(userWeight)) {
//     document.write("The weight of user is " + convertedWeight + " kg.");
// }
// else  {
//     alert("Invalid Input!!!");
// }

// Q8//

// let randomQuizNum = Math.floor((Math.random() * 10) + 1);
// let userGuessNum = prompt("Enter a number between 1 to 10:");

// let convertedRandomQuizNum = parseFloat(randomQuizNum);
// let convertedUserGuessNum = parseFloat(userGuessNum)

// if (convertedRandomQuizNum === convertedUserGuessNum){
//     alert("Congratulations! You won!");
// }
// else {
//     alert("Oops! Try next time!");
// }
// let extraLargeNum = "<h1>" + convertedRandomQuizNum + "</h1>"
// document.write(extraLargeNum);
