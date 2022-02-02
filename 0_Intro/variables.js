"use strict" // Skal være top level i filen eller den pågældende metode. Er ikke nødvendig - 
//viser blot hvis en variable ikke har en type. Bruges til at opdage forglemmelser.

// var someVariable = "value" // Brug ikke var. Den er global og ikke scope specific. Bruges aldrig. Aldrig behov for den.

//totalGlobal = "NEVER do this!!!" // variable uden identifier. Vil ikke vise fejl medmindre man har brugt use strict

let banana = "Return to monkey"

banana = "Giv en ekstra banan til aben"

const monkey = {
    name: "Hans"
}

let monkey2 // man kan godt lave variablen uden initialisering med let
//const monkey3 // man kan ikke lave variablen uden initialisering når man bruger const

monkey.age = 16 // tilføjer alder til aben
monkey.name = "Lille Per" // skifter navnet på abe objektet (JSON)

console.log(monkey)

// let vs var
/*
{
    let someVariable = true; 
    {
        let someVariable = false
    }
    console.log(someVariable)
}

{
    var someVariable = true; 
    {
        var someVariable = false
    }
    console.log(someVariable)
}*/

/*
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000) // makes callback
} 

for (var i = 0; i < 5; i++) { //når var bruges, skrives der 555555. Brug i let i stedet for fix.
    setTimeout(() => {
        console.log(i)
    }, 1000)
} */

const Liva = {
    navn: "Liva",
    alder: 8,
    kæledyr: "3 katte",
    livret: "sushi"

} 
Liva.alder = 9
console.log(Liva)


