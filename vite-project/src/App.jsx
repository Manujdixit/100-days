// import "./App.css";
// import React, { Component, useEffect, useState } from "react";

// function App() {
//   const [render, setrender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setrender((r) => !r);
//     }, 1000);
//   }, []);
//   return <>{render ? <MyComponent /> : <></>}</>;
// }

// function MyComponent() {
//   useEffect(() => {
//     console.log("component mounted");
//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>from inside my component</div>;
// }
// export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import isonline from "./online";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loader, setloader] = useState(1);
  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setloader(0);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setloader(0);
    });

    return () => {
      clearInterval(value);
    };
  }, [n]); // Empty dependency array to run the effect only once

  return { todos, loader };
}

function App() {
  const { todos, loader } = useTodos(10);

  if (loader) {
    return <>loading ...</>;
  }
  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <>
      {todo.title}
      <br />
      {todo.description}
    </>
  );
}

export default App;
