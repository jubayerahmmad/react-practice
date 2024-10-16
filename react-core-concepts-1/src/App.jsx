// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Footballer from "./Footballer";
import Players from "./Players";
import Navbar from "./Navbar";

function App() {
  const style = {
    display: "flex",
  };
  const players = ["Alvarez", "Haaland", "KDB", "Raphinha", "Dybala"];
  const footballlers = [
    { name: "Dani Olmo", position: "AMF" },
    { name: "Lamine Yamal", position: "RWF" },
    { name: "Pedri", position: "CMF" },
    { name: "Cubarsi", position: "CB" },
    { name: "Casado", position: "DMF" },
  ];
  return (
    <>
      <Navbar></Navbar>
      {footballlers.map((footballer, index) => (
        <Footballer key={index} footballer={footballer}></Footballer>
      ))}

      <Players name={"Foden"}></Players>
      {players.map((player, index) => (
        <Players key={index} name={player}></Players>
      ))}

      <div style={style}>
        <Device name="Laptop" price="65000"></Device>
        <Device name="Mobile" price="25000"></Device>
        <Device name="Watch" price="5000"></Device>
        <Device name="Tablet" price="35000"></Device>
      </div>

      <Person />
      <h2>Tasks To-Do</h2>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore JSX" isDone={true}></Todo>
      <Todo task="Explore React Core Concepts" isDone={false}></Todo>
    </>
  );
}

function Device({ name, price = 24000 }) {
  const style = {
    padding: "25px",
    border: "1px solid blue",
    margin: "6px",
    borderRadius: "20px",
  };
  return (
    <>
      <div style={style}>
        <h4>About This Device</h4>
        <p>Name: {name}</p>
        <p>Price:{price} </p>
      </div>
    </>
  );
}

function Person() {
  const age = [21, 47, 2, 20];
  const person = { name: "Zubayer" };
  const style = {
    margin: "5px",
    padding: "20px",
    border: "3px solid purple",
    borderRadius: "50px",
    // "border-radius": "50px",
  };
  return (
    <h3 style={style}>
      I am {person.name} and I am {age[0]} years old
    </h3>
  );
}

export default App;
