import Header from "../components/Header";

const AboutScreen = () => {
  return (
    <>
      <Header title={"Rendre le savoir ACCESSIBLE à tous"} />
      <main className=" flex flex-col items-center py-10">
        <section className="text-justify max-w-2xl p-4 ">
      <h2 className="py-4 text-xl font-header">Qui suis-je ?</h2>
      <p>
        Je suis Claire, en reconversion dans le développement web après avoir
        enseigné le français langue étrangère au Japon. Ma passion pour
        l'apprentissage et l'enseignement m'a amené à créer <span className="bg-emerald-100">CommuniLearn</span>, une
        plateforme d'apprentissage en ligne axée sur la bienveillance, la
        pratique et le partage.
      </p>
      </section>
      <section className="max-w-2xl text-justify p-4 ">
      <h2 className="py-4 text-xl font-header">
        Une Approche Basée sur la Bienveillance
      </h2>
      <p>
        Chez <span className="bg-emerald-100">CommuniLearn</span>, nous croyons en une <strong>approche bienveillante</strong> de
        l'apprentissage. Nous valorisons chaque apprenant et encourageons un
        environnement où chacun se sent en sécurité pour poser des questions,
        exprimer ses idées et apprendre à son propre rythme. Nous soutenons la
        diversité des parcours et des expériences, favorisant ainsi une
        atmosphère inclusive et collaborative.
      </p>
      </section>
      <section className="text-justify max-w-2xl p-4 ">
      <h2 className="py-4 text-xl font-header">
        L'Importance de la Pratique dans l'Apprentissage
      </h2>
      <p>
        Nous sommes convaincus que <strong>la pratique est essentielle pour consolider
        les connaissances</strong> et développer de nouvelles compétences. À travers
        notre plateforme, nous offrons des opportunités concrètes d'application
        des apprentissages, que ce soit par le biais d'exercices interactifs, de
        projets pratiques ou de mises en situation réelles. Nous encourageons
        nos apprenants à s'engager activement dans leur apprentissage, car c'est
        en pratiquant que l'on progresse.
      </p>
      </section>
      <section className="text-justify max-w-2xl p-4 ">
      <h2 className="py-4 text-xl font-header">
        Le Partage comme Fondement de l'Apprentissage
      </h2>
      <p>
        Nous nous inspirons des principes de <span className="italic">Pédagogie des opprimés </span>de <a className="text-emerald-500 hover:text-emerald-300" href="https://fr.wikipedia.org/wiki/P%C3%A9dagogie_des_opprim%C3%A9s#:~:text=P%C3%A9dagogie%20des%20opprim%C3%A9s%20traduit%20la,oppresseurs%20et%20recommence%20le%20cycle">Paulo
        Freire</a>, où le partage est considéré comme une composante essentielle de
        l'apprentissage. Chez <span className="bg-emerald-100">CommuniLearn</span>, nous encourageons nos apprenants à 
        <strong> partager leurs connaissances</strong>, expériences et idées avec la communauté.
        Nous croyons en l'apprentissage collaboratif, où chacun peut contribuer
        à la croissance et à l'enrichissement mutuel.
      </p>
      </section>
      <section className="text-justify max-w-2xl p-4 ">
      <h2 className="py-4 text-xl font-header">
        Rejoignez la Communauté CommuniLearn
      </h2>
      <p>
        En choisissant <span className="bg-emerald-100">CommuniLearn</span>, vous rejoignez une communauté d'apprenants
        engagés, prêts à explorer de nouveaux horizons et à repousser leurs
        limites. Notre plateforme vous offre un accès facile à une variété de
        cours et de ressources, tous conçus pour favoriser votre <strong>développement
        personnel et professionnel</strong>.
      </p>
      </section>
      <section className="text-justify max-w-2xl p-4 ">
      Laissez-nous vous accompagner dans votre parcours d'apprentissage et
      rejoignez-nous dès aujourd'hui sur <span className="bg-emerald-100">CommuniLearn</span> pour partager, pratiquer
      et grandir ensemble.
      </section>
    </main>
    </>
  );
};

export default AboutScreen;
