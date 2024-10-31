import ComponentD from "./ComponentD";

const ComponentC = () => {
  return (
    <div className="p-6 border-2 border-black">
      <h2 className="text-xl my-4">Component C</h2>
      <ComponentD></ComponentD>
    </div>
  );
};

export default ComponentC;
