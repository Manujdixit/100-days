import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <Count count={count} setcount={setcount} />
    </>
  );
}
function Count({ setcount }) {
  return (
    <>
      <Countrenderer />
      <Buttons setcount={setcount} />;
    </>
  );
}

function Countrenderer({ count }) {
  return <>{count}</>;
}

function Buttons({ setcount }) {
  return (
    <>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
