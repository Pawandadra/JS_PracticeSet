const prompt = require('prompt-sync')(); 

console.log("Q1: Use logical operators to find whether the age of a person lies between 10 and 20?")

let age = prompt("Enter your age: ")
if (age > 10 && age < 20){
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age does not lie between 10 and 20")
}