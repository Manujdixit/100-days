import "./App.css";

function App() {
  return (
    <>
      <Todo title="gym" description="now" done={false} />
    </>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return (
    <>
      {props.title}
      <br />
      {props.description}
      <br />
      {props.done ? "completed" : "uncomplete"}
    </>
  );
}

export default App;
