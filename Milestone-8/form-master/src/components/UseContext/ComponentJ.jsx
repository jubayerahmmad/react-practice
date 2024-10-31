import { useContext } from "react";
import { NameContext } from "./ComponentA";
import { MoneyContext } from "./ComponentA";

const ComponentJ = () => {
  const name = useContext(NameContext);
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="p-6 border-2 border-black">
      <h2 className="text-xl my-4">Component J</h2>
      <h3>Hello {name}</h3>
      <p>Amount: {money}</p>
      <button onClick={() => setMoney(money + 150)}>Add</button>
    </div>
  );
};

export default ComponentJ;
