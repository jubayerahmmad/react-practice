import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <>
      <div>
        <h4>Counter: {count}</h4>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
