import { useState } from "react";
import AllProducts from "./components/AllProducts";
import Cart from "./components/cart";

const App = () => {
  // toggle with true/false
  const [isActive, setIsActive] = useState(true);
  const handleBtn = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // toggle with object
  // const [isActive, setIsActive] = useState({
  //   cart: true,
  // });
  // const handleBtn = (cart) => {
  //   if (cart) {
  //     setIsActive({ cart: true });
  //   } else {
  //     setIsActive({ cart: false });
  //   }
  // };

  // console.log(isActive);

  return (
    <>
      <div className="flex justify-between container mx-auto">
        <AllProducts></AllProducts>
        <Cart isActive={isActive} handleBtn={handleBtn}></Cart>
      </div>
    </>
  );
};

export default App;
