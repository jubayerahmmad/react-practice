import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/ourRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

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
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </>
  );
}

export default App;
