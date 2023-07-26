const Card = ({title, subtitle}) => {
  return (
    <div className="rounded-md p-4 flex flex-col bg-neutral-50 shadow-sm hover:shadow-md hover:bg-emerald-50 active:shadow-sm ">
        <h3 className="text-md">{title}</h3>
        <span className="text-sm text-neutral-500">{subtitle}</span>
    </div>
  )
}

export default Card