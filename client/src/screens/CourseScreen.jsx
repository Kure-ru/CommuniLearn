import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Snackbar from "../components/Snackbar";
import courseService from "../services/courses";
import userService from "../services/user";
import blogService from "../services/blogs";
import Button from "../components/Button";
import FAB from "../components/FAB";
import Card from "../components/Card";
import { AiOutlineDelete } from "react-icons/ai";

const CourseScreen = () => {
  let { courseID } = useParams();
  const [course, setCourse] = useState({});
  const [lessons, setLessons] = useState([{}]);
  const [author, setAuthor] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    courseService.get(courseID).then((course) => setCourse(course));
    if (!user) {
      let userString = localStorage.getItem("loggedUser");
      const user = JSON.parse(userString);
      if (user === null) {
        navigate("/");
      }
      setUser(user);
    }   
  }, [courseID]);


  useEffect(() => {
    if (course.user) {
      userService.getUser(course.user).then((res) => setAuthor(res));
    }
  }, [course]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        if (course.blogs && course.blogs.length > 0) {
          const lessonsIds = course.blogs;
          const lessonsPromises = lessonsIds.map((blog) => {
            console.log(blog);
            return blogService.get(blog);
          });
          const lessons = await Promise.all(lessonsPromises);
          console.log(lessons);
          setLessons(lessons);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchLessons();
  }, [course.blogs]);

  const handleDelete = async () => {
    try {
      await courseService.deleteCourse(courseID);
      setErrorMessage("Article supprimé");
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("L'article n'a pas été supprimé.");
    }
  };

  return (
    <>
      <header>
        <div className="bg-neutral-50 p-12">
          <div className="bg-neutral-100 p-12 rounded-md">
            <div className="min-w-0 flex flex-col justify-between gap-8">
              <Link to={"/profile"} className="flex gap-4 items-center">
                <BsArrowLeft />
                tous les cours
              </Link>
              <div>
                <h2 className="text-2xl font-bold leading-7 pr-8 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  {course.title}
                </h2>
                <div className="flex gap-8 py-4 border-b border-slate-100">
                  <span className="bg-emerald-100">{course.category}</span>
                  <Link to={`/users/${author.id}`}>
                    <span>{author.username}</span>
                  </Link>
                </div>
                {user && course.user === user?.id && (
        <div className="mt-5 flex gap-4">
          {/* <Link to={`/edit/${course.id}`}>
            <Button type="elevated" text="Éditer" />
          </Link> */}
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
            {course.blogs && (
          <section className="flex flex-col p-8">
            <div className="flex flex-col  gap-4 justify-end">
              {course.blogs.length >= 1 && lessons.map((lesson, index) => {
                return (
                  <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
                    <Card title={lesson.title}/>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
          </div>
        </div>

      </header>
      <main>

      </main>
      {user && course.user === user?.id && (
        <Link to={`/${course.id}/new`}>
          <FAB icon="add" />
        </Link>
      )}
      {errorMessage && (
        <div>
          <Snackbar message={errorMessage} />
        </div>
      )}
    </>
  );
};

export default CourseScreen;
