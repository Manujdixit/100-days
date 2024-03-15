const { default: mongoose } = require("mongoose");

function dbconnect() {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URI);

    console.log("db connected successfully");
  } catch (error) {
    console.log("error connecting db");
  }
}

module.exports = dbconnect;
