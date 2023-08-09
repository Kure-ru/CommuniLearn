import { AiOutlineHeart, AiFillCheckCircle } from "react-icons/ai";

const Icon = ({ onClick, isActive, type }) => {
  console.log(isActive);

  if (type === "check") {
    const iconElement = isActive ? <AiFillCheckCircle className="text-xl text-emerald-900"/> : null;
    return <>{iconElement}</>;
  } else if (type === "heart") {
    return (
      <div
        className={`text-xl ${
          isActive
            ? "text-emerald-900 bg-emerald-100 hover:bg-emerald-300 active:text-emerald-900 active:bg-emerald-100"
            : "text-neutral-900 bg-neutral-100 hover:bg-neutral-300 active:text-neutral-900 active:bg-neutral-100"
        } w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}
        onClick={onClick}
      >
        <AiOutlineHeart />
      </div>
    );
  }

};

export default Icon;
