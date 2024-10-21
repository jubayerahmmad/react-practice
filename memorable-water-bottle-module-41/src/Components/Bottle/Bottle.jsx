import PropTypes from "prop-types";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, seller, img } = bottle;
  return (
    <div className="bottle">
      <div>
        <h2>Name: {name}</h2>
        <h3>Seller:{seller}</h3>
        <button
          onClick={() => {
            handleAddToCart(bottle);
          }}
        >
          Add To Cart
        </button>
      </div>
      <div>
        <img className="image" src={img} alt="" />
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
