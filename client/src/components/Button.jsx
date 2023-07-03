const Button = ({ text, color }) => {
  return (
    <button className={`my-8 font-header p-2 px-6 text-lg rounded-md  bg-${color}`}>{text}</button>
  )
}

export default Button