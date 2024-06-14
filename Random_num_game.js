const prompt = require("prompt-sync")()
console.log("Welcome to The World of - Guess and Input. \n")

const getRandomNum = (max) => {
   return Math.floor(Math.random() * max)
}

let random_num = getRandomNum(100)
random_num = Number.parseInt(random_num)

let inpNum
let tries = 0

do {
   inpNum = prompt("Guess the random number (between 0-100) : ");
   inpNum = Number.parseInt(inpNum);
   tries++
   
   if (inpNum > random_num){
   console.log("Your guess is greater than random number. Please try again !!")
   }  
   else if (inpNum < random_num){
      console.log("Your guess is smaller than random number. Please try again !!")
   } 
   else if (inpNum == random_num){
      console.log("Congratulations !! You guessed the correct Number.\n Your Score is : "+ (101-tries))
   } 
   else {
      console.log("You entered invalid data. Please try again !!")
   }
} while (inpNum !== random_num);