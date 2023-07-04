import DashboardCard from "../components/DashboardCard";
import { Navigate } from "react-router-dom";
import blogService from '../services/blogs'
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const TeacherDashboard = () => {
  const [blogs, setBlogs ] = useState([])
  const [userBlogs, setUserBlogs ] = useState([])
  const { user } = useContext(UserContext)

useEffect(() => {
  blogService.getAll().then((blogs) => {
    setBlogs(blogs)
    if (user && user.id){
    setUserBlogs(blogs.filter(blog => blog.user.id === user.id ))
}});
}, [user]);

  if (!localStorage.getItem("loggedUser")) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <main className="flex h-full bg-gradient-to-t from-white via-white to-emerald-200">
          <div className="p-8 w-screen justify-evenly flex">
            <DashboardCard category={"Mes cours"} content={userBlogs}/>
            <DashboardCard category={"Tous les cours"} content={blogs}/>
          </div>
            {/* <div className="flex justify-between w-full text-slate-400">
              <div className=" mb-4 font-title font-grey-200 flex flex-col">
                <span className="mb-2">L</span>
                <span>1</span>
              </div>
              <div className=" font-title font-grey-200 flex flex-col">
                <span className="mb-2">Ma</span>
                <span>2</span>
              </div>
              <div className=" font-title font-grey-200 flex flex-col">
                <span className="mb-2">Me</span>
                <span>3</span>
              </div>
              <div className=" font-title font-grey-200 flex flex-col">
                <span className="mb-2">J</span>
                <span>4</span>
              </div>
              <div className=" font-title font-grey-200 flex flex-col">
                <span className="mb-2">V</span>
                <span>5</span>
              </div>
              <div className=" font-title font-grey-200 flex flex-col">
                <span className="mb-2">S</span>
                <span>6</span>
              </div>
              <div className=" font-title font-grey-200 flex flex-col">
                <span className="mb-2">D</span>
                <span>7</span>
              </div>
            </div> */}
            {/* <h3 className="text-xl font-bold font-header mb-4">Leçons</h3> */}
        </main>
      </>
    );
  }
}

export default TeacherDashboard;
