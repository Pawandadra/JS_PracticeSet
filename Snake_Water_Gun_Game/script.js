const random_no = (max) => {
    return Math.floor(Math.random() * max)
  }
  let cpu
  const getCpuChoice =(cpu) =>{
    cpu = random_no(3)
    switch(cpu){ 
      case 0:
        return "S"
      case 1:
        return "W"
      case 2:
        return "G"
      default :
        return "Invalid"
    }
  }
  let user
  let choice
  do{
    cpu = getCpuChoice(cpu)
    user = prompt("Enter S, W or G").toUpperCase()
    if (user == "S" && cpu == "W"){
      alert("Congratulations!! You win.")
    }
    else if (user == "S" && cpu == "G"){
      alert("You lose!!")
    }
    else if (user == "W" && cpu == "S"){
      alert("You lose!!")
    }
    else if (user == "W" && cpu == "G"){
      alert("Congratulations!! You win.")
    }
    else if (user == "G" && cpu == "S"){
      alert("Congratulations!! You win.")
    }
    else if (user == "G" && cpu == "W"){
      alert("You lose!!")
    }
    else if (user == "S" && cpu == 0 || user == "W" && cpu == 1 || user == "G" && cpu == 2){
      alert("Both have same choices.")
    }
    else{
      alert("Invalid choice.")
    }
  choice = confirm("Do you want to play again?")
  }while(choice)