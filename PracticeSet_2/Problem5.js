const prompt = require('prompt-sync')();
console.log("Q5: Print 'You can drive' or 'You cannot drive' based on age being greater than 18 using ternary operator\n")
let choice
do{
let age = prompt("Enter your age: ")
age = Number.parseInt(age)
let a = (age > 18? "You can Drive" : "You cannot Drive")
console.log(a)
console.log("\n")
choice = prompt("Do you want to continue (Y/n) : ")
}while(choice == "y" || choice == "Y")
console.log("Thanks")