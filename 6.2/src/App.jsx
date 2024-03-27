// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [todos, settodos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todos")
//       .then(function (response) {
//         settodos(response.data.todos);
//       });
//   }, []);

//   return (
//     <>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
  }

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
