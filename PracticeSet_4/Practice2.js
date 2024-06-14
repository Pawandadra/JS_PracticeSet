console.log("Q2: Explore the includes, startswith and endswith functions of a string")
const sentence = "If you sin, You have to pay"
word = "If"
console.log("Original String : " + sentence)
console.log("Given Word : " + word)
console.log(`This string includes given word :  ${sentence.includes(word) ? "Yes" : "No"}`)
console.log(`This string starts with given word :  ${sentence.startsWith(word) ? "Yes" : "No"}`)
console.log(`This string ends with given word : ${sentence.endsWith(word)? "Yes" : "No"}`)
console.log("\n")