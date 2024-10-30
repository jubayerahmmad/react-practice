import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const mealsDetails = useLoaderData();
  console.log(mealsDetails.meals);
  return (
    <div>
      <div>
        {mealsDetails.meals.map((meal, idx) => (
          <div key={idx}>
            <div className="flex flex-col  container mx-auto">
              <div className="flex gap-6 items-center py-6">
                <div>
                  <img
                    className="rounded-xl w-96 h-96"
                    src={meal.strMealThumb}
                    alt=""
                  />
                </div>
                <div className="my-4">
                  <h3 className="text-4xl font-bold my-4">{meal.strMeal}</h3>
                  <h1 className="text-2xl font-semibold">Ingredients</h1>
                  <ul className="my-2 mx-6" style={{ listStyleType: "disc" }}>
                    <li>{meal.strIngredient1}</li>
                    <li>{meal.strIngredient2}</li>
                    <li>{meal.strIngredient3}</li>
                    <li>{meal.strIngredient4}</li>
                    <li>{meal.strIngredient5}</li>
                    <li>{meal.strIngredient6}</li>
                    <li>{meal.strIngredient7}</li>
                    <li>{meal.strIngredient8}</li>
                  </ul>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-semibold my-4">Instructions</h1>
                <p>{meal.strInstructions}</p>
              </div>
              <div className="flex gap-4 my-4">
                <button className="btn btn-outline">
                  <a href={meal.strSource} target="_blank">
                    Learn More
                  </a>
                </button>
                <button className="btn btn-outline">
                  <a href={meal.strYoutube} target="_blank">
                    Watch Tutorial
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDetails;
