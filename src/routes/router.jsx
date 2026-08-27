import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import BookAppointment from "../pages/Appointment/BookAppointment";
import PatientDashboard from "../pages/patient/PatientDashboard";
import MyAppointments from "../pages/patient/MyAppointments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
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

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <h1>Dashboard Home</h1>,
      },
      {
        path: "patientDashboard",
        element: <PatientDashboard />,
      },
      {
        path: "appointments",
        element: <MyAppointments />,
      },
    ],
  },
]);

export default router;