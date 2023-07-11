import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import blogService from "../services/blogs";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let userString = localStorage.getItem("loggedUser");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, [setUser]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    <Navigate replace to="/" />;
  };

  return (
    <nav className="bg-emerald-200 px-8 py-4 flex flex-row w-screen justify-between md:justify-end">
      <Link className='self-center' to={"/"}>
        <h3 className=" font-title text-xl font-bold">CommuniLearn</h3>
      </Link>

      <FaBars onClick={toggleMenu} className="md:hidden block cursor-pointer" />

      <ul
        className={`${
          showMenu
            ? "fixed top-0 right-0 pl-4 pb-4 flex flex-col  bg-white gap-4 mt-24 "
            : "hidden"
        } md:flex font-header gap-6 flex-row justify-end md:w-10/12 items-center`}
      >
        {user ? (
          <>
            <li
              id="username"
              className="bg-emerald-300 p-2 rounded-md items-center"
            >
              <Link
                to="/profile"
                className="flex flex-row gap-2  items-center"
              >
                <p>{user.username}</p>
              </Link>
            </li>
            <li>
              <Link to={"/about"} className=" hover:bg-emerald-100 rounded-md p-3">À propos</Link>
            </li>
            <li>
              <Link to={"/settings"} className=" hover:bg-emerald-100 rounded-md p-3">Réglages</Link>
            </li>

            <li className="cursor-pointer hover:bg-emerald-100 rounded-md p-3" onClick={handleLogout}>
             <span>Se déconnecter</span> 
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/about"}>À propos</Link>
            </li>
            <li>
              <Link to="/login">Connectez-vous</Link>
            </li>

            <li>
              <Link to="/register">Inscrivez-vous</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
