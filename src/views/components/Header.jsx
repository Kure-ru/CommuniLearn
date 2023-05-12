const Header = () => {
  return (
    <header className="flex p-10">
    <div className="p-10">
        <img src="/femme_volant_sur_crayon.png"/>
    </div>
    <div className="flex flex-col justify-center gap-12">
        <h1 className="pb-3 font-title font-bold text-5xl bold">Votre avenir commence ici</h1>
        <p className="font-header text-lg">CommuniLearn, la plateforme d'apprentissage en ligne où les étudiants et les enseignants indépendants se réunissent pour apprendre, se développer et partager leur savoir-faire</p>
        <div className="space-x-10 mt-3">
            <button className="font-header p-2 px-6   text-lg rounded-md  bg-gray-200">se connecter</button>
            <button className="font-header p-2 px-6  text-lg rounded-md  bg-emerald-200">s'inscrire</button>
        </div>
    </div>
    </header>
  )
}

export default Header