
function handleInput() {
   const userInput = document.getElementById('userInput');

}
const inputValue = userInput.value;

const getRandomNum = (max) => {
   return Math.floor(Math.random() * max)
}

let random_num = getRandomNum(100)
random_num = Number.parseInt(random_num)

let tries = 0

do {
   inputValue = Number.parseInt(inputValue);
   tries++
   
   if (inputValue > random_num){
   ("Your guess is greater than random number. Please try again !!")
   }  
   else if (inputValue < random_num){
      ("Your guess is smaller than random number. Please try again !!")
   } 
   else if (inputValue == random_num){
      ("Congratulations !! You guessed the correct Number.\n Your Score is : "+ (101-tries))
      break
   } 
   else {
      ("You entered invalid data. Please try again !!")
   }
} while (inputValue !== random_num);