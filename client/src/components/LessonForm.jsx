import blogService from "../services/blogs";
import Button from "../components/Button";

import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ImLink } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillFolder } from "react-icons/ai";

import { toast } from "react-toastify";
import MDEditor from "@uiw/react-md-editor";

const LessonForm = ({ blogTitle, blogCategory, blogContent }) => {
  const [title, setTitle] = useState(blogTitle);
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (blogTitle) {
      setTitle(blogTitle);
    }
    if (blogCategory) {
      setCategory(blogCategory);
    }
    if (blogContent) {
      setContent(blogContent);
    }
  }, [blogTitle, blogCategory, blogContent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blog = await blogService.create({
        title,
        category,
        content,
      });
      setBlogs([...blogs, blog]);
      navigate("/profile");
    } catch (err) {
      toast.error("Oups! Il y a une petite erreur, essayez plus tard", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        {/* <div className="flex flex-col">
          <label className="text-slate-400">Description *</label>
          <textarea
            className="rounded-md border border-slate-400 p-2"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            required
          />
        </div> */}
      </fieldset>
      {/* <h2 className="text-2xl py-4">Contenu</h2>
   
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
    </fieldset> */}

      <div className="container">
        <label className="text-slate-400">Cours *</label>
        <MDEditor value={content} onChange={setContent} />
        {/* <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </div>

      <div className="flex justify-end gap-8">
        <Button type="submit" text="sauvegarder" />
        <Link to={"/"}>
          <Button type="elevated" text="annuler" />
        </Link>
      </div>
    </form>
  );
};

export default LessonForm;
