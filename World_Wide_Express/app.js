const express = require("express")
const app = express() 

app.use(express.static("public")) // Tillader browseren adgang til static filer i public folder.


// Forsiden
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})


app.get('/weatherhtmldirekte', (req, res) => {
    res.send('<p>Man kan skrive html direkte her<p>')
})

// __dirname viser stien til projektet. Giver absolute path.
app.get('/weather', (req, res) => {
    res.sendFile(__dirname + '/public/weather.html')
})

app.listen(8080, () => console.log('server i gang'))
