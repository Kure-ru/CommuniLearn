import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai"



const DashboardCard = ({ category, content }) => {


  if (!content) {
    return (
      <section className="flex flex-col mr-8 mb-8 w-full h-2/5 bg-white rounded-xl p-4">
        <h3 className="text-xl font-bold font-header mb-4">{category}</h3>
        <span>Ajouter un article</span>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col bg-white rounded-xl w-5/12 p-8">
      <h2 className="text-2xl font-bold font-header mb-4">{category}</h2>
        <div className="flex flex-col justify-end">
        <ul>
          {content.map((item, index) => (
             <li key={index} className="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded-xl">
             <Link to={`/lesson/${item.id}`}>{item.title}</Link> {category === "Mes cours" ?  <Link to={`/edit/${item.id}`}><AiOutlineEdit/> </Link>: "" } 
           </li>
          ))}
        </ul>
          <a className="text-sm text-emerald-400 text-right" href="#">
            afficher tout →
          </a>
        </div>
      </section>
    );
  }
};


export default DashboardCard;
