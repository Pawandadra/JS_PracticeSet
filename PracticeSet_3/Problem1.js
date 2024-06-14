console.log("Q1: Write a program to print the marks of a student in an object using for loop")

let marks = {
    Harry : 45,
    Pawan : 65,
    Aman : 95
}
for (let i=0; i<Object.keys(marks).length; i++)
{
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}