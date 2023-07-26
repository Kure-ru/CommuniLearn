import { useState, useEffect } from "react";

import { FiLogIn, FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import blogService from "../services/blogs";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Search from "./Search";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let userString = localStorage.getItem("loggedUser");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
      blogService.setToken(user.token);
    }
    blogService.getAll().then((blogs) => {
      setBlogs(blogs);
    });
  }, [setUser]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    <Navigate replace to="/" />;
  };

  if (!user) {
    return (
      <nav className="text-lg h-16 text-slate-500 bg-neutral-100 shadow-md pt-3 pb-5 flex justify-around items-center">
        <Link className="self-center" to={"/"}>
          <h3 className="text-emerald-500 text-xl font-bold">CommuniLearn</h3>
        </Link>
        <div className="flex items-center justify-around gap-8">
        <Link className="hidden md:block" to={"/about"}>
          À propos
        </Link>
        <Link className="hidden md:block" to="/login">
          Se connecter
        </Link>
        <Link className=" md:hidden" to="/login">
          <FiLogIn/>
        </Link>
        <Link className="hidden md:block" to="/register">
          S'inscrire
        </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="text-lg h-20 px-8 text-slate-500 bg-neutral-100 shadow-md py-6 flex justify-between items-center">
        <Link to={"/"}>
          <h3 className="text-emerald-500 text-xl font-bold">CommuniLearn</h3>
        </Link>
        <div className=" hidden md:block w-6/12">
          <Search className="hidden md:block" data={blogs} />
        </div>
        <div className="flex gap-8 ">
        <Link to={"/settings"} className="hover:text-teal-900 flex flex-col justify-center items-center">
          <FiSettings  />
          <span className="hidden md:block pt-2 text-sm">Réglages</span>
        </Link>
        <div className="hover:text-teal-900 cursor-pointer flex flex-col justify-center items-center" onClick={handleLogout}>
          <FiLogOut />
          <span className="hidden md:block pt-2 text-sm">Se déconnecter</span>
        </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
