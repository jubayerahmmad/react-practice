import PropTypes from "prop-types";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
const Cart = ({ handleBtn, isActive }) => {
  return (
    <div>
      <h1 className="text-7xl">Cart</h1>

      {/* toggle with true/false */}
      <div className="flex gap-5 mt-2">
        <button
          onClick={handleBtn}
          className={`${
            isActive
              ? "p-2 bg-teal-300 border rounded-xl"
              : "p-2 bg-gray-300 border rounded-xl"
          }`}
        >
          Add to Cart
        </button>
        <button
          onClick={handleBtn}
          className={`${
            isActive
              ? "p-2 bg-gray-300 border rounded-xl"
              : "p-2 bg-teal-300 border rounded-xl"
          }`}
        >
          Remove from Cart
        </button>
      </div>
      {isActive ? <AddToCart></AddToCart> : <RemoveFromCart></RemoveFromCart>}

      {/* toggle with an object */}
      {/* <div className="flex gap-5 mt-2">
        <button
          onClick={() => handleBtn(true)}
          className={`${
            isActive.cart
              ? "p-2 bg-teal-300 border rounded-xl"
              : "p-2 bg-gray-300 border rounded-xl"
          }`}
        >
          Add to Cart
        </button>
        <button
          onClick={() => handleBtn(false)}
          className={`${
            isActive.cart
              ? "p-2 bg-gray-300 border rounded-xl"
              : "p-2 bg-teal-300 border rounded-xl"
          }`}
        >
          Remove from Cart
        </button>
      </div> */}
      {/* {isActive.cart ? (
        <AddToCart></AddToCart>
      ) : (
        <RemoveFromCart></RemoveFromCart>
      )} */}
    </div>
  );
};

Cart.propTypes = {
  handleBtn: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Cart;
