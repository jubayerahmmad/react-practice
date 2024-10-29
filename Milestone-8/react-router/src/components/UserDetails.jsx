import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return <div>this is user details: {user.name}</div>;
};

export default UserDetails;
