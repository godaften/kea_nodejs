const name = "hans"
const age = 4

console.log("hej " + age)// brug ikke
console.log("hej", age)// brug - hermed kan man se typen af variabel i terminalen 
//+ systemet ikke prøver at få variablerne til at være af samme type(?)

console.log("hej", name, age)

console.log(`hej ${name}`)

console.log(2 == "2") // brug aldrig kun 2 ==. Den "konverterer" variable og sammenligner. 
//Hvis en variable skal konverteres, så gør det selv. Giver True
console.log(2 === "2") // brug altid 3 === så den sammenligner typer. Giver False

console.log(2 !== "2") // her bruges !== . Brug aldrig kun !=.




