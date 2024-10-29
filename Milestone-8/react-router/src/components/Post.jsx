import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="p-4 border-2 border-teal-500 rounded-xl m-4">
      <h2>Title:{title}</h2>
      <p>{body}</p>

      <Link to={`/post/${id}`}>
        <button className="bg-teal-300 p-2 rounded-lg">Show Details</button>
      </Link>
      <button onClick={handleShowDetails}>Show Details</button>
    </div>
  );
};

export default Post;
