import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SettingsScreen = () => {
const { user } = useContext(UserContext);

  return (
    <main className="p-10 flex flex-col justify-center">
        <h1 className="py-2 text-3xl font-bold font-header ">Mon profil</h1>
    <div className="flex p-8 gap-4 items-center">
        <img className="w-14" src="/teacher_profile.jpg" alt="profil"/>
        <h2>{user.username}</h2>
    </div>
    </main>
  )
}

export default SettingsScreen