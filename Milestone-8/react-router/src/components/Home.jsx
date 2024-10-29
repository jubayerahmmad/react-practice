import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <Header></Header>

      {navigation.state === "idle" ? <Outlet></Outlet> : <p>Loading.....</p>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
