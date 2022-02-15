// const person = {
//     name: "Peter"
// }

// console.log("Hej", person.name) // dot notation. BRUG DETTE
// console.log("Hej", person["name"]) // square bracket notation. BRUG IKKE (bruges sjældent)


const numbers = [1, 34, 45, 456]


// spread operator
const copiedNumbers = [...numbers]
const anotherCopiedNumbers = numbers.slice()

anotherCopiedNumbers.pop() // Fjerner sidste nummer i array

console.log(copiedNumbers)
console.log(anotherCopiedNumbers) // Hvorfor printer den ikke tallene?




