require("dotenv").config();

const dev = {
  app: {
    port:process.env.PORT|| 8080,
  },
  db: {
    url: process.env.MONGO_URL || 'mongodb+srv://Mashael-aljaafari:Mm0559786603 @cluster0.2kg4kex.mongodb.net/awsDB?retryWrites=true&w=majority',
  },
};

module.exports = dev;
