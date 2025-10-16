//~~~~~~~~~~~~~~~~~~~~~~ CHAPTER 14 TO 16

//~~~~~~~~~ QUES 1
//~~~~~~~~~~~~~methode one
// var arr =[]
// // console.log(arr);
// arr = ["sameen", "mariam","farheen"]
// console.log(arr);

//~~~methode_two
// var arr = [];
// // arr.push("saman");
// // arr.push("hamna");
// // arr.push("hani")
// console.log(arr);
// arr.push("saman","hamna","umer")
// console.log(arr);

//~~~~~~~~~~ QUES 2
// var students = new Array();  

// students.push("Ali");
// students.push("Sara");
// students.push("Ahmed");

// console.log(students); 

//~~~~~~~~~~~~~~~~ QUES 3
//  var arr = ["saman","fatimah","farhan"]
//  console.log(arr);

//~~~~~~~~~~~ QUES 4
// var numberArr = [1 , 2 , 3 , 4 , 5 , 6]
// console.log(numberArr);

//~~~~~~~~~~~~ QUES 5
//  var isPresent = [true, false, true, true, false];
// console.log(isPresent);

//~~~~~~~ QUES 6
//  var studentData = ["Eman" , 20 , true]
//  console.log(studentData);

//~~~~~~~~ QUES 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications in Pakistan:</h2>");
// for(var i =0; i<qualifications.length; i++){
//     document.write((i+1) + ")" + qualifications[i] + "<br/>")
// }

//~~~~~~~~~~~~ QUES 8
// var studentName = ["Ahmed", "eman", "ushna"];
// var studentScore = [230, 320, 480];
// var totalNum = 500;

// for (var i = 0; i < studentName.length; i++) {
//   console.log(
//     "Score of " +studentName[i] + " is " + studentScore[i] +". Percentage:" +(studentScore[i] / totalNum) * 100 +"%");
// }

//~~~~~~~ QUES 9
// var color = ['brown', 'yellow', 'black', 'green']
// console.log(color);

// color.unshift( prompt('what color you want to add to the beginning of list: '))
// console.log(color);

// color.push(prompt('what color you want to add to the end of list: '))
// console.log(color);

// color.unshift( prompt('whats first name of colors you want to add to the beginning of list: '))
// color.unshift( prompt('whats second name of colors you want to add to the beginning of list: '))
// console.log(color);

// color.shift()
// console.log(color);

// color.pop()
// console.log(color);

// var userColor = prompt('what color you want to add of list: ')
// var userIndex = prompt('what you want to add in which index of list: ')
// color.splice (userIndex,0,userColor)
// console.log(color);

// var userIndexDel = prompt('what you want to add in which index of list: ')
// color.splice (userIndexDel)
// console.log(color);

//~~~~~~ QUES 10
// var score = [320,330,450,190,539,200]
// var score = [1,10,100,1000,10000]
// var score = [5,15,100,50]
// score.sort(function(a, b){
//     return a- b
// })
// // score.sort()
// console.log(score);

//~~~~~~ QUES 11
//  var cities = [" karachi "," Hydrabad "," faislabad "," lahore ","islamabad"]
// var copy= cities.slice(1, 5)
// //  console.log(copy);
// // document.write("<b>the original array</b> : "+ cities + " <br> " + "and <br> <b>the selected cites for copy another array: </b>"+ copy)
// document.write("<b>the original arry:</b>" + cities + "<br> <br>")
// document.write("<b>the copy arry is </b> : " + copy + "<br><br>")

//~~~~~~~~ QUES 12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ") 

// document.write("<b>Array:</b> " + arr + "<br>");
// document.write("<b>Single String:</b> " + singleString);

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// console.log(str);

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join("_");
// console.log(str);

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join("|");
// console.log(str);

//~~~~~~~~ QUES 13
// FIFO-First In First Out (push & shift)
// var queue = [];
// queue.push("Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// console.log("Devices in Queue: " + queue);
// console.log("Out: " + queue.shift()); // removes "Keyboard"
// console.log("Out: " + queue.shift()); // removes "Mouse"
// console.log("Out: " + queue.shift()); // removes "Printer"
// console.log("Out: " + queue.shift()); // removes "Monitor");

//~~~~~~~~ QUES 14
// LIFO-Last In First Out (push & pop)
// var stack = [];

// stack.push("Keyboard");
// stack.push("Mouse");
// stack.push("Printer");
// stack.push("Monitor");

// console.log("Devices in Stack: " + stack);

// console.log("Out: " + stack.pop()); // removes "Monitor"
// console.log("Out: " + stack.pop()); // removes "Printer"
// console.log("Out: " + stack.pop()); // removes "Mouse"
// console.log("Out: " + stack.pop()); // removes "Keyboard");

//~~~~~~ QUES 15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
//     }

// document.write("</select>");