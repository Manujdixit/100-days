const mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model("Todo", todoSchema);

//Export the model
module.exports = {
  todo: todo,
};
