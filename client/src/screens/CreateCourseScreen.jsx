import Textfield from "../components/Textfield";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import coursesService from "../services/courses";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CreateCourseScreen = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const userToken = window.localStorage.getItem("loggedUser");
    if (userToken) {
      const user = JSON.parse(userToken);
      coursesService.setToken(user.token);
    }
  }, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // eslint-disable-next-line no-unused-vars
        const course = await coursesService.create({
          title,
          category,
        });
        console.log(course)
    } catch (err) {
      setErrorMessage("Oups! Il y a une petite erreur, essayez plus tard");
      console.error(err);
    }
  };

  return (
    <main>
      <h1 className="py-2 text-3xl font-bold">Créer un cours</h1>
      <form className="w-2/3 flex flex-col items-center" onSubmit={handleSubmit}>
        <Textfield
          label="Titre du cours"
          name="title"
          value={title}
          required
          onChange={({ target }) => setTitle(target.value)}
        />

<div className="flex flex-col pb-6">
          <label className="text-slate-400">Catégorie *</label>
          <select
            className="rounded-md  border border-slate-400 p-2"
            value={category}
            required
            onChange={({ target }) => setCategory(target.value)}
          >
            <option value="">--Choisissez une catégorie</option>
            <option value="Développement Web">Développement Web</option>
            <option value="Design Graphique">Design Graphique</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Langues Étrangères">Langues Étrangères</option>
            <option value="Photographie">Photographie</option>
            <option value="Musique et Production Audio">
              Musique et Production Audio
            </option>
            <option value="Cuisine et Art Culinaire">
              Cuisine et Art Culinaire
            </option>
            <option value="Fitness et Bien-être">Fitness et Bien-être</option>
            <option value="Développement Personnel">
              Développement Personnel
            </option>
            <option value="Science et Technologie">
              Science et Technologie
            </option>
          </select>
        </div>
        <div className="flex justify-end gap-8">
        <Button type="submit" text="sauvegarder" />
        <Link to={"/"}>
          <Button type="elevated" text="annuler" />
        </Link>
      </div>
      </form>
      {errorMessage && (
        <div>
          <Snackbar message={errorMessage} />
        </div>
      )}
    </main>
  );
};

export default CreateCourseScreen;
