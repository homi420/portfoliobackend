const mongoose = require("mongoose")

const Projects = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        url: {
            type: String,
            required: true
        },
        filePath: {
            type: String,
            required: true
        }
    },
    link: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Projects", Projects)