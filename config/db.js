const mongoose = require("mongoose");

const mogoURL = process.env.MOGO_URL;

const connectDB = async () => {
    try {
      await mongoose.connect(mogoURL);
      console.log("DB Connected");
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = connectDB;