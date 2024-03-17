import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, settodos] = useState([]);

  fetch("http://localhost:4000/todos").then(async (res) => {
    const json = await res.json();
    settodos(json.todos);
  });

  return (
    <div>
      <CreateTodo />
      <Todos
        todos={
          todos
          // [
          // {
          //   title: "A",
          //   description: "a",
          //   completed: false,
          // },
          // ]
        }
      />
    </div>
  );
}

export default App;
