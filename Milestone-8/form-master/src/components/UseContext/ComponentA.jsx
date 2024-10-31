/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentE from "./ComponentE";

export const NameContext = createContext();
export const MoneyContext = createContext();

const ComponentA = () => {
  const [money, setMoney] = useState(100);
  return (
    <div className="p-6 border-2 border-black">
      <h2 className="text-xl my-4">Component A</h2>
      <p>Net Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <NameContext.Provider value="Pedri">
          <div className="grid grid-cols-2 gap-2">
            <ComponentB></ComponentB>
            <ComponentE></ComponentE>
          </div>
        </NameContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default ComponentA;
