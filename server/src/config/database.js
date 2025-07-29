const mongoose = require("mongoose");
const URL =
  process.env.DB_CONNECTION_SECRET

const connectDB = async () => {
  await mongoose.connect(URL);
};

module.exports = connectDB;