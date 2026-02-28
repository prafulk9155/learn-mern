import { useState } from "react";
export default function StateExample() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3>Counter :{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
}
