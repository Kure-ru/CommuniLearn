import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Taskbar = () => {
  return (
    <div className="bg-white w-3/12 h-auto p-8">
    <ul className="h-full flex flex-col gap-8 justify-around">
    <FontAwesomeIcon
          className="h-6 text-neutral-400 self-start"
          icon={faArrowLeft}
        />
      <li>
        <img
          className="w-28 rounded-xl"
          src="/teacher_profile.jpg"
          alt="profil professeur"
        />
      </li>
      <li>
        <h2 className="text-xl font-bold font-header">Sarah B.</h2>
      </li>
      <li>Tableau de bord</li>
      <li>Gérer mes cours</li>
      <li>Mes élèves</li>
      <li>Supports pédagogiques</li>
      <li className="mt-auto">Réglages</li>
    </ul>
  </div>
  )
}

export default Taskbar