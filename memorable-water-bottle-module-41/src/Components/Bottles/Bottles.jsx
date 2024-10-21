import { useState } from "react";
import "./Bottles.css";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocalStorage, getStoredCart } from "../../utilities/utilities";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      const savedCart = [];
      // console.log(storedCart);
      for (const id of storedCart) {
        const storedbottle = bottles.find((bottle) => bottle.id === id);
        if (storedbottle) {
          savedCart.push(storedbottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };

  return (
    <div>
      <h2>Total Bottles: {bottles.length}</h2>
      <Cart key={cart.id} cart={cart}></Cart>

      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
