import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import userService from "../services/user";

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
    <main className="mb-4 flex items-center justify-center">
      <section className="rounded-md font-header bg-zinc-200 py-4 px-8">
        <h1 className="py-2 text-3xl font-bold font-header ">S'inscrire</h1>
        <p className="pb-4">
          Inscrivez-vous gratuitement pour accéder à tous les cours
        </p>
        <form className="flex flex-col py-6" onSubmit={handleRegister}>
          <div>
            <label className=" block text-gray-700 text-sm font-bold mb-2">
            Nom d'utilisateur
            </label>
          <input
            className="p-4 w-full rounded-lg mb-4"
            placeholder="Nom d'utilisateur"
            name="username"
            value={username}
            required
            onChange={({ target }) => setUsername(target.value)}
          />
          </div>
          
          {/* <input
            className="p-4  rounded-lg mb-4"
            placeholder="Adresse email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          /> */}
          <div>
            <label className=" block text-gray-700 text-sm font-bold mb-2">
            Mot de passe
            </label>
          <input
            className="p-4 rounded-lg mb-4 w-full"
            placeholder="Mot de passe"
            name="password"
            type="password"
            minlength="8"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          </div>

          <div>
            <label className=" block text-gray-700 text-sm font-bold mb-2">
            Confirmer le mot de passe
            </label>
            <input
            className="p-4 rounded-lg mb-4 w-full"
            placeholder="Confirmez le mot de passe"
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            minlength="8"
            required
            onChange={({ target }) => setConfirmPassword(target.value)}
          />
          </div>

          
          <button className="bg-emerald-100 p-4  rounded-lg my-4" type="submit">
            Inscrivez-vous
          </button>
          <span>
            Déjà inscrit?{" "}
            <Link to="/login" className="text-emerald-500 underline">
              Connectez-vous
            </Link>
          </span>
        </form>

        {/* <div className="border-t border-zinc-400 pt-6">
          <button className="m-auto flex gap-4 p-4 items-center bg-white">
            <FcGoogle /> S'inscrire avec Google
          </button>
        </div> */}
      </section>
    </main>
  );
};

export default RegisterScreen;
