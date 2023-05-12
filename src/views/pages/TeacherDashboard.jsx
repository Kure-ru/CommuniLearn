import DashboardCard from "../components/DashboardCard";
import Nav from "../components/Nav";
import Taskbar from "../components/Taskbar";
import Footer from "../components/Footer";

const TeacherDashboard = () => {
  return (
    <>
      <Nav />
      <main className="mt-16 flex h-full bg-gradient-to-t from-white via-white to-emerald-200">
        <Taskbar />
        <div className="p-8 w-4/12 ">
          <DashboardCard category={"Mes élèves"} />
          <DashboardCard category={"Mes cours"} />
        </div>
        <section className="flex flex-col m-8 w-5/12 h-2/5 bg-white rounded-xl p-8">
          <h2 className="text-2xl font-bold font-header mb-4">
            Emploi du temps
          </h2>
          <div className="flex justify-between w-full text-slate-400">
            <div className=" mb-4 font-title font-grey-200 flex flex-col">
              <span className="mb-2">L</span>
              <span>1</span>
            </div>
            <div className=" font-title font-grey-200 flex flex-col">
              <span className="mb-2">Ma</span>
              <span>2</span>
            </div>
            <div className=" font-title font-grey-200 flex flex-col">
              <span className="mb-2">Me</span>
              <span>3</span>
            </div>
            <div className=" font-title font-grey-200 flex flex-col">
              <span className="mb-2">J</span>
              <span>4</span>
            </div>
            <div className=" font-title font-grey-200 flex flex-col">
              <span className="mb-2">V</span>
              <span>5</span>
            </div>
            <div className=" font-title font-grey-200 flex flex-col">
              <span className="mb-2">S</span>
              <span>6</span>
            </div>
            <div className=" font-title font-grey-200 flex flex-col">
              <span className="mb-2">D</span>
              <span>7</span>
            </div>
          </div>
          <h3 className="text-xl font-bold font-header mb-4">Leçons</h3>
          <div className=" h-12 mb-4 p-4 bg-gray-100 rounded-xl"></div>
          <div className=" h-12 mb-4 p-4 bg-gray-100 rounded-xl"></div>
          <div className=" h-12 mb-4 p-4 bg-gray-100 rounded-xl"></div>
          <div className=" h-12 mb-4 p-4 bg-gray-100 rounded-xl"></div>
        </section>
      </main>
     <Footer/>
    </>
  );
};

export default TeacherDashboard;
