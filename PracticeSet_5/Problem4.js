console.log("Q4: Create an array of square of given numbers.\n")

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log("Given array : ", arr)

let new_arr = arr.map((element) => {
  return element * element
})
console.log("Squared array : ", new_arr)