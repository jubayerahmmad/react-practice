import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

const MealsByCategory = ({ meals }) => {
  const { idMeal, strMeal, strMealThumb } = meals;
  // console.log(meals);
  const { mealCategory } = useParams();
  // console.log(mealCategory);
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/categories/${mealCategory}/${idMeal}`);
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
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealsByCategory;
