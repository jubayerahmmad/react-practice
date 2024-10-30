import { useLoaderData } from "react-router-dom";
import MealsByCategory from "./MealsByCategory";

const ShowAll = () => {
  const allMeals = useLoaderData();
  console.log(allMeals);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {allMeals.meals.map((meals, idx) => (
          <MealsByCategory key={idx} meals={meals}></MealsByCategory>
        ))}
      </div>
    </div>
  );
};

export default ShowAll;
