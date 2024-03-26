import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        settodos(response.data.todos);
      });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default App;
