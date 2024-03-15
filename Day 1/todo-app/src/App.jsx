import { useState } from "react";

const todo = [
  {
    title: "Go gym",
    description: "at 6pm",
    completed: "false",
  },
  {
    title: "Go school ",
    description: "at 8am",
    completed: "false",
  },
  {
    title: "Go market",
    description: "at 3pm",
    completed: "false",
  },
];

function TodoItem({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const [todos, settodos] = useState(todo);

  function addTodo() {
    settodos([
      ...todos,
      {
        title: "Go sleep",
        description: "at 12:00 am",
        completed: "false",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add random todo</button>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

export default App;
