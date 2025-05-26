import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import qr from 'qr-image'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'


const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/barcode', (req, res) => {
    const { data } = req.body
    const file_name = `${uuidv4()}-${data}.png`
    const file_path = path.join(__dirname, 'public', 'qr-images', `${file_name}`)

    const qr_image = qr.image(data)
    const stream = fs.createWriteStream(file_path)
    qr_image.pipe(stream)

    stream.on('finish' , () => {
        // res.sendFile(__dirname + '/public/codes.html')
        res.redirect(`/codes.html?img=${file_name}`)
    })

    stream.on('error', (err) => {
        console.error('Error writing QR image:', err)
        res.status(500).send('Error generating QR code')
    })
})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})