const express = require("express");
PORT = 4000;
app = express();
const { createTodo, updateTodo } = require("./types");
const dbconnect = require("./db");
const { default: mongoose } = require("mongoose");
const { todo } = require("./model");
const dotenv = require("dotenv").config();
const cors = require("cors");

dbconnect();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input data!",
    });
    return;
  }
  // await todo.create({
  //   title: createPayload.title,
  //   description: createPayload.description,
  //   completed: false,
  // });
  res.status(200).json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  // const todos = await todo.find({});
  res.status(200).json({ todos, msg: "Todos fetched" });
});

app.put("/completed", async (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input data!",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );
  req.json({ msg: "Todo completed" });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
