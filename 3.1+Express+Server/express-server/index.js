import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import { dirname, format } from 'path'

import logger from './middleware.js'


const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

const app = express()
// app.use((req, res, next) => {
//     console.log(req.url, req.method)
//     next()
// })
app.use(logger)
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("combined"))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    // const date = new Date().toDateString()
    // console.log(req.rawHeaders)
    // res.send(`<h3>Hello, Immad</h3><p>Date : ${date}</p>`)
    // res.sendStatus(200)
})

app.post("/submit", (req, res) => {
    res.send(req.body)
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1>")
})



app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})