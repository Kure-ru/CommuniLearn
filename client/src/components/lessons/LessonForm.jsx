import blogService from "../../services/blogs";
import Button from "../Button";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import MDEditor from "@uiw/react-md-editor";
import Snackbar from "../Snackbar";

const LessonForm = ({ initialValues, isEditMode }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [category, setCategory] = useState(initialValues.category);
  const [content, setContent] = useState(initialValues.content);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = window.localStorage.getItem("loggedUser");
    if (userToken) {
      const user = JSON.parse(userToken);
      blogService.setToken(user.token);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await blogService.update(initialValues.id, {
          title,
          category,
          content,
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        const blog = await blogService.create({
          title,
          category,
          content,
        });
      }
      navigate("/profile");
    } catch (err) {
      setErrorMessage("Oups! Il y a une petite erreur, essayez plus tard");
      console.error(err);
    }
  };
  return (
    <form className="py-8 flex flex-col gap-8 w-9/12" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="text-2xl pb-6">Description</legend>
        <div className="flex flex-col pb-6">
          <label className="text-slate-400">Titre de la leçon *</label>
          <input
            className="rounded-md  border border-slate-400 p-2"
            value={title}
            minLength="5"
            required
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
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
      </fieldset>

      <div className="container">
        <label className="text-slate-400">Cours *</label>
        <MDEditor value={content} onChange={setContent} />
      </div>

      <div className="flex justify-end gap-8">
        <Button type="submit" text="sauvegarder" />
        <Link to={"/"}>
          <Button type="elevated" text="annuler" />
        </Link>
      </div>
      {errorMessage && (
        <div>
          <Snackbar message={errorMessage} />
        </div>
      )}
    </form>
  );
};

export default LessonForm;
