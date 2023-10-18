const express = require("express")
const crud = require("mister-crud")
const Projects = require('./Models/Projects')
const cors = require("cors")
const app = express();
const connectToMongo = require("./db")
connectToMongo()
app.use(cors())
app.get('/getProjects', (req, res) => {
    crud.getItems(res, Projects)
})
app.post("/addProject", crud.upload.single('image'), (req, res) => {
    crud.createItem(req, res, Projects)
})
app.delete("/deleteProject/:id", (req, res) => {
    crud.deleteItem(req, res, Projects)
})
app.listen(5000)