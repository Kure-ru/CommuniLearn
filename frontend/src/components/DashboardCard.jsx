const DashboardCard = ({ category }) => {
  return (
    <section className="flex flex-col mr-8 mb-8 w-full h-2/5 bg-white rounded-xl p-4">
    <h3 className="text-xl font-bold font-header mb-4">{category}</h3>
    <div className=" h-12 mb-4 p-4 bg-gray-100 rounded-xl"></div>
    <div className=" h-12 mb-4 p-4 bg-gray-100 rounded-xl"></div>
    <div className="flex justify-end">
    <a className="text-sm text-emerald-400 text-right" href="#">afficher tout →</a>
  </div>
  </section>
  )
}

export default DashboardCard