import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleAddReadingTime = (time) => {
    setTime((prevTime) => prevTime + time);
  };
  return (
    <>
      <Header></Header>
      <div className="container mx-auto my-4 md:flex gap-2">
        <Blogs
          handleAddReadingTime={handleAddReadingTime}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks time={time} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
