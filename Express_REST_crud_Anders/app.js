// OPGAVE MED AFLEVERINGSDATO 14022022
// LAV ET NYT EXPRESS PROJEKT
// LAV REST API'ER TIL CRUD MED EMNET MOVIES. FØLG REST KONVENTIONER
// GEM DATA I ET ARRAY

// ANDERS LØSNING:

const express = require("express")
const app = express() 

app.use(express.json())

// BEMÆRK let bruges da der slettes og tilføjes til arrayet
let movies = [
    { id: 1, navn: 'ET' },
    { id: 2, navn: 'Star Wars' },
    { id: 3, navn: 'De grønne slagtere' },
]

let CURRENT_ID = 3 // simuler sql database princip

app.get('/movies', (req, res) => {
    res.send({ data: movies })

    // DET JEG AFLEVEREDE
    // res.send(movies)
})

// Anders
app.get('/movies/:id', (req, res) => {

    const foundMovie = movies.find(movie => movie.id === Number(req.params.id))
    foundMovie ? res.send({ data: foundMovie }) : res.status(404)

    // GET - DET JEG AFLEVEREDE:
    // const movie = movies.find(m => m.id === parseInt(req.params.id)) 
    // if (!movie) return res.status(404).send('Filmen blev ikke fundet.')
    // res.send(movie)
})


// Anders
app.post("/movies", (req, res) => {
    const movieToCreate = req.body
    movieToCreate.id = ++CURRENT_ID
    movies.push(movieToCreate)
    res.send({ data : movieToCreate })
})


// POST - DET JEG AFLEVEREDE
// app.post('/movies', (req, res) => {
//     if (!req.body.navn) return res.status(400).send('Husk at skrive et navn på filmen, du vil oprette.')

//     const movie = {
//         id: movies.length + 1,
//         navn: req.body.navn
//     }

//     movies.push(movie)

//     res.send(movie)
// }) 


// Anders Patch
app.patch("/movies/:id", (req, res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id))
    if (foundMovieIndex !== -1) {
    const foundMovie = movies[foundMovieIndex]
    const movieToUpdateWith = { ... foundMovie, ...req.body, id:foundMovie.id } //spread operator
    movies [foundMovieIndex] = movieToUpdateWith
    res.send({ data:movieToUpdateWith })
    } else {
        res.status(404).send({})
    }
})


// Det jeg afleverede
// UPDATE - i url sættes id på filmen, der skal opdateres. Opdater i fx Postman { "navn": "nyt navn på film" }
app.put('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id))
    if (!movie) return res.status(404).send('Filmen blev ikke fundet.')

    if (!req.body.navn) return res.status(400).send('Husk at skrive et navn på filmen, du vil opdatere.')

    movie.navn = req.body.navn
  
    res.send(movie)
})


// DELETE - Anders
app.delete('/movies/:id', (req, res) => {

    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id))

    if (foundMovieIndex !== -1) {
        movies.splice(foundMovieIndex, 1)
        res.send({ })
    }
    else {
        res.status(404).send({ })
    }
})

// DELETE - det jeg afleverede
// app.delete('/movies/:id', (req, res) => {
//     const movie = movies.find(m => m.id === parseInt(req.params.id))
//     if (!movie) return res.status(404).send('Filmen blev ikke fundet.')

//        const index = movies.indexOf(movie)

//     movies.splice(index, 1)

//     res.send(movie)
// })

app.listen(8080, () => console.log("Filmserveren lever!"))