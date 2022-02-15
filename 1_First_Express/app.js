//require("express") // her er det blot inkluderet
//require er traditionel node. Nu kan bruge import i stedet. 

const express = require("express") //returnerer en funktion
const app = express() // instantierer express

// const app = require("express")() // skrevet på en linje(higher order function). 
// BRUG DEN ANDEN MED TO LINJER.

// app er vores server (?)


// OPGAVE. Lav en tom callback funktion
// app.get("/",  () => {}) // bemærk get er skrevet med småt i metoden app.get



// skal skrives for at få den til at pass body as json

app.use(express.json())


// endpoint og callback function. Skriv req og res (standard konvention)
app.get("/",  (req, res) => {
    res.send({message: "Velkommen til serveren. Min første route!"})
})


app.post("/", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})



// OPGAVE. Lav en GET route called about that sends some info about the server
// OPGAVE. Implement a POST request handler on the endpoint /opinion based 
// on the client data the server sends a response that contains an opinion

app.get("/about", (req, res) => {
    res.send({message: "Server er bare superduper!"})
   
})

app.post("/opinion", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


// app.listen skal være i bunden. God konvention. Så er det nemt for alle at se porten.
app.listen(8080)






