// ? 22 QUESTIONS SOLVED

{// JAVASCRIPT BASIC COMPARISON PRACTICE:
  console.log("JAVASCRIPT BASIC COMPARISON PRACTICE ---------- 1")

  // Let's compare who ate more food between you and your younger brother. You ate 7 sandwiches, and your younger brother ate 5. Write a program to see who ate more.
  const me = 7
  const brother = 5

  const iAteMore = me > brother
  const brotherAteMore = me < brother

  console.log(iAteMore, brotherAteMore);

  // There are 45 students in your class, and 50 in the next class. Write a program to see which class has more students.
  const myClassStudents = 45
  const nextClassStudents = 50

  const myClassMore = myClassStudents > nextClassStudents
  const friendClassMore = myClassStudents < nextClassStudents

  console.log(myClassMore, friendClassMore);

  // You and your friend got marks in an exam. You got 75, and your friend got 75. Write a program to check whether your and your friend's marks are the same.
  const myMark = 75
  const friendMark = 75
  const isItSame = (myMark == friendMark)
  console.log(isItSame);

  // You have set a target of saving 100 taka. So far you have saved 95 taka. Write a program to check whether you have reached the target or saved more than that.
  const target = 100
  const saved = 95

  const reachedTarget = target == saved
  const savedMore = target == saved

  console.log(reachedTarget, savedMore);

  // Write a program to check if 10 and 7 are different.
  console.log(10 == 7);

  // Check whether 20 is less than or equal to 15.
  console.log(20 <= 15)

  // You and your friend took the exam at the same time. After taking the exam, your friend is crying and crying. His exam was horrible, he will fail. A month later, the results show that you got 45 marks and your friend got 97 marks. This time, check whether your friend got less marks than you or not.
  const myMarks = 45
  const friendMarks = 97

  console.log(myMarks >= friendMarks);
}

// JAVASCRIPT BASIC COMPARISON PRACTICE:
console.log("JAVASCRIPT VARIABLE COMPARISON PRACTICE ---------- 2")

// 1. Your younger brother is 10 years old, and you are 15 years old.Write a program to check whether your younger brother's age is less than or equal to your age.
let brother = 10
let me = 15
let ageChecking = brother <= me

console.log(ageChecking);

// 2. The passing mark in an exam is 33. Suppose you got 45. Check whether you passed or not.
const passingMark = 33
const myMark = 45
const passedOrNot = myMark > passingMark;

console.log(passedOrNot);

// 3. The two variables are the price of grapefruit and kangaroo.Compare whether grapefruit is cheaper than kangaroo or not.
let grapefruit = 120;
let kangaroo = 200;

let isGrapefruitCheaper = grapefruit < kangaroo;

console.log(isGrapefruitCheaper); // true or false

// 4. You have read 10 books, and your friend is reading 10. Check whether you have read the same number of books or not.
let iRead = 10
let friendRead = 10
let isItSame = iRead == friendRead

console.log(isItSame)

// 5. You have 15 biscuits and your friend has 20. Check whether you got fewer biscuits than your friend.
let mybiscuits = 15
let friendBiscuits = 20
let whoGotLess = mybiscuits < friendBiscuits

console.log(whoGotLess)

// 6. In a football match, Real Madrid scores 2 goals, and Barca scores 3 goals.Check whether Real Madrid has scored fewer goals than Barca.
const realMadrid = 2
const Barca = 3
const scoredLessGoal = realMadrid < Barca

console.log(scoredLessGoal)

// 7. Your name is "Rahim", and your friend's name is "Karim". Check if your name is the same as your friend's name.
const myName = "Rahim"
const friendName = "Karim"
const areTheySame = myName == friendName

console.log(areTheySame)

// 8. You studied today(true), and your friend did not study(false).Check if you did the same thing.
const iStudied = true
const friendStudied = false
const ifIDidSame = iStudied == friendStudied

console.log(ifIDidSame)

// JAVASCRIPT ADVANCE COMPARISON PRACTICE:
console.log("JAVASCRIPT ADVANCE COMPARISON PRACTICE ---------- 3")

// 1. You have 50 taka, and your friend has "50" taka (as a string). Write a program and see what the output will be if you give 50 == "50" and if you give 50 === "50".
let mySelf = 50
let myFriend = "50"
let isAnyEqual = mySelf == myFriend
let isBothEqual = mySelf === myFriend

console.log(isAnyEqual, isBothEqual)

// 2. You have written "JavaScript" in your programming notebook, and it is a string type data. Now you want to see what the output will be if you give "JavaScript" == 'JavaScript' and "JavaScript" === 'JavaScript'. Explain why the output is the same.
const text1 = "JavaScript"
const firstCheck = text1 == text1
const secondCheck = text1 === text1

console.log(firstCheck, secondCheck)


// 3. Write a program, and write a comment explaining what output will be produced if 25 == "25" and 25 === "25" are given between 25 and "25".
let value1 = 50
let value2 = "50"
let isAnyEquals = value1 == value2 //(Output will be true because value is same)
let isBothEquals = value1 === value2 //(Output will be false because value is same not the type)

console.log(isAnyEquals, isBothEquals)

// 4. If you compare "apple" and "apple", what will be the output of "apple" == "apple" and "apple" : "apple".
const apples = "apple"
const firstChecks = apples == apples
const secondChecks = apples === apples

console.log(firstChecks, secondChecks)

// 5. Write a program to see what the output will be for "test" == "TEST" and "test" === "TEST" between "test" and "TEST".
const test1 = "TEST"
const test2 = "test"
const againChecks1 = test1 == test2
const againChecks2 = test1 === test2

console.log(againChecks1, againChecks2)


// 6. If the value of variableX is 15 and the value of variableY is "20", what will be the output of variableX != variableY and variableX !== variableY?
let variableX = 15
let variableY = "20"
let compare1 = variableX != variableY //(true because the values are not same)
let compare2 = variableX !== variableY //(false as two conditions needs to be same value and datatype, here value is not same but datatype is)

console.log(compare1, compare2)

// 7. The value of variableA is "hello" and the value of variableB is "Hello". Now write a program to check whether variableA == variableB and variableA === variableB.
let variableA = "hello"
let variableB = "Hello"
let compareAgain1 = variableA == variableB
let compareAgain2 = variableA === variableB

console.log(compareAgain1, compareAgain2)