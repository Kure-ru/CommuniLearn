import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Button = ({ text, type }) => {
  if (type === "elevated") {
    return (
      <button className="flex gap-2 items-center bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 text-emerald-600 p-2 shadow-sm hover:shadow-md px-4 rounded-full">
       {text === "Éditer" && <AiOutlineEdit/> }
       {text === "Supprimer" && <AiOutlineDelete/> }
      
       {text}
      </button>
    );
  } else if (type === "submit"){
    return (
      <button className="flex justify-center gap-2 items-center bg-emerald-600 text-white p-2 hover:shadow-md px-4 rounded-full">
       {text === "Éditer" && <AiOutlineEdit/> }
       {text === "Supprimer" && <AiOutlineDelete/> }
      
       {text}
      </button>
    );
  }
};

export default Button;
