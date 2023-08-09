import FAB from "../components/FAB";
import Card from "../components/Card";
import { Navigate, Link } from "react-router-dom";
import courseService from "../services/courses";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import userService from "../services/user";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [userCourses, setUserCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUserFromLocalStorage = async () => {
      const userString = localStorage.getItem("loggedUser");
      const parsedUser = JSON.parse(userString);
      if (parsedUser) {
        try {
          const fetchedUser = await userService.getUser(parsedUser.id);
          setUser(fetchedUser);
        } catch (error) {
          console.error(error.message);
        }
      }
    }
      fetchUserFromLocalStorage();
  }, [setUser]);

  useEffect(() => {
    if (!user || !user.id) return;

    courseService.getAll().then((allCourses) => {
      setCourses(allCourses);
      setUserCourses(allCourses.filter((course) => course.user.id === user.id));
      setRegisteredCourses(
        allCourses.filter((course) =>
          user?.registeredCourses?.includes(course.id)
        )
      );
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
                {courses.map((item, index) => (
                  <Link key={item.id} to={`/${item.id}`}>
                    <Card title={item.title} subtitle={item.category} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="flex flex-col p-8">
              <h2 className="text-2xl font-bold font-header mb-4">
                Cours enregistrés
              </h2>
              <div className="flex flex-col  gap-4 justify-end">
                {registeredCourses.map((item, index) => (
                  <Link key={item.id} to={`/${item.id}`}>
                    <Card title={item.title} subtitle={item.category} />
                  </Link>
                ))}
              </div>
            </section>

            {user.registeredCourses && (
              <section className="flex flex-col p-8">
                <h2 className="text-2xl font-bold font-header mb-4">
                  Mes cours
                </h2>
                <div className="flex flex-col  gap-4 justify-end">
                  {userCourses.map((item, index) => (
                    <Link key={item.id} to={`/${item.id}`}>
                      <Card title={item.title} />
                    </Link>
                  ))}
                </div>
              </section>
            )}
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
