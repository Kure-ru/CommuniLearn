const Textfield = ({ label, value, onChange }) => {
  if (label !== "Mot de passe") {
    return (
      <div className="relative flex flex-col">
        <label className="absolute inset-0 pointer-events-none px-3 py-1 text-sm text-slate-600">
          {label}
        </label>
        <input
          className="h-14 border-b border-slate-700 pt-5 pb-2 px-3 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:border-emerald-500 focus:border-b-2 focus:ring-none focus:ring-emerald-500 invalid:text-red-600 rounded-sm placeholder:text-slate-700 placeholder:text-lg text-neutral-950"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return (
      <div className="relative flex flex-col">
        <label className="absolute inset-0 pointer-events-none px-3 py-1 text-sm text-slate-600">
          {label}
        </label>
        <input
          className="h-14 border-b border-slate-700 pt-5 pb-2 px-3 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:border-emerald-500 focus:border-b-2 focus:ring-none focus:ring-emerald-500 invalid:text-red-600 rounded-sm placeholder:text-slate-700 placeholder:text-lg text-neutral-950"
          value={value}
          type="password"
          onChange={onChange}
          minlength="8"
          required
        />
        <span className="text-sm text-slate-700">Le mot de passe doit comporter 8 caractères minimum</span>
      </div>
    );
  }
};

export default Textfield;
