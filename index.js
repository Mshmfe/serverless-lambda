const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const dev = require("./config/server");
require("dotenv").config();

const app = express();
const mogoURL = dev.db.url;

const port = dev.app.port;

const connectDB = async () => {
  try {
    await mongoose.connect(mogoURL);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  connectDB();
});

app.get("/", (req, res) => {
  res.send("Welcome to my server😊❤️");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products",productRoute);

module.exports = app;
