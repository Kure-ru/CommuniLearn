import { Link } from "react-router-dom";
import Button from "./Button"

const Hero = () => {
    return (
      <header className="flex flex-col p-10 md:flex-row">
      <div className="md:p-10">
          <img src="/femme_volant_sur_crayon.png"/>
      </div>
      <div className="flex flex-col justify-center md:gap-12">
          <h1 className="pb-3 font-title font-bold text-5xl bold">Votre avenir commence ici</h1>
          <p className="font-header text-lg">CommuniLearn, la plateforme d'apprentissage en ligne où les étudiants et les enseignants indépendants se réunissent pour apprendre, se développer et partager leur savoir-faire</p>
          <div className="flex justify-around md:mt-3">
          <Link to="/login"><Button text={'se connecter'} color={"gray-200"}/></Link>
          <Link to="/register"><Button text={"s'inscrire"} color={"emerald-200"}/></Link>
          </div>
      </div>
      </header>
    )
  }
  
  export default Hero