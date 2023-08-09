import "../assets/styles.css";
import blogService from "../services/blogs";
import userService from "../services/user";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../components/Button";
import MDEditor from "@uiw/react-md-editor";

const LessonScreen = () => {
  let { lessonID } = useParams();
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRead, setIsRead] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // blog info
    blogService.get(lessonID).then((blog) => setBlog(blog));
    if (!user) {
      navigate("/");
    }
    setIsRead(user.readBlogs.includes(blog.id));
  }, [setUser]);

  useEffect(() => {
    if (blog.user) {
      userService.getUser(blog.user).then((res) => setAuthor(res));
    }
  }, [blog]);

  const handleDelete = async () => {
    try {
      await blogService.deleteBlog(lessonID);
      setErrorMessage("Article supprimé");
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("L'article n'a pas été supprimé.");
    }
  };

  const handleClick = () => {
    userService.markRead(blog.id, user.id).then((updatedUser) => {
      setUser(updatedUser);
      setIsRead(user.readBlogs.includes(blog.id));
    });
  };

  console.log(isRead)
  return (
    <>
      <div className=" py-20 flex flex-col gap-6 justify-between items-center">
        <header className="flex flex-col justify-between gap-8 w-10/12">
          <div
            onClick={() => navigate(-1)}
            className="flex gap-4 items-center cursor-pointer"
          >
            <BsArrowLeft />
            retour
          </div>

          <div>
            <div className="flex  gap-6 justify-between">
              <h2 className="text-2xl font-bold leading-7 pr-8 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {blog.title}
              </h2>
              <div className="flex gap-4 items-center flex-wrap">
                {user && blog.user === user?.id && (
                  <div className="flex gap-4">
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
              </div>
            </div>
            <Link to={`/users/${author.id}`}>
              <span>{author.username}</span>
            </Link>
          </div>
        </header>

        <main className="w-10/12">
          <div className="markdown__container">
            <MDEditor.Markdown
              source={blog.content}
              style={{ whiteSpace: "pre-wrap" }}
            />
          </div>
        </main>
        <div onClick={handleClick} className="self-end pr-20">
          <Button type="elevated" text={isRead ? "J'ai terminé ma lecture" : "Marquer comme non lu"} />
        </div>
      </div>
    </>
  );
};

export default LessonScreen;
