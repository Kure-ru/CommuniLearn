import { BsSearch, BsSliders2 } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Search = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [blogs, setBlogs] = useState(data);
  const [filteredData, setFilteredData] = useState([]);
  const searchRef = useRef();
  const inputRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation();
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // find corresponding objects in data array
    const selectedBlog = blogs.filter(
      (blog) => blog.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(selectedBlog)
    setFilteredData(selectedBlog);
    
  };

  if (!isActive) {
    return (
      <div
        onClick={handleClick}
        className="flex items-center justify-between mt-4 h-14 p-4 bg-neutral-200 rounded-lg w-full"
      >
        <BsSliders2 className="text-xl mx-4 text-neutral-950" />
        <input
          onClick={handleClick}
          value={inputValue}
          className="focus:outline-none bg-neutral-200 text-lg placeholder:text-slate-500"
          placeholder="rechercher un cours"
        />
        <BsSearch className="text-xl mx-4 text-slate-500" />
      </div>
    );
  } else {
    return (
      <div
        ref={searchRef}
        onClick={handleClick}
        className="mt-72 relative top-0 z-50 p-2 flex flex-col  items-start w-full  h-80 bg-neutral-50 shadow-lg rounded-lg"
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <BsSliders2 className="text-xl mx-4 text-neutral-950" />
            <input
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              className="focus:outline-none bg-neutral-50 text-lg placeholder:text-slate-500"
            />
          </div>
          <BsSearch className="text-xl mx-4 text-slate-500" />
        </div>
        <ul className="p-4">
          {filteredData.map((item, index) => (
            <Link to={`/lesson/${item.id}`}>
              <li key={index}>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
};

export default Search;
