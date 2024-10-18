import PropTypes from "prop-types";

const User = ({ pet }) => {
  const {
    breed,
    category,
    image,
    pet_name,
    gender,
    date_of_birth,
    price,
    pet_details,
  } = pet;
  return (
    <div className="pets">
      <img className="image" src={image} alt="" />
      <h1> {pet_name}</h1>
      <p>Breed: {breed ? breed : "Unknown"}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender ? gender : "Unknown"}</p>
      <p>Price: {price ? price + "$" : "Unknown"}</p>
      <p>Date of Birth: {date_of_birth}</p>
      <hr />
      <h2>Description</h2>
      <p>{pet_details}</p>
    </div>
  );
};
User.propTypes = {
  pet: PropTypes.shape({
    breed: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pet_name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pet_details: PropTypes.string.isRequired,
  }).isRequired,
};
export default User;
