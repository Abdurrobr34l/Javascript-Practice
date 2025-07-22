// JAVASCRIPT CONDITION PRACTICE:
// {
//   console.log("JAVASCRIPT CONDITION PRACTICE ---------- 1")

//   // 1. Your mom says, if you come home before 6 o'clock, she'll feed you breakfast. And if you're late, she'll give you a broomstick. Code for this condition.
//   let comeHome = true

//   if (comeHome == true) {
//     console.log("she'll feed you breakfast")
//   } else {
//     console.log("she'll give you a broomstick")
//   }

//   // 2. If the login to a mobile app is successful, it will display "Welcome!" If it fails, it will display "Get Lost!" Write a program for this condition.
//   let login = true

//   if (login == true) {
//     console.log("Welcome")
//   } else {
//     console.log("Get Lost!")
//   }

//   // 3. If you run 5 km, you will be given chocolate. If you don't run, you will have a fat belly. Write a program for this condition.
//   let run = 5
//   let iRun = 2

//   if (run <= iRun) {
//     console.log("You will be given chocolate")
//   } else {
//     console.log("You will have a fat belly")
//   }

//   // 4. Suppose your father says that if you pass the exam with more than 80 marks, he will buy you a bike. But if it is less, he will not give you a bike. Write a program to see if you will get a bike or not if your mark is 85.
//   let marks = 85;

//   if (marks > 80) {
//     console.log("He will buy you a bike");
//   } else {
//     console.log("He will not give you a bike");
//   }

//   // 5. If the movie is showing before 9 pm, then you will watch the movie. If it is later, then go home and sleep with oil in your nose. Write a program for this.
//   let ifStart = 9
//   let willStart = 10

//   if (ifStart > willStart) {
//     console.log("Will watch the movie")
//   } else {
//     console.log("Will go home and sleep")
//   }

//   // 6. If the temperature is 30 degrees or more, then turn on the air conditioner. If it is lower, sleep with a blanket wrapped around you. Write the code for this.
//   let temperature = 30
//   let temperatureNow = 45

//   if (temperature <= temperatureNow) {
//     console.log("Turn on the air conditioner")
//   } else {
//     console.log("Sleep with a blanket")
//   }
// }

// JAVASCRIPT MULTIPLE CONDITION PRACTICE:
// {
//   console.log("JAVASCRIPT MULTIPLE CONDITION PRACTICE ---------- 2")

//   // 1. Write a program that checks if the age is more than 18 and the height is more than 60 inches. Then he will push the car, otherwise he will sit in the car.
//   let age = 23
//   let height = 68

//   if (age > 18 && height > 60) {
//     console.log("He will push the car")
//   } else {
//     console.log("He will sit in the car")
//   }

//   // 2. Write a program that checks whether a student is eligible for admission. The math score should be more than 80 or the English score should be more than 85. And if neither of these is true, I will say - I will marry you.
//   let math = 40
//   let English = 40

//   if (math > 80 || English > 85) {
//     console.log("I will marry you")
//   } else {
//     console.log("I will not marry you")
//   }

//   // 3. If a student's GPA is 5 and the family's monthly income is less than 10000, then he will get a scholarship. Otherwise, he will have to pay for his studies.
//   let gpa = 2.5
//   let income = 60000

//   if (gpa == 5 && income < 10000) {
//     console.log("He will get a scholarship")
//   } else {
//     console.log("He will have to pay for his studies")
//   }

//   // 4. A job seeker can take the exam if he is less than 30 years old and has more than 2 years of work experience. Otherwise, he will not be able to take the job exam. Write a program to do so.
//   let aage = 2.5
//   let experience = 2.5

//   if (aage >= 30 && experience > 2) {
//     console.log("He can take the exam")
//   } else {
//     console.log("He will not be able to take the job exam")
//   }

//   // 5. If you have more than 12 eggs in your fridge or no chicken, then you will cook egg korma. Otherwise, you will eat bread and banana. Write a code like this.
//   let eggs = 14
//   let chicken = false

//   if (eggs > 12 || chicken == true) {
//     console.log("Will cook egg korma")
//   } else {
//     console.log("Will eat bread and banana")
//   }

//   // 6. If a person has a body temperature of over 100 degrees or has a cough, he will go to the doctor. Otherwise, he will lie down with a fever. Write a program for this.
//   let temperatures = 98
//   let cough = false

//   if (temperatures > 100 || cough == true) {
//     console.log("He will go to the doctor")
//   } else {
//     console.log("He will not go to the doctor")
//   }

//   // 7. A student will be allowed to take the exam if his attendance is more than 80 percent and homework is submitted. Otherwise auto fail. Write a program for this condition.
//   const attendance = 95
//   const homeworkSubmitted = true

