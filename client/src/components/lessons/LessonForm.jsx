import blogService from "../../services/blogs";
import Button from "../Button";
import Textfield from "../Textfield";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import MDEditor from "@uiw/react-md-editor";
import Snackbar from "../Snackbar";

const LessonForm = ({ initialValues, isEditMode }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  let { courseID } = useParams();

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
          content,
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        const blog = await blogService.create({
          title,
          content,
          courseID
        });
      }
      navigate("/new");
    } catch (err) {
      setErrorMessage("Oups! Il y a une petite erreur, essayez plus tard");
      console.error(err);
    }
  };
  return (
    <form className="py-8 flex flex-col gap-8 w-9/12" onSubmit={handleSubmit}>

      <Textfield
            label="Titre de la leçon*"
            name="title"
            value={title}
            required
            onChange={({ target }) => setTitle(target.value)}
          />

      <div className="container">
        <span className="text-sm mb-12 text-slate-700">Cours *</span>
        <MDEditor value={content} onChange={setContent} />
      </div>

      <div className="flex justify-end gap-8">
        <Button type="submit" text="sauvegarder" />
        <Link to={"/new"}>
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
