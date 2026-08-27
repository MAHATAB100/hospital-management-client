import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import DoctorDashboardLayout from "../layouts/DoctorDashboardLayout";

import Home from "../pages/Home/Home";
import BookAppointment from "../pages/Appointment/BookAppointment";

import PatientDashboard from "../pages/patient/PatientDashboard";
import MyAppointments from "../pages/patient/MyAppointments";
import Prescriptions from "../pages/patient/Prescriptions";
import Billing from "../pages/patient/Billing";
import Profile from "../pages/patient/Profile";

import DoctorDashboard from "../pages/doctor/DoctorDashboard";

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
        path: "dashboard",
        element: <DoctorDashboard />,
      },
    ],
  },
]);

export default router;