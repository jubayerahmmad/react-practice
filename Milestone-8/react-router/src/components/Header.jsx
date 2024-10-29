import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        {/* <a className="bg-blue-400 p-2" href="/">
          Home
        </a>
        <a className="bg-blue-400 p-2" href="/about">
          About
        </a>
        <a className="bg-blue-400 p-2" href="/contact">
          Contact
        </a> */}
      </nav>
    </div>
  );
};

export default Header;
