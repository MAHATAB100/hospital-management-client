import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMenu,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            +
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              MediCare
            </h1>

            <p className="text-xs text-slate-500">
              Hospital & Healthcare
            </p>
          </div>
        </Link>


        
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Doctors
          </Link>

          <a
            href="#services"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#about"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </a>

        </nav>


        <div className="hidden items-center gap-4 md:flex">

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <FiPhone className="text-emerald-600" />
            <span>24/7 Emergency</span>
          </div>

          <Link
            to="/login"
            className="rounded-lg border border-blue-600 px-5 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/book-appointment"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white transition hover:bg-emerald-700"
          >
            Book Appointment
          </Link>

        </div>


    
        <button className="rounded-lg p-2 text-2xl text-slate-700 md:hidden">
          <FiMenu />
        </button>

      </div>
    </header>
  );
};

export default Navbar;