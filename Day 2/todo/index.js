const express = require("express");
PORT = 4000;
app = express();
const { createTodo, updateTodo } = require("./types");
const dbconnect = require("./db");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

dbconnect();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input data!",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
  res.json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", () => {});

app.post("/completed", (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input data!",
    });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
