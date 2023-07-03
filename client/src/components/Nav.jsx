import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import blogService from "../services/blogs";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Image } from "cloudinary-react";

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
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    <Navigate replace to="/" />;
  };

  return (
    <nav className="p-10 flex flex-row w-screen justify-between items-center">
      <Link to={"/"}>
        <h3 className="font-title text-lg font-bold">CommuniLearn</h3>
      </Link>

      <FaBars onClick={toggleMenu} className="md:hidden block cursor-pointer" />

      <ul
        className={`${
          showMenu
            ? "fixed top-0 right-0 pl-4 pb-4 flex flex-col items-center bg-white gap-8 mt-24 "
            : "hidden"
        } md:flex font-header  flex-row justify-around md:w-10/12 items-center`}
      >
        {user ? (
          <>
            <li
              id="username"
              className="border-solid border border-gray-100 py-1 px-4 rounded-full items-center"
            >
              <Link
                to="/settings"
                className="flex flex-row gap-2  items-center"
              >
                <img
                  className="w-8 rounded-full "
                  src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1687884581/${user.profilePicture}.jpg`}
                  alt="teacher profile"
                />
                <p>{user.username}</p>
              </Link>
            </li>
            <li>
              <a href="/new">Nouvelle leçon</a>
            </li>
            <Image/>
            <li>
            </li>
            <li className="cursor-pointer" onClick={handleLogout}>
              Se déconnecter
            </li>
          </>
        ) : (
          <>
            <li>
              <input className="mx-4 md:w-60 rounded-full bg-gray-100" />
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

  //   const [showMenu, setShowMenu] = useState(false)

  //   const toggleMenu = () => {
  //     setShowMenu(!showMenu)
  //   }

  //   return (
  //     <nav className='bg-white fixed top-0 left-0 right-0 h-16 border-solid border-b border-gray-200 p-5 flex md:flex-row w-screen justify-between items-center'>
  //     <h3 className='font-title text-lg font-bold'>CommuniLearn</h3>
  //   <FaBars onClick={toggleMenu} className="md:hidden block cursor-pointer"/>
  //   <ul className={`${showMenu ? "fixed top-0 right-0 pl-4 pb-4 flex flex-col items-center bg-white gap-8 mt-12 " : "hidden"} md:flex font-header  flex-row justify-around md:w-10/12 items-center`}>
  //   <li><input className='mx-4 md:w-60 rounded-full bg-gray-100'/></li>
  //   <li>Mes cours</li>
  //   <li>Mes élèves</li>
  //
  // </ul>
  //     </nav>
  //   )
};

export default Nav;
