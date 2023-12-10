const mongoose = require("mongoose");

const dev = require("./server");

const mongUrl = dev.db.url;

const connectDB = async () => {
    try {
      await mongoose.connect(mongUrl)
      console.log("DB Connected");
    } catch (error) {
      console.log("Error connecting to the database:", error.message);
    }
  };

  module.exports =connectDB