// QUES 1
// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" }
// ];
// itemsArray.forEach(item => {
//   let totalPrice = Number(item.price) * Number(item.quantity);
//   console.log(`${item.name} total price: ${totalPrice}`);
// });
// let grandTotal = 0;

// itemsArray.forEach(item => {
//   grandTotal += Number(item.price) * Number(item.quantity);
// });

// console.log("Grand total of all items: " + grandTotal);

// QUES 2
// var user = {
//   name: "Sameen",
//   email: "sameen@example.com",
//   password: "12345",
//   age: 30,
//   gender: "female",
//   city: "Karachi",
//   country: "Pakistan"
// };
// console.log("Does age exist? ", "age" in user);      
// console.log("Does country exist? ", "country" in user); 
// console.log("Does firstName exist? ", "firstName" in user); 
// console.log("Does lastName exist? ", "lastName" in user);   

// QUES 3
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// var person1 = new Person("Emaan", 19, "female");
// var person2 = new Person("Ahmed", 15, "male");
// var person3 = new Person("Aima", 40, "female");

// console.log(person1);
// console.log(person2);
// console.log(person3);

//QUES 4
function Resident(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}


var resident1 = new Resident("Ali", "male", "Street 1", "Graduate", "Engineer");
var resident2 = new Resident("Sara", "female", "Street 2", "Matric", "Teacher");

var residents = [resident1, resident2];
console.log(residents);

// Save to local storage
localStorage.setItem("residents", JSON.stringify(residents));

// Retrieve from local storage
var savedResidents = JSON.parse(localStorage.getItem("residents"));
console.log(savedResidents);