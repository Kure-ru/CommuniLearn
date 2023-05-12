const LPNav = () => {
  return (
    <nav className='p-10 flex flex-row w-screen justify-between items-center'>
    <h3 className='font-title text-lg font-bold'>CommuniLearn</h3>
    <ul className='font-header flex flex-row justify-around w-10/12 items-center'>
      <li>Cours</li>
      <li><input className='w-80 rounded-full bg-gray-100'/></li>
      <li>Enseigner</li>
      <li>Connectez-vous</li>
      <li>Inscrivez-vous</li>
    </ul>
  </nav>
  )
}

export default LPNav