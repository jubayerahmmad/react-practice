import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const categories = useLoaderData();
  // console.log(categories.categories);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {categories.categories.map((category, idx) => (
          <Category key={idx} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
