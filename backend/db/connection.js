const mongoose = require("mongoose");
require("dotenv").config();
// const url = `mongodb+srv://kamal000rawat:${process.env.MONGODB_PASSWORD}@cluster0.igexlph.mongodb.net/backendServerTest?retryWrites=true&w=majority`;
const url = "mongodb://localhost:27017/MERNdatabase";
const conn = mongoose
  .connect(url)
  .then((res) => console.log("Connection Established!"))
  .catch((err) => console.log("Connection Failed :", err));
// console.log("conn", conn);
module.exports = conn;
