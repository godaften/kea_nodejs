// OPGAVE MED AFLEVERINGSDATO 14022022
// LAV ET NYT EXPRESS PROJEKT
// LAV REST API'ER TIL CRUD MED EMNET MOVIES. FØLG REST KONVENTIONER
// GEM DATA I ET ARRAY

const express = require("express")
const app = express() 

app.use(express.json())

// Array med dummy data
const movies = [
    { id: 1, navn: 'ET' },
    { id: 2, navn: 'Star Wars' },
    { id: 3, navn: 'De grønne slagtere' },
]

// READ - viser alle film
app.get('/movies', (req, res) => {

    // Arrayet movies indhold vises i browser
    res.send(movies)
})

// READ - i url sættes id på den film, der ønskes vist
app.get('/movies/:id', (req, res) => {

    // parseInt laver id fra string til int, så metoden find kan bruge id
    const movie = movies.find(m => m.id === parseInt(req.params.id)) 

    // Hvis der ikke er en film med valgte id, sendes https status 404 + fejlmeddelelse
    // Return gør, at metoden stopper herefter
    if (!movie) return res.status(404).send('Filmen blev ikke fundet.')

    // Navn og id på den valgte film vises i browser
    res.send(movie)
})

// CREATE - Opret som json i fx Postman { "navn": "navn på film" }
app.post('/movies', (req, res) => {
    // Hvis der ikke er skrevet navn (eller noget), sendes https status 400 + fejlmeddelelse
    if (!req.body.navn) return res.status(400).send('Husk at skrive et navn på filmen, du vil oprette.')

    // Filmen oprettes med nyt id.
    const movie = {
        id: movies.length + 1,
        navn: req.body.navn
    }

    // Filmen puttes ind sidst i movies arrayet
    movies.push(movie)

    res.send(movie)
}) 

// UPDATE - i url sættes id på filmen, der skal opdateres. Opdater i fx Postman { "navn": "nyt navn på film" }
app.put('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id))
    if (!movie) return res.status(404).send('Filmen blev ikke fundet.')

    if (!req.body.navn) return res.status(400).send('Husk at skrive et navn på filmen, du vil opdatere.')

    movie.navn = req.body.navn
  
    res.send(movie)
})

// DELETE - i url sættes id på filmen, der skal slettes.
app.delete('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id))
    if (!movie) return res.status(404).send('Filmen blev ikke fundet.')

    // Variablen index holder valgte id på filmen, der skal slettes
    const index = movies.indexOf(movie)
    // metoden splice splitter arrayet ved index og sletter én plads i arrayet (valgte id)
    movies.splice(index, 1)

    res.send(movie)
})

app.listen(8080, () => console.log("Filmserveren lever!"))