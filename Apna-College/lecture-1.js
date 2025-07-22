// // ?PRACTICE 1
// const product = {
//   name : "Parker jotter Standard CT Ball Pen (Black)",
//   rating : 4,
//   offer : 5,
//   price : 270
// };
// console.log(product);
// console.log(typeof product);

// // ?PRACTICE 2
// const profile = {
//   userName : "Abdur Rob",
//   post : 195,
//   followers : 500,
//   following : 100,
//   nameAgain : "Abdur Rob",
//   link : "AbdurRob@gmail.com",
//   profession : "Mern Stack Developer",
//   description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// };
// console.log(profile);
// console.log(typeof profile);


// // PRACTICE - 3
// Login Access (Real-World)
// Write a program that checks if a username and password match:

// let correctUsername = "admin";
// let correctPassword = "12345";

// let inputUsername = "admin";
// let inputPassword = "12345";

// Output: "Access granted" or "Access denied"


// let correctUsername = "admin";
// let correctPassword = "12345";

// let inputUsername = "admin";
// let inputPassword = "12345";

// if (correctUsername === inputUsername) {
//   console.log("Username valid")
//   if (correctPassword === inputPassword) {
//     console.log("Access granted")
//   } else {
//     console.log("Access denied, User password is invalid")
//   }
// } else {
//   console.log("Access denied, User name is invalid")
// }

// // PRACTICE - 4
// Even or Odd Checker
// Write a program that checks if a number is even or odd.

// let number = 60;
// let checker = (number % 2);
// // Output: "Odd number"

// if (checker === 0) {
//   console.log(number + " is an Even number")

// } else {
//   console.log(number + " Odd number")
// }

// // PRACTICE - 5
// Bus Fare Eligibility
// If age is less than 5 or more than 60, the bus ride is free. Otherwise, full fare.

// let age = 65;
// Output: "Free ride"

// let age = 100;
// let eligibility;

// if (age < 5) {
//   eligibility = "Bus ride is free, age is below 5"
// } else if (age > 60) {
//     eligibility = "Bus ride is free, age is above 60"
//   } else {
//   eligibility = "Full fare";
// }

// console.log(eligibility)

// ?PRACTICE - 5

// Traffic Light Signal
// Write a program that takes a signal color and prints the corresponding action:

// "red" → "Stop"

// "yellow" → "Slow down"

// "greengreen" → "Go"

// Any other input → "Invalid signal"


// let signal = "red";
// Output: "Stop"

// let signal = "red"
// let signal = "yellow"
// let signal = "greengreen"
let signal = "hello"
let action

if (signal == "red") {
  action = "Stop"
} else if (signal == "yellow") {
  action = "Slow down"
} else if (signal == "greengreen") {
  action = "Go"
} else {
  action = "Invalid signal"
}

console.log(action)

// ?PRACTICE - 6
// ATM Withdrawal
// Write a program that checks if a user can withdraw money from the ATM:

// If balance ≥ withdrawal amount → allow

// Else → show "Insufficient balance"

// let balance = 1000;
// let withdraw = 1200;
// Output: "Insufficient balance"

let balance = 10000;
let withdraw = 12000;

if (balance >= withdraw) {
  console.log("Transition is processing")
} else {
  console.log("Insufficient balance")
}

// ?PRACTICE - 7
// Simple Interest Calculator
// Calculate the interest if:

// interest = (principal × rate × time) / 100

// Time is in years

// let principal = 10000;
// let rate = 5; // percent
// let time = 2; // years

// Output: "Interest: 1000"

let principal = 10000;
let rate = 5;
let time = 2;
let interest = (principal * rate * time) / 100

console.log(interest)

// ?PRACTICE - 8
// Number Type Checker
// Write a program to check if a variable is:

// a positive number

// a negative number

// or zero

// let num = -3;
// Output: "Negative number"

let num = -3;

if (num <= -1) {
  console.log("Negative number")
} else if (num >= 1) {
  console.log("Positive number")
} else {
  console.log("Zero")
}

// ?PRACTICE - 9
// Student Pass/Fail
// A student passes if their score is 40 or more out of 100. Otherwise, they fail.

// let score = 39;
// Output: "Fail"

let score = 39;
let result;

if (score >= 40 && score <= 100) {
  console.log("Pass")
} else if (score > 100) {
  console.log("Marking error")
}
else {
  console.log("Fail")
}




// *🎯 INTERVIEW-STYLE CONCEPT QUESTIONS