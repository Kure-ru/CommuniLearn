import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userName, email, password, confirmPassword)
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <section className="font-header bg-zinc-200 p-8">
        <h1 className="py-2 text-3xl font-bold font-header ">S'inscrire</h1>
        <p className="pb-4">Inscrivez-vous gratuitement pour accéder à tous les cours</p>
        <form onSubmit={handleSubmit} className="flex flex-col py-6">
          <input className="p-4 rounded-lg mb-4" placeholder="Nom" name="name" required  onChange={({ target }) => setUserName(target.value)}/>
          <input className="p-4  rounded-lg mb-4" placeholder="Adresse email" name="email" required onChange={({ target }) => setEmail(target.value)}/>
          <input className="p-4 rounded-lg mb-4" placeholder="Mot de passe" name="password" required onChange={({ target }) => setPassword(target.value)}/>
          <input className="p-4 rounded-lg mb-4" placeholder="Confirmez le mot de passe" name="confirmPassword" required onChange={({ target }) => setConfirmPassword(target.value)}/>
          <button className="bg-emerald-100 p-4  rounded-lg mb-4" type="submit">Inscrivez-vous</button>
          <span  >
          Déjà inscrit? <Link to="/login" className="text-emerald-500 underline">Connectez-vous</Link>
        </span>
        </form>
       
        <div className="border-t border-zinc-400 pt-6">
        <button className="m-auto flex gap-4 p-4 items-center bg-white">
          <FcGoogle/> S'inscrire avec Google
        </button>
        </div>
      </section>
    </main>
  );
};

export default RegisterScreen;
