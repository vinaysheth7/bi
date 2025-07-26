const mongoose = require("mongoose");
const URL =
  "mongodb+srv://shaadansari8081:j03RrsGpBwGyF76Y@bi.dmzqffr.mongodb.net/bi";


const connectDB = async () => {
  await mongoose.connect(URL);
};

module.exports = connectDB;