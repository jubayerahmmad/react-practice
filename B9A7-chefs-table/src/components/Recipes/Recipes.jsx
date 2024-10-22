import { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Recipes = ({ addToQueue }) => {
  const [recipes, setRecipes] = useState([]);

  // fetch all recipes
  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe, index) => (
          <div key={index} className="card bg-base-100 border border-gray-300">
            <figure className="p-6">
              <img
                src={recipe.recipe_image}
                alt="Shoes"
                className="rounded-2xl w-full h-72"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold"> {recipe.recipe_name}</h2>
              <p>{recipe.short_description}</p>
              <div className="divider"></div>
              <div className="space-y-4">
                <h2 className="text-lg font-bold">
                  Ingredents: {recipe.ingredients.length}
                </h2>
                <ul className="ml-6">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      className="text-gray-500 space-y-2 list-disc "
                      key={index}
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <div className="divider"></div>
                <div className="flex gap-4">
                  <div>
                    <i className="fa-regular fa-clock mr-2"></i>
                    <span>{recipe.preparing_time} Minutes.</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-fire-flame-curved mr-2"></i>
                    <span>{recipe.calories} Calories.</span>
                  </div>
                </div>
                <button
                  onClick={() => addToQueue(recipe)}
                  className="btn bg-teal-500 rounded-full"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes

Recipes.propTypes = {
  addToQueue: PropTypes.func.isRequired,
};

export default Recipes;
