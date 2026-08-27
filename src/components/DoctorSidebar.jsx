import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiFileText,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

const DoctorSidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      path: "/doctor/dashboard",
      icon: <FiHome />,
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: <FiCalendar />,
    },
    {
      name: "Patients",
      path: "/doctor/patients",
      icon: <FiUsers />,
    },
    {
      name: "Prescriptions",
      path: "/doctor/prescriptions",
      icon: <FiFileText />,
    },
    {
      name: "Profile",
      path: "/doctor/profile",
      icon: <FiUser />,
    },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-slate-200 bg-white p-5 lg:flex">

      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl font-bold text-white">
          +
        </div>

        <div>
          <h1 className="text-lg font-bold text-slate-800">
            MediCare
          </h1>

          <p className="text-xs text-slate-400">
            Doctor Portal
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="mt-8 flex-1 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-100"
                  : "text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Doctor */}
      <div className="border-t border-slate-100 pt-5">

        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
            DR
          </div>

          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-bold text-slate-800">
              Dr. Sarah Ahmed
            </p>

            <p className="truncate text-xs text-slate-500">
              Cardiologist
            </p>
          </div>
        </div>

        <button className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition hover:bg-red-50 hover:text-red-600">
          <FiLogOut />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default DoctorSidebar;