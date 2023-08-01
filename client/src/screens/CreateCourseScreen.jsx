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
  const [course, setCourse] = useState({
    title: "",
    chapters: [],
  });


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
      const newCourse = await coursesService.create({
        title,
        category,
      });
      setCourse(newCourse)
      console.log(course)

    } catch (err) {
      setErrorMessage("Oups! Il y a une petite erreur, essayez plus tard");
      console.error(err);
    }
  };

  const handleChapterChange = (index, value) => {
    const updatedChapters = [...course.chapters];
    updatedChapters[index] = value;
    setCourse({ ...course, chapters: updatedChapters });
  };

  const addChapter = () => {
    setCourse({ ...course, chapters: [...course.chapters, ""] });
  };

  const removeChapter = (index) => {
    const updatedChapters = [...course.chapters];
    updatedChapters.splice(index, 1);
    setCourse({ ...course, chapters: updatedChapters });
  };

  const Chapters = () => {
    return (
      <>
        <section className="flex flex-col gap-8 border border-slate-300 p-5 rounded-sm">
          {course.chapters.map((courseItem, index) => (

            <div key={course.id} className="flex items-center">
              <Textfield
                label={`Chapitre ${index + 1}`}
                name={`Chapitre ${index}`}
                value={courseItem.title}
                required
                onChange={({ target }) =>
                  handleChapterChange(index, target.value)}/>
                </div>
          ))}
              </section>
                   <Link to={`/${course.id}/new`} className="flex justify-center">
                   <Button type="elevated" text="+" />
                 </Link>
          </>
          )}

  return (
    <main className="p-8 flex flex-col justify-center items-center gap-4 ">
      <h1 className="py-2 text-3xl font-bold">Créer un cours</h1>
      <form
        className="p-8 w-2/3 flex flex-col gap-4 items-stretch"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col gap-8 border border-slate-300 rounded-sm p-5">
          <Textfield
            label="Titre du cours"
            name="title"
            value={title}
            required
            onChange={({ target }) => setTitle(target.value)}
          />

          <div className="flex flex-col pb-4">
            <label className="text-sm text-slate-700">Catégorie *</label>
            <select
              className="rounded-sm border-b border-slate-700 bg-neutral-100 hover:bg-neutral-200 focus:outline-none focus:border-emerald-500 focus:border-b-2 focus:ring-none focus:ring-emerald-500 invalid:text-red-600  p-2"
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
        </section>


        {course.title && <Chapters />}

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
