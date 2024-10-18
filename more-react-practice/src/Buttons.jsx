import { useEffect, useState } from "react";
import Button from "./Button";

const Buttons = () => {
  const [buttons, setButton] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => setButton(data.categories));
  });

  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button key={button.id} button={button}></Button>
      ))}
    </div>
  );
};

export default Buttons;
