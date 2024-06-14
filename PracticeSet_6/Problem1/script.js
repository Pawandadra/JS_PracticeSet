let age 
/*
//Problem 1 : write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive. 
age = prompt("What is your age?");
age = Number.parseInt(age)
if (age > 18) {
  alert("You can drive")
}
else {
  alert("You cannot drive")
}
*/
  
/*
//Problem 2 : In Q1 use confirm to ask the user if he wants to see the prompt again.
do {
  age = prompt("What is your age?");
  age = Number.parseInt(age)
  if (age > 18) {
  alert("You can drive")
}
else {
  alert("You cannot drive")
}
choice = confirm("Do you want to see the prompt again?")
}while(choice)
*/

/*
//Problem 3 : In the previous question, use console.error to log the error if the age entered is negative
do {
  age = prompt("What is your age?");
  age = Number.parseInt(age)
  
  if (age < 0) {
    console.error("Age cannot be negative !!")
  }
  else if (age > 18) {
    alert("You can drive")
  }
  else {
    alert("You cannot drive")
  }
choice = confirm("Do you want to see the prompt again?")
}while(choice)
*/

/*
//Problem 4 : write a program to change the url to google.com (redirection) if user enters a number greater than 4.
let num = prompt("Enter a number")
num = Number.parseInt(num)

if (num > 4){
  location.href = "https://google.com"
}
else {
  alert("You entered a number less than 4")
}
*/


//Problem 5 : change the background of the page to yellow, red or any other color based on user input through prompt.
let color = prompt("Enter the backgroung color")
document.body.style.background = color
