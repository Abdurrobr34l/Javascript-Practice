// ? 26 QUESTIONS SOLVED

// JAVASCRIPT DATA TYPE PRACTICE:
console.log("JAVASCRIPT DATA TYPE PRACTICE ---------- 1")

// 1. Write a program using "typeof" to check the type of a variable. Suppose, declare a variable "price" whose value is 555, now check this type in the console.
let price = 555
console.log(typeof price)

// 2. Declare a variable "learning" with the value true, and output it using console.log(). Then use "typeof" to see what type of variable it is.
let mylearning = true
console.log(mylearning, typeof mylearning)
// console.log(typeof mylearning)

// 3. A variable called megaCity has the value "Dhaka". Now use "typeof" to see what type this variable is.
let megaCity = "Dhaka"
console.log(typeof megaCity)

// 4. You put your hand on your forehead in the scorching heat, and you felt like you were about to burn yourself. At that moment, you declared a variable called "temperature", whose value is 102.5. Check what type of variable it is with "typeof".
let temperature = 102.5
console.log(typeof temperature)

// 5. You create a variable called "isHungry" because you are hungry, and its value is true. Now use console.log() and "typeof" to check its type.
let isHungry = true
console.log(isHungry, typeof isHungry)

// 6. There is a variable named "isRich", whose value is true. Now check its type in the console.
let isRich = true
console.log(typeof isRich)

// JAVASCRIPT LET, CONST PRACTICE:
console.log("JAVASCRIPT LET, CONST PRACTICE ---------- 2")

// 1. Put your current age in a variable called age. Print it to the console. Then set the new value in the age variable and print it to the console again.
let age = 23
age = 24
console.log(age)

// 2. You now have 500 taka in your pocket, put it in a variable called pocketMoney. Then set the value of pocketMoney to 150N and print it to the console.
let pocketMoney = 500
pocketMoney = 150
console.log(pocketMoney)

// 3. You plan to study for 4 hours, put it in a variable called studyTime. Then update the value of studyTime to the number of hours you actually studied today. If the value is zero, set it to 0 and check the console.
let studyTime = 4
studyTime = 6
console.log(studyTime)

// 4. You have a total of 3 friends, put this number in a variable called friendsCount. Later 2 of your friends left you. Now update the value of friendsCount and see its output in the console.
let friendsCount = 3
friendsCount = (friendsCount - 2)
console.log(friendsCount)

// 5. You bought a new phone for 25000 taka. Declare a variable for it. And after a month, when you go to sell that phone, you see that the price is only 12000, what else can you do! First, give the value of a variable called phone Price as 25000. Then update it with 12000 and see it in the console.
let phonePrice = 25000
phonePrice = 12000
console.log(phonePrice + " Phone Price")

// 6. There are 40 chairs in your class. After a few days, the legs of 2 chairs broke. Update this value in a variable called chairsCount. After a few more days, the seniors from the next room came and took 6 chairs. This time also update the value of chairsCount and output the final value to the console.
let chairs = 40
let chairsCount = (chairs - 2)
chairsCount = (chairsCount - 6)
console.log(chairsCount + " chairs")

// 7. You plan to play for 3 hours today, put it in a variable called playTime. Then update the value of playTime to reflect how many hours you actually played. If you didn't play, set the value of playTime to 0 and check the console.
let playTime = 3
let actuallyPlayed = (playTime - 2)
console.log(actuallyPlayed + " hour")


// JAVASCRIPT NAMING PRACTICE:
console.log("JAVASCRIPT NAMING PRACTICE ---------- 3")

// • Write a program where you declare variables using camelCase. Suppose you declare a string variable named your favorite food. And give it a value.
const favoriteFood = "Apple"

// • Check whether the variable name is case-sensitive or not. Write a program and declare two variables, one named "city" and the other named "City". Give the value of the first one "Chittagong" and the value of the second one "Dhaka". Use console.log() to see the two outputs.
const city = "Chittagong"
const City = "Dhaka"
console.log(city, City)

// • You declare a variable called userName and give it the value Johan. Now declare another variable called username and give it the value Jovan. Check the two outputs with console.log().
const userName = "Johan"
const username = "Jovan"
console.log(userName, username)

// • I will declare a variable in English called my home address (I didn't say my home address). I will declare the variable using camelCase. Then I will set its string to a value.
const  myHomeAddress = "My home"
console.log(myHomeAddress)

// • Declare a variable named super and set the value to the number of runs scored in the super over. Is the output you see correct or is there a problem?
/* const super = 32
console.log(super) Using Reserved Keyword super nameing brings up error */

// • Write a variable called class to record the class you are in. Then see what the output shows.
/* const class = 32
console.log(class) Using Reserved Keyword class nameing brings up error */

// • To determine who will bat at the second position, create a variable called 2ndPosition and enter the name of a batsman there. See if the output shows it. If there is a problem, comment on the variable and write what needs to be done. 
/* const 2ndPosition = "Me"
console.log(2ndPosition) STARTING OF A VARIABLE NAME WE CANNOT WRITE NUMBER */

const mySelf = {
  myName: "Abdur Rob",
  age: 23,
};

// mySelf.age = mySelf.age + 2;
mySelf["age"] = mySelf["age"] + 2;

console.log(mySelf, typeof mySelf)

// JAVASCRIPT PARSE PRACTICE:
console.log("JAVASCRIPT PARSE PRACTICE ---------- 4")

// Let's say you're doing a fun calculation. You write down '20', but it's in string form. Can you convert the string to a real number and add 10 to it?
let number1 = "20"
let convertedNumber = parseInt(number1)

console.log(convertedNumber);

// You have a value in fractional form, such as '3.14159'. Write a program to convert this value to an integer.
let fractionNumber = "3.14159"
let integerNumber = parseInt(fractionNumber)

console.log(integerNumber);

// Try converting a string named 'premikBoy' to a number. See what the output is.
let randomName = "premikBoy"
let randomNameConvert = parseInt(randomName)

console.log(randomNameConvert)

// * You added 3.456 and 2.789. In the output, you want to see only 2 decimal places. How to display it? Write a program.
let adding = 3.456 + 2.789
let answer = adding.toFixed(2) // ?(By using toFixed we can tell them how many decimal place do we want our answer)

console.log(answer);

// Suppose you have '56.78' and '12.34' in string form. Now how do you add these two to get the original number? Write a program to find that.
let num1 = "56.78"
let num2 = "12.34"

// Converted string into number
let newNum1 = parseFloat(num1)
let newNum2 = parseFloat(num2)

console.log(newNum1 + newNum2);

// Suppose you have '10.5678' and '5.4321'. You want to see up to 1 place after the decimal in the output. How would you display that?
let numb1 = "10.5678"
let numb2 = "5.4321"

// Converted string into number
let newNumb1 = parseInt(numb1)
let newNumb2 = parseInt(numb2)
// Adding both numbers
let total = newNumb1 + newNumb2

console.log(total.toFixed(1));

// Now round '42.45689754' to 3 decimal places.
console.log(42.45689754.toFixed(3))