import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  const navigate = useNavigate();
  const showAll = () => {
    navigate(`/categories/${strCategory}`);
  };
  //   console.log(category);
  return (
    <div className="p-4 border-2 border-teal-500 rounded-lg flex flex-col">
      <div>
        <img
          className="w-full object-cover border-2 rounded-lg"
          src={strCategoryThumb}
          alt=""
        />
      </div>
      <div className="flex-grow my-4">
        <h1 className="text-4xl font-bold my-4">{strCategory}</h1>
        <p>{strCategoryDescription}</p>
      </div>
      <button onClick={showAll} className="btn btn-outline">
        Show All
      </button>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
    strCategoryDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Category;
