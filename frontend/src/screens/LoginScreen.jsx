import { useState, useEffect } from "react";
import { Link, useNavigate, Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login)
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      console.log(err)
      toast.error('Email ou mot de passe invalide', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <section className="font-header bg-zinc-200 p-8">
        <h1 className="py-2 text-3xl font-bold font-header ">Se connecter</h1>
        <Form method="post" onSubmit={handleSubmit} className="flex flex-col py-6">
          <input
            className="p-4  rounded-lg mb-4"
            placeholder="Adresse email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-4 rounded-lg mb-4"
            placeholder="Mot de passe"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-emerald-100 p-4  rounded-lg mb-4" type="submit">
            Connectez-vous
          </button>
          <span>
            Vous n'avez pas encore de compte?{" "}
            <Link to="/register" className="text-emerald-500 underline">
              Inscrivez-vous
            </Link>
          </span>
        </Form>

        <div className="border-t border-zinc-400 pt-6">
          <button className="m-auto flex gap-4 p-4 items-center bg-white">
            <FcGoogle /> Se connecter avec Google
          </button>
        </div>
      </section>
    </main>
  );
};

export default LoginScreen;
