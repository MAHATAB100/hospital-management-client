import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import DoctorDashboardLayout from "../layouts/DoctorDashboardLayout";

import Home from "../pages/Home/Home";
import Doctors from "../pages/Doctors/Doctors";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";

import BookAppointment from "../pages/Appointment/BookAppointment";

import PatientDashboard from "../pages/patient/PatientDashboard";
import MyAppointments from "../pages/patient/MyAppointments";
import Prescriptions from "../pages/patient/Prescriptions";
import Billing from "../pages/patient/Billing";
import Profile from "../pages/patient/Profile";

import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import DoctorAppointments from "../pages/doctor/DoctorAppointments";
import DoctorPatients from "../pages/doctor/DoctorPatients";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  // =========================
  // Main Website
  // =========================
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "doctors",
        element: <Doctors />,
      },

      {
        path: "services",
        element: <Services />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "book-appointment",
        element: <BookAppointment />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // =========================
  // Patient Dashboard
  // =========================
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <PatientDashboard />,
      },

      {
        path: "patientDashboard",
        element: <PatientDashboard />,
      },

      {
        path: "appointments",
        element: <MyAppointments />,
      },

      {
        path: "prescriptions",
        element: <Prescriptions />,
      },

      {
        path: "billing",
        element: <Billing />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  // =========================
  // Doctor Dashboard
  // =========================
  {
    path: "/doctor",
    element: <DoctorDashboardLayout />,
    children: [
      {
        index: true,
        element: <DoctorDashboard />,
      },

      {
        path: "dashboard",
        element: <DoctorDashboard />,
      },
      {
          path: "appointments",
         element: <DoctorAppointments />,
         },
         {
  path: "patients",
  element: <DoctorPatients />,
},
    ],
  },
]);

export default router;