//   if (attendance > 80 && homeworkSubmitted == true) {
//     console.log("Student is allowed to take the exam")
//   } else {
//     console.log("Auto fail")
//   }

//   // 8. If the power goes out at your house and your phone is not charged, then you sit down to read. Otherwise, play video games. Write code for this.
//   let power = true
//   let phone = true

//   if (power == false && phone == false) {
//     console.log("You sit down to read")
//   } else {
//     console.log("Play video games")
//   }

//   // 9. If the price of the shirt is more than 1000 taka and you have a coupon, you will be given a 20 percent discount. Write a  program for this.
//   let price = 1150
//   let coupon = true
//   let discount = 20

//   let afterDiscounted = price - (1150 * 20 / 100)

//   if (price > 1000 && coupon == true) {
//     console.log(afterDiscounted + " taka after 20% off")
//   } else {
//     console.log(price + " taka")
//   }
// }

// JAVASCRIPT else-if CONDITION PRACTICE:
// console.log("JAVASCRIPT else-if CONDITION PRACTICE ---------- 3")
// {
// // 1. You are opening your own shop. If someone purchases more than 3000 rupees in your shop, you will give a 5% discount, and if someone purchases more than 6000 rupees, you will give a 15% discount. If a friend comes and buys something worth 4500 rupees, how much will he have to pay?
// const purchases1 = 3000
// const purchases2 = 6000
// const friendPurchases = 4500
// const discountPurchases1 = friendPurchases - (friendPurchases * 5 / 100)
// const discountPurchases2 = friendPurchases - (friendPurchases * 15 / 100)

// if (friendPurchases > purchases2) {
//   console.log(discountPurchases2 + " taka after 15% discount")
// } else if (friendPurchases > purchases1) {
//   console.log(discountPurchases1 + " taka after 5% discount")
// }

// // 2. If someone's bank account balance is less than 1000 rupees, you will say, "Deposit." If it is between 1000 and 5000, you will say, "Enjoy a luxurious life." And if it is more than 5000, you will say, "You are rich."
// let bankBalance1 = 1000
// let bankBalance2 = 4000
// let bankBalance3 = 5000
// let bankBalance4 = 6000

// if (bankBalance4 < bankBalance1) {
//   console.log("Zihad desposit your money")
// } else if (bankBalance4 >= bankBalance1 && bankBalance4 <= bankBalance3) {
//   console.log("Ahmed enjoy a luxurious life")
// } else {
//   console.log("You are rich Raihan")
// }

// // 3. If a student's marks in an exam are less than 50, we say "Fail", if between 50 and 80, we say "Pass", and if more than 80, we say "A+". Write a JavaScript program that takes a student's marks and displays the correct result.
// let mark1 = 50
// let mark2 = 80
// let studentMark = 92

// if (studentMark < mark1) {
//   console.log("Fail")
// } else if (studentMark >= mark1 && studentMark <= mark2) {
//   console.log("Pass")
// } else {
//   console.log("A+")
// }

// // 4. If a book has fewer than 100 pages, we call it a "small book", if it has between 100 and 500 pages, we call it a "mid-size book", and if it has more than 500 pages, we call it a "heart-attack size book".
// const bookPages1 = 100
// const bookPages2 = 500
// const bookPages3 = 600

// if (bookPages3 < bookPages1) {
//   console.log("Small book")
// } else if (bookPages3 >= bookPages1 && bookPages3 <= bookPages2) {
//   console.log("Mid-size book")
// } else {
//   console.log("Heart-attack size book!")
// }

// // 5. Write a program that checks the temperature and says "Ice" if it is less than 0 degrees, "Cool Cool" if it is between 0 and 20 degrees, and "Hot Hot" if it is more than 20 degrees.
// let temp1 = 0
// let temp2 = 20
// let tempNow = 27

// if (tempNow < temp1) {
//   console.log("Ice")
// } else if (tempNow >= temp1 && tempNow <= temp2) {
//   console.log("Cool Cool")
// } else {
//   console.log("Hot Hot")
// }

// // 6. You have a gaming app. If the player's level is less than 10, you'll say "novice", if between 10 and 50, you'll say "Expert", and if above 50, you'll say "Pro Gamer".
// let noviceLevel = 10 
// let expertLevel = 50
// let actualLevel = 150

// if (actualLevel < noviceLevel) {
//   console.log("Novice")
// } else if (actualLevel >= noviceLevel && actualLevel <= expertLevel) {
//   console.log("Expert")
// } else {
//   console.log("Pro Gamer")
// }
// }

// JAVASCRIPT NESTED else-if CONDITION PRACTICE:
// {
// console.log("JAVASCRIPT NESTED else-if CONDITION PRACTICE ---------- 4")

