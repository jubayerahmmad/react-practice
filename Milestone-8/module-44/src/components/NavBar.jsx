import { useState } from "react";
import Link from "./Link";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Login",
      path: "/login",
    },
    {
      id: 4,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 5,
      name: "User Profile",
      path: "/user/:userId", // Dynamic segment for user ID
    },
  ];
  return (
    <>
      <nav>
        <span
          className=" md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <MdClose className="text-3xl" />
          ) : (
            <TiThMenu className="text-3xl" />
          )}
        </span>
        <ul
          className={`md:flex duration-1000 absolute md:static gap-12 md:w-full bg-teal-500 rounded-lg md:rounded-none p-5 ${
            open ? "top-12" : "-top-64"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
