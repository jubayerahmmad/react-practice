import PropTypes from "prop-types";
import "./cart.css";
const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cart-image-container">
        {cart.map((bottle) => (
          <div key={bottle.id} className="cart-image">
            <img src={bottle.img}></img>
            <button
              onClick={() => {
                removeFromCart(bottle.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
