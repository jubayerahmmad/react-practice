import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div className="md:w-1/3 space-y-4 ">
      <div className="border border-teal-300 rounded-xl p-4 text-center">
        <h1 className="text-4xl text-teal-300 font-bold">
          Spent Time on Read:{time}
        </h1>
      </div>
      <div className="rounded-xl border border-teal-200 p-8 bg-gray-300">
        <h2 className="text-4xl text-center font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div>
          {bookmarks.map((bookmark, index) => (
            <h1 className="rounded-xl bg-white p-4 my-4 text-2xl" key={index}>
              {bookmark.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  time: PropTypes.number,
};
export default Bookmarks;
