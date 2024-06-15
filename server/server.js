const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let todos = [
  { id: 1, text: "1. learn react", completed: true },
  { id: 2, text: "2. learn next.js app router", completed: false },
  { id: 3, text: "3. understand next.js caching", completed: false },
];

app.get("/todos", (_, res) => {
  console.log("Received GET request at /todos");
  res.status(200).json(todos);
});

app.patch("/todos", (req, res) => {
  console.log("Received POST request at /todos, id:", req.body.id);
  const reqId = req.body.id;
  console.log(typeof reqId);
  todos = [...todos].map((todo) =>
    todo.id === reqId ? { ...todo, completed: !todo.completed } : todo
  );
  console.log(todos);
  res.status(200).json({ message: "Success: Update Todo" });
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
