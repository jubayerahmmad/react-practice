import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const mealsDetails = useLoaderData();
  console.log(mealsDetails);
  return <div></div>;
};

export default ShowDetails;
