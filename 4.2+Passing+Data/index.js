import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const {fName, lName} = req.body
  const fullname = fName + lName
  let count = fullname.length
  res.render("index.ejs", {letters: count})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
