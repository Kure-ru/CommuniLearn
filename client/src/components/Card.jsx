import Icon from "./Icon";

const Card = ({ title, subtitle, iconType, isActive }) => {
  return (
    <div className="rounded-md p-4 flex items-center justify-between bg-neutral-50 shadow-sm hover:shadow-md hover:bg-emerald-50 active:shadow-sm ">
      <div className="flex flex-col">
        <h3 className="text-md">{title}</h3>
        <span className="text-sm text-neutral-500">{subtitle}</span>
      </div>
      {iconType === "delete" && <Icon type={iconType} />}
      {iconType === "check" && <Icon type={iconType} isActive={isActive}/>}
    </div>
  );
};

export default Card;
