const express = require ('express')
const app = express ()
const port = process.env.PORT || 3000

app.use(express.static("public"))

const fs = require("fs") // Dependency. Tillader at arbejde med filer i filsystemet

const nav = fs.readFileSync("./public/components/nav.html").toString()  // sync pauser indtil den er loadet modsat async await
                                                                        // Når serveren starter, læser den det ind i hukommelsen.
// const footer =                                                        
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString()
const galleri = fs.readFileSync("./public/pages/galleri/galleri.html").toString()

const frontpagePage = nav + frontpage
const galleriPage = nav + galleri


app.get("/", (req, res) => {
    res.send(frontpagePage)
})


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/public/pages/frontpage/frontpage.html')
// })

app.get("/galleri", (req, res) => {
    res.sendFile(__dirname + '/public/pages/galleri/galleri.html')
})

app.listen(port, () => console.log('Server is running on port: ' +port))

