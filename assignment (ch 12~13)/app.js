//~~~~~~~~~~~ CHAPTER 12 TO 13

//~~~~~~~~ Ques 1
// var char = prompt("Enter a single character:");

// var ascii = char.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("You entered a Number");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     alert("You entered an Uppercase Letter");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     alert("You entered a Lowercase Letter");
// }
// else {
//     alert("You entered some other character");
// }

//~~~~~~~~~ QUES 2
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//     console.log("First number "+num1 + " is larger.");
// }
// else if (num2 > num1) {
//     console.log("Second number "+num2 + " is larger.");
// }
// else {
//     console.log("Both numbers are equal.");
// }


//~~~~ Ques 3
// var userNum = +prompt("Enter a number:");
// if (userNum > 0) {
//     console.log(userNum + "is positive");

// }else if (userNum < 0) {
//     console.log(userNum + "is nagitive");
// } else {
//     console.log("The number is zero.");
// }

//~~~~~~~ Ques 4
// var char = prompt("Enter a single character:").toLowerCase();

// if (char.length === 1) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log("Please enter only one character.");
// }

//~~~~~~~~~~ Ques 5
// var correctPassword = "emansyeda@2022!"

// var userPassword = prompt("Enter password")

//Check if user has entered password.

// if(userPassword !== ""){
//     if(correctPassword === userPassword){
//     console.log("Correct! The password you entered matches the original password.")
//     }else{
//         console.log("Incorrect password")
//     }
// }else{
//     console.log("Please enter your password”")
// }

//~~~~~~~~~~ QUES 6
//  var greeting;
//  var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }
// console.log(greeting);

//~~~~~~~~~ QUES 7

// var time = +prompt("Enter time in 24 hours format (e.g., 1900 for 7pm):");

// if (time >= 0 && time < 1200) {
//   alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//   alert("Good Night!");
// } else {
//   alert("Invalid time format!");
// }

