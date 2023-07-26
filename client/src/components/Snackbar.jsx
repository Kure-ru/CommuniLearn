import { useState, useEffect } from "react";

const Snackbar = ({ message }) => {
  const [showSnackbar, setShowSnackbar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnackbar(false);
    }, 3000); // Change the value to set the desired duration (in milliseconds)

    return () => {
      clearTimeout(timer);
    };
  }, [showSnackbar]);

  return showSnackbar ? (
    <div className="w-9/12 absolute bottom-8 flex w- rounded-md justify-between items-center bg-neutral-800/80  shadow-lg h-12 pl-4 pr-2">
      <span className="text-neutral-100">{message}</span>
      {/* <span className="text-emerald-400 font-bold">annuler</span> */}
    </div>
  ) : null;
};

export default Snackbar;
