import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogService from "../services/blogs";
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
      <LessonForm blogTitle={title} blogCategory={category} blogContent={content}/>
    </main>
  );
};

export default EditLessonScreen;
