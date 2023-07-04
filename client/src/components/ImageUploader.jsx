import userService from "../services/user";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Button from "./Button";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError ] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const uploadImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await userService.updatePicture(user.id, image);
      setUser(response)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("There was an error. Please try again.");
    }
}

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };

  return (
    <div className="h-screen sm:px-8 md:px-16 sm:py-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <header className=" py-12 flex flex-col justify-center items-center">
          <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
            <span>Modifier la photo de profil</span>
          </p>
          <input
            id="hidden-input"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
          <label htmlFor="hidden-input" className="cursor-pointer">
            <div className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
            Télécharger une image
            </div>
          </label>

          <div className="flex justify-center items-center mt-5 mx-3 max-w-xs">
            {preview && <img src={preview} alt="preview" className="w-full" />}
          </div>
        </header>
        <div className="flex justify-end pb-8 pt-6 gap-4">
          <button
            onClick={uploadImage}
            className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
            disabled={!image}
          >
            Confirmer
          </button>
          <button
            onClick={handleResetClick}
            className="rounded-sm px-3 py-1 bg-red-700 hover:bg-red-500 text-white focus:shadow-outline focus:outline-none"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
