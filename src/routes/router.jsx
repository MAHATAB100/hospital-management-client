import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import BookAppointment from "../pages/Appointment/BookAppointment";
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
      }
    ],
  },
]);

export default router;
