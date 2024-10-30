import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="flex gap-6 text-4xl my-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipe">Recipe</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
    </div>
  );
};

export default Header;
