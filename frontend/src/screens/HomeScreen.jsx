import Hero from "../components/Hero"
import Footer from "../components/Footer";

import { FaLightbulb, FaCreditCard, FaUsers } from "react-icons/fa";


const HomeScreen = () => {
  return (
    <>
    <Hero/>

    <main className="p-3">
      <h2 className="pb-8 text-3xl text-center font-header">
        Comment fonctionne CommuniLearn ?
      </h2>
      <div className="flex p-10 gap-8">
        <div className="flex flex-col items-center">
          <div className=" flex justify-center content-center flex-wrap bg-emerald-100 rounded-full w-32 h-32">
            <FaLightbulb
              className="text-6xl text-neutral-800"
            />
          </div>
          <p className="font-header p-8 ">
            Explorez notre gamme variée de cours et trouvez celui qui vous
            convient le mieux grâce aux filtres de recherche détaillés.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className=" flex justify-center content-center flex-wrap bg-emerald-100 rounded-full w-32 h-32">
            <FaCreditCard
              className="text-6xl text-neutral-800"
            />
          </div>
          <p className="font-header p-8 ">
          Vous pouvez vous inscrire à des cours et gérer vos paiements en toute sécurité et sans souci.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className=" flex justify-center content-center flex-wrap bg-emerald-100 rounded-full w-32 h-32">
            <FaUsers
              className="text-6xl text-neutral-800"
            />
          </div>
          <p className="font-header p-8 ">
          Une expérience d'apprentissage vivante et dynamique qui nous rapproche en tant que communauté.
          </p>
        </div>
      </div>
      <section className=" p-16">
      <h3 className="pb-8 text-3xl text-center font-header">Notre mission</h3>
        <div className="flex justify-around">
        <p className="text-justify basis-1/2 p-10 text-lg leading-10 font-header max-w-4xl" >Notre mission chez CommuniLearn est de rendre la connaissance accessible à tous. Nous croyons que l'apprentissage peut être amusant et qu'il rassemble les gens. Grâce à notre solution numérique, nous cherchons à briser les barrières et à offrir des opportunités à tous. Rejoignez notre communauté pour découvrir de nouvelles passions, apprendre de nouvelles compétences et partager votre expertise avec le monde entier.</p>
        <div className="p-10 grow-0 w-96">
            <img src="etudiant_livre.png" alt="étudiant au tableau tenant un livre"/>
        </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default HomeScreen