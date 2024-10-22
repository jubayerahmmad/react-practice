const Header = () => {
  return (
    <div className="navbar lg:container mx-auto bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-3xl">Chef&apos;s Table</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline btn-circle bg-teal-500 lg:hidden"
          >
            <button>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex gap-2">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-3xl w-24 md:w-auto"
            />
          </div>
          <div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-teal-500"
            >
              <div className="w-10 rounded-full">
                <i className="fa-regular fa-user text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
