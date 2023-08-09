import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import userService from "../services/user";
import Button from "../components/Button";
import Textfield from "../components/Textfield";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error("Les mots de passe ne correspondent pas", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const user = await userService.create({
          username,
          password,
        });
        navigate("/profile");
      }
    } catch (err) {
      toast.error("Oups! Il y a eu une erreur. Veuillez réessayer.", {
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
    <main className="flex  flex-col items-center p-10 min-h-screen">
      <h1 className="py-2 text-3xl font-bold font-header ">S'inscrire</h1>
      <p className="pb-4">
        Inscrivez-vous gratuitement pour accéder à tous les cours
      </p>
      <form
        method="post"
        className="flex flex-col w-2/3 justify-around gap-8 py-6"
        onSubmit={handleRegister}
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
          onChange={({ target }) => setPassword(target.value)}
        />

        <Textfield
          label="Confirmer le mot de passe"
          name="password"
          type="password"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />

        <Button text="Inscrivez-vous" type="submit" />
      </form>
      <span>
        Déjà inscrit?{" "}
        <Link to="/login" className="text-emerald-500 underline">
          Connectez-vous
        </Link>
      </span>
    </main>
  );
};

export default RegisterScreen;
