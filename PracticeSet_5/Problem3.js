console.log("Q3: Filter for numbers divisible by 10 from a given array.\n")

let arr =[5,120,17,20,25,30,26,48,50]
console.log("Given array : ", arr)
let new_arr = arr.filter((element) => {
  return (element%10 == 0)
})
console.log("Filtered array : ", new_arr)