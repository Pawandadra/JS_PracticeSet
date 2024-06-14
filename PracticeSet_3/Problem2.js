console.log("Q2: Write a program to print the marks of a student in an object using for in loop")

let marks = {
    Harry : 45,
    Pawan : 65,
    Aman : 95
}
for (let i in marks)
{
  console.log("The marks of " + [i] + " are " + marks[i])    
}