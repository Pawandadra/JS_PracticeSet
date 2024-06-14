let age 

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
