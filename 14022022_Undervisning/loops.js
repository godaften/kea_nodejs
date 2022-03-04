// don't use for loops because....
// overly verbose
//  eror prone (index out of bounds in Java)
// is not functional
// Maps er vejen frem
// If using forEach, use when not working with the data afterwards

// task. Add charge to batteries
const carBatteries = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8]

const chargedCarBatteries = carBatteries.map(battery => battery + 0.4)
console.log(chargedCarBatteries)

// place each car and its battery in a separate indexed charger
// no need to return a new array so forEach is allowed
// task how do I get index
carBatteries.forEach((battery, index) => console.log(`You go in stand ${index + 1}.`))

// filter out the batteries that have more than 50% charge
const drainedBatteries = carBatteries.filter(battery => battery < 0.5)

console.log(drainedBatteries)

