import "./App.css";

function App() {
  return (
    <>
      <Todo title="a" description="s" done={true} />
    </>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo({ title, description, done }: TodoProp) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{done}</h3>
    </>
  );
}

export default App;
