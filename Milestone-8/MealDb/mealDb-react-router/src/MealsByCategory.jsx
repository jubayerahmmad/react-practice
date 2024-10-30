import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MealsByCategory = ({ meals }) => {
  const { strMeal, strMealThumb } = meals;
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/categories/${strMeal}`);
  };
  return (
    <div>
      <div className="p-4 border-2 border-teal-500 rounded-lg flex flex-col">
        <div>
          <img
            className="w-full h-96 object-cover border-2 rounded-lg"
            src={strMealThumb}
            alt=""
          />
        </div>
        <div className="flex-grow h-32 my-4">
          <h1 className="text-4xl font-bold my-4">{strMeal}</h1>
        </div>
        <button onClick={showDetails} className="btn btn-outline">
          Show Details
        </button>
      </div>
    </div>
  );
};

MealsByCategory.propTypes = {
  meals: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealsByCategory;
