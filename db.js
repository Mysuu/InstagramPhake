const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://projecttn:Myndz123@cluster0.wa9hy.mongodb.net/instagramphake",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongodb connection successfuly!");
});

connection.on("error", () => {
  console.log("Mongodb connection error");
});

module.exports = mongoose;
