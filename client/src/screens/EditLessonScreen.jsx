import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogService from "../services/blogs";
import Button from "../components/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LessonForm from "../components/LessonForm";

const EditLessonScreen = () => {
  let { lessonID } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const blog = await blogService.get(lessonID);
        setTitle(blog.title);
        setContent(blog.content);
        setCategory(blog.category);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPost();
  }, [lessonID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await blogService.update(lessonID, {
        title,
        content,
        category,
      });
      toast.success("L'article a bien été modifié");
      navigate(`/lesson/${lessonID}`); // Redirect to the blog post detail page
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite pendant la modification.");
    }
  };

  return (
    <main className="flex flex-col items-center font-header">
      <h1 className="py-2 text-3xl font-bold">Modifier une leçon</h1>
      {/* <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-2xl pb-6">Description</legend>
          <div className="flex flex-col pb-6">
            <label className="text-slate-400">Titre de la leçon *</label>
            <input
              className="rounded-md border border-slate-400 p-2"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-400">Description *</label>
            <textarea
              className="rounded-md border border-slate-400 p-2"
              value={content}
              onChange={({ target }) => setContent(target.value)}
            />
          </div>
        </fieldset>

        <div className="flex justify-around">
          <Button text={"Annuler"} color={"white"} onClick={() => navigate(`/lesson/${lessonID}`)} />
          <Button text={"Sauvegarder"} color={"emerald-200"} type="submit" />
        </div>
      </form> */}

      <LessonForm blogTitle={title} blogCategory={category} blogContent={content}/>
    </main>
  );
};

export default EditLessonScreen;
