const prompt = require('prompt-sync')();
console.log("Q1: Create an array of numbers and take input from the user to add numbers to this array.\n")
let n = prompt("Enter the number of elements you want to add in the array :")
n = Number.parseInt(n)
console.log("\n")
let arr = []
for (let i=0; i<n; i++) {
  let a = prompt("Enter the element no " + (i+1) + " : ")
  a = Number.parseInt(a)
  arr.push(a)
}
console.log(arr)