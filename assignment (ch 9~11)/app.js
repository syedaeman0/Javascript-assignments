//~~~~~~~~~CHAPTER 9 TO 11~~~~~~~~//

//~~~~~~~~ QUES 1

//  var city = prompt("please Enter your City Name")
// if (city === "karachi") {
//     document.write("Welcome to the City of Lights")
// }else{
//     alert("sorry better luck to the next time")
// }

             //~~~~~~~ Ques 2

// var gender = prompt("Enter your gender ");

// if(gender == "male"){
//     console.log("Good morning Sir");
// }
// else if(gender == "female"){
//     console.log("Good morning Ma'am");
// }else {
//     console.log("Invalid gender");
// }

       //~~~~~~~ Ques 3
// var signalLight = prompt("Enter the color of traffic signal light")
// if (signalLight === "red") {
//     alert("Must Stop")
    
// } else if(signalLight === "Yellow"){
//     alert("Ready to move")
    
// } else if(signalLight === "green"){
// alert("Move now")
// }else{
//     alert("Enter the correct color of signal light")
// }

//~~~~~~~~~~~ Ques 4
// var remainingFuel = +prompt("Remaining fuel in car (in only 0 to 1 litres) ");

// if(remainingFuel <= 0.25){
//     console.log("Please refill the fuel in your car");
// }else {
//     console.log("Enjoy your journey");
// }

//~~~~~~~~~Ques 5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// true

//   var b = 82;  
//  if (b++ === 83){  
//  alert("given condition for variable b is true");
//  }
//  true

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } 
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// } 
// // true

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
// false car is biger ten cat

//~~~~~~ Ques 6
// var maxMark = 100
// var totalmaxMarks =maxMark*3

// var englishMarks = +prompt("Enter your obtain number of subject English ")
// var urduMarks = +prompt("Enter your obtain number of subject Urdu ")
// var mathsMarks = +prompt("Enter your obtain number of subject Maths ")

// var totalObtainMarks = englishMarks + urduMarks + mathsMarks

// var percentage = totalObtainMarks / totalmaxMarks *100

// document.write("<h2>Marks Sheet</h2><br/>")

// if(percentage >= 80 && percentage <= 100 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: A-one</h4>")
//     document.write("<h4>Remarks: Excellent</h4>")
// }
// else if(percentage >= 70 && percentage <= 79 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: A</h4>")
//     document.write("<h4>Remarks: Good</h4>")
// }
// else if(percentage >= 60 && percentage <= 69 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: B</h4>")
//     document.write("<h4>Remarks: You need to improve</h4>")
// }
// else if(percentage >= 0 && percentage <= 59 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: Fail</h4>")
//     document.write("<h4>Remarks: Sorry</h4>")
// }
// else{
//     document.write("<h4>Invalid number</h4>")
// }

//~~~~~~~ Ques 7
// var secretNumber = 6
// var guessSecretNunber = +prompt("Guess the secret number between 1 to 10: ")


// if(secretNumber === guessSecretNunber && guessSecretNunber>0 &&guessSecretNunber<10 ){
//     console.log("Bingo! Correct answer.");
// }
// else if((guessSecretNunber === ++secretNumber) && (guessSecretNunber>0 &&guessSecretNunber<10)){
//     console.log("Close enough to the correct answer.");
// }
// else{console.log("Try again");
// }

//~~~~~ Ques 8
//  var userNumber = +prompt("enter any number")
//  if (userNumber % 3 === 0) {
//     alert("The number is divisible by 3")
    
//  } else {
//     alert("The number is not divisible by 3")
//  }

//~~~~~~~~~~~~~~~~~~ Ques 9
// var userNumber = +prompt("enter any number")
//   if (userNumber % 2 === 0 ) {
//      alert("The number is even number")
  
//  } else if (userNumber % 2 !== 0) {
//     alert("The number is an odd number")
//   } else{
//     alert("enter correct number")
//   }


//~~~~~~~~~~~~~ QUES 10
// var outSideTemprature = +prompt("enter out side temprature")
// if (outSideTemprature > 40 ) {
//     alert("it is to Hot out side")
// } else if(outSideTemprature > 30){
//        alert("today's weather is normal")
// }else if (outSideTemprature > 20){
//        alert("the out side weather is cool")
// } else if (outSideTemprature > 10){
//     alert("OMG! Today’s weather is so Cool.")
// } else{
//     alert("enter correct tamperature")
// }

//~~~~~~~  QUES 11
//  var num1 = +prompt("enter number one")
//  var num2 = +prompt("enter number two")
//  var operation = prompt("enter operation (+, -, % , / , * ):")

//  if (operation === "+") {
//     alert("result :" + (num1 + num2))
    
//  } else if( (operation === "-")) {
//     alert("result :" + (num1 - num2))

//  }  else if( (operation === "*")) {
//     alert("result :" + (num1 * num2))
//  }  else if( (operation === "/")) {
//     alert("result :" + (num1 / num2))
//  }
//   else if( (operation === "%")) {
//     alert("result :" + (num1 % num2))
//  } else{
//     alert("enter correct number")
//  }