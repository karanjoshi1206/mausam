const express = require("express");
const app = express();
const path = require("path")
const port = process.env.PORT || 3000
const hbs = require("hbs");


const staticpath = path.join(__dirname, "../public")
const partialpath = path.join(__dirname, "../partials")

app.set("view engine", "hbs")


hbs.registerPartials(partialpath)
app.use(express.static(staticpath))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("*", (req, res) => {
    res.render("404")
})
app.listen(port, () => {
    console.log("listening")
}
)