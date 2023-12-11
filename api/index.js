const express = require("express");

const dev = require("../config/server");
const productRoute = require("../routes/productRoute");
const connectDB = require("../config/db");
require("dotenv").config();





const app = express();
const port = dev.app.port;



connectDB();

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  

});


app.get("/", (req, res) => {
  res.send("Welcome to my server😊❤️");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRoute);

module.exports = app;
