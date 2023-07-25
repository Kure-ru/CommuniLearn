import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";
import userService from "../services/user";

import ImageUpload from "../components/ImageUploader";

const SettingsScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user ? user.username : "");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .update(user.id, { username })
      .then((returnedUser) => {
        setUsername(returnedUser.username);
        setUser(returnedUser);
        console.log(user);
        window.localStorage.clear();
        window.localStorage.setItem("loggedUser", JSON.stringify(returnedUser));
      })
      .catch(() => {
        console.error("Il y a eu une erreur. Veuillez réessayer.");
        setUsername(user.username);
      });
  };

  return (
    <main className="p-10 flex flex-col justify-center">
      <h1 className="py-2 text-3xl font-bold font-header ">Mon profil</h1>

      <section className=" flex items-center justify-center px-4 bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg w-full rounded-lg shadow-lg p-4"
        >
          <h3 className="font-semibold text-lg text-gray-700 tracking-wide">
            Informations personnelles
          </h3>
          <p className="text-gray-500 my-1">Nom d'utilisateur</p>
          <input
            className="text-l p-2"
            value={username}
            onChange={handleChange}
          />
          <div>
            <Button type="submit" text="Valider" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default SettingsScreen;
