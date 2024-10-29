import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Title: {post.title}</h1>
      <button className="bg-yellow-200 p-2 rounded-lg" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
