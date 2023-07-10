import { Link } from "react-router-dom";

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
             <Link to={`/lesson/${item.id}`}>
              <li key={index} className="flex items-center justify-between mb-4 p-4 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl">
             {item.title}
           </li>
           </Link>
          ))}
        </ul>
          {/* <a className="text-sm text-emerald-400 text-right" href="#">
            afficher tout →
          </a> */}
        </div>
      </section>
    );
  }
};


export default DashboardCard;
