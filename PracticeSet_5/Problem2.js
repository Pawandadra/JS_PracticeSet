const prompt = require('prompt-sync')();
console.log("Q2: Keep adding numbers to the array in Q1 until 0 is added to the array.\n")
let arr = []
let a
do{
    a = prompt("Enter the element : ")
    a = Number.parseInt(a)
    arr.push(a)
}while (a != 0)
console.log(arr)