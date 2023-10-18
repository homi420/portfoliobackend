const mongoose = require("mongoose");
const mongoUrl = "mongodb://127.0.0.1/newPortfolio";
const connectToMongo = () => {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB Connected");
    }).catch((error) => {
        console.error("MongoDB Connection Failed:", error);
    });
}
module.exports = connectToMongo