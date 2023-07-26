import FAB from "../components/FAB";
import Card from "../components/Card";
import { Navigate, Link } from "react-router-dom";
import blogService from "../services/blogs";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [userBlogs, setUserBlogs] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      setBlogs(blogs);
      if (user && user.id) {
        setUserBlogs(blogs.filter((blog) => blog.user.id === user.id));
      }
    });
  }, [user]);

  if (!localStorage.getItem("loggedUser")) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <main className=" h-full bg-neutral-50">
          <div className="flex flex-col md:flex-row p-8 w-screen justify-evenly">
            <section className="flex flex-col p-8">
              <h2 className="text-2xl font-bold font-header mb-4">
                Tous les cours
              </h2>
              <div className="flex flex-col-reverse gap-4 justify-end">
                {blogs.map((item, index) => (
                  <Link key="item.id" to={`/lesson/${item.id}`}>
                    <Card title={item.title} subtitle={item.category} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="flex flex-col p-8">
              <h2 className="text-2xl font-bold font-header mb-4">Mes cours</h2>
              <div className="flex flex-col  gap-4 justify-end">
                {userBlogs.map((item, index) => (
                  <Link key="item.id" to={`/lesson/${item.id}`}>
                    <Card title={item.title} />
                  </Link>
                ))}
              </div>
            </section>
          </div>
          <Link to="/new">
            <FAB />
          </Link>
        </main>
      </>
    );
  }
};

export default Dashboard;
