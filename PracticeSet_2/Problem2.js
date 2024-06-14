const prompt = require('prompt-sync')(); 

console.log("\nQ2 : Demonstrate the use of switch case statements in javascript")

let choice
do{
let age = prompt("Enter your age: ")
age = Number.parseInt(age)
  switch(age){
  case 11:
  case 13:
  case 15:
  case 17:
  case 19:
      console.log("Your age is odd");
        break;
  case 12:
  case 14:
  case 16:
  case 18:
      console.log("Your age is even");
        break;
  default:
      console.log("You age doesn't lie between 10 and 20");
        break;
  }
choice  = prompt("Do you want to continue (Y/n) : ")
      
}while (choice == "y" || choice == "Y")
console.log("Thanks")