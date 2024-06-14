const prompt = require('prompt-sync')();
console.log("Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated )")

let n = prompt("Enter the number whose factorial needs to be calculated : ")
n = Number.parseInt(n)
let arr = []
for (let i=0; i<n; i++){
  arr.push(i+1)
}

let factorial = arr.reduce((ele1,ele2) => {
  return ele1*ele2
})
console.log("Factorial of " + n + " is " + factorial) 