import blogService from "../services/blogs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const LessonScreen = () => {
  let { lessonID } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    blogService.get(lessonID).then((blog) => setBlog(blog));
  });

  return (
    <div className="bg-slate-100 p-7">
      <h2 className="text-xl py-4">
        <Link to={"/profile"}>Cours</Link>
      </h2>
      <div className="bg-white p-4 rounded-lg">
        <div className="border-b border-solid border-slate-100 py-2 flex gap-6 items-baseline ">
          <h1 className="text-2xl">{blog.title}</h1>
        </div>
        <div className="py-4">{blog.content}</div>
      </div>
    </div>
  );
};

export default LessonScreen;
