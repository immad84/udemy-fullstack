import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
let bandname = ""

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
  bandname = req.body["street"] + req.body["pet"]
  next()
})


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const {street, pet} = req.body
  // res.send(`<h1>your band name is : </h1><h3>${street}${pet} 😎</h3>`)
  res.send(`<h1>your band name is : </h1><h3>${bandname} 😎</h3>`)
  // res.send(street + pet + "😎")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
