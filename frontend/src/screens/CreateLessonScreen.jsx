import Button from "../components/Button";
import { Form } from "react-router-dom";

import { ImLink } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi"
import { AiFillFolder } from "react-icons/ai"

const CreateLessonScreen = () => {
  return (
    <main className="flex flex-col items-center font-header">
      <h1 className="py-2 text-3xl font-bold  ">Créer une leçon</h1>
      <Form className="flex flex-col gap-8">
        <fieldset>
          <legend className="text-2xl pb-6">Description</legend>
          <div className="flex flex-col pb-6">
            <label className="text-slate-400">Titre de la leçon *</label>
            <input className="rounded-md  border border-slate-400 p-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-400">Description *</label>
            <textarea className="rounded-md border border-slate-400 p-2" />
          </div>
        </fieldset>
        <h2 className="text-2xl py-4">Contenu</h2>
       
        <fieldset>
          <div className="bg-slate-100 p-10 ">
            <label className="text-slate-500 mb-4 flex items-center text-lg">
              <ImLink className="mr-4"/> Ajouter un article
            </label>
            <div className="py-4">
              <input className="rounded-md mr-8 p-2" placeholder="titre de l'article" />
              <input className="rounded-md mr-8 p-2" placeholder="https://" />
            </div>
            <div>
              <input className="rounded-md mr-8 p-2" placeholder="titre de l'article" />
              <input className="rounded-md mr-8 p-2" placeholder="https://" />
            </div>

            <Button text={'+ nouvel article'} color={"emerald-200"}/>
          </div>
        </fieldset>

        <fieldset className="bg-slate-100 p-10 ">
            <label className="text-slate-500 mb-4 flex items-center text-lg">
              <BiMoviePlay className="mr-4"/> Ajouter une vidéo
            </label>
            <div className=" bg-white flex items-center text-slate-400 py-4">
             <TfiYoutube className="rounded-md text-lg mx-6 border-slate-400"/>
              <input className=" border-slate-300 border-l mr-8 p-2" placeholder="https://" />
            </div>

            <Button text={'+ nouvelle vidéo'} color={"emerald-200"}/>
        </fieldset>

        <fieldset className="bg-slate-100 p-10 ">
            <label className="text-slate-500 mb-4 flex items-center text-lg">
              <AiFillFolder className="mr-4"/> Attacher un fichier
            </label>
        </fieldset>

    <div className="flex justify-around">
      <Button className="bg-white" text={'supprimer'} color={"white"}/>
      <Button text={'sauvegarder'} color={"emerald-200"}/>
    </div>

      </Form>
    </main>
  );
};

export default CreateLessonScreen;
