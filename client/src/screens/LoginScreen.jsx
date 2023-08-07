import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/login";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";
import Textfield from "../components/Textfield";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("loggedUser") || false)
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    try {
      const user = await loginService.login({
        username,
        password,
      });

      // local storage
      setAuthenticated(true);
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      setUser(user);
      setUsername("");
      setPassword("");
      navigate("/profile");
    } catch (err) {
      toast.error("informations erronées", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <main className="flex  flex-col  items-center p-10 min-h-screen">
        <h1 className="py-2 text-3xl font-bold">Se connecter</h1>
        <form
          method="post"
          className="flex flex-col justify-around gap-8 py-6"
          onSubmit={handleLogin}
        >
          <Textfield
            label="Nom d'utilisateur"
            name="username"
            value={username}
            required
            onChange={({ target }) => setUsername(target.value)}
          />
          <Textfield
            label="Mot de passe"
            name="password"
            type="password"
            value={password}
            required
            onChange={({ target }) => setPassword(target.value)}
          />

          <Button text="Connectez-vous" type="submit" />
        </form>
        <span>
          Vous n'avez pas encore de compte?{" "}
          <Link to="/register" className="text-emerald-500 underline">
            Inscrivez-vous
          </Link>
        </span>
    </main>
  );
};

export default LoginScreen;
