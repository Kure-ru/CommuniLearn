import { BsPencil } from "react-icons/bs";
import { FiPlus } from "react-icons/fi"

const FAB = ({ icon }) => {
  if (icon === "add") {
    return (
      <div className="flex items-center justify-center m-4 p-4 w-16 h-16 text-2xl rounded-lg fixed bottom-10 right-10 md:absolute md:left-0 md:top-24  bg-emerald-200 shadow-lg hover:shadow-sm text-emerald-950">
       <FiPlus />
        
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center m-4 p-4 w-16 h-16 text-2xl rounded-lg fixed bottom-10 right-10 md:absolute md:left-0 md:top-24  bg-emerald-200 shadow-lg hover:shadow-sm text-emerald-950">
      <BsPencil />
    </div>
  );
};

export default FAB;
