import { useState } from "react";
import "./Bottles.css";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  });
  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
