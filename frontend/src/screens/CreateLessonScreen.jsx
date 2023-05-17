import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Form } from "react-router-dom";

import { ImLink } from "react-icons/im";

const CreateLessonScreen = () => {
  return (
    <main className="flex flex-col items-center font-header">
      <h1 className="py-2 text-3xl font-bold  ">Créer une leçon</h1>
      <Form>
        <fieldset>
          <legend className="text-2xl">Description</legend>
          <div className="flex flex-col">
            <label className="text-slate-400">Titre de la leçon *</label>
            <input className="border border-slate-400 p-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-400">Description *</label>
            <textarea className="border border-slate-400 p-2" />
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-2xl">Contenu</legend>
          <div className="bg-slate-100 p-10">
            <label>
              <ImLink /> Ajouter un article
            </label>
            <div className="py-4">
              <input className="mr-8 p-2" placeholder="titre de l'article" />
              <input className="mr-8 p-2" placeholder="https://" />
            </div>
            <div>
              <input className="mr-8 p-2" placeholder="titre de l'article" />
              <input className="mr-8 p-2" placeholder="https://" />
            </div>

            <button>Ajouter un nouvel article</button>
          </div>
        </fieldset>
      </Form>
    </main>
  );
};

export default CreateLessonScreen;
