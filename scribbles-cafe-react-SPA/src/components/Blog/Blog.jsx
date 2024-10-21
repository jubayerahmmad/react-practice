import PropTypes from "prop-types"; // ES6
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleAddReadingTime }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  //   console.log(blog);
  return (
    <div className="mb-4">
      <img className="object-cover w-full rounded-xl" src={cover} alt="" />
      <div className="flex justify-between py-4 px-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img className="w-12 h-12" src={author_img} alt="" />
            <div>
              <p className="text-xl font-bold">{author}</p>
              <p>{posted_date}</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="flex gap-4">
            {hashtags.map((hash, index) => (
              <span key={index}>#{hash}</span>
            ))}
          </p>
          <button
            onClick={() => handleAddReadingTime(reading_time)}
            className="text-purple-700 p-2 border border-purple-700 rounded-md"
          >
            Mark as Read
          </button>
        </div>
        <div>
          <p>
            <span>{reading_time} Mins read</span>
            <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
              <FaBookmark></FaBookmark>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleAddReadingTime: PropTypes.func,
};

export default Blog;
