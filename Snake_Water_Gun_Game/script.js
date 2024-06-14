const random_no = (max) => {
    return Math.floor(Math.random() * max)
  }

  let comp
  const getCpuChoice =() =>{
    comp = random_no(3)
    switch(comp){ 
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
    cpu = getCpuChoice(comp)
    user = prompt("Enter S, W or G").toUpperCase()

    if (user == "S" && cpu == "W" || user == "W" && cpu == "G" || user == "G" && cpu == "S"){
      alert("Congratulations!! You win.")
    }

    else if (user == "S" && cpu == "G" || user == "W" && cpu == "S" || user == "G" && cpu == "W" ){
      alert("You lose!!")
    }
   
    else if (user === cpu){
      alert("Both have same choices.")
    }

    else{
      alert("Invalid choice.")
    }
  choice = confirm("Do you want to play again?")
  }while(choice)