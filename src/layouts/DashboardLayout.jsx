
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="min-h-screen flex-1 bg-slate-100 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;