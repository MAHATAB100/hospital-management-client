import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import BookAppointment from "../pages/Appointment/BookAppointment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Sidebar from "../components/Sidebar";

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
      {
        path:"sidebar",
        element:<Sidebar></Sidebar>
      }
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
    ],
  },
]);

export default router;