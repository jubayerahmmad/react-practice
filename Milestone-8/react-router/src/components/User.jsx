import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, website } = user;
  return (
    <div className="p-4 border-2 border-teal-500 rounded-xl m-4">
      <h1>Name:{name} </h1>
      <p>Mail: {email}</p>
      <p>Website:{website} </p>
      <Link to={`/user/${id}`}>
        <button className="bg-teal-300 p-2 rounded-lg">Show Details</button>
      </Link>
    </div>
  );
};

export default User;
