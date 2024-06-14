const prompt = require('prompt-sync')(); 

console.log("Q3: Write a javascript program to find whether a number is divisible by 2 and 3")

let choice

do{
  let num = prompt("Enter a number: ")
  num = Number.parseInt(num)
  if (num % 2 == 0 && num % 3 == 0){
    console.log("Number is divisible by 2 and 3")
  }
  else{
    console.log("Number is not divisible by 2 and 3\n")
  }
 choice = prompt("Do you want to continue (Y/n) : ")
}while(choice == "y" || choice == "Y")
console.log("Thanks")