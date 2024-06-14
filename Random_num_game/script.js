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
   alert("Your guess is greater than random number. Please try again !!")
   }  
   else if (inpNum < random_num){
      alert("Your guess is smaller than random number. Please try again !!")
   } 
   else if (inpNum == random_num){
      alert("Congratulations !! You guessed the correct Number.\n Your Score is : "+ (101-tries))
      break
   } 
   else {
      alert("You entered invalid data. Please try again !!")
   }
} while (inpNum !== random_num);