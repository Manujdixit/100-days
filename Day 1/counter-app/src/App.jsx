import { useState } from "react";

let state = {
  count: 0,
};

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setcount={setcount} />
    </div>
  );
}

function CustomButton(props) {
  function onClickHandler() {
    props.setcount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter : {props.count}</button>;
}

export default App;
