import PropTypes from "prop-types";
const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border p-4 rounded-2xl">
      <h1 className="text-3xl font-bold text-center">
        {" "}
        Want to Cook: {recipeQueue.length}
      </h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button className="btn bg-teal-500 rounded-full">
                    {" "}
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl font-bold text-center my-12">
        {" "}
        Currently Cooking: {recipeQueue.length}
      </h1>
      <div className="divider"></div>
    </div>
  );
};

//proptypes

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
};

export default Sidebar;
