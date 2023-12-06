require("dotenv").config();

const dev = {
  app: {
    port:process.env.port|| 8080,
  },
  db: {
    url: process.env.MOGO_URL || "mongodb+srv://Mashael-aljaafari:<password>@cluster0.2kg4kex.mongodb.net/testDB",
  },
};
module.exports = dev;
