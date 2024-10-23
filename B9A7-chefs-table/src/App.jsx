import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/ourRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparingRecipe, setPreparingRecipe] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (prevRecipe) => prevRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("This recipe has been added to your queue!");
    }
  };

  const handleRemove = (id) => {
    // find which recipe to remove
    const removedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    // update want to cook table state
    setRecipeQueue(updatedQueue);
    // add to preparing recipe table
    setPreparingRecipe([...preparingRecipe, removedRecipe]);
  };

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* Recipe section */}
      <section className="md:flex container mx-auto mb-8">
        {/* recipe cards */}
        <Recipes addToQueue={addToQueue}></Recipes>
        {/* sidebar */}
        <Sidebar
          calculateTimeAndCalories={calculateTimeAndCalories}
          preparingRecipe={preparingRecipe}
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </>
  );
}

export default App;
