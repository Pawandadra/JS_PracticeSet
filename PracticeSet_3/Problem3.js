const prompt = require('prompt-sync')();
console.log("Q3: Write a program to print 'try again' until the user enters the correct number")

let cn = 335 // cn refers to correct number
let n
do{
  n = prompt("Enter a correct number : ")
  n = Number.parseInt(n)
  if (n == cn)
  {
    console.log("The entered number is correct")
  }
  else {
    console.log("Try again !!")
  }
}while (n != cn)