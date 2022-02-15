// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo))

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

function sumToDecimaler() {
   let a = parseFloat(anotherNumberOne)
   let b = parseFloat(anotherNumberTwo)
    sum = a + b

    console.log("Summen med to decimaler: " + sum.toFixed(2))
}
sumToDecimaler()



// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

function sumFemDecimaler() {
   
    console.log(((one + two + three)/3).toFixed(5))
}
sumFemDecimaler()



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Hermed bogstavet: " + letters[2])
// eller
console.log("Hermed bogstavet: " + letters.charAt(2))


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace('javascript', 'Javascript'))

// --------------------------------------



