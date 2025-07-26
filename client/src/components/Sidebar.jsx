
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-400 underline"
      : "hover:text-indigo-400";

  return (
    <div className="w-64 bg-gray-900 text-white h-full p-4">
      <h2 className="text-xl font-semibold mb-6">Panthera Dashboard</h2>

      <button
        className="w-full text-left py-2 px-3 hover:bg-gray-700 rounded"
        onClick={() => setOpen(!open)}
      >
        Data Analytics
      </button>

      {open && (
        <div className="ml-4 mt-2 flex flex-col space-y-2">
          <NavLink to="/market-view" className={linkClass}>
            Market View
          </NavLink>
          <NavLink to="/acquisition-view" className={linkClass}>
            Acquisition View
          </NavLink>
          <NavLink to="/urls" className={linkClass}>
            URLs
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
