import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>

      <Outlet></Outlet>
    </div>
  );
};

export default Home;
