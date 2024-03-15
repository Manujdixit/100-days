const mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  completed: Boolean,
});

//Export the model
module.exports = mongoose.model("Todo", todoSchema);
