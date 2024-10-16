// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Players from "./Players";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("BTN CILICKED");
  };

  const addNum = (num) => {
    alert(num + 6);
  };
  return (
    <>
      <h1>React Core Concepts</h1>
      <h2>onClick Event Handling</h2>
      <button onClick={handleClick}>Click One</button> <br />
      <button onClick={handleClick2}>Click Two</button>
      {/* Vejailla */}
      <button
        onClick={() => {
          addNum(4);
        }}
      >
        Click Three
      </button>
      <h2>useState Hook</h2>
      <Players></Players>
      <Counter></Counter>
    </>
  );
}

export default App;
