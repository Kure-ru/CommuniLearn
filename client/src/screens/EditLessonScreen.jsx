import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogService from "../services/blogs";
import LessonForm from "../components/lessons/LessonForm";

const EditLessonScreen = () => {
  let { lessonID } = useParams();
  const navigate = useNavigate();
  const [lessonData, setLessonData] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const blog = await blogService.get(lessonID);
        setLessonData(blog);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPost();
  }, [lessonID]);

  if (!lessonData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center font-header">
      <h1 className="py-2 text-3xl font-bold">Modifier une leçon</h1>
      <LessonForm initialValues={lessonData} isEditMode={true} />
    </main>
  );
};

export default EditLessonScreen;
