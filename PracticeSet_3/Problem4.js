const prompt = require('prompt-sync')();
console.log("Q4: Write a function to find mean of 5 numbers")

const mean = (x,y,z,w,u)=>{
  return (x+y+z+w+u)/5
}

let a = prompt("Enter the first number : ")
a = Number.parseInt(a)
let b = prompt("Enter the second number : ")
b = Number.parseInt(b)
let c = prompt("Enter the third number : ")
c = Number.parseInt(c)
let d = prompt("Enter the fourth number : ")
d = Number.parseInt(d)
let e = prompt("Enter the fifth number : ")
e = Number.parseInt(e)
console.log("The mean of the given numbers is : " + mean(a,b,c,d,e))