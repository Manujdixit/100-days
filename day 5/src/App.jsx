import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, settodo] = useState([
    {
      id: 1,
      title: "a",
      description: "a",
    },
    { id: 2, title: "b", description: "b" },
  ]);
  function addTodo() {
    settodo([
      ...todo,
      {
        id: 4,
        title: "4",
        description: "a",
      },
    ]);
  }
  return (
    <>
      <button onClick={addTodo}>add</button>
      {todo.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}
function Todo({ title, description }) {
  return <div>{title}</div>;
}
export default App;
