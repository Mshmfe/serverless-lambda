const express = require("express");


const productRoute = require("../routes/productRoute");
const dev = require("../config/server");
const connectDB = require("../config/db");
require("dotenv").config();


const app = express();

const port = dev.app.port;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  connectDB();
});

app.get("/", (req, res) => {
  res.send("Welcome to my server😊❤️");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRoute);

module.exports = app;
