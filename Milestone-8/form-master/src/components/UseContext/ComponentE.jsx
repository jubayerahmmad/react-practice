import { useContext } from "react";
import ComponentF from "./ComponentF";
import ComponentG from "./ComponentG";
import ComponentJ from "./ComponentJ";
import { NameContext } from "./ComponentA";

const ComponentE = () => {
  const name = useContext(NameContext);
  return (
    <div className="p-6 border-2 border-black">
      <h2 className="text-xl my-4">Component E</h2>
      <p>Hey {name}</p>
      <div className="grid grid-cols-2 gap-2">
        <ComponentF></ComponentF>
        <ComponentG></ComponentG>
        <div className="col-span-2">
          <ComponentJ></ComponentJ>
        </div>
      </div>
    </div>
  );
};

export default ComponentE;
