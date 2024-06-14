let age 

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