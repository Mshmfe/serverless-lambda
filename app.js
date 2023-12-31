const express = require("express");
const cors = require("cors");

const productRoute = require("./routes/productRoute");
const connectDB = require("./config/db");
require("dotenv").config();





const app = express();




connectDB();




app.get("/", (req, res) => {
  res.send("Welcome to my server😊❤️");
});

app.use(cors());
app.use("/products", productRoute);

module.exports = app;
// make sure you are not trying to listen the server
// we need to install the package for serverless