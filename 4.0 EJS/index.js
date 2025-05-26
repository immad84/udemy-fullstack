const express = require("express")

const port = 3000

const app = express()
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const date = new Date()
    // 0 = Sunday, 1 - 6 = Mondat - Saturday
    const data = {
        title: "EJS Tags",
        seconds: date.getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some text</em>",
    }
    res.render("index", data)
})

app.listen(port, () => {
    console.log('server is active on port ' + `${port}`)
})