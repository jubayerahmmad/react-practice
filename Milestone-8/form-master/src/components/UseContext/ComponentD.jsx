import { useContext } from "react";
import { NameContext } from "./ComponentA";

const ComponentD = () => {
  const name = useContext(NameContext);
  return (
    <div className="p-6 border-2 border-black">
      <h2 className="text-xl my-4">Component D</h2>
      <h4>Hi {name}</h4>
    </div>
  );
};

export default ComponentD;
