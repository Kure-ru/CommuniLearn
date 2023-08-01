import LessonForm from "../components/lessons/LessonForm";

const CreateLessonScreen = () => {
  const initialValues = {
    title: "",
    category: "",
    content: "",
  };

  return (
    <main className="pt-8 flex flex-col items-center font-header">
      <h1 className="py-2 text-3xl font-bold">Créer une leçon</h1>
      <LessonForm initialValues={initialValues}/>
    </main>
  );
};

export default CreateLessonScreen;
