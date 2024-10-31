import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="p-6 border-2 border-black">
      <h2 className="text-xl my-4">Component B</h2>
      <ComponentC></ComponentC>
    </div>
  );
};

export default ComponentB;
