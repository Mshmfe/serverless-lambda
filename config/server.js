require("dotenv").config();

const dev = {
  app: {
    port:process.env.port|| 8080,
  },
  db: {
    url: process.env.MOGO_URL || "",
  },
};
module.exports = dev;
