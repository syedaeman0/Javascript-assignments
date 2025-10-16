//++++++++++++ CHAP 17 TO 20

//~~~~~~~~~~~~ QUES 1
// var multiArray = [];
// multiArray.push([]);
// multiArray.push([]);

//~~~~~~~~~~~~ QUES 2
// var matrix = [
//     [0, 1, 2, 3]
// ];
// console.log(matrix);

//~~~~~~~ QUES 3
// var number = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]); 
// }

//~~~~~~~~~~~~ QUES 4
// var tableNumber = +prompt("Enter a number for multiplication table:");
// var tableLength = +prompt("Enter the length of the table:");
// for (var i = 1; i <= tableLength; i++) {
//     console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
// }

//~~~~~~~~~~~~ QUES 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// Print items using for loop
// for (var i = 0; i < fruits.length; i++) {
//     console.log("at the numbers of " +  i  + " is " + fruits[i]);
// }

//~~~~~~~~~~~~ QUES 6
// console.log("Counting:");
//     for (var i = 1; i <= 15; i++) {
//       console.log(i + (i < 15 ? ", " : ""));
//     }

//     b. Reverse counting
//     console.log("Reverse Counting:");
//     for (var i = 10; i >= 1; i--) {
//       console.log(i + (i > 1 ? ", " : ""));
//     }

//    c. Even
//     console.log("Even:");
//     for (var i = 0; i <= 20; i += 2) {
//       console.log(i + (i < 20 ? ", " : ""));
//     }

//     d. Odd
//     console.log("Odd:");
//     for (var i = 1; i < 20; i += 2) {
//       console.log(i + (i < 19 ? ", " : ""));
//     }

//     e. Series
//     console.log("Series:");
//     for (var i = 2; i <= 20; i += 2) {
//       console.log(i + "k" + (i < 20 ? ", " : ""));
//     }

////~~~~~~~ QUES 7
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order? ");
// flag = false
// for(var i = 0; i<bakeryItems.length; i++){
//     if (bakeryItems[i].toLowerCase() === userInput.toLowerCase()) {
//         console.log(userInput," is availble at index ",i,"in our bakery");
//         flag = true;
//         break;  
// }
// }
// // !flag or flag ===false
// if(!flag){
//     console.log("We are sorry. ",userInput," is not available in our bakery");
// }

////~~~~~~~ QUES 8
// var num = [24, 53, 78, 91, 12]
// var maxNum = num[0];

// for(var i = 0; i<num.length; i++){
//     if (num[i]>maxNum){
//         maxNum = num[i]
//     }
// }
// console.log(maxNum);

////~~~~~~~ QUES 9
// var num = [24, 53, 78, 91, 12]
// var minNum = num[0];

// for(var i = 0; i<num.length; i++){
//     if (num[i]<minNum){
//         minNum = num[i]
//     }
// }
// console.log(minNum);

//~~~~~~~ QUES 10
// console.log("Multiples of 5 (1 to 100):");
//     for (var i = 5; i <= 100; i += 5) {
//       console.log(i + (i < 100 ? ", " : ""));
//     }