// // 1. If a friend invites you, then you will go to his birthday party. And if he doesn't invite you, then you will remove him from your friend list. And if a friend invites you, then while going to the party, you will check how much money you have in your pocket. If you have more than 1000 rupees, then you will take a gift for your friend. Otherwise, you will go empty-handed.
// let invites = true;
// let pocketMoney = 900; // you can change this to test different cases

// if (invites === true) {
//   console.log("Will go to the party");

//   if (pocketMoney > 1000) {
//     console.log("Will take a gift");
//   } else {
//     console.log("Will go empty-handed");
//   }

// } else {
//   console.log("Will remove him from friend list");
// }

// // 2. If a guest comes to your house, first ask them if they want tea. If they want tea, then ask them if they want biscuits with it. If they don't want it, say, 'Just tea is ready.' And if they don't want tea, say, 'Sit down and watch Star Jalsa.'
// let tea = true
// let biscuits = true

// if (tea == true) {
//   console.log("Want biscuits with it")

//   if (biscuits != false) {
//     console.log("Just tea is ready")
//   }

// } else {
//   console.log("Sit down and watch TV")
// }

// // 3. You've created an app. First, you'll check if the user's account is active. If it's active, you'll check their subscription. If it's premium, you'll show them the premium features. If not, you'll say, 'Check out the free version.'
// let userAccountActive = true;
// let userSubscription = "free version";

// if (userAccountActive === true) {
//   if (userSubscription === "premium") {
//     console.log("Check out the Premium features");
//   } else {
//     console.log("Check out the free version");
//   }
// } else {
//   console.log("The account is inactive");
// }

// // 4. I'll check if there's food in your fridge. If there is, I'll heat the food. And if not, I'll check if the food delivery app is working. If it's working, I'll order it, if not, I'll say, 'I'm fasting today.'
// let foodInFridge = false
// let pathao = true

// if (foodInFridge == true) {
//   console.log("I'll heat the food")
// } else if (pathao == true) {
//   console.log("I'll order it")
// } else {
//   console.log("I m fasting today")
// }

// // 5. Suppose you are throwing a party. First, you will see if more than 100 guests will come to the party. If they do, then you will check if everyone will bring gifts. If they do, you will say, 'Let's party all night.'  Otherwise, you will say, 'I will party with myself.'
// let guest = 300
// let gifts = false

// if (guest > 100 && gifts == true) {
//   console.log("Let's party all night")
// } else {
//   console.log("I will party with myself")
// }

// }

// 1. 📦 Parcel Delivery Tracker
// A delivery service app tracks parcel progress.

let parcelDispatched = true;
let outForDelivery = true;
let delivered = false;

// Write nested if-else:

// - If parcel dispatched:
//   - If out for delivery:
//     - If delivered: "Parcel delivered successfully."
//     - Else: "Parcel is out for delivery."
//   - Else: "Parcel is being prepared for shipment."
// - Else: "Parcel not yet dispatched."

if (parcelDispatched) {
  if (outForDelivery) {
    if (delivered) {
      console.log("Parcel delivered successfully.")
    } else {
      console.log("Parcel is out for delivery.")
    }
  } else {
    console.log("Parcel is being prepared for shipment.")
  }
} else {
  console.log("Parcel not yet dispatched")
}

// 2.  💼 Challenge: Internship Progress Tracker
// You're building a tool to track your internship performance and progress.

// 🧾 Problem:
// You need to decide what message to show based on the following conditions:

let taskSubmitted = true;
let feedbackReceived = true;
let clientHappy = false;

// ✅ Logic Instructions:
// If the task is submitted:

// If feedback is received:

// If the client is happy → show: "Great work! Move to the next task."

// Else → show: "Revise the task based on feedback."

// Else → show: "Waiting for client feedback."

// Else:

// If feedback is received → show: "You skipped submission but got feedback?! Something’s wrong."

// Else → show: "Submit your task to get feedback."

// 🎯 Your Task:
// Write the correct nested if-else code for the above scenario.

// if (taskSubmitted) {
//   if (feedbackReceived) {
//     if (clientHappy) {
//       console.log("Great work! Move to the next task.")
//     }
//   }
// }

if (taskSubmitted) {
  if (feedbackReceived) {
    if (clientHappy) {
      console.log("Great work! Move to the next task.")
    } else {
      console.log("Revise the task based on feedback.")
    }
  } else {
    console.log("Waiting for client feedback.")
  }

} else {
  // what if the feedbackReceived value is true
  if (feedbackReceived) {
    console.log("You skipped submission but got feedback?! Something’s wrong.");
  } else {
    console.log("Submit your task to get feedback.");
  }
}

