import { useState } from "react"

import { faB, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='bg-white fixed top-0 left-0 right-0 h-16 border-solid border-b border-gray-200 p-5 flex md:flex-row w-screen justify-between items-center'>
    <h3 className='font-title text-lg font-bold'>CommuniLearn</h3>
  <FontAwesomeIcon onClick={toggleMenu} className="md:hidden block cursor-pointer" icon={faBars}/>
  <ul className={`${showMenu ? "fixed top-0 right-0 pl-4 flex flex-col items-center bg-white gap-8 mt-12" : "hidden"} md:flex font-header  flex-row justify-around md:w-10/12 items-center`}>
  <li><input className='mx-4 md:w-60 rounded-full bg-gray-100'/></li>
  <li>Mes cours</li>
  <li>Mes élèves</li>
  <li className="flex gap-2 border-solid border border-gray-100 py-1 px-4 rounded-full items-center">
    <img className="w-8 rounded-full " src="teacher_profile.jpg" alt="teacher profile"/>
    Sarah B.</li>
</ul>
    </nav>
  )
}

export default Nav


{/* <nav className='bg-white fixed top-0 left-0 right-0 h-16 border-solid border-b border-gray-200 p-5 flex flex-row w-screen justify-between items-center'>
<h3 className='font-title text-lg font-bold'>CommuniLearn</h3>

</nav> */}