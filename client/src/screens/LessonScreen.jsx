import blogService from "../services/blogs";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AiOutlineEdit } from "react-icons/ai"

const LessonScreen = () => {
  let { lessonID } = useParams();
  const [blog, setBlog] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    blogService.get(lessonID).then((blog) => setBlog(blog));
    if (!user) {
      let userString = localStorage.getItem("loggedUser");
      const user = JSON.parse(userString);
      if (user === null){
        navigate('/')
      }
      setUser(user);
    }

  }, [lessonID]);

  console.log(blog);
  return (
    <div className="bg-slate-100 p-7">
      <h2 className="text-xl py-4">
        <Link to={"/profile"}>Cours</Link>
      </h2>
      <div className="bg-white p-4 rounded-lg">
        <div className="border-b border-solid text-2xl border-slate-100 py-2 flex flex-row gap-6 items-baseline ">
          <h1>{blog.title}</h1>       {user && blog.user === user?.id && <Link to={`/edit/${blog.id}`} className="hover:text-emerald-400 active:text-emerald-600"><AiOutlineEdit /> </Link>}
        </div>
        <div className="py-4">{blog.content}</div>
      </div>
    </div>
  );
};

export default LessonScreen;
