import ReactMarkdown from "react-markdown";
import "../assets/styles.css"
import blogService from "../services/blogs";
import userService from "../services/user";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Snackbar from "../components/Snackbar";
import Button from "../components/Button";

function MarkdownToHtml({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

const LessonScreen = () => {
  let { lessonID } = useParams();
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // blog info
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

  useEffect(() => {
    if (blog.user) {
      userService.getUser(blog.user).then((res) => setAuthor(res));
    }
  }, [blog]);

  const handleDelete = async () => {
    console.log("delete");
    try {
      await blogService.deleteBlog(lessonID);
      setErrorMessage("Article supprimé");
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("L'article n'a pas été supprimé.");
    }
  };

  return (
    <div className="bg-neutral-50 p-12">
      <div className="bg-neutral-100 p-12 rounded-md">
        <div className="min-w-0 flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold leading-7 pr-8 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {blog.title}
            </h2>
            <div className="flex gap-8 py-4 border-b border-slate-100">
              <span className="bg-emerald-100">{blog.category}</span>
              <Link to={`/users/${author.id}`}>
                <span>{author.name}</span>
              </Link>
            </div>
          </div>
          <div className="markdown__container">
          <MarkdownToHtml content={blog.content} />
          </div>

        </div>
      </div>
      {user && blog.user === user?.id && (
        <div className="mt-5 flex gap-4">
          <Link to={`/edit/${blog.id}`}>
            <Button type="elevated" text="Éditer" />
          </Link>
          <button
            onClick={handleDelete}
            className="flex gap-2 items-center bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-600 p-2 shadow-sm hover:shadow-md px-4 rounded-full"
            text="Supprimer"
          >
            <AiOutlineDelete /> supprimer
          </button>
        </div>
      )}
      {errorMessage && (
        <div>
          <Snackbar message={errorMessage} />
        </div>
      )}
    </div>
  );
};

export default LessonScreen;
