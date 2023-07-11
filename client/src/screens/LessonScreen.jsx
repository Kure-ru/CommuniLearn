import blogService from "../services/blogs";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const LessonScreen = () => {
  let { lessonID } = useParams();
  const [blog, setBlog] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    blogService.get(lessonID).then((blog) => setBlog(blog));
    if (!user) {
      let userString = localStorage.getItem("loggedUser");
      const user = JSON.parse(userString);
      if (user === null) {
        navigate("/");
      }
      setUser(user);
    }
  }, [lessonID]);

  const handleDelete = async () => {
    const blog = await blogService.deleteBlog(lessonID);
    console.log("blog deleted", blog);
  };

  return (

      <div className="bg-slate-100 p-12">
        <div className="bg-white p-12 rounded-lg">
        <div className="py-8">
        <div class="min-w-0 flex items-end gap-8">
          <h2 class="text-2xl font-bold leading-7 pr-8 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {blog.title}
          </h2>

          {user && blog.user === user?.id && (
          <div class="mt-5 flex lg:ml-4 lg:mt-0">
            <span class="hidden sm:block">
            <Link
                  to={`/edit/${blog.id}`}
                >
              <button
                type="button"
                class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-emerald-50"
              >
                <AiOutlineEdit className="-ml-0.5 mr-1.5 h-5 w-5 text-slate-400" />
                Editer
              </button>
              </Link>
            </span>

            <span class="ml-3 hidden sm:block">
              <button
               onClick={handleDelete}
                type="button"
                class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-emerald-50"
              >
                <AiOutlineDelete className="-ml-0.5 mr-1.5 h-5 w-5 text-slate-400" />
                Supprimer
              </button>
            </span>

            </div>
          )}
          </div>
        </div>



          <div className="py-4">{blog.content}</div>
        </div>
      </div>

  );
};

export default LessonScreen;
