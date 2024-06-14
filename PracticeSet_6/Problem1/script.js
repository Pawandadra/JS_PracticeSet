let age 

//Problem 1 : write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive. 
age = prompt("What is your age?");
age = Number.parseInt(age)
if (age > 18) {
  alert("You can drive")
}
else {
  alert("You cannot drive")
}