import PropTypes from "prop-types";
const Button = ({ button }) => {
  const { category, category_icon } = button;

  return (
    <div>
      <button className="button">
        <img className="btn-img" src={category_icon} alt="" />
        {category}
      </button>
    </div>
  );
};
Button.propTypes = {
  button: PropTypes.shape({
    category: PropTypes.string.isRequired,
    category_icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Button;
