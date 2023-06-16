import { ImUser, ImSortAmountAsc } from "react-icons/im";
import { MdEuro, MdCalendarMonth } from "react-icons/md";
const SearchScreen = () => {
  return (
    <main className="flex flex-col md:flex-row gap-4 justify-around mb-10">
      <nav className="p-10">
        <h2 className="text-2xl pb-6">Explorer</h2>
        <ul className="flex flex-col justify-evenly gap-5 pr-4">
          <li className="pb-4 border-b border-slate-200">Arts et humanités</li>
          <li className="pb-4 border-b border-slate-200">Affaires</li>
          <li className="pb-4 border-b border-slate-200">Informatique</li>
          <li className="pb-4 border-b border-slate-200">Sciences et technologie</li>
          <li className="pb-4 border-b border-slate-200">Data science</li>
          <li className="pb-4 border-b border-slate-200">Santé</li>
          <li className="pb-4 border-b border-slate-200">Mathématique</li>
          <li className="pb-4 border-b border-slate-200">Développement personnel</li>
          <li className="text-emerald-500 pb-4 ">Tout explorer</li>
        </ul>
      </nav>

<section>
      <div className="flex flex-col  ">
        <div className="flex flex-wrap justify-between md:gap-4 mb-4">
          <button className=" flex items-center gap-2  p-2 border rounded-full text-xs text-slate-600">
            <ImUser />
            Professeur
          </button>
          <button className=" flex items-center gap-2 p-2 border rounded-full text-xs text-slate-600">
            <ImSortAmountAsc />
            Difficulté
          </button>
          <button className=" flex items-center gap-2 p-2 border rounded-full text-xs text-slate-600">
            <MdEuro />
            Prix
          </button>
          <button className=" flex items-center gap-2 p-2 border rounded-full text-xs text-slate-600">
            <MdCalendarMonth />
            Disponibilité
          </button>
        </div>

<div className="flex flex-col  gap-5 bg-slate-100  py-6 md:p-6 rounded-lg">

        <div className="flex justify-center gap-6 items-center ">
          <img className="rounded-lg " src="http://placekitten.com/100/75" />
          <div>
            <h3 className="pb-2">Prendre de beaux selfies</h3>
            <p className="text-sm text-slate-500">Valérie Giraud</p>
          </div>
        </div>
      
        <div className="flex justify-center gap-6 items-center">
          <img className="rounded-lg " src="http://placekitten.com/100/75" />
          <div>
            <h3 className="pb-2">Prendre de beaux selfies</h3>
            <p className="text-sm text-slate-500">Valérie Giraud</p>
          </div>
        </div>
      
        <div className="flex justify-center gap-6 items-center">
          <img className="rounded-lg " src="http://placekitten.com/100/75" />
          <div>
            <h3 className="pb-2">Prendre de beaux selfies</h3>
            <p className="text-sm text-slate-500">Valérie Giraud</p>
          </div>
        </div>
      
        <div className="flex justify-center gap-6 items-center">
          <img className="rounded-lg " src="http://placekitten.com/100/75" />
          <div>
            <h3 className="pb-2">Prendre de beaux selfies</h3>
            <p className="text-sm text-slate-500">Valérie Giraud</p>
          </div>
        </div>
      
        <div className="flex justify-center gap-6 items-center">
          <img className="rounded-lg " src="http://placekitten.com/100/75" />
          <div>
            <h3 className="pb-2">Prendre de beaux selfies</h3>
            <p className="text-sm text-slate-500">Valérie Giraud</p>
          </div>
        </div>
        </div>
        </div>
        </section>
     
    </main>
  );
};

export default SearchScreen;
