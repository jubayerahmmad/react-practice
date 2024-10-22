import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/ourRecipes/OurRecipes";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* Recipe section */}
      <section className="md:flex container mx-auto mb-8">
        {/* recipe cards */}
        <Recipes></Recipes>
        {/* sidebar */}
        <Sidebar></Sidebar>
      </section>
    </>
  );
}

export default App;
